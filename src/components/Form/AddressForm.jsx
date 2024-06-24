/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { BiDollar, BiUser } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import TextInput from "../TextInput";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const AddressForm = ({ step, handleStep }) => {
  const [manually, setManually] = useState(false);
  const toggleManually = () => {
    setManually((prevState) => !prevState);
  };

  return (
    <>
      <Formik
        validationSchema={Yup.object({
          address: Yup.string(),
          street: Yup.string().required("Your street name is required"),
          apartment: Yup.string(),
          city: Yup.string().required("City not chosen"),
          state: Yup.string().required("Your state is required"),
          zip: Yup.number()
            .integer("Invalid code")
            .required("Your zip code is required"),
        })}
        initialValues={{
          street: "",
          apartment: "",
          city: "",
          state: "",
          zip: "",
          address: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
          handleStep();
        }}
      >
        <Form className=" flex px-6 flex-col py-6 w-full">
          <header className="flex items-center gap-4 mb-6">
            <h1 className="text-darkpink text-xl font-bold ">Add address</h1>

            <p className="text-status ttext-lg font-bold lg:text-sm">
              {step} of 3
            </p>
          </header>
          {!manually && (
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full flex-col gap-2 mt-2 lg:justify-center lg:items-center">
                <TextInput
                  placeholder="Search for address"
                  type="search"
                  name="address"
                />

                <p className="text-darkpink text-sm w-full">
                  Your address is not visible to other users
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm w-full">
                <button className="py-1 px-2 border flex items-center gap-1 border-[#EF498F47] rounded-md text-primary font-semibold">
                  <CiLocationOn className="text-lg inline" />
                  Use current location
                </button>
                <button
                  onClick={toggleManually}
                  className="py-1 px-3 border border-[#EF498F47] rounded-md text-primary font-semibold "
                >
                  Add manually
                </button>
              </div>

              <div className="mt-10">
                <h1 className="font-bold text-xl">
                  Sharing your address shows:
                </h1>

                <ul className="flex flex-col gap-3 mt-4 text-sm">
                  <li className="text-darkpink opacity-65 flex items-center gap-2">
                    <BiUser className="text-xl inline ml-2" /> People near you
                  </li>
                  <li className="text-darkpink opacity-65 flex items-center gap-2">
                    <BsClock className="text-xl inline ml-2" /> Estimated
                    delivery time
                  </li>
                  <li className="text-darkpink opacity-65 flex items-center gap-2">
                    <BiDollar className="text-xl inline ml-2" /> Estimate
                    shipping costs
                  </li>
                </ul>
              </div>
            </div>
          )}

          {manually && <AddressInputs />}

          <button
            //     disabled={!manually}
            type="submit"
            className="mt-12 font-commissioner text-base flex items-center justify-center gap-4 w-full text-white font-semibold py-3 px-5 rounded-md transition-all bg-primary hover:opacity-95 disabled:bg-gray-100 disabled:text-gray-400"
          >
            Save information
          </button>
        </Form>
      </Formik>
    </>
  );
};

const AddressInputs = () => {
  return (
    <div className="flex flex-col gap-3">
      <TextInput
        type="text"
        placeholder="Street address"
        label={"Street address"}
        name="street"
      />
      <div className="relative">
        <TextInput type="text" placeholder="Apartment" name="apartment" />

        <span className="text-darkpink opacity-60 text-sm lg:absolute top-4 right-3">
          Optional
        </span>
      </div>

      <TextInput type="text" placeholder="City" label={"City"} name="city" />

      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <TextInput
          type="text"
          placeholder="New York"
          label={"State"}
          name="state"
        />
        <TextInput
          type="text"
          placeholder="101203"
          label={"Zip code"}
          name="zip"
        />
      </div>
    </div>
  );
};

export default AddressForm;
