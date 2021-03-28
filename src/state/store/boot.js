import store from './configureStore'
import authActions from './auth/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  await store.dispatch(authActions.checkAuthorization())
  await store.dispatch(authActions.checkClient())
}
