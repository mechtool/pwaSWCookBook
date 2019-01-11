const functions = require('firebase-functions');

exports.cacheStrategy = functions.https.onRequest((request, response) => {
	
	(function serveImage(res, timeout = 10000) {
		let now = Date.now();
		if (now - exports.cacheStrategy.context.lastUpdate > timeout) {
			exports.cacheStrategy.context.imageNumber = (exports.cacheStrategy.context.imageNumber + 1) % exports.cacheStrategy.context.MAX_IMAGES;
			exports.cacheStrategy.context.lastUpdate = Date.now();
		}
		sendPicture(exports.cacheStrategy.context.imageNumber , response);
	})(response, request.query.timeout)
 });
exports.cacheStrategy.context = {
	lastUpdate : -Infinity,
	MAX_IMAGES : 50,
	imageNumber : 0
};

exports.immediateClaim = functions.https.onRequest((req, res)=>{
	
	if (req.url.includes('/image')){
		exports.immediateClaim.context.imageNumber = (exports.immediateClaim.context.imageNumber + 1) % exports.immediateClaim.context.MAX_IMAGES;
		sendPicture(exports.immediateClaim.context.imageNumber, res);
	}
	else if(req.url.includes('/version')){
		res.status(200).send(exports.immediateClaim.context.version);
	}
});
exports.immediateClaim.context = {
	MAX_IMAGES : 50,
	imageNumber : 0,
};

function sendPicture(number, res) {
	let imageName = './random/picture-' + (number + 1) + '.png';
	res.status(200).set({'Content-Type':'image'}).sendFile(imageName, {root : '.'});
}
