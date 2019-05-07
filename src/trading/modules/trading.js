const FETCH_UPDATE_PENDING = 'meeting_list/meeting_request/FETCH_UPDATE_PENDING'
const SET_CURRENT_MEETING_UUID = 'meeting_list/meeting_request/SET_CURRENT_MEETING_UUID'

const INITIAL_STATE = {
  isFetchUpdate: false,
}

export function setCurrentEntityUuid (payload) {
  return {type: SET_CURRENT_MEETING_UUID, payload}
}

export function canSwapRoom () {
  return (dispatch, getState) => {
    dispatch(setOrResetSelectedRoom(selectedRoom))
  }
}


export default function reducer (state = INITIAL_STATE, action = {}) {
  const {payload} = action
  switch (action.type) {
    case FETCH_UPDATE_PENDING:
      return {...state, isFetchUpdate: true}

    default:
      return state
  }
}
