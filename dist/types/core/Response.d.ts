import * as JWT from './JWT';
import { Identity } from './Identity';
import { Crypto } from "./Crypto";
import * as ErrorResponse from './ErrorResponse';
import { Storage } from "./Storage";
export interface CheckParams {
    redirect_uri: string;
    nonce?: string;
    validBefore?: number;
    isExpirable?: boolean;
}
/**
 * @classdesc This class contains static methods related to DID SIOP response generation and validation
 */
export declare class DidSiopResponse {
    /**
     * @param {any} decodedRequest - Decoded request JWT. Some information from this object is needed in constructing the response
     * @param {JWT.SigningInfo} signingInfo - Key information used to sign the response JWT
     * @param {Identity} didSiopUser - Used to retrieve the information about the provider (user DID) which are included in the response
     * @param {number} [expiresIn = 1000] - Amount of time under which generated id_token (response) is valid. The party which validate the
     * response can either consider this value or ignore it
     * @param {Crypto} crypto - Used to generate and decrypt authorization codes
     * @param {string} request - DID SIOP request containing the request payload
     * @returns {Promise<string>} - A promise which resolves to a response depending on the request type (example responses -
     * {"response_type":"code", "code":"auth_code"}
     * {"response_type":"id_token", "id_token":"token"}
     * {"response_type":"id_token", "id_token":"token", "refresh_token":"token"}
     * )
     * @remarks This method first checks the flow type of the request. if its authorization code then it generates or validates the auth code if given.
     * then if the auth code is valid or flow type is grant, it works as follows.
     * if given SigningInfo is compatible with the algorithm required by the RP in 'requestPayload.registration.id_token_signed_response_alg' field.
     * Then it proceeds to extract provider's (user) public key from 'didSiopUser' param using 'kid' field in 'signingInfo' param.
     * Finally it will create the response JWT (id_token) with relevant information, sign it using 'signingInfo' and return it.
     * https://identity.foundation/did-siop/#generate-siop-response
     */
    static generateResponse(decodedRequest: any, signingInfo: JWT.SigningInfo, didSiopUser: Identity, expiresIn: number | undefined, crypto: Crypto, request: string, storage: Storage): Promise<string>;
    /**
     *
     * @param {string} response - A DID SIOP response which needs to be validated
     * @param {CheckParams} checkParams - Specific field values in the JWT which needs to be validated
     * @returns {Promise<JWT.JWTObject | ErrorResponse.SIOPErrorResponse>} - A promise wich will resolve either to a decoded id_token (JWT)
     * or an error response
     * @remarks This method first decodes the response JWT.
     * Then checks if it is an error response and if so, returns it.
     * Else it will proceed to validate the JWT (id_token).
     * Fields in the JWT header and payload will be checked for availability.
     * Then the id_token will be validated against 'checkParams'.
     * Then the signature of the id_token is verified using public key information derived from
     * the 'kid' field in the header and 'did' field in the payload.
     * If the verification is successful, this method returns the decoded id_token (JWT).
     * https://identity.foundation/did-siop/#siop-response-validation
     */
    static validateResponse(response: string, checkParams: CheckParams): Promise<JWT.JWTObject | ErrorResponse.SIOPErrorResponse>;
    /**
     *
     * @param {any} requestPayload - A decoded payload of validated request
     * @param {Crypto} crypto - Used to generate authorization code
     * @returns {Promise<string>} - A promise wich will resolve either to a authorization code
     * or an error response
     * @remarks This method generates authorization code for authentication flow.
     * First it hashes the SIOP request
     * Then an object with fields iat, exp and request is created(hashed request is used as the request);
     * Encrypt the object by a key generated by private key of provider to obtain the authentication code.
     *
     */
    static generateAuthorizationCode(requestPayload: any, crypto: Crypto): Promise<string>;
    /**
     *
     * @param {string} request - DID SIOP request of grant type authorization_code
     * @param {any} requestPayload - A decoded payload of above request
     * @param {Crypto} crypto - Used to generate authorization code
     * @param {Storage} storage - Used to store and check if authorization code is already used
     * @returns {Promise<string>} - A promise which will resolve either to a True statement
     * or an error response
     *
     */
    static validateAuthorizationCode(request: string, requestPayload: any, crypto: Crypto, storage: Storage): Promise<string>;
    /**
     *
     * @param {string} id_token - id_token generated by the same provider
     * @param {Crypto} crypto - Used to generate authorization code
     * @returns {Promise<string>} - A promise which will resolve either to a refresh token
     * or an error response
     * @remarks This method generates refresh token for authentication flow.
     *
     */
    static generateRefreshToken(id_token: any, crypto: Crypto): Promise<string>;
    /**
     *
     * @param {string} id_token - id_token generated by the same provider
     * @param {string} refresh_token - refresh_token generated by the same provider
     * @param {Crypto} crypto - Used to generate authorization code
     * @returns {Promise<string>} - A promise which will resolve either to true statement
     * or an error response
     * @remarks This method validates refresh_token and id_token.
     *
     */
    static validateRefreshToken(id_token: any, refresh_token: any, crypto: Crypto): Promise<string>;
}
