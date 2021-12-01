import './App.css';
import Header from './components/Header';
import entries from './entries';
import Card from './components/Card';

function App() {
	const entry = entries.map( item => {
		return <Card key={item.id} item={item} />
	})
	return (
		<div className="App">
			<Header />
			<div className="journal-list">
				{entry}
			</div>
		</div>
	);
}

export default App;
