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

// console.log(Object.entries(tableData[2]));


var table = d3.select("table")

var body = d3.select("tbody")

tableData.forEach((sighting) => {
    var newrow = body.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value)
        
        newrow.append('td').text(value)
  
    });
});


var submit = d3.select("#filter-btn");

// submit.on("click", function() {
//     d3.event.preventDefault();
//     var dateInputElement = d3.select("#datetime");
//     var dateinputValue = dateInputElement.property("value");
//     console.log(dateinputValue);

//     var dateFilteredData = tableData.filter(sighting => sighting.datetime === dateinputValue);
//     console.log(dateFilteredData);

//     body.selectAll("tr").text("")

//     dateFilteredData.forEach((date) => {
//         var daterow = body.append('tr');
//         Object.entries(date).forEach(([key, value]) => {
//             // console.log(key, value) 
//             daterow.append('td').text(value)
//         });
//     });

// });


submit.on("click", function() {
    
    d3.event.preventDefault();
    var dateInputElement = d3.select("#datetime");
    var dateinputValue = dateInputElement.property("value");

    var cityInputElement = d3.select("#city");
    var cityinputValue = cityInputElement.property("value");

    var stateInputElement = d3.select("#state");
    var stateinputValue = stateInputElement.property("value");

    var shapeInputElement = d3.select("#shape");
    var shapeinputValue = shapeInputElement.property("value");


    var FilteredData = tableData.filter( sighting => (
                sighting.datetime === dateinputValue ||
                sighting.city === cityinputValue ||
                sighting.state === stateinputValue ||
                sighting.shape === shapeinputValue
            )
        );
    console.log(FilteredData);

    body.selectAll("tr").text("")
    FilteredData.forEach((date) => {
        var daterow = body.append('tr');
        Object.entries(date).forEach(([key, value]) => {
            daterow.append('td').text(value)
        });
    });

});

