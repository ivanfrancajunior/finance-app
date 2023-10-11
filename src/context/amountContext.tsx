import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

export const AmoutContext = createContext({}) as any;

export const AmountContextProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState(1000);
  const [outcome, setOutcome] = useState(500);
  const [total, setTotal] = useState(500);
  const [transations, setTransation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/transations");

      setTransation(response.data);
    };

    fetchData();
  }, []);

  return (
    <AmoutContext.Provider
      value={{
        income,
        setIncome,
        outcome,
        setOutcome,
        total,
        setTotal,
        toggle,
        setToggle,
      }}
    >
      {children}
    </AmoutContext.Provider>
  );
};
