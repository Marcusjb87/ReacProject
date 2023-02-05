import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi E-Commerce!!!"/>
    </div>
  );
}

export default App;
