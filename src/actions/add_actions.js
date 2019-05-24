import { addService } from '../services/add.service';
 import { history } from '../history';


 export const addSector = (
    {
        name = '',
        zone = '',
        values ={},
        
    } = {}
) => ({
    type: 'ADD_SECTOR',
    sector: {
       name,
       zone,
       values
    }
});