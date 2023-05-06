import clsx from 'clsx'


const GlassPain = ({children, className}: {children:any, className: any}) => {
  return (
    <div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>
        {children}
    </div> 
  )
}

export default GlassPain 