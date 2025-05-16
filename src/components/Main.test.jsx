import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './api';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
    test('returns available times from fetchAPI for today', () => {
        const mockTimes = ["17:00", "18:00", "19:00"];
        fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();
        expect(result).toEqual(mockTimes);
    });
});

describe('updateTimes', () => {
    test('returns updated times from fetchAPI based on selected  date', () => {
        const mockTimes = ["18:00", "20:00"];
        const mockDate = new Date('2023-12-25');

        fetchAPI.mockReturnValue(mockTimes);

        const action ={
            type: 'update',
            payload: mockDate,
        };

        const result = updateTimes([], action);
        expect(result).toEqual(mockTimes);
        expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    });
});