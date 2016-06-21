var App = (function () {
    function App(id) {
        var messageService = new MessageService('https://api.parse.com/1/classes/messages');
        '';
        $("#" + id).append($('<div id="menuBar"></div>'));
        $("#" + id).append($('<div id="messageList"></div>'));
        $("#" + id).append($('<div id="messageInput"></div>'));
        var messageList = new MessageList('messageList', messageService);
        var messageInput = new MessageInput('messageInput', messageService);
        var menuBar = new MenuBar('menuBar', messageService);
        menuBar.onRoomChange(messageList.setRoom.bind(messageList)); //possible location for observable.
        // Create messageBar component
        // Messagebar dropdown that we are listening to the change inside the app. 
        // When changes, call messageList.displayMessages(filter);
        // MessageBar needs to bind to the messageService and retrieve the distinct list of rooms.
    }
    return App;
}());
var getUsername = function () {
    var search = window.location.search;
    var userIndex = search.lastIndexOf('=');
    return search.slice(userIndex + 1, search.length);
};
var app = new App('app');
