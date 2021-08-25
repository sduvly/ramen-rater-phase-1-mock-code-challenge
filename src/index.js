fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(data => {
    data.forEach(ramen => {
    ramenArr(ramen)
    })
      })
      function ramenArr(ramen){
          const imgDiv = document.querySelector("#ramen-menu")
          const img = document.createElement("img")
          img.src = ramen.image
          img.addEventListener("click", (e) => {
              const imageDetail = document.querySelector(".detail-image")
              imageDetail.src= ramen.image
              const h3 = document.querySelector(".restaurant")
              const h2 = document.querySelector(".name")
              h2.innerHTML = ramen.name
              h3.innerHTML = ramen.restaurant
              
              const ramenCom = document.querySelectorAll("p")[1]
              ramenCom.innerHTML = ramen.comment
              const span = document.querySelector("span")
              span.innerHTML = ramen.rating
          })
          imgDiv.appendChild(img)
          const form = document.querySelector("#new-ramen")
          form.addEventListener("submit", (e) => {
              e.preventDefault()
              const newName = e.target[0].value
              const newRestaurant = e.target[1].value
              const newImage = e.target[2].value
              const newRating = e.target[3].value
              const newComment = e.target[4].value
              const newObj = {
                "name": newName,
                "restaurant": newRestaurant,
                "image": newImage,
                "rating": newRating,
                "comment": newComment
              }
              //console.log(newObj)
              ramenArr(newObj)
              form.reset()
          })
      }
    
      