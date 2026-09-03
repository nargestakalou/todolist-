import './App.css';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Ideas from './pages/ideas/Ideas';
import Work from './pages/work/Work';
import AllTask from './pages/allTask/AllTask';
import Favourites from './pages/favourites/Favourites';
import Personal from './pages/personal/Personal';
import AddNewItem from './pages/addNewItem/AddNewItem';
import EditItem from './pages/editIem/EditItem';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/alltask' element={<AllTask/>} />
      <Route  path='/ideas'   element={<Ideas/>} />
      <Route  path='/work'  element={<Work/>} />
      <Route  path='/favourites'  element={<Favourites/>} />
      <Route path='/personal'   element={<Personal/>} />
      <Route path='/addnewitem' element={<AddNewItem/>}   />
      <Route path='/editItem' element={<EditItem/>}   />

    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
