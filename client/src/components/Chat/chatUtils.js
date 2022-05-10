const Filter = require('bad-words');

// call filter.clean('your chat message') to convert bad words to ****
const filter = new Filter();
// input: message string
// output: filtered message string
const filterChatMessage = (text) => filter.clean(text);

const fakeData = {
  messages: [
    {
      id: '1',
      username: 'user19',
      messageBody: 'some fake texttttt',
      timestamp: '01:21',
      photo: 'dont know if i need this yet',
    },
    {
      id: '2',
      username: 'user71',
      messageBody: 'some fake texttttt fadssdf sadfadsafadfs',
      timestamp: '01:22',
      photo: 'dont know if i need this yet',
    },
    {
      id: '3',
      username: 'user30',
      messageBody: 'some fake textttttasdfdsafa asdfsafasdfdfasasdf asdfasd sadfadsafadfs',
      timestamp: '10:55',
      photo: 'dont know if i need this yet',
    },
    {
      id: '4',
      username: 'user4',
      messageBody: 'hi',
      timestamp: '01:11',
      photo: 'dont know if i need this yet',
    },
  ],
};

const addMessage = (
  messageBody = '',
  username = 'n0_us3r',
  timestamp = '11:12',
  id = (Number(fakeData.messages[fakeData.messages.length - 1].id) + 1),
  photo = 'dont know if i need this yet',
) => {
  const filteredMessageBody = filterChatMessage(messageBody);

  fakeData.messages.push({
    id,
    username,
    messageBody: filteredMessageBody,
    timestamp,
    photo,
  });
};

module.exports = {
  filterChatMessage,
  fakeData,
  addMessage,
};
