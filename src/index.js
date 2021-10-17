/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './utils/locale';



import App from './App';
import './index.css';
import { configStore } from './state/store';
import { theme } from './styles';

const { store } = configStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
