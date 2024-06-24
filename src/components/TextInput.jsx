/* eslint-disable react/prop-types */
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative w-full text-darkpink ">
        {label && (
          <label className="text-xs top-1 px-1 absolute left-3 text-darkpink opacity-95 ">
            {label}
          </label>
        )}
        <input
          className={`px-4 py-3 text-black ${
            label && `pt-4 pb-2 `
          } rounded-md w-full border border-gray-200 ${
            meta.touched && meta.error && "border-red-500 "
          } focus:outline-primary focus:border-none placeholder:text-darkpink opacity-70 lg:placeholder:text-sm `}
          {...props}
          {...field}
        />
      </div>

      {meta.touched && meta.error && (
        <>
          <p className="px-1 flex items-center gap-1   text-red-500 text-sm lg:text-xs">
            {meta.error}
          </p>
        </>
      )}
    </div>
  );
};

export default TextInput;
