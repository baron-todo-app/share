type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddTask = {
  /** Task のタイトル, 概要 */
  title: Scalars['String'];
  /** Task 補足やメモ */
  body?: Maybe<Scalars['String']>;
};

export type DeleteTask = {
  /** ***対象id*** */
  id: Scalars['Int'];
};

/** 返却値の`String`が対象 高付加 & レスポンスが遅いので利用は計画的に!! */
export type FreeWord = {
  /** `xxx like %txt%` になる  `txt: ""` で全件取得 */
  txt: Scalars['String'];
};

export type GetTask = {
  /** ***対象id*** */
  id: Scalars['Int'];
};

export type Mutation = {
  /** タククを1件追加 */
  addTask: Task;
  /** タスクを1件更新 */
  updateTask: Task;
  /** タスクを1件論理削除 */
  deleteTask: Task;
};

export type MutationAddTaskArgs = {
  AddTask: AddTask;
};

export type MutationUpdateTaskArgs = {
  UpdateTask: UpdateTask;
};

export type MutationDeleteTaskArgs = {
  DeleteTask: DeleteTask;
};

export type Query = {
  /** タスクの取得 */
  getTask: Task;
  /** 複数タスクの取得 */
  getTasks: Array<Task>;
};

export type QueryGetTaskArgs = {
  GetTask: GetTask;
};

export type QueryGetTasksArgs = {
  FreeWord: FreeWord;
};

/** Task の詳細情報 */
export type Task = {
  id: Scalars['Int'];
  /** Task のタイトル, 概要 */
  title: Scalars['String'];
  /** Task 補足やメモ */
  body: Scalars['String'];
};

export type UpdateTask = {
  /** ***対象id*** */
  id: Scalars['Int'];
  /** Task のタイトル, 概要 */
  title: Scalars['String'];
  /** Task 補足やメモ */
  body?: Maybe<Scalars['String']>;
};

import { GraphQLResolveInfo } from 'graphql';

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export type MutationResolvers<Context = any, ParentType = Mutation> = {
  addTask?: Resolver<Task, ParentType, Context, MutationAddTaskArgs>;
  updateTask?: Resolver<Task, ParentType, Context, MutationUpdateTaskArgs>;
  deleteTask?: Resolver<Task, ParentType, Context, MutationDeleteTaskArgs>;
};

export type QueryResolvers<Context = any, ParentType = Query> = {
  getTask?: Resolver<Task, ParentType, Context, QueryGetTaskArgs>;
  getTasks?: Resolver<Array<Task>, ParentType, Context, QueryGetTasksArgs>;
};

export type TaskResolvers<Context = any, ParentType = Task> = {
  id?: Resolver<Scalars['Int'], ParentType, Context>;
  title?: Resolver<Scalars['String'], ParentType, Context>;
  body?: Resolver<Scalars['String'], ParentType, Context>;
};

export type Resolvers<Context = any> = {
  Mutation?: MutationResolvers<Context>;
  Query?: QueryResolvers<Context>;
  Task?: TaskResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>;
