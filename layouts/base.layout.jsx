import Navbar from '../components/navigation/navbar.component';

const Base = ({ children }) => {
  return (
    <div>
      <header />
      <main>{children}</main>
      <footer />
    </div>
  );
};
export default Base;
