import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { folderContext } from "../App";
import { Button, Input } from "./Style";

Modal.setAppElement(document.getElementById("root"));

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: 999,
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: 400,
    transition: "0.75s",
  },
};

const AddFolder = ({ node, modalIsOpen, closeModal }) => {
  const [folder, setFolder] = useState("");
  const {updateFolder, setUpdateFolder} = useContext(folderContext);

  const handleAddFolder = (e) => {
    if (folder) {
      const folderInfo = { label: folder, children: [] };
      fetch(`http://localhost:5000/addFolder/${node._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(folderInfo),
      });
      console.log(folderInfo);
      setUpdateFolder(!updateFolder);
      e.target.reset()
    }
    e.preventDefault();
  };

  return (
    <Modal overlayClassName="modal-overlay" style={modalStyles} isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Folder Add Modal">
      <form onSubmit={handleAddFolder}>
        <div className="modal-body">
          <h4 className="title">Add Folder in {node.label}</h4>
          <Input type="text" name="folderName" onChange={(e) => setFolder(e.target.value)} />
        </div>
        <div className="modal-action">
          <Button type="button" border onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddFolder;
