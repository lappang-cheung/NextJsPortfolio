import Link from 'next/link'

const Contact = () => {
    return(
        <section id="contact" className="sections">
            <span className="section-left">
                <h2 className="large-heading">Contact</h2>
                <p className="small-heading">Hire me</p>
            </span>
            <span className="section-right">
                <div className="information">
                    <div className="location">
                        <h3>Location</h3>
                        <span><Link href="https://www.google.ca/maps/place/Aurora+GO/@43.9993742,-79.4594247,17z/data=!4m5!3m4!1s0x882ad3e588a51dd9:0xcd3bf60dd6ad3763!8m2!3d44.000748!4d-79.4597197"><a target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i> Aurora, Ontario</a></Link></span>
                    </div>
                    <div className="email">
                        <h3>Email</h3>
                        <span><Link href="mailto:lappangcheung@gmail.com"><a><i className="fa fa-envelope-o" aria-hidden="true"></i> lappangcheung</a></Link></span>
                    </div>
                    <div className="web">
                        <h3>Web</h3>
                        <span><Link href="http://www.leocheung.ca"><a><i className="fa fa-globe" aria-hidden="true"></i> leocheung.ca</a></Link></span>
                    </div>
                </div>
            </span>
        </section> 
    )
}



export default Contact