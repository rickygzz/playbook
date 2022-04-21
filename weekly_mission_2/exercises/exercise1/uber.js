console.log("\n1. Profile object")

const profile =
{
    name: 'Ricardo González',
    mobile: '123-1234-1234',
    email: 'launchx03749@innovaccion.mx',

    getContactData: function()
    {
        return `${this.mobile} ${this.email}`
    }
}

console.log(profile.name)
console.log(profile.getContactData())


console.log("\n2. History object")

const history =
{
    trips: [
        {
            origin: 'Burger King Plaza Concordia',
            destination: 'Av. Fundidora 905',
            distance_km: 5.2,
            fare: 95.5,
            currency: 'mxn'
        },
        {
            origin: 'Calle Jerez 304',
            destination: 'Hotel Holiday Inn',
            distance_km: 7,
            fare: 132.3,
            currency: 'mxn'
        },
        {
            origin: 'Av. Revolución 1001',
            destination: 'Av. Fundidora 905',
            distance_km: 10.89,
            fare: 200,
            currency: 'mxn'
        }
    ],

    getOriginDestination: function(element)
    {
        return `From ${element.origin} to ${element.destination}`
    },

    getTripFare: function(element)
    {
        return `${element.distance_km} km @ $${element.fare} ${element.currency}`
    }
}

history.trips.forEach(function(element, index)
{
    console.log(`\nTrip #${index+1}`)
    console.log(history.getOriginDestination(element))
    console.log(history.getTripFare(element))
})


console.log("\n3. Current trip object")

const current_trip =
{
    origin: 'Ignacio Iturbide 8745',
    destination: 'Walmart Encinos',
    distance_km: 2,
    fare: 71,
    currency: 'mxn',

    getOriginDestination: function()
    {
        return `From ${this.origin} to ${this.destination}`
    },

    getTripFare: function()
    {
        return `${this.distance_km} km @ $${this.fare} ${this.currency}`
    }
}

console.log(current_trip.getOriginDestination())
console.log(current_trip.getTripFare())