import React, {Component} from 'react'
import * as firebase from 'firebase';

// TODO: (future) show only existing key value pairs from the separate branch

class Event extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      img: '',
      ngoName: '',
      description: ''
    }
  }

  componentDidMount() {
    const eventID = this.props.match.params.id
    console.log('eventID = ' + eventID)
    console.log(' firebase.database().ref("images").child(eventID)' + firebase.database().ref('images').child(eventID));
    const eventDetailsRef = firebase.database().ref('images').child(eventID);
    eventDetailsRef.on('value', snap => {
      let eventDetailsSnapshot = snap.val()
      console.log('eventDetailsSnapshot = ' + eventDetailsSnapshot);
      this.setState({
        title: eventDetailsSnapshot.name,
        img: eventDetailsSnapshot.url,
        ngoName: eventDetailsSnapshot.smalldescription,
        description: eventDetailsSnapshot.description
      })
    })
  }

  render () {
    let image = this.state.img
    let description = this.state.description.split('\n').map((item, key) => {
     return <span key={key}>{item}<br/></span>
    })


  return (
       <div className="eventOpened">
        <header>
          <div className="eventOpened__backButton">
            <span onClick={() => this.props.history.goBack()}> Обратно</span>
          </div>
          <div className="eventOpened__ngo">{this.state.ngoName}</div>
         </header>

         <nav>





         </nav>

         <main>
          <div className="eventOpened__main" >
           <img src={image} alt='img'></img>
           <div className="eventOpened_title">
            <h3><b>{this.state.title}</b></h3>
            <p>{description}</p>




           </div>
          </div>
         </main>
        </div>

  );
 }
}

export default Event;

// <p>{this.state.description}</p>
// <pre>{ JSON.stringify(this.state.description, null, 2) }</pre>
// return (<div><pre>{ JSON.stringify(data, null, 2) }</pre></div>);
//

// <p><strong>Адрес:&nbsp;</strong>ул. Бекхожина 6А</p>
//
// <p><b>Тел: </b>+7 727 291 89 08</p>
//
// <p><strong>Часы работы: </strong>
// с 10:00 до 17:00, выходные дни: понедельник, пятница —&nbsp;воскресенье</p>
//
// <p><strong>Вход: </strong>бесплатный</p>
