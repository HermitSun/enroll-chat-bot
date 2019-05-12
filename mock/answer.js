const router = require('koa-router')();

router.get('/answer', async (ctx) => {
  let res = {
    success: true,
    answer: ''
  };
  if (ctx.query.question === '测试') {
    res.answer = '测试';
  } else if (ctx.query.question === '吃什么呀同学') {
    res.answer = '一块钱米饭';
  } else if (ctx.query.question === 'zznb') {
    res.answer = 'gkdgkd';
  } else {
    res.success = false;
    res.answer = '找不到对应的答案……要不要问问人工客服？';
  }
  ctx.body = res;
});

module.exports = router;
