import Router from "next/router";

const Users = ({users})=>{
    return(
        <ul className="list-group">
            {
                users.map((user,index)=>(
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index} onClick={e => Router.push('/users/[id]',`/users/${user.id}`)}>
                        <div>
                            <h5>
                                {user.first_name} {user.last_name}
                            </h5>
                            <p>Email: {user.email}</p>
                        </div>
                        <img src={user.avatar} className="rounded-circle"  alt={user.first_name + user.last_name}/>
                    </li>
                ))
            }
        </ul>
    )
}
export default Users