import { FC } from 'react'
import subpic from '../../static/img/yellow.png';
import { Fade } from "react-awesome-reveal";
import{
    Container
} from './SubPageTwoElement';

const SubPageTwo: React.FC = () => {
    return (
        <>
        <Container>
            <div>
                <div>
                <h1 style={{color:"#6C45DA"}}>Don't Know What You Want?</h1>
                </div>
                <div>
                    <p>Don't Know What You Want?Don't Know What You Want?Don't Know What</p>
                </div>
            </div>
            <Fade direction='right'>

                <img src={subpic} style={{"width":"600px"}}></img>
            </Fade>

        </Container>
        </>
    );
}

export default SubPageTwo;