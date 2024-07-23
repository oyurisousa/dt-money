import { HeaderContainer, HeaderContent, NewTranssactionButton } from './styles'
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTranssactionButton>New Transaction</NewTranssactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
