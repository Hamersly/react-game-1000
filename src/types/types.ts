export interface IUser {
  id: number
  name: string;
  userCheck: number;
  message: string;
  status: number;
}

export interface IcountItems {
  [index: number]: number;
}