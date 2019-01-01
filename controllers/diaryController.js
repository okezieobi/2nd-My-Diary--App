/* eslint-disable quotes */
import diaryList from '../models/diaryModel';

class DiaryController {
  static status(req, res) {
    res.status(200).json({
      message: 'App is live!',
    });
  }

  static getAll(req, res) {
    res.status(200).json({
      diaryList,
      message: 'Diary entries successfully retrieved',
    });
  }

  static createOne(req, res) {
    if (!req.body.title) {
      res.status(400).json({
        message: "Title is required",
      });
    } else if (!req.body.description) {
      res.status(400).json({
        message: "Description is required",
      });
    } else {
      const diaryEntry = {
        id: diaryList.length,
        title: req.body.title,
        description: req.body.description,
      };
      diaryList.push(diaryEntry);
      res.status(201).json({
        message: "Diary Entry successfully created",
        diaryEntry,
      });
    }
  }
}

export default DiaryController;
