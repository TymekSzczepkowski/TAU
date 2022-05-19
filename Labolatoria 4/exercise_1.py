import math

def calculate_reliability_lambda(reliability_rate, time):
    reliability_rate = reliability_rate/100
    lambda_rate = 1/time * -1 * math.log(reliability_rate)
    return lambda_rate

def calculate_reliability_for_time(lambda_rate, time):
    return math.pow(math.e, lambda_rate * -1 * time)

def exercise_one(time, reliability_rate, time_target):
    lambda_rate = calculate_reliability_lambda(reliability_rate, time)
    reliability_for_time = calculate_reliability_for_time(lambda_rate, time_target)
    return f"Below are your values:\nResult: {reliability_for_time}"

def exercise_two(failure_rate, quantity, days):
    # Hourly failure rate used to calculate annual failure rate
    # This should be discussed as I'm not sure whether I understood the assignment
    reliability = calculate_reliability_for_time(failure_rate, days)
    return f'Exc. 2 Approx. {quantity-(quantity*reliability)} devices will fail'

def exercise_three(initial_time_without_failure, target_time):
    reliability = math.exp(-initial_time_without_failure/(target_time * 24))
    return f"Exc. 3 Probability: {reliability}"

def exercise_four(expected_reliability, time):
    failure_rate = calculate_reliability_lambda(expected_reliability, time)
    return f'Exc. 4 Maximum failure rate is: {failure_rate}, MTBF is: {1/failure_rate}'

def exercise_five(failure_rate, expected_return_rate):
    # This might be bad math
    days_for_expected_rate = math.log(1-(expected_return_rate/100))/-failure_rate
    return f'Exc. 5 {days_for_expected_rate*365}'


def main():
    time = int(
            input(
                "Provide time for which reliability was calculated (In hours): "
                )
            )
    reliability_rate = int(input("Provide reliability rate for given time: "))
    time_target = int(
            input(
                "Provide time for which you want to calculate reliability (In hours): "
                )
            )
    exercise_one(time, reliability_rate, time_target)
    exercise_two(0.5*10**-7, 5000, 8766)
    exercise_two(2.5*10**-7, 5000, 8766)
    exercise_three(100, 300)
    exercise_four(95, 500)
    exercise_five(0.4, 5)

if __name__ == "__main__":
    main()
