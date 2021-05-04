const dev = process.env.NODE_ENV === 'development'

export const server = dev ? 'http://localhost:80' : 'http://ec2-3-137-209-79.us-east-2.compute.amazonaws.com/'