import React, { useState } from "react";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function Clipboard(props) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess("Copied to clipboard!");
      })
      .catch((err) => {
        setCopySuccess("Failed to copy to clipboard");
        console.error("Copy failed: ", err);
      });
  };
  console.log(copySuccess);
  setTimeout(() => {
    setCopySuccess(false);
  }, 2000);
  return (
    <div className="cursor-pointer">
      {!copySuccess ? (
        <CopyAllIcon
          onClick={() => {
            copyToClipboard(props.text);
          }}
          className="w-[50px]"
        />
      ) : (
        <p className="w-[50px] text-orange-500">Copied</p>
      )}
    </div>
  );
}
