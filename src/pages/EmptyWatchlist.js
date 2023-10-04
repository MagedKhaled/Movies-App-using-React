import Icon from '@mdi/react';
import { mdiHeartOff } from '@mdi/js';

export default function EmptyWatchlist (){

    return(
        <div className='d-flex justify-content-center'>
            
            <div className='row justify-content-center'>
            <Icon path={mdiHeartOff} size={15} className='text-light'/>
            <h4 className='text-center m-3 text-muted'>No Movies in watch list.</h4>
            <div className='btn w-25' style={{"backgroundColor":"#ffe69c"}}>Back To Home</div>
            </div>
        </div>
    );
}
