// const autocolors = window['chartjs-plugin-autocolors'];
// Chart.register(autocolors);


const myChart = document.getElementById('myChart'); // set a context for <canvas>

// Global Options

Chart.defaults.font.family = 'Helvetica Neue';
Chart.defaults.font.size = 18;

// Chart.defaults.backgroundColor = '#9BD0F5';
// Chart.defaults.borderColor = '#36A2EB';
// Chart.defaults.color = '#000';



new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {

        labels: [
            'Humerus',
            'Ulna',
            'Radius',
            'Radius + Ulna',
            'Metacarpal',
            'Femur',
            'Tibia',
            'Metatarsal'
        ],

        datasets: [{
            
            label:'Number of Identified Specimen (NISP)',

            data:[
                25,
                96,
                259,
                38,
                63,
                18,
                366,
                17,
            ],
            // the labels and datasets are already enough to generate a basic chart
            // The default chart has some nice animations and hover effects showing tooltips
            // below are customizations: you can do it by supplying color names --

            // backgroundColor:'green' // or by setting rgba values in an array--

            backgroundColor: [
                // if no value is supplied, the value will turn to black
                'rgba(173, 232, 244, 0.6)',
                'rgba(2, 62, 138, 0.6)',
                'rgba(2, 62, 138, 0.6)',
                'rgba(2, 62, 138, 0.6)',
                'rgba(173, 232, 244, 0.6)',
                'rgba(173, 232, 244, 0.6)',
                'rgba(3, 4, 94, 0.6)',
                'rgba(173, 232, 244, 0.6)'
            ],
            // or we can use plugins, e.g. autocolors

            // we can customize the borders:
            // borderWidth: 1,
            // borderColor: '#777', // the hexadecimal for grey
            hoverBorderWidth: 1.5, // add some hover effects
            hoverBorderColor: "#000" 

        }]

    },

    options: {
        plugins:{

            title: {
                display:true,
                text: 'AXA Skeletal Element Distribution',

                font: {
                    size: 25
                },

                padding: {
                    top: 50,
                    bottom: 50
                }
            },

            legend: {
                display:false, // we only have one dataset
                position:'right',
                labels:{
                    fontColor:'#000'
                }
            },

            layout: {

            },

            tooltips: {
                enabled:false
            }

    }
  }

});