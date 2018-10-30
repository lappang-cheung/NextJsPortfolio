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
                        <span><Link href="https://www.google.ca/maps/place/Aurora,+ON/@43.9962057,-79.4639734,14z/data=!3m1!4b1!4m5!3m4!1s0x882ad392943890c7:0x5037b28c7231a30!8m2!3d44.00648!4d-79.450396"><a target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i> Aurora, Ontario</a></Link></span>
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