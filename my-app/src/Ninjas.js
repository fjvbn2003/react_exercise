import React from 'react';
import './Ninjas.css'
const Ninjas = ({ninjas, deleteNinja}) => {
        //console.log(this.props);
        // const ninjaList = ninjas.map(ninja => {
        //     if(ninja.age >24){
        //         return (            
        //             <div className="ninja" key={ninja.id}>
        //                 <div>Name: {ninja.name}</div>
        //                 <div>Age: {ninja.age}</div>
        //                 <div>Belt:{ninja.belt}</div>
        //             </div>
        //             )
        //     }
        //     else{ return null}
           
        // });
        const ninjaList = ninjas.map(ninja => {
            return ninja.age>24 ? (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt:{ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>DeleteNinja</button>
                </div>
            ) : null;
        });

        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
}
export default Ninjas;