
import app from "./app";

const PORT = 3000;

// Your other middleware and route handlers here
// For example:
// appInstance.use(express.json());
// appInstance.use('/api', yourRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
