const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

const NAMED_COLORS = [
    CHART_COLORS.red,
    CHART_COLORS.orange,
    CHART_COLORS.yellow,
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.grey,
  ];

function namedColor(index) {
    return NAMED_COLORS[index % NAMED_COLORS.length];
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomDataset() {
    var count = Chart1.data.labels.length;
    const dataset = [];
    
    for (i=0; i<count; i++) {
        var data = getRandomInt(0, 4000);
        dataset.push(data)
    }

    return dataset
}


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
            
            label:'NISP',

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

        responsive: true,

        scales: {
            y: {
                title: {
                    display: true, 
                    text: 'Number of Identified Specimen (NISP)',
                    font: {
                        size: 15
                    },
                    padding: {
                        y: 15
                    }
                }
            }
        },

        plugins:{

            title: {
                display:true,
                text: 'AXA Skeletal Element Distribution',

                font: {
                    size: 25
                },

                padding: {
                    bottom: 25
                }
            },

            subtitle: {
                display:true,
                text: 'demo chart 1',

                font: {
                    size: 20,
                },

                padding:{
                    bottom: 50
                }

            },

            legend: {
                display: false, // we only have one dataset
                position:'right',
                labels:{
                    fontColor:'#000'
                }
            },

            //layout: {

            //},

            tooltips: {
                enabled:false
            }
        }
    }

});

// Chart1
const myChart1 = document.getElementById('myChart1');

const periods = [
    'Shang',
    'Early Western Zhou',
    'Middle Western Zhou',
    'Late Western Zhou',
    'Spring and Autumn',
    'Warring States'
];

const data1 = {
    labels: periods,
    datasets: [
        {
            label: 'Food',
            animations: {
                y: {
                    duration: 2000,
                    delay: 500
                }
            },
            data: [1006, 1274, 470, 731, 391, 208],
            borderColor: 'red',
            // pointStyle: 'circle', // default = 'circle'; 'cross', 'crossRot', 'line', 'dash', 'rect', 'rectRounded', 'rectRot', 'star', 'triangle', 'false'
            // pointRadius: 10,
            // pointHoverRadius: 15
        },
        {
            label: 'Wine',
            data: [2787, 1904, 165, 62, 70, 88],
            borderColor: 'blue'
        },
    ]
};

const config1 = {
    type: 'line',
    data: data1,
    options: {
        responsive: true,

        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Bronze Vessels, 1100 - 221 BCE',
                font: {
                    size: 25
                },
                padding: {
                    bottom: 25
                }
            },
            subtitle: {
                display: true,
                text: 'demo chart 2',
                font: {
                    size: 20
                },
                padding: {
                    bottom: 50
                }
            }
        }
    }
};

var Chart1 = new Chart(myChart1, config1);

function addRandomDatasets() {
    const data = Chart1.data;
    const dsColor = namedColor(Chart1.data.datasets.length);
    const newDataset = {
        label: 'Dataset ' + (data.datasets.length + 1),
        borderColor: dsColor,
        data: getRandomDataset()
    }
    Chart1.data.datasets.push(newDataset);
    Chart1.update()
}

function RemoveDatasets() {
    Chart1.data.datasets.pop();
    Chart1.update()
}

function addVesselTypes() {
    let chart = Chart1
    const dsColor = ['green', 'purple', 'yellow', 'brown'];
    const newDatasets = [
        {
            label: 'Musical',
            data: [57, 2, 25, 92, 144, 103],
            borderColor: dsColor[0]
        },
        {
            label: 'Water',
            data: [81, 99, 42, 85, 112, 20],
            borderColor: dsColor[1]
        },
        {
            label: 'Weapon',
            data: [390, 66, 1, 1, 205, 705],
            borderColor: dsColor[2]
        },
        {
            label: 'Other',
            data: [77, 102, 2, 4, 27, 206],
            borderColor: dsColor[3]
        }
    ];

    for (i=0; i<newDatasets.length; i++) {
        chart.data.datasets.push(newDatasets[i]);
    }

    chart.update();
}


// Chart 2, with randomized datasets
const myChart2 = document.getElementById('myChart2');

const DATA_COUNT = 12;
const labels = [];

for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
};

const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Cubic interpolation (monotone)',
            data: datapoints,
            borderColor: CHART_COLORS.red,
            fill: false, // true; 
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        },
        {
            label: 'Cubic interpolation',
            data: datapoints,
            borderColor: CHART_COLORS.blue,
            fill: false,
            tension: 0.4
        },
        {
            label: 'Linear interpolation (default)',
            data: datapoints,
            borderColor: CHART_COLORS.green,
            fill: false
        }
    ]
};

const config2 = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x:{
            display: true,
            title: {
                display: true
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Value'
            },
            suggestedMin: -10,
            suggestedMax: 200,
            stacked: false // true, 
        }
      }
    },
};

var demoChart = new Chart(myChart2, config2);

// Chart 3, bar + line

const myChart3 = document.getElementById('myChart3');

const data2 = {
    labels: periods,
    datasets: [
        {
            label: 'Food',
            data: [1006, 1274, 470, 731, 391, 208],
            backgroundColor: 'red',
            order: 1 // try switch order here
        },
        {
            label: 'Wine',
            data: [2787, 1904, 165, 62, 70, 88],
            backgroundColor: 'blue',
            order: 2
        },
        {
            label: 'Total',
            data: [4415, 3477, 749, 1036, 971, 1336],
            borderColor: 'purple',
            type: 'line',
            order: 0
        }
    ]
};

const config3 = {
    type: 'bar',
    data: data2,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bronze Vessels, 1100 - 221 BCE'
            }
        }
    }
};

var Chart3 = new Chart(myChart3, config3)
