/**
 * Date and day calculation utilities
 * All date logic is centralized here for maintainability
 */

/**
 * Get the total number of days in a given year
 * Automatically handles leap years
 */
export function getDaysInYear(year: number): number {
  return isLeapYear(year) ? 366 : 365
}

/**
 * Check if a given year is a leap year
 */
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * Get the day of year (1-365 or 1-366) for a given date
 * Returns 1 for January 1st, 365/366 for December 31st
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

/**
 * Get the current year
 */
export function getCurrentYear(): number {
  return new Date().getFullYear()
}

/**
 * Get today's day of year (1-365 or 1-366)
 */
export function getTodayDayOfYear(): number {
  return getDayOfYear(new Date())
}

/**
 * Check if a given day of year is in the past
 */
export function isPastDay(dayOfYear: number, todayDayOfYear: number): boolean {
  return dayOfYear < todayDayOfYear
}

/**
 * Check if a given day of year is today
 */
export function isToday(dayOfYear: number, todayDayOfYear: number): boolean {
  return dayOfYear === todayDayOfYear
}

/**
 * Calculate the number of days remaining in the current year
 */
export function getDaysRemaining(): number {
  const today = new Date()
  const year = today.getFullYear()
  const daysInYear = getDaysInYear(year)
  const todayDayOfYear = getDayOfYear(today)
  return daysInYear - todayDayOfYear
}

