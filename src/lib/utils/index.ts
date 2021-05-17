function noop() {
  /* empty function */
}

function isFunction(
  // tslint:disable-next-line
  fn: object | number | string | boolean | undefined | Function
  // tslint:disable-next-line
): fn is Function {
  return typeof fn === "function";
}

export { noop, isFunction };
