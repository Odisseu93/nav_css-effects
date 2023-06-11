import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.tsx';
import * as C from './styles/globals.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<C.GlobalsStyles />
		<App />
	</React.StrictMode>,
);
