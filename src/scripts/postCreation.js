const API = {
  postLego (legoToSave) {
    fetch("http://localhost:8088/legoCreation", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(legoToSave)
    })
    .then((lego) => {
      console.log(lego);
    })
  }
}