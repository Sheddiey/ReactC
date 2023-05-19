export interface timeType {
  days: number;
  weeks: number;
  hours: number;
  minutes: number;
  seconds: number;
  percentageLeft: number;
}

export interface CurrentDate {
  time: string;
  day: string;
  month: string;
  date: number;
  year: number;
}

export interface IContext {
  time: timeType;
  currentDate: CurrentDate;
}

export interface IQuotes {
  [key: string]: string;
}

export interface IForm {
  hours: number[];
  calculateRecentForm: (hours: number[]) => string;
  lastSixDays: number[];
  calculateGeneralForm: (hours: number[]) => string;
  getPoints: (hours: number[]) => number;
}

//export interface AppContextInterface IContext {} IHours {}
export interface AppContextInterface extends IContext, IForm {}
