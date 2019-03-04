function devlogGen(port) {
    const devlog = () => {
        if (process.env.NODE_ENV === 'development') {
            // tslint:disable-next-line:no-console
            console.log(`listening on port http://localhost:${port}`);
        }
    };
    return devlog;
}
export default devlogGen;
