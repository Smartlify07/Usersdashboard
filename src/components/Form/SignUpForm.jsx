/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../TextInput";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import signUpWithEmail from "../../functions/signUpWithEmail";

const SignUpForm = ({ handleStep }) => {
  const { error, setError } = useAuth();

  return (
    <>
      <Formik
        validationSchema={Yup.object({
          password: Yup.string()
            .min(8, "Must be more than 8 characters")
            .required("Password is required"),
          email: Yup.string()
            .email("This isn't an email address. Try again")
            .required("Email address is required"),
        })}
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const signUpError = await signUpWithEmail(
            values.email,
            values.password,
            handleStep
          );

          setError(signUpError);
        }}
      >
        <Form className=" flex px-6 flex-col">
          <p className="text-darkpink mb-4 opacity-40  text-sm  mt-4 w-full text-start lg:w-11/12">
            or register with email
          </p>

          {error && (
            <div className="bg-red-100 py-4 px-4 rounded-sm mt-0 mb-4">
              <p className="text-darkpink text-sm">{error}</p>
            </div>
          )}
          <div className="flex w-full flex-col gap-4 lg:justify-center lg:items-center">
            <TextInput
              placeholder="john@example.com"
              type="email"
              name="email"
              label={"Email address"}
            />
            <div className="flex flex-col gap-1 w-full">
              <TextInput
                placeholder="password"
                type="password"
                name="password"
                label={"Password"}
              />
              <p className="text-xs text-darkpink opacity-65">8+ characters</p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 font-commissioner text-base flex items-center justify-center gap-4 w-full text-white font-semibold py-3 px-5 rounded-md transition-all bg-primary hover:opacity-95"
          >
            Create account
          </button>

          <p className="text-sm flex items-center gap-3 text-darkpink opacity-90 mt-4">
            <input type="checkbox" className="w-4 h-4 rounded-sm" />
            Send me news and promotions
          </p>

          <p className="text-xs text-center self-center w-2/3  text-darkpink opacity-60 mt-7">
            By continuing I agree with the{" "}
            <NavLink className={"text-blue-500"}>
              Terms & Conditions, Privacy Policy
            </NavLink>
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
