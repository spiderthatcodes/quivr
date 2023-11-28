import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './style';
import UserRow from '../components/UserRow';
import { useGetAllAccountsQuery } from '../app/authSlice';

// possible roles are: "customer", "shaper", "admin"

const UserList = () => {
    let { data } = useGetAllAccountsQuery();
    const navigate = useNavigate();
    let role = 'admin';
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if (role === 'customer') {
            navigate('/create-order');
        }
        if (data) {
            if (role === 'shaper') {
                let filtered = data.filter((item) => item.role === 'customer');
                setUserList(filtered);
            } else {
                setUserList(data);
            }
        }
    }, [data, navigate, role]);

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
