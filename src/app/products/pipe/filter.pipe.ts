import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //method to convert data
  transform(value: any[], filterString:String,propertyName:any):any {
   const result:any=[]

   if(!value || filterString=="" || propertyName==""){
    return value
   }
   else{
    value.forEach((item:any)=>{
      if(item[propertyName].trim().toLowerCase().includes(filterString.trim().toLocaleLowerCase())){
          result.push(item)
      }
    })
    return result
   }

    return null;
  }

}
