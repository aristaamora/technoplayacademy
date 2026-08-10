import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants = 'primary' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariants;
  children: ReactNode;
  className?: string;
  href?: string;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({ variant = 'primary', className = '', children, href, ...props }: ButtonProps) {
  const variantClasses =
    variant === 'ghost'
      ? 'btn-ghost border-white/10 text-light hover:bg-white/10'
      : 'btn-primary';
  const classNames = `btn ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <a className={classNames} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
