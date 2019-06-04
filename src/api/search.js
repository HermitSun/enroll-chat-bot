import axios from 'axios';

// 获取用户询问的问题的回答
export const getAnswer = async (question) => {
  let { data } = await axios.get(
    '/qna',
    {
      params: { q: question }
    }
  );
  return data;
};
