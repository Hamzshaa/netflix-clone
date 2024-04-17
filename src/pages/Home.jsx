// https://netflix-clone-430w.onrender.com/

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RowList from "../components/Rows/RowList";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}
