import { h } from 'preact';
import { css } from 'goober';
import TooltipButton from '../Tooltip/TooltipButton';

const BadgeWrapperClass = ({color, bgColor: backgroundColor}) => css({
	color,
	backgroundColor,
	display: "flex",
    flexFlow: "row nowrap",
	alignItems: "center",
	width: "max-content",
	maxWidth: "100%",
	borderRadius: "20px",
	padding: "6px",
	/* Temporary keyframes workaround as goober does not give keyframes export apparently */
	'@keyframes fadeIn': {
		from: {opacity: 0},
		to: {opacity: 1}
	},
	animation: "fadeIn 0.5s",
});

const BadgeTextClass = css`
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    margin: 0 6px; /* Can act as a flexbox grid pseudo gutter */
`;

const Badge = ({text, color, bgColor, tooltip}) => {
	return (
		<div class={ BadgeWrapperClass({ color, bgColor }) }>
			<span class={ BadgeTextClass }> {text} </span>
			{tooltip && <TooltipButton tooltipText={tooltip}></TooltipButton> }
		</div>
	);
}

export default Badge;