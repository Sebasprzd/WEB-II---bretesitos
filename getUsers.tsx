import React, { useEffect, useState } from "react";
import axios from 'axios';
import logo from "../../logo.svg";

const GetUsers = () => {
    const [data, setData] = useState<any[]>([]); 

    const obtener = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151 ');

        /* primera gen */   /*  https://pokeapi.co/api/v2/pokemon?offset=0&limit=151     */
        /* segunda gen */   /*  https://pokeapi.co/api/v2/pokemon?offset=151&limit=100   */
        /* tercera gen */   /*  https://pokeapi.co/api/v2/pokemon?offset=251&limit=135   */
        /* cuarta gen */    /*  https://pokeapi.co/api/v2/pokemon?offset=386&limit=107   */
        /* quinta gen */    /*  https://pokeapi.co/api/v2/pokemon?offset=493&limit=156   */


            const json = response.data.results;
            setData(json);
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtener();
    }, []);

    return (
        <div>
            <h5>Consumiendo datos de un API-Rest</h5>
            <p>En este ejemplo se muestra como consumir datos de un API-Rest</p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const ruta = item.url;
                        const pock = ruta.split('/');
                        const id = pock[6];
                        const urlP = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{item.name}</td>
                                <td><img src={urlP} width="45" height="45" alt="Sprite de Pokemon"/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GetUsers;
