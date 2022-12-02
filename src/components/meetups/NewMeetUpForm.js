import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";

function NewMeetUpForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };

    props.Save(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" ref={imageRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" ref={descriptionRef} required></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
