import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('fulfilled login', async () => {
        const testUserData = {
            username: '123',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: testUserData,
        }));
        const action = loginByUsername({
            username: '123',
            password: '123',
        });
        const result = await action(dispatch, getState, undefined);
        expect(dispatch)
            .toHaveBeenCalledWith(userActions.setAuthData(testUserData));
        expect(mockedAxios.post)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('fulfilled');
    });
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const action = loginByUsername({
            username: '123',
            password: '123',
        });
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.post)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('rejected');
    });
});
