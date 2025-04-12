window.onload = function () {
    alert("Welcome to Lionel Messi's Official Fan Page!");
};
  
function showSuccessMessage(event){
event.preventDefault();

document.getElementById("success-message").style.display="block";

}

setTimeout(function(){document.getElementById("seccess-message").style,display="none";
    event.target.submit()} ,3000)
