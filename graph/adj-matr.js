var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

let adjList = new Map();
for (let i=0; i<exBFSGraph.length; i++){
  adjList.set(i,[])
}

function convertMatrixToList(matrix){
  for(let i=0; i<matrix.length; i++){
    
    for(let j=0; j<matrix[i].length; j++){
      //console.log(i,j);
      
      if (matrix[i][j] == 1) {
        if(adjList.get(i).indexOf(j) === -1){
          adjList.get(i).push(j); 
          adjList.get(j).push(i)
          //console.log(adjList);
        }
          
      }
    }
  }
  return adjList;
}

//console.log(convertMatrixToList(exBFSGraph))
adjList = convertMatrixToList(exBFSGraph)
console.log(adjList);

console.log(bfs(adjList,4,2));


function bfs(adjList,start, goal) {

  const visited = new Set();

  const queue = [start]


  while (queue.length > 0) {

      const currentItem = queue.shift(); // mutates the queue

      const destinations = adjList.get(currentItem);


      for (const destination of destinations) {
          if (destination === goal)  {
              console.log(`BFS found ${goal}!`)
              //return;
          }

          if (!visited.has(destination)) {
              visited.add(destination);
              queue.push(destination);
              console.log(destination);
              
          }
         
      }

      
  }

}
