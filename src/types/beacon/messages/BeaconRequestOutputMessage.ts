import {
  AppMetadata,
  PermissionRequest,
  OperationRequest,
  SignPayloadRequest,
  EncryptPayloadRequest,
  BroadcastRequest
} from '../../..'

/**
 * @category Wallet
 */
export type IgnoredRequestOutputProperties = 'version'

/**
 * @category Wallet
 */
export interface ExtraResponseOutputProperties {
  appMetadata: AppMetadata
}

/**
 * @category Wallet
 */
export type PermissionRequestOutput = Omit<PermissionRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type OperationRequestOutput = Omit<OperationRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type SignPayloadRequestOutput = Omit<SignPayloadRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type EncryptPayloadRequestOutput = Omit<
  EncryptPayloadRequest,
  IgnoredRequestOutputProperties
> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type BroadcastRequestOutput = Omit<BroadcastRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties

/**
 * @internalapi
 * @category Wallet
 */
export type BeaconRequestOutputMessage =
  | PermissionRequestOutput
  | OperationRequestOutput
  | SignPayloadRequestOutput
  | EncryptPayloadRequestOutput
  | BroadcastRequestOutput
