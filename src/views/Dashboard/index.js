import { useEffect, useState } from 'react';
import { DataCallBack } from '../../config/Firebase'
import Carousel from 'react-elastic-carousel';
function Dashboard()
{
    const [docs,setDocs] = useState([]);
    useEffect(async()=>
    {
        const dataCallBack = await DataCallBack();
        const temp = [];
        dataCallBack.forEach(doc=>
            {
                const obj = {...doc.data()}
                temp.push(obj)
            })
            setDocs(temp);
    },[])
    console.log(docs);
    return(
        <div>
                <h1>DashBoard</h1>
               
                    <table style = {{border:'1px solid'}}>
                        {docs.map((item,index)=>
                    {
                        return <tr>
                            <td>
                                <p>Title:{item.text}</p>
                            </td>
                            <td>
                               <p> &nbsp;&nbsp;&nbsp;Price:{item.price}</p>
                            </td>
                            <td>
                                <p> &nbsp;&nbsp;&nbsp;Full Name:{item.fullName}</p>
                            </td>
                            <td>
                                <p> &nbsp;&nbsp;&nbsp;Contact number:{item.contactNumber}</p>
                            </td>
                            <td>
                                <Carousel style={{width:'500px'}} >
                                {item.images.map((items,index)=>
                                {
                                  return  <img style = {{width:'500px',height:'300px'}} src = {items} />
                                })}
                                </Carousel>
                            
                            </td>
                        </tr>
                    })
                }
                    </table>
                
        </div>
    ); 
}
export default Dashboard