import YearGrid from './components/YearGrid'
import Footer from './components/Footer'

/**
 * Main page component
 * Centers the year grid and displays the footer
 */
export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <div className="content-wrapper">
          <h1 className="page-title">One year. One dot per day.</h1>
        </div>
      </header>
      <div className="content-wrapper">
        <YearGrid />
      </div>
      <Footer />
    </main>
  )
}

