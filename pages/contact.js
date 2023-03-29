import Link from "next/link";
import Navbar from '../components/nav'
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}

const Contact = ({ data }) => {

    return <>
        <Head><title>Contact Page</title></Head>
        <div className="centerdiv">
            <Navbar />
            <h1>Welcome To Contact Page</h1>
            {data.slice(0,5).map((curElm,index) => {
                return (
                    <Link href={`/posts/${curElm.id}`}>
                    <div className="center" key={index}>
                    <div className="postsdata">
                    <h3>{curElm.id}</h3>
                    
                    <h2>{curElm.title}</h2>
                    </div> 
                    </div> </Link>)
            })};
            <Link className="link2" href='/'>GO Main Page</Link>
        </div>

    </>
}

export default Contact;