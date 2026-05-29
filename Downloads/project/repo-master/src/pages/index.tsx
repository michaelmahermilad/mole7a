import Image from "next/image";
import { Zain } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import { observer } from "mobx-react-lite";
import languageStore from "@/Mobx/Store/Languagestore";
import NavbarRed from "@/Components/NavbarRed";
 
const ZainI = Zain({
  weight: "400",
  subsets: ["arabic"],
});

const Home = observer(() => {
  const translations = {
    en: { greeting: "عربي", title: "Micterest Home" },
    ar: { greeting: "English", title: "الصفحة الرئيسية لمكتيرست" },
  };
  return (
    <>
    
    </>
  );
});
export default Home;
