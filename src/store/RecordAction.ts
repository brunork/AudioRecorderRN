import {
    ADD_RECORD,
    DELETE_RECORD,
    LOCK_RECORD
} from './RecordTypes';

export const addRecord = (record) => ({
    type: ADD_RECORD,
    payload: record
})

export const deleteRecord = (id) => ({
    type: DELETE_RECORD,
    payload: id
})

export const lockRecord = (id) => ({
    type: LOCK_RECORD,
    payload: id
})