'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
    let state = new AppState();
    state.loadItems();
    const productClicks = [];
    const productNames = [];
    const productViews = [];
    
    for (let i = 0; i < state.allProducts.length; i++) {
        const product = state.allProducts[i];
        productClicks.push(product.timesClicked);
        productNames.push(product.name);
        productViews.push(product.timesShown);
    };
    let chart = {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [
                {
                    label: '# de votos',
                    data: productClicks,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(0,0,255,0.2)',
                        'rgba(32,178,70,0.2)',
                        'rgba(255,160,122,0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(0,0,255,1)',
                        'rgba(32,178,70,1)',
                        'rgba(255,160,122,1)',
                    ],
                    borderWidth: 1
                },
                {
                    label: '# de visualizaciones',
                    data: productViews,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(0,0,255,0.2)',
                        'rgba(32,178,70,0.2)',
                        'rgba(255,160,122,0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(0,0,255,1)',
                        'rgba(32,178,70,1)',
                        'rgba(255,160,122,1)',
                    ],
                    borderWidth: 1,
                }
            ]
        },
    }
    new Chart(canvasElem,chart)
}

renderChart();
