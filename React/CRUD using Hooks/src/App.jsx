import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import UserDetailsPage from './components/UserDetailsPage'
import UserDetailsForm from './components/UserDetailsForm'
import UserDetailsList from './components/UserDetailsList'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
        <Route path="/user/form" element={ <UserDetailsForm /> } />
        <Route path="/user/list" element={ <UserDetailsList /> } />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App