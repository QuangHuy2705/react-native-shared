import React from 'react';

import AppFormHeader from '~/components/common/Header/FormHeader';

import CloseIcon from '~/ui/common/Icon/Svg/CloseIcon';

function DetailHeader({ subTitle, children, onClose }) {
	return (
		<AppFormHeader
			subTitle={subTitle}
			leftAction={{ icon: CloseIcon, onPress: onClose }}
		>
			{children}
		</AppFormHeader>
	);
}

export default DetailHeader;
