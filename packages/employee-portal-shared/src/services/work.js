
import Api from './api';

export default class Work {
  static async getTasks(offset) {
    const uri = `/v1/work/task/list?offset=${offset}&limit=100`;
    const { error, data } = await Api.fetch(uri, {
      method: 'GET'
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  static async submitTaskReview(taskId, taskType, status) {
    const uri = `/v1/work/task/${status.toLowerCase()}`;
    const { error, data } = await Api.fetch(uri, {
      method: 'POST',
      body: JSON.stringify({ taskId, taskType })
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
