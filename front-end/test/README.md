# FRONTEND TEST SERVER
***
### This is just a test server to quickly throw together test endpoints to work on the frontend.

## *Get Species Data*
***
Returns json data about a single species.
* **URL** <br>
    /species
* **Method:** <br>
    `POST`
* **Parameters** <br>
  ```json
      {
        "in": "query",
        "name": "speciesName",
        "required": true,
        "schema": {
          "type": "string"
        }}
  ```
* **Success Response:**
    * **Code:** 200 <br>
      **Content:** `{speciesName: , scientificName: ,Coordinates: , imgURL: , mapURL: , DNA: }`
    
* **Error Response:**
    * **Code:** 404 NOT FOUND <br>
      **Content:** `{ error: "Species does not exist in database" }`

* **Example Call:**
```javascript
    $.ajax({
      url: "/species?speciesName=Gorilla",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
```