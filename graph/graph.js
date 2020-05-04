// create a graph class 
class Graph { 
	constructor(noOfVertices) 
	{ 
		this.noOfVertices = noOfVertices; 
		this.AdjList = new Map(); 
	} 

    // add vertex to the graph 
    addVertex(v) 
    { 
        // initialize the adjacent list with a 
        // null array 
        this.AdjList.set(v, []); 
    } 
    // add edge to the graph 
    addEdge(v, w) 
    { 
        // get the list for vertex v and put the 
        // vertex w denoting edge between v and w 
        this.AdjList.get(v).push(w); 

        // Since graph is undirected, 
        // add an edge from w to v also 
        this.AdjList.get(w).push(v); 
    } 
    // Prints the vertex and adjacency list 
    printGraph() 
    { 
        // get all the vertices 
        var get_keys = this.AdjList.keys(); 

        // iterate over the vertices 
        for (var i of get_keys) 
    { 
            // great the corresponding adjacency list 
            // for the vertex 
            var get_values = this.AdjList.get(i); 
            var conc = ""; 

            // iterate over the adjacency list 
            // concatenate the values into a string 
            for (var j of get_values) 
                conc += j + " "; 

            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc); 
        } 
    } 

    bfs(startingNode, goal='') { 

	// create a visited array 
        var visited = new Set(); 


        // Create an object for queue 
        var q = []; 

        // add the starting node to the queue 
        //visited[startingNode] = true; 
        visited.add(startingNode)
        
        q.unshift(startingNode); 

        // loop until queue is element 
        while (q.length !== 0) { 
            // get the element from the queue 
            var getQueueElement = q.shift(); 

            // passing the current vertex to callback funtion 
            console.log(getQueueElement); 

            // get the adjacent list for current vertex 
            var get_List = this.AdjList.get(getQueueElement); 

            // loop through the list and add the element to the 
            // queue if it is not processed yet 
            for (var i in get_List) { 
                var neigh = get_List[i]; 
                //console.log("neigh",neigh);
                
                // if (neigh === goal) {
                //     console.log("BFS found goal");  
                //     return;                  
                // }                
                if (!visited.has(neigh)) { 
                    visited.add(neigh); 
                    q.push(neigh); 
                } 
            } 
        } 
    }
    // Main DFS method 
    dfs(startingNode, visited = new Set()) { 

        visited.add(startingNode);
        console.log(startingNode);
        
        var get_neighbours = this.AdjList.get(startingNode); 

        for (var i in get_neighbours) { 
            var get_elem = get_neighbours[i]; 
            if (!visited.has(get_elem)) 
                this.dfs(get_elem, visited); 
        } 
 
    }
    
    dfsStack(startingNode){
        let stack=[]
        let visited = new Set();
        visited.add(startingNode);
        stack.push(startingNode)


        while(stack.length !== 0){
            let currentNode = stack.pop();
            console.log(currentNode);
            
            let get_neighbours = this.AdjList.get(currentNode);

            for (let neigh in get_neighbours){
                let get_elem = get_neighbours[neigh]
                if(!visited.has(get_elem)) {
                    visited.add(get_elem);
                    stack.push(get_elem)                    
                }
            }
        }
    }
 
}
// Using the above implemented graph class 
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 

// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
	g.addVertex(vertices[i]); 
} 

// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 

// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph(); 

// function to performs BFS 

// prints 
// BFS 
// A B D E C F 
console.log("BFS"); 
g.bfs('A','F'); 

// prints 
// DFS 
// A B C E D F 
console.log("DFS"); 
g.dfs('A'); 
console.log("DFS - stack"); 
g.dfsStack('A')


