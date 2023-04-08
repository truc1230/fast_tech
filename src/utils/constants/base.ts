export enum THEMES {
  GRADIENT = 'Gradient',
  STEEL = 'STEEL',
  WOOD = 'WOOD',
  WATER = 'WATER',
  EARTH = 'EARTH'
}
export enum AUTH {
  success = 'Login successfully',
  failed = 'Login failed'
}
export enum RELATION {
  parent,
  children,
  sibling
}
export enum ACTION {
  CLEAR_FILTER = 'Clear Filter',
  DELETE_CONFIRM = 'Are you sure you want to delete',
  VIEW = 'View',
  SUBMIT = 'Submit',
  UPDATE = 'Update',
  ADD_NEW = 'Add New',
  ADD_NEW_ITEM = 'Add New Item',
  SETTING_LEVELS = 'Management Levels',
  CHECKED_ACTIONS = 'Checked Actions',
  ACTION_SUCCESSFULLY = 'Action successfully',
  ACTION_FAILED = 'Action failed',
  SURE_QUESTION = 'Are you sure to do action?',
  SAVE = 'Save',
  CREATE = 'Create',
  SAVE_AND_ADD_NEW = 'Save & Add New',
  CLOSE = 'Close',
  CANCEL = 'Cancel',
  CONTINUE = 'Continue',
  CLEAR = 'Clear',
  APPLY = 'Apply',
  CREATE_LEVEL = 'Create Level',
  ADD_NEW_LEVEL = 'Add New Level',
  ADD_COLUMN = 'Add Column',
  ADD_ROW = 'Add Row',
  NEXT = 'Next',
  BACK = 'Back',
  CREATE_TEMPLATE = 'Create Template',
  EDIT_TEMPLATE = 'Edit Template',
  SELECT_TEMPLATE = 'Select Template',
  SAVE_TO_TEMPLATE = 'Save to Template',
  ADD_CHECKLIST_ITEM = 'Add checklist item',
  ADD_NEW_FIELD = 'Add new field',
  DELETE = 'Delete',
  EDIT = 'Edit',
  DELETE_EVENT = 'Are you sure to delete these events?',
  ACTIVITY_LOGS = 'Activity Logs',
  CREATE_NEW_TEMPLATE = 'Create New Template',
  ATTACH_PLAN = 'Attach Plan',
  ADD_FORMULA = 'Add Formula',
  FIND_MATERIAL = 'Find material',
  ADD_NEW_LINK = 'Add New Link',
  CLEAR_ALL = 'Clear All',
  FILTER_SAVE_SUCCESS = 'Save filter successfully',
  FILTER_SAVE_FAIL = 'Failed to save filter',
  DELETE_FILTER_SUCCESS = 'Delete filter successfully',
  DELETE_FILTER_FAIL = 'Failed to delete filter'
}
export enum STATUS {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
  CREATE_SUCCESSFULLY = 'Create successfully',
  CREATE_FAILED = 'Create failed',
  UPDATE_SUCCESSFULLY = 'Update successfully',
  UPDATE_FAILED = 'Update failed',
  DELETE_SUCCESSFULLY = 'Delete successfully',
  DELETE_FAILED = 'Delete failed'
}
export enum CONFIRM {
  SAVE = 'Are you want to save?',
  CANCEL = 'Are you want to cancel?',
  REQUIRED_FIELD = 'This field is required!',
  MOVE = 'Are you sure you want to move?',
  DELETE = 'Are you sure you want to delete'
}

export enum REQUIRED_FIELD {
  REQUIRE_NAME_LEVEL = 'Name of Category is required',
  REQUIRED_LEVEL = 'Name of Level is required',
  REQUIRED_UNIQUE = 'Each name of level is unique and name of level is required',
  REQUIRED_CONTACT_TYPE = 'Contact Types field must have at least 1 items',
  REQUIRED_FIRST_NAME = 'First Name is required',
  REQUIRED_LAST_NAME = 'Last Name is required',
  REQUIRED_COUNTRY = 'Lead Country is required',
  REQUIRED_LEAD_TITLE = 'Lead Title is required',
  THIS_FIELD_IS_REQUIRED = 'This field is required',
  REQUIRE_SELECT_A_FILTER = 'Please select at least one filter'
}

export enum LABEL {
  CHECKED_ACTIONS = 'Actions',
  VALUE = 'Value',
  UNIT = 'Unit',
  CHILDREN = 'Children',
  OPTION = 'Option',
  INFORMATION = 'Information',
  RELATED_TODO = 'Related To Do',
  ATTACHMENT = 'Attachment',
  CUSTOM_FIELD = 'Custom Field',
  ASSIGN_CHECKLIST_ITEM = 'Assign Checklist items',
  PRIORITY = 'Priority',
  DUE_DATE = 'Due Date',
  TIME = 'Time',
  REMINDER = 'Reminder',
  ASSIGNED_TO = 'Assigned to',
  GROUP_THIS_TO_DO = 'Group this to-do',
  TAGS = 'Tags',
  SETTING = 'Setting',
  NAME_NEW_UNIT = 'Name New Unit',
  DESCRIPTION_UNIT = 'Description Unit',
  NAME_DATA_ENTRY = 'Name Data Entry',
  NAME_DESCRIPTION_LIBRARY = 'Description Name',
  DESCRIPTION_LIBRARY = 'Description'
}

export enum PROFILE {
  MAIN_CONTACT_INFO = 'Main Contact Info'
}

export enum VIEW {
  EXTRA_LARGE = 'Extra Large',
  MEDIUM = 'Medium',
  SMALL = 'Small',
  LIST_VIEW = 'List View',
  TREE_VIEW = 'Tree View',
  CALENDAR = 'Calendar',
  GANTT = 'Gantt',
  LIST = 'List',
  SUMMARIZE = 'Summarize',
  DETAIL = 'Detail'
}
