import Link from 'next/link'

const Navbar = () => {
    return(
        <header>
            <nav>
                <input type="checkbox" name="checkbox" id="nav" className="hidden"/>
                <label htmlFor="nav" className="nav-btn">
                    <i></i>
                    <i></i>
                    <i></i>
                </label>
                <div className="logo">
                    <Link href="/">
                        <a>leo<span className="logo-highlight">cv</span></a>
                    </Link>
                </div>
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <Link href="#home"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="#intro"><a>Intro</a></Link>
                        </li>
                        <li>
                            <Link href="#experience"><a>Experience</a></Link>
                        </li>
                        <li>
                            <Link href="#work"><a>Work</a></Link>
                        </li>
                        <li>
                            <Link href="#contact"><a>Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar