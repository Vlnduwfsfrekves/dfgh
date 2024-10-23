// 1
function getPromise():Promise<(string|number)[]>{
    return new Promise((resolve)=>{
        resolve(['Text',50])
    })
}
// 2
type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}
function compare(top:Pick<AllType,'name'|'color'>,bottom:Pick<AllType,'position'|'weight'>):AllType{
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}
// 3
function merge<T,U>(objA:T,objB:U):T&U{
    return Object.assign({},objA,objB)
}
// 4
class Component<T>{
    constructor(public props:T){}
}
interface Ext{
    title:string
}
class Page extends Component<Ext>{
    pageInfo(){
        console.log(this.props.title)
    }
}