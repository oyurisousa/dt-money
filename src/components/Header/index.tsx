import { HeaderContainer, HeaderContent, NewTranssactionButton } from './styles'
import logo from '../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <NewTranssactionButton>New Transaction</NewTranssactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
