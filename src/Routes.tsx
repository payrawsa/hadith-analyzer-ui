import React, { lazy, Suspense, useEffect, useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import Header from './Header'

const Rawis = lazy(() => import('./Rawis'))
const Analyze = lazy(()=> import ('./Analyze'))
const Hadith = lazy(()=> import ('./Hadith'))


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Suspense
                fallback={<div>Loading...</div>}
            >
                <Routes>
                    <Route path="/" element={<><Header title="Analyze" /><Analyze /></>}>
                    </Route>
                    <Route path="/rawis" element={<><Header title="Rawis"/><Rawis /></>}>
                    </Route>
                    <Route path="/hadiths" element={<><Header title="Hadiths"/><Hadith /></>}>
                    </Route>
                </Routes>

            </Suspense>
        </BrowserRouter>
    )
}
