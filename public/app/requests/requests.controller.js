/**
 * Created by Pierre on 17/06/16.
 */

class RequestsController  {

    constructor ($state, RequestsService) {
        RequestsService.getRequests().$promise.then((requests) => {
            this.result = requests;
            this.createGraph();
        });


        /*setTimeout(() => {
            this.addNode('44');
            this.addEdge('44', '3', 'Test');
        }, 5000);
*/
    }

    createGraph() {
        this.s = new sigma({
            renderer: {
                container: document.getElementById('container'),
                type: 'canvas'
            },
            settings: {
                edgeLabelSize: 'proportional'
            }
        });

        for (var i = 0 ; i < this.result[1].instances.length; i++) {
            this.addNode(this.result[1].instances[i]);
        }


        for (var j = 0 ; j < this.result[0].requests.length; j++) {
            this.removeEdge(this.result[0].requests[j].source, this.result[0].requests[j].target, this.result[0].requests[j].request);
        }
    }

    addNode (label) {
        this.s.graph.addNode({
            id: label,
            label: label,
            x: Math.random(),
            y: Math.random(),
            size: 1,
            color: '#f00'
        });

        this.s.refresh();
    }

    removeEdge (source, target, label) {

        for (var k = 0 ; k < this.s.graph.edges().length; k++) {
            if (this.s.graph.edges()[k].id.indexOf(source) != -1) {
                 this.s.graph.dropEdge(source);

            }
        }
        this.s.refresh();
        this.addEdge(source, target, label);
    }

    addEdge (source, target, label) {
        console.log(label);
        

        this.s.graph.addEdge({
            id: source,
            source: source,
            target: target,
            label : label
        });

        this.s.refresh();
    }

    refresh () {
        setInterval(() => {
            this.addNode(Math.random());
        }, 10000);
    }
}

RequestsController.$inject = ['$state', 'RequestsService'];

export default RequestsController;