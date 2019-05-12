const router = require('koa-router')();

router.get('/answer', async (ctx) => {
  let answer = '找不到对应的答案……要不要问问人工客服？';
  if (ctx.query.question === '测试') {
    answer = '测试';
  } else if (ctx.query.question === '吃什么呀同学') {
    answer = '一块钱米饭';
  } else if (ctx.query.question === 'zznb') {
    answer = 'gkdgkd';
  }
  ctx.body = answer;
});

module.exports = router;
