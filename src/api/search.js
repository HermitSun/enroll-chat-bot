import axios from 'axios';

// TODO:对接口
// 获取用户询问的问题的回答
export const getAnswer = (question) => {
  return axios.get(
    '/answer',
    {
      params: { question }
    }
  );
};
