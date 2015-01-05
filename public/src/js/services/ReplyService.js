/**
 * ReplyService is referenced as 'Replies' by requesting modules
 * */
angular.module('ReplyService', []).factory('Replies', ['$http', function ($http) {
    return {
        // call to get all replies for a shout
        get: function (id) {
            return $http.get('/api/replies/' + id);
        },

        // call to POST and create a new reply
        create: function (replyData) {
            return $http.post('/api/reply', replyData);
        }
    };
}]);