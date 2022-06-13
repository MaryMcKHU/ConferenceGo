//this is all JSX language (kind of a combination b/w HTML and Javascript)
// have to put / at the end of a line if a tag doesn't have a close tag
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import React from 'react';
import LocationForm from './LocationForm';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
    <Nav />
    <div className="container">
      <LocationForm />
      {/* <AttendeesList attendees={props.attendees} /> */}
    </div>
    </>
  );
}

export default App;
