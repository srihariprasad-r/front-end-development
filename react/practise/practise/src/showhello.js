import { useEffect } from 'react';

export const ShowHello = () => {
    useEffect(() => {
        console.log('render');

        return () => {
            console.log('unmount');
        }
    }, []);

    return <div>Hello</div>
};