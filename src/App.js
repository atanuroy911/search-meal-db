import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import API from './components/API/API';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import BrowseResults from './components/BrowseResults/BrowseResults';
import BrowseCategory from './components/BrowseCategory/BrowseCategory';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App container-green">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/categories/:strCategory' element={<BrowseCategory/>}></Route>
        <Route path='/details/:idMeal' element={<MealDetail/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/api' element={<API></API>}></Route>
        <Route path='/search' element={<BrowseResults/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
