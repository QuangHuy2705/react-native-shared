import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';

class Icon extends PureComponent {
	onClick = () => {
		const {onClick} = this.props
		onClick && onClick()
	}

	render() {
		const { name: _name, ...rest } = this.props;

		// To be compatible with RNVectorIcons, dashes (-) need to be replace by underscores(_)
		const name = _name.replace(/-/g, '_');

		return (
			
			<MaterialIcon onClick={this.onClick} icon={name} {...rest} />
		);
	}
}

Icon.defaultProps = {
	size: 24
};

export default Icon;
