import Summary from "../Summary/Summary"
import Table from "../Table/Table"
import { Container } from "./styles"

const Dashboard = () => {
  return (
    <Container>
      <Summary/>
      <Table />
    </Container>
  )
}

export default Dashboard