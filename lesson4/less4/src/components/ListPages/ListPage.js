import { Link } from "react-router-dom";

function ListPage() {
    const list = [
        { id: 1, title: 'Item tit 01' },
        { id: 2, title: 'Item tit 02' },
        { id: 3, title: 'Item tit 03', },
    ]
    return (<div>
        <h1>List Page</h1>
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <Link to={`/details/${item.id}`} >{item.title}</Link>
                </li>))}
        </ul>

    </div >);
}

export default ListPage;