import type { MDXComponents } from 'mdx/types';
import ScriptureImage from '@/components/ScriptureImage';
import ScriptureHeader from '@/components/ScriptureHeader';
import ScriptureText from '@/components/ScriptureText';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <ScriptureHeader level={1} {...props} />,
    h2: (props) => <ScriptureHeader level={2} {...props} />,
    p: (props) => <ScriptureText {...props} />,
    img: (props) => <ScriptureImage src={props.src} alt={props.alt} />,
    ...components,
  };
}