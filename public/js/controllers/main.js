todoApp.controller('TodoController', ['$scope', '$http', function($scope, $http){


    $http.get('/api/todos').success(function(data){
    	$scope.todos = data
    })

    $scope.add = function() {
    	if ($scope.newTodo){
    		$http.post('/api/todos', {text: $scope.newTodo}).success(function(data){
    			$scope.todos.push(data.todo);
    		})	
    	}
        $scope.newTodo = "";
    }

    $scope.delete = function(i, id){
    	$http.delete('/api/todos/' + id).success(function(data){
			$scope.todos.splice(i, 1);
    	})
	}

}])