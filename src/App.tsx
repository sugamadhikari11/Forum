import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../../frontend/src/pages/Home';
import Login from '../../frontend/src/pages/Login';
import Signup from '../../frontend/src/pages/Signup';
import Activate from '../../frontend/src/pages/Activate';
import ResetPassword from '../../frontend/src/pages/ResetPassword';
import ResetPasswordConfirm from '../../frontend/src/pages/ResetPasswordConfirm';

import Layout from './hocs/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
