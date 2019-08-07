import React, {Component} from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom';
import * as firebase from 'firebase';
import NGOprofile from './NGOprofile';


class NGOs extends Component {

  constructor() {
    super();
    this.state = {
      ngos: [],
      displayCategory: 'Все',
      showModal: false,
      modalTitle: '',
      modalImage: '',
      modalDescription: '',
      modalSmallDescription: ''
    }
  }

  componentDidMount() {
    const ngosRef = firebase.database().ref('nkos');
    console.log('firebase.database().ref("nkos") = ' + firebase.database().ref('nkos'));
    ngosRef.once('value', snap => {
      let ngosSnapshot = snap.val();
      console.log('ngosSnapshot = ' + ngosSnapshot);
      let ngosState = [];
      for (let ngo in ngosSnapshot) {
        ngosState.push({
          id: ngo,
          title: ngosSnapshot[ngo].name,
          subtitle: ngosSnapshot[ngo].smalldescription,
          description: ngosSnapshot[ngo].description,
          img_src: ngosSnapshot[ngo].image,
        });
      }
      this.setState({
        ngos: ngosState
      })
    })

  }

  setCategory = (category) => {
    this.setState({
      displayCategory: category
    });
  }

  openModalForNGO = (ngo) => {
    this.setState({
      showModal: true,
      modalTitle: ngo.title,
      modalImage: ngo.img_src,
      modalDescription: ngo.description,
      modalSmallDescription: ngo.subtitle

    })
  }

  hideModalForNGO = () => {
    this.setState({
      showModal: false,
      modalTitle: '',
      modalImage: '',
      modalDescription: '',
      modalSmallDescription: ''
    });
  }

  render () {

    let displayCategory = this.state.displayCategory

    const all = 'Все'

    const ngoCategories = [
      "Благотворительные фонды", 'Помощь детям', 'Помощь пожилым гражданам', "Помощь людям с инвалидностью", "Помощь животным", 
      "Центры поддержки", "Общественные движения", "Международные НКО"]

    let categoryButtons = ngoCategories.map(category => {
      return (
          <button
            key={category}
            onClick={() => this.setCategory(category)}
          >
            {category}
          </button>
        );
      });



    let ngos = this.state.ngos.filter(
      ({ subtitle }) =>
        subtitle.includes(displayCategory) || displayCategory === "Все"
    )
    .map((ngo) => {
    let icon = ngo.img_src

    return (
      <div className="card">
        <img src={icon} alt={ngo.title} className="img_rounded"></img>
        <h4 className="card_title">{ngo.title}</h4>
        <p className="card_description">{ngo.subtitle}</p>
        <button className="card_btn" onClick={() => this.openModalForNGO(ngo)}>профиль</button>

      </div>
    );
  });

  return (
    <div>
      <p className="page-description">Контакты благотворительных фондов, некоммерческих организаций и общественных движений.
      Вы также можете <a href="https://forms.gle/whvEJmMRDPYGCwUX9" target="_blank" className="external-link"> добавить свою организацию</a> </p>

      <div className="ngoCategories">
        <button
          key={all}
          onClick={() => this.setCategory(all)}
        >
          {all}
        </button>

       {categoryButtons}

       </div>

       <div className="cards">
        {ngos}
        </div>

         <NGOprofile
           show={this.state.showModal}
           handleClose={this.hideModalForNGO}
           modalTitle= {this.state.modalTitle}
           modalImage= {this.state.modalImage}
           modalDescription= {this.state.modalDescription}
           modalSmallDescription= {this.state.modalSmallDescription}
          />

    </div>
  );
 }
}

export default NGOs;

// const uniqueItems = (x, i, arr) => arr.indexOf(x) === i;
//
// const ngoCategories = this.state.ngos.map(ngo => ngo.subtitle).filter(
//   uniqueItems
// );
