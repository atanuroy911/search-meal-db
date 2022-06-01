import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App container-green">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}>
          <Route path=':idCategory' element={<CategoryDetail></CategoryDetail>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
