import chartView from '../views/chart.view.html';

function ChartRoutes($stateProvider)
{
    $stateProvider
        .state('app.chart',
        {
            url: "/chart",
            views:
            {
                'chart-tab':
                {
                    template: chartView,
                    controller: 'ChartCtrl',
                    controllerAs: 'chart'
                }
            }
        });
}

export default ChartRoutes;
