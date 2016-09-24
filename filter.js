function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function(obj) {
    return obj.message;
  }).filter(function(elem) {
    return elem.length < 50;	
  });
}

module.exports = getShortMessages
