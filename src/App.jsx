
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import WelcomeCard from "./components/card/WelcomeCard";
import Statistics from "./components/card/StatisticsCard";
import ProfitCard from "./components/card/ProfitCard";
import ExpenseCard from "./components/card/ExpenseCard";
import EarningsReportCard from "./components/card/EarningsReportCard";
import GeneratedLeadsCard from "./components/card/GeneratedLeadsCard";
import TransactionsCard from "./components/card/TransactionsCard";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "email":
        return <Email />;
      case "ecommerce":
        return <Ecommerce />;
      default:
        return <Dashboard />;
    }
  };

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <WelcomeCard />
      <Statistics />
      <ProfitCard />
      <ExpenseCard />
      <GeneratedLeadsCard />
      <EarningsReportCard />
      <TransactionsCard />
    </div>
  );
}

export default App;
