const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      fav: [],
    },
    actions: {
      addFav: (data) => {
        const store = getStore();
        const duplicado = store.fav.find((item) => item === data);
        if (!duplicado) {
          setStore({fav: [...store.fav, data]});
        }
      },
      deleteFav: (data) => {
        const store = getStore();
        const nuevaLista = store.fav.filter((favItem) => favItem !== data);
        setStore({fav: nuevaLista});
      },
    },
  };
};

export default getState;
