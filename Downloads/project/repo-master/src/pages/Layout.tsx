import Image from "next/image";
import { Zain } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import { observer } from "mobx-react-lite";
import languageStore from "@/Mobx/Store/Languagestore";
import NavbarRed from "@/Components/NavbarRed";
import Footer from "@/Components/Footer";
 
const ZainI = Zain({
  weight: "400",
  subsets: ["arabic"],
});
interface MyComponentProps {
  children: React.ReactNode; // Now TypeScript knows children is allowed
}
const Home = observer(({children}:MyComponentProps ) => {
  
  return (
    <>

      <div
        dir={languageStore.language === "ar" ? "rtl" : "ltr"}
        className={`${ZainI.className} relative `}
      >
        <Navbar />
 <NavbarRed/>
{children}   
<Footer/>
   </div> 
    </>
  );
});
export default Home;
