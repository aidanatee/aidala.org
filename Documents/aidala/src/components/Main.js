import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Event from './Event';
import * as firebase from 'firebase';


class Main extends Component {

  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    const eventsRef = firebase.database().ref('images');
    console.log('firebase.database().ref("images") = ' + firebase.database().ref('images'));
    eventsRef.once('value', snap => {
      let eventsSnapshot = snap.val();
      console.log('eventsSnapshot = ' + eventsSnapshot);
      let eventsState = [];
      for (let event in eventsSnapshot) {
        eventsState.push({
          id: event,
          title: eventsSnapshot[event].name,
          subtitle: eventsSnapshot[event].smalldescription,
          description: eventsSnapshot[event].description,
          img_src: eventsSnapshot[event].url,
        });
      }
      this.setState({
        events: eventsState
      })
    })

  }

  render () {

    let events = this.state.events.map((event) => {
    let background = event.img_src

    return (
          <div className="event-item" key={event.id} style={{ backgroundImage: "url(" + background + ")"}}>
           <NavLink to={`event/${event.id}`}>

            <div className="dark-layer"></div>
            <div className="event-description">
             <h3>{event.title}</h3>
             <p>{event.subtitle}</p>
            </div>
            </NavLink>
          </div>
    );
  });

  return (
    <div>
      <p className="page-description">Новости о ближайших благотворительных мероприятиях и акциях в Алматы.
      <br/><a href="https://forms.gle/TgYU1mft2TdXCpaK8" target="_blank" className="external-link">Напишите нам,</a> чтобы добавить свое мероприятие.</p>
      <div className="event-container">
        {events}
      </div>
    </div>
  );
 }
}

export default Main;
