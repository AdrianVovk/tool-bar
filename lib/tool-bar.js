'use babel';

import ToolBarManager from './tool-bar-manager';
import ToolBarView from './tool-bar-view';

let toolBarView = null;

export function activate () {
  toolBarView = new ToolBarView();
}

export function deactivate () {
  toolBarView.destroy();
  toolBarView = null;
}

export function provideToolBar () {
  // if (atom.config.get('tool-bar-ide.custom')) {
  return (group) => new ToolBarManager(group, toolBarView);
  // } else {
  //
  // }
}

export const config = {
  // custom: {
  //   title: "Allow custom toolbars"
  //   type: 'boolean',
  //   default: false,
  //   order: 1
  // },
  visible: {
    type: 'boolean',
    default: true,
    order: 2
  },
  iconSize: {
    type: 'string',
    default: '24px',
    enum: ['12px', '16px', '24px', '32px'],
    order: 3
  },
  position: {
    type: 'string',
    default: 'Top',
    enum: ['Top', 'Right', 'Bottom', 'Left'],
    order: 4
  },
  fullWidth: {
    type: 'boolean',
    default: true,
    order: 5
  }
};
