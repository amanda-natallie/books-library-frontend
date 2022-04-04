import { useEffect, useRef, useState } from 'react'

import { getToastState } from '~/store/features/toast/selectors'

import { useAppSelector } from '~/app/presentation/hooks'

import { Toast } from './components'
import { useStyles } from './toast-container-styles'

const ToastContainer = () => {
  const { toasts } = useAppSelector(getToastState)
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>()
  const classes = useStyles({ width })

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current?.clientWidth)
    }
  }, [toasts.length])

  return (
    <div className={classes.root} ref={containerRef}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  )
}

export default ToastContainer
