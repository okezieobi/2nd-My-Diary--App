import diaryList from '../models/diaryModel';

class DiaryController {
  static status(req, res) {
    res.status(200).json({
      message: 'App is live',
    });
  }
}

export default DiaryController;
