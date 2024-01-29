import './App.css';
import Nav from './navigation/Nav';
import Products from './products/Products';
import Recommended from './recommended/Recommended';
import Sidebar from './sideBar/Sidebar';

function App() {
  return (
    <>
      <Nav />
      <Products />
      <Sidebar />
      <Recommended />
    </>
  );
}

export default App;
