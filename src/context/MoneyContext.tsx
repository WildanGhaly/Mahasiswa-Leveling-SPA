import React, { createContext, useState, useContext, ReactNode } from "react";

// Membuat tipe untuk context state
type MoneyContextType = {
  moneyData: { points: number; money: number };
  setMoneyData: React.Dispatch<React.SetStateAction<{ points: number; money: number }>>;
};

// Membuat context
const MoneyContext = createContext<MoneyContextType | undefined>(undefined);

// Membuat tipe untuk props MoneyProvider
type MoneyProviderProps = {
  children: ReactNode;
};

// Membuat provider dengan tipe props
export const MoneyProvider: React.FC<MoneyProviderProps> = ({ children }) => {
  const [moneyData, setMoneyData] = useState({ points: 0, money: 0 });

  return (
    <MoneyContext.Provider value={{ moneyData, setMoneyData }}>
      {children}
    </MoneyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMoney = () => {
  const context = useContext(MoneyContext);
  if (!context) {
    throw new Error("useMoney must be used within a MoneyProvider");
  }
  return context;
};
