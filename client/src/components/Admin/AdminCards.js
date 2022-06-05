import axios from "axios";
import React from "react";
import { BsDisplay } from "react-icons/bs";
import { Message, Modal, toaster } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import UpdateForm from "./UpdateForm";

function AdminCards(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

    phone,

    avatar,

    occupation,

    permission,
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
  const updatePermission = async () => {
    try {
      await axios.patch(
        `http://localhost:5000/api/updatepermission/${contact._id}`,
        { permission: !permission }
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
              onClick={handleOpen}
            >
              Update
            </button>
            <Modal open={open} onClose={handleClose} style={ {verticalAlign: 'middle'}}>
              <Modal.Body>
                <UpdateForm contact={contact} />
              </Modal.Body>
            </Modal>
            {permission ? (
              <button className="py-2 bg-green-700 text-white font-myfont w-24">
                Approved
              </button>
            ) : (
              <button
                className="py-2 border-green-700 border-2 text-green-700 font-myfont w-24"
                onClick={updatePermission}
                onClickCapture={() =>
                  toaster.push(message("approved"), { placement })
                }
              >
                Approve
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminCards;
