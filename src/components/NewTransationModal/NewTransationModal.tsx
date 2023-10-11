import { Container } from "./styles";
import Modal from "react-modal";
import { useContext } from "react";
import { AmoutContext } from "../../context/amountContext";
import closeImg from "../../assets/close.svg";

const NewTransationModal = ({ onRequestClose }: { onRequestClose: () => void }) => {
  const { toggle, setToggle } = useContext(AmoutContext);

  return (
    <div>
      <Modal
        isOpen={toggle}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button className="react-modal-close" onClick={() => setToggle(!toggle)}>
          <img src={closeImg} alt="fechar-modal" />
        </button>
        <Container>
          <h2> Cadastrar Transação</h2>
          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Categoria" />
          <input type="date" placeholder="Data" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </div>
  );
};

export default NewTransationModal;
