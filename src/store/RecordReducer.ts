import {
    ADD_RECORD,
    DELETE_RECORD,
    LOCK_RECORD,
    ALL_RECORDS
} from './RecordTypes';

const initialState = {
    record: {
        uri: '',
        status: ''
    },
    allRecords: []
}

const recordReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_RECORD: 
            return {
                ...state,
                record: action.payload
            }
        case DELETE_RECORD: 
            return {
                ...state,
                allRecords: state.allRecords.filter(item => item.id != action.payload)
            }
        case LOCK_RECORD: 
            return {
                ...state,
                status: action.payload
            }
        case ALL_RECORDS: 
            return {
                ...state,
                allRecords: state.allRecords
            }
        default:
            return state;
    }
}

export default recordReducer;