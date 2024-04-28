import React from 'react'

const ErrorPage = () => {
	return (
		<div className='flex flex-col h-screen w-screen justify-center items-center'>
			<h1 className='text-3xl text-red-900'>Oops! Seems like somebody has lost their way</h1>
			<h2>This path does not exist</h2>
		</div>
  	)
}

export default ErrorPage