//importamos las actions-type


//definir el initial state

let initialState={
    allVideoGames:[],
    allGenres:[]
}


//def del rootreducer
function rootReducer(state=initialState,action){
    switch (action.type) {
        
        default: return state;
            
    }
}

export default rootReducer