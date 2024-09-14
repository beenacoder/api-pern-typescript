import server from "./server.js";

const port = process.env.PORT || 3000;

server.listen(3000, () => console.log(`Server running on port ${port}`));