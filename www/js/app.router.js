import menuView      from '../views/menu.html';
import firstTabView from '../views/first.html';

function AppRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        template: menuView
    })
    .state('tabs.home', {
        url: "/home",
        views: {
            'home-tab': {
                template: firstTabView
            }
        }
    });
    $urlRouterProvider.otherwise('/app/home');
}

export default AppRouter;
