import {
  Route,
  Routes,
} from 'react-router-dom';

import { AppendData } from './component/data';
import Layout from './component/layout';
import Layout1 from './component/layout1';
import Layout2 from './component/layout2';
import { Navbar } from './component/navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AppendData />}></Route>
        <Route path="/layout" element={<Layout/>}></Route>
        <Route path="/layout1" element={<Layout1/>}></Route>
        <Route path="/layout2" element={<Layout2/>}></Route>
      </Routes>
    </>
  );
}

export default App;