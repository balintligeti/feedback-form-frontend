import { v4 as uuid } from 'uuid';


export class UserFeedback {
    challenge_id = uuid();
    data: {
        user_effort: {
            feedback: string;
            score: number
        },
        educational_value: {
            feedback: string;
            score: number
        },
        url: string;
        is_support: boolean
    }
  }
