export default function PageLayout({ children, className = '', fullWidth = false }) {
  return (
    <div
      className={`min-h-screen pt-24 md:pt-28 pb-16 px-5 sm:px-8 ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}>
        {children}
      </div>
    </div>
  );
}
