function calculateMinCost(ropes) {
  //your code here
	
  const heap = [...ropes].sort((a, b) => a - b); // sort to simulate min-heap

  let totalCost = 0;

  while (heap.length > 1) {
    // Take two smallest ropes
    const first = heap.shift();
    const second = heap.shift();

    const cost = first + second;
    totalCost += cost;

    // Insert the combined rope back and keep heap sorted
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
  
  
}  
