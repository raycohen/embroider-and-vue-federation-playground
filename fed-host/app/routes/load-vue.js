import Route from '@ember/routing/route';

export default class LoadVueRoute extends Route {
  async beforeModel() {
    window.coreWorld = await import('core/HelloWorld');
    debugger;
  }
}
