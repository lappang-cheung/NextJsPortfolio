import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Contact from '../components/Contact'

const index = () => {
    return(
        <Layout>
            <div className="container">
                <Hero />
                <Intro />
                <Experience />
                <Work />
                <Contact />
            </div>
        </Layout>
    )
}

export default index