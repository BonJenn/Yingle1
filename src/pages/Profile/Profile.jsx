import React from 'react'
import PostSide from '../home/PostSide/PostSide.jsx'
import ProfileCard from '../home/profileSide/ProfileCard/ProfileCard.jsx'
import RightSide from '../home/RightSide/RightSide.jsx'

import ProfileLeft from './ProfileLeft/ProfileLeft'
import './Profile.css'

const Profile = () => {
    return (
        <div className="Profile">
            <ProfileLeft/>

            <div className="Profile-Center">
                <ProfileCard/>
                <PostSide/>
                
            </div>

            <RightSide/>
        </div>
    )
}

export default Profile