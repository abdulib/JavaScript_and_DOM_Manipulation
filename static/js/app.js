// from data.js
var tableData = data;

// test
// console.log(Object.entries(tableData[0]));

tableData.splice(2,1, {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
    });

console.log(Object.entries(tableData[2]));


var table = d3.select("table")

var body = d3.select("tbody")


tableData.forEach((sighting) => {
    var newrow = body.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value)
        
        newrow.append('td').text(value)
  
    });
});

