// import { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";

// export default function useUsersList(id) {
//   const [films, setFilms] = useState({});
//   const { data } = useFetch(`/users/${id}/films`);
//   setFilms(data);
//   return films;
// }

// export default function useUsersList(id) {
//   const [films, setFilms] = useState({});
//   const { data } = useFetch(`/users/${id}/films`);

//   useEffect(() => {
//     setFilms(data);
//   }, [id]);

//   return { films };
// }
