import pMinDelay from 'p-min-delay';

export default function loader(action, flag, minDuration = 0) {
  return async function (...args) {
    flag.value = true;
    try {
      return await pMinDelay(Promise.resolve(action.call(this, ...args)), minDuration);
    } finally {
      flag.value = false;
    }
  };
}
