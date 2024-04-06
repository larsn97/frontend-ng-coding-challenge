import {User} from "./user-interface";
export interface Prompt {
  id: number;
  description: string;
  timestamp: string;
  user: User;
  likes: any[];
}

export const initialPromt = {
  id: 0,
  description: '',
  timestamp: '',
  date: '',
  user: '',
  likes: []
}
