import { usersData } from "../../data/usersData";

const UsersList = () => {
  return (
    <section className="pb-5 flex justify-center border-b">
      <div className="relative w-7/12 overflow-scroll md:w-full md:overflow-auto lg:overflow-auto lg:w-full">
        <table className="w-full text-sm text-left rtl:text-right overflow-scroll ">
          <thead className="text-sm text-center font-normal text-[#b5b7c0]">
            <tr>
              <th scope="col" className="font-normal px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="font-normal px-6 py-3">
                Company
              </th>
              <th scope="col" className="font-normal px-6 py-3">
                Phone number
              </th>
              <th scope="col" className="font-normal px-6 py-3">
                Email
              </th>
              <th scope="col" className="font-normal px-6 py-3">
                Country
              </th>
              <th scope="col" className="font-normal px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.slice(0, 8).map((user) => (
              <tr className="bg-white border-b  text-center" key={user.email}>
                <th
                  scope="row"
                  className="px-1 py-5 font-medium text-xs  whitespace-nowrap lg:text-sm "
                >
                  {user.customerName}
                </th>
                <td className="px-1 py-5 text-xs font- medium lg:text-sm">
                  {user.company}
                </td>
                <td className="px-1 py-5 text-xs font- medium lg:text-sm">
                  {user.phoneNumber}
                </td>
                <td className="px-1 py-5 text-xs font- medium lg:text-sm">
                  {user.email}
                </td>
                <td className="px-1 py-5 text-xs font- medium lg:text-sm">
                  {user.country}
                </td>
                <td className={`px-1 py-5   `}>
                  <span
                    className={`py-1 px-3 w-full text-xs rounded-sm lg:text-sm
                    ${
                      user.status === "Active"
                        ? `bg-[rgba(22,192,152,0.38)] border text-[#008767] border-[#008767]`
                        : "bg-[#FFC5C5] border text-[#df0404] border-[#DF0404]"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersList;
