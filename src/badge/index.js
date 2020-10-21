import { h } from 'preact';
import { css } from 'goober';
import TooltipButton from '../Tooltip/TooltipButton';

const BadgeClass = ({color, bgColor: backgroundColor}) => css({
	color,
	backgroundColor
});

const Badge = ({text, color, bgColor, tooltip}) => {
	return (
		<div class={ BadgeClass({ color, bgColor }) }>
			{text}
			<TooltipButton tooltipText={tooltip}></TooltipButton>
		</div>
	);
}

export default Badge;