import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utility/firebase";
import {doc,setDoc} from "firebase/firestore"
import Spinner from "../Spinner/spinner";
import { UserAuth } from "../../context/AuthContext";
export default function FormComponent() {
  const { user} = UserAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [yearOfStudy, setYearOfStudy] = useState(0);
  const [linkedinId, setLinkedinId] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [loading, setLoading] = useState(false);
  const formData = {
    username: name,
    useremail: user?.email,
    usercontact: contact,
    userlinkedinid: linkedinId,
    userinstaid: instagramId,
    userinstitutename: instituteName,
    useryearofstudy: yearOfStudy,
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    // ambassadorInfo(formData);
    // const campusAmbassadorCollection = collection(
    //   db,
    //   "campus_ambassadors_info"
    // );
    const newCampusAmbassadorRef = await setDoc(
      doc(db, "campus_ambassadors_info", user.email),
      formData
    );
    location.reload();
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
        {/* <TextField
          variant="filled"
          label="Email Address"
          type="email"
          color="warning"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        /> */}
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
        {!loading ? (
          <Button
            variant="contained"
            color="warning"
            size="large"
            className="bg-orange-500"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
