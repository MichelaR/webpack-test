//index.js
import ProfileCtrl  from './profile.ctrl';
import routes       from './profile.routes';
import ChartCtrl    from './chart.ctrl';
import chartRoutes  from './chart.routes';


const ProfileModule = angular.module('profile', []);

angular.module('profile')
    .config(routes)
    .controller('ProfileCtrl', ProfileCtrl);

export default ProfileModule;

const ChartModule = angular.module('chart', ['chartFactory']);

angular.module('chart')
    .config(chartRoutes)
    .controller('ChartCtrl', ChartCtrl);
