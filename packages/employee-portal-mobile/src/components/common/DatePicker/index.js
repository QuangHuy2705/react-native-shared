import React, {useState, useRef} from 'react'
import Text from '~/ui/primitives/Text'
import {Calendar} from 'react-native-calendars'
import moment from 'moment'
import {TouchableOpacity} from 'react-native'
import {Transition, Transitioning} from 'react-native-reanimated'
import Icon from '~/ui/common/Icon'

const transition = (
	<Transition.Together>
		<Transition.In type='fade' durationMs={200} />
		<Transition.Change />
		<Transition.Out type='fade' durationMs={200}/>
	</Transition.Together>
)

export default function DatePicer(props) {
	const [calendarShown, setShown] = useState(false)
	const today = moment().valueOf() 
	const [date, setDate] = useState(today)
	const ref = useRef()
	const { 
		dateStringFormat = 'MMMM DD YYYY',
		minDate = '',
		maxDate = '',
		textLeft = '',
		onDateChange = () => {},
		enableSwipeMonths = true
	} = props

	const onDayPress = day => {
		onDateChange(day.timestamp)
		setDate(day.timestamp)
	}

	const renderHeader = date => {
		return <Text fontSize='16px' fontWeight={600}>{moment(date).format('MMMM YYYY')}</Text>
	}
	
	const renderArrow = (direction) => {
		return direction === 'left' ? <Icon name='chevron-left' /> : <Icon name='chevron-right' />
	}
	
	return (
		<Transitioning.View ref={ref} transition={transition} >
			<TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between'}} onPress={() =>{
				ref.current.animateNextTransition()
				setShown(!calendarShown)
			}}>
					{textLeft !== '' && (
						<Text>{textLeft}</Text>
					)}
					<Text color={calendarShown ? '#F15A22' : '#000000'} >{moment(date).format(dateStringFormat)}</Text>
			</TouchableOpacity>
			{calendarShown && (
				<Calendar
					theme={{todayTextColor: '#F15A22'}}
					style={{marginTop: 7}}
					markedDates={{
						[moment(date).format('yyyy-MM-DD')]: {selected: true, selectedColor: '#F15A22'},
					}}
					minDate={minDate}
					maxDate={maxDate}
					onDayPress={onDayPress}
					monthFormat={'yyyy MM'}
					renderArrow={renderArrow}
					renderHeader={renderHeader}
					onMonthChange={(month) => {console.log('month changed', month)}}
					hideExtraDays={true}
					selectedColor={'red'}
					firstDay={1}
					onPressArrowLeft={subtractMonth => subtractMonth()}
					onPressArrowRight={addMonth => addMonth()}
					disableAllTouchEventsForDisabledDays={true}
					enableSwipeMonths={enableSwipeMonths}
				/>	
			)}
		</Transitioning.View >
	)
}