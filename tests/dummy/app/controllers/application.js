import Controller from '@ember/controller';
import { defer } from 'rsvp';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  
  @action
  test() {
    let deferred = defer();

    // setTimeout(() => { //Code to revert the drop incase of failures
    //   deferred.reject(true);
    // }, 3000);

    return deferred.promise;
  }
}
