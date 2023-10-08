import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Employee from './pages/Employee';
import JobRequest from './pages/JobRequest';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="services" element={<Services />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='users' element={<Users />} />
                    <Route path='employee' element={<Employee />} />
                    <Route path='jobrequest' element={<JobRequest />} />
                </Route>
                
            </Routes>
        </Router>
    )
}

export default App;