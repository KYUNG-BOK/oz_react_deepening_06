import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../database/mockData';

// 1. user.name을 클릭하면 /admin/users/:id로 이동되어야 합니다.

function Users() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>상태</th>
            <th>가입 일자</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/admin/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
