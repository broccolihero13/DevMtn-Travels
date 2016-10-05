// INITILIZE CONTROLLER
// ============================================================
angular.module("devmtnTravel").controller("packagesCtrl", function($scope, mainSrv) {
    // VARIABLES
    // ============================================================
    $scope.packageInfo = mainSrv.travelInfo;
    // FUNCTIONS
    // ============================================================
});
