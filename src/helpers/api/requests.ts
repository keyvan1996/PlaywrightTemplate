import { APIRequestContext, APIResponse } from '@playwright/test';
import logger from '@utils/logger';

/**
 * Makes a GET request to the specified URL.
 *
 * @param {APIRequestContext} request - The Playwright request object.
 * @param {string} url - The URL to make the request to.
 * @param {object} [options] - Optional request options.
 * @return {Promise<object>} A promise that resolves with the response JSON.
 */
export async function getRequest(request: APIRequestContext, url: string, options: Record<string, unknown> = {}): Promise<unknown> {
  try {
    logger.info(`method: [${getRequest.name}] - making GET request to ${url}`);
    const response: APIResponse = await request.get(url, options);
    if (response.status() >= 400) {
      throw new Error(`Request failed with status code ${response.status()}`);
    }
    logger.info(`method: [${getRequest.name}] - request successful`);
    return await response.json();
  } catch (error) {
    logger.error(`method: [${getRequest.name}] - error making GET request to ${url}: ${(error as Error).message}`);
    throw error;
  }
}

/**
 * Makes a POST request to the specified URL.
 *
 * @param {APIRequestContext} request - The Playwright request object.
 * @param {string} url - The URL to make the request to.
 * @param {object} data - The request body data.
 * @param {object} [options] - Optional request options.
 * @return {Promise<unknown>} A promise that resolves with the response JSON.
 */
export async function postRequest(request: APIRequestContext, url: string, data: Record<string, unknown>, options: Record<string, unknown> = {}): Promise<unknown> {
  try {
    logger.info(`method: [${postRequest.name}] - making POST request to ${url}`);
    const response: APIResponse = await request.post(url, {
      ...options,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
      },
    });
    if (response.status() >= 400) {
      throw new Error(`Request failed with status code ${response.status()}`);
    }
    logger.info(`method: [${postRequest.name}] - request successful`);
    return await response.json();
  } catch (error) {
    logger.error(`method: [${postRequest.name}] - error making POST request to ${url}: ${(error as Error).message}`);
    throw error;
  }
}

/**
 * Makes a PUT request to the specified URL.
 *
 * @param {APIRequestContext} request - The Playwright request object.
 * @param {string} url - The URL to make the request to.
 * @param {object} data - The request body data.
 * @param {object} [options] - Optional request options.
 * @return {Promise<unknown>} A promise that resolves with the response JSON.
 */
export async function putRequest(request: APIRequestContext, url: string, data: Record<string, unknown>, options: Record<string, unknown> = {}): Promise<unknown> {
  try {
    logger.info(`method: [${putRequest.name}] - making PUT request to ${url}`);
    const response: APIResponse = await request.put(url, {
      ...options,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
      },
    });
    if (response.status() >= 400) {
      throw new Error(`Request failed with status code ${response.status()}`);
    }
    logger.info(`method: [${putRequest.name}] - request successful`);
    return await response.json();
  } catch (error) {
    logger.error(`method: [${putRequest.name}] - error making PUT request to ${url}: ${(error as Error).message}`);
    throw error;
  }
}

/**
 * Makes a DELETE request to the specified URL.
 *
 * @param {APIRequestContext} request - The Playwright request object.
 * @param {string} url - The URL to make the request to.
 * @param {object} [options] - Optional request options.
 * @return {Promise<unknown>} A promise that resolves with the response JSON.
 */
export async function deleteRequest(request: APIRequestContext, url: string, options: Record<string, unknown> = {}): Promise<unknown> {
  try {
    logger.info(`method: [${deleteRequest.name}] - making DELETE request to ${url}`);
    const response: APIResponse = await request.delete(url, options);
    if (response.status() >= 400) {
      throw new Error(`Request failed with status code ${response.status()}`);
    }
    logger.info(`method: [${deleteRequest.name}] - request successful`);
    return await response.json();
  } catch (error) {
    logger.error(`method: [${deleteRequest.name}] - error making DELETE request to ${url}: ${(error as Error).message}`);
    throw error;
  }
}
