import { h } from 'preact';
import { css } from 'goober';

const TooltipWrapperClass =  css`
    position: relative;
`;

const TooltipClass = css`
    position: absolute;
    bottom: 40px;
    width: 240px; /* IE11 Messy Workaround */
    width: max-content;
    max-width: 240px;
    color: black;
    background-color: white;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
`;

const TooltipButton = ({tooltipText}) => {
    return (
        <span class={TooltipWrapperClass}>
            { tooltipText && <div class={TooltipClass}>{tooltipText}</div> }
            <img src="img/icon_tooltip.svg" alt="Tooltip Icon" />
        </span>
    );
}

export default TooltipButton;