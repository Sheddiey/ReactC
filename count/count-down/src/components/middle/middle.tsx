import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import { useApp } from 'context';
import { Icons } from 'elements';

import styles from './middle.module.scss';

export default function Middle() {
  const [confetti, setConfetti] = useState(false);

  const {
    time,
    hours,
    lastSixDays,
    calculateRecentForm,
    calculateGeneralForm,
    getPoints
  } = useApp();

  const { percentageLeft } = time;

  let backgroundColor;

  if (percentageLeft > 80) {
    backgroundColor = '#037803';
  } else if (percentageLeft > 70) {
    backgroundColor = '#6cab05';
  } else if (percentageLeft > 60) {
    backgroundColor = '#9fff05';
  } else if (percentageLeft > 50) {
    backgroundColor = '#F1FF0F';
  } else if (percentageLeft > 25) {
    backgroundColor = '#FF7F00';
  } else {
    backgroundColor = '#FF0000';
  }

  const toggleConfetti = () => {
    if (getPoints(lastSixDays) >= 15) {
      setConfetti(true);
    }
  };

  useEffect(() => {
    toggleConfetti();
  });

  return (
    <div className={styles.main}>
      {confetti && <Confetti />}
      <div className={styles.left}>
        <div className={styles.lTop}>
          <h4>Recent Form</h4>
          <div className={styles.form}>
            {lastSixDays.map((h, i) => {
              if (h >= 10.5) {
                return (
                  <div className={styles.hour} key={i}>
                    <Icons.Win />
                  </div>
                );
              } else if (h >= 8.5) {
                return (
                  <div className={styles.hour} key={i}>
                    <Icons.Draw />
                  </div>
                );
              } else {
                return (
                  <div className={styles.hour} key={i}>
                    <Icons.Lose />
                  </div>
                );
              }
            })}
            <div className={styles.points}>
              <span>{getPoints(lastSixDays)}/18</span>
            </div>
          </div>
          <div className={styles.message}>{calculateRecentForm(hours)}</div>
        </div>
        <div className={styles.lBottom}>
          <h4>
            GF:
            <span>{calculateGeneralForm(hours)}</span>
          </h4>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.text}>
          <h1>{percentageLeft.toFixed(4)}%</h1>
          <span>Remaining</span>
        </div>
        <div className={styles.health}>
          <div
            className={styles.healthBar}
            style={{
              width: '100%',
              height: `${percentageLeft}%`,
              backgroundColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}