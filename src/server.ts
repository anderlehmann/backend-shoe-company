import { app } from './app';

const port = process.env.PORT || 3090;
app.listen(port, () => console.log('Server on na porta 3090'));
