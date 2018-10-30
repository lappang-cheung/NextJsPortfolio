import Link from 'next/link'

const Work = () => {
    return(
        <section id="work" className="sections">
            <span className="section-left">
                <h2 className="large-heading">Works</h2>
                <p className="small-heading">I build real value</p>
            </span>
            <span className="section-right">
                <div className="gallery">
                    <Link href="https://polar-ridge-58141.herokuapp.com"><a target="_blank">
                        <img src="static/images/portfolio.png" alt="portfolio"/>
                    </a></Link>
                    <Link href="https://nameless-beach-21204.herokuapp.com"><a target="_blank">
                        <img src="static/images/podcastfm.png" alt="podcast"/>
                    </a></Link>
                    <Link href="https://polar-ridge-58141.herokuapp.com"><a target="_blank">
                        <img src="static/images/devit.png" alt="devit"/>
                    </a></Link>
                    <Link href="https://expensifyreactredux.herokuapp.com/"><a target="_blank">
                        <img src="static/images/expensify.png" alt="expensify"/>
                    </a></Link>
                </div>
            </span>
        </section>
    )
}

export default Work