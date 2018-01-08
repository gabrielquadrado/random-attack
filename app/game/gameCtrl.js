(function() {
    'use strict';

    angular.module('game').controller('gameCtrl', gameCtrl);

    function gameCtrl(PLAYER, $scope, $log, $rootScope) {
        $scope.step = 1;

        $scope.init = () => {
            $scope.resetPlayers();
            $scope.step = 2;
        };

        $scope.player1 = {
            "id" : 1,
            "name" : ""
        }
        $scope.player2 = {
            "id" : 2,
            "name" : ""
        }
        $scope.players = {
            1 : $scope.player1,
            2 : $scope.player2
        }
        $scope.winner = {}

        $scope.resetPlayers = () => {
            $scope.player1["life"] = PLAYER.MAX_LIFE;
            $scope.player1["lifeBarPercent"] = { "width": "100%" };
            $scope.player2["life"] = PLAYER.MAX_LIFE;
            $scope.player2["lifeBarPercent"] = { "width": "100%" };
        }

        var i = 1;
        $scope.current = $scope.players[1];
        setInterval(() => {
            $scope.current = (i%2 == 0 ? $scope.players[1] : $scope.players[2]);
            $scope.$apply();
            i++;
        },100);

        $scope.attack = (from) => {
            var to = from == 1 ? 2 : 1;
            $scope.players[to]["life"] = $scope.players[to]["life"] - 20;
            $scope.players[to]["lifeBarPercent"]["width"] = $scope.players[to]["life"] + "%";
            if($scope.players[to].life == 0){
                $scope.winner = $scope.players[from];
                $scope.step = 3;
            }
        }

        $('#winnerModal').on('hidden.bs.modal', function (e) {
          $scope.resetPlayers();
          $scope.$apply();
        })
    }
})();