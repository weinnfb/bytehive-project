import { useState } from "react";
import { useFormik } from "formik";
import { styled, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from "@mui/icons-material";
import PrimaryButton from "../../../componets/button/PrimaryButton";
import { initialValuesLogin, loginFields } from "../../../forms/login/form";
import { loginSchema } from "../../../forms/login/validation";
import type { LoginFormValues } from "../../../forms/login/types";

interface Props {
    onSwitch: () => void;
};

const LoginForm = ({ onSwitch }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (values: LoginFormValues) => {
        console.log(values);
        alert('МОЛОДЧИНА❤️❤️❤️ !!!')
    }

    const formik = useFormik({
        initialValues: initialValuesLogin,
        validationSchema: loginSchema,
        validateOnChange: true,
        enableReinitialize: true,
        onSubmit,
    });

    return (
        <WrapeerForm>
            <WelcomeText>
                <Title>
                    Welcome back!
                </Title>
                <SignUpPart>
                    <Question>
                        Don’t have an account?
                    </Question>
                    <LinkButton type="button" onClick={onSwitch}>
                        Sign Up here!
                    </LinkButton>
                </SignUpPart>
            </WelcomeText>
            <ValidationWrapper onSubmit={formik.handleSubmit}>
                {/* {loginFields.map((field) => (
                    <TextFieldEmail
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        autoComplete={field.autoComplete}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={field.name === "email" ? formik.touched.email && !!formik.errors.email : formik.touched.password && !!formik.errors.password}
                        helperText={field.name === "email" ? formik.touched.email && formik.errors.email : formik.touched.password && formik.errors.password}
                        InputProps={{
                            endAdornment: (
                                field.name === "password" &&
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                        {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        {...formik}
                    />
                ))} */}

                <TextFieldEmail
                    label="Email address"
                    name="email"
                    fullWidth
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextFieldEmail
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && !!formik.errors.password}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                    {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <PrimaryButton type="submit" disabled={!formik.isValid}>
                    Log In
                </PrimaryButton>
                <TermsText>
                    By signing up, I agree to{" "}
                    <StyledLink>
                        Terms of Use and Privacy Policy.
                    </StyledLink>
                </TermsText>
            </ValidationWrapper>
        </WrapeerForm>
    )
}

const WrapeerForm = styled('div')({
    display: 'flex',
    maxWidth: 352,
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
    cursor: 'pointer',
    textTransform: 'none',

    "&:hover": {
        opacity: 0.8,
    }
}));

const ValidationWrapper = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '100%',
    alignItems: 'flex-start'
});

const TextFieldEmail = styled(TextField)(({ theme }) => ({
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

const TermsText = styled("span")(({ theme }) => ({
    fontSize: "14px",
    color: theme.palette.grey[100],
    fontWeight: 400,
}));

const StyledLink = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    textDecoration: "underline",
    color: theme.palette.primary.contrastText,
    fontSize: "14px",
}));

export default LoginForm;