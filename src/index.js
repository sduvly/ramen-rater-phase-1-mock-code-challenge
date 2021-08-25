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
              const
              const ramenCom = document.querySelectorAll("p")[1]
              ramenCom.innerHTML = ramen.comment
          })
          imgDiv.appendChild(img)
      }
    