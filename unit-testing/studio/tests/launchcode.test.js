// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  test('Returns value as "nonprofit" for the key organization',function(){
    expect(launchcode.organization).toBe("nonprofit")
  })
  test('Returns value as "nonprofit" for the key organization',function(){
    expect(launchcode.executiveDirector).toBe('Jeff')
  })
  test('Returns value as "nonprofit" for the key organization',function (){
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })
});