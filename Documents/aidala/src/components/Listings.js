import React, {Component} from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom';
import ListingsContainer from './ListingsContainer';
import * as firebase from 'firebase';


class Listings extends Component {

  constructor() {
    super();
    this.state = {
      canHelpData: [],
      needHelpData: []
    }
  }

  componentDidMount() {
    const canHelpPostsRef = firebase.database().ref('canHelpPosts');
    console.log('firebase.database().ref("canHelpPosts") = ' + firebase.database().ref('canHelpPosts'));
    canHelpPostsRef.on('value', snap => {
      let canHelpPosts = snap.val();
      console.log('canHelpPosts = ' + canHelpPosts);
      let canHelpState = [];
      for (let post in canHelpPosts) {
        canHelpState.push({
          id: post,
          name: canHelpPosts[post].name,
          postImage: canHelpPosts[post].postImage,
          tweet: canHelpPosts[post].tweet
        });
      }
      this.setState({
        canHelpData: canHelpState
      })
    })

    const needHelpPostsRef = firebase.database().ref('posts');
    needHelpPostsRef.once('value', snap2 => {
      let needHelpPosts = snap2.val();
      console.log('needHelpPosts = ' + needHelpPosts);
      let needHelpState = [];
      for (let post in needHelpPosts) {
        needHelpState.push({
          id: post,
          name: needHelpPosts[post].name,
          postImage: needHelpPosts[post].postImage,
          tweet: needHelpPosts[post].tweet
        });
      }
      this.setState({
        needHelpData: needHelpState
      })
    })


  }

  render () {
    const { match } = this.props;

  return (
    <div>
    <p className="page-description">
    Знаете кого-то, кому необходима помощь или сами готовы ее предоставить? <a href="https://forms.gle/HgB2SUdq2ceb1uUz9" target="_blank" className="external-link">
    <br />Заполните анкету,</a> и мы опубликуем ваше объявление в кратчайшие сроки.</p>
    <div className="listings_container">


      <div className="switcher">
          <NavLink to={`${match.url}/canHelp`} className="switcher__button"><span>Могу помочь</span></NavLink>
          <NavLink to={`${match.url}/needHelp`} className="switcher__button"><span>Нужна помощь</span></NavLink>

      </div>

      {/* Write routes here... */}
      <Route exact path={match.path}
                   render={ () => <Redirect to={`${match.path}/canHelp`} /> } />

      <Route path={`${match.path}/canHelp`}
             render={ () => <ListingsContainer data={this.state.canHelpData} /> } />
      <Route path={`${match.path}/needHelp`}
             render={ () => <ListingsContainer data={this.state.needHelpData} /> } />

    </div>
    </div>
  );
 }
}

export default Listings;
