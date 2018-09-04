var tasks = function () {
    let tasks = [];
    for (let i = 0; i < 10; i++) {
        tasks.push({
            title: "task" + i,
            content: "content" + i * 100,
            tag: 'working',
            completed: false,
            createdAt: (new Date()).toString()
        })
    };
    for (let i = 10; i < 20; i++) {
        tasks.push({
            title: "task" + i,
            content: "content" + i * 100,
            tag: 'completed',
            completed: true,
            createdAt: (new Date()).toString()
        })
    }

    return console.log(JSON.stringify(tasks));
}();