import Link from 'next/link'

const Hero = () => {
    return(
        <section id="home" className="home">
            <span className="hero">
                <h1 className="name">Leo<br/>Cheung</h1>
                <h4 className="job">JavaScript &amp; Front-End Developer</h4>
                <hr />
                <span className="social">
                    <span><Link href="https://github.com/lappang-cheung"><a target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></Link></span>
                    <span><Link href="https://www.linkedin.com/in/leo-lappang-cheung"><a target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></Link></span>
                    <span><Link href="https://angel.co/lemonjai"><a target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a></Link></span>
                </span>
            </span>
        </section>
    )
}

export default Hero