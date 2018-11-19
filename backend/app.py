from flask import Flask, request, jsonify
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer 
nltk.download('vader_lexicon')
sid = SentimentIntensityAnalyzer()

app = Flask(__name__)

@app.route('/', methods = ['POST'])
def index():
    nlInput = request.form["entry"]
    ss = sid.polarity_scores(nlInput)
    for compound, v in dict.items(ss):
        if ss['compound'] >=0.75:
            return jsonify('Feeling amazing',6)
        elif ss['compound'] >=0.50:
            return jsonify('Feeling very happy',5)
        elif ss['compound'] >=0.25:
            return jsonify('Feeling good',4)
        elif ss['compound'] >=-0.25:
            return jsonify('feeling nothing',3)
        elif ss['compound'] >=-0.50:
            return jsonify('Feeling sad',2)
        elif ss['compound'] >=-0.75:
            return jsonify('Feeling very sad', 1)
        elif ss['compound'] >=-1:
            return jsonify('Feeling very sad', 0) 
        break
   


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
