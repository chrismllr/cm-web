import React from 'react'
import format from 'date-fns/format'
import { FooterLink } from '../Links'
import { FlexContainer, Section } from '../Layout'

export default () => (
  <Section className="Footer">
    <FlexContainer>
      <div className="Footer-col1">
        <h3 data-hook="questions" className="AnyQuestions">Any questions?</h3>
        <a className="Digits-link" href="mailto:chrsmllr@gmail.com" data-hook="questions-mailto">You got my digits.</a>
        <p className="Footer-dim" data-hook="copyright">&copy; Chris Miller {format(new Date(), 'YYYY')}</p>
      </div>

      <div className="Footer-col2">
        <FooterLink href="http://github.com/chrismllr" data-hook="github">
          <span className="Arrow">></span> github
        </FooterLink>
        <FooterLink href="mailto:chrsmllr@gmail.com">
          <span className="Arrow">></span> e-mail
        </FooterLink>
      </div>
    </FlexContainer>

    <style jsx>{`
      section {
        background-color: #f8f8f8;
      }

      .Footer-col1, .Footer-col2 {
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
        letter-spacing: .01rem;
        color: #FB0101;
        text-decoration: underline;
      }

      .Arrow {
        color: #222;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1;
        margin-right: .2rem;
      }


      .AnyQuestions {
        color: #222;
        margin-bottom: .5rem;
        line-height: 1.2;
      }

      .Footer a {
        transition: .5s ease-in-out;
        cursor: pointer;
      }

      .Footer a:hover {
        opacity: 1;
      }

      @media (min-width: 630px) {
        .Footer {
          padding: 4rem 0;
        }
      }
    `}</style>
  </Section>
)
