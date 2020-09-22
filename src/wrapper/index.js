import { h } from 'preact';
import {css } from 'goober';
import Badge from '../badge';

const WrapperClass = css`
    padding: 80px 30px;
    min-height: 100%;
    width: 100%;

    .product-item {
        
        width: 320px;
        box-shadow: 0px 0 10px #888888;
        padding: 15px;
        img {
            max-width: 100%;
        }
        h3 {
            font-size: 24px;
        }
        h4 {
            color: #aaa;
        }
    }
`;

const Wrapper = ({badgeProps}) => {
    return (<div class={WrapperClass}>
		<div class="product-item">
            <img src="img/jacket.png" />
            <Badge {... badgeProps} />
            <h3>Long Down Parka</h3>
            <h4>Winter Jackets</h4>
        </div>
	</div>);
}
export default Wrapper;