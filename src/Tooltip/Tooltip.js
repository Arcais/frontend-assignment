import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks'
import { css } from 'goober';

const TooltipClass = css`
    position: absolute;
    bottom: 40px;
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

    /* TODO Find a better way to do this (maybe before and after overlapping?) */
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: calc(50% - 7px); /* Offsetting the arrow by 50% of its size to center it */
        width: 14px;
        height: 14px;
        background-color: white;
        transform: translateY(-7px) rotate(45deg);
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 0px;
    }
`;

const Tooltip = ({tooltipText, hideTooltip, activatedByTap}) => {
    // Using different component with useEffect to prevent memory leaks
    useEffect(() => {
        if(activatedByTap) {
            const tooltipClearTimeout = setTimeout(() => hideTooltip(), 10000);
            return () => clearTimeout(tooltipClearTimeout);
        }
    },[]);
    return <div class={TooltipClass}>{tooltipText}</div>;
}

export default Tooltip;