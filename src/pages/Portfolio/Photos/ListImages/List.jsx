import React,{ useState} from 'react';
import Items from './data';
import { Li } from './style';


export default props => {
     const [isItems] = useState(Items)
    return   <>
    {
        isItems.map(item => (
            <Li key={item.id}> <img src={item.src}  alt="portfolio imgs" /> </Li>
        ))
    }
    
    </>
                  
          
 


}

