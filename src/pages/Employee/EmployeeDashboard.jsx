import {useState} from 'react';
import SideBar from '../../components/Sidebar';
import Dashboard from './Dashboard';

const EmployeeDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <Dashboard />;
            case "attendance":
                return <div> My Attendance Records</div>;
            case "leave-requests":
                return <div> My Leave Requests</div>;
            default:
                return <Dashboard/>;

        }
    };

    return (
        <div className = "flex min-h-screen bg-gray-100">
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className= "flex-1 p-8">{renderContent}</div>
        </div>
    );
};

export default EmployeeDashboard;


