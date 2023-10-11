import { useContext } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./globals";
import Modal from "react-modal";
import { AmoutContext } from "./context/amountContext";
import NewTransationModal from "./components/NewTransationModal/NewTransationModal";

Modal.setAppElement("#root");
function App() {
  const { toggle, setToggle } = useContext(AmoutContext);
  const handleOpenModal = () => {
    setToggle(true);
    console.log(toggle);
  };
  const handleCloseModal = () => {
    setToggle(false);
    console.log(toggle);
  };
  return (
    <>
      <GlobalStyle />
      <Header handleOpenModal={handleOpenModal} />

      <Dashboard />
      <NewTransationModal onRequestClose={handleCloseModal} />
    </>
  );
}

export default App;
