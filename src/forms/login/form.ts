import { LoginFields } from './types';

export interface AuthField {
  type: 'email' | 'password';
  label?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
}

export const initialValuesLogin = {
    [LoginFields.email]: '',
    [LoginFields.password]: '',
};

export const loginFields: AuthField[] = [
    {
        type: 'email',
        name: LoginFields.email,
        label: 'Email address',
        autoComplete: 'email',
    },
    {
        type: 'password',
        name: LoginFields.password,
        label: 'Password',
        autoComplete: 'current-password',
    },
];
