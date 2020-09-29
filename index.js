import CountdownTimer from './timer.js'

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 5, 2021'),
});

const timerId = setInterval(() => {
  const dateNow = new Date().getTime()
  const timeRange = timer.targetDate - dateNow

  if(timeRange > 0) {
    timer.update()
  }
  else {
    timer.expired(timerId)
  }

}, 1000);

