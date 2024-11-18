import type React from "react";

interface EventItemProps {
  title: string;
}

const EventItem: React.FC<EventItemProps> = ({ title }) => (
  <li className="event-item">
    <img
      src="./src/assets/images/event1.jpg"
      alt={title}
      className="event-image"
    />
    <figcaption>{title}</figcaption>
  </li>
);

export default EventItem;
