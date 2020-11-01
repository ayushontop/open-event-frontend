import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class MessagesRoute extends Route {
  titleToken() {
    return this.l10n.t('Messages');
  }

  model() {
    return this.store.query('message-setting', {});
  }
}
