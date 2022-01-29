import { createAction, props } from '@ngrx/store';
import { CitiesResponse } from '../../models/city.model';

export const loadCities = createAction(
    '[Shared City] Load Cities',
    props<{ query: string }>(),
);
export const loadCitiesSuccess = createAction(
    '[Shared City] Load Cities Success',
    props<{ list: CitiesResponse[] }>(),
);
export const loadCitiesFailed = createAction(
    '[Shared City] Load Cities Failed',
);

export const clearCitiesState = createAction('[Shared City] Clear Cities State');