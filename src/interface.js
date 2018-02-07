/* @flow */

import { destroyAll as _destroyAll } from 'xcomponent/src';
import { ZalgoPromise } from 'zalgo-promise/src';
import * as _postRobot from 'post-robot/src'; // eslint-disable-line import/no-namespace

import { isPayPalDomain } from './lib';
import { Checkout as _Checkout } from './checkout';

export const postRobot = _postRobot;
export { ZalgoPromise as Promise } from 'zalgo-promise/src';
export { PopupOpenError } from 'xcomponent/src';

export { rest } from './api';
export { Button } from './button';
export { setup } from './setup';
export { config } from './config';
export { ENV, USERS, SOURCE, FUNDING, CARD } from './constants';
export { request, isEligible, isFundingRemembered, allowIframe as forceIframe, allowIframe as isWebView, allowIframe } from './lib';
export { logExperimentTreatment } from './experiments';

export let onPossiblyUnhandledException = ZalgoPromise.onPossiblyUnhandledException;

export let version = __MINOR_VERSION__;

export let checkout;
export let apps;

if (__LEGACY_SUPPORT__) {
    let legacy = require('./legacy');
    checkout = legacy.checkout;
    apps = legacy.apps;
}


// -------------------------------------------------------------

export let Checkout;
export let PayPalCheckout;
export let destroyAll;
export let enableCheckoutIframe;

function _enableCheckoutIframe() {
    _Checkout.contexts.iframe = true;
}

if (isPayPalDomain() || __TEST__) {

    Checkout = _Checkout;
    PayPalCheckout = _Checkout;
    enableCheckoutIframe = _enableCheckoutIframe;
    destroyAll = _destroyAll;
}
