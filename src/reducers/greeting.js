import { CLICKED_BUTTON } from '../actions/actionsTypes';

export default function greeting(state = 'Hello World', action) {
  switch (action.type) {
    case CLICKED_BUTTON:
      return 'Button Clicked!';
    default:
      return state;
  }
}
