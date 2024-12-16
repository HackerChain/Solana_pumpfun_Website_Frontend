export interface walletProfile {
  _id: string;
  username: string;
  totalPoint: number;
  balance: number;
  energy: number;
  tap: number;
  limit: number;
  level: number;
  passItemLevel: number;
  passItemStartTime: number;
  lastTime: number;
  dailyEarnTime: number;
}
export interface walletStateProps {
  user: walletProfile;
  users: walletProfile[];
  friend: boolean;
  error: object | string | null;
}
