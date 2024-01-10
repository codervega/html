def aStarAlgo(start_node,end_node):
  start_set=set(start_node)
  closed_set=set()
  g={}
  parents={}
  parents[start_node]=start_node
  g[start_node]=0
  while len(start_node)>0:
    n=None
    for v in start_node:
      if n==None or g[v]+heuristic[v]<g[n]+heuristic[n]:
        n=v
    if n==end_node or Graph_nodes[n] is None:
      pass
    else:
      for (m,weight) in get_neighbours(n):
        if m not in start_set and m not in closed_set:
          start_set.add(m)
          parents[m]=n
          g[m]=g[n]+weight
        else:
          if g[m]>g[n]+weight:
            g[m]=g[n]+weight
            parents[m]=n
          if m in closed_set:
            closed_set.remove(m)
            start_set.add(m)
        if n is None:
          print("the path Does Not Exist")
          return None
        if n==end_node:
          path=[]
          while parents[n]!=n:
            path.append(n)
            n=parents[n]
          path.append(start_node)
          path.reverse()
          print('the path found {}'.format())
          return path
        start_set.remove(n)
        closed_set.add(n)
    print('path does not exist!')
    return None


def get_neighbours(v):
    if v in Graph_nodes:
        return Graph_nodes[v]
    else:
        return None


def heuristic(n):
    H_dist = {
        'A': 10,
        'B': 8,
        'C': 5,
        'D': 7,
        'E': 3,
        'F': 6,
        'G': 5,
        'H': 3,
        'I': 1,
        'J': 0
    }
    return H_dist[n]


Graph_nodes = {
    'A': [('B', 6), ('F', 3)],
    'B': [('C', 3), ('D', 2)],
    'C': [('D', 1), ('E', 5)],
    'D': [('C', 1), ('E', 8)],
    'E': [('I', 5), ('J', 5)],
    'F': [('G', 1), ('H', 7)],
    'G': [('I', 3)],
    'H': [('I', 2)],
    'I': [('E', 5), ('J', 3)]
}
aStarAlgo('A','J')


          
        
