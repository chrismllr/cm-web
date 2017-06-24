import styled from 'styled-components'

export const OutsideLink = styled.a.attrs({
  rel: 'noopener',
  target: '_blank'
})`
  cursor: pointer;
  color: #4a4a4a;
`

export const DialexaLink = styled(OutsideLink)`
  font-weight: 900;
  transition: .3s ease;

  &:hover {
    color: #D6B064;
    text-shadow: #222 3px 3px 0;
  }

  @media screen and (max-width: 767px) {
    &:hover {
      color: #D6B064;
      text-shadow: #222 2px 2px 0;
    }
  }
`

export const FooterLink = styled(OutsideLink)`
  display: block;
  letter-spacing: .01rem;
  color: #6b6b6b;
  text-decoration: none;
`
