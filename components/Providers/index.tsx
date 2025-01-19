'use client';

import React from 'react';
import store from '@/hooks/store';
import { Provider } from 'react-redux';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                <main>{children}</main>
            </Provider>
        </>
    );
};

export default Providers;