export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      url: '',
      abstract: true,
      views: {
        'header': 'siteHeader',
        'footer': 'siteFooter'
      }
    })
    .state('root.home', {
      url: '/',
      views: {
        'container@': 'homeComponent'
      }
    })
    .state('root.contact-us', {
      url: '/contact-us',
      views: {
        'container@': 'contactUs'
      }
    })
}
