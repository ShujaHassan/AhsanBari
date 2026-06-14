import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-accent text-[#0a0a0a] hover:bg-accent-light shadow-sm hover:shadow-md hover:shadow-accent/20',
  secondary:
    'border border-accent text-accent hover:bg-accent hover:text-[#0a0a0a]',
  ghost:
    'text-foreground-muted hover:text-accent border border-border hover:border-accent',
};

const sizes = {
  sm: 'px-5 py-2 text-xs tracking-widest',
  md: 'px-8 py-3 text-sm tracking-widest',
  lg: 'px-10 py-4 text-sm tracking-widest',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-body font-semibold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]';

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
