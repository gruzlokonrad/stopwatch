import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import styles from './Timer.module.scss'

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [timer, setTimer] = useState(0);

  const start = () => {
    if (timer) stop();
    setTimer(setInterval(() => {
      setCurrentTime(prevValue => prevValue + 10);
    }, 10))
  };

  const stop = () => {
    clearInterval(timer)
  };

  const reset = () => {
    stop();
    setCurrentTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const padTo2Digits = (num, length = 2) => {
    return num.toString().padStart(length, '0');
  }

  const convertMsToTime = (time) => {
    let miliseconds = Number(time.toString().slice(0, -1));
    let seconds = Math.floor(miliseconds / 100);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    miliseconds = miliseconds % 100;
    seconds = seconds % 60;
    minutes = minutes % 60;
    // hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padTo2Digits(miliseconds)}`;
  }

  return (
    <>
      <section className={styles.timer}>
        {currentTime ? convertMsToTime(currentTime) : '00:00:00.00'}
      </section>
      <section className={styles.button}>
        <Button action={start}>Start</Button>
        <Button action={stop}>Stop</Button>
        <Button action={reset}>Reset</Button>
      </section>
    </>
  )
}

export default Timer