
export const EMPRESA='EMPRESA';
export const USER="USER";

export const actionKreator = value => ( {type:EMPRESA,user:null,empresa:value  } ) 
export const actionUser = (valor,result) => ({ type:USER, user:valor,email:result, empresa:null })