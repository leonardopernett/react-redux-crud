//constat
const initialState = {
    palabra:[],
    jugadores:[{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    },
    {
        id: 2,
        nombre: "Beto Quiroga",
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 3,
        nombre: "Alejo Garcia",
        foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
    },
    {
        id: 4,
        nombre: "Juan Disain",
        foto: "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg"
  }]
}

const SAVE_PALABRA = 'SAVE_PALABRA';
const GET_JUGADORES = 'GET_JUGADORES';
const DELETE_JUGADOR ='DELETE_JUGADOR';
//reduce
export default function palabraReduce(state=initialState, actions){
       if(actions.type === SAVE_PALABRA){
           return {
               ...state,
               palabra: state.palabra.concat(actions.payload)
           }
       }

       if(actions.type === GET_JUGADORES){
        return {
            ...state,
            jugadores: actions.payload
        }
    }
        if(actions.type===DELETE_JUGADOR){
          return{
             ...state,
             jugadores: state.jugadores.filter(j=>j.id !== actions.payload)
          }
        }
        

       return state;

}

//action
export const obtenerWord = (word) => (dispatch)=>{
     try {
        dispatch({
            type:SAVE_PALABRA,
            payload:word
        })
     } catch (error) {
         console.log(error)
     }
}

export const getjugadores = ()=>(dispatch)=>{
     dispatch({
         type:GET_JUGADORES,
         payload:initialState.jugadores
     })
}

export const deleteJugadores =(id)=>(dispatch)=>{
   dispatch({
       type:DELETE_JUGADOR,
       payload:id
   })
}