/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../TextInput";
import { FaExclamationCircle } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { updateUserProfile } from "../../functions/updateUserProfile";

const PersonalInfoForm = ({ handleStep, step }) => {
  return (
    <>
      <Formik
        validationSchema={Yup.object({
          fullName: Yup.string().required("Full name is required"),
          phoneNumber: Yup.string()
            .min(9, "Invalid phone number")
            .max(13, "Invalid phone number")
            .required("Phone number is required"),
          birthday: Yup.date().required("Date is required"),
          //   gender: Yup.string().required("Gender is required"),
          countryCode: Yup.string()
            .min(1, "Invalid code")
            .max(3, "invalid code")
            .required("Code required"),
        })}
        initialValues={{
          fullName: "",
          phoneNumber: "",
          countryCode: "",
          birthday: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          handleStep();
          await updateUserProfile(values.fullName);
        }}
      >
        <Form className=" flex px-6 flex-col py-6 w-full">
          <header className="flex items-center gap-4 mb-6">
            <h1 className="text-darkpink text-xl font-bold ">
              Personal Information
            </h1>

            <p className="text-status text-lg font-bold lg:text-sm">
              {step} of 3
            </p>
          </header>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col gap-4 mt-2 lg:justify-center lg:items-center">
              <TextInput placeholder="Full name" type="text" name="fullName" />
              <div className="flex items-center gap-3  w-full">
                <p className="text-darkpink">Gender:</p>
                <div className="flex items-center gap-1">
                  <input type="radio" name="gender" value={"male"} />
                  <label htmlFor="male" className="text-sm text-darkpink">
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input name="gender" type="radio" value={"female"} />
                  <label htmlFor="female" className="text-sm text-darkpink">
                    Female
                  </label>
                </div>
              </div>

              <p className="font-bold items-center  text-sm text-darkpink opacity-65">
                <FaExclamationCircle className="inline" /> The phone number and
                birthday are only visible to you
              </p>
            </div>

            <div className="flex items-center gap-5 ">
              <div className="w-1/3 relative">
                <TextInput type="tel" placeholder="+567" name="countryCode" />
                <RxCaretDown className="text-2xl top-3 absolute right-1" />
              </div>

              <div className="w-10/12">
                <TextInput
                  type="tel"
                  placeholder="9066927844"
                  name="phoneNumber"
                />
              </div>
            </div>

            <div className="flex gap-2 relative flex-col">
              <TextInput
                type="date"
                placeholder="placeholder"
                name="birthday"
              />

              <span className="text-sm absolute right-10 top-4 text-darkpink opacity-65">
                Optional
              </span>

              <p className="text-darkpink opacity-65 text-xs">
                Let us know about your birthday so as not to miss a gift
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 font-commissioner text-base flex items-center justify-center gap-4 w-full text-white font-semibold py-3 px-5 rounded-md transition-all bg-primary hover:opacity-95"
          >
            Save information
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default PersonalInfoForm;
