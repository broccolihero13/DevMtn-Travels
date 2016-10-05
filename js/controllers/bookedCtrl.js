// INITILIZE CONTROLLER
// ============================================================
angular.module("devmtnTravel").controller("bookedCtrl", function($scope, $stateParams, mainSrv) {
    // VARIABLES
    // ============================================================
    $scope.travelInfo = mainSrv.travelInfo;
    // FUNCTIONS
    // ============================================================
    var getBookedID = function() {
        var bookedId = $stateParams.id;
        console.log(bookedId);
        for (var i = 0; i < $scope.travelInfo.length; i++) {
            if (bookedId == $scope.travelInfo[i].id) {
                $scope.currentBookedID = $scope.travelInfo[i];
                $scope.image = {
                    "background-image": "url(" + $scope.currentBookedID.image + ")"
                };
            }
        }
    }();

});
