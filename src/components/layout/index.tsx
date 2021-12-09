import Header from "./header";
import Footer from "./footer";

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer copy="&copy;2021 ACENSI" />
    </>
  );
};

export default Layout;
