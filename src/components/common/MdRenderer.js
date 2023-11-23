import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm'
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import "github-markdown-css"

const MarkdownComponents = {
    // 代码高亮的处理
    code({ inline, className, ...props }) {
      const hasLang = /language-(\w+)/.exec(className || "");
      return !inline && hasLang ? (
        <SyntaxHighlighter
          style={oneDark}
          language={hasLang[1]}
          PreTag="div"
          className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
          showLineNumbers={true}
          useInlineStyles={true}
        >
          {String(props.children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
  }
const MdRenderer = (props) => {
    return (
        <ReactMarkdown
            className='markdown-body'
            components={MarkdownComponents}
            remarkPlugins={[remarkGfm]}
            children={props.body}
        >
            
        </ReactMarkdown>
    )
}

export default MdRenderer