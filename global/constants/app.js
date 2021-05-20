import { APP_ACTIONS } from '../../global/constants/actions/app';

export const APP_COOKIES = {
  USER_ACCEPTED: 'ok-with-cookies',
  THEME_NAME: 'ui-theme',
};

const APP = {
  APP_COOKIES,
  actions: {
    ...APP_ACTIONS,
  },
};

export default APP;
