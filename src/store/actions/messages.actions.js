/* eslint-disable */
import axios from "axios";
import {
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL
} from "../types/messages.type";

const { API } = process.env;

const fetchMessages = () => async dispatch => {
  try {
    const { data } = await axios.get(`${API}/messages`, {
      headers: {
        "access-token": sessionStorage.getItem('token')
      }
    });
    dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: { messages: data.data } });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_MESSAGES_FAIL });
  }
};

export default fetchMessages;
