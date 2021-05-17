class HttpError extends Error{

    constructor(message,errorCode){
        super(message); // add a 'message' property
        this.code= errorCode;// add a "code" perperty

    }
}
module.exports=HttpError