import { h } from 'preact';
import { css } from 'goober';

const BadgeClass = ({color, bgColor: backgroundColor}) => css({
	color,
	backgroundColor
});

// props: {text, tooltip, bgColor, color}
const Badge = ({text, color, bgColor}) => {
	return (
		<div class={ BadgeClass({ color, bgColor }) }>
			{text}
			<img src="img/icon_tooltip.svg" alt="Tooltip Icon" />
		</div>
	);
}

export default Badge;