/**
 * Created by admin on 7/30/17.
 */
{
    this.state.questions.map(quest => {
        return (
            <div>
                <p key={quest.id}> {quest.id}. {quest.question} </p>
                <ul>
                    <RadioGroup style={answ}
                                name="answers"
                                selectedValue={this.state.selectedValue}
                                onChange={this.handleChange}>
                        <li>
                            <Radio key={quest.surveyAnswers[ 0 ].SurveyQuestionId}
                                   value="1"/>{quest.surveyAnswers[ 0 ].body}
                        </li>
                        <li>
                            <Radio key={quest.surveyAnswers[ 1 ].SurveyQuestionId}
                                   value="2"/>{quest.surveyAnswers[ 1 ].body}
                        </li>
                        <li>
                            <Radio key={quest.surveyAnswers[ 2 ].SurveyQuestionId}
                                   value="3"/>{quest.surveyAnswers[ 2 ].body}
                        </li>
                    </RadioGroup>
                </ul>
            </div>
        );
    })
}