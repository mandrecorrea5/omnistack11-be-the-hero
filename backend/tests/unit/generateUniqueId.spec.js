const generateUniqueId = require('../../src/utils/gerenateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate and unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(12)
    })
})