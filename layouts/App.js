import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectTile from '../components/ProjectTile'

export default () => (
  <main className="App">
    <Header />

    <div className="App-content">
      <div className="container">
        <div className="Projects">
          <ProjectTile
            imgSrc="/static/projects/parkhub.png"
            projectName="Parkhub"
            description="Admin dashboard for mobile parking platform"
          />

          <ProjectTile
            imgSrc="/static/projects/justin-leveritt.png"
            projectHref="http://justinleveritt.com"
            projectName="Justin Leveritt"
            description="Photographer: Portfolio website"
          />
        </div>
      </div>
    </div>

    <Footer />

    <style jsx>{`
      .App {
        min-width: 100%;
        color: #222;
        font-weight: 400;
        overflow-x: hidden;
      }

      .App-content {
        height: 100%;
        width: 100%;
        min-width: 100%;
        overflow-x: hidden;
        background-image: linear-gradient(270deg, #f0f0f0, #f8f8f8);
      }

      .Projects {
        padding: 2rem 0;
        display: flex;
      }

      @media (max-width: 630px) {
        .Projects {
          flex-wrap: wrap;
        }
      }
    `}</style>
  </main>
)
