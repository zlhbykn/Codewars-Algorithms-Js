function warnTheSheep(queue) {
    for (let i = 0; i < queue.length - 1; i++) {
      if (queue[i] === "wolf") {
          let N = queue.length - (i+1);
          return `Oi! Sheep number ${N}! You are about to be eaten by a wolf!`
      }
    
  }
  if (queue[queue.length - 1] === "wolf") return "Pls go away and stop eating my sheep";
   }