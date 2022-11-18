import { ApiTransactions } from "./api-types";

export let testData: ApiTransactions[]  = [{
    Transaction_Key: 1,
    Merchant: "McDonalds",
    Value: 20.12,
    // distance between stations in km
    Date: "2022-01-01",
    // time between stations in seconds
    Category: "Cat1",
    Currency: "USD",
    Notes: "A big d"
  },
  {
    Transaction_Key: 2,
    Merchant: "Burger House",
    Value: 10.12,
    // distance between stations in km
    Date: "2022-01-01",
    // time between stations in seconds
    Category: "Cat2",
    Currency: "USD",
    Notes: "A big mac"
  }
]