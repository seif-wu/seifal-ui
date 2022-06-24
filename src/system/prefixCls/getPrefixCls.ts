export default function getPrefixCls(className: string, prefix = 'seif') {
  return `${prefix}-${className}`;
}
