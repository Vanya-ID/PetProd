import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Couter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initiaslState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initiaslState,
    });
}
