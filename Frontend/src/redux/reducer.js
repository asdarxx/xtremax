const initialState = {
    locations : [],
    selected : []
}

const locationsReducer = (state=initialState, action)=>{
    switch (action.type){
        case 'SETLOCATIONS' :
            return{
                ...state,
                locations : action.payload
            }

        case 'SETSELECTED' :
            return{
                ...state,
                selected : action.payload
            }
        
        case 'REMOVESELECTED' :
            return{
                ...state,
                selected : []
            }
            
        default :
             return state
    }
}

export default locationsReducer