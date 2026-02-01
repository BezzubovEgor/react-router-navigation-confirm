function noop() {
  /* empty function */
}

function isFunction(
  fn: unknown
): fn is (...args: any[]) => any {
  return typeof fn === "function";
}

export { noop, isFunction };
