/* eslint-disable */
// tslint:disable
/**
 * MICRO SERVICES CURD OPERATIONS
 * 
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface UserApi {
	createQuestion: (request: Api.BODYDATA | undefined) => Promise<CreateQuestionResponse>
	deleteQuestion: (quesId: number) => Promise<DeleteQuestionResponse>
	getQuestion: () => Promise<GetQuestionResponse>
	updateQuestion: (quesId: number, request: Api.BODYDATA | undefined) => Promise<UpdateQuestionResponse>
}

export type CreateQuestionResponse = CreateQuestion201Response | CreateQuestion400Response

export interface CreateQuestion201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface CreateQuestion400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type DeleteQuestionResponse = DeleteQuestion201Response | DeleteQuestion400Response

export interface DeleteQuestion201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface DeleteQuestion400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetQuestionResponse = GetQuestion201Response | GetQuestion400Response

export interface GetQuestion201Response {
	status: 201
	body: Api.BODYDATA[]
	headers?: never
}

export interface GetQuestion400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type UpdateQuestionResponse = UpdateQuestion201Response | UpdateQuestion400Response

export interface UpdateQuestion201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface UpdateQuestion400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

