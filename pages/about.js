import Link from "next/link";
import Navbar from '../components/nav'
import Image from 'next/image'
import Head from "next/head";

const About = () => {

    return <>
     <Head><title>About Page</title></Head>
        <div className="centerdiv">
        <Navbar/>
            <h1>Welcome To About Page</h1>
            <Image className="imgt" src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  width="200" height="200" alt="AboutIMage"></Image>
            <Link className="link2" href='/'>GO Main Page</Link>
        </div>
    </>
}

export default About;