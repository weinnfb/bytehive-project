import { useState } from "react";
import { useFormik } from "formik";
import { styled, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from "@mui/icons-material";
import PrimaryButton from "../../../componets/button/PrimaryButton";
import { initialValuesSignUp } from '../../../forms/signup/form';
import { signUpSchema } from '../../../forms/signup/validation';
import type { SignUpFormValues } from '../../../forms/signup/types';
import { useNavigate } from "react-router-dom";

interface Props {
    onSwitch: () => void;
}

const SignUpForm = ({ onSwitch }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik<SignUpFormValues>({
        initialValues: initialValuesSignUp,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log('sign up', values);
            navigate('/dashboard');
        },
    });

    return (
        <Wrapper>
            <WelcomeText>
                <Title>
                    Get started absolutely free
                </Title>
                <SignUpPart>
                    <Question>
                        Already have an account?
                    </Question>
                    <LinkButton type="button" onClick={onSwitch}>
                        Login
                    </LinkButton>
                </SignUpPart>
            </WelcomeText>

            <Form onSubmit={formik.handleSubmit}>
                <NameRow>
                    <TextFieldCustom
                        label="First name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={!!formik.touched.firstName && !!formik.errors.firstName}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextFieldCustom
                        label="Last name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={!!formik.touched.lastName && !!formik.errors.lastName}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </NameRow>
                <TextFieldCustom
                    label="Email address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={!!formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextFieldCustom
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={!!formik.touched.password && !!formik.errors.password}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((p) => !p)} edge="end">
                                    {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <PrimaryButton type="submit" disabled={!formik.isValid}>
                    Create Account
                </PrimaryButton>
                <TermsText>
                    By signing up, I agree to{" "}
                    <StyledLink>
                        Terms of Use
                    </StyledLink>
                    {" "}and{" "}
                    <StyledLink>
                        Privacy Policy.
                    </StyledLink>
                </TermsText>
            </Form>
        </Wrapper >
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: 40,
    flexDirection: 'column',
});

const WelcomeText = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '1.5',
}));

const SignUpPart = styled('div')({
    display: 'flex',
    gap: 4,
    alignItems: 'flex-start',
})

const Question = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
}));

const LinkButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5,
    background: 'none',
    padding: 0,
    minWidth:'unset',
    cursor: 'pointer',
    textTransform: 'none',
    "&:hover": {
        opacity: 0.8,
    }
}));

const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '100%',
    alignItems: 'flex-start'
});

const NameRow = styled('div')({
    display: 'flex',
    gap: 16,
});

const TextFieldCustom = styled(TextField)(({ theme }) => ({
    width: '100%',
    "& .MuiOutlinedInput-root": {
        borderRadius: 8,
    },
    "& fieldset": {
        borderColor: theme.palette.grey[200],
    },
    "&:hover fieldset": {
        borderColor: theme.palette.grey[100],
    },
    "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.contrastText,
    },
    "&.Mui-error fieldset": {
        borderColor: theme.palette.error.main,
    },
    "& .MuiInputBase-input": {
        padding: "16px 14px",
    },
    "& .MuiFormLabel-root": {
        fontSize: 14,
        color: theme.palette.grey[200],
        fontWieght: 400,
    },
}));

const TermsText = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    color: theme.palette.grey[100],
    fontWeight: 400,
}));

const StyledLink = styled('span')(({ theme }) => ({
    fontWeight: 400,
    textDecoration: "underline",
    color: theme.palette.primary.contrastText,
    fontSize: "12px",
}));




export default SignUpForm;