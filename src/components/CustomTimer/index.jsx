import React, { useState, useRef, useEffect } from 'react';

import { CircularProgress } from '@chakra-ui/react';
import { CircularProgressLabel } from '@chakra-ui/react';
const CustomTimer = () => {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState('00:00:00');
  const [time, setTime] = useState(100);
  const [progress, setProgress] = useState(100);

  const getTimeRemaining = e => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = e => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    }
  };

  const clearTimer = e => {
    setTimer('00:00:18');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 18);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    setTime(timer.split(':').at(-1));
    setProgress(progress - 5);
  }, [timer]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  console.log(progress);
  return (
    <div>
      <CircularProgress
        color={time < 10 ? '#F79009' : '#088AB2'}
        value={progress}
      >
        <CircularProgressLabel className=" text-lg text-[#000000] font-extrabold">
          0:
          {timer.split(':').at(-1)}
        </CircularProgressLabel>
      </CircularProgress>
      {/* <button onClick={onClickReset}>Reset</button> */}
    </div>
  );
};

export default CustomTimer;
