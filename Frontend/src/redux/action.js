export const setLocations = (payload) => {
    return{
        type:'SETLOCATIONS',
        payload,
    }
}

export const setSeleceted = (payload) =>{
    return{
        type:'SETSELECTED',
        payload,
    }
}

export const removeSelected = () =>{
    return{
        type:'REMOVESELECTED',
    }
}