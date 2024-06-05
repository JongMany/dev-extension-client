export type Task = {
  _id: string;
  dueDate: string;
  createdAt: string;
  projectName: string;
  task: string;
  owner: string;
  email: string;
  isCompleted: boolean;
  __v: number;
};

export type CalendarTask = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resourceId: number | number[];
};
