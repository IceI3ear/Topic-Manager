export interface ITopic {
  description: string;
  id: number;
  linkFile: string;
  specialityName: string;
  status: boolean;
  student: string;
  topicName: string;
  studentID: string;
  teacherName: string;
  point: any;
}

export interface ILogin {
  user: string;
  password: string;
}

export interface IUser {
  id: string;
  userName: string;
  className: string;
  classId: number;
  fullName: string;
  specialityName: string;
  specialityId: number;
}

export interface IProgress {
  id: number;
  topicName: string;
  fullName: string;
  userName: string;
  startDate: string;
  endDate: string;
  complete: number;
  point: number;
  description: string;
  status: boolean;
  title: string;
}

export interface IProgressTopic {
  description: string;
  endDate: string;
  endRegister: string;
  id: number;
  linkFile: string;
  majorID: number;
  majorName: string;
  point: number;
  startDate: string;
  startRegister: string;
  studentID: string;
  studentName: string;
  teacherID: number;
  teacherName: string;
  topicName: string;
  complete: number;
}
