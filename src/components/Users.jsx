
function Users({ usersData }) {
    return (
        <div>
            <h2 className="read-the-docs">Lista de Usuarios</h2>
            <ul>
                {
                    usersData.map((user) => {
                        return (
                            <li key={user.id}>
                                <h3>{`${user.id} - ${user.first_name} ${user.last_name}`}</h3>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users