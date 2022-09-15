import Route from '@ember/routing/route';

export default class LoadVueRoute extends Route {
  beforeModel() {
    return import('core@BasicButton');
  }
}
