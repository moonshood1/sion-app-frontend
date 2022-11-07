import { useState } from "react";
import { motion } from "framer-motion";
import { getlastEvent } from "../../api/getLastEvent";
import { getEventsAll } from "../../api/getAllEvents";
import { getSingleEvent } from "../../api/getSingleEvent";
import { CardComponent } from "../common/card";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect } from "react";

export function Events() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  const [emptyEvent, setEmptyEvent] = useState(false);
  const [emptyEvents, setEmptyEvents] = useState(false);

  const getTheLastPublishedEvent = async () => {
    const resp = await getlastEvent();
    if (resp.success) {
      setEvent(resp.event[0]);
    } else {
      setEmptyEvent(true);
    }
  };

  const getAllEvents = async () => {
    const resp = await getEventsAll();
    if (resp.success) {
      setEvents(resp.events);
    } else {
      setEmptyEvents(true);
    }
  };

  const fetchEvent = async (id) => {
    const resp = await getSingleEvent(id);
    if (resp.success) {
      console.log(resp.event);
      setEvent(resp.event);
    } else {
      setEmptyEvent(true);
    }
  };

  useEffect(() => {
    getTheLastPublishedEvent();
    getAllEvents();
  }, []);

  const EventHeaderAndFooter = WithHeaderAndFooter(() => (
    <div className="body__container">
      <div className="main_event">
        <div className="main_event-col-left">
          {event && (
            <>
              <h3
                style={{ marginBottom: "2%", marginTop: "2%" }}
                className="event_title"
              >
                {event.name}
              </h3>
              <p className="event_text">{event.description}</p>
              {event.secondText && (
                <>
                  <br />
                  <p className="event_text"> {event.secondText}</p>
                </>
              )}
              {event.thirdText && (
                <>
                  <br />
                  <p className="event_text"> {event.thirdText}</p>
                </>
              )}
            </>
          )}
          {/* <div className="main_event-date">
            <small>Date de l'evenement : 20-06-2022</small>
          </div> */}
        </div>
        <div className="main_event-col-right">
          <iframe
            className="event-thumbnail"
            src={`https://www.youtube.com/embed/${event.url}?rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="other_events">
        <h3 className="event_title">Les autres evenements </h3>
        <OwlCarousel
          className="owl-theme"
          responsive={{
            0: {
              items: 2,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          }}
        >
          {events &&
            events.map((event) => (
              <div onClick={() => fetchEvent(event._id)} key={event._id}>
                <CardComponent
                  title={event.name}
                  description={`${
                    event.description && event.description.slice(0, 50)
                  } ...`}
                  link={event.image}
                  id={event._id}
                  type={"event"}
                />
              </div>
            ))}
        </OwlCarousel>
      </div>
    </div>
  ));

  return <EventHeaderAndFooter />;
}
