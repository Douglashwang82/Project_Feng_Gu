import {a} from '@react-spring/web';

interface Props{
    className?: string;
    style?: any;
}

export const PreTrailText: React.FC<Props> = ({className, style,children}) => {
    return (
        <a.div className={className} style={style}>{children}</a.div>
    )
}