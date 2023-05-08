function sameCase(a, b){
    if (a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()) {
            return -1;
        } else if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }

    // 2. çözüm

    function sameCase(a, b){
        let i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        
        if(i.includes(a) && !i.includes(b) || !i.includes(a) && i.includes(b) || !i.includes(a) && !i.includes(b)){
          return -1
        }
        if(!/[a-z]/.test(a) && /[A-Z]/.test(a) && !/[a-z]/.test(b) && /[A-Z]/.test(b) ){
         return 1
        } 
        if(/[a-z]/.test(a) && !/[A-Z]/.test(a) && /[a-z]/.test(b) && !/[A-Z]/.test(b)){
          return 1
        }
        if(/[a-z]/.test(a) && !/[A-Z]/.test(a) && !/[a-z]/.test(b) && /[A-Z]/.test(b) || !/[a-z]/.test(a) && /[A-Z]/.test(a) && /[a-z]/.test(b) && !/[A-Z]/.test(b) ){
          return 0
        }
      }