import TableRow from "./TableRow"

export default function Table(props) {
    return (
        <div>
            {props.data.map(i => {
                return (
                    <div>
                        <h2>{i[0].name}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Notation</th>
                                    <th>LaTeX</th>
                                </tr>
                            </thead>
                            <tbody>
                                {i[0].data.map(j => {
                                    return <TableRow key={j.id} name={j.name} latex={j.latex} />
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}