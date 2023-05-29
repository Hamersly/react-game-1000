export interface IUser {
  id: number
  name: string;
  userCheck: number;
  message: string;
  status: number;
}

export interface ICountItems {
  [index: number]: number;
}