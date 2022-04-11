/* Pasta helpers tem as  função q vai aux 
varias pag de um controller */
type MenuOptions = ''|'all'|'dog'|'cat'|'fish';

export const createMenuObject = (activeMenu:MenuOptions)=>{
  let returnObject = {
      all:false,
      dog:false,
      cat:false,
      fish:false
  }; 
  if(activeMenu !== ''){
    returnObject[activeMenu]=true;
  } 
  returnObject;
}