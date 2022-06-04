import axios from "axios";
import React from "react";
import { Message, toaster } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function AdminCards(props) {
  const [type, setType] = React.useState("success");
  const [placement, setPlacement] = React.useState("topCenter");
  const message = (value) => (
    <Message showIcon type={type}>
      {type}: Contact {value} successfully.
    </Message>
  );

  const { contact } = props;
  const {
    name,
    email,
    phone,
    location,
    avatar,
    igIdLink,
    fbIdLink,
    twIdLink,
    occupation,
    quote,
  } = contact;

  const deleteContact = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/contacts/delete/${contact._id}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section>
      <div className="h-40 w-80 bg-blue-500 flex md:w-96">
        <div className="w-2/3 flex justify-center items-center">
          <div className="w-5/12 flex justify-center items-center">
            <img
              src={avatar}
              alt=""
              className="rounded-full h-24 w-24 object-cover border-slate-300 border-2"
            />
          </div>
          <div className="w-7/12 flex flex-col justify-center items-center">
            <ul>
              <li className="flex gap-x-1 justify-center items-center">
                <p className="font-myfont text-sm text-white font-medium">
                  {name}
                </p>
              </li>
              <li className="flex gap-x-1 justify-center items-center">
                <label>
                  <p className="text-xs italic font-myfont text-white">
                    {occupation}
                  </p>
                </label>
              </li>
              <li className="flex gap-x-1 justify-center items-center">
                <label>
                  <p className="text-xs italic font-myfont text-white">
                    {phone}
                  </p>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 bg-blue-200 flex justify-center items-center">
          <div className="w-10/12 flex flex-col gap-y-2 justify-center items-center">
            <button
              className="py-2 bg-red-700 text-white font-myfont w-24"
              onClick={deleteContact}
              onClickCapture={() => {
                toaster.push(message("deleted"), { placement });
              }}
            >
              Delete
            </button>
            <button
              className="py-2 bg-yellow-500 text-white font-myfont w-24"
              onClick={() => toaster.push(message("updeted"), { placement })}
            >
              Update
            </button>
            <button
              className="py-2 bg-green-700 text-white font-myfont w-24"
              onClick={() => toaster.push(message("approved"), { placement })}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminCards;
