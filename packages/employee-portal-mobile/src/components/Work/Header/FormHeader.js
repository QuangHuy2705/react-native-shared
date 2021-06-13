import React from 'react';

import AppFormHeader from '~/components/common/Header/FormHeader';

import CloseIcon from '~/ui/common/Icon/Svg/CloseIcon';

function FormHeader({ subTitle, children, isFormValid, onSubmit, onClose }) {
	return (
		<AppFormHeader
			subTitle={subTitle}
			leftAction={{ icon: CloseIcon, onPress: onClose }}
			rightAction={{ isActive: isFormValid, text: 'Add', onPress: onSubmit }}
		>
			{children}
		</AppFormHeader>
	);
}

export default FormHeader;
