const sleep = ms => new Promise((resolve) => {
    return setTimeout(resolve, ms);
});

export { sleep };
