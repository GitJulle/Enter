console.log("Up and running!")

const Operia = {addel: function(number) {
  console.log("The number is " + number)
  alert(number + " Potatoes")
}, lev: function(base, height) {
  console.log("Alright!")
  document.getElementById("lev").innerText = "I am groot " + base * height
}, cookies: 0, cookie: function(attribute) {
  console.log("The cookie gods have listened")
  if (attribute == "clumb") {
    console.log("Cookie gods: We have gotten your request!")
    alert("Cookie gods: We will do what you want.")
    Operia.cookies += 100
  }
  else if (attribute == "Capybara") {
    Operia.cookies += 10000
  }
  else {
    Operia.cookies = 0
  }
}}
