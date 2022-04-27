import { FC } from 'react'
import subpic from '../../static/img/yellowblue.png';
import { Fade } from "react-awesome-reveal";
import{
    Container
} from './SubPageOneElement';

const SubPageOne: React.FC = () => {
    return (
        <>
        <Container>
        <Fade direction='left'>
                <img src={subpic} style={{"width":"400px"}}></img>
            </Fade>
            <div>
                <div>
                <h1 style={{color:"#6C45DA"}}>Don't Know What You Want?</h1>
                </div>
                <div>
                    <p>Don't Know What You Want?Don't Know What You Want?Don't Know What</p>
                </div>
            </div>
        </Container>
        </>
    );
}

export default SubPageOne;