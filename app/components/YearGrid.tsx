import {
  getCurrentYear,
  getDaysInYear,
  getTodayDayOfYear,
  isPastDay,
  isToday,
} from '@/lib/dates'

/**
 * YearGrid component
 * Renders a grid of dots representing each day of the current year
 * Past days are white, future days are dark gray, today is subtly highlighted
 */
export default function YearGrid() {
  const year = getCurrentYear()
  const daysInYear = getDaysInYear(year)
  const todayDayOfYear = getTodayDayOfYear()

  return (
    <div className="year-grid">
      {Array.from({ length: daysInYear }, (_, index) => {
        const dayOfYear = index + 1
        const isPast = isPastDay(dayOfYear, todayDayOfYear)
        const isTodayDay = isToday(dayOfYear, todayDayOfYear)

        return (
          <div
            key={dayOfYear}
            className={`dot ${isPast ? 'dot-past' : 'dot-future'} ${
              isTodayDay ? 'dot-today' : ''
            }`}
            aria-label={`Day ${dayOfYear} of ${year}`}
          />
        )
      })}
    </div>
  )
}

