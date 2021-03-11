import { useRouter } from "next/router";
import fetch from 'isomorphic-fetch'
import Container from '../components/Container'

const User = ({user})=>{
    const router = useRouter()
    console.log(user)
    const {id} = router.query

    return (
        <Container>
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>ID: {user.id}</h2>
                            <img
                                src={user.avatar}
                                alt={user.first_name + " " + user.last_name}
                                className="rounded-circle"
                            />
                        </div>
                        <div className="card-body text-center">
                            <h3>
                                {user.id}. {user.first_name} {user.last_name}
                            </h3>
                            <p>Email: {user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
User.getInitialProps = async (ctx) =>{
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const dataList = await res.json()
    console.log(dataList)
    return {
        user: dataList.data
    }
}

export default User