elInput = document.querySelector("#string");
elDone = document.querySelector("#done");
elList = document.querySelector("#list");

let newArr = [];
let maxLengthString;

elDone.addEventListener("click", (e) => {
  e.preventDefault()

  if(elInput.value.length<4 || !isNaN(+elInput.value)) {
    return
  }

  newArr = elInput.value.split(" ")
  elInput.value = ""
  let longString = newArr[0]
  maxLengthString = newArr[0].length

   for (let i = 0; i < newArr.length; i++) {
      if (maxLengthString < newArr[i].length) {
          maxLengthString = newArr[i].length
          longString = newArr[i]
          let newLi = document.createElement("li");
          newLi.textContent = longString;
          elList.appendChild(newLi)
      } 
  }

  console.log(longString);
   
})