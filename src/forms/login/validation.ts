import * as Yup from 'yup';

import { LoginFields } from './types';

export const loginSchema = Yup.object().shape({
  [LoginFields.email]: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  [LoginFields.password]: Yup.string().required('Password is required'),
});
