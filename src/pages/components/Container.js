import Navigation from './Navigation'
import Head from 'next/head'

const Container = (props)=>{
    return(
        <>
            <Head>
                <title>first next</title>
            </Head>
            <Navigation></Navigation>
            <div className="container">
                {props.children}
            </div>
        </>
    )
}
export default Container