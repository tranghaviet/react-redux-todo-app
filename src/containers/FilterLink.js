import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// mapStateToProps(state, [ownProps]) là function.
// Nếu được định nghĩa, container sẽ được đăng ký (subscribe) với store.
// Mỗi khi store update, mapStateToProps sẽ được gọi,
// object mà nó trả về sẽ được merge với props của container.
// Nếu mapStateToProps không được định nghĩa container sẽ
// không được đăng ký và nhận update từ store
const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
