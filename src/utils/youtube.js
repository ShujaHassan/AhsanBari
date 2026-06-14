/**
 * Extract YouTube video ID from various URL formats.
 */
export function getYouTubeId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtu\.be\/)([^?\s]+)/,
    /(?:youtube\.com\/embed\/)([^?\s]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/**
 * Parse start time from YouTube URL (supports t=2130s, t=42m30s, t=4s).
 */
export function getYouTubeStartTime(url) {
  const match = url.match(/[?&]t=(\d+h)?(\d+m)?(\d+s?)/);
  if (!match) return 0;

  const full = url.match(/[?&]t=([^&]+)/)?.[1] || '';
  let seconds = 0;

  const hours = full.match(/(\d+)h/);
  const minutes = full.match(/(\d+)m/);
  const secs = full.match(/(\d+)s?$/);

  if (hours) seconds += parseInt(hours[1], 10) * 3600;
  if (minutes) seconds += parseInt(minutes[1], 10) * 60;
  if (secs) seconds += parseInt(secs[1], 10);

  return seconds;
}

/** High-quality thumbnail with standard YouTube CDN. */
export function getYouTubeThumbnail(videoId, quality = 'maxres') {
  const map = {
    maxres: 'maxresdefault',
    high: 'hqdefault',
    medium: 'mqdefault',
  };
  return `https://img.youtube.com/vi/${videoId}/${map[quality] || map.high}.jpg`;
}

/** Build embed URL with optional start time. */
export function getYouTubeEmbedUrl(videoId, startSeconds = 0) {
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
  });
  if (startSeconds > 0) params.set('start', String(startSeconds));
  return `https://www.youtube.com/embed/${videoId}?${params}`;
}

/** Parse a raw YouTube watch URL into structured video data. */
export function parseYouTubeUrl(url, overrides = {}) {
  const videoId = getYouTubeId(url);
  if (!videoId) return null;

  return {
    videoId,
    url,
    startTime: getYouTubeStartTime(url),
    thumbnail: getYouTubeThumbnail(videoId),
    thumbnailFallback: getYouTubeThumbnail(videoId, 'high'),
    ...overrides,
  };
}
