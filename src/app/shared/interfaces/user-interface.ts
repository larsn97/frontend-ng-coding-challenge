export interface User {
  id: number;
  username: string;
  password: string;
}

export interface UserLogin {
  isAuthenticated: boolean;
  userId: number;
}
