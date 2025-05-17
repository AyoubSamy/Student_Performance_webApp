""" from flask import Flask, request, render_template, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('backend/model/finalized_linear_regression_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        features = [float(x) for x in request.form.values()]
        final_features = np.array(features).reshape(1, -6)
        prediction = model.predict(final_features)
        output = round(prediction[0], 2)
        return render_template('index.html', prediction_text=f'Predicted G3 is: {output}')
    except:
        return render_template('index.html', prediction_text='Invalid input. Please enter all the features.')

if __name__ == '__main__':
    app.run(debug=True)
 """
from flask import Flask, request, render_template, jsonify
import joblib
import numpy as np
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/prediction": {"origins": "http://localhost:3000"}})
model = joblib.load('model/linear_regression_model_2.pkl')  


@app.route('/')
def home():
    return render_template('index.html')
@app.route('/prediction', methods=['POST'])
def prediction():
    if request.method == 'POST':
        try:
            data = request.get_json()  # Get JSON data from request
            # Get values from the data object
            values = list(data.values())
            # Check if all required fields are present
            if len(values) == 6:  # Assuming there are 6 fields
                feature_names = ['G1', 'G2', 'Medu', 'Fedu', 'studytime', 'failures']
                features = [float(value) for value in values]  # Convert values to integers
                final_features = np.array(features).reshape(1, -1)
                prediction = model.predict(final_features)
                print(prediction)
                output = round(prediction[0], 2)
                return jsonify({'prediction': output}), 200  # Set status code to 200 for success
            else:
                return jsonify({'error': 'Missing required fields'}), 400  # Set status code to 400 for bad request
        except Exception as e:
            return jsonify({'error': str(e)}), 400  # Set status code to 400 for bad request
    else:
        return jsonify({'message': 'POST request required'}), 405  # Set status code to 405 for method not allowed

    
# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Assuming your model expects features in a specific order
#         feature_names = ['G1', 'G2', 'Medu', 'Fedu',  'studytime', 'failures' ]
#         features = [int(request.form[feature]) for feature in feature_names]
#         final_features = np.array(features).reshape(1, -1)
#         prediction = model.predict(final_features)
#         output = round(prediction[0], 2)
#         return render_template('index.html', prediction_text=f'Predicted G3 is: {output}')
#     except Exception as e:
#         return render_template('index.html', prediction_text=f'Error: {str(e)}')

if __name__ == '__main__':
    app.run(debug=True)
 