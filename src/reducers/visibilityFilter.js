import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'

// visibility filter reducer: manage action relative to filter
export default function visibilityFilter (state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
