import React from 'react'
import MaterialIcon from '../MaterialIcon'
import format from 'date-fns/format'
import { FlexContainer } from '../Containers'

const footerIcon = {
  marginRight: '.5rem',
  paddingLeft: '.1rem'
}

export default () => (
  <div className="Footer">
    <FlexContainer>
      <div className="Footer-col1">
        <h3 data-hook="questions" className="AnyQuestions">Any questions?</h3>
        <a href="mailto:chrsmllr@gmail.com" data-hook="questions-mailto">You got my digits.</a>
        <p data-hook="copyright">&copy; Chris Miller {format(new Date(), 'YYYY')}</p>
      </div>

      <div className="Footer-col2">
        <a><MaterialIcon icon="mail" style={footerIcon} /> E-mail</a>
        <a><MaterialIcon icon="instagram" style={footerIcon} /> Instagram</a>
        <a><MaterialIcon icon="facebook" style={footerIcon} /> Facebook</a>
      </div>
    </FlexContainer>

    <style jsx global>{`
      .Footer {
        padding: 2rem 0;
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

      .Footer p, .Footer a {
        font-size: .83rem;
        display: block;
        opacity: 0.5;
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
  </div>
)
