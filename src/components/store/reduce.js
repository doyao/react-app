const defaltState={
    list:[
        {key:0,name:'张三',age:22,tel:'15682353885',sex:'男'},
        {key:1,name:'李四',age:15,tel:'15682353885',sex:'男'},
        {key:2,name:'王五',age:42,tel:'15682353885',sex:'女'},
        {key:3,name:'小蜜',age:8,tel:'15682353885',sex:'女'},
        {key:4,name:'小红娘',age:16,tel:'15682353885',sex:'男'},
        {key:5,name:'胡瑶',age:30,tel:'15682353885',sex:'女'},
    ],
    isLogin:false,
    user:[]
}
const reduce=(state=defaltState, action)=>{
    if(action.type==='LOGIN'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.user.push(action.value);
        newState.isLogin=true;
        return newState;
    }
    if(action.type==='ADD_LIST'){
        const newState=JSON.parse(JSON.stringify(state));
        // console.log(newState.list);
        // console.log(action.value)
        newState.list.push(action.value)
        return newState;
    }
    if(action.type==='delete_input'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        console.log(action)
        return newState;
    }
    return state;
}
export default reduce;