import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './style';
import UserRow from '../components/UserRow';

const mockData = [
    {
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe123',
        email: 'jd@test.com',
        phone_number: '1112224444',
        role: 'customer',
    },
    {
        first_name: 'Mike',
        last_name: 'Smith',
        username: 'janedoe123',
        email: 'ms@test.com',
        phone_number: '1112224444',
        role: 'shaper',
    },
    {
        first_name: 'Mark',
        last_name: 'Hamil',
        username: 'janedoe123',
        email: 'mh@test.com',
        phone_number: '1112224444',
        role: 'admin',
    },
];

// possible roles are: "customer", "shaper", "admin"

const UserList = () => {
    const navigate = useNavigate();
    let role = 'admin';
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if (role === 'customer') {
            navigate('/create-order');
        } else if (role === 'shaper') {
            let filtered = mockData.filter((item) => item.role === 'customer');
            setUserList(filtered);
        } else {
            setUserList(mockData);
        }
    }, [navigate, role]);

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>
                            {role === 'shaper' ? 'Customer Name' : 'User Name'}
                        </th>
                        {role === 'shaper' ? (
                            <>
                                <th>Orders In Progress</th>
                                <th>Completed Orders</th>
                            </>
                        ) : (
                            <th>User Type</th>
                        )}
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((item, index) => (
                        <UserRow
                            item={item}
                            role={role}
                            key={index}
                        />
                    ))}
                </tbody>
            </table>
        </Wrapper>
    );
};

export default UserList;
