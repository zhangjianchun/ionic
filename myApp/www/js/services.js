angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '张三',
    //lastText: '今天去王五家吃饭',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '李四',
    lastText: '李四也去王五家吃钣',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '王五',
    lastText: '王五 不在家',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '老六',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '小七',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
