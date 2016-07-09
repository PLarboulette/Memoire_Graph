/**
 * Created by Pierre on 18/06/16.
 */

import RequestsController from './requests.controller';
import Template from './requests.html';

const Requests = {
    template : Template,
    controller : RequestsController,
    controllerAs : 'RequestsCtrl',
    resolve: {
        requests : (RequestService) => {
            return RequestService.getRequests().then((object) => {
                console.log('requests.js 2');
                return object.data;
            });
        }
    }
};

export default Requests;