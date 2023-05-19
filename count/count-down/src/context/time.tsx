import { useState, useEffect, useMemo } from 'react';
import { IContext } from 'types';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const modifyTime = (time: number) => {
  return time < 10 ? `0${time}` : time;
};

const getCurrentDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const dateNum = date.getDate();
  const year = date.getFullYear();
  return {
    time: `${modifyTime(hours)}:${modifyTime(minutes)}:${modifyTime(seconds)}`,
    day: days[day],
    month: months[month],
    date: dateNum,
    year: year
  };
};

const setDeadline = (today: number) => {
  const deadline = new Date('2023-04-10T00:00:00').getTime();
  const timeLeft = deadline - today;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const beginning = new Date('2023-03-27T00:00:00').getTime();
  const percentageLeft =
    100 - ((today - beginning) / (deadline - beginning)) * 100;
  return { days, weeks, hours, minutes, seconds, percentageLeft };
};

export const Time = (): IContext => {
  const [today, setToday] = useState(new Date().getTime());
  const currentDate = getCurrentDate();
  const time = useMemo(() => setDeadline(today), [today]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { time, currentDate };
};
