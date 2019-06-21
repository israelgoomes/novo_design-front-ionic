import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
/*
  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });

  }
   */
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    //console.log('Termos', terms)
    try {
      terms = terms.toString().toLowerCase();
      return items.filter( it => {
        //console.log('Nomes',it.name)

        return JSON.stringify(it.nome).toLowerCase().includes(terms);
      });  
    } catch (error) {
      //console.log('Erro no pipe search',error)
    }
    
  }

}