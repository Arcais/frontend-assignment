import { h } from 'preact';
import { useState } from 'preact/hooks'
import { css } from 'goober';
import Tooltip from './Tooltip';

const TooltipWrapperClass =  css`
    position: relative;
`;

// Possible TODOS? Not mentioned in spec:
// - Make taps extend duration  of tooltip
// - Make clicking away not hide the tooltip
const TooltipButton = ({tooltipText}) => {
    const [displayTooltip, setDisplayTooltip] = useState(false);
    const [iconTapped, setIconTapped] = useState(false);

    const hideTooltip = () => {
        setDisplayTooltip(false);
        setIconTapped(false);
    }
    const showTooltip = () => {
        setDisplayTooltip(true)
    }

    return (
        <span class={TooltipWrapperClass}>
            {(displayTooltip && tooltipText) && 
                <Tooltip 
                    tooltipText={tooltipText} 
                    hideTooltip={hideTooltip} 
                    activatedByTap={iconTapped}
                />
            }
            <img 
                src="img/icon_tooltip.svg" 
                alt="Tooltip Icon"
                onTouchEnd={()=>{ setIconTapped(true); showTooltip(); }}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
            />
        </span>
    );
}

export default TooltipButton;