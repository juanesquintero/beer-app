import axios from 'axios';

export const fetchData = async (endpoint: string) => {
    try {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data;
    } catch (err) {
        return null;
    }
};


export const postData = async (endpoint: string, body: any) => {
    try {
        const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + endpoint, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};