import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'
import { SimpleButton } from '../../../../components/simpleButton'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;

  .coffee-list {
    overflow-y: auto;
    max-height: 20rem;
    padding: 0 0.5rem 0 0;
  }
`

export const ConfirmationSectionContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ConfirmationButton = styled(SimpleButton)`
  width: 100%;
  background: ${({ theme }) => theme.colors['brand-yellow']};
  color: ${({ theme }) => theme.colors['base-white']};
  display: flex;
  justify-content: center;
  flex: 1;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
