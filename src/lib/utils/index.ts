function noop() {
  /* empty function */
}

// tslint:disable-next-line
function isFunction(fn: object | number | string | boolean | undefined | Function): fn is Function {
  return typeof fn === 'function';
}

export { noop, isFunction };
