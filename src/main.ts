import {Dependencies} from '@/store/dependencies';
import {AppStore, createStore} from '@/store/store';
import {MuseumRepository} from '@/modules/museum/infrastructure/museum.repository';

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({dependencies: this.dependencies});
  }

  setupDependencies(): Dependencies {
    return {
      museumGateway: new MuseumRepository(),
    };
  }
}

export const app = new App();
