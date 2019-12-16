import Link from 'next/link'
import Layout from '../components/layout'

const Home = () => {
  return (
    <div>
      <Layout title="Home">
        <div className="hero">
          <h1 className="title">Florian Wahl</h1>
          <p className="description">
            Welcome to my website, referencing projects, photography, and miscellaneous experiments.
          </p>

          <div className='row'>
            <Link href='/resume'>
              <a className='card'>
                <h3>My Resume</h3>
                <p>Online version of my resume.</p>
              </a>
            </Link>
            <Link href='/projects'>
              <a className='card'>
                <h3>More Projects</h3>
                <p>Currated list of relevant projects.</p>
              </a>
            </Link>
            <a className='card' href='https://github.com/florian-wahl/florian-wahl-website'>
              <h3>This Website on GitHub &rarr;</h3>
              <p>Find this website repo on GitHub.</p>
            </a>
          </div>
        </div>

        <style jsx>{`
        .hero {
          width: 100%;
        }

        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          margin: 1px 5px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #61a1a1;
        }
        .card h3 {
          margin: 0;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
        }
      `}</style>
      </Layout>
    </div>
  )
}

export default Home;
