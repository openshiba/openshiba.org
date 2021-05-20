// Third Party
import { merge } from 'lodash'
import PropTypes from 'prop-types'
import { createContext, useContext, useReducer } from 'react'

// Constants
import {
  REPLACE_APP_STATE,
  SET_APP_ERROR,
  SET_APP_LOADING,
  SET_APP_LOADING_MESSAGE,
  SET_APP_READY,
  SET_THEME,
} from '../../global/constants/actions/app';

const onReady = () => {
  document.body.classList.add('ready');
  setTimeout(() => {
    document.body.classList.remove('isLoading');
  }, 2000);
};

const AppRootContext = createContext();

export const AppContext = ({ children }) => {
  const DEFAULT_STATE = {
    state: {
      isAuthorized: false,
      ready: false,
      loading: true,
      messages: {
        loading: {
          title: 'Loading...',
          body: false,
        },
        error: {
          title: 'Something Went Wrong',
          body: "Don't worry our nerds have been notified!",
        }
      },
      error: false,
      name: 'Open Shiba Foundation',
    },
    profile: null,
    onReady,
  };

  const [STATE, DISPATCH] = useReducer((currentState, request) => {
    let NEW_APP = { ...currentState };

    // Check action type
    switch (request.action) {
      case REPLACE_APP_STATE:
        return {
          ...merge(currentState, request.payload),
        };
      case SET_APP_ERROR:
        try {
          if (NEW_APP.state.error !== request.payload) {
            NEW_APP.state.error = request.payload;
            if (typeof NEW_APP.onError === 'function') NEW_APP.onError(NEW_APP);
          }
        } catch (err) {
          console.error('Error setting error', err);
        }
        return NEW_APP;
      case SET_APP_LOADING:
        if (NEW_APP.state.loading !== request.payload) {
          NEW_APP.state.loading = request.payload;
        }
        return NEW_APP;
      case SET_APP_LOADING_MESSAGE:
        if (NEW_APP.state.messages.loading !== request.payload) {
          NEW_APP.state.messages.loading = request.payload;
        }
        return NEW_APP;

      // Trigger when our data is ready and we should render the page
      case SET_APP_READY:
        if (!NEW_APP.state.ready) {
          NEW_APP.state.ready = true;
          if (typeof NEW_APP.onReady === 'function') NEW_APP.onReady(NEW_APP);
        }
        return NEW_APP;

      // Set new theme
      case SET_THEME:
        if (NEW_APP.theme.current !== request.payload) {
          NEW_APP.theme.current = request.payload;
        }
        if (typeof NEW_APP.onthemeChange === 'function') {
          NEW_APP.onthemeChange(NEW_APP);
        }
        return NEW_APP;
      // If nothing matched just return current NEW_APP
      default:
        console.warn('Unknown context requested', request);
        return currentState;
    }
  }, DEFAULT_STATE);

  return <AppRootContext.Provider value={{ app: STATE, dispatch: DISPATCH }}>{children}</AppRootContext.Provider>;
};

AppContext.propTypes = {
  children: PropTypes.any,
};

export function useAppContext() {
  return useContext(AppRootContext);
}
