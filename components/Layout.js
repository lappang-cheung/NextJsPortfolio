import Head from 'next/head'
// import Navbar from './Navbar'

const Layout = props => {
    return(
        <>
            <Head>
                <title>Portfolio - Leo Cheung</title>
                <link href="/static/main.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            {/* <Navbar /> */}
            {props.children}
        </>
    )
}

export default Layout