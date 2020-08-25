import React from 'react';

function UserProfile({ user, logOff }) {
  console.log("userProfile", user.fullname)
  return (
    <div>
      <h1>UserProfile</h1>
      <p>{`Hi ${user.fullname}. Welcome back`}</p>
      <button
        onClick={() => logOff()}
      >Log off
      </button>
    </div>
  )
};

export default UserProfile;
