import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export const Account = () => {
    
    useEffect( () => {
        fetchItems()
    }, [])

    const [items, setItems] = useState<Item[]>([]);

    const fetchItems = async() => {
        const data = await fetch('http://localhost:4000/account', {
            method: "POST",
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        const items: Item[] = await data.json()
        setItems(items)
    }

    return (
        <div>
            {items.map(item => (
                <div>{item.email}</div>
            ))}
        </div>
    )
}

interface Item {
    email: string;
}