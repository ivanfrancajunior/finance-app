import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AmountContextProvider } from "./context/amountContext.tsx";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transations", () => {
      return [
        {
          id: 1,
          title: "Transatiion 1 ",
          amount: 50,
          type: "income",
          category: "food",
          created: new Date(),
        },
      ];
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AmountContextProvider>
      <App />
    </AmountContextProvider>
  </React.StrictMode>
);
