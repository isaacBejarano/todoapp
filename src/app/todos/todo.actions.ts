import { createAction, props } from '@ngrx/store';

const create = createAction('[TODO] create TODO', props<{ text: string }>());

export { create };
