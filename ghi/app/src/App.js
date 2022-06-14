//this is all JSX language (kind of a combination b/w HTML and Javascript)
// have to put / at the end of a line if a tag doesn't have a close tag
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import React from 'react';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="home" element={<MainPage />} />
          <Route index element={<MainPage />} />
        <Route path="conferences">
          <Route path="new" element={<ConferenceForm />} />
        </Route>
        <Route path="attendees">
          <Route path="new" element={<AttendConferenceForm />} />
        </Route>
        <Route path="locations">
          <Route path="new" element={<LocationForm />} />
        </Route>
        <Route path="presentations">
          <Route path="new" element={<PresentationForm />} />
        </Route>
        <Route path="attendees" element={<AttendeesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
