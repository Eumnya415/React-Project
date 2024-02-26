import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams();
    const profile = params.id;
    return (
        <div>
            <h1>사용자 프로필</h1>
            <p>profile id : {profile}</p>
        </div>
    );
};

export default Profile;