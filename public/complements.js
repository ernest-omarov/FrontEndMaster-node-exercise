document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    document.querySelector('.complement').style.color = "green"
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });