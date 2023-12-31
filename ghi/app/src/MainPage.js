import React from 'react';
import { Link } from 'react-router-dom';

function ConferenceColumn(props) {
  return (
    <div className="col">
      {props.list.map(data => {
        const conference = data.conference;
        const weather = data.weather
        return (
          <div key={conference.href} className="card mb-3 shadow">
            <img src={conference.location.picture_url} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>{conference.name}</h5>
              <h6 className="card-subtitle mb-2" style={{color:'red', fontStyle:'italic'}}>
                {conference.location.name}
              </h6>
              <p className="card-text">
                {conference.description}
              </p>
              <p>
                Presentations: {conference.max_presentations} <br />
                Maximum attendees: {conference.max_attendees}
              </p>
              <p style={{fontWeight:'bold'}}>
                Currently {Math.round(weather.temp)}&deg;F, {weather.description}
              </p>
            </div>
            <div className="card-footer" style={{textAlign:'center', color:'blueviolet', fontWeight:'bold'}}>
              {new Date(conference.starts).toLocaleDateString()}
              -
              {new Date(conference.ends).toLocaleDateString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conferenceColumns: [[], [], []],
    };
  }

  async componentDidMount() {
    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const requests = [];
        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          requests.push(fetch(detailUrl));
        }

        const responses = await Promise.all(requests);
        const conferenceColumns = [[], [], []];

        let i = 0;
        for (const conferenceResponse of responses) {
          if (conferenceResponse.ok) {
            const details = await conferenceResponse.json();
            conferenceColumns[i].push(details);
            i = i + 1;
            if (i > 2) {
              i = 0;
            }
          } else {
            console.error(conferenceResponse);
          }
        }

        this.setState({conferenceColumns: conferenceColumns});
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <>
        <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
          <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
          <h1 className="display-5 fw-bold">ConferenceGO</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              The only resource you'll ever need to plan and run your in-person or
              virtual conference for thousands of attendees and presenters.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/attendees/new" className="btn btn-primary btn-lg px-4 gap-3">Attend a conference</Link>
            </div>
          </div>
        </div>
        <div className="container" style={{backgroundColor: 'whitesmoke'}}>
          <h2>UPCOMING CONFERENCES</h2>
          <div className="row">
            {this.state.conferenceColumns.map((conferenceList, index) => {
              return (
                <ConferenceColumn key={index} list={conferenceList} />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;