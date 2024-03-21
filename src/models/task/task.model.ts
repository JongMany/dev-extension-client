export interface TasksResponse {
  tasks: Task[];
}

export interface Task {
  projectName: string;
  task: string;
  owner: string;
  dueDate: Date;
  createdAt: Date;
  isCompleted: boolean;
  _id: string;
}
