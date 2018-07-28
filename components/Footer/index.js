import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import { FooterLink } from '../Links'
import { FlexContainer, Section } from '../Layout'
import { palette, media } from '../../styles/common'

const FooterSection = styled(Section)`
  ${media.tablet`
    padding: 0 4rem 4rem 4rem;
  `};
`

// TODO: Convert to styled-components
export default () => (
  <FooterSection className="Footer">
    <FlexContainer>
      <div className="Footer-col1">
        <FooterLink href="http://github.com/chrismllr" data-hook="github">
          <span className="Arrow">></span> github
        </FooterLink>

        <FooterLink href="mailto:chrsmllr@gmail.com">
          <span className="Arrow">></span> e-mail
        </FooterLink>

        <p className="Footer-dim" data-hook="copyright">
          &copy; Chris Miller {format(new Date(), 'YYYY')}
        </p>
      </div>
    </FlexContainer>

    <style jsx>{`
      section {
        background-color: ${palette.BG};
      }

      .Footer-col1,
      .Footer-col2 {
        width: 50%;
      }

      .Footer-col1 {
        margin-right: 1.5rem;
      }

      .Footer-col1 p {
        margin-top: 2rem;
      }

      .Digits-link {
        display: block;
        letter-spacing: 0.01rem;
        color: ${palette.PRIMARY};
        text-decoration: underline;
      }

      .Arrow {
        color: ${palette.TEXT};
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1;
        margin-right: 0.2rem;
      }

      .AnyQuestions {
        color: ${palette.TEXT};
        margin-bottom: 0.5rem;
        line-height: 1.2;
      }

      .Footer a {
        transition: 0.5s ease-in-out;
        cursor: pointer;
      }

      .Footer a:hover {
        opacity: 1;
      }
    `}</style>
  </FooterSection>
)
