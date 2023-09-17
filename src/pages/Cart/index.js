import { fetchAllUser } from "~/services/UserServices";
import { useEffect, useState } from "react";

function Cart() {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      setListUsers(res.data);
    }
  };
  console.log(listUsers);
  return (
    <div>
      <table className="table">
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>First Name</th>
            <th style={{ border: "1px solid black" }}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr
                  key={`users-${index}`}
                  style={{ border: "1px solid black" }}
                >
                  <td style={{ border: "1px solid black" }}>{item.id}</td>
                  <td style={{ border: "1px solid black" }}>{item.email} </td>
                  <td style={{ border: "1px solid black" }}>
                    {item.first_name}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {item.last_name}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
