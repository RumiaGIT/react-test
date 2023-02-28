import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default function TableRow(props) {
    return (
        <tr>
            <td><p>{props.name}</p></td>
            <td><ReactMarkdown children={props.latex} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} /></td>
            <td><p>{props.latex}</p></td>
        </tr>
    )
}