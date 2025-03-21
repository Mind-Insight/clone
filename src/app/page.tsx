import Hero from "@/components/MainPage/Hero";
import Help from "@/components/MainPage/Help/Help";
import Steps from "@/components/MainPage/Steps/Steps";
import Questions from "@/components/MainPage/Questions/Questions";
import ConnectionBlock from "@/components/MainPage/Connection/ConnectionBlock";
import Fonds from "@/components/MainPage/Fonds/Fonds";
import Main from "@/components/MainPage/Main/Main"
import About from "@/components/MainPage/About/About";
import Footer from "@/components/MainPage/Footer";
import Header from "@/components/MainPage/Header";

export default function Home() {
  return (
    <div style={{backgroundColor: "#f6f6f6"}}>
    <Header></Header>
    {/* <Hero></Hero> */}
    {/* <Help></Help> */}
    {/* <Steps></Steps> */}
    {/* <Main></Main> */}
    {/* <ConnectionBlock></ConnectionBlock> */}
    {/* <Fonds></Fonds> */}
    {/* <Questions></Questions> */}
    {/* <Footer></Footer> */}
    {/* <About></About> */}

    <Hero></Hero>
    <Help></Help>
    <Steps></Steps>
    <Main></Main>
    <ConnectionBlock></ConnectionBlock>
    <Fonds></Fonds>
    <About></About>
    <Questions></Questions>
    <Footer></Footer>
    </div>
  );
}
