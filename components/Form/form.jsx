import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utility/firebase";
export default function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [yearOfStudy, setYearOfStudy] = useState(0);
  const [linkedinId, setLinkedinId] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const formData = {
    username: name,
    useremail: email,
    usercontact: contact,
    userlinkedinid: linkedinId,
    userinstaid: instagramId,
    userinstitutename: instituteName,
    useryearofstudy: yearOfStudy,
  };
  const handleSubmit = async () => {
    const campusAmbassadorCollection = collection(
      db,
      "campus_ambassadors_info"
    );
    const newCampusAmbassadorRef = await addDoc(
      campusAmbassadorCollection,
      formData
    );
    console.log(newCampusAmbassadorRef.id);
  };
  return (
    <div>
      <div className="flex justify-center font-semibold text-3xl mb-4">
        Fill Up Your Details
      </div>
      <div className="flex flex-col gap-4">
        <TextField
          variant="filled"
          label="Name"
          type="text"
          color="warning"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Email Address"
          type="email"
          color="warning"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Linkedin ID"
          type="text"
          color="warning"
          onChange={(event) => {
            setLinkedinId(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Instagram ID"
          type="text"
          color="warning"
          onChange={(event) => {
            setInstagramId(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Institue Name"
          color="warning"
          type="text"
          onChange={(event) => {
            setInstituteName(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Contact Number"
          color="warning"
          type="number"
          onChange={(event) => {
            setContact(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Year of Studying"
          color="warning"
          type="number"
          onChange={(event) => {
            setYearOfStudy(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-end mt-4">
        <Button
          variant="contained"
          color="warning"
          size="large"
          className="bg-orange-500"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
