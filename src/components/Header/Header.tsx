import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  handleOpenModal: () => void;
}

const Header = ({ handleOpenModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <button type="button" onClick={handleOpenModal}>
          Nova Transação{" "}
        </button>
      </Content>
    </Container>
  );
};

export default Header;
