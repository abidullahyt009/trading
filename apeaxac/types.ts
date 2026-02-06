
export interface User {
  email: string;
  isLoggedIn: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  fundingAmount: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
