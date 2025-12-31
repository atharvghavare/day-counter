import { getCurrentYear, getDaysRemaining } from '@/lib/dates'

/**
 * Footer component
 * Displays the current year on the left and days remaining on the right
 */
export default function Footer() {
  const year = getCurrentYear()
  const daysRemaining = getDaysRemaining()
  const nextYear = year + 1

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-year">{year}</span>
        <span className="footer-days">{daysRemaining} days left till {nextYear}</span>
      </div>
    </footer>
  )
}

