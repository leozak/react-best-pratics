import React from 'react';
import Avatar from '../atoms/Avatar';

const AvatarGroup = ({ users }) => {
  return (
    <div className="flex -space-x-2">
      {users.map((user, index) => (
        <Avatar key={index} src={`https://i.pravatar.cc/24?u=${user}`} alt={`User ${user}`} />
      ))}
    </div>
  );
};

export default AvatarGroup;
