import { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAIL } from "../types/messages.type";
import updateObject from "../../utils/updateObject";

const initialState = {
  messages: null,
  error: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MESSAGES_SUCCESS:
      return updateObject(state, { messages: payload.messages, error: null });
    case FETCH_MESSAGES_FAIL:
      return updateObject(state, { messages: null, error: true });
    default:
      return state;
  }
};

export default reducer;
