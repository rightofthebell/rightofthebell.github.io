import json

test_response =  [{
    "Transaction_Key": 1,
    "Merchant": "McDonalds",
    "Value": 20.12,
    "Date": "2022-01-01",
    "Category": 1,
    "Currency": "USD",
    "Notes": "A big mac"
  },
  {
    "Transaction_Key": 2,
    "Merchant": "Burger House",
    "Value": 10.12,
    "Date": "2022-01-01",
    "Category": 1,
    "Currency": "USD",
    "Notes": "A big mac"
  },
  {
    "Transaction_Key": 3,
    "Merchant": "Tesco",
    "Value": 12.54,
    "Date": "2022-01-01",
    "Category": 1,
    "Currency": "USD",
    "Notes": ""
  }
]

def lambda_handler(event, context):
    # TODO implement
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",  
            "Access-Control-Allow-Methods": "GET" 
        },
        "body": test_response
    }
    
