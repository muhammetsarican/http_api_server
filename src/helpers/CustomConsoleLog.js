class CustomConsoleLog {
    g(...args) {
        args = args.map(arg => typeof (arg) == "object" && arg.length ? JSON.stringify(arg) : arg);

        process.env.NODE_ENV === "development" && console.log(args.join(" "));
    }
}

const clo = new CustomConsoleLog();

export default clo;