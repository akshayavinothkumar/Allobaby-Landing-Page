import { useState } from 'react'

/**
 * Loads PNG screenshots from public/screenshots/ with automatic SVG fallback.
 * Non-technical users can drop PNG files in that folder using the same base name.
 */
export default function ScreenshotImage({ file, alt, className = '', ...props }) {
  const [src, setSrc] = useState(`/screenshots/${file}.png`)
  const [triedSvg, setTriedSvg] = useState(false)

  const handleError = () => {
    if (!triedSvg) {
      setSrc(`/screenshots/${file}.svg`)
      setTriedSvg(true)
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  )
}
