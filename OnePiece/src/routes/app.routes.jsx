import {Route, Routes} from 'react-router-dom';

import {Chopper} from '../pages/chopper';


export function AppRouter() {
    return(
        <Routes>
            <Route path='/' element={<Chopper />} />
        </Routes>
    )
}