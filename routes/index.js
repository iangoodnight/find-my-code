const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.get('/:id', async function(req, res, next) {
	function cleanData(Items, Products) {
		let data = {
			...Items,
			...Products
		};
		return {Items, Products};
	};
	try {
		const productCodes = [req.params.id];
		const productData = await axios({
			method: 'post',
			url: 'https://app.skuvault.com/api/products/getProducts',
			data: {
				'ModifiedAfterDateTimeUtc': '0000-00-00T00:00:00.0000000Z',
  				'ModifiedBeforeDateTimeUtc': '0000-00-00T00:00:00.0000000Z',
  				'ProductCodes': productCodes,
  				'PageNumber': 0,
  				'PageSize': 20000,
  				'ProductSKUs': [],
  				'TenantToken': process.env.SKUVAULT_API_TENANT_TOKEN,
  				'UserToken': process.env.SKUVAULT_API_USER_TOKEN
			}
		});
		const locationData = await axios({
			method: 'post',
			url: 'https://app.skuvault.com/api/inventory/getInventoryByLocation',
			data: {
				'IsReturnByCodes': true,
				'PageNumber': 0,
				'PageSize': null,
				'ProductCodes': productCodes,
				'ProductSkus': [],
  				'TenantToken': process.env.SKUVAULT_API_TENANT_TOKEN,
  				'UserToken': process.env.SKUVAULT_API_USER_TOKEN			
			}
		});
		const data = cleanData(locationData.data.Items[productCodes[0]], productData.data.Products);
  		res.render('index', { 
  			title: 'FindMySku',
  			data: data 
  		});
	} catch (error) {
		res.render('index', {
			title: 'FindMySku',
			error: error.message
		})
	}
});

router.get('/s/:sku', async function(req, res, next) {
	console.log("Hitting sku route...");
	function cleanData(Items, Products) {
		let data = {
			...Items,
			...Products
		};
		return {Items, Products};
	};
	try {
		const productSkus = [req.params.sku];
		console.log(`Skus: ${productSkus}`);
		const productData = await axios({
			method: 'post',
			url: 'https://app.skuvault.com/api/products/getProducts',
			data: {
				'ModifiedAfterDateTimeUtc': '0000-00-00T00:00:00.0000000Z',
  				'ModifiedBeforeDateTimeUtc': '0000-00-00T00:00:00.0000000Z',
  				'ProductCodes': [],
  				'PageNumber': 0,
  				'PageSize': 20000,
  				'ProductSKUs': productSkus,
  				'TenantToken': process.env.SKUVAULT_API_TENANT_TOKEN,
  				'UserToken': process.env.SKUVAULT_API_USER_TOKEN
			}
		});
		const locationData = await axios({
			method: 'post',
			url: 'https://app.skuvault.com/api/inventory/getInventoryByLocation',
			data: {
				'IsReturnByCodes': false,
				'PageNumber': 0,
				'PageSize': null,
				'ProductCodes': [],
				'ProductSkus': productSkus,
  				'TenantToken': process.env.SKUVAULT_API_TENANT_TOKEN,
  				'UserToken': process.env.SKUVAULT_API_USER_TOKEN			
			}
		});
		const data = cleanData(locationData.data.Items[productSkus[0]], productData.data.Products);
  		res.render('index', { 
  			title: 'FindMySku',
  			data: data 
  		});
	} catch (error) {
		res.render('index', {
			title: 'FindMySku',
			error: error.message
		})
	}
});

module.exports = router;
