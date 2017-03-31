console.log("Hello World!");

$(function() {
    //Create the chart
    Highcharts.chart('container', {
        chart: {
            //define the chart type here.
            type:''
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
                name:'a',
                y: 1,
                drilldown:'a'
            }, {
                name: 'b',
                y: 2,
                drilldown: 'b'
            }, {
                name: 'c',
                y: 3,
                drilldown: 'c'
            }]
        }],
        drilldown: {
          series: [{
            name: 'a',
            id: 'a',
            data: [{
              name: 'a.a',
              y: 11,
              drilldown: 'adata'
            }, {
              name: 'a.b',
              y: 12,
              drilldown: 'bdata'
            }, {
              name: 'a.c',
              y: 13,
              drilldown: 'cdata'
            }]

          }]
        }
    })
})
