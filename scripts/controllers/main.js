'use strict';

angular.module('redditTablesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	String.prototype.repeat = function(times) {
		return (new Array(times + 1)).join(this);
	};
	$scope.input = {text: ''};
	$scope.output = {text: ''};
	
	$scope.convertText = function() {
		$scope.output.text = '';
		var textIn = $scope.input.text.replace(/,/g , "|");
		var textArray = textIn.split("\n");
		if(textArray[0].indexOf("Basic Box Score Stats")!=-1)
		{
			textArray.splice(0,1);
		}
		var cols = textArray[0].split("|").length;
		for(var i = 0;i<textArray.length;i++)
		{
			if(i==1)
			{ 
				$scope.output.text += "|" + ":-|".repeat(cols) + "\n";
			}
			textArray[i] = "|" + textArray[i] + "|\n";
			$scope.output.text += textArray[i];
		}
		
	};
	
	$scope.test = function(){
		console.log($scope.input.text);
		
	};
	
  });
