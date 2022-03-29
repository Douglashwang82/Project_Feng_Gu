import { FC } from 'react'
import { Typography } from '@material-ui/core';
const ConfirmationPage: FC<{data:any}> = ({data}) => {

    return (
        <>
        {console.log("in con", data)}
        {data.map((key:string, value:string) => (
            <div>
            <Typography>{key}</Typography>
            <Typography>{value}</Typography>
            </div>
        ))}
        </>
    );
}

export default ConfirmationPage 