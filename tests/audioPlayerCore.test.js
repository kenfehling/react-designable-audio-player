import * as core from '../src/audioPlayerCore';

test('formats time', () => {
    expect(core.formatTime()).toBe('--:--');
    expect(core.formatTime(undefined)).toBe('--:--');
    expect(core.formatTime(null)).toBe('--:--');
    expect(core.formatTime(0)).toBe('00:00');
    expect(core.formatTime(1)).toBe('00:01');
    expect(core.formatTime(61)).toBe('01:01');
});