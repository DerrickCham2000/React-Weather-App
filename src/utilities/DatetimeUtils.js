import { MONTHS, DAYS } from './DateConstants';

const pacificdate = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
const date = new Date(pacificdate);

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getDate();

  return day + ' ' + month;
}

export function transformDateFormat() {
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

export function getPacificDateTime() {
  const pacificTime = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'America/Los_Angeles',
  });

  const isoDateString = new Date().toISOString();
  const pacificDate = isoDateString.split('T')[0].concat(' ', pacificTime);
  return pacificDate;
}

export function getPacificTime() {
  const pacificTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'America/Los_Angeles',
  });

  return pacificTime;
}
