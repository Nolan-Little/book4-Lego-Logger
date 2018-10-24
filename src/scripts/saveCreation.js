let saveBtn = document.querySelector("#lego__save")
let form = document.querySelector(".lego__form")

new Object

saveBtn.addEventListener("click", event => {
  event.preventDefault();
  let creator = document.querySelector("#lego__creator").value
  let creation = document.querySelector("#lego__creation").value
  let shape = document.querySelector("#lego__shape").value
  let color = document.querySelector("#lego__color").value
  const lego = {}
  const newLego = Object.create(lego);
  newLego.creation = creation
  newLego.color = color
  newLego.shape = shape
  newLego.creator = creator
  console.log(newLego.creator)
    if (newLego.creation !== "" && newLego.color !== "1" && newLego.shape !== "" && newLego.creator !== "" ) {
      API.postLego(newLego)
      form.reset()
    }
})