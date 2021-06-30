import React, { useState, useRef } from 'react'
import Text from '~/ui/primitives/Text'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import Touchable from '~/ui/primitives/Touchable';
import View from '~/ui/primitives/View';

import { Transition, Transitioning } from 'react-native-reanimated'
import Icon from '~/ui/common/Icon'

const transition = (
	<Transition.Together>
		<Transition.In type='fade' durationMs={200} />
		<Transition.Change />
		<Transition.Out type='fade' durationMs={200} />
	</Transition.Together>
)

export default function DatePicer(props) {
	const {
		dateStringFormat = 'MMMM DD, YYYY',
		minDate = moment().format('yyyy-MM-DD'),
		maxDate = '',
		date = moment().valueOf(),
		textLeft = '',
		onDateChange = () => { },
		enableSwipeMonths = true,
		inputStyle = {
			paddingVertical: 8,
			paddingHorizontal: 16,
			borderColor: '#A7A7A77A',
			borderBottomWidth: 0.5
		},
	} = props

	const [calendarShown, setShown] = useState(false)
	const ref = useRef()

	const onDayPress = day => {
		setShown(false);
		onDateChange(day.timestamp);
	}

	const renderHeader = date => {
		return <Text fontSize='14px' fontWeight={600}>{moment(date).format('MMMM YYYY')}</Text>
	}

	const renderArrow = (direction) => {
		return direction === 'left' ? <Icon name='chevron-left' /> : <Icon name='chevron-right' />
	}

	return (
		<Transitioning.View ref={ref} transition={transition} >
			<Touchable onPress={() => {
				ref.current.animateNextTransition()
				setShown(!calendarShown)
			}}>
				<View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, inputStyle]}>
					{textLeft !== '' && (
						<Text>{textLeft}</Text>
					)}
					<Text color={calendarShown ? '#F15A22' : '#000000'} >{moment(date).format(dateStringFormat)}</Text>
				</View>
			</Touchable>
			{calendarShown && (
				<View style={{ borderColor: '#A7A7A77A', paddingBottom: 8, borderBottomWidth: 0.5 }}>
					<Calendar
						theme={{
							fontSize: 14,
							todayTextColor: '#F15A22',
						}}
						style={{ marginTop: 4, }}
						markedDates={{
							[moment(date).format('yyyy-MM-DD')]: { selected: true, selectedColor: '#F15A22' },
						}}
						minDate={minDate}
						maxDate={maxDate}
						onDayPress={onDayPress}
						monthFormat={'yyyy MM'}
						renderArrow={renderArrow}
						renderHeader={renderHeader}
						onMonthChange={(month) => { console.log('month changed', month) }}
						hideExtraDays={true}
						selectedColor={'red'}
						firstDay={1}
						onPressArrowLeft={subtractMonth => subtractMonth()}
						onPressArrowRight={addMonth => addMonth()}
						disableAllTouchEventsForDisabledDays={true}
						enableSwipeMonths={enableSwipeMonths}
					/>
				</View>
			)}
		</Transitioning.View >
	)
}