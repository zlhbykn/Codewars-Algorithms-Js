function pillars(numPill, dist, width) {
    if(1<numPill){
     return ((numPill-2)*width)+((dist*100)*(numPill-1));
    }else{
       return 0;
    }
  }