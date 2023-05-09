function elevator(left, right, call){
    // code on! :)
    if(Math.abs(left-call)<Math.abs(right-call)){
      return "left";
  }
    if(Math.abs(left-call)>=Math.abs(right-call)){
      return "right";
  }
  }