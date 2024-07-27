import google.generativeai as genai
import json
from flask import current_app

def generate_questions(topic, num_questions=5):
    genai.configure(api_key=current_app.config['GEMINI_API_KEY'])
    model = genai.GenerativeModel(model_name="gemini-1.5-pro")
    
    prompt = f"Generate {num_questions} quiz questions about {topic} in JSON format. Each question should have 'question', 'options' (an array of 4 choices), and 'correct_answer' fields."
    
    response = model.generate_content(prompt)
    
    try:
        json_content = response.text.strip().split('```json\n')[1].split('\n```')[0]
        questions = json.loads(json_content)
        return questions
    except Exception as e:
        current_app.logger.error(f"Error parsing JSON response: {e}")
        raise