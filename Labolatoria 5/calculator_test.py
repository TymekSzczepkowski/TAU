import pytest
from calculator import adding,subtraction,multiplication,division

addingParams = [(1,2,3), (1,1,2), (2,6,8)]
addingParams2 = [(0,1,1), (20,71,91), (100,9,109)]

subtractionParams = [(5,5,0),(8,2,6),(9,3,6)]
subtractionParams2 = [(4,2,3),(6,3,4),(8,4,5)]

multiplicationParams = [(2,2,4),(5,2,10),(1,3,3)]
multiplicationParams2 = [(3,5,15),(7,2,14),(4,4,16)]

divisionParams = [(2,2,1),(6,2,3),(3,3,1)]
divisionParams2 = [(15,5,3),(8,2,4),(20,4,5)]

@classmethod
def setup_class(cls):
        print('\n-Start of addition tests')

@classmethod
def teardown_class(cls):
        print('\n-End of addition test')

class AddingTest:
    @pytest.mark.parametrize("x, y, z",addingParams)
    def test_AddingTestEqual(x, y, z):
        assert adding(x,y) == z
        
    @pytest.mark.parametrize("x, y, z",addingParams2)
    def test_AddingTestNotEqual(x, y, z):
        assert adding(x,y) != z

@classmethod
def setup_class(cls):
        print('\n-Start of subtraction tests')

@classmethod
def teardown_class(cls):
        print('\n-End of subtraction tests')

class SubtractionTest:
    @pytest.mark.parametrize("x, y, z",subtractionParams)
    def test_SubtractionTestEqual(x, y, z):
        assert subtraction(x,y) == z
        
    @pytest.mark.parametrize("x, y, z",subtractionParams2)
    def test_SubtractionTestNotEqual(x, y, z):
        assert subtraction(x,y) != z

@classmethod
def setup_class(cls):
        print('\n-Start of multiplication tests')

@classmethod
def teardown_class(cls):
        print('\n-End of multiplication tests')

class MultiplicationTest:
    @pytest.mark.parametrize("x, y, z",multiplicationParams)
    def test_MultiplicationTestEqual(x, y, z):
        assert multiplication(x,y) == z
        
    @pytest.mark.parametrize("x, y, z",multiplicationParams2)
    def test_MultiplicationTestNotEqual(x, y, z):
        assert multiplication(x,y) != z

@classmethod
def setup_class(cls):
        print('\n-Start of division tests')

@classmethod
def teardown_class(cls):
        print('\n-End of division tests')

class DivisionTest:
    @pytest.mark.parametrize("x, y, z",divisionParams)
    def test_DivisionTestEqual(x, y, z):
        assert division(x,y) == z
        
    @pytest.mark.parametrize("x, y, z",divisionParams2)
    def test_DivisionTestNotEqual(x, y, z):
        assert division(x,y) != z
