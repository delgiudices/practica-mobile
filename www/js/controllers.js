angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaPreferences) {

  if (localStorage.page) {
    $scope.page = localStorage.page;
  }
  if (localStorage.link) {
    $scope.link = localStorage.link;
  }

  $scope.save = function(page, link) {
    localStorage.page = page;
    localStorage.link = link;
  }

  $scope.get = function(page, link) {
    return [{page: page, link: link}];
  }

   // var db = window.openDatabase('db2.db', 1.0, 'db', 2*1024*1024);
   // console.log(db);
   // console.log("Prefs");
   // $ionicPlatform.ready(function() {
   //   $cordovaPreferences.store('key', 'myvalue');
   //   $cordovaPreferences.fetch('key').success(function(value){
   //    console.log(value);
   //   }).error(function(error) {
   //     console.log(error);
   //   });
   // });
 
   // db.transaction(function(tx) {
   //    tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
   //    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
   //    tx.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function(tx, rs) {
   //      console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
   //    }, function(tx, error) {
   //      console.log('SELECT error: ' + error.message);
   //    });
   //    tx.executeSql('SELECT name FROM DemoTable', [], function(tx, rs) {
   //      console.log(rs);
   //    }, function(tx, error) {
   //      console.log('SELECT error: ' + error.message);
   //    });
   // });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
