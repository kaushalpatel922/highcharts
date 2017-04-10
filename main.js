console.log("Hello World!");


    //Create the chart
    Highcharts.chart('container', {
        chart: {
            //define the chart type here.
            type:'column'
        },
        title: {
            text: 'Chart Analysis'
        },
        subtitle: {
            text: 'Product sales over years'
        },
        xAxis: {
            type: 'Category'
        },
        yAxis: {
            title: {
                text: 'Revenue in millions'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value + 'm';
                }
            },
            gridLineWidth: 0.6,
            maxPadding: 0.1
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '${point.y:.1f} m'
                },
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:13px">{series.name}</span><br>',
            pointFormat: '<span style="font-size: 13px""color:{point.color}">{point.name}</span>: <b>${point.y:.1f}m</b><br/>'
        },
        series: [{
            name: 'Financials',
            colorByPoint: true,
            data:[{
                name: '2016',
                y: 50,
                drilldown: '2016'
            }, {
                name: '2015',
                y: 65,
                drilldown: '2015'
            }, {
                name: '2014',
                y: 89,
                drilldown: '2014'
            }]
        }],
        drilldown: {
          series: [{
            name: '2016',
            id: '2016',
            data: [{
              name: '6a',
              y: 11,
              drilldown: '6a'
            }, {
              name: '6b',
              y: 12,
              drilldown: '6b'
            }, {
              name: '6c',
              y: 13,
              drilldown: '6c'
            }]
          }, {
            name: '6a',
            id: '6a',
            data: [
              ['2016', 58],
              ['2015', 62],
              ['2014', 45],
              ['2013', 39]
            ]
          }]
        }
    })
