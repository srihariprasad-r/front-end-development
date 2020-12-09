export const findEmployee = () => async dispatch => {
    const url = 'http://randomuser.me/api';
    const headers = {headers: {"Content-Type":"application/json"}};
    let res = await fetch(url, {headers});
    res = await res.json();
    let employee = res.results[0];
    dispatch({type: 'FIND_EMPLOYEE', payload:employee});

};