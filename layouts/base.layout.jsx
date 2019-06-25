import Meta from '../components/meta/meta.component';

const Base = children => {
  return (
    <div>
      <Meta />
      {children}
    </div>
  );
};

export default Base;
