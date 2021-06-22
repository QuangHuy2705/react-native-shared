import React, { PureComponent } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { withTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';

class Icon extends PureComponent {

	onPress = () => {
		const {onClick} = this.props
		onClick && onClick()
	}

	render() {
		const { theme, color: _color, onClick, ...rest } = this.props;

		const color = _color || theme.colors.icon;
		
		return (
      <>
				{onClick ? (
					<TouchableOpacity onPress={this.onPress}>
						<MaterialIcon color={color} {...rest} />

					</TouchableOpacity>
				) : (
					<MaterialIcon color={color} {...rest} />
				)}

      </>

		);
	}
}

Icon.defaultProps = {
	size: 24
};

export default withTheme(Icon);
