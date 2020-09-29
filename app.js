import CountdownTimer from './timer.js'

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

const timerId = setInterval(() => {
  const dateNow = new Date().getTime()
  const timeRange = dateNow - timer.targetDate

  if(timeRange > 0) {
    timer.update()
  }
  else {
    clearInterval(timerId)
  }

}, 1000);

