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
            }
        }
    })
})