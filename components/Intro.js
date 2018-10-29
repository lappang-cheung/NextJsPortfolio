const Intro = () => {
    return(
        <section id="intro" className="sections">
            <span className="section-left">
                <h2 className="large-heading">Intro</h2>
                <p className="small-heading">What I am all about</p>
            </span>
            <span className="section-right">
                <p className="info">
                    An ambitious developer, who is seeking for new opportunities and rapid growth. Has 2 years of web development and 3years of Infrastructure support along with some DevOps experience.
                    Along with the experience of working with external/internal clients in Agile and waterfall environments.
                </p>
                <p className="info"><strong>Here is my technology stack:</strong></p>
                <h4 className="small-heading"><i className="fa fa-code" aria-hidden="true"></i> Front-End:</h4>
                <p className="info tech">JavaScript ES5/ES6, NextJs, ReactJs, Apollo, HTML5, CSS3, CSS Grid, Bootstrap, BEM</p>
                <h4 className="small-heading"><i className="fa fa-database" aria-hidden="true"></i> Back-End:</h4>
                <p className="info tech">NodeJs, ExpressJs, GraphQL, MongoDB, Postgresql, MongoDB, Firebase, Prisma, Java Server Pages</p>
                <h4 className="small-heading"><i className="fa fa-cloud" aria-hidden="true"></i> Cloud Hosting:</h4>
                <p className="info tech">Heroku, Google App Engine, AWS EC2</p>
            </span>
        </section>
    )
}

export default Intro