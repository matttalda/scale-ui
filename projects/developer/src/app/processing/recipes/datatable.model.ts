import * as moment from 'moment';

export class RecipesDatatable {
    constructor(
        public first: number,
        public rows: number,
        public sortField: string,
        public sortOrder: number,
        public started: string,
        public ended: string,
        public type_id: number,
        public type_name: any,
        public batch_id: number,
        public include_superseded: boolean
    ) {}
}

export const initialRecipesDatatable: RecipesDatatable = {
    first: 0,
    rows: 20,
    sortField: 'last_modified',
    sortOrder: -1,
    started: moment.utc().subtract(24, 'h').toISOString(),
    ended: moment.utc().toISOString(),
    type_id: null,
    type_name: null,
    batch_id: null,
    include_superseded: null
};
