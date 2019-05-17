## `ALIENS-R-REAL`

### 1: Automatic Table and Date Search

* Created a basic HTML web page

* Using UFO dataset provided in the form of an array of JavaScript objects, wrote code that appends a table to the web page and then adds new rows of data for each UFO sighting.

  * Columns include `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* Added the following datum as the third entry of the data.js file:

```js
    {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
    }
```

* Used a date form in our HTML document and wrote JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

* Used bootstrap to style the table with striped rows



### 2: Multiple Search Categories


* Using multiple `input` tags and/or select dropdowns, wrote JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](static/js/data.js)

- - -


