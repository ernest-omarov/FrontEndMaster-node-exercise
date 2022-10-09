document
  .querySelector(".request-insult")
  .addEventListener("click",function(){
    document.querySelector(".complement").style.color = "red";
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