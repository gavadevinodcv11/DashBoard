import React from 'react';
import Sidebar from './Components/sidebar';
import Header from './Components/header';
import DashboardStats from './Components/dashboardStats';
import ActivityChart from './Components/activityChart';
import Goals from './Components/goals';
import RecentOrders from './Components/recentOrders';
import CustomerFeedback from './Components/customerFeedback';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          <h1>Dashboard</h1>
          <DashboardStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <ActivityChart />
            <Goals />
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
