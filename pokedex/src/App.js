import './App.css';
import { Outlet } from 'react-router-dom';

import Footer from './componant/footer.js';
import Header from './componant/header';

function App() {
  return (
    <div className="App m-3">
      <header>
        <Header/>
      </header>
      <body>
        <Outlet/>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
