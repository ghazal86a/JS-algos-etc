var map = {
    tkt1: {
        departure: 'Los Angeles',
        arrival: 'San Francisco'
    },
    tkt2: {
        departure: 'San Francisco',
        arrival: 'New York'
    },
    tkt3: {
        departure: 'Moscow',
        arrival: 'Mali'
    },
    tkt4: {
        departure: 'Barcelona',
        arrival: 'Moscow'
    },
    tkt5: {
        departure: 'New York',
        arrival: 'Barcelona'
    }
};

findDepartureArrival = function(map) {
    
    var hashMap = {};

    for (var tkt in map) {
        var depart = map[tkt].departure;
        var arriv = map[tkt].arrival;
        

        if (!(depart in hashMap))
            hashMap[depart] = 0;
        else
            hashMap[depart] = hashMap[depart] + 1;

        if (!(arriv in hashMap))
            hashMap[arriv] = 0;
        else
            hashMap[arriv] = hashMap[arriv] - 1;
    }
    return hashMap;
}

console.log(findDepartureArrival(map));
/*Output 
{ 'Los Angeles': -1,
  'San Francisco': 0,
  'New York': 0,
  Moscow: 0,
  Mali: 1,
  Barcelona: 0 }*/