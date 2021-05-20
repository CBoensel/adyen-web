class AdyenCheckoutError extends Error {
    protected static errorTypes = {
        SUBMIT_PAYMENT: 'SUBMIT_PAYMENT',

        /** Network error. */
        NETWORK_ERROR: 'NETWORK_ERROR',

        /** Shopper canceled the current transaction. */
        CANCEL: 'CANCEL',

        /** Implementation error. The method or parameter are incorrect or are not supported. */
        DEVELOPER_ERROR: 'DEVELOPER_ERROR',

        /** Generic error. */
        ERROR: 'ERROR'
    };

    constructor(type: keyof typeof AdyenCheckoutError.errorTypes, message?: string) {
        super(message);

        this.name = (this.constructor as typeof AdyenCheckoutError).errorTypes[type];
    }
}

export default AdyenCheckoutError;
