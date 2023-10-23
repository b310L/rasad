"use client";
import { Box, Button } from "@mui/material";
import Drop from "../../client/dropDown/drop";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

function App() {
  const queryClient = new QueryClient();

  return (
    // <Drop />
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      {/* <ReactQueryDevtools
          initialIsOpen={false}
          panelProps={"style"}
        /> */}
      <Child />
    </QueryClientProvider>
  );
}

export default App;

 const Child = () => {
  const queryClient = useQueryClient();
  // const { isPending, error, data, isFetching, isError } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: () => axios.get('https://jsonplaceholdesr.typicode.com/posts"'),
  // });
  const { isPending, error, data, isFetching, isError } = useQuery({
    queryKey: ["test"],
    queryFn: () =>
      axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>  res.data),
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    // <Drop />
    <div>
      <ul>{data?.map((todo) => {
        console.log('sssss= ' + todo)
        return <li key={todo.id}>{todo.title}</li> 
      } )}</ul>

      <Button variant="custom" sx={{color:'#ffffffa1',"&:hover":{
        color:'#ffffff'
      }}}
        onClick={() => {
          console.log("hi");
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};
