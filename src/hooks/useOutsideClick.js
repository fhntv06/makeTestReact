import { useEffect } from 'react'

export default function useOutsideClick (ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        // eslint-disable-next-line no-useless-return
        return
      }

      return handler()
    }

    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}
