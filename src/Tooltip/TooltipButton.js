import { h } from 'preact';
import { useState } from 'preact/hooks'
import { css } from 'goober';
import Tooltip from './Tooltip';
import TooltipIcon from '../icons/TooltipIcon';

const TooltipWrapperClass =  css`
    display: inline-block;
    position: relative;
    width: 21px; /* icon sizes */
    height: 21px;
    margin: 0 6px;
`;

// Possible TODOS? Not mentioned in spec:
// - Make taps extend duration  of tooltip
// - Make clicking away not hide the tooltip
const TooltipButton = ({tooltipText}) => {
    const [tooltipInteraction, setTooltipInteraction] = useState("");

    const hideTooltip = () => {
        setTooltipInteraction("");
    }

    return (
        <span class={TooltipWrapperClass}>
            {tooltipInteraction && 
                <Tooltip 
                    tooltipText={tooltipText} 
                    hideTooltip={hideTooltip} 
                    tooltipInteraction={tooltipInteraction}
                />
            }
            <TooltipIcon
                onTouchEnd={()=>{ setTooltipInteraction("tap") }}
                onMouseEnter={()=>{ setTooltipInteraction("hover") }}
                onMouseLeave={()=>{ setTooltipInteraction("") }}
            />
        </span>
    );
}

export default TooltipButton;