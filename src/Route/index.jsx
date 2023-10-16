import React from 'react';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes } from './AuthRoute'

import Loader from '../Layout/Loader';
import LayoutRoutes from '../Route/LayoutRoutes';


const Routers = () => {

        useEffect(() => {
                let abortController = new AbortController();
                console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
                console.disableYellowBox = true;
                return () => {
                        abortController.abort();
                };

        }, []);

        return (
                <BrowserRouter basename={'/'}>
                        <>
                                <Suspense fallback={<Loader />}>
                                        <Routes>
                                                <Route exact path={'/'} element={<Navigate to={`${process.env.PUBLIC_URL}/login`} />} />
                                                <Route path={`/*`} element={<LayoutRoutes />} />
                                                {authRoutes.map(({ path, Component }, i) => (
                                                        <Route path={path} element={Component} key={i} />
                                                ))}
                                        </Routes>
                                </Suspense>
                        </>
                </BrowserRouter>
        );
};

export default Routers;