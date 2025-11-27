import { useState } from "react";
import WelcomeCard from "./components/card/WelcomeCard";
import Statistics from "./components/card/Statistics";
import ProfitCard from "./components/card/ProfitCard";
import ExpenseCard from "./components/card/ExpenseCard";
import GeneratedLeadsCard from "./components/card/GeneratedLeadsCard";
import EarningsReportCard from "./components/card/EarningsReportCard";
import TransactionsCard from "./components/card/TransactionsCard";

export default function App() {

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
