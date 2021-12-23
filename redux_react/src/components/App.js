import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Home />}></Route>
        <Route path = '/:id' element = {<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;