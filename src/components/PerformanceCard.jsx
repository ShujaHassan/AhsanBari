import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../utils/youtube';

function YouTubeThumbnail({ thumbnail, thumbnailFallback, title, className = '' }) {
  const [src, setSrc] = useState(thumbnail);

  return (
    <img
      src={src}
      alt={title}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== thumbnailFallback) setSrc(thumbnailFallback);
      }}
    />
  );
}

export default function PerformanceCard({ performance, onWatch, index = 0, variant = 'grid' }) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`group relative overflow-hidden border border-border bg-surface-elevated card-glow ${
        isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Thumbnail */}
      <button
        type="button"
        onClick={() => onWatch(performance)}
        className="relative block w-full aspect-video overflow-hidden cursor-pointer"
        aria-label={`Watch ${performance.title}`}
      >
        <YouTubeThumbnail
          thumbnail={performance.thumbnail}
          thumbnailFallback={performance.thumbnailFallback}
          title={performance.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/90 text-[#0a0a0a] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shadow-lg shadow-accent/30">
            <Play size={22} fill="currentColor" className="ml-0.5" />
          </span>
        </div>

        {/* Type badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-black/60 backdrop-blur-sm text-white border border-white/10">
          {performance.type === 'performance' ? 'Live' : 'Video'}
        </span>
      </button>

      {/* Content */}
      <div className={`p-5 md:p-6 ${isFeatured ? 'md:p-8' : ''}`}>
        {(performance.venue || performance.date) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            {performance.venue && (
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                {performance.venue}
              </span>
            )}
            {performance.date && (
              <span className="text-[10px] uppercase tracking-[0.15em] text-foreground-muted">
                {performance.date}
              </span>
            )}
          </div>
        )}

        <h3
          className={`font-heading text-foreground leading-snug group-hover:text-accent transition-colors duration-300 ${
            isFeatured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
          }`}
        >
          {performance.title}
        </h3>

        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            onClick={() => onWatch(performance)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-accent hover:text-accent-light transition-colors"
          >
            <Play size={12} fill="currentColor" />
            Watch Performance
          </button>

          <a
            href={performance.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-foreground transition-colors"
            aria-label={`Open ${performance.title} on YouTube`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={12} />
            YouTube
          </a>
        </div>
      </div>
    </article>
  );
}

export function YouTubeEmbed({ videoId, startTime = 0, title }) {
  return (
    <div className="aspect-video w-full bg-black">
      <iframe
        src={getYouTubeEmbedUrl(videoId, startTime)}
        title={title || 'YouTube video player'}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
