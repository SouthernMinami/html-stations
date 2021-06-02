async function getData() {
    // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
    const result = await test()
    return await result
}

async function test() {
  return new Promise (function(resolve) {
    setTimeout(function() {
      resolve('test')
    }, 3000);
  }).then(function(value) {
    const test = [
      {id: 1, full_name: '大木 優', first_name: '優', family_name: '大木',affilication: 'TechTrain', is_student: false},
      {id: 2, full_name: '山田 太郎', first_name: '太郎', family_name: '山田',affilication: 'HogeHoge大学', is_student: true}
    ];
    console.log(value);
    return test
  });
}
