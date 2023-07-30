import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allPassports:any[],searchTerm:string,propsName:string): any[] {
    const result:any[]=[];
    if(!allPassports||searchTerm==''||propsName==''){
      return allPassports;
    }
    allPassports.forEach((passport:any)=>{
      if(passport[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(passport)
    })
    return result;
  }
}

