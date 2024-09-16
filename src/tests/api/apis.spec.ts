import { getApiBaseUrl } from '@env/env';
import { expect, test } from '@playwright/test';
import { deleteRequest, getRequest, postRequest, putRequest } from 'src/helpers/api/requests';

test('validate user can get todos', async ({ request }) => {
  const res = await getRequest(request, `${getApiBaseUrl()}/todos`);
  expect(res).toBeTruthy();
});

test('validate user can add todo', async ({ request }) => {
  const res = await postRequest(request, `${getApiBaseUrl()}/todos/add`, {
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
  });
  expect(res).toBeTruthy();
});

test('validate user can update todo', async ({ request }) => {
  const res = await putRequest(request, `${getApiBaseUrl()}/todos/1`, {
    completed: true,
  });
  expect(res).toBeTruthy();
});

test('validate user can delete todo', async ({ request }) => {
  const res = await deleteRequest(request, `${getApiBaseUrl()}/todos/1`);
  expect(res).toBeTruthy();
});
