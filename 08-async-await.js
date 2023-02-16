const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error"));
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hello");
}

// const anotherFnThen = () => {
//     const somethig = fnAsync().then().catch().finally();
//     console.log(somethig);
//     console.log("Hello");
// }

console.log("before");
anotherFn();
console.log("After");