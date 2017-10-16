var fs = require('fs');

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}



function deg2rad(deg) {
  return deg * (Math.PI/180)
}
function generateLinks(listOfPlaceToGo) {
  debugger;
  var Links = [];
  var list = listOfPlaceToGo.slice();
  var placeFrom = list.pop();
  while(placeFrom!=null){
    list.forEach(function (placeTo) {
      Links.push(
        {
            "source":placeFrom.name,
            "target": placeTo.name
        });
    });
    placeFrom = list.pop();
  }
  return Links;
};
function generateLinks(listOfPlaceToGo) {
  debugger;
  var Links = [];
  var list = listOfPlaceToGo.slice();
  var placeFrom = list.pop();

    list.forEach(function (placeTo) {
        var distanec = getDistanceFromLatLonInKm(placeFrom.latitude,placeFrom.longitude,placeTo.latitude,placeTo.longitude);
      Links.push(
        {
            "source":placeFrom.name,
            "target": placeTo.name+" in "+parseInt(distanec)+" km",
            "distance":distanec

        });
    });
    placeFrom = list.pop();

  return Links;
}
/*
{
    "source": "Analytics",
    "target": "Science"
}
*/

[{
    "source": "Analytics",
    "target": "Science"
}]

var listOfPlaceToGoInCleveland =[
    {
        "_id": "59e11b47bc0921e5e28cef97",
        "business_id": "AwlvIsKDqB5LeKNWC6k4kQ",
        "name": "The Cleveland Museum of Art",
        "neighborhood": "University",
        "address": "11150 East Blvd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44106",
        "latitude": 41.5082394966,
        "longitude": -81.6115303874,
        "stars": 5,
        "review_count": 235,
        "is_open": 1,
        "attributes": {
            "GoodForKids": true
        },
        "categories": [
            "Education",
            "Specialty Schools",
            "Museums",
            "Arts & Entertainment",
            "Performing Arts",
            "Art Schools",
            "Art Classes"
        ],
        "hours": {
            "Tuesday": "10:00-17:00",
            "Friday": "10:00-21:00",
            "Wednesday": "10:00-21:00",
            "Thursday": "10:00-17:00",
            "Sunday": "10:00-17:00",
            "Saturday": "10:00-17:00"
        }
    },
    {
        "_id": "59e11b29bc0921e5e28c25d1",
        "business_id": "1veVZUawy7IhIc5oDpRRQA",
        "name": "Slyman's Restaurant",
        "neighborhood": "Goodrich Kirtland",
        "address": "3106 Saint Clair Ave NE",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44114",
        "latitude": 41.5128706,
        "longitude": -81.6712543,
        "stars": 4.5,
        "review_count": 361,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": false,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": true,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "free",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": false,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Sandwiches",
            "American (Traditional)",
            "Restaurants"
        ],
        "hours": {
            "Monday": "6:00-14:30",
            "Tuesday": "6:00-14:30",
            "Friday": "6:00-14:30",
            "Wednesday": "6:00-14:30",
            "Thursday": "6:00-14:30",
            "Saturday": "9:00-13:00"
        }
    },
    {
        "_id": "59e11b29bc0921e5e28c25d7",
        "business_id": "-Eu04UHRqmGGyvYRDY8-tg",
        "name": "West Side Market",
        "neighborhood": "Ohio City",
        "address": "1979 W 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4846863,
        "longitude": -81.7030619,
        "stars": 4.5,
        "review_count": 723,
        "is_open": 1,
        "attributes": {
            "Alcohol": "none",
            "Caters": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "RestaurantsTakeOut": true,
            "ByAppointmentOnly": false,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Shopping",
            "Food",
            "Seafood Markets",
            "Fruits & Veggies",
            "Ethnic Food",
            "Market Stalls",
            "Farmers Market",
            "Specialty Food",
            "Public Markets",
            "Meat Shops"
        ],
        "hours": {
            "Sunday": "10:00-16:00",
            "Friday": "7:00-18:00",
            "Wednesday": "7:00-16:00",
            "Monday": "7:00-16:00",
            "Saturday": "7:00-18:00"
        }
    },
    {
        "_id": "59e11b2bbc0921e5e28c310e",
        "business_id": "wib5LeUWBkxu67Rl3ruMDQ",
        "name": "Porco Lounge and Tiki Room",
        "neighborhood": "Tremont",
        "address": "2527 W 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.477766,
        "longitude": -81.698763,
        "stars": 4.5,
        "review_count": 268,
        "is_open": 1,
        "attributes": {
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            },
            "HasTV": false,
            "CoatCheck": false,
            "WiFi": "no",
            "NoiseLevel": "average",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "Music": {
                "dj": false,
                "background_music": true,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": false
            },
            "RestaurantsReservations": false,
            "BikeParking": true,
            "Smoking": "outdoor",
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": false
            },
            "BestNights": {
                "monday": false,
                "tuesday": false,
                "friday": true,
                "wednesday": true,
                "thursday": false,
                "sunday": false,
                "saturday": true
            },
            "RestaurantsGoodForGroups": true,
            "HappyHour": true,
            "GoodForDancing": false,
            "Alcohol": "full_bar"
        },
        "categories": [
            "Bars",
            "Lounges",
            "Nightlife",
            "Tiki Bars"
        ],
        "hours": {
            "Monday": "17:00-0:00",
            "Tuesday": "17:00-0:00",
            "Friday": "16:00-1:30",
            "Wednesday": "17:00-0:00",
            "Thursday": "17:00-0:00",
            "Saturday": "16:00-1:30"
        }
    },
    {
        "_id": "59e11b33bc0921e5e28c69ea",
        "business_id": "AsVR-X40wAzI7z7oRpsbTA",
        "name": "Cuisine Du Cambodge",
        "neighborhood": "Jefferson",
        "address": "13124 Lorain Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44111",
        "latitude": 41.4582548,
        "longitude": -81.7809899,
        "stars": 4.5,
        "review_count": 166,
        "is_open": 0,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": false,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "quiet",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": false,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Cambodian",
            "Thai",
            "Vietnamese",
            "Restaurants"
        ],
        "hours": {
            "Tuesday": "11:00-21:30",
            "Friday": "11:00-22:30",
            "Wednesday": "11:00-21:30",
            "Thursday": "11:00-21:30",
            "Sunday": "15:00-21:00",
            "Saturday": "11:00-22:30"
        }
    },
    {
        "_id": "59e11b33bc0921e5e28c6a43",
        "business_id": "WG3zvUktE1l3llwq3PPVVg",
        "name": "Nate's Deli & Restaurant",
        "neighborhood": "Ohio City",
        "address": "1923 W 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4852567,
        "longitude": -81.7039616,
        "stars": 4.5,
        "review_count": 102,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": false,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": true,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": false,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Middle Eastern",
            "Restaurants",
            "Delis"
        ],
        "hours": {
            "Monday": "10:00-17:00",
            "Tuesday": "10:00-17:00",
            "Friday": "10:00-17:00",
            "Wednesday": "10:00-17:00",
            "Thursday": "10:00-17:00",
            "Saturday": "10:00-16:00"
        }
    },
    {
        "_id": "59e11b39bc0921e5e28c93b0",
        "business_id": "xzQzJTu47vNCYlpB8jdMaw",
        "name": "George's  Kitchen",
        "neighborhood": "Jefferson",
        "address": "13101 Triskett Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44111",
        "latitude": 41.464958,
        "longitude": -81.783099,
        "stars": 4.5,
        "review_count": 159,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": false,
                "breakfast": true,
                "brunch": true
            },
            "Alcohol": "none",
            "Caters": false,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": false,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": false,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Comfort Food",
            "Diners",
            "Restaurants"
        ],
        "hours": {
            "Monday": "6:00-22:00",
            "Tuesday": "6:00-22:00",
            "Friday": "6:00-22:00",
            "Wednesday": "6:00-22:00",
            "Thursday": "6:00-22:00",
            "Sunday": "6:00-22:00",
            "Saturday": "6:00-22:00"
        }
    },
    {
        "_id": "59e11b3ebc0921e5e28cb193",
        "business_id": "e99T6GFJZKebgG3qO9i6Pw",
        "name": "A Christmas Story House and Museum",
        "neighborhood": "Tremont",
        "address": "3159 W 11th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44109",
        "latitude": 41.4687219,
        "longitude": -81.687408,
        "stars": 4.5,
        "review_count": 147,
        "is_open": 1,
        "attributes": {
            "GoodForKids": true
        },
        "categories": [
            "Public Services & Government",
            "Local Flavor",
            "Arts & Entertainment",
            "Museums",
            "Landmarks & Historical Buildings"
        ],
        "hours": {
            "Monday": "10:00-17:00",
            "Tuesday": "10:00-17:00",
            "Friday": "10:00-17:00",
            "Wednesday": "10:00-17:00",
            "Thursday": "10:00-17:00",
            "Sunday": "10:00-17:00",
            "Saturday": "10:00-17:00"
        }
    },
    {
        "_id": "59e11b46bc0921e5e28ce736",
        "business_id": "GDpd9KZdUgnjcoCWTTphqw",
        "name": "Szechuan Gourmet",
        "neighborhood": "Goodrich Kirtland",
        "address": "1735 E 36th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44114",
        "latitude": 41.508505,
        "longitude": -81.663319,
        "stars": 4.5,
        "review_count": 153,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "beer_and_wine",
            "Caters": true,
            "HasTV": true,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Szechuan",
            "Chinese",
            "Restaurants"
        ],
        "hours": {
            "Monday": "11:00-22:00",
            "Tuesday": "11:00-22:00",
            "Friday": "11:00-22:30",
            "Wednesday": "11:00-22:00",
            "Thursday": "11:00-22:00",
            "Sunday": "11:00-22:00",
            "Saturday": "11:00-22:30"
        }
    },
    {
        "_id": "59e11b49bc0921e5e28cfeb1",
        "business_id": "TKaND6oV1n2ylnCYoAfoag",
        "name": "La Plaza Supermarket",
        "neighborhood": "",
        "address": "13609 Lakewood Heights Blvd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44107",
        "latitude": 41.4701911,
        "longitude": -81.7860749,
        "stars": 4.5,
        "review_count": 118,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": false,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": true,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Mexican",
            "Grocery",
            "Restaurants",
            "Bakeries",
            "Food"
        ],
        "hours": {
            "Monday": "9:00-21:00",
            "Tuesday": "9:00-21:00",
            "Friday": "9:00-21:00",
            "Wednesday": "9:00-21:00",
            "Thursday": "9:00-21:00",
            "Sunday": "9:00-20:00",
            "Saturday": "8:00-21:00"
        }
    },
    {
        "_id": "59e11b4bbc0921e5e28d0bfd",
        "business_id": "sWRALTHK1SO0-bsWeWWyQw",
        "name": "Platform Beer Co",
        "neighborhood": "Ohio City",
        "address": "4125 Lorain Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4798638,
        "longitude": -81.7139787,
        "stars": 4.5,
        "review_count": 114,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "Caters": false,
            "HasTV": true,
            "CoatCheck": false,
            "WiFi": "free",
            "Smoking": "no",
            "NoiseLevel": "average",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "Music": {
                "dj": false,
                "background_music": false,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": true
            },
            "RestaurantsReservations": false,
            "BikeParking": true,
            "RestaurantsTakeOut": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "BestNights": {
                "monday": false,
                "tuesday": false,
                "friday": true,
                "wednesday": false,
                "thursday": true,
                "sunday": false,
                "saturday": true
            },
            "RestaurantsGoodForGroups": true,
            "HappyHour": true,
            "GoodForDancing": false,
            "Alcohol": "beer_and_wine"
        },
        "categories": [
            "Breweries",
            "Bars",
            "Nightlife",
            "Food"
        ],
        "hours": {
            "Monday": "15:00-0:00",
            "Tuesday": "15:00-0:00",
            "Friday": "15:00-2:00",
            "Wednesday": "15:00-0:00",
            "Thursday": "15:00-0:00",
            "Sunday": "10:00-22:00",
            "Saturday": "10:00-2:00"
        }
    },
    {
        "_id": "59e11b51bc0921e5e28d3588",
        "business_id": "MgwhgGo313gLxZ_eM9izCg",
        "name": "Lilly Handmade Chocolates",
        "neighborhood": "Tremont",
        "address": "761 Starkweather Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4773645,
        "longitude": -81.6823741,
        "stars": 4.5,
        "review_count": 112,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": true,
                "valet": false
            },
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": false
        },
        "categories": [
            "Food",
            "Specialty Food",
            "Beer",
            "Wine & Spirits",
            "Chocolatiers & Shops"
        ],
        "hours": {
            "Tuesday": "11:00-19:00",
            "Friday": "11:00-19:00",
            "Wednesday": "11:00-19:00",
            "Thursday": "11:00-19:00",
            "Sunday": "11:00-15:00",
            "Saturday": "11:00-19:00"
        }
    },
    {
        "_id": "59e11b52bc0921e5e28d37d4",
        "business_id": "SzcCJJmreMlWCsNjupdVAA",
        "name": "L'Albatros",
        "neighborhood": "University",
        "address": "11401 Bellflower Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44106",
        "latitude": 41.511743955,
        "longitude": -81.606395337,
        "stars": 4.5,
        "review_count": 509,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "dressy",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": true,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": true,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": true,
            "RestaurantsPriceRange2": 3,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "French",
            "Restaurants"
        ],
        "hours": {
            "Monday": "11:30-23:00",
            "Tuesday": "11:30-23:00",
            "Friday": "11:30-0:00",
            "Wednesday": "11:30-23:00",
            "Thursday": "11:30-0:00",
            "Sunday": "15:00-20:00",
            "Saturday": "11:30-0:00"
        }
    },
    {
        "_id": "59e11b53bc0921e5e28d40a1",
        "business_id": "epAifIGqwj5oFp5MV8kgiQ",
        "name": "Mia Bella Restaurant",
        "neighborhood": "Little Italy",
        "address": "12200 Mayfield Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44106",
        "latitude": 41.5085071,
        "longitude": -81.5978057,
        "stars": 4.5,
        "review_count": 336,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "DogsAllowed": true,
            "Alcohol": "full_bar",
            "Caters": true,
            "HasTV": true,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": true,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Gluten-Free",
            "Italian",
            "Restaurants",
            "Mediterranean"
        ],
        "hours": {
            "Monday": "16:30-22:00",
            "Tuesday": "16:30-22:00",
            "Friday": "12:00-23:00",
            "Wednesday": "16:30-22:00",
            "Thursday": "16:30-22:00",
            "Sunday": "12:00-21:00",
            "Saturday": "12:00-23:00"
        }
    },
    {
        "_id": "59e11b55bc0921e5e28d4eae",
        "business_id": "p6Rf2hsyF1eYVJk9ag3W2A",
        "name": "Mason's Creamery",
        "neighborhood": "Detroit-Shoreway",
        "address": "4401 Bridge Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4804680356,
        "longitude": -81.7166946923,
        "stars": 4.5,
        "review_count": 150,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": false,
            "GoodForMeal": {
                "dessert": true,
                "latenight": false,
                "lunch": false,
                "dinner": false,
                "breakfast": false,
                "brunch": false
            },
            "DogsAllowed": true,
            "Alcohol": "none",
            "Caters": true,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "free",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Food",
            "Restaurants",
            "Food Trucks",
            "Food Stands",
            "Ice Cream & Frozen Yogurt"
        ],
        "hours": {
            "Tuesday": "14:00-22:00",
            "Friday": "14:00-23:00",
            "Wednesday": "14:00-22:00",
            "Thursday": "14:00-22:00",
            "Sunday": "14:00-22:00",
            "Saturday": "14:00-23:00"
        }
    },
    {
        "_id": "59e11b58bc0921e5e28d64ed",
        "business_id": "HeXqhdzNR2mn-Ez4PyWcTA",
        "name": "Jack Frost Donuts",
        "neighborhood": "Old Brooklyn",
        "address": "4960 Pearl Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44109",
        "latitude": 41.4230623,
        "longitude": -81.7235261,
        "stars": 4.5,
        "review_count": 217,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            },
            "Caters": true,
            "WiFi": "no",
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": false,
            "RestaurantsPriceRange2": 1,
            "BikeParking": false,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true
        },
        "categories": [
            "Donuts",
            "Coffee & Tea",
            "Food"
        ],
        "hours": {
            "Monday": "6:00-20:00",
            "Tuesday": "6:00-20:00",
            "Friday": "6:00-20:00",
            "Wednesday": "6:00-20:00",
            "Thursday": "6:00-20:00",
            "Sunday": "7:00-20:00",
            "Saturday": "6:00-20:00"
        }
    },
    {
        "_id": "59e11b59bc0921e5e28d6701",
        "business_id": "xfCgxY_SQfzxFsQjNiLJEQ",
        "name": "Mitchell's Homemade Ice Cream - Cleveland",
        "neighborhood": "Ohio City",
        "address": "1867 W 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.485917,
        "longitude": -81.704254,
        "stars": 4.5,
        "review_count": 200,
        "is_open": 1,
        "attributes": {
            "DogsAllowed": false,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "Caters": true,
            "WiFi": "no",
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true
        },
        "categories": [
            "Ice Cream & Frozen Yogurt",
            "Food"
        ],
        "hours": {
            "Monday": "11:00-22:00",
            "Tuesday": "11:00-22:00",
            "Friday": "11:00-23:00",
            "Wednesday": "11:00-22:00",
            "Thursday": "11:00-22:00",
            "Sunday": "11:00-22:00",
            "Saturday": "11:00-23:00"
        }
    },
    {
        "_id": "59e11b5fbc0921e5e28d92b8",
        "business_id": "CJvN2k3gjR7JspTx21icTQ",
        "name": "Crust",
        "neighborhood": "Tremont",
        "address": "1020 Kenilworth Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4799044,
        "longitude": -81.6882787,
        "stars": 4.5,
        "review_count": 161,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": true,
            "HasTV": false,
            "RestaurantsGoodForGroups": false,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Pizza",
            "Restaurants"
        ],
        "hours": {
            "Monday": "11:00-21:00",
            "Tuesday": "11:00-21:00",
            "Friday": "11:00-21:00",
            "Wednesday": "11:00-21:00",
            "Thursday": "11:00-21:00",
            "Saturday": "11:00-21:00"
        }
    },
    {
        "_id": "59e11b60bc0921e5e28d957f",
        "business_id": "anzCdD5eIEHwydTpXhLlUA",
        "name": "Happy Dog",
        "neighborhood": "Detroit-Shoreway",
        "address": "5801 Detroit Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44102",
        "latitude": 41.4848268,
        "longitude": -81.7265327,
        "stars": 4.5,
        "review_count": 551,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "loud",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Music": {
                "dj": false,
                "background_music": false,
                "no_music": false,
                "karaoke": false,
                "live": true,
                "video": false,
                "jukebox": false
            },
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": true,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "free",
            "RestaurantsReservations": false,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "HappyHour": true,
            "GoodForDancing": false,
            "BikeParking": true,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 1,
            "RestaurantsDelivery": false,
            "BestNights": {
                "monday": false,
                "tuesday": false,
                "friday": true,
                "wednesday": false,
                "thursday": true,
                "sunday": false,
                "saturday": true
            },
            "GoodForMeal": {
                "dessert": false,
                "latenight": true,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "CoatCheck": false,
            "Smoking": "no",
            "WheelchairAccessible": true
        },
        "categories": [
            "Arts & Entertainment",
            "Pubs",
            "Music Venues",
            "Nightlife",
            "Lounges",
            "Hot Dogs",
            "Bars",
            "Restaurants"
        ],
        "hours": {
            "Monday": "16:00-0:30",
            "Tuesday": "16:00-0:30",
            "Friday": "11:00-2:30",
            "Wednesday": "16:00-0:30",
            "Thursday": "11:00-0:30",
            "Sunday": "11:00-0:30",
            "Saturday": "11:00-2:30"
        }
    },
    {
        "_id": "59e11b68bc0921e5e28dc97a",
        "business_id": "1gQrMs-I8oKg2p-iRxznzQ",
        "name": "Soho Chicken + Whiskey",
        "neighborhood": "Ohio City",
        "address": "1889 W 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4855634,
        "longitude": -81.7041418,
        "stars": 4.5,
        "review_count": 261,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Music": {
                "dj": false,
                "background_music": false,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": false
            },
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "HappyHour": true,
            "GoodForDancing": false,
            "BikeParking": true,
            "OutdoorSeating": true,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "BestNights": {
                "monday": false,
                "tuesday": false,
                "friday": false,
                "wednesday": false,
                "thursday": false,
                "sunday": false,
                "saturday": false
            },
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": true
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "CoatCheck": false,
            "Smoking": "no"
        },
        "categories": [
            "Bars",
            "Breakfast & Brunch",
            "Restaurants",
            "Southern",
            "Nightlife"
        ],
        "hours": {
            "Tuesday": "17:00-22:00",
            "Friday": "17:00-22:00",
            "Wednesday": "17:00-22:00",
            "Thursday": "17:00-22:00",
            "Sunday": "11:00-14:00",
            "Saturday": "17:00-22:00"
        }
    },
    {
        "_id": "59e11b6fbc0921e5e28dede9",
        "business_id": "228mfqUuGbnCs1kiupJXZw",
        "name": "Map of Thailand",
        "neighborhood": "Goodrich Kirtland",
        "address": "3710 Payne Ave, Ste 106",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44114",
        "latitude": 41.5094078,
        "longitude": -81.6621618,
        "stars": 4.5,
        "review_count": 138,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": true,
            "HasTV": false,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Thai",
            "Restaurants"
        ],
        "hours": {
            "Monday": "11:30-21:00",
            "Tuesday": "11:30-21:00",
            "Friday": "11:30-21:00",
            "Wednesday": "11:30-21:00",
            "Thursday": "11:30-21:00",
            "Saturday": "11:30-21:30"
        }
    },
    {
        "_id": "59e11b70bc0921e5e28df92e",
        "business_id": "Xny0n0s98TpP82sQxfgIMQ",
        "name": "Sokolowski's University Inn",
        "neighborhood": "Tremont",
        "address": "1201 University Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.484752,
        "longitude": -81.690048,
        "stars": 4.5,
        "review_count": 368,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "full_bar",
            "Caters": true,
            "HasTV": true,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "free",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Polish",
            "Nightlife",
            "Restaurants",
            "American (Traditional)",
            "Bars"
        ],
        "hours": {
            "Monday": "11:00-15:00",
            "Tuesday": "11:00-15:00",
            "Friday": "17:00-21:00",
            "Wednesday": "11:00-15:00",
            "Thursday": "11:00-15:00",
            "Saturday": "16:00-21:00"
        }
    },
    {
        "_id": "59e11b70bc0921e5e28df9bd",
        "business_id": "bupMXFUaZfranBLdaVcRww",
        "name": "Ginko",
        "neighborhood": "Tremont",
        "address": "2247 Professor Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4816014,
        "longitude": -81.6863681,
        "stars": 4.5,
        "review_count": 214,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "full_bar",
            "Caters": false,
            "HasTV": true,
            "RestaurantsGoodForGroups": false,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 3,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": false
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Sushi Bars",
            "Japanese",
            "Restaurants"
        ],
        "hours": {
            "Tuesday": "16:30-22:00",
            "Friday": "16:30-0:00",
            "Wednesday": "16:30-22:00",
            "Thursday": "16:30-22:00",
            "Saturday": "16:30-0:00"
        }
    },
    {
        "_id": "59e11b71bc0921e5e28dfbc6",
        "business_id": "J4jxIxv_vgmWHCajos_B8w",
        "name": "Taza A Lebanese Grill",
        "neighborhood": "Warehouse District",
        "address": "1400 W 6th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4988854757,
        "longitude": -81.6981884509,
        "stars": 4.5,
        "review_count": 177,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "DogsAllowed": false,
            "Alcohol": "full_bar",
            "Caters": true,
            "HasTV": true,
            "RestaurantsGoodForGroups": true,
            "NoiseLevel": "average",
            "WiFi": "free",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": true,
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": true,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": true
            }
        },
        "categories": [
            "Restaurants",
            "Middle Eastern",
            "Mediterranean"
        ],
        "hours": {
            "Monday": "11:00-22:30",
            "Tuesday": "11:00-22:30",
            "Friday": "11:00-23:00",
            "Wednesday": "11:00-22:30",
            "Thursday": "11:00-22:30",
            "Sunday": "12:00-22:00",
            "Saturday": "12:00-23:00"
        }
    },
    {
        "_id": "59e11b71bc0921e5e28dfd1e",
        "business_id": "oWHZtv98YyKvSennjtBuAA",
        "name": "Pour Cleveland",
        "neighborhood": "Gateway District",
        "address": "530 Euclid Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44115",
        "latitude": 41.4997856453,
        "longitude": -81.6890940914,
        "stars": 4.5,
        "review_count": 227,
        "is_open": 1,
        "attributes": {
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": false,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": false,
            "WiFi": "free",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BusinessAcceptsBitcoin": false,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Food",
            "Coffee & Tea"
        ],
        "hours": {
            "Monday": "7:00-18:00",
            "Tuesday": "7:00-18:00",
            "Friday": "7:00-18:00",
            "Wednesday": "7:00-18:00",
            "Thursday": "7:00-18:00",
            "Sunday": "9:00-16:00",
            "Saturday": "8:00-17:00"
        }
    },
    {
        "_id": "59e11b77bc0921e5e28e2382",
        "business_id": "5VXxZIMgoKRWbNa6x9kMfw",
        "name": "Sweet Moses",
        "neighborhood": "Detroit-Shoreway",
        "address": "6800 Detroit Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44102",
        "latitude": 41.4838499,
        "longitude": -81.731936,
        "stars": 4.5,
        "review_count": 308,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "WiFi": "no",
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "WheelchairAccessible": true
        },
        "categories": [
            "Ice Cream & Frozen Yogurt",
            "Desserts",
            "Food",
            "Chocolatiers & Shops",
            "Specialty Food"
        ],
        "hours": {
            "Monday": "12:00-22:00",
            "Tuesday": "12:00-22:00",
            "Friday": "12:00-0:00",
            "Wednesday": "12:00-22:00",
            "Thursday": "12:00-22:00",
            "Sunday": "12:00-22:00",
            "Saturday": "12:00-0:00"
        }
    },
    {
        "_id": "59e11b7abc0921e5e28e3a40",
        "business_id": "LtDYRcMJbJPhXPEklT29Fw",
        "name": "EDWINS Leadership and Restaurant Institute",
        "neighborhood": "",
        "address": "13101 Shaker Sq",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44120",
        "latitude": 41.4842350467,
        "longitude": -81.5913967755,
        "stars": 4.5,
        "review_count": 118,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "dressy",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": true,
                "intimate": false,
                "classy": true,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": true,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": true,
            "RestaurantsPriceRange2": 3,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": false,
                "valet": true
            }
        },
        "categories": [
            "French",
            "Cooking Schools",
            "Adult Education",
            "Restaurants",
            "Specialty Schools",
            "Education"
        ],
        "hours": {
            "Monday": "16:00-22:00",
            "Tuesday": "16:00-22:00",
            "Friday": "16:00-23:30",
            "Wednesday": "16:00-22:00",
            "Thursday": "16:00-23:30",
            "Saturday": "16:00-23:30"
        }
    },
    {
        "_id": "59e11b7abc0921e5e28e3d17",
        "business_id": "9LAXz_VfATZ0kLdaavkN4g",
        "name": "Bakersfield",
        "neighborhood": "Ohio City",
        "address": "2058 West 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4832899915,
        "longitude": -81.7029820383,
        "stars": 4.5,
        "review_count": 137,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "loud",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Music": {
                "dj": false,
                "background_music": true,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": false
            },
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "no",
            "RestaurantsReservations": false,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "HappyHour": true,
            "GoodForDancing": false,
            "DogsAllowed": false,
            "BikeParking": false,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "CoatCheck": false,
            "Smoking": "no",
            "WheelchairAccessible": true
        },
        "categories": [
            "Mexican",
            "Bars",
            "Tex-Mex",
            "Nightlife",
            "Restaurants",
            "Cocktail Bars"
        ],
        "hours": {
            "Monday": "11:00-0:00",
            "Tuesday": "11:00-0:00",
            "Friday": "11:00-2:00",
            "Wednesday": "11:00-0:00",
            "Thursday": "11:00-0:00",
            "Sunday": "11:00-0:00",
            "Saturday": "11:00-2:00"
        }
    },
    {
        "_id": "59e11b7ebc0921e5e28e4fb2",
        "business_id": "ogmjK0R0K9vpPTfhNKrXzg",
        "name": "Rising Star Coffee Roasters",
        "neighborhood": "Ohio City",
        "address": "1455 W 29th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4892154,
        "longitude": -81.7102524,
        "stars": 4.5,
        "review_count": 189,
        "is_open": 1,
        "attributes": {
            "Alcohol": "none",
            "Caters": false,
            "WiFi": "free",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BusinessAcceptsBitcoin": false,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Food",
            "Coffee Roasteries",
            "Coffee & Tea"
        ],
        "hours": {
            "Monday": "6:00-18:00",
            "Tuesday": "6:00-18:00",
            "Friday": "6:00-20:00",
            "Wednesday": "6:00-18:00",
            "Thursday": "6:00-18:00",
            "Sunday": "8:00-18:00",
            "Saturday": "6:00-20:00"
        }
    },
    {
        "_id": "59e11b7fbc0921e5e28e58de",
        "business_id": "tjqK6lgvoIbRkQ7QuKRAFQ",
        "name": "The Loop",
        "neighborhood": "Tremont",
        "address": "2180 W 11th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.482357,
        "longitude": -81.6895386,
        "stars": 4.5,
        "review_count": 126,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "Caters": false,
            "WiFi": "free",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BusinessAcceptsBitcoin": false,
            "BikeParking": true,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true
        },
        "categories": [
            "Music & DVDs",
            "Vinyl Records",
            "Books",
            "Mags",
            "Music & Video",
            "Food",
            "Coffee & Tea",
            "Shopping"
        ],
        "hours": {
            "Monday": "7:00-21:00",
            "Tuesday": "7:00-21:00",
            "Friday": "7:00-22:00",
            "Wednesday": "7:00-21:00",
            "Thursday": "7:00-21:00",
            "Sunday": "10:00-18:00",
            "Saturday": "8:00-22:00"
        }
    },
    {
        "_id": "59e11b81bc0921e5e28e6748",
        "business_id": "kXIJwryYY2xDHNnI7jz-WQ",
        "name": "Pho Thang Cafe",
        "neighborhood": "Civic Center",
        "address": "815 Superior Ave E",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44114",
        "latitude": 41.5024433,
        "longitude": -81.6893526,
        "stars": 4.5,
        "review_count": 173,
        "is_open": 1,
        "attributes": {
            "Alcohol": "beer_and_wine",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "BusinessAcceptsBitcoin": true,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Vietnamese",
            "Restaurants"
        ],
        "hours": {
            "Monday": "11:00-22:00",
            "Tuesday": "11:00-22:00",
            "Friday": "11:00-23:00",
            "Wednesday": "11:00-22:00",
            "Thursday": "11:00-22:00",
            "Sunday": "11:00-19:00",
            "Saturday": "11:00-23:00"
        }
    },
    {
        "_id": "59e11b88bc0921e5e28e930c",
        "business_id": "9gXWjHAhDpzy1x6khHehrw",
        "name": "Graffiti: A Social Kitchen",
        "neighborhood": "Detroit-Shoreway",
        "address": "1261 W 76th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44102",
        "latitude": 41.485856,
        "longitude": -81.737258,
        "stars": 4.5,
        "review_count": 124,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Music": {
                "dj": false,
                "background_music": false,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": false
            },
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": false,
            "GoodForKids": false,
            "HappyHour": true,
            "GoodForDancing": false,
            "BikeParking": true,
            "OutdoorSeating": true,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "BestNights": {
                "monday": false,
                "tuesday": false,
                "friday": false,
                "wednesday": false,
                "thursday": false,
                "sunday": true,
                "saturday": false
            },
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": true
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "CoatCheck": false
        },
        "categories": [
            "Nightlife",
            "American (New)",
            "Restaurants",
            "Bars"
        ],
        "hours": {
            "Tuesday": "17:00-23:00",
            "Friday": "17:00-0:00",
            "Wednesday": "17:00-23:00",
            "Thursday": "17:00-23:00",
            "Sunday": "10:00-15:00",
            "Saturday": "17:00-0:00"
        }
    },
    {
        "_id": "59e11b88bc0921e5e28e961a",
        "business_id": "SoCjdgcYyj05tSPWz6MUXg",
        "name": "Pupuseria La Bendicion",
        "neighborhood": "West Boulevard",
        "address": "3685 W 105th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44111",
        "latitude": 41.4521577,
        "longitude": -81.7592398,
        "stars": 4.5,
        "review_count": 110,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": false,
            "HasTV": true,
            "RestaurantsGoodForGroups": false,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": true,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Salvadoran",
            "Food",
            "Specialty Food",
            "Latin American",
            "Imported Food",
            "Colombian",
            "Ethnic Food",
            "Restaurants"
        ],
        "hours": {
            "Tuesday": "11:00-21:00",
            "Friday": "11:00-22:00",
            "Wednesday": "11:00-21:00",
            "Thursday": "11:00-21:00",
            "Sunday": "11:00-21:00",
            "Saturday": "11:00-22:00"
        }
    },
    {
        "_id": "59e11b8dbc0921e5e28eb6dd",
        "business_id": "Y-oPVMkxgEsve1sG2iDLXA",
        "name": "Citizen Pie",
        "neighborhood": "Northeast Shores",
        "address": "15710 Waterloo Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44110",
        "latitude": 41.5711347191,
        "longitude": -81.5705552082,
        "stars": 4.5,
        "review_count": 104,
        "is_open": 1,
        "attributes": {
            "Alcohol": "beer_and_wine",
            "HasTV": false,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": true
            },
            "RestaurantsGoodForGroups": false,
            "Caters": false,
            "WiFi": "no",
            "RestaurantsReservations": false,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": false,
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Pizza",
            "Restaurants"
        ],
        "hours": {
            "Monday": "12:00-21:00",
            "Tuesday": "12:00-21:00",
            "Friday": "12:00-21:00",
            "Wednesday": "12:00-21:00",
            "Thursday": "12:00-21:00",
            "Sunday": "12:00-19:00",
            "Saturday": "12:00-21:00"
        }
    }
];

