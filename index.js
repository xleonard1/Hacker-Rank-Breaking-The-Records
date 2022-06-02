function breakingRecords(scores) {
    // Write your code here
let highRecords = []
let lowRecords = []
let result = []
let highest;
let lowest;
let lows = scores[0]
let score = scores[0] 

 for(let i = 0; i < scores.length; i++) {
     if(scores[i] > score) {
         highest = scores[i] 
         score = highest;
        highRecords.push(score)
     } else if (scores[i] < lows) {
         lowest = scores[i]
         lows = lowest
         lowRecords.push(lows)
     }
   }
   let highCount = highRecords.length
   let lowCount = lowRecords.length
   result.push(highCount, lowCount)
   
   return result;
}