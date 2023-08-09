import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'styles/index.css';

const options = {
	position: positions.TOP_RIGHT,
	timeout: 4000,
	offset: '30px',
	transition: transitions.FADE
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</React.StrictMode>
);
