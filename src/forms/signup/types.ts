export enum SignUpFields {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
    password = 'password',
}

export interface SignUpFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}