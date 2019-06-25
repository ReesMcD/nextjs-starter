import Meta from '../components/meta/meta.component';
import Navbar from '../components/navigation/navbar.component';
import Base from './base.layout';

const Main = children => {
  return (
    <Base>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer />
    </Base>
  );
};
export default Main;
