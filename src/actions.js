export function fetchData(){
    return {
        type: "FETCH-DATA"
    }
}

export function fetchSU(data){
    return {
        type: "FETCH-CS",
        payload: data
    }
}
