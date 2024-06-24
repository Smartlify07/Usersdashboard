/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../TextInput";
import { loginWithEmail } from "../../functions/loginWithEmail";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const LoginForm = () => {
  const navigate = useNavigate();
  const { error, setError } = useAuth();
  return (
    <>
      <Formik
        validationSchema={Yup.object({
          password: Yup.string().min(8, "Must be more than 8 characters"),
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
          console.log(values);
          const error = await loginWithEmail(
            values.email,
            values.password,
            navigate
          );
          console.log(error);
          setError(error);
          setTimeout(() => {
            setError(null);
          }, 4000);
        }}
      >
        <Form className=" flex px-6 py-1 flex-col w-full pb-5">
          <p className="text-darkpink my-4 opacity-40  text-sm  w-full text-start lg:w-11/12">
            or login with email
          </p>
          {error && (
            <div className="bg-red-100 py-4 px-4 rounded-sm mt-0 mb-4">
              <p className="text-darkpink text-sm">{error}</p>
            </div>
          )}
          <div className="flex w-full flex-col gap-5 lg:justify-center  lg:items-center">
            <TextInput
              placeholder="john@example.com"
              type="email"
              name="email"
              label={"Email address"}
            />
            <TextInput
              placeholder="password"
              type="password"
              name="password"
              label={"Password"}
            />
          </div>

          <button
            type="submit"
            className="mt-6 flex items-center justify-center gap-4 w-full text-white font-semibold py-3 px-5 rounded-md transition-all bg-primary hover:opacity-95"
          >
            Login to dashboard
          </button>

          <p className="text-sm flex items-center gap-3 mt-4 text-darkpink opacity-80">
            <input type="checkbox" className="w-3 h-3 rounded-sm" /> Remember me
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
