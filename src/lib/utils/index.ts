function noop() {
  /* empty function */
}

function isFunction(fn: object | number | string | boolean | undefined | Function): fn is Function {
  return typeof fn === 'function';
}

export { noop, isFunction };
