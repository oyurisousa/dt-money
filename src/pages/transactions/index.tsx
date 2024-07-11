import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 14.000</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>11/07/2024</td>
            </tr>
            <tr>
              <td width="40%">Cachorro Quente</td>
              <td>
                <PriceHighLight variant="outcome">R$ 4.000</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>11/07/2024</td>
            </tr>
            <tr>
              <td width="40%">bolsa</td>
              <td>
                <PriceHighLight variant="income">R$ 1000</PriceHighLight>
              </td>
              <td>Auxílio</td>
              <td>11/07/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
