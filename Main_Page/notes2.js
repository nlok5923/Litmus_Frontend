var limiter = {
  allowed: 0, 
  counter: null, 
  textarea: null, 

  init: function(max, counter, textarea){
    limiter.allowed = max;
    limiter.counter = counter;
    limiter.counter.innerHTML = limiter.allowed;
    limiter.textarea = textarea;
    limiter.textarea.setAttribute("maxlength", limiter.allowed);
    limiter.textarea.addEventListener("keyup", limiter.update);
    limiter.textarea.removeAttribute("disabled");
  },

  update: function(evt){
    let remain = limiter.allowed - limiter.textarea.value.length;
    limiter.counter.innerHTML = remain;
  },
};
window.onload = function(){
  limiter.init(
    1000,
    document.getElementById("remain"),
    document.getElementById("textin")
  );
};