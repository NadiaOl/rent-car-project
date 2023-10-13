
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from './Home/Home';
import { CarsList } from './CarsList/CarsList';
import { Favorite } from './Favorite/Favorive';


export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home />} />
                <Route path="catalog" element={<CarsList />} />
                <Route path="favorites" element={<Favorite />} />
            </Route>
        </Routes>
    )
}
