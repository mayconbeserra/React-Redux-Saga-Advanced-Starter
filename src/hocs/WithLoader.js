import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LoadingAnimation from '@/src/components/LoadingAnimation'
const WithLoader = (WrappedComponent) => {
  return class isLoading extends Component {
    static propTypes = {
      loading: PropTypes.bool
    }

    state = {
      loading: false
    }

    componentWillReceiveProps (nextProps) {
      const { loading } = nextProps
      this.setState({ loading })
    }

    render () {
      const { loading } = this.state
      return (
        <div>
          {
            loading &&
              <LoadingAnimation iconSize={44} />
          }
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
export default WithLoader
