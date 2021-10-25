import axios from "axios";

const getAll = () => {
  const request = axios.get("/todos/");
  return request.then((response) => response.data);
};

// somehow needs to be async await or else there is an error? Still registers with backend but the front end acts up
const create = async (newObject) => {
  const response = await axios.post("/todos/", newObject);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`/todos/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = async (id) => {
  const res = await axios.delete(`/todos/${id}`)
  return res.data
}


// get rid of warning by assigning to a variable before export
const toDoService = { getAll, create, update, remove };
export default toDoService;
