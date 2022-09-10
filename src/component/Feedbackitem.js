import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from 'react'
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext"

function Feedbackitem({ item }) {
  const {deleteFeedback, editFeedback } = useContext(FeedbackContext)


  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <butto onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </butto>
      <button  onClick={() => editFeedback(item)} className="edit">
        < FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feedbackitem;
