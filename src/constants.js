const production = {
    url: 'https://vikariecentralen.se'
};

const development = {
    url: 'http://localhost:4000'
};

export const config = process.env.NODE_ENV === 'development' ? development : production;