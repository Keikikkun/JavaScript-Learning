// JSON: Javascript Object Notation

const post = {
    id: 1,
    title: 'Post one',
    body: 'This is the body'
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str);

// Parse JSON

const obj = JSON.parse(str)

console.log(obj);