import './App.css';
import Nav from './navigation/Nav';
import Products from './products/Products';
import Recommended from './recommended/Recommended';
import Sidebar from './sideBar/Sidebar';

function App() {
  return (
    <>
      <Nav />
      <Recommended />
      <Products />
      <Sidebar />
    </>
  );
}

export default App;
