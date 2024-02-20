import { summ } from "../sum"


test('should first', () => {
     const results = summ(3, 5)
     expect(results).toBe(15)
})