import PropTypes from 'prop-types';

function UserData({ user }) {
    return (
        <li>
            <h3>{`${user.id} - ${user.first_name} ${user.last_name}`}</h3>
            <a href={`mailto:${user.email}`}>{user.email}</a>
        </li>
    )
}

UserData.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
}

export default UserData
