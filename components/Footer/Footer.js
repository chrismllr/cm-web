import React from 'react'
import format from 'date-fns/format'

export default () => (
  <div className="Footer">
    <div className="container Footer-wrapper">
      <div className="Footer-col1">
        <h3 data-hook="questions" className="AnyQuestions">Any questions?</h3>
        <a className="Digits-link" href="mailto:chrsmllr@gmail.com" data-hook="questions-mailto">You got my digits.</a>
        <p className="Footer-dim" data-hook="copyright">&copy; Chris Miller {format(new Date(), 'YYYY')}</p>
      </div>

      <div className="Footer-col2">
        <a className="Footer-dim" href="http://github.com/chrismllr" target="_blank" rel="noopener">
          <span className="Arrow">></span> github
        </a>
        <a className="Footer-dim" href="mailto:chrsmllr@gmail.com">
          <span className="Arrow">></span> e-mail
        </a>
      </div>
    </div>

    <style jsx>{`
      .Footer {
        padding: 2rem 0;
      }

      .Footer-wrapper {
        display: flex;
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

      .Footer-dim {
        font-size: .83rem;
        display: block;
        letter-spacing: .01rem;
        color: #6b6b6b;
        text-decoration: none;
      }

      .Digits-link {
        font-size: .83rem;
        display: block;
        letter-spacing: .01rem;
        color: #FB0101;
        text-decoration: underline;
      }

      .Arrow {
        color: #222;
        font-weight: 700;
        font-size: 1rem;
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
  </div>
)
