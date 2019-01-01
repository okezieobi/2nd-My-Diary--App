import diaryList from '../models/diaryModel';

class DiaryController {
  static status(req, res) {
    res.status(200).json({
      message: 'App is live',
    });
  }

  static getAll(req, res) {
    res.status(200).json({
      diaryList,
      message: 'Diary entries successfully retrieved',
    });
  }
}

export default DiaryController;
