import { usersData } from "../../data/usersData";

const UsersList = () => {
  return (
    <section className="px-4 pb-5 border-b">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right ">
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
                  className="px-1 py-5 font-medium text-sm  whitespace-nowrap "
                >
                  {user.customerName}
                </th>
                <td className="px-1 py-5 text-sm font-medium">
                  {user.company}
                </td>
                <td className="px-1 py-5 text-sm font-medium">
                  {user.phoneNumber}
                </td>
                <td className="px-1 py-5 text-sm font-medium">{user.email}</td>
                <td className="px-1 py-5 text-sm font-medium">
                  {user.country}
                </td>
                <td className={`px-1 py-5 text-sm  `}>
                  <span
                    className={`py-1 px-3 w-full rounded-sm 
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
