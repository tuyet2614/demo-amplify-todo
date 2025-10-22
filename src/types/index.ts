// Types for our Task Management app

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string | null;
  content: string | null;
  isDone: boolean | null;
  createdAt: string;
  updatedAt: string;
}

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface CreateTaskInput {
  title: string;
  content: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateTaskInput {
  id: string;
  title?: string;
  description?: string;
  status?: TaskStatus;
}
