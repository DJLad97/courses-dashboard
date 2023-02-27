import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Dashboard from '@pages/Dashboard/Dashboard'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Dashboard />
		</div>
	)
}

export default App
