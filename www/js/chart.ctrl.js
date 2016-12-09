// profile.ctrl
import ChartFact0ry from './ChartFactry.js'

class ChartCtrl
{
    constructor(JsonService)
    {
        ChartFactry.JsonService.getSomeData().then(function(response)
        {
          this.data = response.data;
        }
    }





export default ChartCtrl;
