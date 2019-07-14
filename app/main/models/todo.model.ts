
export enum Status {
    NEW = 'New', COMPLETED = 'Completed'
}

export class Todo  {
    name: string;
    details: {
        description: string,
        status: Status,
        dateCompleted ?: Date,
        deadline ?: Date
    };
}
