// Add the nodes option through an event call. We want to start with the parent
// item and apply separate colors to each child element, then the same color to
// grandchildren.
Highcharts.addEvent(
    Highcharts.Series,
    'afterSetOptions',
    function (e) {
      var colors = Highcharts.getOptions().colors,
        i = 0,
        nodes = {};
  
      if (
        this instanceof Highcharts.Series.types.networkgraph &&
        e.options.id === 'lang-tree'
      ) {
        e.options.data.forEach(function (link) {
  
          if (link[0] === 'XDBHost|tr11224.northeurope1-a.worker.database.windows.net') {
            nodes['XDBHost|tr11224.northeurope1-a.worker.database.windows.net'] = {
              id: 'XDBHost|tr11224.northeurope1-a.worker.database.windows.net',
              marker: {
                radius: 20
              }
            };
            nodes[link[1]] = {
              id: link[1],
              marker: {
                radius: 10
              },
              color: colors[i++]
            };
          } else if (nodes[link[0]] && nodes[link[0]].color) {
            nodes[link[1]] = {
              id: link[1],
              color: nodes[link[0]].color
            };
          }
        });
  
        e.options.nodes = Object.keys(nodes).map(function (id) {
          return nodes[id];
        });
      }
    }
  );
  
  Highcharts.chart('container', {
    chart: {
      type: 'networkgraph',
      height: '100%'
    },
    title: {
      text: 'Connectivity Azure Components'
    },
    subtitle: {
      text: 'DFS Graph paths'
    },
    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          enableSimulation: true,
          friction: -0.9
        }
      }
    },
    series: [{
      accessibility: {
        enabled: false
      },
      dataLabels: {
        enabled: false,
        linkFormat: ''
      },
      id: 'lang-tree',
      data: [
        ['Client','Other_SLB_CR'],
        ['Client','cr4.northeurope1-a.control.database.windows.net|52.138.224.1'],
        ['Client','cr7.northeurope1-a.control.database.windows.net|13.74.104.113'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','Other_GW|cr4.northeurope1-a.control.database.windows.net'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.20'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.24'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.28'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.53'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.52'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.33'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.17'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.19'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.2'],
        ['cr4.northeurope1-a.control.database.windows.net|52.138.224.1','GW|cr4.northeurope1-a.control.database.windows.net|GW.29'],
        ['cr7.northeurope1-a.control.database.windows.net|13.74.104.113','Other_GW|cr7.northeurope1-a.control.database.windows.net'],
        ['cr7.northeurope1-a.control.database.windows.net|13.74.104.113','GW|cr7.northeurope1-a.control.database.windows.net|GW.48'],
        ['cr7.northeurope1-a.control.database.windows.net|13.74.104.113','GW|cr7.northeurope1-a.control.database.windows.net|GW.52'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.20','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.20|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.20','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.20|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.20','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.20|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.20','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.20|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.24','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.24|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.24','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.24|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.24','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.24|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.24','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.24|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.28','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.28|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.28','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.28|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.28','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.28|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.28','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.28|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.53','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.53|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.53','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.53|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.53','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.53|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.53','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.53|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.52','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.52','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.52|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.52','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.52|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.52','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.52|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.33','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.33|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.33','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.33|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.33','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.33|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.33','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.33|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.17','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.17|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.17','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.17|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.17','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.17|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.17','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.17|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.19','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.19|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.19','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.19|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.19','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.19|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.19','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.19|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.2','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.2|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.2','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.2|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.2','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.2|*|*|!AppInstance'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.2','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.2|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.29','GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.29|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.29','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.29|!TR|*|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.29','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.29|*|!DB|*'],
        ['GW|cr4.northeurope1-a.control.database.windows.net|GW.29','Other_GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.29|*|*|!AppInstance'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.48','GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.48|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.48','Other_GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.48|!TR|*|*'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.48','Other_GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.48|*|!DB|*'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.48','Other_GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.48|*|*|!AppInstance'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.52','GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.52','Other_GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.52|!TR|*|*'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.52','Other_GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.52|*|!DB|*'],
        ['GW|cr7.northeurope1-a.control.database.windows.net|GW.52','Other_GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.52|*|*|!AppInstance'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.20|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.20|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.20|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.28|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.28|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.28|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.53|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.53|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.53|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.33|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.33|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.33|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.24|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.24|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.24|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr7.northeurope1-a.control.database.windows.net|GW.48|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.48|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.48|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.17|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.17|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.17|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.19|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.19|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.19|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.2|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.2|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.2|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr7.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr7.northeurope1-a.control.database.windows.net|GW.52|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['OtherGWProxiesToXDBHost|cr4.northeurope1-a.control.database.windows.net|GW.29|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.29|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['GWProxy|cr4.northeurope1-a.control.database.windows.net|GW.29|d8eb317c48d3.tr11224.northeurope1-a.worker.database.windows.net|11036','XDBHost|tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|bbd2a064308b'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|e917aaa54eb5'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|af7b1215dd4a'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|a9fc2fc3119f'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|d1c3ca06a33d'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|bd86661d6363'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|ebc8d43f8de7'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|a60dd87bc370'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|d8eb317c48d3'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','SLB_TR_tr11224.northeurope1-a.worker.database.windows.net'],
        ['XDBHost|tr11224.northeurope1-a.worker.database.windows.net','XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|ba6d92f5e495'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|bbd2a064308b','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|bbd2a064308b'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|e917aaa54eb5','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|e917aaa54eb5'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|af7b1215dd4a','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|af7b1215dd4a'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|a9fc2fc3119f','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|a9fc2fc3119f'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|d1c3ca06a33d','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|d1c3ca06a33d'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|bd86661d6363','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|bd86661d6363'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|ebc8d43f8de7','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|ebc8d43f8de7'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|a60dd87bc370','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|a60dd87bc370'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|d8eb317c48d3','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|d8eb317c48d3'],
        ['XdbHostSockDupQueue|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|ba6d92f5e495','SqlServer_key|tr11224.northeurope1-a.worker.database.windows.net|_DB_41|ba6d92f5e495']
         
      ]
    }]
  });