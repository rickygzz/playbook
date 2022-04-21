console.log("\n1. Profile class")

class Profile
{
    constructor(name, mobile, email)
    {
        this.name = name
        this.mobile = mobile
        this.email = email
    }

    get getName()
    {
        return this.name
    }

    get getContactData()
    {
        return `${this.mobile} ${this.email}`
    }
}

profile = new Profile('Ricardo González', '123-1234-1234', 'launchx03749@innovaccion.mx')

console.log(profile.getName)
console.log(profile.getContactData)

/**
 * 2.
 */
console.log("\n2. History class")

class Trip
{
    constructor(origin, destination, distance_km, fare)
    {
        this.origin = origin
        this.destination = destination
        this.distance_km = distance_km
        this.fare = fare

        this.currency = 'mxn'
    }
 
    get getOriginDestination()
    {
        return `From ${this.origin} to ${this.destination}`
    }

    get getTripFare()
    {
        return `${this.distance_km} km @ $${this.fare} ${this.currency}`
    }
}

class History
{
    constructor()
    {
        this.trips = []
    }

    addTrip(trip)
    {
        this.trips.push(trip)
    }
}

history = new History()

trip1 = new Trip('Burger King Plaza Concordia', 'Av. Fundidora 905', 5.2 , 95.5)
trip2 = new Trip('Calle Jerez 304', 'Hotel Holiday Inn',  7, 132.3)
trip3 = new Trip('Av. Revolución 1001', 'Av. Fundidora 905', 10.89, 200)

history.addTrip(trip1)
history.addTrip(trip2)
history.addTrip(trip3)

history.trips.forEach(function(element, index)
{
    console.log(`\nTrip #${index+1}`)
    console.log(element.getOriginDestination)
    console.log(element.getTripFare)
})


console.log("\n3. Trip class")

current_trip = new Trip('Ignacio Iturbide 8745', 'Walmart Encinos', 2 , 71)

console.log(current_trip.getOriginDestination)
console.log(current_trip.getTripFare)