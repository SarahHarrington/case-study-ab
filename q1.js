/* 1. 
Write a program that parses the following log messages into a JSON object and prints the JSON out.  
Timestamp should be converted to time since epoch (assume timestamps are UTC).
Log messages:
2017-03-24 15:05:00 127.0.0.1 fname=foo lname=bar id=1
2017-02-14 19:00:00 8.8.4.4 fname=test lname=tester id=2
2017-01-01 00:00:01 1.1.1.1 fname=cool lname=beans id=3

JSON object output:
{
        “time”: 1490367900
        “ip”: “127.0.0.1”
        “fname”: “foo”
        “lname”: “bar”
        “id”: 1
}

Bonus:
Read log messages in from a file
Deliverable:
A source file in any programming language with instructions on how to run */

let logOutput = {
  time: null,
  ip: null,
  fname: null,
  lname: null,
  id: null
}

function logConverter(message) {
  
  let msgArr = message.split(' ');
  let date = msgArr[0] + ' ' + msgArr[1];

  Date.prototype.getEpochTime = function() {return this.getTime()/1000|0 };
  let epochTime = new Date(date).getEpochTime();

  logOutput.time = epochTime;
  logOutput.ip = msgArr[2];

  msgArr.splice(0, 3)

  for (let i = 0; i < msgArr.length; i++) {
    let newItem = msgArr[i].split('=');
    if (newItem[0] === 'fname') {
      logOutput.fname = newItem[1];
    }
    if (newItem[0] === 'lname') {
      logOutput.lname = newItem[1];
    }
    if (newItem[0] === 'id') {
      logOutput.id = newItem[1];
    }
  }

  return JSON.stringify(logOutput);

}

logConverter('2017-03-24 15:05:00 127.0.0.1 fname=foo lname=bar id=1');