import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'todoPipe' })

export class TodoPipe implements PipeTransform {

    constructor(private datePipe: DatePipe) {}
    transform(dueDate) {
        let diffDays: number;
        let message: string;
        diffDays = 0;

        if (dueDate) {
            const date = new Date(dueDate);
            const timeDiff = new Date().getTime() - date.getTime();
            diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        }
        if (diffDays === 0) {
            message = 'due today';
        } else if (diffDays > 0) {
            if (diffDays === 1) {
                message = '1 day late';
            } else {
                message = diffDays + 'days late';
            }
        } else  {
            message = this.datePipe.transform(dueDate, 'MM/dd/yyyy');
        }

        return message;
    }
}
