/**
 * 加载关键数据
 * @param {LoaderFunctionArgs} args
 */

export async function loader(args) {
    //只负责传递加载逻辑，具体查询由组件自己处理
    const deferredData = loadDeferredData(args);
    const criticalData = await loadCriticalData(args);
    return{
        ...deferredData,
        ...criticalData,
    };
}

/**
 * 关键数据加载逻辑
 * @param {LoaderFunctionArgs} args
 */
async function loadCriticalData({ context }){
    //此处只保留逻辑处理，不涉及具体的 查询
    return {};
}

/**
 * 非关键数据加载逻辑
 * @param {LoaderFunctionArgs} args
 */
function loadDeferredData({ contest }){
    //此处只保留逻辑处理，不涉及具体的查询
    return{};
}