class MessageInput {
  constructor(id, messageService)  {
    this.node = $(`#${id}`);
    this.node.append($('<div></div>').html('<input type="text" class="inputForm"></input><button type="submit" class="btn btn-primary">Submit</button>');
  }
}