function calculateMinCost(ropes) {
  //your code here
	
   // Turn array into a min-heap using a priority queue approach
  ropes.sort((a, b) => a - b);

  let totalCost = 0;

  while (ropes.length > 1) {
    let first = ropes.shift();
    let second = ropes.shift();
    let cost = first + second;
    totalCost += cost;

    // Insert the new combined rope back into the array and keep it sorted
    let index = ropes.findIndex(r => r > cost);
    if (index === -1) ropes.push(cost);
    else ropes.splice(index, 0, cost);
  }

  return totalCost;
  
}  
