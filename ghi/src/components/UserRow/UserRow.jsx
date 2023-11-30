import React from 'react';

const UserRow = ({ item, role }) => {
    return (
        <tr>
            <td>
                {item.first_name} {item.last_name}
            </td>
            {role === 'shaper' ? (
                <>
                    {/* This is mock data and needs to be updated with dynamic values */}
                    <td>1</td>
                    <td>2</td>
                </>
            ) : (
                <td>{item.role}</td>
            )}
            <td>{item.email}</td>
            <td>{item.phone_number}</td>
        </tr>
    );
};

export default UserRow;
