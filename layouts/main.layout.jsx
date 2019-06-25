import Meta from '../components/meta/meta.component';
import Navbar from '../components/navigation/navbar.component';
import Base from './base.layout';

export default ({ children }) => (
  <Base>
    <header>
      <Navbar/>
    </header>
    <main>
      { children }
    </main>
    <footer>

    </footer>
  </Base>

)