;(function () {
    'use strict';

    function CrudFactory(promise, initData) {
        this.data = initData;
        this.promise = promise;
    }
    
    CrudFactory.prototype.getAll = function(){
        return this.promise.resolve(this.data);
    };

    CrudFactory.prototype.getById = function(id) {
        if(!_.isFinite(id)){
            id = parseInt(id);
        }
        return this.promise.resolve(_.find(this.data, { id: id }));
    };

    CrudFactory.prototype.add = function() {
        return this.promise.resolve(this.data);
    };

    CrudFactory.prototype.updateById = function(id, value) {
        this.data = _.map(this.data, function(v){
            if (v.id === id) {
                return _.assign(value, v);
            }
            return v;
        });
        return this.promise.resolve(this.data);
    };

    CrudFactory.prototype.deleteById = function(id) {
        this.data = _.filter(this.data, function(v){
            return v.id !== id;
        });
        return this.promise.resolve(this.data);
    };


    app.factory('CrudFactory', ['$q', function($q){
        'ngInject';
        return function(data){
            return new CrudFactory($q, data);
        };
    }]);
})();