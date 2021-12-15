import React, { useEffect, useState } from "react";
import "./FilesViewer.css";
import { db } from "../firebase";
import FileItem from "./FileItem";
import FileCard from "./FileCard";

const FilesViewer = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [files]);

  return (
    <div className="fileViewer">
      <div className="fileViewer__row">
        {files.map(({ id, item }) => (
          <FileCard key={id} name={item.caption} fileUrl={item.fileUrl} />
        ))}
      </div>
      <div className="fileViewer__titles">
        <div className="fileViewer__titles--left">
          <p>Name</p>
        </div>
        <div className="fileViewer__titles--right">
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          key={id}
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default FilesViewer;
