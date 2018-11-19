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
        if ss['compound'] >=0.90:
            return("euphoric")
        elif ss['compound'] >=0.50:
            return("happy")
        elif ss['compound'] >=0.25:
            return("mildlyhappy")
        elif ss['compound'] >=-0.25:
            return("neutral")
        elif ss['compound'] >=-0.50:
            return("mildlyunhappy")
        elif ss['compound'] >=-0.75:
            return("unhappy")
        elif ss['compound'] >=-1:
            return("downrightmiserable")
        break



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
