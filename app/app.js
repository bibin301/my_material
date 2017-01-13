var app = angular.module('testApp', ['ui.bootstrap', 'localytics.directives', 'ngMaterial']);


app.controller('appCtl', function($scope, $mdToast, $document,$mdDialog) {

    $scope.data = "test";
    // sto toast
    $scope.showToast1 = function() {
        $mdToast.showSimple('Message Successfully Sent!');
    };

    // eno toast
    // sto date picker format
    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }
        //eno date picker

				//sto model
				$scope.closeDialog = function() {
						$mdDialog.hide();
				}
				$scope.showConfirm = function(event) {
					$mdDialog.show({

							templateUrl: 'model.html'
							//controller: DialogController2
					});
	              //  var confirm = $mdDialog.confirm()
	              //     .title('Are you sure to delete the record?')
	              //     .textContent('Record will be deleted permanently.')
	              //     .ariaLabel('TutorialsPoint.com')
	              //     .targetEvent(event)
	              //     .ok('Yes')
	              //     .cancel('No');
	              //     $mdDialog.show().then(function() {
	              //        $scope.status = 'Record deleted successfully!';
	              //        }, function() {
	              //           $scope.status = 'You decided to keep your record.';
	              //     });
	            };
							//eno model

})
