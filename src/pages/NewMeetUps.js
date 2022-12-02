import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpsPage() {
  const navigate = useNavigate();

  function AddMeetUpHandler(meetupData) {
    fetch(
      "https://react-getting-started-dfbfc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Create MeetUp</h1>
      <NewMeetUpForm Save={AddMeetUpHandler} />
    </section>
  );
}

export default NewMeetUpsPage;
