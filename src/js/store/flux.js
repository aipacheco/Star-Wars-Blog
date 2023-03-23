const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      fav: [],
    },
    actions: {
      addFav: (data) => {
        const store = getStore();//se llama a la función getStore() para obtener el estado actual del store
        const duplicado = store.fav.find((item) => item === data); //se busca dentro del array store.fav si ya existe un elemento igual
        if (!duplicado) { //si no existe
          setStore({fav: [...store.fav, data]});//se setea el elemento a una copia de fav
        }
      },
      deleteFav: (data) => {
        const store = getStore();//se llama a la función getStore() para obtener el estado actual del store
        const nuevaLista = store.fav.filter((favItem) => favItem !== data); //filter crea un nuevo array sin el objeto que sea distinto (el que queremos en realidad)
        setStore({fav: nuevaLista}); //se setea la nueva lista a favoritos de store
      },
    },
  };
};

export default getState;
