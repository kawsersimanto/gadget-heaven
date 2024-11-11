import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default App;
