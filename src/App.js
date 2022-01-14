import { Route,Routes } from 'react-router-dom';
import './App.css';
import MovieList from './Component/MovieList';

import MovieDescription from './MovieDescription';

function App ()  {
  
  return  (
      <div  className="App"> 
      <Routes>
        <Route path ="/" element ={<MovieList />} />
        <Route path ="/desc" element ={<MovieDescription />} />
        
      </Routes>
      </div>
     );
    
  }
export default App;
