import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stories', {path: '/stories/:story_id'});
  this.route('newstory');
});

export default Router;
