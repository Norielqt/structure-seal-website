import { useState } from 'react'

/* Renders the real logo mark from /public/logo-mark.png once it's added.
   Until then it falls back to a chrome→blue layer-stack placeholder. */
export default function Logo({ small = false }: { small?: boolean }) {
  const [imgOk, setImgOk] = useState(true)
  const size = small ? 'h-8 w-8' : 'h-9 w-9'

  return (
    <span className="flex items-center gap-3">
      {imgOk ? (
        <img
          src="/logo-mark.png"
          alt="StructureSeal"
          onError={() => setImgOk(false)}
          className={`${size} object-contain`}
        />
      ) : (
        <span
          className={`flex ${size} flex-col justify-end gap-[2px] overflow-hidden rounded-[6px] bg-surface-2 p-[5px]`}
        >
          <span className="h-[3px] w-full bg-chrome" />
          <span className="h-[3px] w-full bg-azure-light" />
          <span className="h-[3px] w-full bg-azure" />
          <span className="h-[3px] w-full bg-azure-deep" />
        </span>
      )}
    </span>
  )
}
