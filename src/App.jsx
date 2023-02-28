import Table from "./components/Table"
import { greekSymbols, mathSymbols, miscFormulas } from "./components/TableData"

export default function App() {
	return (
		<div className="App">
			<h1>Cool Header!</h1>
			<Table data={[greekSymbols, mathSymbols, miscFormulas]} />
		</div>
	)
}