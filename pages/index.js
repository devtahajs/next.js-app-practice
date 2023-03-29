
import Navbar from '../components/nav'
import ImgSec from '@/components/imgsec';
import Footer from '@/components/footer';
import Head from "next/head";

const Home = () => {

    return <>
    <Head><title>Home Page</title></Head>
        <div className="centerdiv">
            <Navbar />
            <h1>Welcome To Home Page</h1>
            <div className='container'>
            <ImgSec/>
            <ImgSec/>
            <ImgSec/>
            <ImgSec/>
            <ImgSec/>
            <ImgSec/>
            </div>
      <Footer/>
        </div>
    </>
}

export default Home;