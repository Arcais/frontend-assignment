import { h } from 'preact';
import { css } from 'goober';

const TooltipWrapperClass =  css`
    position: relative;
`;

const TooltipClass = css`
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translate(-50%, 0); /* Hacky-ish tooltip centering solution */
    width: 240px; /* IE11 Messy Workaround */
    width: max-content;
    max-width: 240px;
    color: black;
    background-color: white;
    text-align: center;
    padding: 10px;
    border: 1px solid black;

    /* TODO: Find a better way to do this (maybe before and after overlapping?) */
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: calc(50% - 6px); /* Offsetting the arrow by 50% of its size to center it */
        width: 12px;
        height: 12px;
        background-color: white;
        transform: translateY(-6px) rotate(45deg);
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 0px;
    }
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