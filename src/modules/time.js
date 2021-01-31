export const to12hClock = (hour: number): number => {
  return hour > 12 ? hour - 12 : hour;
};

type TimeObject = {
  hours: number,
  minutes: number,
  seconds: number,
};

export const getTime = (): TimeObject => {
  const date = new Date();
  const hours = to12hClock(date.getHours());
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return {hours, minutes, seconds};
};
