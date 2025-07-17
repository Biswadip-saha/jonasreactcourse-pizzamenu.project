import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return <h1>Hello, World</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// React older versions
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