var Partial =[

    {
        "_id": "59e11b71bc0921e5e28dfd1e",
        "business_id": "oWHZtv98YyKvSennjtBuAA",
        "name": "Pour Cleveland",
        "neighborhood": "Gateway District",
        "address": "530 Euclid Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44115",
        "latitude": 41.4997856453,
        "longitude": -81.6890940914,
        "stars": 4.5,
        "review_count": 227,
        "is_open": 1,
        "attributes": {
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": false,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": false,
            "WiFi": "free",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BusinessAcceptsBitcoin": false,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Food",
            "Coffee & Tea"
        ],
        "hours": {
            "Monday": "7:00-18:00",
            "Tuesday": "7:00-18:00",
            "Friday": "7:00-18:00",
            "Wednesday": "7:00-18:00",
            "Thursday": "7:00-18:00",
            "Sunday": "9:00-16:00",
            "Saturday": "8:00-17:00"
        }
    },
    {
        "_id": "59e11b77bc0921e5e28e2382",
        "business_id": "5VXxZIMgoKRWbNa6x9kMfw",
        "name": "Sweet Moses",
        "neighborhood": "Detroit-Shoreway",
        "address": "6800 Detroit Ave",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44102",
        "latitude": 41.4838499,
        "longitude": -81.731936,
        "stars": 4.5,
        "review_count": 308,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "WiFi": "no",
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 2,
            "BikeParking": true,
            "WheelchairAccessible": true
        },
        "categories": [
            "Ice Cream & Frozen Yogurt",
            "Desserts",
            "Food",
            "Chocolatiers & Shops",
            "Specialty Food"
        ],
        "hours": {
            "Monday": "12:00-22:00",
            "Tuesday": "12:00-22:00",
            "Friday": "12:00-0:00",
            "Wednesday": "12:00-22:00",
            "Thursday": "12:00-22:00",
            "Sunday": "12:00-22:00",
            "Saturday": "12:00-0:00"
        }
    },
    {
        "_id": "59e11b7abc0921e5e28e3a40",
        "business_id": "LtDYRcMJbJPhXPEklT29Fw",
        "name": "EDWINS Leadership and Restaurant Institute",
        "neighborhood": "",
        "address": "13101 Shaker Sq",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44120",
        "latitude": 41.4842350467,
        "longitude": -81.5913967755,
        "stars": 4.5,
        "review_count": 118,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "dressy",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": true,
                "intimate": false,
                "classy": true,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": true,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": true,
            "RestaurantsPriceRange2": 3,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": false,
                "valet": true
            }
        },
        "categories": [
            "French",
            "Cooking Schools",
            "Adult Education",
            "Restaurants",
            "Specialty Schools",
            "Education"
        ],
        "hours": {
            "Monday": "16:00-22:00",
            "Tuesday": "16:00-22:00",
            "Friday": "16:00-23:30",
            "Wednesday": "16:00-22:00",
            "Thursday": "16:00-23:30",
            "Saturday": "16:00-23:30"
        }
    },
    {
        "_id": "59e11b7abc0921e5e28e3d17",
        "business_id": "9LAXz_VfATZ0kLdaavkN4g",
        "name": "Bakersfield",
        "neighborhood": "Ohio City",
        "address": "2058 West 25th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4832899915,
        "longitude": -81.7029820383,
        "stars": 4.5,
        "review_count": 137,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "loud",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Music": {
                "dj": false,
                "background_music": true,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": false
            },
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": false
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "no",
            "RestaurantsReservations": false,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": false,
            "HappyHour": true,
            "GoodForDancing": false,
            "DogsAllowed": false,
            "BikeParking": false,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "CoatCheck": false,
            "Smoking": "no",
            "WheelchairAccessible": true
        },
        "categories": [
            "Mexican",
            "Bars",
            "Tex-Mex",
            "Nightlife",
            "Restaurants",
            "Cocktail Bars"
        ],
        "hours": {
            "Monday": "11:00-0:00",
            "Tuesday": "11:00-0:00",
            "Friday": "11:00-2:00",
            "Wednesday": "11:00-0:00",
            "Thursday": "11:00-0:00",
            "Sunday": "11:00-0:00",
            "Saturday": "11:00-2:00"
        }
    },
    {
        "_id": "59e11b7ebc0921e5e28e4fb2",
        "business_id": "ogmjK0R0K9vpPTfhNKrXzg",
        "name": "Rising Star Coffee Roasters",
        "neighborhood": "Ohio City",
        "address": "1455 W 29th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.4892154,
        "longitude": -81.7102524,
        "stars": 4.5,
        "review_count": 189,
        "is_open": 1,
        "attributes": {
            "Alcohol": "none",
            "Caters": false,
            "WiFi": "free",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BusinessAcceptsBitcoin": false,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true,
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Food",
            "Coffee Roasteries",
            "Coffee & Tea"
        ],
        "hours": {
            "Monday": "6:00-18:00",
            "Tuesday": "6:00-18:00",
            "Friday": "6:00-20:00",
            "Wednesday": "6:00-18:00",
            "Thursday": "6:00-18:00",
            "Sunday": "8:00-18:00",
            "Saturday": "6:00-20:00"
        }
    },
    {
        "_id": "59e11b7fbc0921e5e28e58de",
        "business_id": "tjqK6lgvoIbRkQ7QuKRAFQ",
        "name": "The Loop",
        "neighborhood": "Tremont",
        "address": "2180 W 11th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44113",
        "latitude": 41.482357,
        "longitude": -81.6895386,
        "stars": 4.5,
        "review_count": 126,
        "is_open": 1,
        "attributes": {
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "Caters": false,
            "WiFi": "free",
            "OutdoorSeating": true,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BusinessAcceptsBitcoin": false,
            "BikeParking": true,
            "RestaurantsTakeOut": true,
            "WheelchairAccessible": true
        },
        "categories": [
            "Music & DVDs",
            "Vinyl Records",
            "Books",
            "Mags",
            "Music & Video",
            "Food",
            "Coffee & Tea",
            "Shopping"
        ],
        "hours": {
            "Monday": "7:00-21:00",
            "Tuesday": "7:00-21:00",
            "Friday": "7:00-22:00",
            "Wednesday": "7:00-21:00",
            "Thursday": "7:00-21:00",
            "Sunday": "10:00-18:00",
            "Saturday": "8:00-22:00"
        }
    },
    {
        "_id": "59e11b81bc0921e5e28e6748",
        "business_id": "kXIJwryYY2xDHNnI7jz-WQ",
        "name": "Pho Thang Cafe",
        "neighborhood": "Civic Center",
        "address": "815 Superior Ave E",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44114",
        "latitude": 41.5024433,
        "longitude": -81.6893526,
        "stars": 4.5,
        "review_count": 173,
        "is_open": 1,
        "attributes": {
            "Alcohol": "beer_and_wine",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "BusinessAcceptsBitcoin": true,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": true,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Vietnamese",
            "Restaurants"
        ],
        "hours": {
            "Monday": "11:00-22:00",
            "Tuesday": "11:00-22:00",
            "Friday": "11:00-23:00",
            "Wednesday": "11:00-22:00",
            "Thursday": "11:00-22:00",
            "Sunday": "11:00-19:00",
            "Saturday": "11:00-23:00"
        }
    },
    {
        "_id": "59e11b88bc0921e5e28e930c",
        "business_id": "9gXWjHAhDpzy1x6khHehrw",
        "name": "Graffiti: A Social Kitchen",
        "neighborhood": "Detroit-Shoreway",
        "address": "1261 W 76th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44102",
        "latitude": 41.485856,
        "longitude": -81.737258,
        "stars": 4.5,
        "review_count": 124,
        "is_open": 1,
        "attributes": {
            "Alcohol": "full_bar",
            "HasTV": true,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Music": {
                "dj": false,
                "background_music": false,
                "no_music": false,
                "karaoke": false,
                "live": false,
                "video": false,
                "jukebox": false
            },
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": true
            },
            "RestaurantsGoodForGroups": true,
            "Caters": false,
            "WiFi": "free",
            "RestaurantsReservations": true,
            "RestaurantsTableService": true,
            "RestaurantsTakeOut": false,
            "GoodForKids": false,
            "HappyHour": true,
            "GoodForDancing": false,
            "BikeParking": true,
            "OutdoorSeating": true,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "BestNights": {
                "monday": false,
                "tuesday": false,
                "friday": false,
                "wednesday": false,
                "thursday": false,
                "sunday": true,
                "saturday": false
            },
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": false,
                "dinner": true,
                "breakfast": false,
                "brunch": true
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            },
            "CoatCheck": false
        },
        "categories": [
            "Nightlife",
            "American (New)",
            "Restaurants",
            "Bars"
        ],
        "hours": {
            "Tuesday": "17:00-23:00",
            "Friday": "17:00-0:00",
            "Wednesday": "17:00-23:00",
            "Thursday": "17:00-23:00",
            "Sunday": "10:00-15:00",
            "Saturday": "17:00-0:00"
        }
    },
    {
        "_id": "59e11b88bc0921e5e28e961a",
        "business_id": "SoCjdgcYyj05tSPWz6MUXg",
        "name": "Pupuseria La Bendicion",
        "neighborhood": "West Boulevard",
        "address": "3685 W 105th St",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44111",
        "latitude": 41.4521577,
        "longitude": -81.7592398,
        "stars": 4.5,
        "review_count": 110,
        "is_open": 1,
        "attributes": {
            "RestaurantsTableService": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "Alcohol": "none",
            "Caters": false,
            "HasTV": true,
            "RestaurantsGoodForGroups": false,
            "NoiseLevel": "average",
            "WiFi": "no",
            "RestaurantsAttire": "casual",
            "RestaurantsReservations": false,
            "OutdoorSeating": false,
            "BusinessAcceptsCreditCards": true,
            "RestaurantsPriceRange2": 1,
            "BikeParking": true,
            "RestaurantsDelivery": false,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": true,
                "touristy": false,
                "trendy": false,
                "upscale": false,
                "casual": false
            },
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "BusinessParking": {
                "garage": false,
                "street": false,
                "validated": false,
                "lot": true,
                "valet": false
            }
        },
        "categories": [
            "Salvadoran",
            "Food",
            "Specialty Food",
            "Latin American",
            "Imported Food",
            "Colombian",
            "Ethnic Food",
            "Restaurants"
        ],
        "hours": {
            "Tuesday": "11:00-21:00",
            "Friday": "11:00-22:00",
            "Wednesday": "11:00-21:00",
            "Thursday": "11:00-21:00",
            "Sunday": "11:00-21:00",
            "Saturday": "11:00-22:00"
        }
    },
    {
        "_id": "59e11b8dbc0921e5e28eb6dd",
        "business_id": "Y-oPVMkxgEsve1sG2iDLXA",
        "name": "Citizen Pie",
        "neighborhood": "Northeast Shores",
        "address": "15710 Waterloo Rd",
        "city": "Cleveland",
        "state": "OH",
        "postal_code": "44110",
        "latitude": 41.5711347191,
        "longitude": -81.5705552082,
        "stars": 4.5,
        "review_count": 104,
        "is_open": 1,
        "attributes": {
            "Alcohol": "beer_and_wine",
            "HasTV": false,
            "NoiseLevel": "average",
            "RestaurantsAttire": "casual",
            "BusinessAcceptsCreditCards": true,
            "Ambience": {
                "romantic": false,
                "intimate": false,
                "classy": false,
                "hipster": false,
                "divey": false,
                "touristy": false,
                "trendy": true,
                "upscale": false,
                "casual": true
            },
            "RestaurantsGoodForGroups": false,
            "Caters": false,
            "WiFi": "no",
            "RestaurantsReservations": false,
            "BusinessAcceptsBitcoin": false,
            "RestaurantsTableService": false,
            "RestaurantsTakeOut": true,
            "GoodForKids": true,
            "WheelchairAccessible": true,
            "DogsAllowed": false,
            "BikeParking": true,
            "OutdoorSeating": false,
            "RestaurantsPriceRange2": 2,
            "RestaurantsDelivery": false,
            "GoodForMeal": {
                "dessert": false,
                "latenight": false,
                "lunch": true,
                "dinner": true,
                "breakfast": false,
                "brunch": false
            },
            "BusinessParking": {
                "garage": false,
                "street": true,
                "validated": false,
                "lot": false,
                "valet": false
            }
        },
        "categories": [
            "Pizza",
            "Restaurants"
        ],
        "hours": {
            "Monday": "12:00-21:00",
            "Tuesday": "12:00-21:00",
            "Friday": "12:00-21:00",
            "Wednesday": "12:00-21:00",
            "Thursday": "12:00-21:00",
            "Sunday": "12:00-19:00",
            "Saturday": "12:00-21:00"
        }
    }
];

var links = generateLinks(Partial);



fs.writeFile('goodLinks.js', JSON.stringify(links), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
