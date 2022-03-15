let time = 100
let r = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for(let i = 0; i < r.length; i++){
    setTimeout(() => { if(i < r.length - 1) {
      process.stdout.write(r[i]) 
    } else {
       console.log(r[i]);
    }}, time);
    time += 200
    }
 


