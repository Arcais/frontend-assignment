import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks'
import { glob, setup } from 'goober';
import Header from './header';
import Wrapper from './wrapper';
setup(h); 

glob`
html, body {
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	background: #FAFAFA;
	font-family: 'Helvetica Neue', arial, sans-serif;
	font-weight: 400;
	color: #444;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

* {
	box-sizing: border-box;
}

#app {
	height: 100%;
}
`;

const inputs = [
    {
        text: "Recommended",
        color: "#FAC660",
        bgColor: "#000000",
        tooltip: "This item has an average of at least 4 stars."
    },
    {
        text: "Popular",
        color: "#2E3436",
        bgColor: "#EEEEEE",
        tooltip: "This item is one of the 10% most popular items this week."
    },
    {
        text: "This season Winterjacket's editors choice",
        color: "#3CC6A7",
        bgColor: "#000000"
    }
]

const App = () => {
	const [index, setIndex] = useState(0);
	const nextBadge = () => {
		setIndex((index + 1 ) % inputs.length);
	};

	const badgeProps = inputs[index];
	return (<div id="app">
        <Header nextBadge={nextBadge} />
        <Wrapper badgeProps={badgeProps} />
    </div>);
};

render(<App></App>, document.body);