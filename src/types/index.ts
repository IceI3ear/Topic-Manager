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
