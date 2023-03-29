import Link from "next/link";


const Navbar = () => {

  return <>
    <nav>
      <Link className="link" href="/">
        Home
      </Link>

      <Link className="link" href="/about">
        About
      </Link>
      <Link className="link" href="/contact">
        Contact
      </Link>
    </nav>
  </>
}
export default Navbar;