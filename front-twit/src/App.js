import { Link, Outlet } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1 className="text-center">Arnaud's tweets</h1>
      </Link>

      <Outlet />

      <div className="text-center fixed-bottom">
        <div
          className="rounded-pill px-3 py-1 mb-2 bg-info-subtle d-inline-block"
        >
          Créé par Arnaud Roussel
        </div>
      </div>
    </div>
  );
}

export default App;
