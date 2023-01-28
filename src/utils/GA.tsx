import ReactGA from 'react-ga4';
import { v4 as uuidv4 } from 'uuid';

export const fixedEncodeURI = (str: string) => {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
};

//设置cookie
export const setCookie = (c_name: string, value: string, expiredays: number) => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    '=' +
    fixedEncodeURI(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toUTCString());
};

//取回cookie
export const getCookie = (c_name: string) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return decodeURI(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
};
const getPersistentData = (key: string, defaultValue: string) => {
  const v_ck = getCookie(key);
  const v_ls = localStorage.getItem(key);
  if (v_ck === v_ls) return v_ck;
  if (v_ck && !v_ls) {
    localStorage.setItem(key, v_ck);
    return v_ck;
  }
  if (!v_ck && v_ls) {
    setCookie(key, v_ls, 365);
    return v_ls;
  }
  setCookie(key, defaultValue, 365);
  localStorage.setItem(key, defaultValue);
  return defaultValue;
};
export const getUid = () => {
  return getPersistentData('uid', uuidv4());
};
const trackingCode = {
  release: 'G-FR0JSCZLVH',
};
export class GA {
  constructor() {
    ReactGA.initialize([
      {
        trackingId: trackingCode.release,
        gaOptions: {
          userId: getUid(),
        }, // optional
      },
    ]);
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
    });
  }
  sendGAEvent = (category: string, action: string, label?: string, value?: number) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
      value: value,
    });
  };
  static instance = null as any;
  static getInstance() {
    if (!GA.instance) {
      GA.instance = new GA();
    }
    return GA.instance;
  }
}
