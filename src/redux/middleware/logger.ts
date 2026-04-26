export const logger = (state:{getState:()=>any}) => (next:any) =>(action:any)=> {
  console.log(state.getState())
  console.log(action)
  return next(action)
}