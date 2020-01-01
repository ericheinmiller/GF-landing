import React from 'react';
import EventBox from './eventBox';

export default () => (
  <div className="events">
    <h1>Events</h1>
    <p>
      Lorem words are words that would see if this was some kind of Canadian thing. However this was manufactured in California, so the use of Lorem words aren't as appreciated.
    </p>
    <div className="events-pictures">
      <div className="events-pictures-container">
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
      </div>
      <div className="events-pictures-container">
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
      </div>
    </div>
  </div>
);
