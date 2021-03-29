import { v4 as uuid } from 'uuid';


export class UserFeedback {
    challenge_id = uuid();
    data : {
        user_effort: {
            feedback: string | null,
            score: number | null
        },
        educational_value: {
            feedback: string | null,
            score: number | null
        },
        url: string,
        is_support: boolean
    }

    constructor() {
        this.data = {
            user_effort : {
                feedback : "User didn't answered.",
                score : -1
            },
            educational_value : {
                feedback : "User didn't answered.",
                score : -1
            },
            url: "http://localhost:4200/",
            is_support : true
        }

    }
  }
