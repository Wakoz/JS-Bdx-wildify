import React from "react";
import EventSection from "../../components/Events/EventSection";
import "./StyleEvent.css";

function Events() {
  return (
    <section className="events-section">
      <ul className="events-list">
        <EventItem imageSrc="event1.jpg" title="Event1" />
        <EventItem imageSrc="event2.jpg" title="Event2" />
        <EventItem imageSrc="event3.jpg" title="Event3" />
        <EventItem imageSrc="event4.jpg" title="Event4" />
      </ul>
    </section>
  );
}

export default Events;
