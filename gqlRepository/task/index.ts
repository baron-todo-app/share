/**
 * 基本的なクエリ
 * サーバは、単体テストで利用
 * フロントは、処理で利用
 *
 * あくまで 基本的なクエリの一覧のため 必要に応じてカスタマイズしたGQLを個別に発行することもある
 *
 */

import { FreeWord, Task, GetTask, AddTask, DeleteTask, UpdateTask } from '../../graphql.type';
import gql from 'graphql-tag';

export { getTasksQ, getTaskQ, addTaskQ, deleteTaskQ, updateTaskQ };

const rDefault: Array<keyof Task> = ['id', 'title', 'body'];

function getTasksQ(p: FreeWord, r: Array<keyof Task> = rDefault) {
  return gql`
      query {
          getTasks(FreeWord: {txt: "${p.txt}" }) {
              ${r.join(' ')}
          }
      }
  `;
}

function getTaskQ(p: GetTask, r: Array<keyof Task> = rDefault) {
  return gql`
      query {
          getTask(GetTask: { id: ${p.id} }) {
              ${r.join(' ')}
          }
      }
  `;
}

function addTaskQ(p: AddTask, r: Array<keyof Task> = rDefault) {
  return gql`
      mutation {
          addTask(AddTask: {title: "${p.title}"  body: "${p.body}" })  {
              ${r.join(' ')}
          }
      }
  `;
}

function deleteTaskQ(p: DeleteTask, r: Array<keyof Task> = rDefault) {
  return gql`
      mutation {
        deleteTask(DeleteTask: { id: ${p.id} }) {
            ${r.join(' ')}
        }
      }
  `;
}

function updateTaskQ(p: UpdateTask, r: Array<keyof Task> = rDefault) {
  return gql`
      mutation {
          updateTask(UpdateTask: {id: ${p.id} title: "${p.title}"  body: "${p.body}" })  {
              ${r.join(' ')}
          }
      }
  `;
}
