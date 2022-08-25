import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <main>
      <Navbar />
      <section>{props.children}</section>
    </main>
  );
};

export default Layout;
