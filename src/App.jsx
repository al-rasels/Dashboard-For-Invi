import { useState } from "react";
import WelcomeCard from "./components/card/WelcomeCard";
import ProfitCard from "./components/card/ProfitCard";
import ExpenseCard from "./components/card/ExpenseCard";

export default function App() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <WelcomeCard />
      <ProfitCard />
      <ExpenseCard />
    </div>
  );
}
