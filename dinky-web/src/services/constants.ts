/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import {l} from "@/utils/intl";

/**
 * the  interface api constants
 */
export const API_CONSTANTS = {
  // --- user ---
  // login path
  LOGIN_PATH: "/user/login",
  // user login
  LOGIN: "/api/login",
  // current user info
  CURRENT_USER: "/api/current",
  // logout
  LOGOUT: "/api/outLogin",
  // choose tenant
  CHOOSE_TENANT: "/api/chooseTenant",
  // user list
  USER: "/api/user",
  // enable user
  USER_ENABLE: "/api/user/enable",
  // delete user
  USER_DELETE: "/api/user/delete",
  // user change password
  USER_MODIFY_PASSWORD: "/api/user/modifyPassword",
  // GRANT USER TO role
  USER_ASSIGN_ROLE: "/api/user/assignRole",
  // QUERY roles by userid
  GET_ROLES_BY_USERID: "/api/role/getRolesAndIdsByUserId",

  // --- tenant ---
  // tenant list
  TENANT: "/api/tenant",
  // assign user to tenant
  ASSIGN_USER_TO_TENANT: "/api/tenant/assignUserToTenant",
  // delete tenant
  TENANT_DELETE: "/api/tenant/delete",
  // get user list by tenantId
  GET_USER_LIST_BY_TENANTID: "/api/user/getUserListByTenantId",

  // --- role ---
  // role list
  ROLE: "/api/role",
  ROLE_ADDED_OR_UPDATE: "/api/role/addedOrUpdateRole",
  ROLE_DELETE: "/api/role/delete",

  // --- global variable ---
  // global variable list
  GLOBAL_VARIABLE: "/api/fragment",
  // delete global variable  by id
  GLOBAL_VARIABLE_DELETE: "/api/fragment/delete",
  // global variable enable or disable
  GLOBAL_VARIABLE_ENABLE: "/api/fragment/enable",


  // --- registries  center ---
  // document list
  DOCUMENT: "/api/document",
  // delete document by id
  DOCUMENT_DELETE: "/api/document/delete",
  // document enable or disable
  DOCUMENT_ENABLE: "/api/document/enable",

};


/**
 * user tenant id
 */
export const TENANT_ID = "tenantId";

/**
 * the platform version
 */
export const VERSION = "0.8.0";

/**
 * REQUEST METHOD CONSTANTS
 */
export const METHOD_CONSTANTS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};


/**
 * ALL TABLE COLUMN of status
 * @constructor
 */
export const STATUS_MAPPING = () => {
  return [
    {
      text: l("status.enabled"),
      value: 1,
    },
    {
      text: l("status.disabled"),
      value: 0,
    },
  ];

};

/**
 * ALL TABLE COLUMN of status enum
 * @constructor
 */
export const STATUS_ENUM = () => {
  return {
    true: {text: l("status.enabled"), status: "Success"},
    false: {text: l("status.disabled"), status: "Error"},
  };
};


export const RESPONSE_CODE = {
  SUCCESS: 0,
  ERROR: 1,
};


/**
 * the form layout of public
 */
export const FORM_LAYOUT_PUBLIC = {
  labelCol: {span: 5},
  wrapperCol: {span: 15},
};

/**
 * the protable layout of public
 */
export const PROTABLE_OPTIONS_PUBLIC = {
  pagination: {
    defaultPageSize: 8,
    hideOnSinglePage: true,
  },
  tableStyle: {height: "58vh"},
  rowKey: "id",
  search: {
    labelWidth: 120, // must be number
    span: 4,
  },
};

/**
 * the modal layout of public
 */
export const NORMAL_MODAL_OPTIONS = {
  width: "40%",
  bodyStyle: {padding: "20px 10px 10px"},
  destroyOnClose: true,
};

/**
 * the modal layout of public
 */
export const NORMAL_TABLE_OPTIONS = {
  pagination: {
    defaultPageSize: 6,
    hideOnSinglePage: true,
  },
  rowKey: "id",
};

export const SCROLLBAR_OPTIONS = {
  style: {
    height: '520px',
    width: '100%',
  }
};
