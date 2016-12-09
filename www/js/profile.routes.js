// profile.routes.js
import profileTabView from '../views/profile.view.html';

function ProfileRoutes($stateProvider)
{
    $stateProvider
        .state('app.profile',
        {
            url: "/profile",
            views:
            {
                'profile-tab':
                {
                    template: profileTabView,
                    controller: 'ProfileCtrl',
                    controllerAs: 'profile'
                }
            }
        });
}

export default ProfileRoutes;
