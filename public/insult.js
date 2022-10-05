document
  .querySelector(".request-insult")
  .addEventListener("click",function(){
    fetch('/insult')
      .then (function(res){
        return res.json();
      })
      .then (function(data){
        document.querySelector(".complement").innerText = data.insult;
      })
      .catch (function(err){
        console.log(err);
      });
  });