import { PipeTransform, Pipe } from '@angular/core';
import { IList } from './list';

@Pipe({
    name: 'listFilter'
})

export class ListFilterPipe implements PipeTransform {

    transform(value: IList[], filter: string): IList[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((item: IList) =>
            item.text.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}