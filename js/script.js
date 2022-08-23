/* circle-chart */

var pieData = {
  labels: ['デザイナー', 'コーダー', 'アニメーター', '撮影', '彩色'],
  series: [7, 12, 10, 6, 4]
};

var pieOptions = {
  width: '100%',
  height: '300px'
};

new Chartist.Pie('.circle-chart', pieData, pieOptions);

var barData = {
  labels: ['2019年', '2020年', '2021年'],
  series: [[12, 21, 29]]
};

var barOptions = {
    axisY: {
        offset: 60,
        scaleMinSpace: 50,
        labelInterpolationFnc: function(value) {
          return value 
        }
    },
    width: '100%',
    height: '400px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);