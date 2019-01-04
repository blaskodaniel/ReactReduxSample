
const initstate = {
    age: 1
}

const testreducer = (state = initstate, action:any) => {
    const newState = {...state};
    if(action.type === 'INC'){
        newState.age++;
    }
    if(action.type === 'DEC'){
        newState.age--;
    }
    return newState;
}

export default testreducer;