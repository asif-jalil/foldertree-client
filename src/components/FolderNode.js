import React, { useContext, useState } from "react";
import { folderContext } from "../App";
import AddFolder from "./AddFolder";
import FolderTree from "./FolderTree";
import { ActionIcon, FolderWrapper } from "./Style";

const FolderNode = ({ node }) => {
  const [childVisible, setChildVisible] = useState(false);
  const hasChild = node.children?.length ? true : false;
  const [modalIsOpen, setIsOpen] = useState(false);
  const {updateFolder, setUpdateFolder} = useContext(folderContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFolderAdd = (e) => {
    openModal();
    e.stopPropagation();
  };

  const handleFolderRemove = (e, folder) => {
    if (window.confirm("Are you sure to delete " + folder)) {
      fetch(`http://localhost:5000/deleteFolder/${node._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          setUpdateFolder(!updateFolder);
        }
      })
    }
    e.stopPropagation();
  };

  return (
    <FolderWrapper>
      <div className={`node-item ${hasChild && childVisible && "active"}`}>
        <div className="node-item-name" onClick={() => setChildVisible(!childVisible)}>
          <div className={`folder-tree-toggler ${childVisible && "active"}`}>
            <i className="fas fa-caret-right"></i>
          </div>
          <div className="folder-tree-head">
          <i className="fas fa-folder"></i> <span>{node.label}</span>
          </div>
        </div>
        <div className="folder-action">
          <ActionIcon onClick={handleFolderAdd}>
            <i className="fas fa-folder-plus"></i>
          </ActionIcon>
          <AddFolder node={node} modalIsOpen={modalIsOpen} closeModal={closeModal} />
          {node.label !== "root" && (
            <ActionIcon danger onClick={(e) => handleFolderRemove(e, node.label)}>
              <i className="fas fa-trash-alt"></i>
            </ActionIcon>
          )}
        </div>
      </div>

      {hasChild && childVisible && <FolderTree data={node.children} />}

      {!hasChild && childVisible && <h5>No More Folder</h5>}
    </FolderWrapper>
  );
};

export default FolderNode;
