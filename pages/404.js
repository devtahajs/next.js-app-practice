import { useRouter } from "next/router"
import { useEffect } from "react";


const Contact = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, [])

return <>
    <div className="centerdiv">
        <h1>(404) WE ARE SORRY - THIS PAGE IS NOT THERE</h1>
        <button className="link2" href='/'>GO Main Page</button>
    </div>
</>
}

export default Contact;