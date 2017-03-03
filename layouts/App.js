import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectTile from '../components/ProjectTile'

const App = ({ projectsState }) => (
  <main className="App">
    <Header />

    <div className="App-content">
      <div className="container">
        <div className="Projects">
          {projectsState.projects.map((p, i) => (
            <ProjectTile
              key={i}
              imgSrc={p.img}
              projectName={p.name}
              description={p.description}
              projectHref={p.projectHref}
            />
          ))}
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
        padding: 4rem 0;
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

App.propTypes = {
  projectsState: React.PropTypes.shape({})
}

const mapStateToProps = (state) => ({
  projectsState: state.projects
})

export default connect(mapStateToProps)(App)
