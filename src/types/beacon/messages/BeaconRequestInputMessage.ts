import {
  PermissionRequest,
  OperationRequest,
  SignPayloadRequest,
  EncryptPayloadRequest,
  BroadcastRequest
} from '../../..'

/**
 * @internalapi
 * @category DApp
 */
export type IgnoredRequestInputProperties = 'id' | 'senderId' | 'version'

/**
 * @internalapi
 * @category DApp
 */
export type PermissionRequestInput = Omit<PermissionRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
export type OperationRequestInput = Omit<OperationRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
export type SignPayloadRequestInput = Omit<SignPayloadRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
export type EncryptPayloadRequestInput = Omit<EncryptPayloadRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
export type BroadcastRequestInput = Omit<BroadcastRequest, IgnoredRequestInputProperties>

/**
 * @internalapi
 * @category DApp
 */
export type BeaconRequestInputMessage =
  | PermissionRequestInput
  | OperationRequestInput
  | EncryptPayloadRequestInput
  | SignPayloadRequestInput
  | BroadcastRequestInput
