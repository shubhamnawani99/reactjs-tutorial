import React, {useContext} from 'react'
import UserContext from '../context/UserContext'   

function Profile() {
    const {user} = useContext(UserContext)
    if (user) {
        return (
            <div>
                <h2>Profile</h2>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Profile</h2>
            <p>No user logged in</p>
        </div>
    )
}

export default Profile  