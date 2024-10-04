// +page.server.ts runs on the server side before the +page.svelte is rendered
export const load = async ({ fetch }) => {
    try {
        // Fetch data from an API or perform any other async operations here
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await response.json();

        // Return the data to be used in the page component
        return {
            posts
        };
    } catch (error) {
        // Handle any errors that occur during the data fetching process
        console.error('Error fetching feed data:', error);
        return {
            error: 'Failed to fetch feed data',
        };
    }
};