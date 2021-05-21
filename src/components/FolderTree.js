import React from "react";
import FolderNode from "./FolderNode";

const FolderTree = ({ data }) => {
  return (
    <div className="folder-tree">
      <ul>
        {data.map((node, index) => (
          <FolderNode key={index} node={node} />
        ))}
      </ul>
    </div>
  );
};

export default FolderTree;
