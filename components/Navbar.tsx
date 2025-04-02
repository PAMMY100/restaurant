import Link from "next/link"

const Navbar = () => {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/localities'>Localities</Link>
          </li>
          <li>
            <Link href='/developer'>Developer</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar