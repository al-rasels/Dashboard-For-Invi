<<<<<<< HEAD
// import { useState } from "react";
// import Welcome from "./components/Welcome";
// import Ecommerce from "./pages/Ecommerce";
=======
import { useState } from "react";
import WelcomeCard from "./components/card/WelcomeCard";
import Statistics from "./components/card/Statistics";
import ProfitCard from "./components/card/ProfitCard";
import ExpenseCard from "./components/card/ExpenseCard";
import GeneratedLeadsCard from "./components/card/GeneratedLeadsCard";
import EarningsReportCard from "./components/card/EarningsReportCard";
import TransactionsCard from "./components/card/TransactionsCard";
>>>>>>> 0254b0caf2c1553429203424b84c7dd6fb871a18

// export default function App() {
//   return (
//     <>
//       <h1>sfh</h1>
//       <Welcome></Welcome>
//     </>
//   );
// }

// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import Ecommerce from "./pages/Ecommerce";

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
<<<<<<< HEAD
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={sidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
=======
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <WelcomeCard />
      <Statistics />
      <ProfitCard />
      <ExpenseCard />
      <GeneratedLeadsCard />
      <EarningsReportCard />
      <TransactionsCard />

>>>>>>> 0254b0caf2c1553429203424b84c7dd6fb871a18
    </div>
  );
}

export default App;
