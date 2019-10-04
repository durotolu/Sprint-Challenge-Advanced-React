import React, { useState } from 'react';

export default function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const info = window.localStorage.getItem(key);
        return info ? JSON.parse(info) : initialValue;
    })
    
    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }

    return [storedValue, setValue]
}