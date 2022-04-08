import {Request,Response} from "express";

export const home =((req:Request,res:Response)=>{  
  //res.render('pages/page');
});
export const dogs =((req:Request,res:Response)=>{  
  //res.render('pages/dogs');
});
export const cats =((req:Request,res:Response)=>{  
  //res.render('pages/cats');
});
export const fishes =((req:Request,res:Response)=>{  
  //res.render('pages/fishes');
});
export function search(arg0: string, search: any) {
  throw new Error('Function not implemented.');
}

