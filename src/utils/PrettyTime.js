function pretty_resulttime(resulttime, plusvalue = 0){
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let nexttime = resulttime + plusvalue;

  if(nexttime >= 3600 && nexttime <= 359999){
    hours = parseInt(nexttime/3600);
    if(nexttime%3600 >= 60){
      minutes = parseInt((nexttime%3600)/60);
      seconds = parseInt((nexttime%3600)%60);
    } else {
      seconds = parseInt(nexttime%3600);
    }
  } else if(nexttime => 60 && nexttime < 3600){
    minutes = parseInt(nexttime/60);
    seconds = parseInt(nexttime%60);
  } else if(nexttime < 60){
    seconds = parseInt(nexttime);
  }
  return pastezero(hours, 2)+':'+pastezero(minutes,2)+':'+pastezero(seconds,2);
}

function pastezero(num, len) {
      while(num.toString().length < len) {
          num = '0' + num;
      }
      return num;
}

export default pretty_resulttime;
