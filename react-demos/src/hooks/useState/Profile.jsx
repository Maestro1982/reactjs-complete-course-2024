import { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          placeholder='change name'
          value={profile.name}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type='text'
          name='age'
          placeholder='change age'
          value={profile.age}
          onChange={onChange}
        />
      </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};
export default Profile;
