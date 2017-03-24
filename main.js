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
        }
    })
})