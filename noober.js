async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides

for (let i=0; i<json.length; i++){
  let ride = json[i]
 
  for (let a=0; a<ride.length; a++){
        let leg = ride[a]
        
        



        let levelOfService
                if (ride.length > 1) {
          levelOfService = 'Noober Pool'
        } else if (ride[0].purpleRequested == true) {
          levelOfService = 'Noober Purple'
        } else if (ride[0].numberOfPassengers > 3) {
          levelOfService = 'Noober XL'
        } else {
          levelOfService = 'Noober X'
        }  

        let borderColor
        if (ride.length > 1) {
          borderColor = 'border-gray-900'
        } else if (ride[0].purpleRequested == true) {
          borderColor = 'border-purple-500'
        } else if (ride[0].numberOfPassengers > 3) {
          borderColor = 'border-gray-900'
        } else {
          borderColor = 'border-gray-900'
        }  

        let riderColor
        if (ride.length > 1) {
          riderColor = 'gray-600'
        } else if (ride[0].purpleRequested == true) {
          riderColor = 'purple-600'
        } else if (ride[0].numberOfPassengers > 3) {
          riderColor = 'gray-600'
        } else {
          riderColor = 'gray-600'
        }  

        
     

        document.querySelector('.rides').insertAdjacentHTML('beforeend', `        
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class="fas fa-car-side"></i>
            <span>${levelOfService}</span>
          </h1>

          <div class="border-4 ${borderColor} p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
                <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-${riderColor} text-white p-2">
                  ${leg.numberOfPassengers} passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${leg.pickupLocation.address}</p>
                <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${leg.dropoffLocation.address}</p>
                <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
              </div>
            </div>
          </div>
        `)
  }
}

//EXAMPLE HTML FROM LAB
// document.querySelector('.products').insertAdjacentHTML('beforeend', `
//     <div class="p-4 w-full md:w-1/2 lg:w-1/3">
//       <div class="border h-full p-4 flex flex-col">
//         <h2 class="text-lg font-bold mb-4">${product.name}</h2>
//         <div class="mb-4"><img src="${product.image}">
//         </div>
//         <div class="mb-4 text-gray-900">${product.description}
//         </div>
//         <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
//       </div>
//     </div>
//   `)
  

}

window.addEventListener('DOMContentLoaded', pageLoaded)

