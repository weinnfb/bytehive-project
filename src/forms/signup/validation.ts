import * as Yup from 'yup';
import { SignUpFields } from './types';

export const signUpSchema = Yup.object().shape({
    [SignUpFields.firstName]: Yup.string().required('First name is required'),
    [SignUpFields.lastName]: Yup.string().required('Last name is required'),
    [SignUpFields.email]: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    [SignUpFields.password]: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Password is required'),
});