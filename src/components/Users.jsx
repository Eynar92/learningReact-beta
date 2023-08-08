import PropTypes from 'prop-types';
import UserData from "./UserData"

function Users({ usersData }) {
    return (
        <div>
            <h2 className="read-the-docs">Lista de Usuarios</h2>
            {usersData.length == 0 && <h4>No hay usuarios para mostrar</h4>}
            {usersData.length > 0 && (
                <ul>
                    {usersData.map(user => <UserData key={user.id} user={user} />)}
                </ul>
            )}
        </div>
    )
}

Users.propTypes = {
    usersData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            first_name: PropTypes.string,
            last_name: PropTypes.string,
            email: PropTypes.string,
        })
    ).isRequired,
}
export default Users