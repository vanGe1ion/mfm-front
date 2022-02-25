import React, { Children, FC } from 'react'

const LoginFormGroup: FC = ({children}) => {
  return (
    <div className="flex flex-col text-left">
        {children}
    </div>
  )
}

export default LoginFormGroup