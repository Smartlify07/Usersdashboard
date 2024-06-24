import { Field, Form, Formik } from "formik";
import { BiSearch } from "react-icons/bi";
import TextInput from "../TextInput";
import { usersData } from "../../data/usersData";

const UserFilterPanel = () => {
  const users = usersData;
  const handleSearch = (users, searchValue) => {
    return users.filter((user) =>
      user.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    );
  };
  return (
    <section
      className="w-full py-5 px-8 flex flex-col gap-4 items-center justify-between lg:flex-row"
      role="filter"
    >
      <header className="flex flex-col gap-2">
        <h1 className="text-[#333] text-2xl lg:text-[22px] font-semibold">
          All Customers
        </h1>
        <p className="text-[#16C098] text-sm text-center">Active members</p>
      </header>

      <div className="flex items-center gap-4">
        <div className="relative">
          <BiSearch className="absolute top-3 text-[#7E7E7E] left-3" />

          <Formik
            initialValues={{
              search: "",
            }}
            onSubmit={(values) => {
              handleSearch(users, values);
            }}
          >
            <Form>
              <Field
                type="search"
                name="search"
                placeholder="Search"
                className="text-sm py-3 rounded-md px-10   bg-[#F9FBFF] focus:outline-none placeholder:text-[#b5b7c0]"
              ></Field>
            </Form>
          </Formik>
        </div>

        <select name="filter" role="filter" id="">
          <option value=""></option>
        </select>
      </div>
    </section>
  );
};

export default UserFilterPanel;
