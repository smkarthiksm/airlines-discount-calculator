# flight-ticket-upgrader

This module is used to calculate offers for customers  and produce valid and invalid customer files in the specified output folder.

## Description
The input records are loaded and while parsing, following of the two can happen,
#### 1. Record is invalid
When one of the following validation fails:
1. Email ID is valid
2. The mobile phone is valid
3. Ticketing date is before travel date
4. PNR is 6 characters and Is alphanumeric
5. The booked cabin is valid (one of Economy, Premium Economy,
Business, First)
#### 2. Record is valid
If the above validation passes, then discount code is calculated for the customers based on the Fare Class
1. Fare class A - E will have discount code OFFER_20
2. F - K will have discount code OFFER_30
3. L - R will have OFFER_25
4. Rest will have no offer code


After the inputs are parsed and validation is done, then output files are created in the specified folder.
## Installation

Use the package manager [npm](https://www.npmjs.com/package/npm) to install the module.

```bash
npm install flight-ticket-upgrader
```

## Usage

```node
import transformData from "airline-discount-calculator"

// Using ES6 promises
transformData({
    input: "customer-data-one.csv",
    output: {
      validFilePath: "valid-users-output.csv",
      invalidFilePath: "invalid-users-output.csv",
    },
  }).then((result) => {
    console.log(result) // Output files created successfully. Please check output folder
    // your logic
    ...
  }).then((result) => {
    // handle exception
    ...
  });

-------
// Using async/await
async function calculateDiscount(){
    try {
        const result = await transformData({
            input: "customer-data-one.csv",
            output: {
              validFilePath: "valid-users-output.csv",
              invalidFilePath: "invalid-users-output.csv",
            },
          });
        console.log(result) // Output files created successfully. Please check output folder
        // your logic
    }
    catch(err){
        // handle exception
    }
}
```

## Parameters
transformData(fileConfig)

#### fileConfig - 
    {
        input: "customer-data-one.csv", //path for input file
        output: {
          validFilePath: "valid-users-output.csv", // path for valid customers file
          invalidFilePath: "invalid-users-output.csv", // path for invalid customers file
        },
    }


## Test specs
To see sample behavior, please run the following test spec and check the output folder(*test/sample-files/output*)
#### test/src/index.spec.js


## License
[ISC](https://choosealicense.com/licenses/isc/)
