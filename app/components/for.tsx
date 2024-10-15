function simpleMap(
  props: { each: any[]; children: Function; fallback?: React.JSX.Element },
  wrap: (fn: Function, item: any, i: number) => React.JSX.Element

) {
  const list = props.each || []
  let len = list.length
  const fn = props.children

  if (!len) {
    return props.fallback
  }

  let mapped = Array(len)
  for (let i = 0; i < len; i++) mapped[i] = wrap(fn, list[i], i)
  return mapped
}


export function For<T>(props: {
  each: T[];
  fallback?: React.JSX.Element;
  children: (item: T, index: number) => React.JSX.Element;
}) {
  return simpleMap(props, (fn, item, i) => fn(item, () => i));
}
