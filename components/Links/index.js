import styled from 'styled-components'
import { palette } from '../../styles/common'

// TODO: tests
export const OutsideLink = styled.a.attrs({
  rel: 'noopener',
  target: '_blank'
})`
  cursor: pointer;
  color: ${palette.TEXT_LT};
`

export const FooterLink = styled(OutsideLink)`
  display: block;
  letter-spacing: 0.01rem;
  color: ${palette.PRIMARY};
  text-decoration: none;
  transition: 0.5s ease-in-out;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
`
