from exercise_1 import calculate_reliability_lambda, calculate_reliability_for_time, exercise_one, exercise_two, exercise_three, exercise_four, exercise_five

def test_reliability_lambda():
    assert calculate_reliability_lambda(59, 100) == 0.0052763274208237195

def test_reliability_lambda_invalid_values():
    assert calculate_reliability_lambda(100, 0.5*10**-7) == -0.0

def test_reliability_for_time():
    assert calculate_reliability_for_time(0.005, 100) == 0.6065306597126334

def test_reliability_for_time_invalid_values():
    assert calculate_reliability_for_time(0, 0) == 1.0

def test_exercise_one():
    assert exercise_one(100, 95, 200) == "Below are your values:\nResult: 0.9025"

def test_exercise_two_first_part():
    assert exercise_two(0.5*10**-7, 5000, 8766) == 'Exc. 2 Approx. 2.191019802934534 devices will fail'

def test_exercise_two_second_part():
    assert exercise_two(2.5*10**-7, 5000, 8766) == 'Exc. 2 Approx. 10.945502085452063 devices will fail'

def test_exercise_three():
    assert exercise_three(100, 300) == 'Exc. 3 Probability: 0.9862071167439163'

def test_exercise_four():
    assert exercise_four(95, 500) == 'Exc. 4 Maximum failure rate is: 0.00010258658877510115, MTBF is: 9747.862873111837'

def test_exercise_five():
    assert exercise_five(0.4, 5) == 'Exc. 5 46.80513112863989'
