import styled from 'styled-components'
import { palette } from '../../styles/common'

export const OutsideLink = styled.a.attrs({
  rel: 'noopener',
  target: '_blank'
})`
  cursor: pointer;
  color: ${palette.TEXT_LT};
`

export const DialexaLink = styled(OutsideLink)`
  font-weight: 900;
  transition: 0.3s ease;

  &:hover {
    color: ${palette.DX_GOLD};
    text-shadow: ${palette.TEXT} 3px 3px 0;
  }

  @media screen and (max-width: 767px) {
    &:hover {
      color: #d6b064;
      text-shadow: ${palette.TEXT} 2px 2px 0;
    }
  }
`

export const FooterLink = styled(OutsideLink)`
  display: block;
  letter-spacing: 0.01rem;
  color: ${palette.PRIMARY};
  text-decoration: none;
`
