import axios from 'axios';

// TODO:对接口
// 获取用户询问的问题的回答
export const getAnswer = async (question) => {
  let { data } = await axios.get(
    '/answer',
    {
      params: { question }
    }
  );
  return data;
};
