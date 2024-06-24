

export const middleware = (store) => (next) => (action) => {
    console.log("Действие: ", action);
    console.log("Состоянеи до: ", store.getState());

    const result = next(action);
    console.log("Состоянеи после: ", store.getState());
    return result;
}