export type Role = 'admin';

export interface User {
  userId: string;
  username: string;
  password: string;
  roles: Role[];
}
