import './App.css';
  //1. React Router의 `BrowserRouter`를 설정해야 합니다.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';
import Users from './pages/admin__users/Users';
import UserDetail from './pages/admin__users/UserDetail';
import Settings from './pages/admin__settings/Settings';
import NotFound from './pages/admin__notfound/NotFound';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/*2. 메인 페이지에 Home 컴포넌트를 렌더링 해야 합니다.*/}
        <Route path="/" element={<Home />} />

        {/* /admin` 경로에 Layout 레이아웃을 적용합니다. */}
        
        <Route path="/admin" element={<Layout />}>
          {/* 3. /admin에서 Dashboard를 렌더링 해야 합니다. 이는 모든 /admin 경로에서 보입니다. */}
          <Route index element={<Dashboard />} />

          {/* /admin/users에서 Users를 렌더링 해야 합니다. */}
          <Route path="users" element={<Users />} />
          {/* /admin/users/:id에서 UsersDetail를 렌더링 해야 합니다. */}
          <Route path="users/:id" element={<UserDetail />} />
          {/* /admin/settings에서 Settings를 렌더링 해야 합니다. */}
          <Route path="settings" element={<Settings />} />

          {/* /admin 이하 잘못된 주소 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
