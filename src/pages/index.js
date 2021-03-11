import Container from './components/Container'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Users from './components/Users'

const Index = ({users})=>{
    return (
        <Container>
            <Head>
                <title>first next-index</title>
            </Head>
            <h1>index</h1>
            <Users users={users}></Users>
        </Container>
    )
}

Index.getInitialProps = async (ctx) =>{
    const res = await fetch('https://reqres.in/api/users')
    const dataList = await res.json()
    return {
        users: dataList.data
    }
}

export default Index