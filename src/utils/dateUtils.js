const date = new Date();

export const getcurrentDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[date.getDay()];
    return currentDay;
  }

  export const getCurrentMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = months[date.getMonth()];
    const currentDate = date.getDate();
    return `${currentMonth} ${currentDate}`;
  }