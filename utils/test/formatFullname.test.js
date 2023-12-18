const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "content" arg is not a string', () => {
    expect(formatFullname(undefined, 20)).to.equal('Error');
    expect(formatFullname(12, 20)).to.equal('Error');
    expect(formatFullname({}, 20)).to.equal('Error');
    expect(formatFullname([], 20)).to.equal('Error');
    expect(formatFullname(function() {}, 20)).to.equal('Error')
  });

    it('should return Error for invalid format input', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });

    it('should return formatted full name', () => {

        expect(formatFullname('JoHN Doe')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('JOHN doE')).to.equal('John Doe');
        expect(formatFullname('amanda DOE')).to.equal('Amanda Doe');
        expect(formatFullname('AMANDA DOE')).to.equal('Amanda Doe');
        expect(formatFullname('AmandA DoE')).to.equal('Amanda Doe');
    });



});