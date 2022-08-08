class BaseService {
	constructor(schema) {
		this.Schema = schema
	}

	create(data) {
		const model = new this.Schema(data)
		return model
			.save(model)
			.then(result => result)
			.catch(e => console.log(e))
	}

	findByEmail(email) {
		return this.Schema.findOne({email})
	}

	findAll() {
		return this.Schema.findAll()
	}

	update(data, updateData) {
		return this.Schema.updateOne(data, updateData)
	}

	deleteOne(data) {
		return this.Schema.deleteOne({data})
	}
}

module.exports = {BaseService}
