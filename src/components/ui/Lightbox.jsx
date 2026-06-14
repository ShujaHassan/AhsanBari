import { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { useScrollLock } from '../../hooks/useScrollLock';

export default function Lightbox({ isOpen, onClose, title, children, wide = false }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Media viewer'}
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`relative z-10 w-full ${
          wide ? 'max-w-5xl' : 'max-w-4xl'
        } bg-surface-elevated border border-border overflow-hidden shadow-2xl lightbox-enter`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          {title && (
            <h3 className="font-heading text-lg md:text-xl text-foreground pr-4 line-clamp-1">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="ml-auto shrink-0 p-2 text-foreground-muted hover:text-accent transition-colors"
            aria-label="Close viewer"
          >
            <X size={20} />
          </button>
        </div>

        <div className={wide ? '' : 'p-6'}>{children}</div>
      </div>
    </div>
  );
}
