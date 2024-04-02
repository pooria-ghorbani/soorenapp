import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
    direction: 'rtl',
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </CacheProvider>
    </BrowserRouter>
);
