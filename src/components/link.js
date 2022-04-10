export default function Link({ path, label, children, ...rest }) {
  return (
    <a href={path} {...rest}>
      {children}
    </a>
  );
}
