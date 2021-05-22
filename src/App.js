import { createContext, useEffect, useState } from "react";
import "./App.css";
import FolderTree from "./components/FolderTree";

// const treeData = [
//   {
//     key: 0,
//     type: "folder",
//     label: "root",
//     children: [
//       {
//         key: "0",
//         type: "folder",
//         label: "Documents",
//         children: [
//           {
//             key: "0-0",
//             type: "folder",
//             label: "Document 1-1",
//             children: [
//               {
//                 key: "0-1-1",
//                 type: "file",
//                 label: "Document-0-1.doc",
//               },
//               {
//                 key: "0-1-2",
//                 type: "file",
//                 label: "Document-0-2.doc",
//               },
//               {
//                 key: "0-1-3",
//                 type: "file",
//                 label: "Document-0-3.doc",
//               },
//               {
//                 key: "0-1-4",
//                 type: "file",
//                 label: "Document-0-4.doc",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         key: "1",
//         type: "folder",
//         label: "Desktop",
//         children: [
//           {
//             key: "1-0",
//             type: "file",
//             label: "document1.doc",
//           },
//           {
//             key: "0-0",
//             type: "file",
//             label: "document-2.doc",
//           },
//         ],
//       },
//       {
//         key: "2",
//         type: "folder",
//         label: "Downloads",
//         children: [],
//       },
//     ],
//   },
// ];

export const folderContext = createContext();

function App() {
  const [folders, setFolders] = useState([]);
  const [updateFolder, setUpdateFolder] = useState(false);

  useEffect(() => {
    fetch("https://guarded-refuge-63631.herokuapp.com/folders")
      .then((res) => res.json())
      .then((data) => setFolders(data));
  }, [updateFolder]);

  const contextValue = {
    setUpdateFolder,
    updateFolder,
  }

  return (
    <folderContext.Provider value={contextValue}>
      <main>
        <div className="folder-root">
          <FolderTree data={folders} />
        </div>
      </main>
    </folderContext.Provider>
  );
}

export default App;
