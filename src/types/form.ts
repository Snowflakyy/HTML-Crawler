export interface SignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  preferences: string[];
}
export interface LoginProps {
  email: string;
  password: string;
}
