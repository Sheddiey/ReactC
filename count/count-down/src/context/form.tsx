import { Hours } from 'data';

const convertToHours = (hoursArray: number[]) => {
  return hoursArray.map((h) => {
    let [int, frac] = h.toString().split('.'); // split the hour and fraction
    let fraction = isNaN(parseFloat(frac)) ? 0 : parseFloat(frac) / 60; // convert fraction to fraction of an hour
    return parseFloat(int) + fraction;
  });
};

export function Form() {
  const hours = Object.values(Hours).flat();
  const lastSixDays = hours.slice(-6);

  const calculateRecentForm = (hours: number[]) => {
    const recentHours = convertToHours(hours.slice(-3));
    const sum = recentHours.reduce((a, b) => a + b);
    if (sum >= 30) {
      return 'Consistent, dominant, impressive';
    } else if (sum >= 24) {
      return 'mediocre, adequate, workmanlike';
    } else {
      return 'struggling, weak, ineffective, faltering';
    }
  };

  const calculateGeneralForm = (hours: number[]) => {
    const sum = convertToHours(hours).reduce((a, b) => a + b);
    if (sum >= hours.length * 10) {
      return 'victorious, successful, strong';
    } else if (sum >= hours.length * 8.5) {
      return 'middle-of-the-road, so-so, passable, unremarkable, average';
    } else {
      return 'failing, floundering, subpar, underperforming';
    }
  };

  const getPoints = (hours: number[]) => {
    let points = 0;
    convertToHours(hours).forEach((h) => {
      if (h >= 10.5) {
        points += 3;
      } else if (h >= 8.5) {
        points += 1;
      } else {
        points -= 1;
      }
    });
    return points;
  };

  return {
    hours,
    lastSixDays,
    calculateRecentForm,
    calculateGeneralForm,
    getPoints
  };
}
