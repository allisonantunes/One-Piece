import {Route, Routes} from 'react-router-dom';

import {Chopper} from '../pages/chopper';
import {Zoro} from '../pages/Zoro';
import {Luffy} from '../pages/Luffy';
import {Nami} from '../pages/Nami';
import {Sanji} from '../pages/Sanji';




export function AppRouter() {
    return(
        <Routes>
            <Route path='/' element={<Chopper />} />
            <Route path='/zoro' element={<Zoro />} />
            <Route path='/luffy' element={<Luffy />} />
            <Route path='/nami' element={<Nami />} />
            <Route path='/sanji' element={<Sanji />} />


        </Routes>
    )
}