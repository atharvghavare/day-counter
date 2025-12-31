/**
 * Date and day calculation utilities
 * All date logic is centralized here for maintainability
 * All dates use IST (Indian Standard Time, UTC+5:30)
 */

/**
 * Get current date/time in IST timezone (Asia/Kolkata)
 * Returns a Date object with IST date components
 */
function getNowInIST(): Date {
  const now = new Date()
  
  // Format date in IST timezone
  const istString = now.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
  
  // Parse the IST date string (format: MM/DD/YYYY, HH:MM:SS)
  const [datePart, timePart] = istString.split(', ')
  const [month, day, year] = datePart.split('/').map(Number)
  const [hour, minute, second] = timePart.split(':').map(Number)
  
  // Create Date object with IST components
  // Note: This creates a date in local timezone, but with IST date values
  const istDate = new Date(year, month - 1, day, hour, minute, second)
  return istDate
}

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
 * Get the day of year (1-365 or 1-366) for a given date in IST
 * Returns 1 for January 1st, 365/366 for December 31st
 */
export function getDayOfYear(date: Date): number {
  const year = date.getFullYear()
  const month = date.getMonth() // 0-11
  const day = date.getDate() // 1-31
  
  // Days in each month (non-leap year)
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  // Adjust for leap year
  if (isLeapYear(year)) {
    daysInMonth[1] = 29
  }
  
  // Calculate day of year
  let dayOfYear = day
  for (let i = 0; i < month; i++) {
    dayOfYear += daysInMonth[i]
  }
  
  return dayOfYear
}

/**
 * Get the current year in IST
 */
export function getCurrentYear(): number {
  return getNowInIST().getFullYear()
}

/**
 * Get today's day of year (1-365 or 1-366) in IST
 */
export function getTodayDayOfYear(): number {
  return getDayOfYear(getNowInIST())
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
 * Calculate the number of days remaining in the current year (IST)
 */
export function getDaysRemaining(): number {
  const today = getNowInIST()
  const year = today.getFullYear()
  const daysInYear = getDaysInYear(year)
  const todayDayOfYear = getDayOfYear(today)
  return daysInYear - todayDayOfYear
}

