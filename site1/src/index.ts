import * as angular from 'angular';
import './todo-app';

import {TodoService} from './app/todos/todos';
import {ContactService} from './app/services/contact';
import {App} from './app/containers/App';
import {ContactUs} from './app/components/ContactUs';
import {Home} from './app/components/Home';
import {Header} from './app/components/Header';
import {SiteHeader} from './app/components/SiteHeader';
import {SiteFooter} from './app/components/SiteFooter';
import {PhotoGallery} from './app/components/PhotoGallery';
import {HeroSlider} from './app/components/HeroSlider';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.less';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .service('contactService', ContactService)
  .filter('to_trusted', ['$sce', function($sce){
      return function(text) {
          return $sce.trustAsHtml(text);
      };
  }])
  .component('app', App)
  .component('contactUs', ContactUs)
  .component('homeComponent', Home)
  .component('siteHeader', SiteHeader)
  .component('siteFooter', SiteFooter)
  .component('photoGallery', PhotoGallery)
  .component('heroSlider', HeroSlider)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
