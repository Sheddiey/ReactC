import { useApp } from 'context';
import styles from './top.module.scss';

export default function Top() {
  const {
    time: { days, weeks, hours, minutes, seconds },
    currentDate: { time, day, month, date, year }
  } = useApp();

  return (
    <div className={styles.main}>
      <div className={styles.mTop}>
        <div className={styles.left}>
          <span>{day}</span>
          <span>{date}</span>
          <span>{month}</span>
          <span>{year}</span>
        </div>
        <span>{time}</span>
      </div>

      <div className={styles.mBottom}>
        <div className={styles.container}>
          <h1>{weeks}</h1>
          <span>Weeks</span>
        </div>
        <div className={styles.container}>
          <h1>{days}</h1>
          <span>Days</span>
        </div>
        <div className={styles.container}>
          <h1>{hours}</h1>
          <span>Hours</span>
        </div>
        <div className={styles.container}>
          <h1>{minutes}</h1>
          <span>Minutes</span>
        </div>
        <div className={styles.container}>
          <h1>{seconds}</h1>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}
