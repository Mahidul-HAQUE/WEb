(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        l(u);
    new MutationObserver(u => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && l(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(u) {
        const f = {};
        return u.integrity && (f.integrity = u.integrity),
        u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? f.credentials = "include" : u.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function l(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const f = s(u);
        fetch(u.href, f)
    }
}
)();
function fd(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
function MS(n) {
    if (n.__esModule)
        return n;
    var i = n.default;
    if (typeof i == "function") {
        var s = function l() {
            return this instanceof l ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments)
        };
        s.prototype = i.prototype
    } else
        s = {};
    return Object.defineProperty(s, "__esModule", {
        value: !0
    }),
    Object.keys(n).forEach(function(l) {
        var u = Object.getOwnPropertyDescriptor(n, l);
        Object.defineProperty(s, l, u.get ? u : {
            enumerable: !0,
            get: function() {
                return n[l]
            }
        })
    }),
    s
}
var Qc = {
    exports: {}
}
  , Ir = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hg;
function DS() {
    if (Hg)
        return Ir;
    Hg = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function s(l, u, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        u.key !== void 0 && (d = "" + u.key),
        "key"in u) {
            f = {};
            for (var p in u)
                p !== "key" && (f[p] = u[p])
        } else
            f = u;
        return u = f.ref,
        {
            $$typeof: n,
            type: l,
            key: d,
            ref: u !== void 0 ? u : null,
            props: f
        }
    }
    return Ir.Fragment = i,
    Ir.jsx = s,
    Ir.jsxs = s,
    Ir
}
var Pg;
function OS() {
    return Pg || (Pg = 1,
    Qc.exports = DS()),
    Qc.exports
}
var v = OS()
  , Jc = {
    exports: {}
}
  , me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function LS() {
    if (Gg)
        return me;
    Gg = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , b = Symbol.iterator;
    function S(R) {
        return R === null || typeof R != "object" ? null : (R = b && R[b] || R["@@iterator"],
        typeof R == "function" ? R : null)
    }
    var T = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , w = Object.assign
      , j = {};
    function U(R, X, te) {
        this.props = R,
        this.context = X,
        this.refs = j,
        this.updater = te || T
    }
    U.prototype.isReactComponent = {},
    U.prototype.setState = function(R, X) {
        if (typeof R != "object" && typeof R != "function" && R != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, X, "setState")
    }
    ,
    U.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate")
    }
    ;
    function A() {}
    A.prototype = U.prototype;
    function k(R, X, te) {
        this.props = R,
        this.context = X,
        this.refs = j,
        this.updater = te || T
    }
    var V = k.prototype = new A;
    V.constructor = k,
    w(V, U.prototype),
    V.isPureReactComponent = !0;
    var F = Array.isArray
      , M = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , N = Object.prototype.hasOwnProperty;
    function Q(R, X, te, ne, J, ce) {
        return te = ce.ref,
        {
            $$typeof: n,
            type: R,
            key: X,
            ref: te !== void 0 ? te : null,
            props: ce
        }
    }
    function P(R, X) {
        return Q(R.type, X, void 0, void 0, void 0, R.props)
    }
    function _(R) {
        return typeof R == "object" && R !== null && R.$$typeof === n
    }
    function G(R) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + R.replace(/[=:]/g, function(te) {
            return X[te]
        })
    }
    var W = /\/+/g;
    function he(R, X) {
        return typeof R == "object" && R !== null && R.key != null ? G("" + R.key) : X.toString(36)
    }
    function Te() {}
    function ke(R) {
        switch (R.status) {
        case "fulfilled":
            return R.value;
        case "rejected":
            throw R.reason;
        default:
            switch (typeof R.status == "string" ? R.then(Te, Te) : (R.status = "pending",
            R.then(function(X) {
                R.status === "pending" && (R.status = "fulfilled",
                R.value = X)
            }, function(X) {
                R.status === "pending" && (R.status = "rejected",
                R.reason = X)
            })),
            R.status) {
            case "fulfilled":
                return R.value;
            case "rejected":
                throw R.reason
            }
        }
        throw R
    }
    function Ce(R, X, te, ne, J) {
        var ce = typeof R;
        (ce === "undefined" || ce === "boolean") && (R = null);
        var re = !1;
        if (R === null)
            re = !0;
        else
            switch (ce) {
            case "bigint":
            case "string":
            case "number":
                re = !0;
                break;
            case "object":
                switch (R.$$typeof) {
                case n:
                case i:
                    re = !0;
                    break;
                case y:
                    return re = R._init,
                    Ce(re(R._payload), X, te, ne, J)
                }
            }
        if (re)
            return J = J(R),
            re = ne === "" ? "." + he(R, 0) : ne,
            F(J) ? (te = "",
            re != null && (te = re.replace(W, "$&/") + "/"),
            Ce(J, X, te, "", function(ye) {
                return ye
            })) : J != null && (_(J) && (J = P(J, te + (J.key == null || R && R.key === J.key ? "" : ("" + J.key).replace(W, "$&/") + "/") + re)),
            X.push(J)),
            1;
        re = 0;
        var Oe = ne === "" ? "." : ne + ":";
        if (F(R))
            for (var fe = 0; fe < R.length; fe++)
                ne = R[fe],
                ce = Oe + he(ne, fe),
                re += Ce(ne, X, te, ce, J);
        else if (fe = S(R),
        typeof fe == "function")
            for (R = fe.call(R),
            fe = 0; !(ne = R.next()).done; )
                ne = ne.value,
                ce = Oe + he(ne, fe++),
                re += Ce(ne, X, te, ce, J);
        else if (ce === "object") {
            if (typeof R.then == "function")
                return Ce(ke(R), X, te, ne, J);
            throw X = String(R),
            Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return re
    }
    function Z(R, X, te) {
        if (R == null)
            return R;
        var ne = []
          , J = 0;
        return Ce(R, ne, "", "", function(ce) {
            return X.call(te, ce, J++)
        }),
        ne
    }
    function I(R) {
        if (R._status === -1) {
            var X = R._result;
            X = X(),
            X.then(function(te) {
                (R._status === 0 || R._status === -1) && (R._status = 1,
                R._result = te)
            }, function(te) {
                (R._status === 0 || R._status === -1) && (R._status = 2,
                R._result = te)
            }),
            R._status === -1 && (R._status = 0,
            R._result = X)
        }
        if (R._status === 1)
            return R._result.default;
        throw R._result
    }
    var ee = typeof reportError == "function" ? reportError : function(R) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
                error: R
            });
            if (!window.dispatchEvent(X))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", R);
            return
        }
        console.error(R)
    }
    ;
    function ue() {}
    return me.Children = {
        map: Z,
        forEach: function(R, X, te) {
            Z(R, function() {
                X.apply(this, arguments)
            }, te)
        },
        count: function(R) {
            var X = 0;
            return Z(R, function() {
                X++
            }),
            X
        },
        toArray: function(R) {
            return Z(R, function(X) {
                return X
            }) || []
        },
        only: function(R) {
            if (!_(R))
                throw Error("React.Children.only expected to receive a single React element child.");
            return R
        }
    },
    me.Component = U,
    me.Fragment = s,
    me.Profiler = u,
    me.PureComponent = k,
    me.StrictMode = l,
    me.Suspense = h,
    me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M,
    me.act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    ,
    me.cache = function(R) {
        return function() {
            return R.apply(null, arguments)
        }
    }
    ,
    me.cloneElement = function(R, X, te) {
        if (R == null)
            throw Error("The argument must be a React element, but you passed " + R + ".");
        var ne = w({}, R.props)
          , J = R.key
          , ce = void 0;
        if (X != null)
            for (re in X.ref !== void 0 && (ce = void 0),
            X.key !== void 0 && (J = "" + X.key),
            X)
                !N.call(X, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && X.ref === void 0 || (ne[re] = X[re]);
        var re = arguments.length - 2;
        if (re === 1)
            ne.children = te;
        else if (1 < re) {
            for (var Oe = Array(re), fe = 0; fe < re; fe++)
                Oe[fe] = arguments[fe + 2];
            ne.children = Oe
        }
        return Q(R.type, J, void 0, void 0, ce, ne)
    }
    ,
    me.createContext = function(R) {
        return R = {
            $$typeof: d,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        R.Provider = R,
        R.Consumer = {
            $$typeof: f,
            _context: R
        },
        R
    }
    ,
    me.createElement = function(R, X, te) {
        var ne, J = {}, ce = null;
        if (X != null)
            for (ne in X.key !== void 0 && (ce = "" + X.key),
            X)
                N.call(X, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (J[ne] = X[ne]);
        var re = arguments.length - 2;
        if (re === 1)
            J.children = te;
        else if (1 < re) {
            for (var Oe = Array(re), fe = 0; fe < re; fe++)
                Oe[fe] = arguments[fe + 2];
            J.children = Oe
        }
        if (R && R.defaultProps)
            for (ne in re = R.defaultProps,
            re)
                J[ne] === void 0 && (J[ne] = re[ne]);
        return Q(R, ce, void 0, void 0, null, J)
    }
    ,
    me.createRef = function() {
        return {
            current: null
        }
    }
    ,
    me.forwardRef = function(R) {
        return {
            $$typeof: p,
            render: R
        }
    }
    ,
    me.isValidElement = _,
    me.lazy = function(R) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: R
            },
            _init: I
        }
    }
    ,
    me.memo = function(R, X) {
        return {
            $$typeof: m,
            type: R,
            compare: X === void 0 ? null : X
        }
    }
    ,
    me.startTransition = function(R) {
        var X = M.T
          , te = {};
        M.T = te;
        try {
            var ne = R()
              , J = M.S;
            J !== null && J(te, ne),
            typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(ue, ee)
        } catch (ce) {
            ee(ce)
        } finally {
            M.T = X
        }
    }
    ,
    me.unstable_useCacheRefresh = function() {
        return M.H.useCacheRefresh()
    }
    ,
    me.use = function(R) {
        return M.H.use(R)
    }
    ,
    me.useActionState = function(R, X, te) {
        return M.H.useActionState(R, X, te)
    }
    ,
    me.useCallback = function(R, X) {
        return M.H.useCallback(R, X)
    }
    ,
    me.useContext = function(R) {
        return M.H.useContext(R)
    }
    ,
    me.useDebugValue = function() {}
    ,
    me.useDeferredValue = function(R, X) {
        return M.H.useDeferredValue(R, X)
    }
    ,
    me.useEffect = function(R, X) {
        return M.H.useEffect(R, X)
    }
    ,
    me.useId = function() {
        return M.H.useId()
    }
    ,
    me.useImperativeHandle = function(R, X, te) {
        return M.H.useImperativeHandle(R, X, te)
    }
    ,
    me.useInsertionEffect = function(R, X) {
        return M.H.useInsertionEffect(R, X)
    }
    ,
    me.useLayoutEffect = function(R, X) {
        return M.H.useLayoutEffect(R, X)
    }
    ,
    me.useMemo = function(R, X) {
        return M.H.useMemo(R, X)
    }
    ,
    me.useOptimistic = function(R, X) {
        return M.H.useOptimistic(R, X)
    }
    ,
    me.useReducer = function(R, X, te) {
        return M.H.useReducer(R, X, te)
    }
    ,
    me.useRef = function(R) {
        return M.H.useRef(R)
    }
    ,
    me.useState = function(R) {
        return M.H.useState(R)
    }
    ,
    me.useSyncExternalStore = function(R, X, te) {
        return M.H.useSyncExternalStore(R, X, te)
    }
    ,
    me.useTransition = function() {
        return M.H.useTransition()
    }
    ,
    me.version = "19.0.0",
    me
}
var Yg;
function Ao() {
    return Yg || (Yg = 1,
    Jc.exports = LS()),
    Jc.exports
}
var C = Ao();
const Zt = fd(C);
var Wc = {
    exports: {}
}
  , es = {}
  , Ic = {
    exports: {}
}
  , ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qg;
function _S() {
    return qg || (qg = 1,
    function(n) {
        function i(Z, I) {
            var ee = Z.length;
            Z.push(I);
            e: for (; 0 < ee; ) {
                var ue = ee - 1 >>> 1
                  , R = Z[ue];
                if (0 < u(R, I))
                    Z[ue] = I,
                    Z[ee] = R,
                    ee = ue;
                else
                    break e
            }
        }
        function s(Z) {
            return Z.length === 0 ? null : Z[0]
        }
        function l(Z) {
            if (Z.length === 0)
                return null;
            var I = Z[0]
              , ee = Z.pop();
            if (ee !== I) {
                Z[0] = ee;
                e: for (var ue = 0, R = Z.length, X = R >>> 1; ue < X; ) {
                    var te = 2 * (ue + 1) - 1
                      , ne = Z[te]
                      , J = te + 1
                      , ce = Z[J];
                    if (0 > u(ne, ee))
                        J < R && 0 > u(ce, ne) ? (Z[ue] = ce,
                        Z[J] = ee,
                        ue = J) : (Z[ue] = ne,
                        Z[te] = ee,
                        ue = te);
                    else if (J < R && 0 > u(ce, ee))
                        Z[ue] = ce,
                        Z[J] = ee,
                        ue = J;
                    else
                        break e
                }
            }
            return I
        }
        function u(Z, I) {
            var ee = Z.sortIndex - I.sortIndex;
            return ee !== 0 ? ee : Z.id - I.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , p = d.now();
            n.unstable_now = function() {
                return d.now() - p
            }
        }
        var h = []
          , m = []
          , y = 1
          , b = null
          , S = 3
          , T = !1
          , w = !1
          , j = !1
          , U = typeof setTimeout == "function" ? setTimeout : null
          , A = typeof clearTimeout == "function" ? clearTimeout : null
          , k = typeof setImmediate < "u" ? setImmediate : null;
        function V(Z) {
            for (var I = s(m); I !== null; ) {
                if (I.callback === null)
                    l(m);
                else if (I.startTime <= Z)
                    l(m),
                    I.sortIndex = I.expirationTime,
                    i(h, I);
                else
                    break;
                I = s(m)
            }
        }
        function F(Z) {
            if (j = !1,
            V(Z),
            !w)
                if (s(h) !== null)
                    w = !0,
                    ke();
                else {
                    var I = s(m);
                    I !== null && Ce(F, I.startTime - Z)
                }
        }
        var M = !1
          , N = -1
          , Q = 5
          , P = -1;
        function _() {
            return !(n.unstable_now() - P < Q)
        }
        function G() {
            if (M) {
                var Z = n.unstable_now();
                P = Z;
                var I = !0;
                try {
                    e: {
                        w = !1,
                        j && (j = !1,
                        A(N),
                        N = -1),
                        T = !0;
                        var ee = S;
                        try {
                            t: {
                                for (V(Z),
                                b = s(h); b !== null && !(b.expirationTime > Z && _()); ) {
                                    var ue = b.callback;
                                    if (typeof ue == "function") {
                                        b.callback = null,
                                        S = b.priorityLevel;
                                        var R = ue(b.expirationTime <= Z);
                                        if (Z = n.unstable_now(),
                                        typeof R == "function") {
                                            b.callback = R,
                                            V(Z),
                                            I = !0;
                                            break t
                                        }
                                        b === s(h) && l(h),
                                        V(Z)
                                    } else
                                        l(h);
                                    b = s(h)
                                }
                                if (b !== null)
                                    I = !0;
                                else {
                                    var X = s(m);
                                    X !== null && Ce(F, X.startTime - Z),
                                    I = !1
                                }
                            }
                            break e
                        } finally {
                            b = null,
                            S = ee,
                            T = !1
                        }
                        I = void 0
                    }
                } finally {
                    I ? W() : M = !1
                }
            }
        }
        var W;
        if (typeof k == "function")
            W = function() {
                k(G)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var he = new MessageChannel
              , Te = he.port2;
            he.port1.onmessage = G,
            W = function() {
                Te.postMessage(null)
            }
        } else
            W = function() {
                U(G, 0)
            }
            ;
        function ke() {
            M || (M = !0,
            W())
        }
        function Ce(Z, I) {
            N = U(function() {
                Z(n.unstable_now())
            }, I)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(Z) {
            Z.callback = null
        }
        ,
        n.unstable_continueExecution = function() {
            w || T || (w = !0,
            ke())
        }
        ,
        n.unstable_forceFrameRate = function(Z) {
            0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < Z ? Math.floor(1e3 / Z) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        n.unstable_getFirstCallbackNode = function() {
            return s(h)
        }
        ,
        n.unstable_next = function(Z) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var I = 3;
                break;
            default:
                I = S
            }
            var ee = S;
            S = I;
            try {
                return Z()
            } finally {
                S = ee
            }
        }
        ,
        n.unstable_pauseExecution = function() {}
        ,
        n.unstable_requestPaint = function() {}
        ,
        n.unstable_runWithPriority = function(Z, I) {
            switch (Z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                Z = 3
            }
            var ee = S;
            S = Z;
            try {
                return I()
            } finally {
                S = ee
            }
        }
        ,
        n.unstable_scheduleCallback = function(Z, I, ee) {
            var ue = n.unstable_now();
            switch (typeof ee == "object" && ee !== null ? (ee = ee.delay,
            ee = typeof ee == "number" && 0 < ee ? ue + ee : ue) : ee = ue,
            Z) {
            case 1:
                var R = -1;
                break;
            case 2:
                R = 250;
                break;
            case 5:
                R = 1073741823;
                break;
            case 4:
                R = 1e4;
                break;
            default:
                R = 5e3
            }
            return R = ee + R,
            Z = {
                id: y++,
                callback: I,
                priorityLevel: Z,
                startTime: ee,
                expirationTime: R,
                sortIndex: -1
            },
            ee > ue ? (Z.sortIndex = ee,
            i(m, Z),
            s(h) === null && Z === s(m) && (j ? (A(N),
            N = -1) : j = !0,
            Ce(F, ee - ue))) : (Z.sortIndex = R,
            i(h, Z),
            w || T || (w = !0,
            ke())),
            Z
        }
        ,
        n.unstable_shouldYield = _,
        n.unstable_wrapCallback = function(Z) {
            var I = S;
            return function() {
                var ee = S;
                S = I;
                try {
                    return Z.apply(this, arguments)
                } finally {
                    S = ee
                }
            }
        }
    }(ef)),
    ef
}
var $g;
function US() {
    return $g || ($g = 1,
    Ic.exports = _S()),
    Ic.exports
}
var tf = {
    exports: {}
}
  , pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xg;
function zS() {
    if (Xg)
        return pt;
    Xg = 1;
    var n = Ao();
    function i(h) {
        var m = "https://react.dev/errors/" + h;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var l = {
        d: {
            f: s,
            r: function() {
                throw Error(i(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function f(h, m, y) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: b == null ? null : "" + b,
            children: h,
            containerInfo: m,
            implementation: y
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(h, m) {
        if (h === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l,
    pt.createPortal = function(h, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(i(299));
        return f(h, m, null, y)
    }
    ,
    pt.flushSync = function(h) {
        var m = d.T
          , y = l.p;
        try {
            if (d.T = null,
            l.p = 2,
            h)
                return h()
        } finally {
            d.T = m,
            l.p = y,
            l.d.f()
        }
    }
    ,
    pt.preconnect = function(h, m) {
        typeof h == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        l.d.C(h, m))
    }
    ,
    pt.prefetchDNS = function(h) {
        typeof h == "string" && l.d.D(h)
    }
    ,
    pt.preinit = function(h, m) {
        if (typeof h == "string" && m && typeof m.as == "string") {
            var y = m.as
              , b = p(y, m.crossOrigin)
              , S = typeof m.integrity == "string" ? m.integrity : void 0
              , T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? l.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: b,
                integrity: S,
                fetchPriority: T
            }) : y === "script" && l.d.X(h, {
                crossOrigin: b,
                integrity: S,
                fetchPriority: T,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    pt.preinitModule = function(h, m) {
        if (typeof h == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = p(m.as, m.crossOrigin);
                    l.d.M(h, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && l.d.M(h)
    }
    ,
    pt.preload = function(h, m) {
        if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as
              , b = p(y, m.crossOrigin);
            l.d.L(h, y, {
                crossOrigin: b,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    pt.preloadModule = function(h, m) {
        if (typeof h == "string")
            if (m) {
                var y = p(m.as, m.crossOrigin);
                l.d.m(h, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                l.d.m(h)
    }
    ,
    pt.requestFormReset = function(h) {
        l.d.r(h)
    }
    ,
    pt.unstable_batchedUpdates = function(h, m) {
        return h(m)
    }
    ,
    pt.useFormState = function(h, m, y) {
        return d.H.useFormState(h, m, y)
    }
    ,
    pt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    pt.version = "19.0.0",
    pt
}
var Kg;
function kS() {
    if (Kg)
        return tf.exports;
    Kg = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    tf.exports = zS(),
    tf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fg;
function VS() {
    if (Fg)
        return es;
    Fg = 1;
    var n = US()
      , i = Ao()
      , s = kS();
    function l(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    var f = Symbol.for("react.element")
      , d = Symbol.for("react.transitional.element")
      , p = Symbol.for("react.portal")
      , h = Symbol.for("react.fragment")
      , m = Symbol.for("react.strict_mode")
      , y = Symbol.for("react.profiler")
      , b = Symbol.for("react.provider")
      , S = Symbol.for("react.consumer")
      , T = Symbol.for("react.context")
      , w = Symbol.for("react.forward_ref")
      , j = Symbol.for("react.suspense")
      , U = Symbol.for("react.suspense_list")
      , A = Symbol.for("react.memo")
      , k = Symbol.for("react.lazy")
      , V = Symbol.for("react.offscreen")
      , F = Symbol.for("react.memo_cache_sentinel")
      , M = Symbol.iterator;
    function N(e) {
        return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Q = Symbol.for("react.client.reference");
    function P(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Q ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case h:
            return "Fragment";
        case p:
            return "Portal";
        case y:
            return "Profiler";
        case m:
            return "StrictMode";
        case j:
            return "Suspense";
        case U:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case T:
                return (e.displayName || "Context") + ".Provider";
            case S:
                return (e._context.displayName || "Context") + ".Consumer";
            case w:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case A:
                return t = e.displayName || null,
                t !== null ? t : P(e.type) || "Memo";
            case k:
                t = e._payload,
                e = e._init;
                try {
                    return P(e(t))
                } catch {}
            }
        return null
    }
    var _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.assign, W, he;
    function Te(e) {
        if (W === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                W = t && t[1] || "",
                he = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + W + e + he
    }
    var ke = !1;
    function Ce(e, t) {
        if (!e || ke)
            return "";
        ke = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (Y) {
                                    var B = Y
                                }
                                Reflect.construct(e, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (Y) {
                                    B = Y
                                }
                                e.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (Y) {
                                B = Y
                            }
                            (K = e()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (Y) {
                        if (Y && B && typeof Y.stack == "string")
                            return [Y.stack, B.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = r.DetermineComponentFrameRoot()
              , g = c[0]
              , x = c[1];
            if (g && x) {
                var E = g.split(`
`)
                  , O = x.split(`
`);
                for (o = r = 0; r < E.length && !E[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                for (; o < O.length && !O[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (r === E.length || o === O.length)
                    for (r = E.length - 1,
                    o = O.length - 1; 1 <= r && 0 <= o && E[r] !== O[o]; )
                        o--;
                for (; 1 <= r && 0 <= o; r--,
                o--)
                    if (E[r] !== O[o]) {
                        if (r !== 1 || o !== 1)
                            do
                                if (r--,
                                o--,
                                0 > o || E[r] !== O[o]) {
                                    var q = `
` + E[r].replace(" at new ", " at ");
                                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)),
                                    q
                                }
                            while (1 <= r && 0 <= o);
                        break
                    }
            }
        } finally {
            ke = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? Te(a) : ""
    }
    function Z(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Te(e.type);
        case 16:
            return Te("Lazy");
        case 13:
            return Te("Suspense");
        case 19:
            return Te("SuspenseList");
        case 0:
        case 15:
            return e = Ce(e.type, !1),
            e;
        case 11:
            return e = Ce(e.type.render, !1),
            e;
        case 1:
            return e = Ce(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function I(e) {
        try {
            var t = "";
            do
                t += Z(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function ee(e) {
        var t = e
          , a = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (a = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function ue(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function R(e) {
        if (ee(e) !== e)
            throw Error(l(188))
    }
    function X(e) {
        var t = e.alternate;
        if (!t) {
            if (t = ee(e),
            t === null)
                throw Error(l(188));
            return t !== e ? null : e
        }
        for (var a = e, r = t; ; ) {
            var o = a.return;
            if (o === null)
                break;
            var c = o.alternate;
            if (c === null) {
                if (r = o.return,
                r !== null) {
                    a = r;
                    continue
                }
                break
            }
            if (o.child === c.child) {
                for (c = o.child; c; ) {
                    if (c === a)
                        return R(o),
                        e;
                    if (c === r)
                        return R(o),
                        t;
                    c = c.sibling
                }
                throw Error(l(188))
            }
            if (a.return !== r.return)
                a = o,
                r = c;
            else {
                for (var g = !1, x = o.child; x; ) {
                    if (x === a) {
                        g = !0,
                        a = o,
                        r = c;
                        break
                    }
                    if (x === r) {
                        g = !0,
                        r = o,
                        a = c;
                        break
                    }
                    x = x.sibling
                }
                if (!g) {
                    for (x = c.child; x; ) {
                        if (x === a) {
                            g = !0,
                            a = c,
                            r = o;
                            break
                        }
                        if (x === r) {
                            g = !0,
                            r = c,
                            a = o;
                            break
                        }
                        x = x.sibling
                    }
                    if (!g)
                        throw Error(l(189))
                }
            }
            if (a.alternate !== r)
                throw Error(l(190))
        }
        if (a.tag !== 3)
            throw Error(l(188));
        return a.stateNode.current === a ? e : t
    }
    function te(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = te(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var ne = Array.isArray
      , J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , ce = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , re = []
      , Oe = -1;
    function fe(e) {
        return {
            current: e
        }
    }
    function ye(e) {
        0 > Oe || (e.current = re[Oe],
        re[Oe] = null,
        Oe--)
    }
    function Se(e, t) {
        Oe++,
        re[Oe] = e.current,
        e.current = t
    }
    var Xe = fe(null)
      , nt = fe(null)
      , Ie = fe(null)
      , sn = fe(null);
    function vn(e, t) {
        switch (Se(Ie, t),
        Se(nt, e),
        Se(Xe, null),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) && (t = t.namespaceURI) ? pg(t) : 0;
            break;
        default:
            if (e = e === 8 ? t.parentNode : t,
            t = e.tagName,
            e = e.namespaceURI)
                e = pg(e),
                t = gg(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        ye(Xe),
        Se(Xe, t)
    }
    function ea() {
        ye(Xe),
        ye(nt),
        ye(Ie)
    }
    function Po(e) {
        e.memoizedState !== null && Se(sn, e);
        var t = Xe.current
          , a = gg(t, e.type);
        t !== a && (Se(nt, e),
        Se(Xe, a))
    }
    function Os(e) {
        nt.current === e && (ye(Xe),
        ye(nt)),
        sn.current === e && (ye(sn),
        Fr._currentValue = ce)
    }
    var Go = Object.prototype.hasOwnProperty
      , Yo = n.unstable_scheduleCallback
      , qo = n.unstable_cancelCallback
      , lb = n.unstable_shouldYield
      , ob = n.unstable_requestPaint
      , ln = n.unstable_now
      , ub = n.unstable_getCurrentPriorityLevel
      , ah = n.unstable_ImmediatePriority
      , rh = n.unstable_UserBlockingPriority
      , Ls = n.unstable_NormalPriority
      , cb = n.unstable_LowPriority
      , sh = n.unstable_IdlePriority
      , fb = n.log
      , db = n.unstable_setDisableYieldValue
      , ir = null
      , Et = null;
    function hb(e) {
        if (Et && typeof Et.onCommitFiberRoot == "function")
            try {
                Et.onCommitFiberRoot(ir, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    function Yn(e) {
        if (typeof fb == "function" && db(e),
        Et && typeof Et.setStrictMode == "function")
            try {
                Et.setStrictMode(ir, e)
            } catch {}
    }
    var Rt = Math.clz32 ? Math.clz32 : gb
      , mb = Math.log
      , pb = Math.LN2;
    function gb(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (mb(e) / pb | 0) | 0
    }
    var _s = 128
      , Us = 4194304;
    function vi(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function zs(e, t) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var r = 0
          , o = e.suspendedLanes
          , c = e.pingedLanes
          , g = e.warmLanes;
        e = e.finishedLanes !== 0;
        var x = a & 134217727;
        return x !== 0 ? (a = x & ~o,
        a !== 0 ? r = vi(a) : (c &= x,
        c !== 0 ? r = vi(c) : e || (g = x & ~g,
        g !== 0 && (r = vi(g))))) : (x = a & ~o,
        x !== 0 ? r = vi(x) : c !== 0 ? r = vi(c) : e || (g = a & ~g,
        g !== 0 && (r = vi(g)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & o) === 0 && (o = r & -r,
        g = t & -t,
        o >= g || o === 32 && (g & 4194176) !== 0) ? t : r
    }
    function ar(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function yb(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
            return t + 250;
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function lh() {
        var e = _s;
        return _s <<= 1,
        (_s & 4194176) === 0 && (_s = 128),
        e
    }
    function oh() {
        var e = Us;
        return Us <<= 1,
        (Us & 62914560) === 0 && (Us = 4194304),
        e
    }
    function $o(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function rr(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function vb(e, t, a, r, o, c) {
        var g = e.pendingLanes;
        e.pendingLanes = a,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= a,
        e.entangledLanes &= a,
        e.errorRecoveryDisabledLanes &= a,
        e.shellSuspendCounter = 0;
        var x = e.entanglements
          , E = e.expirationTimes
          , O = e.hiddenUpdates;
        for (a = g & ~a; 0 < a; ) {
            var q = 31 - Rt(a)
              , K = 1 << q;
            x[q] = 0,
            E[q] = -1;
            var B = O[q];
            if (B !== null)
                for (O[q] = null,
                q = 0; q < B.length; q++) {
                    var Y = B[q];
                    Y !== null && (Y.lane &= -536870913)
                }
            a &= ~K
        }
        r !== 0 && uh(e, r, 0),
        c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t))
    }
    function uh(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var r = 31 - Rt(t);
        e.entangledLanes |= t,
        e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 4194218
    }
    function ch(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var r = 31 - Rt(a)
              , o = 1 << r;
            o & t | e[r] & t && (e[r] |= t),
            a &= ~o
        }
    }
    function fh(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function dh() {
        var e = J.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Ug(e.type))
    }
    function bb(e, t) {
        var a = J.p;
        try {
            return J.p = e,
            t()
        } finally {
            J.p = a
        }
    }
    var qn = Math.random().toString(36).slice(2)
      , ht = "__reactFiber$" + qn
      , St = "__reactProps$" + qn
      , ta = "__reactContainer$" + qn
      , Xo = "__reactEvents$" + qn
      , xb = "__reactListeners$" + qn
      , Sb = "__reactHandles$" + qn
      , hh = "__reactResources$" + qn
      , sr = "__reactMarker$" + qn;
    function Ko(e) {
        delete e[ht],
        delete e[St],
        delete e[Xo],
        delete e[xb],
        delete e[Sb]
    }
    function bi(e) {
        var t = e[ht];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[ta] || a[ht]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = bg(e); e !== null; ) {
                        if (a = e[ht])
                            return a;
                        e = bg(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function na(e) {
        if (e = e[ht] || e[ta]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function lr(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(l(33))
    }
    function ia(e) {
        var t = e[hh];
        return t || (t = e[hh] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function it(e) {
        e[sr] = !0
    }
    var mh = new Set
      , ph = {};
    function xi(e, t) {
        aa(e, t),
        aa(e + "Capture", t)
    }
    function aa(e, t) {
        for (ph[e] = t,
        e = 0; e < t.length; e++)
            mh.add(t[e])
    }
    var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , wb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , gh = {}
      , yh = {};
    function Tb(e) {
        return Go.call(yh, e) ? !0 : Go.call(gh, e) ? !1 : wb.test(e) ? yh[e] = !0 : (gh[e] = !0,
        !1)
    }
    function ks(e, t, a) {
        if (Tb(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var r = t.toLowerCase().slice(0, 5);
                    if (r !== "data-" && r !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function Vs(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function xn(e, t, a, r) {
        if (r === null)
            e.removeAttribute(a);
        else {
            switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + r)
        }
    }
    function Ut(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function vh(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Eb(e) {
        var t = vh(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var o = a.get
              , c = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(g) {
                    r = "" + g,
                    c.call(this, g)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return r
                },
                setValue: function(g) {
                    r = "" + g
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Bs(e) {
        e._valueTracker || (e._valueTracker = Eb(e))
    }
    function bh(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , r = "";
        return e && (r = vh(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function Ns(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Rb = /[\n"\\]/g;
    function zt(e) {
        return e.replace(Rb, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Fo(e, t, a, r, o, c, g, x) {
        e.name = "",
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"),
        t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"),
        t != null ? Zo(e, g, Ut(t)) : a != null ? Zo(e, g, Ut(a)) : r != null && e.removeAttribute("value"),
        o == null && c != null && (e.defaultChecked = !!c),
        o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
        x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.name = "" + Ut(x) : e.removeAttribute("name")
    }
    function xh(e, t, a, r, o, c, g, x) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c),
        t != null || a != null) {
            if (!(c !== "submit" && c !== "reset" || t != null))
                return;
            a = a != null ? "" + Ut(a) : "",
            t = t != null ? "" + Ut(t) : a,
            x || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        r = r ?? o,
        r = typeof r != "function" && typeof r != "symbol" && !!r,
        e.checked = x ? e.checked : !!r,
        e.defaultChecked = !!r,
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g)
    }
    function Zo(e, t, a) {
        t === "number" && Ns(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function ra(e, t, a, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < a.length; o++)
                t["$" + a[o]] = !0;
            for (a = 0; a < e.length; a++)
                o = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== o && (e[a].selected = o),
                o && r && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + Ut(a),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === a) {
                    e[o].selected = !0,
                    r && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Sh(e, t, a) {
        if (t != null && (t = "" + Ut(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + Ut(a) : ""
    }
    function wh(e, t, a, r) {
        if (t == null) {
            if (r != null) {
                if (a != null)
                    throw Error(l(92));
                if (ne(r)) {
                    if (1 < r.length)
                        throw Error(l(93));
                    r = r[0]
                }
                a = r
            }
            a == null && (a = ""),
            t = a
        }
        a = Ut(t),
        e.defaultValue = a,
        r = e.textContent,
        r === a && r !== "" && r !== null && (e.value = r)
    }
    function sa(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Ab = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Th(e, t, a) {
        var r = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ab.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Eh(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(l(62));
        if (e = e.style,
        a != null) {
            for (var r in a)
                !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
            for (var o in t)
                r = t[o],
                t.hasOwnProperty(o) && a[o] !== r && Th(e, o, r)
        } else
            for (var c in t)
                t.hasOwnProperty(c) && Th(e, c, t[c])
    }
    function Qo(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Cb = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , jb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Hs(e) {
        return jb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Jo = null;
    function Wo(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var la = null
      , oa = null;
    function Rh(e) {
        var t = na(e);
        if (t && (e = t.stateNode)) {
            var a = e[St] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Fo(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + zt("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var r = a[t];
                        if (r !== e && r.form === e.form) {
                            var o = r[St] || null;
                            if (!o)
                                throw Error(l(90));
                            Fo(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        r = a[t],
                        r.form === e.form && bh(r)
                }
                break e;
            case "textarea":
                Sh(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && ra(e, !!a.multiple, t, !1)
            }
        }
    }
    var Io = !1;
    function Ah(e, t, a) {
        if (Io)
            return e(t, a);
        Io = !0;
        try {
            var r = e(t);
            return r
        } finally {
            if (Io = !1,
            (la !== null || oa !== null) && (Tl(),
            la && (t = la,
            e = oa,
            oa = la = null,
            Rh(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Rh(e[t])
        }
    }
    function or(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var r = a[St] || null;
        if (r === null)
            return null;
        a = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
            r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(l(231, t, typeof a));
        return a
    }
    var eu = !1;
    if (bn)
        try {
            var ur = {};
            Object.defineProperty(ur, "passive", {
                get: function() {
                    eu = !0
                }
            }),
            window.addEventListener("test", ur, ur),
            window.removeEventListener("test", ur, ur)
        } catch {
            eu = !1
        }
    var $n = null
      , tu = null
      , Ps = null;
    function Ch() {
        if (Ps)
            return Ps;
        var e, t = tu, a = t.length, r, o = "value"in $n ? $n.value : $n.textContent, c = o.length;
        for (e = 0; e < a && t[e] === o[e]; e++)
            ;
        var g = a - e;
        for (r = 1; r <= g && t[a - r] === o[c - r]; r++)
            ;
        return Ps = o.slice(e, 1 < r ? 1 - r : void 0)
    }
    function Gs(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Ys() {
        return !0
    }
    function jh() {
        return !1
    }
    function wt(e) {
        function t(a, r, o, c, g) {
            this._reactName = a,
            this._targetInst = o,
            this.type = r,
            this.nativeEvent = c,
            this.target = g,
            this.currentTarget = null;
            for (var x in e)
                e.hasOwnProperty(x) && (a = e[x],
                this[x] = a ? a(c) : c[x]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ys : jh,
            this.isPropagationStopped = jh,
            this
        }
        return G(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Ys)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Ys)
            },
            persist: function() {},
            isPersistent: Ys
        }),
        t
    }
    var Si = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, qs = wt(Si), cr = G({}, Si, {
        view: 0,
        detail: 0
    }), Mb = wt(cr), nu, iu, fr, $s = G({}, cr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ru,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (nu = e.screenX - fr.screenX,
            iu = e.screenY - fr.screenY) : iu = nu = 0,
            fr = e),
            nu)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : iu
        }
    }), Mh = wt($s), Db = G({}, $s, {
        dataTransfer: 0
    }), Ob = wt(Db), Lb = G({}, cr, {
        relatedTarget: 0
    }), au = wt(Lb), _b = G({}, Si, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ub = wt(_b), zb = G({}, Si, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), kb = wt(zb), Vb = G({}, Si, {
        data: 0
    }), Dh = wt(Vb), Bb = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Nb = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Hb = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Pb(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Hb[e]) ? !!t[e] : !1
    }
    function ru() {
        return Pb
    }
    var Gb = G({}, cr, {
        key: function(e) {
            if (e.key) {
                var t = Bb[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Gs(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nb[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ru,
        charCode: function(e) {
            return e.type === "keypress" ? Gs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Yb = wt(Gb)
      , qb = G({}, $s, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Oh = wt(qb)
      , $b = G({}, cr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ru
    })
      , Xb = wt($b)
      , Kb = G({}, Si, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Fb = wt(Kb)
      , Zb = G({}, $s, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Qb = wt(Zb)
      , Jb = G({}, Si, {
        newState: 0,
        oldState: 0
    })
      , Wb = wt(Jb)
      , Ib = [9, 13, 27, 32]
      , su = bn && "CompositionEvent"in window
      , dr = null;
    bn && "documentMode"in document && (dr = document.documentMode);
    var ex = bn && "TextEvent"in window && !dr
      , Lh = bn && (!su || dr && 8 < dr && 11 >= dr)
      , _h = " "
      , Uh = !1;
    function zh(e, t) {
        switch (e) {
        case "keyup":
            return Ib.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function kh(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var ua = !1;
    function tx(e, t) {
        switch (e) {
        case "compositionend":
            return kh(t);
        case "keypress":
            return t.which !== 32 ? null : (Uh = !0,
            _h);
        case "textInput":
            return e = t.data,
            e === _h && Uh ? null : e;
        default:
            return null
        }
    }
    function nx(e, t) {
        if (ua)
            return e === "compositionend" || !su && zh(e, t) ? (e = Ch(),
            Ps = tu = $n = null,
            ua = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Lh && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var ix = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Vh(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!ix[e.type] : t === "textarea"
    }
    function Bh(e, t, a, r) {
        la ? oa ? oa.push(r) : oa = [r] : la = r,
        t = jl(t, "onChange"),
        0 < t.length && (a = new qs("onChange","change",null,a,r),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var hr = null
      , mr = null;
    function ax(e) {
        cg(e, 0)
    }
    function Xs(e) {
        var t = lr(e);
        if (bh(t))
            return e
    }
    function Nh(e, t) {
        if (e === "change")
            return t
    }
    var Hh = !1;
    if (bn) {
        var lu;
        if (bn) {
            var ou = "oninput"in document;
            if (!ou) {
                var Ph = document.createElement("div");
                Ph.setAttribute("oninput", "return;"),
                ou = typeof Ph.oninput == "function"
            }
            lu = ou
        } else
            lu = !1;
        Hh = lu && (!document.documentMode || 9 < document.documentMode)
    }
    function Gh() {
        hr && (hr.detachEvent("onpropertychange", Yh),
        mr = hr = null)
    }
    function Yh(e) {
        if (e.propertyName === "value" && Xs(mr)) {
            var t = [];
            Bh(t, mr, e, Wo(e)),
            Ah(ax, t)
        }
    }
    function rx(e, t, a) {
        e === "focusin" ? (Gh(),
        hr = t,
        mr = a,
        hr.attachEvent("onpropertychange", Yh)) : e === "focusout" && Gh()
    }
    function sx(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Xs(mr)
    }
    function lx(e, t) {
        if (e === "click")
            return Xs(t)
    }
    function ox(e, t) {
        if (e === "input" || e === "change")
            return Xs(t)
    }
    function ux(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var At = typeof Object.is == "function" ? Object.is : ux;
    function pr(e, t) {
        if (At(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , r = Object.keys(t);
        if (a.length !== r.length)
            return !1;
        for (r = 0; r < a.length; r++) {
            var o = a[r];
            if (!Go.call(t, o) || !At(e[o], t[o]))
                return !1
        }
        return !0
    }
    function qh(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function $h(e, t) {
        var a = qh(e);
        e = 0;
        for (var r; a; ) {
            if (a.nodeType === 3) {
                if (r = e + a.textContent.length,
                e <= t && r >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = r
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = qh(a)
        }
    }
    function Xh(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Kh(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Ns(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = Ns(e.document)
        }
        return t
    }
    function uu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function cx(e, t) {
        var a = Kh(t);
        t = e.focusedElem;
        var r = e.selectionRange;
        if (a !== t && t && t.ownerDocument && Xh(t.ownerDocument.documentElement, t)) {
            if (r !== null && uu(t)) {
                if (e = r.start,
                a = r.end,
                a === void 0 && (a = e),
                "selectionStart"in t)
                    t.selectionStart = e,
                    t.selectionEnd = Math.min(a, t.value.length);
                else if (a = (e = t.ownerDocument || document) && e.defaultView || window,
                a.getSelection) {
                    a = a.getSelection();
                    var o = t.textContent.length
                      , c = Math.min(r.start, o);
                    r = r.end === void 0 ? c : Math.min(r.end, o),
                    !a.extend && c > r && (o = r,
                    r = c,
                    c = o),
                    o = $h(t, c);
                    var g = $h(t, r);
                    o && g && (a.rangeCount !== 1 || a.anchorNode !== o.node || a.anchorOffset !== o.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (e = e.createRange(),
                    e.setStart(o.node, o.offset),
                    a.removeAllRanges(),
                    c > r ? (a.addRange(e),
                    a.extend(g.node, g.offset)) : (e.setEnd(g.node, g.offset),
                    a.addRange(e)))
                }
            }
            for (e = [],
            a = t; a = a.parentNode; )
                a.nodeType === 1 && e.push({
                    element: a,
                    left: a.scrollLeft,
                    top: a.scrollTop
                });
            for (typeof t.focus == "function" && t.focus(),
            t = 0; t < e.length; t++)
                a = e[t],
                a.element.scrollLeft = a.left,
                a.element.scrollTop = a.top
        }
    }
    var fx = bn && "documentMode"in document && 11 >= document.documentMode
      , ca = null
      , cu = null
      , gr = null
      , fu = !1;
    function Fh(e, t, a) {
        var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        fu || ca == null || ca !== Ns(r) || (r = ca,
        "selectionStart"in r && uu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        gr && pr(gr, r) || (gr = r,
        r = jl(cu, "onSelect"),
        0 < r.length && (t = new qs("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = ca)))
    }
    function wi(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var fa = {
        animationend: wi("Animation", "AnimationEnd"),
        animationiteration: wi("Animation", "AnimationIteration"),
        animationstart: wi("Animation", "AnimationStart"),
        transitionrun: wi("Transition", "TransitionRun"),
        transitionstart: wi("Transition", "TransitionStart"),
        transitioncancel: wi("Transition", "TransitionCancel"),
        transitionend: wi("Transition", "TransitionEnd")
    }
      , du = {}
      , Zh = {};
    bn && (Zh = document.createElement("div").style,
    "AnimationEvent"in window || (delete fa.animationend.animation,
    delete fa.animationiteration.animation,
    delete fa.animationstart.animation),
    "TransitionEvent"in window || delete fa.transitionend.transition);
    function Ti(e) {
        if (du[e])
            return du[e];
        if (!fa[e])
            return e;
        var t = fa[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Zh)
                return du[e] = t[a];
        return e
    }
    var Qh = Ti("animationend")
      , Jh = Ti("animationiteration")
      , Wh = Ti("animationstart")
      , dx = Ti("transitionrun")
      , hx = Ti("transitionstart")
      , mx = Ti("transitioncancel")
      , Ih = Ti("transitionend")
      , em = new Map
      , tm = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
    function Jt(e, t) {
        em.set(e, t),
        xi(t, [e])
    }
    var kt = []
      , da = 0
      , hu = 0;
    function Ks() {
        for (var e = da, t = hu = da = 0; t < e; ) {
            var a = kt[t];
            kt[t++] = null;
            var r = kt[t];
            kt[t++] = null;
            var o = kt[t];
            kt[t++] = null;
            var c = kt[t];
            if (kt[t++] = null,
            r !== null && o !== null) {
                var g = r.pending;
                g === null ? o.next = o : (o.next = g.next,
                g.next = o),
                r.pending = o
            }
            c !== 0 && nm(a, o, c)
        }
    }
    function Fs(e, t, a, r) {
        kt[da++] = e,
        kt[da++] = t,
        kt[da++] = a,
        kt[da++] = r,
        hu |= r,
        e.lanes |= r,
        e = e.alternate,
        e !== null && (e.lanes |= r)
    }
    function mu(e, t, a, r) {
        return Fs(e, t, a, r),
        Zs(e)
    }
    function Xn(e, t) {
        return Fs(e, null, null, t),
        Zs(e)
    }
    function nm(e, t, a) {
        e.lanes |= a;
        var r = e.alternate;
        r !== null && (r.lanes |= a);
        for (var o = !1, c = e.return; c !== null; )
            c.childLanes |= a,
            r = c.alternate,
            r !== null && (r.childLanes |= a),
            c.tag === 22 && (e = c.stateNode,
            e === null || e._visibility & 1 || (o = !0)),
            e = c,
            c = c.return;
        o && t !== null && e.tag === 3 && (c = e.stateNode,
        o = 31 - Rt(a),
        c = c.hiddenUpdates,
        e = c[o],
        e === null ? c[o] = [t] : e.push(t),
        t.lane = a | 536870912)
    }
    function Zs(e) {
        if (50 < Pr)
            throw Pr = 0,
            xc = null,
            Error(l(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ha = {}
      , im = new WeakMap;
    function Vt(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = im.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: I(t)
            },
            im.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: I(t)
        }
    }
    var ma = []
      , pa = 0
      , Qs = null
      , Js = 0
      , Bt = []
      , Nt = 0
      , Ei = null
      , Sn = 1
      , wn = "";
    function Ri(e, t) {
        ma[pa++] = Js,
        ma[pa++] = Qs,
        Qs = e,
        Js = t
    }
    function am(e, t, a) {
        Bt[Nt++] = Sn,
        Bt[Nt++] = wn,
        Bt[Nt++] = Ei,
        Ei = e;
        var r = Sn;
        e = wn;
        var o = 32 - Rt(r) - 1;
        r &= ~(1 << o),
        a += 1;
        var c = 32 - Rt(t) + o;
        if (30 < c) {
            var g = o - o % 5;
            c = (r & (1 << g) - 1).toString(32),
            r >>= g,
            o -= g,
            Sn = 1 << 32 - Rt(t) + o | a << o | r,
            wn = c + e
        } else
            Sn = 1 << c | a << o | r,
            wn = e
    }
    function pu(e) {
        e.return !== null && (Ri(e, 1),
        am(e, 1, 0))
    }
    function gu(e) {
        for (; e === Qs; )
            Qs = ma[--pa],
            ma[pa] = null,
            Js = ma[--pa],
            ma[pa] = null;
        for (; e === Ei; )
            Ei = Bt[--Nt],
            Bt[Nt] = null,
            wn = Bt[--Nt],
            Bt[Nt] = null,
            Sn = Bt[--Nt],
            Bt[Nt] = null
    }
    var vt = null
      , ut = null
      , Ee = !1
      , Wt = null
      , on = !1
      , yu = Error(l(519));
    function Ai(e) {
        var t = Error(l(418, ""));
        throw br(Vt(t, e)),
        yu
    }
    function rm(e) {
        var t = e.stateNode
          , a = e.type
          , r = e.memoizedProps;
        switch (t[ht] = e,
        t[St] = r,
        a) {
        case "dialog":
            xe("cancel", t),
            xe("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            xe("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Yr.length; a++)
                xe(Yr[a], t);
            break;
        case "source":
            xe("error", t);
            break;
        case "img":
        case "image":
        case "link":
            xe("error", t),
            xe("load", t);
            break;
        case "details":
            xe("toggle", t);
            break;
        case "input":
            xe("invalid", t),
            xh(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0),
            Bs(t);
            break;
        case "select":
            xe("invalid", t);
            break;
        case "textarea":
            xe("invalid", t),
            wh(t, r.value, r.defaultValue, r.children),
            Bs(t)
        }
        a = r.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || mg(t.textContent, a) ? (r.popover != null && (xe("beforetoggle", t),
        xe("toggle", t)),
        r.onScroll != null && xe("scroll", t),
        r.onScrollEnd != null && xe("scrollend", t),
        r.onClick != null && (t.onclick = Ml),
        t = !0) : t = !1,
        t || Ai(e)
    }
    function sm(e) {
        for (vt = e.return; vt; )
            switch (vt.tag) {
            case 3:
            case 27:
                on = !0;
                return;
            case 5:
            case 13:
                on = !1;
                return;
            default:
                vt = vt.return
            }
    }
    function yr(e) {
        if (e !== vt)
            return !1;
        if (!Ee)
            return sm(e),
            Ee = !0,
            !1;
        var t = !1, a;
        if ((a = e.tag !== 3 && e.tag !== 27) && ((a = e.tag === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Vc(e.type, e.memoizedProps)),
        a = !a),
        a && (t = !0),
        t && ut && Ai(e),
        sm(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (a = e.data,
                        a === "/$") {
                            if (t === 0) {
                                ut = en(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                ut = null
            }
        } else
            ut = vt ? en(e.stateNode.nextSibling) : null;
        return !0
    }
    function vr() {
        ut = vt = null,
        Ee = !1
    }
    function br(e) {
        Wt === null ? Wt = [e] : Wt.push(e)
    }
    var xr = Error(l(460))
      , lm = Error(l(474))
      , vu = {
        then: function() {}
    };
    function om(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Ws() {}
    function um(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Ws, Ws),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            e === xr ? Error(l(483)) : e;
        default:
            if (typeof t.status == "string")
                t.then(Ws, Ws);
            else {
                if (e = _e,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(l(482));
                e = t,
                e.status = "pending",
                e.then(function(r) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "fulfilled",
                        o.value = r
                    }
                }, function(r) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "rejected",
                        o.reason = r
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                e === xr ? Error(l(483)) : e
            }
            throw Sr = t,
            xr
        }
    }
    var Sr = null;
    function cm() {
        if (Sr === null)
            throw Error(l(459));
        var e = Sr;
        return Sr = null,
        e
    }
    var ga = null
      , wr = 0;
    function Is(e) {
        var t = wr;
        return wr += 1,
        ga === null && (ga = []),
        um(ga, e, t)
    }
    function Tr(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function el(e, t) {
        throw t.$$typeof === f ? Error(l(525)) : (e = Object.prototype.toString.call(t),
        Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function fm(e) {
        var t = e._init;
        return t(e._payload)
    }
    function dm(e) {
        function t(L, D) {
            if (e) {
                var z = L.deletions;
                z === null ? (L.deletions = [D],
                L.flags |= 16) : z.push(D)
            }
        }
        function a(L, D) {
            if (!e)
                return null;
            for (; D !== null; )
                t(L, D),
                D = D.sibling;
            return null
        }
        function r(L) {
            for (var D = new Map; L !== null; )
                L.key !== null ? D.set(L.key, L) : D.set(L.index, L),
                L = L.sibling;
            return D
        }
        function o(L, D) {
            return L = ai(L, D),
            L.index = 0,
            L.sibling = null,
            L
        }
        function c(L, D, z) {
            return L.index = z,
            e ? (z = L.alternate,
            z !== null ? (z = z.index,
            z < D ? (L.flags |= 33554434,
            D) : z) : (L.flags |= 33554434,
            D)) : (L.flags |= 1048576,
            D)
        }
        function g(L) {
            return e && L.alternate === null && (L.flags |= 33554434),
            L
        }
        function x(L, D, z, $) {
            return D === null || D.tag !== 6 ? (D = dc(z, L.mode, $),
            D.return = L,
            D) : (D = o(D, z),
            D.return = L,
            D)
        }
        function E(L, D, z, $) {
            var ie = z.type;
            return ie === h ? q(L, D, z.props.children, $, z.key) : D !== null && (D.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === k && fm(ie) === D.type) ? (D = o(D, z.props),
            Tr(D, z),
            D.return = L,
            D) : (D = vl(z.type, z.key, z.props, null, L.mode, $),
            Tr(D, z),
            D.return = L,
            D)
        }
        function O(L, D, z, $) {
            return D === null || D.tag !== 4 || D.stateNode.containerInfo !== z.containerInfo || D.stateNode.implementation !== z.implementation ? (D = hc(z, L.mode, $),
            D.return = L,
            D) : (D = o(D, z.children || []),
            D.return = L,
            D)
        }
        function q(L, D, z, $, ie) {
            return D === null || D.tag !== 7 ? (D = ki(z, L.mode, $, ie),
            D.return = L,
            D) : (D = o(D, z),
            D.return = L,
            D)
        }
        function K(L, D, z) {
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
                return D = dc("" + D, L.mode, z),
                D.return = L,
                D;
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case d:
                    return z = vl(D.type, D.key, D.props, null, L.mode, z),
                    Tr(z, D),
                    z.return = L,
                    z;
                case p:
                    return D = hc(D, L.mode, z),
                    D.return = L,
                    D;
                case k:
                    var $ = D._init;
                    return D = $(D._payload),
                    K(L, D, z)
                }
                if (ne(D) || N(D))
                    return D = ki(D, L.mode, z, null),
                    D.return = L,
                    D;
                if (typeof D.then == "function")
                    return K(L, Is(D), z);
                if (D.$$typeof === T)
                    return K(L, pl(L, D), z);
                el(L, D)
            }
            return null
        }
        function B(L, D, z, $) {
            var ie = D !== null ? D.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return ie !== null ? null : x(L, D, "" + z, $);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case d:
                    return z.key === ie ? E(L, D, z, $) : null;
                case p:
                    return z.key === ie ? O(L, D, z, $) : null;
                case k:
                    return ie = z._init,
                    z = ie(z._payload),
                    B(L, D, z, $)
                }
                if (ne(z) || N(z))
                    return ie !== null ? null : q(L, D, z, $, null);
                if (typeof z.then == "function")
                    return B(L, D, Is(z), $);
                if (z.$$typeof === T)
                    return B(L, D, pl(L, z), $);
                el(L, z)
            }
            return null
        }
        function Y(L, D, z, $, ie) {
            if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
                return L = L.get(z) || null,
                x(D, L, "" + $, ie);
            if (typeof $ == "object" && $ !== null) {
                switch ($.$$typeof) {
                case d:
                    return L = L.get($.key === null ? z : $.key) || null,
                    E(D, L, $, ie);
                case p:
                    return L = L.get($.key === null ? z : $.key) || null,
                    O(D, L, $, ie);
                case k:
                    var ve = $._init;
                    return $ = ve($._payload),
                    Y(L, D, z, $, ie)
                }
                if (ne($) || N($))
                    return L = L.get(z) || null,
                    q(D, L, $, ie, null);
                if (typeof $.then == "function")
                    return Y(L, D, z, Is($), ie);
                if ($.$$typeof === T)
                    return Y(L, D, z, pl(D, $), ie);
                el(D, $)
            }
            return null
        }
        function ae(L, D, z, $) {
            for (var ie = null, ve = null, se = D, le = D = 0, st = null; se !== null && le < z.length; le++) {
                se.index > le ? (st = se,
                se = null) : st = se.sibling;
                var Re = B(L, se, z[le], $);
                if (Re === null) {
                    se === null && (se = st);
                    break
                }
                e && se && Re.alternate === null && t(L, se),
                D = c(Re, D, le),
                ve === null ? ie = Re : ve.sibling = Re,
                ve = Re,
                se = st
            }
            if (le === z.length)
                return a(L, se),
                Ee && Ri(L, le),
                ie;
            if (se === null) {
                for (; le < z.length; le++)
                    se = K(L, z[le], $),
                    se !== null && (D = c(se, D, le),
                    ve === null ? ie = se : ve.sibling = se,
                    ve = se);
                return Ee && Ri(L, le),
                ie
            }
            for (se = r(se); le < z.length; le++)
                st = Y(se, L, le, z[le], $),
                st !== null && (e && st.alternate !== null && se.delete(st.key === null ? le : st.key),
                D = c(st, D, le),
                ve === null ? ie = st : ve.sibling = st,
                ve = st);
            return e && se.forEach(function(fi) {
                return t(L, fi)
            }),
            Ee && Ri(L, le),
            ie
        }
        function de(L, D, z, $) {
            if (z == null)
                throw Error(l(151));
            for (var ie = null, ve = null, se = D, le = D = 0, st = null, Re = z.next(); se !== null && !Re.done; le++,
            Re = z.next()) {
                se.index > le ? (st = se,
                se = null) : st = se.sibling;
                var fi = B(L, se, Re.value, $);
                if (fi === null) {
                    se === null && (se = st);
                    break
                }
                e && se && fi.alternate === null && t(L, se),
                D = c(fi, D, le),
                ve === null ? ie = fi : ve.sibling = fi,
                ve = fi,
                se = st
            }
            if (Re.done)
                return a(L, se),
                Ee && Ri(L, le),
                ie;
            if (se === null) {
                for (; !Re.done; le++,
                Re = z.next())
                    Re = K(L, Re.value, $),
                    Re !== null && (D = c(Re, D, le),
                    ve === null ? ie = Re : ve.sibling = Re,
                    ve = Re);
                return Ee && Ri(L, le),
                ie
            }
            for (se = r(se); !Re.done; le++,
            Re = z.next())
                Re = Y(se, L, le, Re.value, $),
                Re !== null && (e && Re.alternate !== null && se.delete(Re.key === null ? le : Re.key),
                D = c(Re, D, le),
                ve === null ? ie = Re : ve.sibling = Re,
                ve = Re);
            return e && se.forEach(function(jS) {
                return t(L, jS)
            }),
            Ee && Ri(L, le),
            ie
        }
        function qe(L, D, z, $) {
            if (typeof z == "object" && z !== null && z.type === h && z.key === null && (z = z.props.children),
            typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case d:
                    e: {
                        for (var ie = z.key; D !== null; ) {
                            if (D.key === ie) {
                                if (ie = z.type,
                                ie === h) {
                                    if (D.tag === 7) {
                                        a(L, D.sibling),
                                        $ = o(D, z.props.children),
                                        $.return = L,
                                        L = $;
                                        break e
                                    }
                                } else if (D.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === k && fm(ie) === D.type) {
                                    a(L, D.sibling),
                                    $ = o(D, z.props),
                                    Tr($, z),
                                    $.return = L,
                                    L = $;
                                    break e
                                }
                                a(L, D);
                                break
                            } else
                                t(L, D);
                            D = D.sibling
                        }
                        z.type === h ? ($ = ki(z.props.children, L.mode, $, z.key),
                        $.return = L,
                        L = $) : ($ = vl(z.type, z.key, z.props, null, L.mode, $),
                        Tr($, z),
                        $.return = L,
                        L = $)
                    }
                    return g(L);
                case p:
                    e: {
                        for (ie = z.key; D !== null; ) {
                            if (D.key === ie)
                                if (D.tag === 4 && D.stateNode.containerInfo === z.containerInfo && D.stateNode.implementation === z.implementation) {
                                    a(L, D.sibling),
                                    $ = o(D, z.children || []),
                                    $.return = L,
                                    L = $;
                                    break e
                                } else {
                                    a(L, D);
                                    break
                                }
                            else
                                t(L, D);
                            D = D.sibling
                        }
                        $ = hc(z, L.mode, $),
                        $.return = L,
                        L = $
                    }
                    return g(L);
                case k:
                    return ie = z._init,
                    z = ie(z._payload),
                    qe(L, D, z, $)
                }
                if (ne(z))
                    return ae(L, D, z, $);
                if (N(z)) {
                    if (ie = N(z),
                    typeof ie != "function")
                        throw Error(l(150));
                    return z = ie.call(z),
                    de(L, D, z, $)
                }
                if (typeof z.then == "function")
                    return qe(L, D, Is(z), $);
                if (z.$$typeof === T)
                    return qe(L, D, pl(L, z), $);
                el(L, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z,
            D !== null && D.tag === 6 ? (a(L, D.sibling),
            $ = o(D, z),
            $.return = L,
            L = $) : (a(L, D),
            $ = dc(z, L.mode, $),
            $.return = L,
            L = $),
            g(L)) : a(L, D)
        }
        return function(L, D, z, $) {
            try {
                wr = 0;
                var ie = qe(L, D, z, $);
                return ga = null,
                ie
            } catch (se) {
                if (se === xr)
                    throw se;
                var ve = Yt(29, se, null, L.mode);
                return ve.lanes = $,
                ve.return = L,
                ve
            } finally {}
        }
    }
    var Ci = dm(!0)
      , hm = dm(!1)
      , ya = fe(null)
      , tl = fe(0);
    function mm(e, t) {
        e = _n,
        Se(tl, e),
        Se(ya, t),
        _n = e | t.baseLanes
    }
    function bu() {
        Se(tl, _n),
        Se(ya, ya.current)
    }
    function xu() {
        _n = tl.current,
        ye(ya),
        ye(tl)
    }
    var Ht = fe(null)
      , un = null;
    function Kn(e) {
        var t = e.alternate;
        Se(et, et.current & 1),
        Se(Ht, e),
        un === null && (t === null || ya.current !== null || t.memoizedState !== null) && (un = e)
    }
    function pm(e) {
        if (e.tag === 22) {
            if (Se(et, et.current),
            Se(Ht, e),
            un === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (un = e)
            }
        } else
            Fn()
    }
    function Fn() {
        Se(et, et.current),
        Se(Ht, Ht.current)
    }
    function Tn(e) {
        ye(Ht),
        un === e && (un = null),
        ye(et)
    }
    var et = fe(0);
    function nl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var px = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, r) {
                e.push(r)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , gx = n.unstable_scheduleCallback
      , yx = n.unstable_NormalPriority
      , tt = {
        $$typeof: T,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Su() {
        return {
            controller: new px,
            data: new Map,
            refCount: 0
        }
    }
    function Er(e) {
        e.refCount--,
        e.refCount === 0 && gx(yx, function() {
            e.controller.abort()
        })
    }
    var Rr = null
      , wu = 0
      , va = 0
      , ba = null;
    function vx(e, t) {
        if (Rr === null) {
            var a = Rr = [];
            wu = 0,
            va = jc(),
            ba = {
                status: "pending",
                value: void 0,
                then: function(r) {
                    a.push(r)
                }
            }
        }
        return wu++,
        t.then(gm, gm),
        t
    }
    function gm() {
        if (--wu === 0 && Rr !== null) {
            ba !== null && (ba.status = "fulfilled");
            var e = Rr;
            Rr = null,
            va = 0,
            ba = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function bx(e, t) {
        var a = []
          , r = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                a.push(o)
            }
        };
        return e.then(function() {
            r.status = "fulfilled",
            r.value = t;
            for (var o = 0; o < a.length; o++)
                (0,
                a[o])(t)
        }, function(o) {
            for (r.status = "rejected",
            r.reason = o,
            o = 0; o < a.length; o++)
                (0,
                a[o])(void 0)
        }),
        r
    }
    var ym = _.S;
    _.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && vx(e, t),
        ym !== null && ym(e, t)
    }
    ;
    var ji = fe(null);
    function Tu() {
        var e = ji.current;
        return e !== null ? e : _e.pooledCache
    }
    function il(e, t) {
        t === null ? Se(ji, ji.current) : Se(ji, t.pool)
    }
    function vm() {
        var e = Tu();
        return e === null ? null : {
            parent: tt._currentValue,
            pool: e
        }
    }
    var Zn = 0
      , ge = null
      , Me = null
      , Ze = null
      , al = !1
      , xa = !1
      , Mi = !1
      , rl = 0
      , Ar = 0
      , Sa = null
      , xx = 0;
    function Ke() {
        throw Error(l(321))
    }
    function Eu(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!At(e[a], t[a]))
                return !1;
        return !0
    }
    function Ru(e, t, a, r, o, c) {
        return Zn = c,
        ge = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        _.H = e === null || e.memoizedState === null ? Di : Qn,
        Mi = !1,
        c = a(r, o),
        Mi = !1,
        xa && (c = xm(t, a, r, o)),
        bm(e),
        c
    }
    function bm(e) {
        _.H = cn;
        var t = Me !== null && Me.next !== null;
        if (Zn = 0,
        Ze = Me = ge = null,
        al = !1,
        Ar = 0,
        Sa = null,
        t)
            throw Error(l(300));
        e === null || at || (e = e.dependencies,
        e !== null && ml(e) && (at = !0))
    }
    function xm(e, t, a, r) {
        ge = e;
        var o = 0;
        do {
            if (xa && (Sa = null),
            Ar = 0,
            xa = !1,
            25 <= o)
                throw Error(l(301));
            if (o += 1,
            Ze = Me = null,
            e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            _.H = Oi,
            c = t(a, r)
        } while (xa);
        return c
    }
    function Sx() {
        var e = _.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Cr(t) : t,
        e = e.useState()[0],
        (Me !== null ? Me.memoizedState : null) !== e && (ge.flags |= 1024),
        t
    }
    function Au() {
        var e = rl !== 0;
        return rl = 0,
        e
    }
    function Cu(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function ju(e) {
        if (al) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            al = !1
        }
        Zn = 0,
        Ze = Me = ge = null,
        xa = !1,
        Ar = rl = 0,
        Sa = null
    }
    function Tt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ze === null ? ge.memoizedState = Ze = e : Ze = Ze.next = e,
        Ze
    }
    function Qe() {
        if (Me === null) {
            var e = ge.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Me.next;
        var t = Ze === null ? ge.memoizedState : Ze.next;
        if (t !== null)
            Ze = t,
            Me = e;
        else {
            if (e === null)
                throw ge.alternate === null ? Error(l(467)) : Error(l(310));
            Me = e,
            e = {
                memoizedState: Me.memoizedState,
                baseState: Me.baseState,
                baseQueue: Me.baseQueue,
                queue: Me.queue,
                next: null
            },
            Ze === null ? ge.memoizedState = Ze = e : Ze = Ze.next = e
        }
        return Ze
    }
    var sl;
    sl = function() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    ;
    function Cr(e) {
        var t = Ar;
        return Ar += 1,
        Sa === null && (Sa = []),
        e = um(Sa, e, t),
        t = ge,
        (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate,
        _.H = t === null || t.memoizedState === null ? Di : Qn),
        e
    }
    function ll(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Cr(e);
            if (e.$$typeof === T)
                return mt(e)
        }
        throw Error(l(438, String(e)))
    }
    function Mu(e) {
        var t = null
          , a = ge.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var r = ge.alternate;
            r !== null && (r = r.updateQueue,
            r !== null && (r = r.memoCache,
            r != null && (t = {
                data: r.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = sl(),
        ge.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            r = 0; r < e; r++)
                a[r] = F;
        return t.index++,
        a
    }
    function En(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ol(e) {
        var t = Qe();
        return Du(t, Me, e)
    }
    function Du(e, t, a) {
        var r = e.queue;
        if (r === null)
            throw Error(l(311));
        r.lastRenderedReducer = a;
        var o = e.baseQueue
          , c = r.pending;
        if (c !== null) {
            if (o !== null) {
                var g = o.next;
                o.next = c.next,
                c.next = g
            }
            t.baseQueue = o = c,
            r.pending = null
        }
        if (c = e.baseState,
        o === null)
            e.memoizedState = c;
        else {
            t = o.next;
            var x = g = null
              , E = null
              , O = t
              , q = !1;
            do {
                var K = O.lane & -536870913;
                if (K !== O.lane ? (we & K) === K : (Zn & K) === K) {
                    var B = O.revertLane;
                    if (B === 0)
                        E !== null && (E = E.next = {
                            lane: 0,
                            revertLane: 0,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        }),
                        K === va && (q = !0);
                    else if ((Zn & B) === B) {
                        O = O.next,
                        B === va && (q = !0);
                        continue
                    } else
                        K = {
                            lane: 0,
                            revertLane: O.revertLane,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        },
                        E === null ? (x = E = K,
                        g = c) : E = E.next = K,
                        ge.lanes |= B,
                        ri |= B;
                    K = O.action,
                    Mi && a(c, K),
                    c = O.hasEagerState ? O.eagerState : a(c, K)
                } else
                    B = {
                        lane: K,
                        revertLane: O.revertLane,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    },
                    E === null ? (x = E = B,
                    g = c) : E = E.next = B,
                    ge.lanes |= K,
                    ri |= K;
                O = O.next
            } while (O !== null && O !== t);
            if (E === null ? g = c : E.next = x,
            !At(c, e.memoizedState) && (at = !0,
            q && (a = ba,
            a !== null)))
                throw a;
            e.memoizedState = c,
            e.baseState = g,
            e.baseQueue = E,
            r.lastRenderedState = c
        }
        return o === null && (r.lanes = 0),
        [e.memoizedState, r.dispatch]
    }
    function Ou(e) {
        var t = Qe()
          , a = t.queue;
        if (a === null)
            throw Error(l(311));
        a.lastRenderedReducer = e;
        var r = a.dispatch
          , o = a.pending
          , c = t.memoizedState;
        if (o !== null) {
            a.pending = null;
            var g = o = o.next;
            do
                c = e(c, g.action),
                g = g.next;
            while (g !== o);
            At(c, t.memoizedState) || (at = !0),
            t.memoizedState = c,
            t.baseQueue === null && (t.baseState = c),
            a.lastRenderedState = c
        }
        return [c, r]
    }
    function Sm(e, t, a) {
        var r = ge
          , o = Qe()
          , c = Ee;
        if (c) {
            if (a === void 0)
                throw Error(l(407));
            a = a()
        } else
            a = t();
        var g = !At((Me || o).memoizedState, a);
        if (g && (o.memoizedState = a,
        at = !0),
        o = o.queue,
        Uu(Em.bind(null, r, o, e), [e]),
        o.getSnapshot !== t || g || Ze !== null && Ze.memoizedState.tag & 1) {
            if (r.flags |= 2048,
            wa(9, Tm.bind(null, r, o, a, t), {
                destroy: void 0
            }, null),
            _e === null)
                throw Error(l(349));
            c || (Zn & 60) !== 0 || wm(r, t, a)
        }
        return a
    }
    function wm(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = ge.updateQueue,
        t === null ? (t = sl(),
        ge.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Tm(e, t, a, r) {
        t.value = a,
        t.getSnapshot = r,
        Rm(t) && Am(e)
    }
    function Em(e, t, a) {
        return a(function() {
            Rm(t) && Am(e)
        })
    }
    function Rm(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !At(e, a)
        } catch {
            return !0
        }
    }
    function Am(e) {
        var t = Xn(e, 2);
        t !== null && bt(t, e, 2)
    }
    function Lu(e) {
        var t = Tt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            Mi) {
                Yn(!0);
                try {
                    a()
                } finally {
                    Yn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: En,
            lastRenderedState: e
        },
        t
    }
    function Cm(e, t, a, r) {
        return e.baseState = a,
        Du(e, Me, typeof r == "function" ? r : En)
    }
    function wx(e, t, a, r, o) {
        if (fl(e))
            throw Error(l(485));
        if (e = t.action,
        e !== null) {
            var c = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    c.listeners.push(g)
                }
            };
            _.T !== null ? a(!0) : c.isTransition = !1,
            r(c),
            a = t.pending,
            a === null ? (c.next = t.pending = c,
            jm(t, c)) : (c.next = a.next,
            t.pending = a.next = c)
        }
    }
    function jm(e, t) {
        var a = t.action
          , r = t.payload
          , o = e.state;
        if (t.isTransition) {
            var c = _.T
              , g = {};
            _.T = g;
            try {
                var x = a(o, r)
                  , E = _.S;
                E !== null && E(g, x),
                Mm(e, t, x)
            } catch (O) {
                _u(e, t, O)
            } finally {
                _.T = c
            }
        } else
            try {
                c = a(o, r),
                Mm(e, t, c)
            } catch (O) {
                _u(e, t, O)
            }
    }
    function Mm(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(r) {
            Dm(e, t, r)
        }, function(r) {
            return _u(e, t, r)
        }) : Dm(e, t, a)
    }
    function Dm(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        Om(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        jm(e, a)))
    }
    function _u(e, t, a) {
        var r = e.pending;
        if (e.pending = null,
        r !== null) {
            r = r.next;
            do
                t.status = "rejected",
                t.reason = a,
                Om(t),
                t = t.next;
            while (t !== r)
        }
        e.action = null
    }
    function Om(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Lm(e, t) {
        return t
    }
    function _m(e, t) {
        if (Ee) {
            var a = _e.formState;
            if (a !== null) {
                e: {
                    var r = ge;
                    if (Ee) {
                        if (ut) {
                            t: {
                                for (var o = ut, c = on; o.nodeType !== 8; ) {
                                    if (!c) {
                                        o = null;
                                        break t
                                    }
                                    if (o = en(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break t
                                    }
                                }
                                c = o.data,
                                o = c === "F!" || c === "F" ? o : null
                            }
                            if (o) {
                                ut = en(o.nextSibling),
                                r = o.data === "F!";
                                break e
                            }
                        }
                        Ai(r)
                    }
                    r = !1
                }
                r && (t = a[0])
            }
        }
        return a = Tt(),
        a.memoizedState = a.baseState = t,
        r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Lm,
            lastRenderedState: t
        },
        a.queue = r,
        a = Jm.bind(null, ge, r),
        r.dispatch = a,
        r = Lu(!1),
        c = Nu.bind(null, ge, !1, r.queue),
        r = Tt(),
        o = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        r.queue = o,
        a = wx.bind(null, ge, o, c, a),
        o.dispatch = a,
        r.memoizedState = e,
        [t, a, !1]
    }
    function Um(e) {
        var t = Qe();
        return zm(t, Me, e)
    }
    function zm(e, t, a) {
        t = Du(e, t, Lm)[0],
        e = ol(En)[0],
        t = typeof t == "object" && t !== null && typeof t.then == "function" ? Cr(t) : t;
        var r = Qe()
          , o = r.queue
          , c = o.dispatch;
        return a !== r.memoizedState && (ge.flags |= 2048,
        wa(9, Tx.bind(null, o, a), {
            destroy: void 0
        }, null)),
        [t, c, e]
    }
    function Tx(e, t) {
        e.action = t
    }
    function km(e) {
        var t = Qe()
          , a = Me;
        if (a !== null)
            return zm(t, a, e);
        Qe(),
        t = t.memoizedState,
        a = Qe();
        var r = a.queue.dispatch;
        return a.memoizedState = e,
        [t, r, !1]
    }
    function wa(e, t, a, r) {
        return e = {
            tag: e,
            create: t,
            inst: a,
            deps: r,
            next: null
        },
        t = ge.updateQueue,
        t === null && (t = sl(),
        ge.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (r = a.next,
        a.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function Vm() {
        return Qe().memoizedState
    }
    function ul(e, t, a, r) {
        var o = Tt();
        ge.flags |= e,
        o.memoizedState = wa(1 | t, a, {
            destroy: void 0
        }, r === void 0 ? null : r)
    }
    function cl(e, t, a, r) {
        var o = Qe();
        r = r === void 0 ? null : r;
        var c = o.memoizedState.inst;
        Me !== null && r !== null && Eu(r, Me.memoizedState.deps) ? o.memoizedState = wa(t, a, c, r) : (ge.flags |= e,
        o.memoizedState = wa(1 | t, a, c, r))
    }
    function Bm(e, t) {
        ul(8390656, 8, e, t)
    }
    function Uu(e, t) {
        cl(2048, 8, e, t)
    }
    function Nm(e, t) {
        return cl(4, 2, e, t)
    }
    function Hm(e, t) {
        return cl(4, 4, e, t)
    }
    function Pm(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Gm(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        cl(4, 4, Pm.bind(null, t, e), a)
    }
    function zu() {}
    function Ym(e, t) {
        var a = Qe();
        t = t === void 0 ? null : t;
        var r = a.memoizedState;
        return t !== null && Eu(t, r[1]) ? r[0] : (a.memoizedState = [e, t],
        e)
    }
    function qm(e, t) {
        var a = Qe();
        t = t === void 0 ? null : t;
        var r = a.memoizedState;
        if (t !== null && Eu(t, r[1]))
            return r[0];
        if (r = e(),
        Mi) {
            Yn(!0);
            try {
                e()
            } finally {
                Yn(!1)
            }
        }
        return a.memoizedState = [r, t],
        r
    }
    function ku(e, t, a) {
        return a === void 0 || (Zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = Xp(),
        ge.lanes |= e,
        ri |= e,
        a)
    }
    function $m(e, t, a, r) {
        return At(a, t) ? a : ya.current !== null ? (e = ku(e, a, r),
        At(e, t) || (at = !0),
        e) : (Zn & 42) === 0 ? (at = !0,
        e.memoizedState = a) : (e = Xp(),
        ge.lanes |= e,
        ri |= e,
        t)
    }
    function Xm(e, t, a, r, o) {
        var c = J.p;
        J.p = c !== 0 && 8 > c ? c : 8;
        var g = _.T
          , x = {};
        _.T = x,
        Nu(e, !1, t, a);
        try {
            var E = o()
              , O = _.S;
            if (O !== null && O(x, E),
            E !== null && typeof E == "object" && typeof E.then == "function") {
                var q = bx(E, r);
                jr(e, t, q, Dt(e))
            } else
                jr(e, t, r, Dt(e))
        } catch (K) {
            jr(e, t, {
                then: function() {},
                status: "rejected",
                reason: K
            }, Dt())
        } finally {
            J.p = c,
            _.T = g
        }
    }
    function Ex() {}
    function Vu(e, t, a, r) {
        if (e.tag !== 5)
            throw Error(l(476));
        var o = Km(e).queue;
        Xm(e, o, t, ce, a === null ? Ex : function() {
            return Fm(e),
            a(r)
        }
        )
    }
    function Km(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: ce,
            baseState: ce,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: ce
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Fm(e) {
        var t = Km(e).next.queue;
        jr(e, t, {}, Dt())
    }
    function Bu() {
        return mt(Fr)
    }
    function Zm() {
        return Qe().memoizedState
    }
    function Qm() {
        return Qe().memoizedState
    }
    function Rx(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = Dt();
                e = In(a);
                var r = ei(t, e, a);
                r !== null && (bt(r, t, a),
                Or(r, t, a)),
                t = {
                    cache: Su()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Ax(e, t, a) {
        var r = Dt();
        a = {
            lane: r,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        fl(e) ? Wm(t, a) : (a = mu(e, t, a, r),
        a !== null && (bt(a, e, r),
        Im(a, t, r)))
    }
    function Jm(e, t, a) {
        var r = Dt();
        jr(e, t, a, r)
    }
    function jr(e, t, a, r) {
        var o = {
            lane: r,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (fl(e))
            Wm(t, o);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer,
            c !== null))
                try {
                    var g = t.lastRenderedState
                      , x = c(g, a);
                    if (o.hasEagerState = !0,
                    o.eagerState = x,
                    At(x, g))
                        return Fs(e, t, o, 0),
                        _e === null && Ks(),
                        !1
                } catch {} finally {}
            if (a = mu(e, t, o, r),
            a !== null)
                return bt(a, e, r),
                Im(a, t, r),
                !0
        }
        return !1
    }
    function Nu(e, t, a, r) {
        if (r = {
            lane: 2,
            revertLane: jc(),
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        fl(e)) {
            if (t)
                throw Error(l(479))
        } else
            t = mu(e, a, r, 2),
            t !== null && bt(t, e, 2)
    }
    function fl(e) {
        var t = e.alternate;
        return e === ge || t !== null && t === ge
    }
    function Wm(e, t) {
        xa = al = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function Im(e, t, a) {
        if ((a & 4194176) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes,
            a |= r,
            t.lanes = a,
            ch(e, a)
        }
    }
    var cn = {
        readContext: mt,
        use: ll,
        useCallback: Ke,
        useContext: Ke,
        useEffect: Ke,
        useImperativeHandle: Ke,
        useLayoutEffect: Ke,
        useInsertionEffect: Ke,
        useMemo: Ke,
        useReducer: Ke,
        useRef: Ke,
        useState: Ke,
        useDebugValue: Ke,
        useDeferredValue: Ke,
        useTransition: Ke,
        useSyncExternalStore: Ke,
        useId: Ke
    };
    cn.useCacheRefresh = Ke,
    cn.useMemoCache = Ke,
    cn.useHostTransitionStatus = Ke,
    cn.useFormState = Ke,
    cn.useActionState = Ke,
    cn.useOptimistic = Ke;
    var Di = {
        readContext: mt,
        use: ll,
        useCallback: function(e, t) {
            return Tt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: mt,
        useEffect: Bm,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            ul(4194308, 4, Pm.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return ul(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ul(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = Tt();
            t = t === void 0 ? null : t;
            var r = e();
            if (Mi) {
                Yn(!0);
                try {
                    e()
                } finally {
                    Yn(!1)
                }
            }
            return a.memoizedState = [r, t],
            r
        },
        useReducer: function(e, t, a) {
            var r = Tt();
            if (a !== void 0) {
                var o = a(t);
                if (Mi) {
                    Yn(!0);
                    try {
                        a(t)
                    } finally {
                        Yn(!1)
                    }
                }
            } else
                o = t;
            return r.memoizedState = r.baseState = o,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o
            },
            r.queue = e,
            e = e.dispatch = Ax.bind(null, ge, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Tt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Lu(e);
            var t = e.queue
              , a = Jm.bind(null, ge, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: zu,
        useDeferredValue: function(e, t) {
            var a = Tt();
            return ku(a, e, t)
        },
        useTransition: function() {
            var e = Lu(!1);
            return e = Xm.bind(null, ge, e.queue, !0, !1),
            Tt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var r = ge
              , o = Tt();
            if (Ee) {
                if (a === void 0)
                    throw Error(l(407));
                a = a()
            } else {
                if (a = t(),
                _e === null)
                    throw Error(l(349));
                (we & 60) !== 0 || wm(r, t, a)
            }
            o.memoizedState = a;
            var c = {
                value: a,
                getSnapshot: t
            };
            return o.queue = c,
            Bm(Em.bind(null, r, c, e), [e]),
            r.flags |= 2048,
            wa(9, Tm.bind(null, r, c, a, t), {
                destroy: void 0
            }, null),
            a
        },
        useId: function() {
            var e = Tt()
              , t = _e.identifierPrefix;
            if (Ee) {
                var a = wn
                  , r = Sn;
                a = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + a,
                t = ":" + t + "R" + a,
                a = rl++,
                0 < a && (t += "H" + a.toString(32)),
                t += ":"
            } else
                a = xx++,
                t = ":" + t + "r" + a.toString(32) + ":";
            return e.memoizedState = t
        },
        useCacheRefresh: function() {
            return Tt().memoizedState = Rx.bind(null, ge)
        }
    };
    Di.useMemoCache = Mu,
    Di.useHostTransitionStatus = Bu,
    Di.useFormState = _m,
    Di.useActionState = _m,
    Di.useOptimistic = function(e) {
        var t = Tt();
        t.memoizedState = t.baseState = e;
        var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
        };
        return t.queue = a,
        t = Nu.bind(null, ge, !0, a),
        a.dispatch = t,
        [e, t]
    }
    ;
    var Qn = {
        readContext: mt,
        use: ll,
        useCallback: Ym,
        useContext: mt,
        useEffect: Uu,
        useImperativeHandle: Gm,
        useInsertionEffect: Nm,
        useLayoutEffect: Hm,
        useMemo: qm,
        useReducer: ol,
        useRef: Vm,
        useState: function() {
            return ol(En)
        },
        useDebugValue: zu,
        useDeferredValue: function(e, t) {
            var a = Qe();
            return $m(a, Me.memoizedState, e, t)
        },
        useTransition: function() {
            var e = ol(En)[0]
              , t = Qe().memoizedState;
            return [typeof e == "boolean" ? e : Cr(e), t]
        },
        useSyncExternalStore: Sm,
        useId: Zm
    };
    Qn.useCacheRefresh = Qm,
    Qn.useMemoCache = Mu,
    Qn.useHostTransitionStatus = Bu,
    Qn.useFormState = Um,
    Qn.useActionState = Um,
    Qn.useOptimistic = function(e, t) {
        var a = Qe();
        return Cm(a, Me, e, t)
    }
    ;
    var Oi = {
        readContext: mt,
        use: ll,
        useCallback: Ym,
        useContext: mt,
        useEffect: Uu,
        useImperativeHandle: Gm,
        useInsertionEffect: Nm,
        useLayoutEffect: Hm,
        useMemo: qm,
        useReducer: Ou,
        useRef: Vm,
        useState: function() {
            return Ou(En)
        },
        useDebugValue: zu,
        useDeferredValue: function(e, t) {
            var a = Qe();
            return Me === null ? ku(a, e, t) : $m(a, Me.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ou(En)[0]
              , t = Qe().memoizedState;
            return [typeof e == "boolean" ? e : Cr(e), t]
        },
        useSyncExternalStore: Sm,
        useId: Zm
    };
    Oi.useCacheRefresh = Qm,
    Oi.useMemoCache = Mu,
    Oi.useHostTransitionStatus = Bu,
    Oi.useFormState = km,
    Oi.useActionState = km,
    Oi.useOptimistic = function(e, t) {
        var a = Qe();
        return Me !== null ? Cm(a, Me, e, t) : (a.baseState = e,
        [e, a.queue.dispatch])
    }
    ;
    function Hu(e, t, a, r) {
        t = e.memoizedState,
        a = a(r, t),
        a = a == null ? t : G({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var Pu = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? ee(e) === e : !1
        },
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var r = Dt()
              , o = In(r);
            o.payload = t,
            a != null && (o.callback = a),
            t = ei(e, o, r),
            t !== null && (bt(t, e, r),
            Or(t, e, r))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var r = Dt()
              , o = In(r);
            o.tag = 1,
            o.payload = t,
            a != null && (o.callback = a),
            t = ei(e, o, r),
            t !== null && (bt(t, e, r),
            Or(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = Dt()
              , r = In(a);
            r.tag = 2,
            t != null && (r.callback = t),
            t = ei(e, r, a),
            t !== null && (bt(t, e, a),
            Or(t, e, a))
        }
    };
    function ep(e, t, a, r, o, c, g) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, g) : t.prototype && t.prototype.isPureReactComponent ? !pr(a, r) || !pr(o, c) : !0
    }
    function tp(e, t, a, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r),
        t.state !== e && Pu.enqueueReplaceState(t, t.state, null)
    }
    function Li(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var r in t)
                r !== "ref" && (a[r] = t[r])
        }
        if (e = e.defaultProps) {
            a === t && (a = G({}, a));
            for (var o in e)
                a[o] === void 0 && (a[o] = e[o])
        }
        return a
    }
    var dl = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function np(e) {
        dl(e)
    }
    function ip(e) {
        console.error(e)
    }
    function ap(e) {
        dl(e)
    }
    function hl(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function rp(e, t, a) {
        try {
            var r = e.onCaughtError;
            r(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function Gu(e, t, a) {
        return a = In(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            hl(e, t)
        }
        ,
        a
    }
    function sp(e) {
        return e = In(e),
        e.tag = 3,
        e
    }
    function lp(e, t, a, r) {
        var o = a.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = r.value;
            e.payload = function() {
                return o(c)
            }
            ,
            e.callback = function() {
                rp(t, a, r)
            }
        }
        var g = a.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
            rp(t, a, r),
            typeof o != "function" && (si === null ? si = new Set([this]) : si.add(this));
            var x = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: x !== null ? x : ""
            })
        }
        )
    }
    function Cx(e, t, a, r, o) {
        if (a.flags |= 32768,
        r !== null && typeof r == "object" && typeof r.then == "function") {
            if (t = a.alternate,
            t !== null && Dr(t, a, o, !0),
            a = Ht.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return un === null ? Tc() : a.alternate === null && Ye === 0 && (Ye = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = o,
                    r === vu ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([r]) : t.add(r),
                    Rc(e, r, o)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    r === vu ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([r]) : a.add(r)),
                    Rc(e, r, o)),
                    !1
                }
                throw Error(l(435, a.tag))
            }
            return Rc(e, r, o),
            Tc(),
            !1
        }
        if (Ee)
            return t = Ht.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = o,
            r !== yu && (e = Error(l(422), {
                cause: r
            }),
            br(Vt(e, a)))) : (r !== yu && (t = Error(l(423), {
                cause: r
            }),
            br(Vt(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            o &= -o,
            e.lanes |= o,
            r = Vt(r, a),
            o = Gu(e.stateNode, r, o),
            ic(e, o),
            Ye !== 4 && (Ye = 2)),
            !1;
        var c = Error(l(520), {
            cause: r
        });
        if (c = Vt(c, a),
        Nr === null ? Nr = [c] : Nr.push(c),
        Ye !== 4 && (Ye = 2),
        t === null)
            return !0;
        r = Vt(r, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = o & -o,
                a.lanes |= e,
                e = Gu(a.stateNode, r, e),
                ic(a, e),
                !1;
            case 1:
                if (t = a.type,
                c = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (si === null || !si.has(c))))
                    return a.flags |= 65536,
                    o &= -o,
                    a.lanes |= o,
                    o = sp(o),
                    lp(o, e, a, r),
                    ic(a, o),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var op = Error(l(461))
      , at = !1;
    function ct(e, t, a, r) {
        t.child = e === null ? hm(t, null, a, r) : Ci(t, e.child, a, r)
    }
    function up(e, t, a, r, o) {
        a = a.render;
        var c = t.ref;
        if ("ref"in r) {
            var g = {};
            for (var x in r)
                x !== "ref" && (g[x] = r[x])
        } else
            g = r;
        return Ui(t),
        r = Ru(e, t, a, g, c, o),
        x = Au(),
        e !== null && !at ? (Cu(e, t, o),
        Rn(e, t, o)) : (Ee && x && pu(t),
        t.flags |= 1,
        ct(e, t, r, o),
        t.child)
    }
    function cp(e, t, a, r, o) {
        if (e === null) {
            var c = a.type;
            return typeof c == "function" && !fc(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = c,
            fp(e, t, c, r, o)) : (e = vl(a.type, null, r, t, t.mode, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (c = e.child,
        !Ju(e, o)) {
            var g = c.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : pr,
            a(g, r) && e.ref === t.ref)
                return Rn(e, t, o)
        }
        return t.flags |= 1,
        e = ai(c, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function fp(e, t, a, r, o) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (pr(c, r) && e.ref === t.ref)
                if (at = !1,
                t.pendingProps = r = c,
                Ju(e, o))
                    (e.flags & 131072) !== 0 && (at = !0);
                else
                    return t.lanes = e.lanes,
                    Rn(e, t, o)
        }
        return Yu(e, t, a, r, o)
    }
    function dp(e, t, a) {
        var r = t.pendingProps
          , o = r.children
          , c = (t.stateNode._pendingVisibility & 2) !== 0
          , g = e !== null ? e.memoizedState : null;
        if (Mr(e, t),
        r.mode === "hidden" || c) {
            if ((t.flags & 128) !== 0) {
                if (r = g !== null ? g.baseLanes | a : a,
                e !== null) {
                    for (o = t.child = e.child,
                    c = 0; o !== null; )
                        c = c | o.lanes | o.childLanes,
                        o = o.sibling;
                    t.childLanes = c & ~r
                } else
                    t.childLanes = 0,
                    t.child = null;
                return hp(e, t, r, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && il(t, g !== null ? g.cachePool : null),
                g !== null ? mm(t, g) : bu(),
                pm(t);
            else
                return t.lanes = t.childLanes = 536870912,
                hp(e, t, g !== null ? g.baseLanes | a : a, a)
        } else
            g !== null ? (il(t, g.cachePool),
            mm(t, g),
            Fn(),
            t.memoizedState = null) : (e !== null && il(t, null),
            bu(),
            Fn());
        return ct(e, t, o, a),
        t.child
    }
    function hp(e, t, a, r) {
        var o = Tu();
        return o = o === null ? null : {
            parent: tt._currentValue,
            pool: o
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: o
        },
        e !== null && il(t, null),
        bu(),
        pm(t),
        e !== null && Dr(e, t, r, !0),
        null
    }
    function Mr(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(l(284));
            (e === null || e.ref !== a) && (t.flags |= 2097664)
        }
    }
    function Yu(e, t, a, r, o) {
        return Ui(t),
        a = Ru(e, t, a, r, void 0, o),
        r = Au(),
        e !== null && !at ? (Cu(e, t, o),
        Rn(e, t, o)) : (Ee && r && pu(t),
        t.flags |= 1,
        ct(e, t, a, o),
        t.child)
    }
    function mp(e, t, a, r, o, c) {
        return Ui(t),
        t.updateQueue = null,
        a = xm(t, r, a, o),
        bm(e),
        r = Au(),
        e !== null && !at ? (Cu(e, t, c),
        Rn(e, t, c)) : (Ee && r && pu(t),
        t.flags |= 1,
        ct(e, t, a, c),
        t.child)
    }
    function pp(e, t, a, r, o) {
        if (Ui(t),
        t.stateNode === null) {
            var c = ha
              , g = a.contextType;
            typeof g == "object" && g !== null && (c = mt(g)),
            c = new a(r,c),
            t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Pu,
            t.stateNode = c,
            c._reactInternals = t,
            c = t.stateNode,
            c.props = r,
            c.state = t.memoizedState,
            c.refs = {},
            tc(t),
            g = a.contextType,
            c.context = typeof g == "object" && g !== null ? mt(g) : ha,
            c.state = t.memoizedState,
            g = a.getDerivedStateFromProps,
            typeof g == "function" && (Hu(t, a, g, r),
            c.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            g !== c.state && Pu.enqueueReplaceState(c, c.state, null),
            _r(t, r, c, o),
            Lr(),
            c.state = t.memoizedState),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            r = !0
        } else if (e === null) {
            c = t.stateNode;
            var x = t.memoizedProps
              , E = Li(a, x);
            c.props = E;
            var O = c.context
              , q = a.contextType;
            g = ha,
            typeof q == "object" && q !== null && (g = mt(q));
            var K = a.getDerivedStateFromProps;
            q = typeof K == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            x = t.pendingProps !== x,
            q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (x || O !== g) && tp(t, c, r, g),
            Wn = !1;
            var B = t.memoizedState;
            c.state = B,
            _r(t, r, c, o),
            Lr(),
            O = t.memoizedState,
            x || B !== O || Wn ? (typeof K == "function" && (Hu(t, a, K, r),
            O = t.memoizedState),
            (E = Wn || ep(t, a, E, r, B, O, g)) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = O),
            c.props = r,
            c.state = O,
            c.context = g,
            r = E) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            r = !1)
        } else {
            c = t.stateNode,
            nc(e, t),
            g = t.memoizedProps,
            q = Li(a, g),
            c.props = q,
            K = t.pendingProps,
            B = c.context,
            O = a.contextType,
            E = ha,
            typeof O == "object" && O !== null && (E = mt(O)),
            x = a.getDerivedStateFromProps,
            (O = typeof x == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== K || B !== E) && tp(t, c, r, E),
            Wn = !1,
            B = t.memoizedState,
            c.state = B,
            _r(t, r, c, o),
            Lr();
            var Y = t.memoizedState;
            g !== K || B !== Y || Wn || e !== null && e.dependencies !== null && ml(e.dependencies) ? (typeof x == "function" && (Hu(t, a, x, r),
            Y = t.memoizedState),
            (q = Wn || ep(t, a, q, r, B, Y, E) || e !== null && e.dependencies !== null && ml(e.dependencies)) ? (O || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, Y, E),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, Y, E)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = Y),
            c.props = r,
            c.state = Y,
            c.context = E,
            r = q) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return c = r,
        Mr(e, t),
        r = (t.flags & 128) !== 0,
        c || r ? (c = t.stateNode,
        a = r && typeof a.getDerivedStateFromError != "function" ? null : c.render(),
        t.flags |= 1,
        e !== null && r ? (t.child = Ci(t, e.child, null, o),
        t.child = Ci(t, null, a, o)) : ct(e, t, a, o),
        t.memoizedState = c.state,
        e = t.child) : e = Rn(e, t, o),
        e
    }
    function gp(e, t, a, r) {
        return vr(),
        t.flags |= 256,
        ct(e, t, a, r),
        t.child
    }
    var qu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function $u(e) {
        return {
            baseLanes: e,
            cachePool: vm()
        }
    }
    function Xu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= qt),
        e
    }
    function yp(e, t, a) {
        var r = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, g;
        if ((g = c) || (g = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0),
        g && (o = !0,
        t.flags &= -129),
        g = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Ee) {
                if (o ? Kn(t) : Fn(),
                Ee) {
                    var x = ut, E;
                    if (E = x) {
                        e: {
                            for (E = x,
                            x = on; E.nodeType !== 8; ) {
                                if (!x) {
                                    x = null;
                                    break e
                                }
                                if (E = en(E.nextSibling),
                                E === null) {
                                    x = null;
                                    break e
                                }
                            }
                            x = E
                        }
                        x !== null ? (t.memoizedState = {
                            dehydrated: x,
                            treeContext: Ei !== null ? {
                                id: Sn,
                                overflow: wn
                            } : null,
                            retryLane: 536870912
                        },
                        E = Yt(18, null, null, 0),
                        E.stateNode = x,
                        E.return = t,
                        t.child = E,
                        vt = t,
                        ut = null,
                        E = !0) : E = !1
                    }
                    E || Ai(t)
                }
                if (x = t.memoizedState,
                x !== null && (x = x.dehydrated,
                x !== null))
                    return x.data === "$!" ? t.lanes = 16 : t.lanes = 536870912,
                    null;
                Tn(t)
            }
            return x = r.children,
            r = r.fallback,
            o ? (Fn(),
            o = t.mode,
            x = Fu({
                mode: "hidden",
                children: x
            }, o),
            r = ki(r, o, a, null),
            x.return = t,
            r.return = t,
            x.sibling = r,
            t.child = x,
            o = t.child,
            o.memoizedState = $u(a),
            o.childLanes = Xu(e, g, a),
            t.memoizedState = qu,
            r) : (Kn(t),
            Ku(t, x))
        }
        if (E = e.memoizedState,
        E !== null && (x = E.dehydrated,
        x !== null)) {
            if (c)
                t.flags & 256 ? (Kn(t),
                t.flags &= -257,
                t = Zu(e, t, a)) : t.memoizedState !== null ? (Fn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Fn(),
                o = r.fallback,
                x = t.mode,
                r = Fu({
                    mode: "visible",
                    children: r.children
                }, x),
                o = ki(o, x, a, null),
                o.flags |= 2,
                r.return = t,
                o.return = t,
                r.sibling = o,
                t.child = r,
                Ci(t, e.child, null, a),
                r = t.child,
                r.memoizedState = $u(a),
                r.childLanes = Xu(e, g, a),
                t.memoizedState = qu,
                t = o);
            else if (Kn(t),
            x.data === "$!") {
                if (g = x.nextSibling && x.nextSibling.dataset,
                g)
                    var O = g.dgst;
                g = O,
                r = Error(l(419)),
                r.stack = "",
                r.digest = g,
                br({
                    value: r,
                    source: null,
                    stack: null
                }),
                t = Zu(e, t, a)
            } else if (at || Dr(e, t, a, !1),
            g = (a & e.childLanes) !== 0,
            at || g) {
                if (g = _e,
                g !== null) {
                    if (r = a & -a,
                    (r & 42) !== 0)
                        r = 1;
                    else
                        switch (r) {
                        case 2:
                            r = 1;
                            break;
                        case 8:
                            r = 4;
                            break;
                        case 32:
                            r = 16;
                            break;
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            r = 64;
                            break;
                        case 268435456:
                            r = 134217728;
                            break;
                        default:
                            r = 0
                        }
                    if (r = (r & (g.suspendedLanes | a)) !== 0 ? 0 : r,
                    r !== 0 && r !== E.retryLane)
                        throw E.retryLane = r,
                        Xn(e, r),
                        bt(g, e, r),
                        op
                }
                x.data === "$?" || Tc(),
                t = Zu(e, t, a)
            } else
                x.data === "$?" ? (t.flags |= 128,
                t.child = e.child,
                t = Gx.bind(null, e),
                x._reactRetry = t,
                t = null) : (e = E.treeContext,
                ut = en(x.nextSibling),
                vt = t,
                Ee = !0,
                Wt = null,
                on = !1,
                e !== null && (Bt[Nt++] = Sn,
                Bt[Nt++] = wn,
                Bt[Nt++] = Ei,
                Sn = e.id,
                wn = e.overflow,
                Ei = t),
                t = Ku(t, r.children),
                t.flags |= 4096);
            return t
        }
        return o ? (Fn(),
        o = r.fallback,
        x = t.mode,
        E = e.child,
        O = E.sibling,
        r = ai(E, {
            mode: "hidden",
            children: r.children
        }),
        r.subtreeFlags = E.subtreeFlags & 31457280,
        O !== null ? o = ai(O, o) : (o = ki(o, x, a, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        x = e.child.memoizedState,
        x === null ? x = $u(a) : (E = x.cachePool,
        E !== null ? (O = tt._currentValue,
        E = E.parent !== O ? {
            parent: O,
            pool: O
        } : E) : E = vm(),
        x = {
            baseLanes: x.baseLanes | a,
            cachePool: E
        }),
        o.memoizedState = x,
        o.childLanes = Xu(e, g, a),
        t.memoizedState = qu,
        r) : (Kn(t),
        a = e.child,
        e = a.sibling,
        a = ai(a, {
            mode: "visible",
            children: r.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (g = t.deletions,
        g === null ? (t.deletions = [e],
        t.flags |= 16) : g.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function Ku(e, t) {
        return t = Fu({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Fu(e, t) {
        return Yp(e, t, 0, null)
    }
    function Zu(e, t, a) {
        return Ci(t, e.child, null, a),
        e = Ku(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function vp(e, t, a) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        Iu(e.return, t, a)
    }
    function Qu(e, t, a, r, o) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: a,
            tailMode: o
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = r,
        c.tail = a,
        c.tailMode = o)
    }
    function bp(e, t, a) {
        var r = t.pendingProps
          , o = r.revealOrder
          , c = r.tail;
        if (ct(e, t, r.children, a),
        r = et.current,
        (r & 2) !== 0)
            r = r & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && vp(e, a, t);
                    else if (e.tag === 19)
                        vp(e, a, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        switch (Se(et, r),
        o) {
        case "forwards":
            for (a = t.child,
            o = null; a !== null; )
                e = a.alternate,
                e !== null && nl(e) === null && (o = a),
                a = a.sibling;
            a = o,
            a === null ? (o = t.child,
            t.child = null) : (o = a.sibling,
            a.sibling = null),
            Qu(t, !1, o, a, c);
            break;
        case "backwards":
            for (a = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && nl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = a,
                a = o,
                o = e
            }
            Qu(t, !0, a, null, c);
            break;
        case "together":
            Qu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Rn(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        ri |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (Dr(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(l(153));
        if (t.child !== null) {
            for (e = t.child,
            a = ai(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = ai(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function Ju(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && ml(e)))
    }
    function jx(e, t, a) {
        switch (t.tag) {
        case 3:
            vn(t, t.stateNode.containerInfo),
            Jn(t, tt, e.memoizedState.cache),
            vr();
            break;
        case 27:
        case 5:
            Po(t);
            break;
        case 4:
            vn(t, t.stateNode.containerInfo);
            break;
        case 10:
            Jn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var r = t.memoizedState;
            if (r !== null)
                return r.dehydrated !== null ? (Kn(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? yp(e, t, a) : (Kn(t),
                e = Rn(e, t, a),
                e !== null ? e.sibling : null);
            Kn(t);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (r = (a & t.childLanes) !== 0,
            r || (Dr(e, t, a, !1),
            r = (a & t.childLanes) !== 0),
            o) {
                if (r)
                    return bp(e, t, a);
                t.flags |= 128
            }
            if (o = t.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            Se(et, et.current),
            r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            dp(e, t, a);
        case 24:
            Jn(t, tt, e.memoizedState.cache)
        }
        return Rn(e, t, a)
    }
    function xp(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                at = !0;
            else {
                if (!Ju(e, a) && (t.flags & 128) === 0)
                    return at = !1,
                    jx(e, t, a);
                at = (e.flags & 131072) !== 0
            }
        else
            at = !1,
            Ee && (t.flags & 1048576) !== 0 && am(t, Js, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var r = t.elementType
                  , o = r._init;
                if (r = o(r._payload),
                t.type = r,
                typeof r == "function")
                    fc(r) ? (e = Li(r, e),
                    t.tag = 1,
                    t = pp(null, t, r, e, a)) : (t.tag = 0,
                    t = Yu(null, t, r, e, a));
                else {
                    if (r != null) {
                        if (o = r.$$typeof,
                        o === w) {
                            t.tag = 11,
                            t = up(null, t, r, e, a);
                            break e
                        } else if (o === A) {
                            t.tag = 14,
                            t = cp(null, t, r, e, a);
                            break e
                        }
                    }
                    throw t = P(r) || r,
                    Error(l(306, t, ""))
                }
            }
            return t;
        case 0:
            return Yu(e, t, t.type, t.pendingProps, a);
        case 1:
            return r = t.type,
            o = Li(r, t.pendingProps),
            pp(e, t, r, o, a);
        case 3:
            e: {
                if (vn(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(l(387));
                var c = t.pendingProps;
                o = t.memoizedState,
                r = o.element,
                nc(e, t),
                _r(t, c, null, a);
                var g = t.memoizedState;
                if (c = g.cache,
                Jn(t, tt, c),
                c !== o.cache && ec(t, [tt], a, !0),
                Lr(),
                c = g.element,
                o.isDehydrated)
                    if (o = {
                        element: c,
                        isDehydrated: !1,
                        cache: g.cache
                    },
                    t.updateQueue.baseState = o,
                    t.memoizedState = o,
                    t.flags & 256) {
                        t = gp(e, t, c, a);
                        break e
                    } else if (c !== r) {
                        r = Vt(Error(l(424)), t),
                        br(r),
                        t = gp(e, t, c, a);
                        break e
                    } else
                        for (ut = en(t.stateNode.containerInfo.firstChild),
                        vt = t,
                        Ee = !0,
                        Wt = null,
                        on = !0,
                        a = hm(t, null, c, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (vr(),
                    c === r) {
                        t = Rn(e, t, a);
                        break e
                    }
                    ct(e, t, c, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return Mr(e, t),
            e === null ? (a = Tg(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : Ee || (a = t.type,
            e = t.pendingProps,
            r = Dl(Ie.current).createElement(a),
            r[ht] = t,
            r[St] = e,
            ft(r, a, e),
            it(r),
            t.stateNode = r) : t.memoizedState = Tg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Po(t),
            e === null && Ee && (r = t.stateNode = xg(t.type, t.pendingProps, Ie.current),
            vt = t,
            on = !0,
            ut = en(r.firstChild)),
            r = t.pendingProps.children,
            e !== null || Ee ? ct(e, t, r, a) : t.child = Ci(t, null, r, a),
            Mr(e, t),
            t.child;
        case 5:
            return e === null && Ee && ((o = r = ut) && (r = aS(r, t.type, t.pendingProps, on),
            r !== null ? (t.stateNode = r,
            vt = t,
            ut = en(r.firstChild),
            on = !1,
            o = !0) : o = !1),
            o || Ai(t)),
            Po(t),
            o = t.type,
            c = t.pendingProps,
            g = e !== null ? e.memoizedProps : null,
            r = c.children,
            Vc(o, c) ? r = null : g !== null && Vc(o, g) && (t.flags |= 32),
            t.memoizedState !== null && (o = Ru(e, t, Sx, null, null, a),
            Fr._currentValue = o),
            Mr(e, t),
            ct(e, t, r, a),
            t.child;
        case 6:
            return e === null && Ee && ((e = a = ut) && (a = rS(a, t.pendingProps, on),
            a !== null ? (t.stateNode = a,
            vt = t,
            ut = null,
            e = !0) : e = !1),
            e || Ai(t)),
            null;
        case 13:
            return yp(e, t, a);
        case 4:
            return vn(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = Ci(t, null, r, a) : ct(e, t, r, a),
            t.child;
        case 11:
            return up(e, t, t.type, t.pendingProps, a);
        case 7:
            return ct(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return ct(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return ct(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return r = t.pendingProps,
            Jn(t, t.type, r.value),
            ct(e, t, r.children, a),
            t.child;
        case 9:
            return o = t.type._context,
            r = t.pendingProps.children,
            Ui(t),
            o = mt(o),
            r = r(o),
            t.flags |= 1,
            ct(e, t, r, a),
            t.child;
        case 14:
            return cp(e, t, t.type, t.pendingProps, a);
        case 15:
            return fp(e, t, t.type, t.pendingProps, a);
        case 19:
            return bp(e, t, a);
        case 22:
            return dp(e, t, a);
        case 24:
            return Ui(t),
            r = mt(tt),
            e === null ? (o = Tu(),
            o === null && (o = _e,
            c = Su(),
            o.pooledCache = c,
            c.refCount++,
            c !== null && (o.pooledCacheLanes |= a),
            o = c),
            t.memoizedState = {
                parent: r,
                cache: o
            },
            tc(t),
            Jn(t, tt, o)) : ((e.lanes & a) !== 0 && (nc(e, t),
            _r(t, null, null, a),
            Lr()),
            o = e.memoizedState,
            c = t.memoizedState,
            o.parent !== r ? (o = {
                parent: r,
                cache: r
            },
            t.memoizedState = o,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o),
            Jn(t, tt, r)) : (r = c.cache,
            Jn(t, tt, r),
            r !== o.cache && ec(t, [tt], a, !0))),
            ct(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(l(156, t.tag))
    }
    var Wu = fe(null)
      , _i = null
      , An = null;
    function Jn(e, t, a) {
        Se(Wu, t._currentValue),
        t._currentValue = a
    }
    function Cn(e) {
        e._currentValue = Wu.current,
        ye(Wu)
    }
    function Iu(e, t, a) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function ec(e, t, a, r) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
            var c = o.dependencies;
            if (c !== null) {
                var g = o.child;
                c = c.firstContext;
                e: for (; c !== null; ) {
                    var x = c;
                    c = o;
                    for (var E = 0; E < t.length; E++)
                        if (x.context === t[E]) {
                            c.lanes |= a,
                            x = c.alternate,
                            x !== null && (x.lanes |= a),
                            Iu(c.return, a, e),
                            r || (g = null);
                            break e
                        }
                    c = x.next
                }
            } else if (o.tag === 18) {
                if (g = o.return,
                g === null)
                    throw Error(l(341));
                g.lanes |= a,
                c = g.alternate,
                c !== null && (c.lanes |= a),
                Iu(g, a, e),
                g = null
            } else
                g = o.child;
            if (g !== null)
                g.return = o;
            else
                for (g = o; g !== null; ) {
                    if (g === e) {
                        g = null;
                        break
                    }
                    if (o = g.sibling,
                    o !== null) {
                        o.return = g.return,
                        g = o;
                        break
                    }
                    g = g.return
                }
            o = g
        }
    }
    function Dr(e, t, a, r) {
        e = null;
        for (var o = t, c = !1; o !== null; ) {
            if (!c) {
                if ((o.flags & 524288) !== 0)
                    c = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var g = o.alternate;
                if (g === null)
                    throw Error(l(387));
                if (g = g.memoizedProps,
                g !== null) {
                    var x = o.type;
                    At(o.pendingProps.value, g.value) || (e !== null ? e.push(x) : e = [x])
                }
            } else if (o === sn.current) {
                if (g = o.alternate,
                g === null)
                    throw Error(l(387));
                g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Fr) : e = [Fr])
            }
            o = o.return
        }
        e !== null && ec(t, e, a, r),
        t.flags |= 262144
    }
    function ml(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!At(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ui(e) {
        _i = e,
        An = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function mt(e) {
        return Sp(_i, e)
    }
    function pl(e, t) {
        return _i === null && Ui(e),
        Sp(e, t)
    }
    function Sp(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        An === null) {
            if (e === null)
                throw Error(l(308));
            An = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            An = An.next = t;
        return a
    }
    var Wn = !1;
    function tc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function nc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function In(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ei(e, t, a) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        (Ne & 2) !== 0) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            r.pending = t,
            t = Zs(e),
            nm(e, null, a),
            t
        }
        return Fs(e, r, t, a),
        Zs(e)
    }
    function Or(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194176) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            a |= r,
            t.lanes = a,
            ch(e, a)
        }
    }
    function ic(e, t) {
        var a = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        a === r)) {
            var o = null
              , c = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var g = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? o = c = g : c = c.next = g,
                    a = a.next
                } while (a !== null);
                c === null ? o = c = t : c = c.next = t
            } else
                o = c = t;
            a = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: r.shared,
                callbacks: r.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var ac = !1;
    function Lr() {
        if (ac) {
            var e = ba;
            if (e !== null)
                throw e
        }
    }
    function _r(e, t, a, r) {
        ac = !1;
        var o = e.updateQueue;
        Wn = !1;
        var c = o.firstBaseUpdate
          , g = o.lastBaseUpdate
          , x = o.shared.pending;
        if (x !== null) {
            o.shared.pending = null;
            var E = x
              , O = E.next;
            E.next = null,
            g === null ? c = O : g.next = O,
            g = E;
            var q = e.alternate;
            q !== null && (q = q.updateQueue,
            x = q.lastBaseUpdate,
            x !== g && (x === null ? q.firstBaseUpdate = O : x.next = O,
            q.lastBaseUpdate = E))
        }
        if (c !== null) {
            var K = o.baseState;
            g = 0,
            q = O = E = null,
            x = c;
            do {
                var B = x.lane & -536870913
                  , Y = B !== x.lane;
                if (Y ? (we & B) === B : (r & B) === B) {
                    B !== 0 && B === va && (ac = !0),
                    q !== null && (q = q.next = {
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ae = e
                          , de = x;
                        B = t;
                        var qe = a;
                        switch (de.tag) {
                        case 1:
                            if (ae = de.payload,
                            typeof ae == "function") {
                                K = ae.call(qe, K, B);
                                break e
                            }
                            K = ae;
                            break e;
                        case 3:
                            ae.flags = ae.flags & -65537 | 128;
                        case 0:
                            if (ae = de.payload,
                            B = typeof ae == "function" ? ae.call(qe, K, B) : ae,
                            B == null)
                                break e;
                            K = G({}, K, B);
                            break e;
                        case 2:
                            Wn = !0
                        }
                    }
                    B = x.callback,
                    B !== null && (e.flags |= 64,
                    Y && (e.flags |= 8192),
                    Y = o.callbacks,
                    Y === null ? o.callbacks = [B] : Y.push(B))
                } else
                    Y = {
                        lane: B,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    },
                    q === null ? (O = q = Y,
                    E = K) : q = q.next = Y,
                    g |= B;
                if (x = x.next,
                x === null) {
                    if (x = o.shared.pending,
                    x === null)
                        break;
                    Y = x,
                    x = Y.next,
                    Y.next = null,
                    o.lastBaseUpdate = Y,
                    o.shared.pending = null
                }
            } while (!0);
            q === null && (E = K),
            o.baseState = E,
            o.firstBaseUpdate = O,
            o.lastBaseUpdate = q,
            c === null && (o.shared.lanes = 0),
            ri |= g,
            e.lanes = g,
            e.memoizedState = K
        }
    }
    function wp(e, t) {
        if (typeof e != "function")
            throw Error(l(191, e));
        e.call(t)
    }
    function Tp(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                wp(a[e], t)
    }
    function Ur(e, t) {
        try {
            var a = t.updateQueue
              , r = a !== null ? a.lastEffect : null;
            if (r !== null) {
                var o = r.next;
                a = o;
                do {
                    if ((a.tag & e) === e) {
                        r = void 0;
                        var c = a.create
                          , g = a.inst;
                        r = c(),
                        g.destroy = r
                    }
                    a = a.next
                } while (a !== o)
            }
        } catch (x) {
            Le(t, t.return, x)
        }
    }
    function ti(e, t, a) {
        try {
            var r = t.updateQueue
              , o = r !== null ? r.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                r = c;
                do {
                    if ((r.tag & e) === e) {
                        var g = r.inst
                          , x = g.destroy;
                        if (x !== void 0) {
                            g.destroy = void 0,
                            o = t;
                            var E = a;
                            try {
                                x()
                            } catch (O) {
                                Le(o, E, O)
                            }
                        }
                    }
                    r = r.next
                } while (r !== c)
            }
        } catch (O) {
            Le(t, t.return, O)
        }
    }
    function Ep(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Tp(t, a)
            } catch (r) {
                Le(e, e.return, r)
            }
        }
    }
    function Rp(e, t, a) {
        a.props = Li(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (r) {
            Le(e, t, r)
        }
    }
    function zi(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                var r = e.stateNode;
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var o = r;
                    break;
                default:
                    o = r
                }
                typeof a == "function" ? e.refCleanup = a(o) : a.current = o
            }
        } catch (c) {
            Le(e, t, c)
        }
    }
    function Ct(e, t) {
        var a = e.ref
          , r = e.refCleanup;
        if (a !== null)
            if (typeof r == "function")
                try {
                    r()
                } catch (o) {
                    Le(e, t, o)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (o) {
                    Le(e, t, o)
                }
            else
                a.current = null
    }
    function Ap(e) {
        var t = e.type
          , a = e.memoizedProps
          , r = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && r.focus();
                break e;
            case "img":
                a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet)
            }
        } catch (o) {
            Le(e, e.return, o)
        }
    }
    function Cp(e, t, a) {
        try {
            var r = e.stateNode;
            Ix(r, e.type, a, t),
            r[St] = t
        } catch (o) {
            Le(e, e.return, o)
        }
    }
    function jp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    }
    function rc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || jp(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function sc(e, t, a) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? a.nodeType === 8 ? a.parentNode.insertBefore(e, t) : a.insertBefore(e, t) : (a.nodeType === 8 ? (t = a.parentNode,
            t.insertBefore(e, a)) : (t = a,
            t.appendChild(e)),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = Ml));
        else if (r !== 4 && r !== 27 && (e = e.child,
        e !== null))
            for (sc(e, t, a),
            e = e.sibling; e !== null; )
                sc(e, t, a),
                e = e.sibling
    }
    function gl(e, t, a) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (r !== 4 && r !== 27 && (e = e.child,
        e !== null))
            for (gl(e, t, a),
            e = e.sibling; e !== null; )
                gl(e, t, a),
                e = e.sibling
    }
    var jn = !1
      , Ge = !1
      , lc = !1
      , Mp = typeof WeakSet == "function" ? WeakSet : Set
      , rt = null
      , Dp = !1;
    function Mx(e, t) {
        if (e = e.containerInfo,
        zc = kl,
        e = Kh(e),
        uu(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var r = a.getSelection && a.getSelection();
                    if (r && r.rangeCount !== 0) {
                        a = r.anchorNode;
                        var o = r.anchorOffset
                          , c = r.focusNode;
                        r = r.focusOffset;
                        try {
                            a.nodeType,
                            c.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var g = 0
                          , x = -1
                          , E = -1
                          , O = 0
                          , q = 0
                          , K = e
                          , B = null;
                        t: for (; ; ) {
                            for (var Y; K !== a || o !== 0 && K.nodeType !== 3 || (x = g + o),
                            K !== c || r !== 0 && K.nodeType !== 3 || (E = g + r),
                            K.nodeType === 3 && (g += K.nodeValue.length),
                            (Y = K.firstChild) !== null; )
                                B = K,
                                K = Y;
                            for (; ; ) {
                                if (K === e)
                                    break t;
                                if (B === a && ++O === o && (x = g),
                                B === c && ++q === r && (E = g),
                                (Y = K.nextSibling) !== null)
                                    break;
                                K = B,
                                B = K.parentNode
                            }
                            K = Y
                        }
                        a = x === -1 || E === -1 ? null : {
                            start: x,
                            end: E
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (kc = {
            focusedElem: e,
            selectionRange: a
        },
        kl = !1,
        rt = t; rt !== null; )
            if (t = rt,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                rt = e;
            else
                for (; rt !== null; ) {
                    switch (t = rt,
                    c = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0,
                            a = t,
                            o = c.memoizedProps,
                            c = c.memoizedState,
                            r = a.stateNode;
                            try {
                                var ae = Li(a.type, o, a.elementType === a.type);
                                e = r.getSnapshotBeforeUpdate(ae, c),
                                r.__reactInternalSnapshotBeforeUpdate = e
                            } catch (de) {
                                Le(a, a.return, de)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                Hc(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Hc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(l(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        rt = e;
                        break
                    }
                    rt = t.return
                }
        return ae = Dp,
        Dp = !1,
        ae
    }
    function Op(e, t, a) {
        var r = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Dn(e, a),
            r & 4 && Ur(5, a);
            break;
        case 1:
            if (Dn(e, a),
            r & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (x) {
                        Le(a, a.return, x)
                    }
                else {
                    var o = Li(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (x) {
                        Le(a, a.return, x)
                    }
                }
            r & 64 && Ep(a),
            r & 512 && zi(a, a.return);
            break;
        case 3:
            if (Dn(e, a),
            r & 64 && (r = a.updateQueue,
            r !== null)) {
                if (e = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        e = a.child.stateNode;
                        break;
                    case 1:
                        e = a.child.stateNode
                    }
                try {
                    Tp(r, e)
                } catch (x) {
                    Le(a, a.return, x)
                }
            }
            break;
        case 26:
            Dn(e, a),
            r & 512 && zi(a, a.return);
            break;
        case 27:
        case 5:
            Dn(e, a),
            t === null && r & 4 && Ap(a),
            r & 512 && zi(a, a.return);
            break;
        case 12:
            Dn(e, a);
            break;
        case 13:
            Dn(e, a),
            r & 4 && Up(e, a);
            break;
        case 22:
            if (o = a.memoizedState !== null || jn,
            !o) {
                t = t !== null && t.memoizedState !== null || Ge;
                var c = jn
                  , g = Ge;
                jn = o,
                (Ge = t) && !g ? ni(e, a, (a.subtreeFlags & 8772) !== 0) : Dn(e, a),
                jn = c,
                Ge = g
            }
            r & 512 && (a.memoizedProps.mode === "manual" ? zi(a, a.return) : Ct(a, a.return));
            break;
        default:
            Dn(e, a)
        }
    }
    function Lp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Lp(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Ko(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Je = null
      , jt = !1;
    function Mn(e, t, a) {
        for (a = a.child; a !== null; )
            _p(e, t, a),
            a = a.sibling
    }
    function _p(e, t, a) {
        if (Et && typeof Et.onCommitFiberUnmount == "function")
            try {
                Et.onCommitFiberUnmount(ir, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Ge || Ct(a, t),
            Mn(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Ge || Ct(a, t);
            var r = Je
              , o = jt;
            for (Je = a.stateNode,
            Mn(e, t, a),
            a = a.stateNode,
            t = a.attributes; t.length; )
                a.removeAttributeNode(t[0]);
            Ko(a),
            Je = r,
            jt = o;
            break;
        case 5:
            Ge || Ct(a, t);
        case 6:
            o = Je;
            var c = jt;
            if (Je = null,
            Mn(e, t, a),
            Je = o,
            jt = c,
            Je !== null)
                if (jt)
                    try {
                        e = Je,
                        r = a.stateNode,
                        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)
                    } catch (g) {
                        Le(a, t, g)
                    }
                else
                    try {
                        Je.removeChild(a.stateNode)
                    } catch (g) {
                        Le(a, t, g)
                    }
            break;
        case 18:
            Je !== null && (jt ? (t = Je,
            a = a.stateNode,
            t.nodeType === 8 ? Nc(t.parentNode, a) : t.nodeType === 1 && Nc(t, a),
            Wr(t)) : Nc(Je, a.stateNode));
            break;
        case 4:
            r = Je,
            o = jt,
            Je = a.stateNode.containerInfo,
            jt = !0,
            Mn(e, t, a),
            Je = r,
            jt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ge || ti(2, a, t),
            Ge || ti(4, a, t),
            Mn(e, t, a);
            break;
        case 1:
            Ge || (Ct(a, t),
            r = a.stateNode,
            typeof r.componentWillUnmount == "function" && Rp(a, t, r)),
            Mn(e, t, a);
            break;
        case 21:
            Mn(e, t, a);
            break;
        case 22:
            Ge || Ct(a, t),
            Ge = (r = Ge) || a.memoizedState !== null,
            Mn(e, t, a),
            Ge = r;
            break;
        default:
            Mn(e, t, a)
        }
    }
    function Up(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Wr(e)
            } catch (a) {
                Le(t, t.return, a)
            }
    }
    function Dx(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Mp),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Mp),
            t;
        default:
            throw Error(l(435, e.tag))
        }
    }
    function oc(e, t) {
        var a = Dx(e);
        t.forEach(function(r) {
            var o = Yx.bind(null, e, r);
            a.has(r) || (a.add(r),
            r.then(o, o))
        })
    }
    function Pt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var r = 0; r < a.length; r++) {
                var o = a[r]
                  , c = e
                  , g = t
                  , x = g;
                e: for (; x !== null; ) {
                    switch (x.tag) {
                    case 27:
                    case 5:
                        Je = x.stateNode,
                        jt = !1;
                        break e;
                    case 3:
                        Je = x.stateNode.containerInfo,
                        jt = !0;
                        break e;
                    case 4:
                        Je = x.stateNode.containerInfo,
                        jt = !0;
                        break e
                    }
                    x = x.return
                }
                if (Je === null)
                    throw Error(l(160));
                _p(c, g, o),
                Je = null,
                jt = !1,
                c = o.alternate,
                c !== null && (c.return = null),
                o.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                zp(t, e),
                t = t.sibling
    }
    var It = null;
    function zp(e, t) {
        var a = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Pt(t, e),
            Gt(e),
            r & 4 && (ti(3, e, e.return),
            Ur(3, e),
            ti(5, e, e.return));
            break;
        case 1:
            Pt(t, e),
            Gt(e),
            r & 512 && (Ge || a === null || Ct(a, a.return)),
            r & 64 && jn && (e = e.updateQueue,
            e !== null && (r = e.callbacks,
            r !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
            break;
        case 26:
            var o = It;
            if (Pt(t, e),
            Gt(e),
            r & 512 && (Ge || a === null || Ct(a, a.return)),
            r & 4) {
                var c = a !== null ? a.memoizedState : null;
                if (r = e.memoizedState,
                a === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            e: {
                                r = e.type,
                                a = e.memoizedProps,
                                o = o.ownerDocument || o;
                                t: switch (r) {
                                case "title":
                                    c = o.getElementsByTagName("title")[0],
                                    (!c || c[sr] || c[ht] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(r),
                                    o.head.insertBefore(c, o.querySelector("head > title"))),
                                    ft(c, r, a),
                                    c[ht] = e,
                                    it(c),
                                    r = c;
                                    break e;
                                case "link":
                                    var g = Ag("link", "href", o).get(r + (a.href || ""));
                                    if (g) {
                                        for (var x = 0; x < g.length; x++)
                                            if (c = g[x],
                                            c.getAttribute("href") === (a.href == null ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                g.splice(x, 1);
                                                break t
                                            }
                                    }
                                    c = o.createElement(r),
                                    ft(c, r, a),
                                    o.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (g = Ag("meta", "content", o).get(r + (a.content || ""))) {
                                        for (x = 0; x < g.length; x++)
                                            if (c = g[x],
                                            c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                g.splice(x, 1);
                                                break t
                                            }
                                    }
                                    c = o.createElement(r),
                                    ft(c, r, a),
                                    o.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(l(468, r))
                                }
                                c[ht] = e,
                                it(c),
                                r = c
                            }
                            e.stateNode = r
                        } else
                            Cg(o, e.type, e.stateNode);
                    else
                        e.stateNode = Rg(o, r, e.memoizedProps);
                else
                    c !== r ? (c === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : c.count--,
                    r === null ? Cg(o, e.type, e.stateNode) : Rg(o, r, e.memoizedProps)) : r === null && e.stateNode !== null && Cp(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            if (r & 4 && e.alternate === null) {
                o = e.stateNode,
                c = e.memoizedProps;
                try {
                    for (var E = o.firstChild; E; ) {
                        var O = E.nextSibling
                          , q = E.nodeName;
                        E[sr] || q === "HEAD" || q === "BODY" || q === "SCRIPT" || q === "STYLE" || q === "LINK" && E.rel.toLowerCase() === "stylesheet" || o.removeChild(E),
                        E = O
                    }
                    for (var K = e.type, B = o.attributes; B.length; )
                        o.removeAttributeNode(B[0]);
                    ft(o, K, c),
                    o[ht] = e,
                    o[St] = c
                } catch (ae) {
                    Le(e, e.return, ae)
                }
            }
        case 5:
            if (Pt(t, e),
            Gt(e),
            r & 512 && (Ge || a === null || Ct(a, a.return)),
            e.flags & 32) {
                o = e.stateNode;
                try {
                    sa(o, "")
                } catch (ae) {
                    Le(e, e.return, ae)
                }
            }
            r & 4 && e.stateNode != null && (o = e.memoizedProps,
            Cp(e, o, a !== null ? a.memoizedProps : o)),
            r & 1024 && (lc = !0);
            break;
        case 6:
            if (Pt(t, e),
            Gt(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(l(162));
                r = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = r
                } catch (ae) {
                    Le(e, e.return, ae)
                }
            }
            break;
        case 3:
            if (_l = null,
            o = It,
            It = Ol(t.containerInfo),
            Pt(t, e),
            It = o,
            Gt(e),
            r & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Wr(t.containerInfo)
                } catch (ae) {
                    Le(e, e.return, ae)
                }
            lc && (lc = !1,
            kp(e));
            break;
        case 4:
            r = It,
            It = Ol(e.stateNode.containerInfo),
            Pt(t, e),
            Gt(e),
            It = r;
            break;
        case 12:
            Pt(t, e),
            Gt(e);
            break;
        case 13:
            Pt(t, e),
            Gt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yc = ln()),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            oc(e, r)));
            break;
        case 22:
            if (r & 512 && (Ge || a === null || Ct(a, a.return)),
            E = e.memoizedState !== null,
            O = a !== null && a.memoizedState !== null,
            q = jn,
            K = Ge,
            jn = q || E,
            Ge = K || O,
            Pt(t, e),
            Ge = K,
            jn = q,
            Gt(e),
            t = e.stateNode,
            t._current = e,
            t._visibility &= -3,
            t._visibility |= t._pendingVisibility & 2,
            r & 8192 && (t._visibility = E ? t._visibility & -2 : t._visibility | 1,
            E && (t = jn || Ge,
            a === null || O || t || Ta(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
                e: for (a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                        if (a === null) {
                            O = a = t;
                            try {
                                if (o = O.stateNode,
                                E)
                                    c = o.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    g = O.stateNode,
                                    x = O.memoizedProps.style;
                                    var Y = x != null && x.hasOwnProperty("display") ? x.display : null;
                                    g.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim()
                                }
                            } catch (ae) {
                                Le(O, O.return, ae)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            O = t;
                            try {
                                O.stateNode.nodeValue = E ? "" : O.memoizedProps
                            } catch (ae) {
                                Le(O, O.return, ae)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            r & 4 && (r = e.updateQueue,
            r !== null && (a = r.retryQueue,
            a !== null && (r.retryQueue = null,
            oc(e, a))));
            break;
        case 19:
            Pt(t, e),
            Gt(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            oc(e, r)));
            break;
        case 21:
            break;
        default:
            Pt(t, e),
            Gt(e)
        }
    }
    function Gt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                if (e.tag !== 27) {
                    e: {
                        for (var a = e.return; a !== null; ) {
                            if (jp(a)) {
                                var r = a;
                                break e
                            }
                            a = a.return
                        }
                        throw Error(l(160))
                    }
                    switch (r.tag) {
                    case 27:
                        var o = r.stateNode
                          , c = rc(e);
                        gl(e, c, o);
                        break;
                    case 5:
                        var g = r.stateNode;
                        r.flags & 32 && (sa(g, ""),
                        r.flags &= -33);
                        var x = rc(e);
                        gl(e, x, g);
                        break;
                    case 3:
                    case 4:
                        var E = r.stateNode.containerInfo
                          , O = rc(e);
                        sc(e, O, E);
                        break;
                    default:
                        throw Error(l(161))
                    }
                }
            } catch (q) {
                Le(e, e.return, q)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function kp(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                kp(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Dn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Op(e, t.alternate, t),
                t = t.sibling
    }
    function Ta(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ti(4, t, t.return),
                Ta(t);
                break;
            case 1:
                Ct(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Rp(t, t.return, a),
                Ta(t);
                break;
            case 26:
            case 27:
            case 5:
                Ct(t, t.return),
                Ta(t);
                break;
            case 22:
                Ct(t, t.return),
                t.memoizedState === null && Ta(t);
                break;
            default:
                Ta(t)
            }
            e = e.sibling
        }
    }
    function ni(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var r = t.alternate
              , o = e
              , c = t
              , g = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                ni(o, c, a),
                Ur(4, c);
                break;
            case 1:
                if (ni(o, c, a),
                r = c,
                o = r.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (O) {
                        Le(r, r.return, O)
                    }
                if (r = c,
                o = r.updateQueue,
                o !== null) {
                    var x = r.stateNode;
                    try {
                        var E = o.shared.hiddenCallbacks;
                        if (E !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < E.length; o++)
                                wp(E[o], x)
                    } catch (O) {
                        Le(r, r.return, O)
                    }
                }
                a && g & 64 && Ep(c),
                zi(c, c.return);
                break;
            case 26:
            case 27:
            case 5:
                ni(o, c, a),
                a && r === null && g & 4 && Ap(c),
                zi(c, c.return);
                break;
            case 12:
                ni(o, c, a);
                break;
            case 13:
                ni(o, c, a),
                a && g & 4 && Up(o, c);
                break;
            case 22:
                c.memoizedState === null && ni(o, c, a),
                zi(c, c.return);
                break;
            default:
                ni(o, c, a)
            }
            t = t.sibling
        }
    }
    function uc(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && Er(a))
    }
    function cc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Er(e))
    }
    function ii(e, t, a, r) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Vp(e, t, a, r),
                t = t.sibling
    }
    function Vp(e, t, a, r) {
        var o = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            ii(e, t, a, r),
            o & 2048 && Ur(9, t);
            break;
        case 3:
            ii(e, t, a, r),
            o & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Er(e)));
            break;
        case 12:
            if (o & 2048) {
                ii(e, t, a, r),
                e = t.stateNode;
                try {
                    var c = t.memoizedProps
                      , g = c.id
                      , x = c.onPostCommit;
                    typeof x == "function" && x(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (E) {
                    Le(t, t.return, E)
                }
            } else
                ii(e, t, a, r);
            break;
        case 23:
            break;
        case 22:
            c = t.stateNode,
            t.memoizedState !== null ? c._visibility & 4 ? ii(e, t, a, r) : zr(e, t) : c._visibility & 4 ? ii(e, t, a, r) : (c._visibility |= 4,
            Ea(e, t, a, r, (t.subtreeFlags & 10256) !== 0)),
            o & 2048 && uc(t.alternate, t);
            break;
        case 24:
            ii(e, t, a, r),
            o & 2048 && cc(t.alternate, t);
            break;
        default:
            ii(e, t, a, r)
        }
    }
    function Ea(e, t, a, r, o) {
        for (o = o && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var c = e
              , g = t
              , x = a
              , E = r
              , O = g.flags;
            switch (g.tag) {
            case 0:
            case 11:
            case 15:
                Ea(c, g, x, E, o),
                Ur(8, g);
                break;
            case 23:
                break;
            case 22:
                var q = g.stateNode;
                g.memoizedState !== null ? q._visibility & 4 ? Ea(c, g, x, E, o) : zr(c, g) : (q._visibility |= 4,
                Ea(c, g, x, E, o)),
                o && O & 2048 && uc(g.alternate, g);
                break;
            case 24:
                Ea(c, g, x, E, o),
                o && O & 2048 && cc(g.alternate, g);
                break;
            default:
                Ea(c, g, x, E, o)
            }
            t = t.sibling
        }
    }
    function zr(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , r = t
                  , o = r.flags;
                switch (r.tag) {
                case 22:
                    zr(a, r),
                    o & 2048 && uc(r.alternate, r);
                    break;
                case 24:
                    zr(a, r),
                    o & 2048 && cc(r.alternate, r);
                    break;
                default:
                    zr(a, r)
                }
                t = t.sibling
            }
    }
    var kr = 8192;
    function Ra(e) {
        if (e.subtreeFlags & kr)
            for (e = e.child; e !== null; )
                Bp(e),
                e = e.sibling
    }
    function Bp(e) {
        switch (e.tag) {
        case 26:
            Ra(e),
            e.flags & kr && e.memoizedState !== null && vS(It, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Ra(e);
            break;
        case 3:
        case 4:
            var t = It;
            It = Ol(e.stateNode.containerInfo),
            Ra(e),
            It = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = kr,
            kr = 16777216,
            Ra(e),
            kr = t) : Ra(e));
            break;
        default:
            Ra(e)
        }
    }
    function Np(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Vr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    rt = r,
                    Pp(r, e)
                }
            Np(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Hp(e),
                e = e.sibling
    }
    function Hp(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Vr(e),
            e.flags & 2048 && ti(9, e, e.return);
            break;
        case 3:
            Vr(e);
            break;
        case 12:
            Vr(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5,
            yl(e)) : Vr(e);
            break;
        default:
            Vr(e)
        }
    }
    function yl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    rt = r,
                    Pp(r, e)
                }
            Np(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                ti(8, t, t.return),
                yl(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 4 && (a._visibility &= -5,
                yl(t));
                break;
            default:
                yl(t)
            }
            e = e.sibling
        }
    }
    function Pp(e, t) {
        for (; rt !== null; ) {
            var a = rt;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ti(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var r = a.memoizedState.cachePool.pool;
                    r != null && r.refCount++
                }
                break;
            case 24:
                Er(a.memoizedState.cache)
            }
            if (r = a.child,
            r !== null)
                r.return = a,
                rt = r;
            else
                e: for (a = e; rt !== null; ) {
                    r = rt;
                    var o = r.sibling
                      , c = r.return;
                    if (Lp(r),
                    r === a) {
                        rt = null;
                        break e
                    }
                    if (o !== null) {
                        o.return = c,
                        rt = o;
                        break e
                    }
                    rt = c
                }
        }
    }
    function Ox(e, t, a, r) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Yt(e, t, a, r) {
        return new Ox(e,t,a,r)
    }
    function fc(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function ai(e, t) {
        var a = e.alternate;
        return a === null ? (a = Yt(e.tag, t, e.key, e.mode),
        a.elementType = e.elementType,
        a.type = e.type,
        a.stateNode = e.stateNode,
        a.alternate = e,
        e.alternate = a) : (a.pendingProps = t,
        a.type = e.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = e.flags & 31457280,
        a.childLanes = e.childLanes,
        a.lanes = e.lanes,
        a.child = e.child,
        a.memoizedProps = e.memoizedProps,
        a.memoizedState = e.memoizedState,
        a.updateQueue = e.updateQueue,
        t = e.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = e.sibling,
        a.index = e.index,
        a.ref = e.ref,
        a.refCleanup = e.refCleanup,
        a
    }
    function Gp(e, t) {
        e.flags &= 31457282;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = a.childLanes,
        e.lanes = a.lanes,
        e.child = a.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = a.memoizedProps,
        e.memoizedState = a.memoizedState,
        e.updateQueue = a.updateQueue,
        e.type = a.type,
        t = a.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function vl(e, t, a, r, o, c) {
        var g = 0;
        if (r = e,
        typeof e == "function")
            fc(e) && (g = 1);
        else if (typeof e == "string")
            g = gS(e, a, Xe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case h:
                return ki(a.children, o, c, t);
            case m:
                g = 8,
                o |= 24;
                break;
            case y:
                return e = Yt(12, a, t, o | 2),
                e.elementType = y,
                e.lanes = c,
                e;
            case j:
                return e = Yt(13, a, t, o),
                e.elementType = j,
                e.lanes = c,
                e;
            case U:
                return e = Yt(19, a, t, o),
                e.elementType = U,
                e.lanes = c,
                e;
            case V:
                return Yp(a, o, c, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case b:
                    case T:
                        g = 10;
                        break e;
                    case S:
                        g = 9;
                        break e;
                    case w:
                        g = 11;
                        break e;
                    case A:
                        g = 14;
                        break e;
                    case k:
                        g = 16,
                        r = null;
                        break e
                    }
                g = 29,
                a = Error(l(130, e === null ? "null" : typeof e, "")),
                r = null
            }
        return t = Yt(g, a, t, o),
        t.elementType = e,
        t.type = r,
        t.lanes = c,
        t
    }
    function ki(e, t, a, r) {
        return e = Yt(7, e, r, t),
        e.lanes = a,
        e
    }
    function Yp(e, t, a, r) {
        e = Yt(22, e, r, t),
        e.elementType = V,
        e.lanes = a;
        var o = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function() {
                var c = o._current;
                if (c === null)
                    throw Error(l(456));
                if ((o._pendingVisibility & 2) === 0) {
                    var g = Xn(c, 2);
                    g !== null && (o._pendingVisibility |= 2,
                    bt(g, c, 2))
                }
            },
            attach: function() {
                var c = o._current;
                if (c === null)
                    throw Error(l(456));
                if ((o._pendingVisibility & 2) !== 0) {
                    var g = Xn(c, 2);
                    g !== null && (o._pendingVisibility &= -3,
                    bt(g, c, 2))
                }
            }
        };
        return e.stateNode = o,
        e
    }
    function dc(e, t, a) {
        return e = Yt(6, e, null, t),
        e.lanes = a,
        e
    }
    function hc(e, t, a) {
        return t = Yt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function On(e) {
        e.flags |= 4
    }
    function qp(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !jg(t)) {
            if (t = Ht.current,
            t !== null && ((we & 4194176) === we ? un !== null : (we & 62914560) !== we && (we & 536870912) === 0 || t !== un))
                throw Sr = vu,
                lm;
            e.flags |= 8192
        }
    }
    function bl(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? oh() : 536870912,
        e.lanes |= t,
        Ca |= t)
    }
    function Br(e, t) {
        if (!Ee)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var r = null; a !== null; )
                    a.alternate !== null && (r = a),
                    a = a.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function Be(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , r = 0;
        if (t)
            for (var o = e.child; o !== null; )
                a |= o.lanes | o.childLanes,
                r |= o.subtreeFlags & 31457280,
                r |= o.flags & 31457280,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                a |= o.lanes | o.childLanes,
                r |= o.subtreeFlags,
                r |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = a,
        t
    }
    function Lx(e, t, a) {
        var r = t.pendingProps;
        switch (gu(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Be(t),
            null;
        case 1:
            return Be(t),
            null;
        case 3:
            return a = t.stateNode,
            r = null,
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Cn(tt),
            ea(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (yr(t) ? On(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Wt !== null && (Sc(Wt),
            Wt = null))),
            Be(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? (On(t),
            a !== null ? (Be(t),
            qp(t, a)) : (Be(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? (On(t),
            Be(t),
            qp(t, a)) : (Be(t),
            t.flags &= -16777217) : (e.memoizedProps !== r && On(t),
            Be(t),
            t.flags &= -16777217),
            null;
        case 27:
            Os(t),
            a = Ie.current;
            var o = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== r && On(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Be(t),
                    null
                }
                e = Xe.current,
                yr(t) ? rm(t) : (e = xg(o, r, a),
                t.stateNode = e,
                On(t))
            }
            return Be(t),
            null;
        case 5:
            if (Os(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && On(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Be(t),
                    null
                }
                if (e = Xe.current,
                yr(t))
                    rm(t);
                else {
                    switch (o = Dl(Ie.current),
                    e) {
                    case 1:
                        e = o.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        e = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            e = o.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            e = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            e = o.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof r.is == "string" ? o.createElement("select", {
                                is: r.is
                            }) : o.createElement("select"),
                            r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                            break;
                        default:
                            e = typeof r.is == "string" ? o.createElement(a, {
                                is: r.is
                            }) : o.createElement(a)
                        }
                    }
                    e[ht] = t,
                    e[St] = r;
                    e: for (o = t.child; o !== null; ) {
                        if (o.tag === 5 || o.tag === 6)
                            e.appendChild(o.stateNode);
                        else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                            o.child.return = o,
                            o = o.child;
                            continue
                        }
                        if (o === t)
                            break e;
                        for (; o.sibling === null; ) {
                            if (o.return === null || o.return === t)
                                break e;
                            o = o.return
                        }
                        o.sibling.return = o.return,
                        o = o.sibling
                    }
                    t.stateNode = e;
                    e: switch (ft(e, a, r),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!r.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && On(t)
                }
            }
            return Be(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== r && On(t);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(l(166));
                if (e = Ie.current,
                yr(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    r = null,
                    o = vt,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            r = o.memoizedProps
                        }
                    e[ht] = t,
                    e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || mg(e.nodeValue, a)),
                    e || Ai(t)
                } else
                    e = Dl(e).createTextNode(r),
                    e[ht] = t,
                    t.stateNode = e
            }
            return Be(t),
            null;
        case 13:
            if (r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = yr(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(l(318));
                        if (o = t.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(l(317));
                        o[ht] = t
                    } else
                        vr(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Be(t),
                    o = !1
                } else
                    Wt !== null && (Sc(Wt),
                    Wt = null),
                    o = !0;
                if (!o)
                    return t.flags & 256 ? (Tn(t),
                    t) : (Tn(t),
                    null)
            }
            if (Tn(t),
            (t.flags & 128) !== 0)
                return t.lanes = a,
                t;
            if (a = r !== null,
            e = e !== null && e.memoizedState !== null,
            a) {
                r = t.child,
                o = null,
                r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool);
                var c = null;
                r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool),
                c !== o && (r.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            bl(t, t.updateQueue),
            Be(t),
            null;
        case 4:
            return ea(),
            e === null && Lc(t.stateNode.containerInfo),
            Be(t),
            null;
        case 10:
            return Cn(t.type),
            Be(t),
            null;
        case 19:
            if (ye(et),
            o = t.memoizedState,
            o === null)
                return Be(t),
                null;
            if (r = (t.flags & 128) !== 0,
            c = o.rendering,
            c === null)
                if (r)
                    Br(o, !1);
                else {
                    if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (c = nl(e),
                            c !== null) {
                                for (t.flags |= 128,
                                Br(o, !1),
                                e = c.updateQueue,
                                t.updateQueue = e,
                                bl(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    Gp(a, e),
                                    a = a.sibling;
                                return Se(et, et.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && ln() > xl && (t.flags |= 128,
                    r = !0,
                    Br(o, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = nl(c),
                    e !== null) {
                        if (t.flags |= 128,
                        r = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        bl(t, e),
                        Br(o, !0),
                        o.tail === null && o.tailMode === "hidden" && !c.alternate && !Ee)
                            return Be(t),
                            null
                    } else
                        2 * ln() - o.renderingStartTime > xl && a !== 536870912 && (t.flags |= 128,
                        r = !0,
                        Br(o, !1),
                        t.lanes = 4194304);
                o.isBackwards ? (c.sibling = t.child,
                t.child = c) : (e = o.last,
                e !== null ? e.sibling = c : t.child = c,
                o.last = c)
            }
            return o.tail !== null ? (t = o.tail,
            o.rendering = t,
            o.tail = t.sibling,
            o.renderingStartTime = ln(),
            t.sibling = null,
            e = et.current,
            Se(et, r ? e & 1 | 2 : e & 1),
            t) : (Be(t),
            null);
        case 22:
        case 23:
            return Tn(t),
            xu(),
            r = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
            r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t),
            a = t.updateQueue,
            a !== null && bl(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            r = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
            r !== a && (t.flags |= 2048),
            e !== null && ye(ji),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Cn(tt),
            Be(t),
            null;
        case 25:
            return null
        }
        throw Error(l(156, t.tag))
    }
    function _x(e, t) {
        switch (gu(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Cn(tt),
            ea(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Os(t),
            null;
        case 13:
            if (Tn(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(l(340));
                vr()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return ye(et),
            null;
        case 4:
            return ea(),
            null;
        case 10:
            return Cn(t.type),
            null;
        case 22:
        case 23:
            return Tn(t),
            xu(),
            e !== null && ye(ji),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Cn(tt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function $p(e, t) {
        switch (gu(t),
        t.tag) {
        case 3:
            Cn(tt),
            ea();
            break;
        case 26:
        case 27:
        case 5:
            Os(t);
            break;
        case 4:
            ea();
            break;
        case 13:
            Tn(t);
            break;
        case 19:
            ye(et);
            break;
        case 10:
            Cn(t.type);
            break;
        case 22:
        case 23:
            Tn(t),
            xu(),
            e !== null && ye(ji);
            break;
        case 24:
            Cn(tt)
        }
    }
    var Ux = {
        getCacheForType: function(e) {
            var t = mt(tt)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , zx = typeof WeakMap == "function" ? WeakMap : Map
      , Ne = 0
      , _e = null
      , be = null
      , we = 0
      , Ue = 0
      , Mt = null
      , Ln = !1
      , Aa = !1
      , mc = !1
      , _n = 0
      , Ye = 0
      , ri = 0
      , Vi = 0
      , pc = 0
      , qt = 0
      , Ca = 0
      , Nr = null
      , fn = null
      , gc = !1
      , yc = 0
      , xl = 1 / 0
      , Sl = null
      , si = null
      , wl = !1
      , Bi = null
      , Hr = 0
      , vc = 0
      , bc = null
      , Pr = 0
      , xc = null;
    function Dt() {
        if ((Ne & 2) !== 0 && we !== 0)
            return we & -we;
        if (_.T !== null) {
            var e = va;
            return e !== 0 ? e : jc()
        }
        return dh()
    }
    function Xp() {
        qt === 0 && (qt = (we & 536870912) === 0 || Ee ? lh() : 536870912);
        var e = Ht.current;
        return e !== null && (e.flags |= 32),
        qt
    }
    function bt(e, t, a) {
        (e === _e && Ue === 2 || e.cancelPendingCommit !== null) && (ja(e, 0),
        Un(e, we, qt, !1)),
        rr(e, a),
        ((Ne & 2) === 0 || e !== _e) && (e === _e && ((Ne & 2) === 0 && (Vi |= a),
        Ye === 4 && Un(e, we, qt, !1)),
        dn(e))
    }
    function Kp(e, t, a) {
        if ((Ne & 6) !== 0)
            throw Error(l(327));
        var r = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || ar(e, t)
          , o = r ? Bx(e, t) : Ec(e, t, !0)
          , c = r;
        do {
            if (o === 0) {
                Aa && !r && Un(e, t, 0, !1);
                break
            } else if (o === 6)
                Un(e, t, 0, !Ln);
            else {
                if (a = e.current.alternate,
                c && !kx(a)) {
                    o = Ec(e, t, !1),
                    c = !1;
                    continue
                }
                if (o === 2) {
                    if (c = t,
                    e.errorRecoveryDisabledLanes & c)
                        var g = 0;
                    else
                        g = e.pendingLanes & -536870913,
                        g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        t = g;
                        e: {
                            var x = e;
                            o = Nr;
                            var E = x.current.memoizedState.isDehydrated;
                            if (E && (ja(x, g).flags |= 256),
                            g = Ec(x, g, !1),
                            g !== 2) {
                                if (mc && !E) {
                                    x.errorRecoveryDisabledLanes |= c,
                                    Vi |= c,
                                    o = 4;
                                    break e
                                }
                                c = fn,
                                fn = o,
                                c !== null && Sc(c)
                            }
                            o = g
                        }
                        if (c = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    ja(e, 0),
                    Un(e, t, 0, !0);
                    break
                }
                e: {
                    switch (r = e,
                    o) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((t & 4194176) === t) {
                            Un(r, t, qt, !Ln);
                            break e
                        }
                        break;
                    case 2:
                        fn = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329))
                    }
                    if (r.finishedWork = a,
                    r.finishedLanes = t,
                    (t & 62914560) === t && (c = yc + 300 - ln(),
                    10 < c)) {
                        if (Un(r, t, qt, !Ln),
                        zs(r, 0) !== 0)
                            break e;
                        r.timeoutHandle = yg(Fp.bind(null, r, a, fn, Sl, gc, t, qt, Vi, Ca, Ln, 2, -0, 0), c);
                        break e
                    }
                    Fp(r, a, fn, Sl, gc, t, qt, Vi, Ca, Ln, 0, -0, 0)
                }
            }
            break
        } while (!0);
        dn(e)
    }
    function Sc(e) {
        fn === null ? fn = e : fn.push.apply(fn, e)
    }
    function Fp(e, t, a, r, o, c, g, x, E, O, q, K, B) {
        var Y = t.subtreeFlags;
        if ((Y & 8192 || (Y & 16785408) === 16785408) && (Kr = {
            stylesheets: null,
            count: 0,
            unsuspend: yS
        },
        Bp(t),
        t = bS(),
        t !== null)) {
            e.cancelPendingCommit = t(tg.bind(null, e, a, r, o, g, x, E, 1, K, B)),
            Un(e, c, g, !O);
            return
        }
        tg(e, a, r, o, g, x, E, q, K, B)
    }
    function kx(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var r = 0; r < a.length; r++) {
                    var o = a[r]
                      , c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!At(c(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Un(e, t, a, r) {
        t &= ~pc,
        t &= ~Vi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        r && (e.warmLanes |= t),
        r = e.expirationTimes;
        for (var o = t; 0 < o; ) {
            var c = 31 - Rt(o)
              , g = 1 << c;
            r[c] = -1,
            o &= ~g
        }
        a !== 0 && uh(e, a, t)
    }
    function Tl() {
        return (Ne & 6) === 0 ? (Gr(0),
        !1) : !0
    }
    function wc() {
        if (be !== null) {
            if (Ue === 0)
                var e = be.return;
            else
                e = be,
                An = _i = null,
                ju(e),
                ga = null,
                wr = 0,
                e = be;
            for (; e !== null; )
                $p(e.alternate, e),
                e = e.return;
            be = null
        }
    }
    function ja(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        tS(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        wc(),
        _e = e,
        be = a = ai(e.current, null),
        we = t,
        Ue = 0,
        Mt = null,
        Ln = !1,
        Aa = ar(e, t),
        mc = !1,
        Ca = qt = pc = Vi = ri = Ye = 0,
        fn = Nr = null,
        gc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements,
            r &= t; 0 < r; ) {
                var o = 31 - Rt(r)
                  , c = 1 << o;
                t |= e[o],
                r &= ~c
            }
        return _n = t,
        Ks(),
        a
    }
    function Zp(e, t) {
        ge = null,
        _.H = cn,
        t === xr ? (t = cm(),
        Ue = 3) : t === lm ? (t = cm(),
        Ue = 4) : Ue = t === op ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Mt = t,
        be === null && (Ye = 1,
        hl(e, Vt(t, e.current)))
    }
    function Qp() {
        var e = _.H;
        return _.H = cn,
        e === null ? cn : e
    }
    function Jp() {
        var e = _.A;
        return _.A = Ux,
        e
    }
    function Tc() {
        Ye = 4,
        Ln || (we & 4194176) !== we && Ht.current !== null || (Aa = !0),
        (ri & 134217727) === 0 && (Vi & 134217727) === 0 || _e === null || Un(_e, we, qt, !1)
    }
    function Ec(e, t, a) {
        var r = Ne;
        Ne |= 2;
        var o = Qp()
          , c = Jp();
        (_e !== e || we !== t) && (Sl = null,
        ja(e, t)),
        t = !1;
        var g = Ye;
        e: do
            try {
                if (Ue !== 0 && be !== null) {
                    var x = be
                      , E = Mt;
                    switch (Ue) {
                    case 8:
                        wc(),
                        g = 6;
                        break e;
                    case 3:
                    case 2:
                    case 6:
                        Ht.current === null && (t = !0);
                        var O = Ue;
                        if (Ue = 0,
                        Mt = null,
                        Ma(e, x, E, O),
                        a && Aa) {
                            g = 0;
                            break e
                        }
                        break;
                    default:
                        O = Ue,
                        Ue = 0,
                        Mt = null,
                        Ma(e, x, E, O)
                    }
                }
                Vx(),
                g = Ye;
                break
            } catch (q) {
                Zp(e, q)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        An = _i = null,
        Ne = r,
        _.H = o,
        _.A = c,
        be === null && (_e = null,
        we = 0,
        Ks()),
        g
    }
    function Vx() {
        for (; be !== null; )
            Wp(be)
    }
    function Bx(e, t) {
        var a = Ne;
        Ne |= 2;
        var r = Qp()
          , o = Jp();
        _e !== e || we !== t ? (Sl = null,
        xl = ln() + 500,
        ja(e, t)) : Aa = ar(e, t);
        e: do
            try {
                if (Ue !== 0 && be !== null) {
                    t = be;
                    var c = Mt;
                    t: switch (Ue) {
                    case 1:
                        Ue = 0,
                        Mt = null,
                        Ma(e, t, c, 1);
                        break;
                    case 2:
                        if (om(c)) {
                            Ue = 0,
                            Mt = null,
                            Ip(t);
                            break
                        }
                        t = function() {
                            Ue === 2 && _e === e && (Ue = 7),
                            dn(e)
                        }
                        ,
                        c.then(t, t);
                        break e;
                    case 3:
                        Ue = 7;
                        break e;
                    case 4:
                        Ue = 5;
                        break e;
                    case 7:
                        om(c) ? (Ue = 0,
                        Mt = null,
                        Ip(t)) : (Ue = 0,
                        Mt = null,
                        Ma(e, t, c, 7));
                        break;
                    case 5:
                        var g = null;
                        switch (be.tag) {
                        case 26:
                            g = be.memoizedState;
                        case 5:
                        case 27:
                            var x = be;
                            if (!g || jg(g)) {
                                Ue = 0,
                                Mt = null;
                                var E = x.sibling;
                                if (E !== null)
                                    be = E;
                                else {
                                    var O = x.return;
                                    O !== null ? (be = O,
                                    El(O)) : be = null
                                }
                                break t
                            }
                        }
                        Ue = 0,
                        Mt = null,
                        Ma(e, t, c, 5);
                        break;
                    case 6:
                        Ue = 0,
                        Mt = null,
                        Ma(e, t, c, 6);
                        break;
                    case 8:
                        wc(),
                        Ye = 6;
                        break e;
                    default:
                        throw Error(l(462))
                    }
                }
                Nx();
                break
            } catch (q) {
                Zp(e, q)
            }
        while (!0);
        return An = _i = null,
        _.H = r,
        _.A = o,
        Ne = a,
        be !== null ? 0 : (_e = null,
        we = 0,
        Ks(),
        Ye)
    }
    function Nx() {
        for (; be !== null && !lb(); )
            Wp(be)
    }
    function Wp(e) {
        var t = xp(e.alternate, e, _n);
        e.memoizedProps = e.pendingProps,
        t === null ? El(e) : be = t
    }
    function Ip(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = mp(a, t, t.pendingProps, t.type, void 0, we);
            break;
        case 11:
            t = mp(a, t, t.pendingProps, t.type.render, t.ref, we);
            break;
        case 5:
            ju(t);
        default:
            $p(a, t),
            t = be = Gp(t, _n),
            t = xp(a, t, _n)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? El(e) : be = t
    }
    function Ma(e, t, a, r) {
        An = _i = null,
        ju(t),
        ga = null,
        wr = 0;
        var o = t.return;
        try {
            if (Cx(e, o, t, a, we)) {
                Ye = 1,
                hl(e, Vt(a, e.current)),
                be = null;
                return
            }
        } catch (c) {
            if (o !== null)
                throw be = o,
                c;
            Ye = 1,
            hl(e, Vt(a, e.current)),
            be = null;
            return
        }
        t.flags & 32768 ? (Ee || r === 1 ? e = !0 : Aa || (we & 536870912) !== 0 ? e = !1 : (Ln = e = !0,
        (r === 2 || r === 3 || r === 6) && (r = Ht.current,
        r !== null && r.tag === 13 && (r.flags |= 16384))),
        eg(t, e)) : El(t)
    }
    function El(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                eg(t, Ln);
                return
            }
            e = t.return;
            var a = Lx(t.alternate, t, _n);
            if (a !== null) {
                be = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                be = t;
                return
            }
            be = t = e
        } while (t !== null);
        Ye === 0 && (Ye = 5)
    }
    function eg(e, t) {
        do {
            var a = _x(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                be = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                be = e;
                return
            }
            be = e = a
        } while (e !== null);
        Ye = 6,
        be = null
    }
    function tg(e, t, a, r, o, c, g, x, E, O) {
        var q = _.T
          , K = J.p;
        try {
            J.p = 2,
            _.T = null,
            Hx(e, t, a, r, K, o, c, g, x, E, O)
        } finally {
            _.T = q,
            J.p = K
        }
    }
    function Hx(e, t, a, r, o, c, g, x) {
        do
            Da();
        while (Bi !== null);
        if ((Ne & 6) !== 0)
            throw Error(l(327));
        var E = e.finishedWork;
        if (r = e.finishedLanes,
        E === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        E === e.current)
            throw Error(l(177));
        e.callbackNode = null,
        e.callbackPriority = 0,
        e.cancelPendingCommit = null;
        var O = E.lanes | E.childLanes;
        if (O |= hu,
        vb(e, r, O, c, g, x),
        e === _e && (be = _e = null,
        we = 0),
        (E.subtreeFlags & 10256) === 0 && (E.flags & 10256) === 0 || wl || (wl = !0,
        vc = O,
        bc = a,
        qx(Ls, function() {
            return Da(),
            null
        })),
        a = (E.flags & 15990) !== 0,
        (E.subtreeFlags & 15990) !== 0 || a ? (a = _.T,
        _.T = null,
        c = J.p,
        J.p = 2,
        g = Ne,
        Ne |= 4,
        Mx(e, E),
        zp(E, e),
        cx(kc, e.containerInfo),
        kl = !!zc,
        kc = zc = null,
        e.current = E,
        Op(e, E.alternate, E),
        ob(),
        Ne = g,
        J.p = c,
        _.T = a) : e.current = E,
        wl ? (wl = !1,
        Bi = e,
        Hr = r) : ng(e, O),
        O = e.pendingLanes,
        O === 0 && (si = null),
        hb(E.stateNode),
        dn(e),
        t !== null)
            for (o = e.onRecoverableError,
            E = 0; E < t.length; E++)
                O = t[E],
                o(O.value, {
                    componentStack: O.stack
                });
        return (Hr & 3) !== 0 && Da(),
        O = e.pendingLanes,
        (r & 4194218) !== 0 && (O & 42) !== 0 ? e === xc ? Pr++ : (Pr = 0,
        xc = e) : Pr = 0,
        Gr(0),
        null
    }
    function ng(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Er(t)))
    }
    function Da() {
        if (Bi !== null) {
            var e = Bi
              , t = vc;
            vc = 0;
            var a = fh(Hr)
              , r = _.T
              , o = J.p;
            try {
                if (J.p = 32 > a ? 32 : a,
                _.T = null,
                Bi === null)
                    var c = !1;
                else {
                    a = bc,
                    bc = null;
                    var g = Bi
                      , x = Hr;
                    if (Bi = null,
                    Hr = 0,
                    (Ne & 6) !== 0)
                        throw Error(l(331));
                    var E = Ne;
                    if (Ne |= 4,
                    Hp(g.current),
                    Vp(g, g.current, x, a),
                    Ne = E,
                    Gr(0, !1),
                    Et && typeof Et.onPostCommitFiberRoot == "function")
                        try {
                            Et.onPostCommitFiberRoot(ir, g)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                J.p = o,
                _.T = r,
                ng(e, t)
            }
        }
        return !1
    }
    function ig(e, t, a) {
        t = Vt(a, t),
        t = Gu(e.stateNode, t, 2),
        e = ei(e, t, 2),
        e !== null && (rr(e, 2),
        dn(e))
    }
    function Le(e, t, a) {
        if (e.tag === 3)
            ig(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    ig(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (si === null || !si.has(r))) {
                        e = Vt(a, e),
                        a = sp(2),
                        r = ei(t, a, 2),
                        r !== null && (lp(a, r, t, e),
                        rr(r, 2),
                        dn(r));
                        break
                    }
                }
                t = t.return
            }
    }
    function Rc(e, t, a) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new zx;
            var o = new Set;
            r.set(t, o)
        } else
            o = r.get(t),
            o === void 0 && (o = new Set,
            r.set(t, o));
        o.has(a) || (mc = !0,
        o.add(a),
        e = Px.bind(null, e, t, a),
        t.then(e, e))
    }
    function Px(e, t, a) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        _e === e && (we & a) === a && (Ye === 4 || Ye === 3 && (we & 62914560) === we && 300 > ln() - yc ? (Ne & 2) === 0 && ja(e, 0) : pc |= a,
        Ca === we && (Ca = 0)),
        dn(e)
    }
    function ag(e, t) {
        t === 0 && (t = oh()),
        e = Xn(e, t),
        e !== null && (rr(e, t),
        dn(e))
    }
    function Gx(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        ag(e, a)
    }
    function Yx(e, t) {
        var a = 0;
        switch (e.tag) {
        case 13:
            var r = e.stateNode
              , o = e.memoizedState;
            o !== null && (a = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314))
        }
        r !== null && r.delete(t),
        ag(e, a)
    }
    function qx(e, t) {
        return Yo(e, t)
    }
    var Rl = null
      , Oa = null
      , Ac = !1
      , Al = !1
      , Cc = !1
      , Ni = 0;
    function dn(e) {
        e !== Oa && e.next === null && (Oa === null ? Rl = Oa = e : Oa = Oa.next = e),
        Al = !0,
        Ac || (Ac = !0,
        Xx($x))
    }
    function Gr(e, t) {
        if (!Cc && Al) {
            Cc = !0;
            do
                for (var a = !1, r = Rl; r !== null; ) {
                    if (e !== 0) {
                        var o = r.pendingLanes;
                        if (o === 0)
                            var c = 0;
                        else {
                            var g = r.suspendedLanes
                              , x = r.pingedLanes;
                            c = (1 << 31 - Rt(42 | e) + 1) - 1,
                            c &= o & ~(g & ~x),
                            c = c & 201326677 ? c & 201326677 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (a = !0,
                        lg(r, c))
                    } else
                        c = we,
                        c = zs(r, r === _e ? c : 0),
                        (c & 3) === 0 || ar(r, c) || (a = !0,
                        lg(r, c));
                    r = r.next
                }
            while (a);
            Cc = !1
        }
    }
    function $x() {
        Al = Ac = !1;
        var e = 0;
        Ni !== 0 && (eS() && (e = Ni),
        Ni = 0);
        for (var t = ln(), a = null, r = Rl; r !== null; ) {
            var o = r.next
              , c = rg(r, t);
            c === 0 ? (r.next = null,
            a === null ? Rl = o : a.next = o,
            o === null && (Oa = a)) : (a = r,
            (e !== 0 || (c & 3) !== 0) && (Al = !0)),
            r = o
        }
        Gr(e)
    }
    function rg(e, t) {
        for (var a = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
            var g = 31 - Rt(c)
              , x = 1 << g
              , E = o[g];
            E === -1 ? ((x & a) === 0 || (x & r) !== 0) && (o[g] = yb(x, t)) : E <= t && (e.expiredLanes |= x),
            c &= ~x
        }
        if (t = _e,
        a = we,
        a = zs(e, e === t ? a : 0),
        r = e.callbackNode,
        a === 0 || e === t && Ue === 2 || e.cancelPendingCommit !== null)
            return r !== null && r !== null && qo(r),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || ar(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (r !== null && qo(r),
            fh(a)) {
            case 2:
            case 8:
                a = rh;
                break;
            case 32:
                a = Ls;
                break;
            case 268435456:
                a = sh;
                break;
            default:
                a = Ls
            }
            return r = sg.bind(null, e),
            a = Yo(a, r),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return r !== null && r !== null && qo(r),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function sg(e, t) {
        var a = e.callbackNode;
        if (Da() && e.callbackNode !== a)
            return null;
        var r = we;
        return r = zs(e, e === _e ? r : 0),
        r === 0 ? null : (Kp(e, r, t),
        rg(e, ln()),
        e.callbackNode != null && e.callbackNode === a ? sg.bind(null, e) : null)
    }
    function lg(e, t) {
        if (Da())
            return null;
        Kp(e, t, !0)
    }
    function Xx(e) {
        nS(function() {
            (Ne & 6) !== 0 ? Yo(ah, e) : e()
        })
    }
    function jc() {
        return Ni === 0 && (Ni = lh()),
        Ni
    }
    function og(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Hs("" + e)
    }
    function ug(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function Kx(e, t, a, r, o) {
        if (t === "submit" && a && a.stateNode === o) {
            var c = og((o[St] || null).action)
              , g = r.submitter;
            g && (t = (t = g[St] || null) ? og(t.formAction) : g.getAttribute("formAction"),
            t !== null && (c = t,
            g = null));
            var x = new qs("action","action",null,r,o);
            e.push({
                event: x,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (Ni !== 0) {
                                var E = g ? ug(o, g) : new FormData(o);
                                Vu(a, {
                                    pending: !0,
                                    data: E,
                                    method: o.method,
                                    action: c
                                }, null, E)
                            }
                        } else
                            typeof c == "function" && (x.preventDefault(),
                            E = g ? ug(o, g) : new FormData(o),
                            Vu(a, {
                                pending: !0,
                                data: E,
                                method: o.method,
                                action: c
                            }, c, E))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var Mc = 0; Mc < tm.length; Mc++) {
        var Dc = tm[Mc]
          , Fx = Dc.toLowerCase()
          , Zx = Dc[0].toUpperCase() + Dc.slice(1);
        Jt(Fx, "on" + Zx)
    }
    Jt(Qh, "onAnimationEnd"),
    Jt(Jh, "onAnimationIteration"),
    Jt(Wh, "onAnimationStart"),
    Jt("dblclick", "onDoubleClick"),
    Jt("focusin", "onFocus"),
    Jt("focusout", "onBlur"),
    Jt(dx, "onTransitionRun"),
    Jt(hx, "onTransitionStart"),
    Jt(mx, "onTransitionCancel"),
    Jt(Ih, "onTransitionEnd"),
    aa("onMouseEnter", ["mouseout", "mouseover"]),
    aa("onMouseLeave", ["mouseout", "mouseover"]),
    aa("onPointerEnter", ["pointerout", "pointerover"]),
    aa("onPointerLeave", ["pointerout", "pointerover"]),
    xi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    xi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    xi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    xi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    xi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Qx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yr));
    function cg(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var r = e[a]
              , o = r.event;
            r = r.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var g = r.length - 1; 0 <= g; g--) {
                        var x = r[g]
                          , E = x.instance
                          , O = x.currentTarget;
                        if (x = x.listener,
                        E !== c && o.isPropagationStopped())
                            break e;
                        c = x,
                        o.currentTarget = O;
                        try {
                            c(o)
                        } catch (q) {
                            dl(q)
                        }
                        o.currentTarget = null,
                        c = E
                    }
                else
                    for (g = 0; g < r.length; g++) {
                        if (x = r[g],
                        E = x.instance,
                        O = x.currentTarget,
                        x = x.listener,
                        E !== c && o.isPropagationStopped())
                            break e;
                        c = x,
                        o.currentTarget = O;
                        try {
                            c(o)
                        } catch (q) {
                            dl(q)
                        }
                        o.currentTarget = null,
                        c = E
                    }
            }
        }
    }
    function xe(e, t) {
        var a = t[Xo];
        a === void 0 && (a = t[Xo] = new Set);
        var r = e + "__bubble";
        a.has(r) || (fg(t, e, 2, !1),
        a.add(r))
    }
    function Oc(e, t, a) {
        var r = 0;
        t && (r |= 4),
        fg(a, e, r, t)
    }
    var Cl = "_reactListening" + Math.random().toString(36).slice(2);
    function Lc(e) {
        if (!e[Cl]) {
            e[Cl] = !0,
            mh.forEach(function(a) {
                a !== "selectionchange" && (Qx.has(a) || Oc(a, !1, e),
                Oc(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Cl] || (t[Cl] = !0,
            Oc("selectionchange", !1, t))
        }
    }
    function fg(e, t, a, r) {
        switch (Ug(t)) {
        case 2:
            var o = wS;
            break;
        case 8:
            o = TS;
            break;
        default:
            o = $c
        }
        a = o.bind(null, t, a, e),
        o = void 0,
        !eu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        r ? o !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
            passive: o
        }) : e.addEventListener(t, a, !1)
    }
    function _c(e, t, a, r, o) {
        var c = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
            e: for (; ; ) {
                if (r === null)
                    return;
                var g = r.tag;
                if (g === 3 || g === 4) {
                    var x = r.stateNode.containerInfo;
                    if (x === o || x.nodeType === 8 && x.parentNode === o)
                        break;
                    if (g === 4)
                        for (g = r.return; g !== null; ) {
                            var E = g.tag;
                            if ((E === 3 || E === 4) && (E = g.stateNode.containerInfo,
                            E === o || E.nodeType === 8 && E.parentNode === o))
                                return;
                            g = g.return
                        }
                    for (; x !== null; ) {
                        if (g = bi(x),
                        g === null)
                            return;
                        if (E = g.tag,
                        E === 5 || E === 6 || E === 26 || E === 27) {
                            r = c = g;
                            continue e
                        }
                        x = x.parentNode
                    }
                }
                r = r.return
            }
        Ah(function() {
            var O = c
              , q = Wo(a)
              , K = [];
            e: {
                var B = em.get(e);
                if (B !== void 0) {
                    var Y = qs
                      , ae = e;
                    switch (e) {
                    case "keypress":
                        if (Gs(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = Yb;
                        break;
                    case "focusin":
                        ae = "focus",
                        Y = au;
                        break;
                    case "focusout":
                        ae = "blur",
                        Y = au;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = au;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Y = Mh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Y = Ob;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Y = Xb;
                        break;
                    case Qh:
                    case Jh:
                    case Wh:
                        Y = Ub;
                        break;
                    case Ih:
                        Y = Fb;
                        break;
                    case "scroll":
                    case "scrollend":
                        Y = Mb;
                        break;
                    case "wheel":
                        Y = Qb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Y = kb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Y = Oh;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        Y = Wb
                    }
                    var de = (t & 4) !== 0
                      , qe = !de && (e === "scroll" || e === "scrollend")
                      , L = de ? B !== null ? B + "Capture" : null : B;
                    de = [];
                    for (var D = O, z; D !== null; ) {
                        var $ = D;
                        if (z = $.stateNode,
                        $ = $.tag,
                        $ !== 5 && $ !== 26 && $ !== 27 || z === null || L === null || ($ = or(D, L),
                        $ != null && de.push(qr(D, $, z))),
                        qe)
                            break;
                        D = D.return
                    }
                    0 < de.length && (B = new Y(B,ae,null,a,q),
                    K.push({
                        event: B,
                        listeners: de
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (B = e === "mouseover" || e === "pointerover",
                    Y = e === "mouseout" || e === "pointerout",
                    B && a !== Jo && (ae = a.relatedTarget || a.fromElement) && (bi(ae) || ae[ta]))
                        break e;
                    if ((Y || B) && (B = q.window === q ? q : (B = q.ownerDocument) ? B.defaultView || B.parentWindow : window,
                    Y ? (ae = a.relatedTarget || a.toElement,
                    Y = O,
                    ae = ae ? bi(ae) : null,
                    ae !== null && (qe = ee(ae),
                    de = ae.tag,
                    ae !== qe || de !== 5 && de !== 27 && de !== 6) && (ae = null)) : (Y = null,
                    ae = O),
                    Y !== ae)) {
                        if (de = Mh,
                        $ = "onMouseLeave",
                        L = "onMouseEnter",
                        D = "mouse",
                        (e === "pointerout" || e === "pointerover") && (de = Oh,
                        $ = "onPointerLeave",
                        L = "onPointerEnter",
                        D = "pointer"),
                        qe = Y == null ? B : lr(Y),
                        z = ae == null ? B : lr(ae),
                        B = new de($,D + "leave",Y,a,q),
                        B.target = qe,
                        B.relatedTarget = z,
                        $ = null,
                        bi(q) === O && (de = new de(L,D + "enter",ae,a,q),
                        de.target = z,
                        de.relatedTarget = qe,
                        $ = de),
                        qe = $,
                        Y && ae)
                            t: {
                                for (de = Y,
                                L = ae,
                                D = 0,
                                z = de; z; z = La(z))
                                    D++;
                                for (z = 0,
                                $ = L; $; $ = La($))
                                    z++;
                                for (; 0 < D - z; )
                                    de = La(de),
                                    D--;
                                for (; 0 < z - D; )
                                    L = La(L),
                                    z--;
                                for (; D--; ) {
                                    if (de === L || L !== null && de === L.alternate)
                                        break t;
                                    de = La(de),
                                    L = La(L)
                                }
                                de = null
                            }
                        else
                            de = null;
                        Y !== null && dg(K, B, Y, de, !1),
                        ae !== null && qe !== null && dg(K, qe, ae, de, !0)
                    }
                }
                e: {
                    if (B = O ? lr(O) : window,
                    Y = B.nodeName && B.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && B.type === "file")
                        var ie = Nh;
                    else if (Vh(B))
                        if (Hh)
                            ie = ox;
                        else {
                            ie = sx;
                            var ve = rx
                        }
                    else
                        Y = B.nodeName,
                        !Y || Y.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? O && Qo(O.elementType) && (ie = Nh) : ie = lx;
                    if (ie && (ie = ie(e, O))) {
                        Bh(K, ie, a, q);
                        break e
                    }
                    ve && ve(e, B, O),
                    e === "focusout" && O && B.type === "number" && O.memoizedProps.value != null && Zo(B, "number", B.value)
                }
                switch (ve = O ? lr(O) : window,
                e) {
                case "focusin":
                    (Vh(ve) || ve.contentEditable === "true") && (ca = ve,
                    cu = O,
                    gr = null);
                    break;
                case "focusout":
                    gr = cu = ca = null;
                    break;
                case "mousedown":
                    fu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    fu = !1,
                    Fh(K, a, q);
                    break;
                case "selectionchange":
                    if (fx)
                        break;
                case "keydown":
                case "keyup":
                    Fh(K, a, q)
                }
                var se;
                if (su)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var le = "onCompositionStart";
                            break e;
                        case "compositionend":
                            le = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            le = "onCompositionUpdate";
                            break e
                        }
                        le = void 0
                    }
                else
                    ua ? zh(e, a) && (le = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (le = "onCompositionStart");
                le && (Lh && a.locale !== "ko" && (ua || le !== "onCompositionStart" ? le === "onCompositionEnd" && ua && (se = Ch()) : ($n = q,
                tu = "value"in $n ? $n.value : $n.textContent,
                ua = !0)),
                ve = jl(O, le),
                0 < ve.length && (le = new Dh(le,e,null,a,q),
                K.push({
                    event: le,
                    listeners: ve
                }),
                se ? le.data = se : (se = kh(a),
                se !== null && (le.data = se)))),
                (se = ex ? tx(e, a) : nx(e, a)) && (le = jl(O, "onBeforeInput"),
                0 < le.length && (ve = new Dh("onBeforeInput","beforeinput",null,a,q),
                K.push({
                    event: ve,
                    listeners: le
                }),
                ve.data = se)),
                Kx(K, e, O, a, q)
            }
            cg(K, t)
        })
    }
    function qr(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function jl(e, t) {
        for (var a = t + "Capture", r = []; e !== null; ) {
            var o = e
              , c = o.stateNode;
            o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || c === null || (o = or(e, a),
            o != null && r.unshift(qr(e, o, c)),
            o = or(e, t),
            o != null && r.push(qr(e, o, c))),
            e = e.return
        }
        return r
    }
    function La(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function dg(e, t, a, r, o) {
        for (var c = t._reactName, g = []; a !== null && a !== r; ) {
            var x = a
              , E = x.alternate
              , O = x.stateNode;
            if (x = x.tag,
            E !== null && E === r)
                break;
            x !== 5 && x !== 26 && x !== 27 || O === null || (E = O,
            o ? (O = or(a, c),
            O != null && g.unshift(qr(a, O, E))) : o || (O = or(a, c),
            O != null && g.push(qr(a, O, E)))),
            a = a.return
        }
        g.length !== 0 && e.push({
            event: t,
            listeners: g
        })
    }
    var Jx = /\r\n?/g
      , Wx = /\u0000|\uFFFD/g;
    function hg(e) {
        return (typeof e == "string" ? e : "" + e).replace(Jx, `
`).replace(Wx, "")
    }
    function mg(e, t) {
        return t = hg(t),
        hg(e) === t
    }
    function Ml() {}
    function De(e, t, a, r, o, c) {
        switch (a) {
        case "children":
            typeof r == "string" ? t === "body" || t === "textarea" && r === "" || sa(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && sa(e, "" + r);
            break;
        case "className":
            Vs(e, "class", r);
            break;
        case "tabIndex":
            Vs(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Vs(e, a, r);
            break;
        case "style":
            Eh(e, r, c);
            break;
        case "data":
            if (t !== "object") {
                Vs(e, "data", r);
                break
            }
        case "src":
        case "href":
            if (r === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break
            }
            r = Hs("" + r),
            e.setAttribute(a, r);
            break;
        case "action":
        case "formAction":
            if (typeof r == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (a === "formAction" ? (t !== "input" && De(e, t, "name", o.name, o, null),
                De(e, t, "formEncType", o.formEncType, o, null),
                De(e, t, "formMethod", o.formMethod, o, null),
                De(e, t, "formTarget", o.formTarget, o, null)) : (De(e, t, "encType", o.encType, o, null),
                De(e, t, "method", o.method, o, null),
                De(e, t, "target", o.target, o, null)));
            if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break
            }
            r = Hs("" + r),
            e.setAttribute(a, r);
            break;
        case "onClick":
            r != null && (e.onclick = Ml);
            break;
        case "onScroll":
            r != null && xe("scroll", e);
            break;
        case "onScrollEnd":
            r != null && xe("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html"in r))
                    throw Error(l(61));
                if (a = r.__html,
                a != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "muted":
            e.muted = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = Hs("" + r),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
            break;
        case "popover":
            xe("beforetoggle", e),
            xe("toggle", e),
            ks(e, "popover", r);
            break;
        case "xlinkActuate":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            xn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            xn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            xn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            ks(e, "is", r);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Cb.get(a) || a,
            ks(e, a, r))
        }
    }
    function Uc(e, t, a, r, o, c) {
        switch (a) {
        case "style":
            Eh(e, r, c);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html"in r))
                    throw Error(l(61));
                if (a = r.__html,
                a != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof r == "string" ? sa(e, r) : (typeof r == "number" || typeof r == "bigint") && sa(e, "" + r);
            break;
        case "onScroll":
            r != null && xe("scroll", e);
            break;
        case "onScrollEnd":
            r != null && xe("scrollend", e);
            break;
        case "onClick":
            r != null && (e.onclick = Ml);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!ph.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"),
                    t = a.slice(2, o ? a.length - 7 : void 0),
                    c = e[St] || null,
                    c = c != null ? c[a] : null,
                    typeof c == "function" && e.removeEventListener(t, c, o),
                    typeof r == "function")) {
                        typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, r, o);
                        break e
                    }
                    a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : ks(e, a, r)
                }
        }
    }
    function ft(e, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            xe("error", e),
            xe("load", e);
            var r = !1, o = !1, c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var g = a[c];
                    if (g != null)
                        switch (c) {
                        case "src":
                            r = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            De(e, t, c, g, a, null)
                        }
                }
            o && De(e, t, "srcSet", a.srcSet, a, null),
            r && De(e, t, "src", a.src, a, null);
            return;
        case "input":
            xe("invalid", e);
            var x = c = g = o = null
              , E = null
              , O = null;
            for (r in a)
                if (a.hasOwnProperty(r)) {
                    var q = a[r];
                    if (q != null)
                        switch (r) {
                        case "name":
                            o = q;
                            break;
                        case "type":
                            g = q;
                            break;
                        case "checked":
                            E = q;
                            break;
                        case "defaultChecked":
                            O = q;
                            break;
                        case "value":
                            c = q;
                            break;
                        case "defaultValue":
                            x = q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null)
                                throw Error(l(137, t));
                            break;
                        default:
                            De(e, t, r, q, a, null)
                        }
                }
            xh(e, c, x, E, O, g, o, !1),
            Bs(e);
            return;
        case "select":
            xe("invalid", e),
            r = g = c = null;
            for (o in a)
                if (a.hasOwnProperty(o) && (x = a[o],
                x != null))
                    switch (o) {
                    case "value":
                        c = x;
                        break;
                    case "defaultValue":
                        g = x;
                        break;
                    case "multiple":
                        r = x;
                    default:
                        De(e, t, o, x, a, null)
                    }
            t = c,
            a = g,
            e.multiple = !!r,
            t != null ? ra(e, !!r, t, !1) : a != null && ra(e, !!r, a, !0);
            return;
        case "textarea":
            xe("invalid", e),
            c = o = r = null;
            for (g in a)
                if (a.hasOwnProperty(g) && (x = a[g],
                x != null))
                    switch (g) {
                    case "value":
                        r = x;
                        break;
                    case "defaultValue":
                        o = x;
                        break;
                    case "children":
                        c = x;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(l(91));
                        break;
                    default:
                        De(e, t, g, x, a, null)
                    }
            wh(e, r, o, c),
            Bs(e);
            return;
        case "option":
            for (E in a)
                if (a.hasOwnProperty(E) && (r = a[E],
                r != null))
                    switch (E) {
                    case "selected":
                        e.selected = r && typeof r != "function" && typeof r != "symbol";
                        break;
                    default:
                        De(e, t, E, r, a, null)
                    }
            return;
        case "dialog":
            xe("cancel", e),
            xe("close", e);
            break;
        case "iframe":
        case "object":
            xe("load", e);
            break;
        case "video":
        case "audio":
            for (r = 0; r < Yr.length; r++)
                xe(Yr[r], e);
            break;
        case "image":
            xe("error", e),
            xe("load", e);
            break;
        case "details":
            xe("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            xe("error", e),
            xe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (O in a)
                if (a.hasOwnProperty(O) && (r = a[O],
                r != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                    default:
                        De(e, t, O, r, a, null)
                    }
            return;
        default:
            if (Qo(t)) {
                for (q in a)
                    a.hasOwnProperty(q) && (r = a[q],
                    r !== void 0 && Uc(e, t, q, r, a, void 0));
                return
            }
        }
        for (x in a)
            a.hasOwnProperty(x) && (r = a[x],
            r != null && De(e, t, x, r, a, null))
    }
    function Ix(e, t, a, r) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , c = null
              , g = null
              , x = null
              , E = null
              , O = null
              , q = null;
            for (Y in a) {
                var K = a[Y];
                if (a.hasOwnProperty(Y) && K != null)
                    switch (Y) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        E = K;
                    default:
                        r.hasOwnProperty(Y) || De(e, t, Y, null, r, K)
                    }
            }
            for (var B in r) {
                var Y = r[B];
                if (K = a[B],
                r.hasOwnProperty(B) && (Y != null || K != null))
                    switch (B) {
                    case "type":
                        c = Y;
                        break;
                    case "name":
                        o = Y;
                        break;
                    case "checked":
                        O = Y;
                        break;
                    case "defaultChecked":
                        q = Y;
                        break;
                    case "value":
                        g = Y;
                        break;
                    case "defaultValue":
                        x = Y;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (Y != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        Y !== K && De(e, t, B, Y, r, K)
                    }
            }
            Fo(e, g, x, E, O, q, c, o);
            return;
        case "select":
            Y = g = x = B = null;
            for (c in a)
                if (E = a[c],
                a.hasOwnProperty(c) && E != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        Y = E;
                    default:
                        r.hasOwnProperty(c) || De(e, t, c, null, r, E)
                    }
            for (o in r)
                if (c = r[o],
                E = a[o],
                r.hasOwnProperty(o) && (c != null || E != null))
                    switch (o) {
                    case "value":
                        B = c;
                        break;
                    case "defaultValue":
                        x = c;
                        break;
                    case "multiple":
                        g = c;
                    default:
                        c !== E && De(e, t, o, c, r, E)
                    }
            t = x,
            a = g,
            r = Y,
            B != null ? ra(e, !!a, B, !1) : !!r != !!a && (t != null ? ra(e, !!a, t, !0) : ra(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            Y = B = null;
            for (x in a)
                if (o = a[x],
                a.hasOwnProperty(x) && o != null && !r.hasOwnProperty(x))
                    switch (x) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        De(e, t, x, null, r, o)
                    }
            for (g in r)
                if (o = r[g],
                c = a[g],
                r.hasOwnProperty(g) && (o != null || c != null))
                    switch (g) {
                    case "value":
                        B = o;
                        break;
                    case "defaultValue":
                        Y = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(l(91));
                        break;
                    default:
                        o !== c && De(e, t, g, o, r, c)
                    }
            Sh(e, B, Y);
            return;
        case "option":
            for (var ae in a)
                if (B = a[ae],
                a.hasOwnProperty(ae) && B != null && !r.hasOwnProperty(ae))
                    switch (ae) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        De(e, t, ae, null, r, B)
                    }
            for (E in r)
                if (B = r[E],
                Y = a[E],
                r.hasOwnProperty(E) && B !== Y && (B != null || Y != null))
                    switch (E) {
                    case "selected":
                        e.selected = B && typeof B != "function" && typeof B != "symbol";
                        break;
                    default:
                        De(e, t, E, B, r, Y)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var de in a)
                B = a[de],
                a.hasOwnProperty(de) && B != null && !r.hasOwnProperty(de) && De(e, t, de, null, r, B);
            for (O in r)
                if (B = r[O],
                Y = a[O],
                r.hasOwnProperty(O) && B !== Y && (B != null || Y != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (B != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        De(e, t, O, B, r, Y)
                    }
            return;
        default:
            if (Qo(t)) {
                for (var qe in a)
                    B = a[qe],
                    a.hasOwnProperty(qe) && B !== void 0 && !r.hasOwnProperty(qe) && Uc(e, t, qe, void 0, r, B);
                for (q in r)
                    B = r[q],
                    Y = a[q],
                    !r.hasOwnProperty(q) || B === Y || B === void 0 && Y === void 0 || Uc(e, t, q, B, r, Y);
                return
            }
        }
        for (var L in a)
            B = a[L],
            a.hasOwnProperty(L) && B != null && !r.hasOwnProperty(L) && De(e, t, L, null, r, B);
        for (K in r)
            B = r[K],
            Y = a[K],
            !r.hasOwnProperty(K) || B === Y || B == null && Y == null || De(e, t, K, B, r, Y)
    }
    var zc = null
      , kc = null;
    function Dl(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function pg(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function gg(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Vc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Bc = null;
    function eS() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Bc ? !1 : (Bc = e,
        !0) : (Bc = null,
        !1)
    }
    var yg = typeof setTimeout == "function" ? setTimeout : void 0
      , tS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , vg = typeof Promise == "function" ? Promise : void 0
      , nS = typeof queueMicrotask == "function" ? queueMicrotask : typeof vg < "u" ? function(e) {
        return vg.resolve(null).then(e).catch(iS)
    }
    : yg;
    function iS(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Nc(e, t) {
        var a = t
          , r = 0;
        do {
            var o = a.nextSibling;
            if (e.removeChild(a),
            o && o.nodeType === 8)
                if (a = o.data,
                a === "/$") {
                    if (r === 0) {
                        e.removeChild(o),
                        Wr(t);
                        return
                    }
                    r--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || r++;
            a = o
        } while (a);
        Wr(t)
    }
    function Hc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Hc(a),
                Ko(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(a)
        }
    }
    function aS(e, t, a, r) {
        for (; e.nodeType === 1; ) {
            var o = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (r) {
                if (!e[sr])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (c = e.getAttribute("rel"),
                        c === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (c !== o.rel || e.getAttribute("href") !== (o.href == null ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"),
                        (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === c)
                    return e
            } else
                return e;
            if (e = en(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function rS(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = en(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function en(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function bg(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function xg(e, t, a) {
        switch (t = Dl(a),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(l(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(l(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(l(454));
            return e;
        default:
            throw Error(l(451))
        }
    }
    var $t = new Map
      , Sg = new Set;
    function Ol(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument
    }
    var zn = J.d;
    J.d = {
        f: sS,
        r: lS,
        D: oS,
        C: uS,
        L: cS,
        m: fS,
        X: hS,
        S: dS,
        M: mS
    };
    function sS() {
        var e = zn.f()
          , t = Tl();
        return e || t
    }
    function lS(e) {
        var t = na(e);
        t !== null && t.tag === 5 && t.type === "form" ? Fm(t) : zn.r(e)
    }
    var _a = typeof document > "u" ? null : document;
    function wg(e, t, a) {
        var r = _a;
        if (r && typeof t == "string" && t) {
            var o = zt(t);
            o = 'link[rel="' + e + '"][href="' + o + '"]',
            typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
            Sg.has(o) || (Sg.add(o),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            r.querySelector(o) === null && (t = r.createElement("link"),
            ft(t, "link", e),
            it(t),
            r.head.appendChild(t)))
        }
    }
    function oS(e) {
        zn.D(e),
        wg("dns-prefetch", e, null)
    }
    function uS(e, t) {
        zn.C(e, t),
        wg("preconnect", e, t)
    }
    function cS(e, t, a) {
        zn.L(e, t, a);
        var r = _a;
        if (r && e && t) {
            var o = 'link[rel="preload"][as="' + zt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + zt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (o += '[imagesizes="' + zt(a.imageSizes) + '"]')) : o += '[href="' + zt(e) + '"]';
            var c = o;
            switch (t) {
            case "style":
                c = Ua(e);
                break;
            case "script":
                c = za(e)
            }
            $t.has(c) || (e = G({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            $t.set(c, e),
            r.querySelector(o) !== null || t === "style" && r.querySelector($r(c)) || t === "script" && r.querySelector(Xr(c)) || (t = r.createElement("link"),
            ft(t, "link", e),
            it(t),
            r.head.appendChild(t)))
        }
    }
    function fS(e, t) {
        zn.m(e, t);
        var a = _a;
        if (a && e) {
            var r = t && typeof t.as == "string" ? t.as : "script"
              , o = 'link[rel="modulepreload"][as="' + zt(r) + '"][href="' + zt(e) + '"]'
              , c = o;
            switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = za(e)
            }
            if (!$t.has(c) && (e = G({
                rel: "modulepreload",
                href: e
            }, t),
            $t.set(c, e),
            a.querySelector(o) === null)) {
                switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Xr(c)))
                        return
                }
                r = a.createElement("link"),
                ft(r, "link", e),
                it(r),
                a.head.appendChild(r)
            }
        }
    }
    function dS(e, t, a) {
        zn.S(e, t, a);
        var r = _a;
        if (r && e) {
            var o = ia(r).hoistableStyles
              , c = Ua(e);
            t = t || "default";
            var g = o.get(c);
            if (!g) {
                var x = {
                    loading: 0,
                    preload: null
                };
                if (g = r.querySelector($r(c)))
                    x.loading = 5;
                else {
                    e = G({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = $t.get(c)) && Pc(e, a);
                    var E = g = r.createElement("link");
                    it(E),
                    ft(E, "link", e),
                    E._p = new Promise(function(O, q) {
                        E.onload = O,
                        E.onerror = q
                    }
                    ),
                    E.addEventListener("load", function() {
                        x.loading |= 1
                    }),
                    E.addEventListener("error", function() {
                        x.loading |= 2
                    }),
                    x.loading |= 4,
                    Ll(g, t, r)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: x
                },
                o.set(c, g)
            }
        }
    }
    function hS(e, t) {
        zn.X(e, t);
        var a = _a;
        if (a && e) {
            var r = ia(a).hoistableScripts
              , o = za(e)
              , c = r.get(o);
            c || (c = a.querySelector(Xr(o)),
            c || (e = G({
                src: e,
                async: !0
            }, t),
            (t = $t.get(o)) && Gc(e, t),
            c = a.createElement("script"),
            it(c),
            ft(c, "link", e),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            r.set(o, c))
        }
    }
    function mS(e, t) {
        zn.M(e, t);
        var a = _a;
        if (a && e) {
            var r = ia(a).hoistableScripts
              , o = za(e)
              , c = r.get(o);
            c || (c = a.querySelector(Xr(o)),
            c || (e = G({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = $t.get(o)) && Gc(e, t),
            c = a.createElement("script"),
            it(c),
            ft(c, "link", e),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            r.set(o, c))
        }
    }
    function Tg(e, t, a, r) {
        var o = (o = Ie.current) ? Ol(o) : null;
        if (!o)
            throw Error(l(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ua(a.href),
            a = ia(o).hoistableStyles,
            r = a.get(t),
            r || (r = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, r)),
            r) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Ua(a.href);
                var c = ia(o).hoistableStyles
                  , g = c.get(e);
                if (g || (o = o.ownerDocument || o,
                g = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(e, g),
                (c = o.querySelector($r(e))) && !c._p && (g.instance = c,
                g.state.loading = 5),
                $t.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                $t.set(e, a),
                c || pS(o, e, a, g.state))),
                t && r === null)
                    throw Error(l(528, ""));
                return g
            }
            if (t && r !== null)
                throw Error(l(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = za(a),
            a = ia(o).hoistableScripts,
            r = a.get(t),
            r || (r = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, r)),
            r) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(l(444, e))
        }
    }
    function Ua(e) {
        return 'href="' + zt(e) + '"'
    }
    function $r(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Eg(e) {
        return G({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function pS(e, t, a, r) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"),
        r.preload = t,
        t.addEventListener("load", function() {
            return r.loading |= 1
        }),
        t.addEventListener("error", function() {
            return r.loading |= 2
        }),
        ft(t, "link", a),
        it(t),
        e.head.appendChild(t))
    }
    function za(e) {
        return '[src="' + zt(e) + '"]'
    }
    function Xr(e) {
        return "script[async]" + e
    }
    function Rg(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + zt(a.href) + '"]');
                if (r)
                    return t.instance = r,
                    it(r),
                    r;
                var o = G({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return r = (e.ownerDocument || e).createElement("style"),
                it(r),
                ft(r, "style", o),
                Ll(r, a.precedence, e),
                t.instance = r;
            case "stylesheet":
                o = Ua(a.href);
                var c = e.querySelector($r(o));
                if (c)
                    return t.state.loading |= 4,
                    t.instance = c,
                    it(c),
                    c;
                r = Eg(a),
                (o = $t.get(o)) && Pc(r, o),
                c = (e.ownerDocument || e).createElement("link"),
                it(c);
                var g = c;
                return g._p = new Promise(function(x, E) {
                    g.onload = x,
                    g.onerror = E
                }
                ),
                ft(c, "link", r),
                t.state.loading |= 4,
                Ll(c, a.precedence, e),
                t.instance = c;
            case "script":
                return c = za(a.src),
                (o = e.querySelector(Xr(c))) ? (t.instance = o,
                it(o),
                o) : (r = a,
                (o = $t.get(c)) && (r = G({}, a),
                Gc(r, o)),
                e = e.ownerDocument || e,
                o = e.createElement("script"),
                it(o),
                ft(o, "link", r),
                e.head.appendChild(o),
                t.instance = o);
            case "void":
                return null;
            default:
                throw Error(l(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance,
            t.state.loading |= 4,
            Ll(r, a.precedence, e));
        return t.instance
    }
    function Ll(e, t, a) {
        for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, c = o, g = 0; g < r.length; g++) {
            var x = r[g];
            if (x.dataset.precedence === t)
                c = x;
            else if (c !== o)
                break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function Pc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Gc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var _l = null;
    function Ag(e, t, a) {
        if (_l === null) {
            var r = new Map
              , o = _l = new Map;
            o.set(a, r)
        } else
            o = _l,
            r = o.get(a),
            r || (r = new Map,
            o.set(a, r));
        if (r.has(e))
            return r;
        for (r.set(e, null),
        a = a.getElementsByTagName(e),
        o = 0; o < a.length; o++) {
            var c = a[o];
            if (!(c[sr] || c[ht] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = c.getAttribute(t) || "";
                g = e + g;
                var x = r.get(g);
                x ? x.push(c) : r.set(g, [c])
            }
        }
        return r
    }
    function Cg(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function gS(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function jg(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Kr = null;
    function yS() {}
    function vS(e, t, a) {
        if (Kr === null)
            throw Error(l(475));
        var r = Kr;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var o = Ua(a.href)
                  , c = e.querySelector($r(o));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++,
                    r = Ul.bind(r),
                    e.then(r, r)),
                    t.state.loading |= 4,
                    t.instance = c,
                    it(c);
                    return
                }
                c = e.ownerDocument || e,
                a = Eg(a),
                (o = $t.get(o)) && Pc(a, o),
                c = c.createElement("link"),
                it(c);
                var g = c;
                g._p = new Promise(function(x, E) {
                    g.onload = x,
                    g.onerror = E
                }
                ),
                ft(c, "link", a),
                t.instance = c
            }
            r.stylesheets === null && (r.stylesheets = new Map),
            r.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++,
            t = Ul.bind(r),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function bS() {
        if (Kr === null)
            throw Error(l(475));
        var e = Kr;
        return e.stylesheets && e.count === 0 && Yc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && Yc(e, e.stylesheets),
                e.unsuspend) {
                    var r = e.unsuspend;
                    e.unsuspend = null,
                    r()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function Ul() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Yc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var zl = null;
    function Yc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        zl = new Map,
        t.forEach(xS, e),
        zl = null,
        Ul.call(e))
    }
    function xS(e, t) {
        if (!(t.state.loading & 4)) {
            var a = zl.get(e);
            if (a)
                var r = a.get(null);
            else {
                a = new Map,
                zl.set(e, a);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
                    var g = o[c];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (a.set(g.dataset.precedence, g),
                    r = g)
                }
                r && a.set(null, r)
            }
            o = t.instance,
            g = o.getAttribute("data-precedence"),
            c = a.get(g) || r,
            c === r && a.set(null, o),
            a.set(g, o),
            this.count++,
            r = Ul.bind(this),
            o.addEventListener("load", r),
            o.addEventListener("error", r),
            c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(o, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Fr = {
        $$typeof: T,
        Provider: null,
        Consumer: null,
        _currentValue: ce,
        _currentValue2: ce,
        _threadCount: 0
    };
    function SS(e, t, a, r, o, c, g, x) {
        this.tag = 1,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = $o(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = $o(0),
        this.hiddenUpdates = $o(null),
        this.identifierPrefix = r,
        this.onUncaughtError = o,
        this.onCaughtError = c,
        this.onRecoverableError = g,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = x,
        this.incompleteTransitions = new Map
    }
    function Mg(e, t, a, r, o, c, g, x, E, O, q, K) {
        return e = new SS(e,t,a,g,x,E,O,K),
        t = 1,
        c === !0 && (t |= 24),
        c = Yt(3, null, null, t),
        e.current = c,
        c.stateNode = e,
        t = Su(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        c.memoizedState = {
            element: r,
            isDehydrated: a,
            cache: t
        },
        tc(c),
        e
    }
    function Dg(e) {
        return e ? (e = ha,
        e) : ha
    }
    function Og(e, t, a, r, o, c) {
        o = Dg(o),
        r.context === null ? r.context = o : r.pendingContext = o,
        r = In(t),
        r.payload = {
            element: a
        },
        c = c === void 0 ? null : c,
        c !== null && (r.callback = c),
        a = ei(e, r, t),
        a !== null && (bt(a, e, t),
        Or(a, e, t))
    }
    function Lg(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function qc(e, t) {
        Lg(e, t),
        (e = e.alternate) && Lg(e, t)
    }
    function _g(e) {
        if (e.tag === 13) {
            var t = Xn(e, 67108864);
            t !== null && bt(t, e, 67108864),
            qc(e, 67108864)
        }
    }
    var kl = !0;
    function wS(e, t, a, r) {
        var o = _.T;
        _.T = null;
        var c = J.p;
        try {
            J.p = 2,
            $c(e, t, a, r)
        } finally {
            J.p = c,
            _.T = o
        }
    }
    function TS(e, t, a, r) {
        var o = _.T;
        _.T = null;
        var c = J.p;
        try {
            J.p = 8,
            $c(e, t, a, r)
        } finally {
            J.p = c,
            _.T = o
        }
    }
    function $c(e, t, a, r) {
        if (kl) {
            var o = Xc(r);
            if (o === null)
                _c(e, t, r, Vl, a),
                zg(e, r);
            else if (RS(o, e, t, a, r))
                r.stopPropagation();
            else if (zg(e, r),
            t & 4 && -1 < ES.indexOf(e)) {
                for (; o !== null; ) {
                    var c = na(o);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var g = vi(c.pendingLanes);
                                if (g !== 0) {
                                    var x = c;
                                    for (x.pendingLanes |= 2,
                                    x.entangledLanes |= 2; g; ) {
                                        var E = 1 << 31 - Rt(g);
                                        x.entanglements[1] |= E,
                                        g &= ~E
                                    }
                                    dn(c),
                                    (Ne & 6) === 0 && (xl = ln() + 500,
                                    Gr(0))
                                }
                            }
                            break;
                        case 13:
                            x = Xn(c, 2),
                            x !== null && bt(x, c, 2),
                            Tl(),
                            qc(c, 2)
                        }
                    if (c = Xc(r),
                    c === null && _c(e, t, r, Vl, a),
                    c === o)
                        break;
                    o = c
                }
                o !== null && r.stopPropagation()
            } else
                _c(e, t, r, null, a)
        }
    }
    function Xc(e) {
        return e = Wo(e),
        Kc(e)
    }
    var Vl = null;
    function Kc(e) {
        if (Vl = null,
        e = bi(e),
        e !== null) {
            var t = ee(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = ue(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Vl = e,
        null
    }
    function Ug(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (ub()) {
            case ah:
                return 2;
            case rh:
                return 8;
            case Ls:
            case cb:
                return 32;
            case sh:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Fc = !1
      , li = null
      , oi = null
      , ui = null
      , Zr = new Map
      , Qr = new Map
      , ci = []
      , ES = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zg(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            li = null;
            break;
        case "dragenter":
        case "dragleave":
            oi = null;
            break;
        case "mouseover":
        case "mouseout":
            ui = null;
            break;
        case "pointerover":
        case "pointerout":
            Zr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Qr.delete(t.pointerId)
        }
    }
    function Jr(e, t, a, r, o, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: r,
            nativeEvent: c,
            targetContainers: [o]
        },
        t !== null && (t = na(t),
        t !== null && _g(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e)
    }
    function RS(e, t, a, r, o) {
        switch (t) {
        case "focusin":
            return li = Jr(li, e, t, a, r, o),
            !0;
        case "dragenter":
            return oi = Jr(oi, e, t, a, r, o),
            !0;
        case "mouseover":
            return ui = Jr(ui, e, t, a, r, o),
            !0;
        case "pointerover":
            var c = o.pointerId;
            return Zr.set(c, Jr(Zr.get(c) || null, e, t, a, r, o)),
            !0;
        case "gotpointercapture":
            return c = o.pointerId,
            Qr.set(c, Jr(Qr.get(c) || null, e, t, a, r, o)),
            !0
        }
        return !1
    }
    function kg(e) {
        var t = bi(e.target);
        if (t !== null) {
            var a = ee(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = ue(a),
                    t !== null) {
                        e.blockedOn = t,
                        bb(e.priority, function() {
                            if (a.tag === 13) {
                                var r = Dt()
                                  , o = Xn(a, r);
                                o !== null && bt(o, a, r),
                                qc(a, r)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Bl(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = Xc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var r = new a.constructor(a.type,a);
                Jo = r,
                a.target.dispatchEvent(r),
                Jo = null
            } else
                return t = na(a),
                t !== null && _g(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function Vg(e, t, a) {
        Bl(e) && a.delete(t)
    }
    function AS() {
        Fc = !1,
        li !== null && Bl(li) && (li = null),
        oi !== null && Bl(oi) && (oi = null),
        ui !== null && Bl(ui) && (ui = null),
        Zr.forEach(Vg),
        Qr.forEach(Vg)
    }
    function Nl(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Fc || (Fc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, AS)))
    }
    var Hl = null;
    function Bg(e) {
        Hl !== e && (Hl = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Hl === e && (Hl = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , r = e[t + 1]
                  , o = e[t + 2];
                if (typeof r != "function") {
                    if (Kc(r || a) === null)
                        continue;
                    break
                }
                var c = na(a);
                c !== null && (e.splice(t, 3),
                t -= 3,
                Vu(c, {
                    pending: !0,
                    data: o,
                    method: a.method,
                    action: r
                }, r, o))
            }
        }))
    }
    function Wr(e) {
        function t(E) {
            return Nl(E, e)
        }
        li !== null && Nl(li, e),
        oi !== null && Nl(oi, e),
        ui !== null && Nl(ui, e),
        Zr.forEach(t),
        Qr.forEach(t);
        for (var a = 0; a < ci.length; a++) {
            var r = ci[a];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < ci.length && (a = ci[0],
        a.blockedOn === null); )
            kg(a),
            a.blockedOn === null && ci.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (r = 0; r < a.length; r += 3) {
                var o = a[r]
                  , c = a[r + 1]
                  , g = o[St] || null;
                if (typeof c == "function")
                    g || Bg(a);
                else if (g) {
                    var x = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c,
                        g = c[St] || null)
                            x = g.formAction;
                        else if (Kc(o) !== null)
                            continue
                    } else
                        x = g.action;
                    typeof x == "function" ? a[r + 1] = x : (a.splice(r, 3),
                    r -= 3),
                    Bg(a)
                }
            }
    }
    function Zc(e) {
        this._internalRoot = e
    }
    Pl.prototype.render = Zc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(l(409));
        var a = t.current
          , r = Dt();
        Og(a, r, e, t, null, null)
    }
    ,
    Pl.prototype.unmount = Zc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            e.tag === 0 && Da(),
            Og(e.current, 2, null, e, null, null),
            Tl(),
            t[ta] = null
        }
    }
    ;
    function Pl(e) {
        this._internalRoot = e
    }
    Pl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = dh();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < ci.length && t !== 0 && t < ci[a].priority; a++)
                ;
            ci.splice(a, 0, e),
            a === 0 && kg(e)
        }
    }
    ;
    var Ng = i.version;
    if (Ng !== "19.0.0")
        throw Error(l(527, Ng, "19.0.0"));
    J.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","),
            Error(l(268, e)));
        return e = X(t),
        e = e !== null ? te(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var CS = {
        bundleType: 0,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: _,
        findFiberByHostInstance: bi,
        reconcilerVersion: "19.0.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Gl.isDisabled && Gl.supportsFiber)
            try {
                ir = Gl.inject(CS),
                Et = Gl
            } catch {}
    }
    return es.createRoot = function(e, t) {
        if (!u(e))
            throw Error(l(299));
        var a = !1
          , r = ""
          , o = np
          , c = ip
          , g = ap
          , x = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
        t.onCaughtError !== void 0 && (c = t.onCaughtError),
        t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (x = t.unstable_transitionCallbacks)),
        t = Mg(e, 1, !1, null, null, a, r, o, c, g, x, null),
        e[ta] = t.current,
        Lc(e.nodeType === 8 ? e.parentNode : e),
        new Zc(t)
    }
    ,
    es.hydrateRoot = function(e, t, a) {
        if (!u(e))
            throw Error(l(299));
        var r = !1
          , o = ""
          , c = np
          , g = ip
          , x = ap
          , E = null
          , O = null;
        return a != null && (a.unstable_strictMode === !0 && (r = !0),
        a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
        a.onCaughtError !== void 0 && (g = a.onCaughtError),
        a.onRecoverableError !== void 0 && (x = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (E = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (O = a.formState)),
        t = Mg(e, 1, !0, t, a ?? null, r, o, c, g, x, E, O),
        t.context = Dg(null),
        a = t.current,
        r = Dt(),
        o = In(r),
        o.callback = null,
        ei(a, o, r),
        t.current.lanes = r,
        rr(t, r),
        dn(t),
        e[ta] = t.current,
        Lc(e),
        new Pl(t)
    }
    ,
    es.version = "19.0.0",
    es
}
var Zg;
function BS() {
    if (Zg)
        return Wc.exports;
    Zg = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    Wc.exports = VS(),
    Wc.exports
}
var NS = BS();
const HS = fd(NS);
var ts = {}, Qg;
function PS() {
    if (Qg)
        return ts;
    Qg = 1,
    Object.defineProperty(ts, "__esModule", {
        value: !0
    }),
    ts.parse = d,
    ts.serialize = m;
    const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
      , i = /^[\u0021-\u003A\u003C-\u007E]*$/
      , s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
      , l = /^[\u0020-\u003A\u003D-\u007E]*$/
      , u = Object.prototype.toString
      , f = ( () => {
        const S = function() {};
        return S.prototype = Object.create(null),
        S
    }
    )();
    function d(S, T) {
        const w = new f
          , j = S.length;
        if (j < 2)
            return w;
        const U = (T == null ? void 0 : T.decode) || y;
        let A = 0;
        do {
            const k = S.indexOf("=", A);
            if (k === -1)
                break;
            const V = S.indexOf(";", A)
              , F = V === -1 ? j : V;
            if (k > F) {
                A = S.lastIndexOf(";", k - 1) + 1;
                continue
            }
            const M = p(S, A, k)
              , N = h(S, k, M)
              , Q = S.slice(M, N);
            if (w[Q] === void 0) {
                let P = p(S, k + 1, F)
                  , _ = h(S, F, P);
                const G = U(S.slice(P, _));
                w[Q] = G
            }
            A = F + 1
        } while (A < j);
        return w
    }
    function p(S, T, w) {
        do {
            const j = S.charCodeAt(T);
            if (j !== 32 && j !== 9)
                return T
        } while (++T < w);
        return w
    }
    function h(S, T, w) {
        for (; T > w; ) {
            const j = S.charCodeAt(--T);
            if (j !== 32 && j !== 9)
                return T + 1
        }
        return w
    }
    function m(S, T, w) {
        const j = (w == null ? void 0 : w.encode) || encodeURIComponent;
        if (!n.test(S))
            throw new TypeError(`argument name is invalid: ${S}`);
        const U = j(T);
        if (!i.test(U))
            throw new TypeError(`argument val is invalid: ${T}`);
        let A = S + "=" + U;
        if (!w)
            return A;
        if (w.maxAge !== void 0) {
            if (!Number.isInteger(w.maxAge))
                throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
            A += "; Max-Age=" + w.maxAge
        }
        if (w.domain) {
            if (!s.test(w.domain))
                throw new TypeError(`option domain is invalid: ${w.domain}`);
            A += "; Domain=" + w.domain
        }
        if (w.path) {
            if (!l.test(w.path))
                throw new TypeError(`option path is invalid: ${w.path}`);
            A += "; Path=" + w.path
        }
        if (w.expires) {
            if (!b(w.expires) || !Number.isFinite(w.expires.valueOf()))
                throw new TypeError(`option expires is invalid: ${w.expires}`);
            A += "; Expires=" + w.expires.toUTCString()
        }
        if (w.httpOnly && (A += "; HttpOnly"),
        w.secure && (A += "; Secure"),
        w.partitioned && (A += "; Partitioned"),
        w.priority)
            switch (typeof w.priority == "string" ? w.priority.toLowerCase() : void 0) {
            case "low":
                A += "; Priority=Low";
                break;
            case "medium":
                A += "; Priority=Medium";
                break;
            case "high":
                A += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${w.priority}`)
            }
        if (w.sameSite)
            switch (typeof w.sameSite == "string" ? w.sameSite.toLowerCase() : w.sameSite) {
            case !0:
            case "strict":
                A += "; SameSite=Strict";
                break;
            case "lax":
                A += "; SameSite=Lax";
                break;
            case "none":
                A += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)
            }
        return A
    }
    function y(S) {
        if (S.indexOf("%") === -1)
            return S;
        try {
            return decodeURIComponent(S)
        } catch {
            return S
        }
    }
    function b(S) {
        return u.call(S) === "[object Date]"
    }
    return ts
}
PS();
/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Jg = "popstate";
function GS(n={}) {
    function i(u, f) {
        let {pathname: d="/", search: p="", hash: h=""} = Wi(u.location.hash.substring(1));
        return !d.startsWith("/") && !d.startsWith(".") && (d = "/" + d),
        zf("", {
            pathname: d,
            search: p,
            hash: h
        }, f.state && f.state.usr || null, f.state && f.state.key || "default")
    }
    function s(u, f) {
        let d = u.document.querySelector("base")
          , p = "";
        if (d && d.getAttribute("href")) {
            let h = u.location.href
              , m = h.indexOf("#");
            p = m === -1 ? h : h.slice(0, m)
        }
        return p + "#" + (typeof f == "string" ? f : hs(f))
    }
    function l(u, f) {
        rn(u.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)
    }
    return qS(i, s, l, n)
}
function Pe(n, i) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(i)
}
function rn(n, i) {
    if (!n) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}
function YS() {
    return Math.random().toString(36).substring(2, 10)
}
function Wg(n, i) {
    return {
        usr: n.state,
        key: n.key,
        idx: i
    }
}
function zf(n, i, s=null, l) {
    return {
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? Wi(i) : i,
        state: s,
        key: i && i.key || l || YS()
    }
}
function hs({pathname: n="/", search: i="", hash: s=""}) {
    return i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s),
    n
}
function Wi(n) {
    let i = {};
    if (n) {
        let s = n.indexOf("#");
        s >= 0 && (i.hash = n.substring(s),
        n = n.substring(0, s));
        let l = n.indexOf("?");
        l >= 0 && (i.search = n.substring(l),
        n = n.substring(0, l)),
        n && (i.pathname = n)
    }
    return i
}
function qS(n, i, s, l={}) {
    let {window: u=document.defaultView, v5Compat: f=!1} = l
      , d = u.history
      , p = "POP"
      , h = null
      , m = y();
    m == null && (m = 0,
    d.replaceState({
        ...d.state,
        idx: m
    }, ""));
    function y() {
        return (d.state || {
            idx: null
        }).idx
    }
    function b() {
        p = "POP";
        let U = y()
          , A = U == null ? null : U - m;
        m = U,
        h && h({
            action: p,
            location: j.location,
            delta: A
        })
    }
    function S(U, A) {
        p = "PUSH";
        let k = zf(j.location, U, A);
        s && s(k, U),
        m = y() + 1;
        let V = Wg(k, m)
          , F = j.createHref(k);
        try {
            d.pushState(V, "", F)
        } catch (M) {
            if (M instanceof DOMException && M.name === "DataCloneError")
                throw M;
            u.location.assign(F)
        }
        f && h && h({
            action: p,
            location: j.location,
            delta: 1
        })
    }
    function T(U, A) {
        p = "REPLACE";
        let k = zf(j.location, U, A);
        s && s(k, U),
        m = y();
        let V = Wg(k, m)
          , F = j.createHref(k);
        d.replaceState(V, "", F),
        f && h && h({
            action: p,
            location: j.location,
            delta: 0
        })
    }
    function w(U) {
        let A = u.location.origin !== "null" ? u.location.origin : u.location.href
          , k = typeof U == "string" ? U : hs(U);
        return k = k.replace(/ $/, "%20"),
        Pe(A, `No window.location.(origin|href) available to create URL for href: ${k}`),
        new URL(k,A)
    }
    let j = {
        get action() {
            return p
        },
        get location() {
            return n(u, d)
        },
        listen(U) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return u.addEventListener(Jg, b),
            h = U,
            () => {
                u.removeEventListener(Jg, b),
                h = null
            }
        },
        createHref(U) {
            return i(u, U)
        },
        createURL: w,
        encodeLocation(U) {
            let A = w(U);
            return {
                pathname: A.pathname,
                search: A.search,
                hash: A.hash
            }
        },
        push: S,
        replace: T,
        go(U) {
            return d.go(U)
        }
    };
    return j
}
function Py(n, i, s="/") {
    return $S(n, i, s, !1)
}
function $S(n, i, s, l) {
    let u = typeof i == "string" ? Wi(i) : i
      , f = Hn(u.pathname || "/", s);
    if (f == null)
        return null;
    let d = Gy(n);
    XS(d);
    let p = null;
    for (let h = 0; p == null && h < d.length; ++h) {
        let m = iw(f);
        p = tw(d[h], m, l)
    }
    return p
}
function Gy(n, i=[], s=[], l="") {
    let u = (f, d, p) => {
        let h = {
            relativePath: p === void 0 ? f.path || "" : p,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: d,
            route: f
        };
        h.relativePath.startsWith("/") && (Pe(h.relativePath.startsWith(l), `Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        h.relativePath = h.relativePath.slice(l.length));
        let m = Vn([l, h.relativePath])
          , y = s.concat(h);
        f.children && f.children.length > 0 && (Pe(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`),
        Gy(f.children, i, y, m)),
        !(f.path == null && !f.index) && i.push({
            path: m,
            score: IS(m, f.index),
            routesMeta: y
        })
    }
    ;
    return n.forEach( (f, d) => {
        var p;
        if (f.path === "" || !((p = f.path) != null && p.includes("?")))
            u(f, d);
        else
            for (let h of Yy(f.path))
                u(f, d, h)
    }
    ),
    i
}
function Yy(n) {
    let i = n.split("/");
    if (i.length === 0)
        return [];
    let[s,...l] = i
      , u = s.endsWith("?")
      , f = s.replace(/\?$/, "");
    if (l.length === 0)
        return u ? [f, ""] : [f];
    let d = Yy(l.join("/"))
      , p = [];
    return p.push(...d.map(h => h === "" ? f : [f, h].join("/"))),
    u && p.push(...d),
    p.map(h => n.startsWith("/") && h === "" ? "/" : h)
}
function XS(n) {
    n.sort( (i, s) => i.score !== s.score ? s.score - i.score : ew(i.routesMeta.map(l => l.childrenIndex), s.routesMeta.map(l => l.childrenIndex)))
}
var KS = /^:[\w-]+$/
  , FS = 3
  , ZS = 2
  , QS = 1
  , JS = 10
  , WS = -2
  , Ig = n => n === "*";
function IS(n, i) {
    let s = n.split("/")
      , l = s.length;
    return s.some(Ig) && (l += WS),
    i && (l += ZS),
    s.filter(u => !Ig(u)).reduce( (u, f) => u + (KS.test(f) ? FS : f === "" ? QS : JS), l)
}
function ew(n, i) {
    return n.length === i.length && n.slice(0, -1).every( (l, u) => l === i[u]) ? n[n.length - 1] - i[i.length - 1] : 0
}
function tw(n, i, s=!1) {
    let {routesMeta: l} = n
      , u = {}
      , f = "/"
      , d = [];
    for (let p = 0; p < l.length; ++p) {
        let h = l[p]
          , m = p === l.length - 1
          , y = f === "/" ? i : i.slice(f.length) || "/"
          , b = ho({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, y)
          , S = h.route;
        if (!b && m && s && !l[l.length - 1].route.index && (b = ho({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: !1
        }, y)),
        !b)
            return null;
        Object.assign(u, b.params),
        d.push({
            params: u,
            pathname: Vn([f, b.pathname]),
            pathnameBase: lw(Vn([f, b.pathnameBase])),
            route: S
        }),
        b.pathnameBase !== "/" && (f = Vn([f, b.pathnameBase]))
    }
    return d
}
function ho(n, i) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[s,l] = nw(n.path, n.caseSensitive, n.end)
      , u = i.match(s);
    if (!u)
        return null;
    let f = u[0]
      , d = f.replace(/(.)\/+$/, "$1")
      , p = u.slice(1);
    return {
        params: l.reduce( (m, {paramName: y, isOptional: b}, S) => {
            if (y === "*") {
                let w = p[S] || "";
                d = f.slice(0, f.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const T = p[S];
            return b && !T ? m[y] = void 0 : m[y] = (T || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: f,
        pathnameBase: d,
        pattern: n
    }
}
function nw(n, i=!1, s=!0) {
    rn(n === "*" || !n.endsWith("*") || n.endsWith("/*"), `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`);
    let l = []
      , u = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, p, h) => (l.push({
        paramName: p,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (l.push({
        paramName: "*"
    }),
    u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? u += "\\/*$" : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u,i ? void 0 : "i"), l]
}
function iw(n) {
    try {
        return n.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return rn(!1, `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),
        n
    }
}
function Hn(n, i) {
    if (i === "/")
        return n;
    if (!n.toLowerCase().startsWith(i.toLowerCase()))
        return null;
    let s = i.endsWith("/") ? i.length - 1 : i.length
      , l = n.charAt(s);
    return l && l !== "/" ? null : n.slice(s) || "/"
}
function aw(n, i="/") {
    let {pathname: s, search: l="", hash: u=""} = typeof n == "string" ? Wi(n) : n;
    return {
        pathname: s ? s.startsWith("/") ? s : rw(s, i) : i,
        search: ow(l),
        hash: uw(u)
    }
}
function rw(n, i) {
    let s = i.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(u => {
        u === ".." ? s.length > 1 && s.pop() : u !== "." && s.push(u)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function nf(n, i, s, l) {
    return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function sw(n) {
    return n.filter( (i, s) => s === 0 || i.route.path && i.route.path.length > 0)
}
function qy(n) {
    let i = sw(n);
    return i.map( (s, l) => l === i.length - 1 ? s.pathname : s.pathnameBase)
}
function $y(n, i, s, l=!1) {
    let u;
    typeof n == "string" ? u = Wi(n) : (u = {
        ...n
    },
    Pe(!u.pathname || !u.pathname.includes("?"), nf("?", "pathname", "search", u)),
    Pe(!u.pathname || !u.pathname.includes("#"), nf("#", "pathname", "hash", u)),
    Pe(!u.search || !u.search.includes("#"), nf("#", "search", "hash", u)));
    let f = n === "" || u.pathname === "", d = f ? "/" : u.pathname, p;
    if (d == null)
        p = s;
    else {
        let b = i.length - 1;
        if (!l && d.startsWith("..")) {
            let S = d.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                b -= 1;
            u.pathname = S.join("/")
        }
        p = b >= 0 ? i[b] : "/"
    }
    let h = aw(u, p)
      , m = d && d !== "/" && d.endsWith("/")
      , y = (f || d === ".") && s.endsWith("/");
    return !h.pathname.endsWith("/") && (m || y) && (h.pathname += "/"),
    h
}
var Vn = n => n.join("/").replace(/\/\/+/g, "/")
  , lw = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , ow = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , uw = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function cw(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
var Xy = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Xy);
var fw = ["GET", ...Xy];
new Set(fw);
var Ia = C.createContext(null);
Ia.displayName = "DataRouter";
var Co = C.createContext(null);
Co.displayName = "DataRouterState";
var Ky = C.createContext({
    isTransitioning: !1
});
Ky.displayName = "ViewTransition";
var dw = C.createContext(new Map);
dw.displayName = "Fetchers";
var hw = C.createContext(null);
hw.displayName = "Await";
var gn = C.createContext(null);
gn.displayName = "Navigation";
var Es = C.createContext(null);
Es.displayName = "Location";
var yn = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
yn.displayName = "Route";
var dd = C.createContext(null);
dd.displayName = "RouteError";
function mw(n, {relative: i}={}) {
    Pe(Rs(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: s, navigator: l} = C.useContext(gn)
      , {hash: u, pathname: f, search: d} = As(n, {
        relative: i
    })
      , p = f;
    return s !== "/" && (p = f === "/" ? s : Vn([s, f])),
    l.createHref({
        pathname: p,
        search: d,
        hash: u
    })
}
function Rs() {
    return C.useContext(Es) != null
}
function Gn() {
    return Pe(Rs(), "useLocation() may be used only in the context of a <Router> component."),
    C.useContext(Es).location
}
var Fy = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zy(n) {
    C.useContext(gn).static || C.useLayoutEffect(n)
}
function jo() {
    let {isDataRoute: n} = C.useContext(yn);
    return n ? jw() : pw()
}
function pw() {
    Pe(Rs(), "useNavigate() may be used only in the context of a <Router> component.");
    let n = C.useContext(Ia)
      , {basename: i, navigator: s} = C.useContext(gn)
      , {matches: l} = C.useContext(yn)
      , {pathname: u} = Gn()
      , f = JSON.stringify(qy(l))
      , d = C.useRef(!1);
    return Zy( () => {
        d.current = !0
    }
    ),
    C.useCallback( (h, m={}) => {
        if (rn(d.current, Fy),
        !d.current)
            return;
        if (typeof h == "number") {
            s.go(h);
            return
        }
        let y = $y(h, JSON.parse(f), u, m.relative === "path");
        n == null && i !== "/" && (y.pathname = y.pathname === "/" ? i : Vn([i, y.pathname])),
        (m.replace ? s.replace : s.push)(y, m.state, m)
    }
    , [i, s, f, u, n])
}
C.createContext(null);
function gw() {
    let {matches: n} = C.useContext(yn)
      , i = n[n.length - 1];
    return i ? i.params : {}
}
function As(n, {relative: i}={}) {
    let {matches: s} = C.useContext(yn)
      , {pathname: l} = Gn()
      , u = JSON.stringify(qy(s));
    return C.useMemo( () => $y(n, JSON.parse(u), l, i === "path"), [n, u, l, i])
}
function yw(n, i) {
    return Qy(n, i)
}
function Qy(n, i, s, l) {
    var k;
    Pe(Rs(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: u, static: f} = C.useContext(gn)
      , {matches: d} = C.useContext(yn)
      , p = d[d.length - 1]
      , h = p ? p.params : {}
      , m = p ? p.pathname : "/"
      , y = p ? p.pathnameBase : "/"
      , b = p && p.route;
    {
        let V = b && b.path || "";
        Jy(m, !b || V.endsWith("*") || V.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`)
    }
    let S = Gn(), T;
    if (i) {
        let V = typeof i == "string" ? Wi(i) : i;
        Pe(y === "/" || ((k = V.pathname) == null ? void 0 : k.startsWith(y)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${V.pathname}" was given in the \`location\` prop.`),
        T = V
    } else
        T = S;
    let w = T.pathname || "/"
      , j = w;
    if (y !== "/") {
        let V = y.replace(/^\//, "").split("/");
        j = "/" + w.replace(/^\//, "").split("/").slice(V.length).join("/")
    }
    let U = !f && s && s.matches && s.matches.length > 0 ? s.matches : Py(n, {
        pathname: j
    });
    rn(b || U != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `),
    rn(U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let A = ww(U && U.map(V => Object.assign({}, V, {
        params: Object.assign({}, h, V.params),
        pathname: Vn([y, u.encodeLocation ? u.encodeLocation(V.pathname).pathname : V.pathname]),
        pathnameBase: V.pathnameBase === "/" ? y : Vn([y, u.encodeLocation ? u.encodeLocation(V.pathnameBase).pathname : V.pathnameBase])
    })), d, s, l);
    return i && A ? C.createElement(Es.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...T
            },
            navigationType: "POP"
        }
    }, A) : A
}
function vw() {
    let n = Cw()
      , i = cw(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n)
      , s = n instanceof Error ? n.stack : null
      , l = "rgba(200,200,200, 0.5)"
      , u = {
        padding: "0.5rem",
        backgroundColor: l
    }
      , f = {
        padding: "2px 4px",
        backgroundColor: l
    }
      , d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", n),
    d = C.createElement(C.Fragment, null, C.createElement("p", null, "💿 Hey developer 👋"), C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", C.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", C.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")),
    C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), s ? C.createElement("pre", {
        style: u
    }, s) : null, d)
}
var bw = C.createElement(vw, null)
  , xw = class extends C.Component {
    constructor(n) {
        super(n),
        this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    static getDerivedStateFromProps(n, i) {
        return i.location !== n.location || i.revalidation !== "idle" && n.revalidation === "idle" ? {
            error: n.error,
            location: n.location,
            revalidation: n.revalidation
        } : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation
        }
    }
    componentDidCatch(n, i) {
        console.error("React Router caught the following error during render", n, i)
    }
    render() {
        return this.state.error !== void 0 ? C.createElement(yn.Provider, {
            value: this.props.routeContext
        }, C.createElement(dd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Sw({routeContext: n, match: i, children: s}) {
    let l = C.useContext(Ia);
    return l && l.static && l.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = i.route.id),
    C.createElement(yn.Provider, {
        value: n
    }, s)
}
function ww(n, i=[], s=null, l=null) {
    if (n == null) {
        if (!s)
            return null;
        if (s.errors)
            n = s.matches;
        else if (i.length === 0 && !s.initialized && s.matches.length > 0)
            n = s.matches;
        else
            return null
    }
    let u = n
      , f = s == null ? void 0 : s.errors;
    if (f != null) {
        let h = u.findIndex(m => m.route.id && (f == null ? void 0 : f[m.route.id]) !== void 0);
        Pe(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
        u = u.slice(0, Math.min(u.length, h + 1))
    }
    let d = !1
      , p = -1;
    if (s)
        for (let h = 0; h < u.length; h++) {
            let m = u[h];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = h),
            m.route.id) {
                let {loaderData: y, errors: b} = s
                  , S = m.route.loader && !y.hasOwnProperty(m.route.id) && (!b || b[m.route.id] === void 0);
                if (m.route.lazy || S) {
                    d = !0,
                    p >= 0 ? u = u.slice(0, p + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight( (h, m, y) => {
        let b, S = !1, T = null, w = null;
        s && (b = f && m.route.id ? f[m.route.id] : void 0,
        T = m.route.errorElement || bw,
        d && (p < 0 && y === 0 ? (Jy("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        S = !0,
        w = null) : p === y && (S = !0,
        w = m.route.hydrateFallbackElement || null)));
        let j = i.concat(u.slice(0, y + 1))
          , U = () => {
            let A;
            return b ? A = T : S ? A = w : m.route.Component ? A = C.createElement(m.route.Component, null) : m.route.element ? A = m.route.element : A = h,
            C.createElement(Sw, {
                match: m,
                routeContext: {
                    outlet: h,
                    matches: j,
                    isDataRoute: s != null
                },
                children: A
            })
        }
        ;
        return s && (m.route.ErrorBoundary || m.route.errorElement || y === 0) ? C.createElement(xw, {
            location: s.location,
            revalidation: s.revalidation,
            component: T,
            error: b,
            children: U(),
            routeContext: {
                outlet: null,
                matches: j,
                isDataRoute: !0
            }
        }) : U()
    }
    , null)
}
function hd(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Tw(n) {
    let i = C.useContext(Ia);
    return Pe(i, hd(n)),
    i
}
function Ew(n) {
    let i = C.useContext(Co);
    return Pe(i, hd(n)),
    i
}
function Rw(n) {
    let i = C.useContext(yn);
    return Pe(i, hd(n)),
    i
}
function md(n) {
    let i = Rw(n)
      , s = i.matches[i.matches.length - 1];
    return Pe(s.route.id, `${n} can only be used on routes that contain a unique "id"`),
    s.route.id
}
function Aw() {
    return md("useRouteId")
}
function Cw() {
    var l;
    let n = C.useContext(dd)
      , i = Ew("useRouteError")
      , s = md("useRouteError");
    return n !== void 0 ? n : (l = i.errors) == null ? void 0 : l[s]
}
function jw() {
    let {router: n} = Tw("useNavigate")
      , i = md("useNavigate")
      , s = C.useRef(!1);
    return Zy( () => {
        s.current = !0
    }
    ),
    C.useCallback(async (u, f={}) => {
        rn(s.current, Fy),
        s.current && (typeof u == "number" ? n.navigate(u) : await n.navigate(u, {
            fromRouteId: i,
            ...f
        }))
    }
    , [n, i])
}
var e0 = {};
function Jy(n, i, s) {
    !i && !e0[n] && (e0[n] = !0,
    rn(!1, s))
}
C.memo(Mw);
function Mw({routes: n, future: i, state: s}) {
    return Qy(n, void 0, s, i)
}
function kf(n) {
    Pe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Dw({basename: n="/", children: i=null, location: s, navigationType: l="POP", navigator: u, static: f=!1}) {
    Pe(!Rs(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = n.replace(/^\/*/, "/")
      , p = C.useMemo( () => ({
        basename: d,
        navigator: u,
        static: f,
        future: {}
    }), [d, u, f]);
    typeof s == "string" && (s = Wi(s));
    let {pathname: h="/", search: m="", hash: y="", state: b=null, key: S="default"} = s
      , T = C.useMemo( () => {
        let w = Hn(h, d);
        return w == null ? null : {
            location: {
                pathname: w,
                search: m,
                hash: y,
                state: b,
                key: S
            },
            navigationType: l
        }
    }
    , [d, h, m, y, b, S, l]);
    return rn(T != null, `<Router basename="${d}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),
    T == null ? null : C.createElement(gn.Provider, {
        value: p
    }, C.createElement(Es.Provider, {
        children: i,
        value: T
    }))
}
function Ow({children: n, location: i}) {
    return yw(Vf(n), i)
}
function Vf(n, i=[]) {
    let s = [];
    return C.Children.forEach(n, (l, u) => {
        if (!C.isValidElement(l))
            return;
        let f = [...i, u];
        if (l.type === C.Fragment) {
            s.push.apply(s, Vf(l.props.children, f));
            return
        }
        Pe(l.type === kf, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        Pe(!l.props.index || !l.props.children, "An index route cannot have child routes.");
        let d = {
            id: l.props.id || f.join("-"),
            caseSensitive: l.props.caseSensitive,
            element: l.props.element,
            Component: l.props.Component,
            index: l.props.index,
            path: l.props.path,
            loader: l.props.loader,
            action: l.props.action,
            hydrateFallbackElement: l.props.hydrateFallbackElement,
            HydrateFallback: l.props.HydrateFallback,
            errorElement: l.props.errorElement,
            ErrorBoundary: l.props.ErrorBoundary,
            hasErrorBoundary: l.props.hasErrorBoundary === !0 || l.props.ErrorBoundary != null || l.props.errorElement != null,
            shouldRevalidate: l.props.shouldRevalidate,
            handle: l.props.handle,
            lazy: l.props.lazy
        };
        l.props.children && (d.children = Vf(l.props.children, f)),
        s.push(d)
    }
    ),
    s
}
var no = "get"
  , io = "application/x-www-form-urlencoded";
function Mo(n) {
    return n != null && typeof n.tagName == "string"
}
function Lw(n) {
    return Mo(n) && n.tagName.toLowerCase() === "button"
}
function _w(n) {
    return Mo(n) && n.tagName.toLowerCase() === "form"
}
function Uw(n) {
    return Mo(n) && n.tagName.toLowerCase() === "input"
}
function zw(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function kw(n, i) {
    return n.button === 0 && (!i || i === "_self") && !zw(n)
}
var Yl = null;
function Vw() {
    if (Yl === null)
        try {
            new FormData(document.createElement("form"),0),
            Yl = !1
        } catch {
            Yl = !0
        }
    return Yl
}
var Bw = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function af(n) {
    return n != null && !Bw.has(n) ? (rn(!1, `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),
    null) : n
}
function Nw(n, i) {
    let s, l, u, f, d;
    if (_w(n)) {
        let p = n.getAttribute("action");
        l = p ? Hn(p, i) : null,
        s = n.getAttribute("method") || no,
        u = af(n.getAttribute("enctype")) || io,
        f = new FormData(n)
    } else if (Lw(n) || Uw(n) && (n.type === "submit" || n.type === "image")) {
        let p = n.form;
        if (p == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let h = n.getAttribute("formaction") || p.getAttribute("action");
        if (l = h ? Hn(h, i) : null,
        s = n.getAttribute("formmethod") || p.getAttribute("method") || no,
        u = af(n.getAttribute("formenctype")) || af(p.getAttribute("enctype")) || io,
        f = new FormData(p,n),
        !Vw()) {
            let {name: m, type: y, value: b} = n;
            if (y === "image") {
                let S = m ? `${m}.` : "";
                f.append(`${S}x`, "0"),
                f.append(`${S}y`, "0")
            } else
                m && f.append(m, b)
        }
    } else {
        if (Mo(n))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = no,
        l = null,
        u = io,
        d = n
    }
    return f && u === "text/plain" && (d = f,
    f = void 0),
    {
        action: l,
        method: s.toLowerCase(),
        encType: u,
        formData: f,
        body: d
    }
}
function pd(n, i) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(i)
}
async function Hw(n, i) {
    if (n.id in i)
        return i[n.id];
    try {
        let s = await import(n.module);
        return i[n.id] = s,
        s
    } catch (s) {
        return console.error(`Error loading route module \`${n.module}\`, reloading page...`),
        console.error(s),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function Pw(n) {
    return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string"
}
async function Gw(n, i, s) {
    let l = await Promise.all(n.map(async u => {
        let f = i.routes[u.route.id];
        if (f) {
            let d = await Hw(f, s);
            return d.links ? d.links() : []
        }
        return []
    }
    ));
    return Xw(l.flat(1).filter(Pw).filter(u => u.rel === "stylesheet" || u.rel === "preload").map(u => u.rel === "stylesheet" ? {
        ...u,
        rel: "prefetch",
        as: "style"
    } : {
        ...u,
        rel: "prefetch"
    }))
}
function t0(n, i, s, l, u, f) {
    let d = (h, m) => s[m] ? h.route.id !== s[m].route.id : !0
      , p = (h, m) => {
        var y;
        return s[m].pathname !== h.pathname || ((y = s[m].route.path) == null ? void 0 : y.endsWith("*")) && s[m].params["*"] !== h.params["*"]
    }
    ;
    return f === "assets" ? i.filter( (h, m) => d(h, m) || p(h, m)) : f === "data" ? i.filter( (h, m) => {
        var b;
        let y = l.routes[h.route.id];
        if (!y || !y.hasLoader)
            return !1;
        if (d(h, m) || p(h, m))
            return !0;
        if (h.route.shouldRevalidate) {
            let S = h.route.shouldRevalidate({
                currentUrl: new URL(u.pathname + u.search + u.hash,window.origin),
                currentParams: ((b = s[0]) == null ? void 0 : b.params) || {},
                nextUrl: new URL(n,window.origin),
                nextParams: h.params,
                defaultShouldRevalidate: !0
            });
            if (typeof S == "boolean")
                return S
        }
        return !0
    }
    ) : []
}
function Yw(n, i, {includeHydrateFallback: s}={}) {
    return qw(n.map(l => {
        let u = i.routes[l.route.id];
        if (!u)
            return [];
        let f = [u.module];
        return u.clientActionModule && (f = f.concat(u.clientActionModule)),
        u.clientLoaderModule && (f = f.concat(u.clientLoaderModule)),
        s && u.hydrateFallbackModule && (f = f.concat(u.hydrateFallbackModule)),
        u.imports && (f = f.concat(u.imports)),
        f
    }
    ).flat(1))
}
function qw(n) {
    return [...new Set(n)]
}
function $w(n) {
    let i = {}
      , s = Object.keys(n).sort();
    for (let l of s)
        i[l] = n[l];
    return i
}
function Xw(n, i) {
    let s = new Set;
    return new Set(i),
    n.reduce( (l, u) => {
        let f = JSON.stringify($w(u));
        return s.has(f) || (s.add(f),
        l.push({
            key: f,
            link: u
        })),
        l
    }
    , [])
}
function Kw(n, i) {
    let s = typeof n == "string" ? new URL(n,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : n;
    return s.pathname === "/" ? s.pathname = "_root.data" : i && Hn(s.pathname, i) === "/" ? s.pathname = `${i.replace(/\/$/, "")}/_root.data` : s.pathname = `${s.pathname.replace(/\/$/, "")}.data`,
    s
}
function Wy() {
    let n = C.useContext(Ia);
    return pd(n, "You must render this element inside a <DataRouterContext.Provider> element"),
    n
}
function Fw() {
    let n = C.useContext(Co);
    return pd(n, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    n
}
var gd = C.createContext(void 0);
gd.displayName = "FrameworkContext";
function Iy() {
    let n = C.useContext(gd);
    return pd(n, "You must render this element inside a <HydratedRouter> element"),
    n
}
function Zw(n, i) {
    let s = C.useContext(gd)
      , [l,u] = C.useState(!1)
      , [f,d] = C.useState(!1)
      , {onFocus: p, onBlur: h, onMouseEnter: m, onMouseLeave: y, onTouchStart: b} = i
      , S = C.useRef(null);
    C.useEffect( () => {
        if (n === "render" && d(!0),
        n === "viewport") {
            let j = A => {
                A.forEach(k => {
                    d(k.isIntersecting)
                }
                )
            }
              , U = new IntersectionObserver(j,{
                threshold: .5
            });
            return S.current && U.observe(S.current),
            () => {
                U.disconnect()
            }
        }
    }
    , [n]),
    C.useEffect( () => {
        if (l) {
            let j = setTimeout( () => {
                d(!0)
            }
            , 100);
            return () => {
                clearTimeout(j)
            }
        }
    }
    , [l]);
    let T = () => {
        u(!0)
    }
      , w = () => {
        u(!1),
        d(!1)
    }
    ;
    return s ? n !== "intent" ? [f, S, {}] : [f, S, {
        onFocus: ns(p, T),
        onBlur: ns(h, w),
        onMouseEnter: ns(m, T),
        onMouseLeave: ns(y, w),
        onTouchStart: ns(b, T)
    }] : [!1, S, {}]
}
function ns(n, i) {
    return s => {
        n && n(s),
        s.defaultPrevented || i(s)
    }
}
function Qw({page: n, ...i}) {
    let {router: s} = Wy()
      , l = C.useMemo( () => Py(s.routes, n, s.basename), [s.routes, n, s.basename]);
    return l ? C.createElement(Ww, {
        page: n,
        matches: l,
        ...i
    }) : null
}
function Jw(n) {
    let {manifest: i, routeModules: s} = Iy()
      , [l,u] = C.useState([]);
    return C.useEffect( () => {
        let f = !1;
        return Gw(n, i, s).then(d => {
            f || u(d)
        }
        ),
        () => {
            f = !0
        }
    }
    , [n, i, s]),
    l
}
function Ww({page: n, matches: i, ...s}) {
    let l = Gn()
      , {manifest: u, routeModules: f} = Iy()
      , {basename: d} = Wy()
      , {loaderData: p, matches: h} = Fw()
      , m = C.useMemo( () => t0(n, i, h, u, l, "data"), [n, i, h, u, l])
      , y = C.useMemo( () => t0(n, i, h, u, l, "assets"), [n, i, h, u, l])
      , b = C.useMemo( () => {
        if (n === l.pathname + l.search + l.hash)
            return [];
        let w = new Set
          , j = !1;
        if (i.forEach(A => {
            var V;
            let k = u.routes[A.route.id];
            !k || !k.hasLoader || (!m.some(F => F.route.id === A.route.id) && A.route.id in p && ((V = f[A.route.id]) != null && V.shouldRevalidate) || k.hasClientLoader ? j = !0 : w.add(A.route.id))
        }
        ),
        w.size === 0)
            return [];
        let U = Kw(n, d);
        return j && w.size > 0 && U.searchParams.set("_routes", i.filter(A => w.has(A.route.id)).map(A => A.route.id).join(",")),
        [U.pathname + U.search]
    }
    , [d, p, l, u, m, i, n, f])
      , S = C.useMemo( () => Yw(y, u), [y, u])
      , T = Jw(y);
    return C.createElement(C.Fragment, null, b.map(w => C.createElement("link", {
        key: w,
        rel: "prefetch",
        as: "fetch",
        href: w,
        ...s
    })), S.map(w => C.createElement("link", {
        key: w,
        rel: "modulepreload",
        href: w,
        ...s
    })), T.map( ({key: w, link: j}) => C.createElement("link", {
        key: w,
        ...j
    })))
}
function Iw(...n) {
    return i => {
        n.forEach(s => {
            typeof s == "function" ? s(i) : s != null && (s.current = i)
        }
        )
    }
}
var ev = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    ev && (window.__reactRouterVersion = "7.3.0")
} catch {}
function e2({basename: n, children: i, window: s}) {
    let l = C.useRef();
    l.current == null && (l.current = GS({
        window: s,
        v5Compat: !0
    }));
    let u = l.current
      , [f,d] = C.useState({
        action: u.action,
        location: u.location
    })
      , p = C.useCallback(h => {
        C.startTransition( () => d(h))
    }
    , [d]);
    return C.useLayoutEffect( () => u.listen(p), [u, p]),
    C.createElement(Dw, {
        basename: n,
        children: i,
        location: f.location,
        navigationType: f.action,
        navigator: u
    })
}
var tv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , yd = C.forwardRef(function({onClick: i, discover: s="render", prefetch: l="none", relative: u, reloadDocument: f, replace: d, state: p, target: h, to: m, preventScrollReset: y, viewTransition: b, ...S}, T) {
    let {basename: w} = C.useContext(gn), j = typeof m == "string" && tv.test(m), U, A = !1;
    if (typeof m == "string" && j && (U = m,
    ev))
        try {
            let _ = new URL(window.location.href)
              , G = m.startsWith("//") ? new URL(_.protocol + m) : new URL(m)
              , W = Hn(G.pathname, w);
            G.origin === _.origin && W != null ? m = W + G.search + G.hash : A = !0
        } catch {
            rn(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let k = mw(m, {
        relative: u
    })
      , [V,F,M] = Zw(l, S)
      , N = a2(m, {
        replace: d,
        state: p,
        target: h,
        preventScrollReset: y,
        relative: u,
        viewTransition: b
    });
    function Q(_) {
        i && i(_),
        _.defaultPrevented || N(_)
    }
    let P = C.createElement("a", {
        ...S,
        ...M,
        href: U || k,
        onClick: A || f ? i : Q,
        ref: Iw(T, F),
        target: h,
        "data-discover": !j && s === "render" ? "true" : void 0
    });
    return V && !j ? C.createElement(C.Fragment, null, P, C.createElement(Qw, {
        page: k
    })) : P
});
yd.displayName = "Link";
var t2 = C.forwardRef(function({"aria-current": i="page", caseSensitive: s=!1, className: l="", end: u=!1, style: f, to: d, viewTransition: p, children: h, ...m}, y) {
    let b = As(d, {
        relative: m.relative
    })
      , S = Gn()
      , T = C.useContext(Co)
      , {navigator: w, basename: j} = C.useContext(gn)
      , U = T != null && u2(b) && p === !0
      , A = w.encodeLocation ? w.encodeLocation(b).pathname : b.pathname
      , k = S.pathname
      , V = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
    s || (k = k.toLowerCase(),
    V = V ? V.toLowerCase() : null,
    A = A.toLowerCase()),
    V && j && (V = Hn(V, j) || V);
    const F = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let M = k === A || !u && k.startsWith(A) && k.charAt(F) === "/", N = V != null && (V === A || !u && V.startsWith(A) && V.charAt(A.length) === "/"), Q = {
        isActive: M,
        isPending: N,
        isTransitioning: U
    }, P = M ? i : void 0, _;
    typeof l == "function" ? _ = l(Q) : _ = [l, M ? "active" : null, N ? "pending" : null, U ? "transitioning" : null].filter(Boolean).join(" ");
    let G = typeof f == "function" ? f(Q) : f;
    return C.createElement(yd, {
        ...m,
        "aria-current": P,
        className: _,
        ref: y,
        style: G,
        to: d,
        viewTransition: p
    }, typeof h == "function" ? h(Q) : h)
});
t2.displayName = "NavLink";
var n2 = C.forwardRef( ({discover: n="render", fetcherKey: i, navigate: s, reloadDocument: l, replace: u, state: f, method: d=no, action: p, onSubmit: h, relative: m, preventScrollReset: y, viewTransition: b, ...S}, T) => {
    let w = l2()
      , j = o2(p, {
        relative: m
    })
      , U = d.toLowerCase() === "get" ? "get" : "post"
      , A = typeof p == "string" && tv.test(p)
      , k = V => {
        if (h && h(V),
        V.defaultPrevented)
            return;
        V.preventDefault();
        let F = V.nativeEvent.submitter
          , M = (F == null ? void 0 : F.getAttribute("formmethod")) || d;
        w(F || V.currentTarget, {
            fetcherKey: i,
            method: M,
            navigate: s,
            replace: u,
            state: f,
            relative: m,
            preventScrollReset: y,
            viewTransition: b
        })
    }
    ;
    return C.createElement("form", {
        ref: T,
        method: U,
        action: j,
        onSubmit: l ? h : k,
        ...S,
        "data-discover": !A && n === "render" ? "true" : void 0
    })
}
);
n2.displayName = "Form";
function i2(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function nv(n) {
    let i = C.useContext(Ia);
    return Pe(i, i2(n)),
    i
}
function a2(n, {target: i, replace: s, state: l, preventScrollReset: u, relative: f, viewTransition: d}={}) {
    let p = jo()
      , h = Gn()
      , m = As(n, {
        relative: f
    });
    return C.useCallback(y => {
        if (kw(y, i)) {
            y.preventDefault();
            let b = s !== void 0 ? s : hs(h) === hs(m);
            p(n, {
                replace: b,
                state: l,
                preventScrollReset: u,
                relative: f,
                viewTransition: d
            })
        }
    }
    , [h, p, m, s, l, i, n, u, f, d])
}
var r2 = 0
  , s2 = () => `__${String(++r2)}__`;
function l2() {
    let {router: n} = nv("useSubmit")
      , {basename: i} = C.useContext(gn)
      , s = Aw();
    return C.useCallback(async (l, u={}) => {
        let {action: f, method: d, encType: p, formData: h, body: m} = Nw(l, i);
        if (u.navigate === !1) {
            let y = u.fetcherKey || s2();
            await n.fetch(y, s, u.action || f, {
                preventScrollReset: u.preventScrollReset,
                formData: h,
                body: m,
                formMethod: u.method || d,
                formEncType: u.encType || p,
                flushSync: u.flushSync
            })
        } else
            await n.navigate(u.action || f, {
                preventScrollReset: u.preventScrollReset,
                formData: h,
                body: m,
                formMethod: u.method || d,
                formEncType: u.encType || p,
                replace: u.replace,
                state: u.state,
                fromRouteId: s,
                flushSync: u.flushSync,
                viewTransition: u.viewTransition
            })
    }
    , [n, i, s])
}
function o2(n, {relative: i}={}) {
    let {basename: s} = C.useContext(gn)
      , l = C.useContext(yn);
    Pe(l, "useFormAction must be used inside a RouteContext");
    let[u] = l.matches.slice(-1)
      , f = {
        ...As(n || ".", {
            relative: i
        })
    }
      , d = Gn();
    if (n == null) {
        f.search = d.search;
        let p = new URLSearchParams(f.search)
          , h = p.getAll("index");
        if (h.some(y => y === "")) {
            p.delete("index"),
            h.filter(b => b).forEach(b => p.append("index", b));
            let y = p.toString();
            f.search = y ? `?${y}` : ""
        }
    }
    return (!n || n === ".") && u.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (f.pathname = f.pathname === "/" ? s : Vn([s, f.pathname])),
    hs(f)
}
function u2(n, i={}) {
    let s = C.useContext(Ky);
    Pe(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: l} = nv("useViewTransitionState")
      , u = As(n, {
        relative: i.relative
    });
    if (!s.isTransitioning)
        return !1;
    let f = Hn(s.currentLocation.pathname, l) || s.currentLocation.pathname
      , d = Hn(s.nextLocation.pathname, l) || s.nextLocation.pathname;
    return ho(u.pathname, d) != null || ho(u.pathname, f) != null
}
new TextEncoder;
var ot = function() {
    return ot = Object.assign || function(i) {
        for (var s, l = 1, u = arguments.length; l < u; l++) {
            s = arguments[l];
            for (var f in s)
                Object.prototype.hasOwnProperty.call(s, f) && (i[f] = s[f])
        }
        return i
    }
    ,
    ot.apply(this, arguments)
};
function ms(n, i, s) {
    if (s || arguments.length === 2)
        for (var l = 0, u = i.length, f; l < u; l++)
            (f || !(l in i)) && (f || (f = Array.prototype.slice.call(i, 0, l)),
            f[l] = i[l]);
    return n.concat(f || Array.prototype.slice.call(i))
}
var Ve = "-ms-"
  , us = "-moz-"
  , je = "-webkit-"
  , iv = "comm"
  , Do = "rule"
  , vd = "decl"
  , c2 = "@import"
  , av = "@keyframes"
  , f2 = "@layer"
  , rv = Math.abs
  , bd = String.fromCharCode
  , Bf = Object.assign;
function d2(n, i) {
    return lt(n, 0) ^ 45 ? (((i << 2 ^ lt(n, 0)) << 2 ^ lt(n, 1)) << 2 ^ lt(n, 2)) << 2 ^ lt(n, 3) : 0
}
function sv(n) {
    return n.trim()
}
function kn(n, i) {
    return (n = i.exec(n)) ? n[0] : n
}
function pe(n, i, s) {
    return n.replace(i, s)
}
function ao(n, i, s) {
    return n.indexOf(i, s)
}
function lt(n, i) {
    return n.charCodeAt(i) | 0
}
function Xa(n, i, s) {
    return n.slice(i, s)
}
function hn(n) {
    return n.length
}
function lv(n) {
    return n.length
}
function ss(n, i) {
    return i.push(n),
    n
}
function h2(n, i) {
    return n.map(i).join("")
}
function n0(n, i) {
    return n.filter(function(s) {
        return !kn(s, i)
    })
}
var Oo = 1
  , Ka = 1
  , ov = 0
  , Qt = 0
  , We = 0
  , er = "";
function Lo(n, i, s, l, u, f, d, p) {
    return {
        value: n,
        root: i,
        parent: s,
        type: l,
        props: u,
        children: f,
        line: Oo,
        column: Ka,
        length: d,
        return: "",
        siblings: p
    }
}
function di(n, i) {
    return Bf(Lo("", null, null, "", null, null, 0, n.siblings), n, {
        length: -n.length
    }, i)
}
function ka(n) {
    for (; n.root; )
        n = di(n.root, {
            children: [n]
        });
    ss(n, n.siblings)
}
function m2() {
    return We
}
function p2() {
    return We = Qt > 0 ? lt(er, --Qt) : 0,
    Ka--,
    We === 10 && (Ka = 1,
    Oo--),
    We
}
function an() {
    return We = Qt < ov ? lt(er, Qt++) : 0,
    Ka++,
    We === 10 && (Ka = 1,
    Oo++),
    We
}
function Fi() {
    return lt(er, Qt)
}
function ro() {
    return Qt
}
function _o(n, i) {
    return Xa(er, n, i)
}
function Nf(n) {
    switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function g2(n) {
    return Oo = Ka = 1,
    ov = hn(er = n),
    Qt = 0,
    []
}
function y2(n) {
    return er = "",
    n
}
function rf(n) {
    return sv(_o(Qt - 1, Hf(n === 91 ? n + 2 : n === 40 ? n + 1 : n)))
}
function v2(n) {
    for (; (We = Fi()) && We < 33; )
        an();
    return Nf(n) > 2 || Nf(We) > 3 ? "" : " "
}
function b2(n, i) {
    for (; --i && an() && !(We < 48 || We > 102 || We > 57 && We < 65 || We > 70 && We < 97); )
        ;
    return _o(n, ro() + (i < 6 && Fi() == 32 && an() == 32))
}
function Hf(n) {
    for (; an(); )
        switch (We) {
        case n:
            return Qt;
        case 34:
        case 39:
            n !== 34 && n !== 39 && Hf(We);
            break;
        case 40:
            n === 41 && Hf(n);
            break;
        case 92:
            an();
            break
        }
    return Qt
}
function x2(n, i) {
    for (; an() && n + We !== 57; )
        if (n + We === 84 && Fi() === 47)
            break;
    return "/*" + _o(i, Qt - 1) + "*" + bd(n === 47 ? n : an())
}
function S2(n) {
    for (; !Nf(Fi()); )
        an();
    return _o(n, Qt)
}
function w2(n) {
    return y2(so("", null, null, null, [""], n = g2(n), 0, [0], n))
}
function so(n, i, s, l, u, f, d, p, h) {
    for (var m = 0, y = 0, b = d, S = 0, T = 0, w = 0, j = 1, U = 1, A = 1, k = 0, V = "", F = u, M = f, N = l, Q = V; U; )
        switch (w = k,
        k = an()) {
        case 40:
            if (w != 108 && lt(Q, b - 1) == 58) {
                ao(Q += pe(rf(k), "&", "&\f"), "&\f", rv(m ? p[m - 1] : 0)) != -1 && (A = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            Q += rf(k);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            Q += v2(w);
            break;
        case 92:
            Q += b2(ro() - 1, 7);
            continue;
        case 47:
            switch (Fi()) {
            case 42:
            case 47:
                ss(T2(x2(an(), ro()), i, s, h), h);
                break;
            default:
                Q += "/"
            }
            break;
        case 123 * j:
            p[m++] = hn(Q) * A;
        case 125 * j:
        case 59:
        case 0:
            switch (k) {
            case 0:
            case 125:
                U = 0;
            case 59 + y:
                A == -1 && (Q = pe(Q, /\f/g, "")),
                T > 0 && hn(Q) - b && ss(T > 32 ? a0(Q + ";", l, s, b - 1, h) : a0(pe(Q, " ", "") + ";", l, s, b - 2, h), h);
                break;
            case 59:
                Q += ";";
            default:
                if (ss(N = i0(Q, i, s, m, y, u, p, V, F = [], M = [], b, f), f),
                k === 123)
                    if (y === 0)
                        so(Q, i, N, N, F, f, b, p, M);
                    else
                        switch (S === 99 && lt(Q, 3) === 110 ? 100 : S) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            so(n, N, N, l && ss(i0(n, N, N, 0, 0, u, p, V, u, F = [], b, M), M), u, M, b, p, l ? F : M);
                            break;
                        default:
                            so(Q, N, N, N, [""], M, 0, p, M)
                        }
            }
            m = y = T = 0,
            j = A = 1,
            V = Q = "",
            b = d;
            break;
        case 58:
            b = 1 + hn(Q),
            T = w;
        default:
            if (j < 1) {
                if (k == 123)
                    --j;
                else if (k == 125 && j++ == 0 && p2() == 125)
                    continue
            }
            switch (Q += bd(k),
            k * j) {
            case 38:
                A = y > 0 ? 1 : (Q += "\f",
                -1);
                break;
            case 44:
                p[m++] = (hn(Q) - 1) * A,
                A = 1;
                break;
            case 64:
                Fi() === 45 && (Q += rf(an())),
                S = Fi(),
                y = b = hn(V = Q += S2(ro())),
                k++;
                break;
            case 45:
                w === 45 && hn(Q) == 2 && (j = 0)
            }
        }
    return f
}
function i0(n, i, s, l, u, f, d, p, h, m, y, b) {
    for (var S = u - 1, T = u === 0 ? f : [""], w = lv(T), j = 0, U = 0, A = 0; j < l; ++j)
        for (var k = 0, V = Xa(n, S + 1, S = rv(U = d[j])), F = n; k < w; ++k)
            (F = sv(U > 0 ? T[k] + " " + V : pe(V, /&\f/g, T[k]))) && (h[A++] = F);
    return Lo(n, i, s, u === 0 ? Do : p, h, m, y, b)
}
function T2(n, i, s, l) {
    return Lo(n, i, s, iv, bd(m2()), Xa(n, 2, -2), 0, l)
}
function a0(n, i, s, l, u) {
    return Lo(n, i, s, vd, Xa(n, 0, l), Xa(n, l + 1, -1), l, u)
}
function uv(n, i, s) {
    switch (d2(n, i)) {
    case 5103:
        return je + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return je + n + n;
    case 4789:
        return us + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return je + n + us + n + Ve + n + n;
    case 5936:
        switch (lt(n, i + 11)) {
        case 114:
            return je + n + Ve + pe(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
            return je + n + Ve + pe(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
            return je + n + Ve + pe(n, /[svh]\w+-[tblr]{2}/, "lr") + n
        }
    case 6828:
    case 4268:
    case 2903:
        return je + n + Ve + n + n;
    case 6165:
        return je + n + Ve + "flex-" + n + n;
    case 5187:
        return je + n + pe(n, /(\w+).+(:[^]+)/, je + "box-$1$2" + Ve + "flex-$1$2") + n;
    case 5443:
        return je + n + Ve + "flex-item-" + pe(n, /flex-|-self/g, "") + (kn(n, /flex-|baseline/) ? "" : Ve + "grid-row-" + pe(n, /flex-|-self/g, "")) + n;
    case 4675:
        return je + n + Ve + "flex-line-pack" + pe(n, /align-content|flex-|-self/g, "") + n;
    case 5548:
        return je + n + Ve + pe(n, "shrink", "negative") + n;
    case 5292:
        return je + n + Ve + pe(n, "basis", "preferred-size") + n;
    case 6060:
        return je + "box-" + pe(n, "-grow", "") + je + n + Ve + pe(n, "grow", "positive") + n;
    case 4554:
        return je + pe(n, /([^-])(transform)/g, "$1" + je + "$2") + n;
    case 6187:
        return pe(pe(pe(n, /(zoom-|grab)/, je + "$1"), /(image-set)/, je + "$1"), n, "") + n;
    case 5495:
    case 3959:
        return pe(n, /(image-set\([^]*)/, je + "$1$`$1");
    case 4968:
        return pe(pe(n, /(.+:)(flex-)?(.*)/, je + "box-pack:$3" + Ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + je + n + n;
    case 4200:
        if (!kn(n, /flex-|baseline/))
            return Ve + "grid-column-align" + Xa(n, i) + n;
        break;
    case 2592:
    case 3360:
        return Ve + pe(n, "template-", "") + n;
    case 4384:
    case 3616:
        return s && s.some(function(l, u) {
            return i = u,
            kn(l.props, /grid-\w+-end/)
        }) ? ~ao(n + (s = s[i].value), "span", 0) ? n : Ve + pe(n, "-start", "") + n + Ve + "grid-row-span:" + (~ao(s, "span", 0) ? kn(s, /\d+/) : +kn(s, /\d+/) - +kn(n, /\d+/)) + ";" : Ve + pe(n, "-start", "") + n;
    case 4896:
    case 4128:
        return s && s.some(function(l) {
            return kn(l.props, /grid-\w+-start/)
        }) ? n : Ve + pe(pe(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return pe(n, /(.+)-inline(.+)/, je + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (hn(n) - 1 - i > 6)
            switch (lt(n, i + 1)) {
            case 109:
                if (lt(n, i + 4) !== 45)
                    break;
            case 102:
                return pe(n, /(.+:)(.+)-([^]+)/, "$1" + je + "$2-$3$1" + us + (lt(n, i + 3) == 108 ? "$3" : "$2-$3")) + n;
            case 115:
                return ~ao(n, "stretch", 0) ? uv(pe(n, "stretch", "fill-available"), i, s) + n : n
            }
        break;
    case 5152:
    case 5920:
        return pe(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(l, u, f, d, p, h, m) {
            return Ve + u + ":" + f + m + (d ? Ve + u + "-span:" + (p ? h : +h - +f) + m : "") + n
        });
    case 4949:
        if (lt(n, i + 6) === 121)
            return pe(n, ":", ":" + je) + n;
        break;
    case 6444:
        switch (lt(n, lt(n, 14) === 45 ? 18 : 11)) {
        case 120:
            return pe(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + je + (lt(n, 14) === 45 ? "inline-" : "") + "box$3$1" + je + "$2$3$1" + Ve + "$2box$3") + n;
        case 100:
            return pe(n, ":", ":" + Ve) + n
        }
        break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
        return pe(n, "scroll-", "scroll-snap-") + n
    }
    return n
}
function mo(n, i) {
    for (var s = "", l = 0; l < n.length; l++)
        s += i(n[l], l, n, i) || "";
    return s
}
function E2(n, i, s, l) {
    switch (n.type) {
    case f2:
        if (n.children.length)
            break;
    case c2:
    case vd:
        return n.return = n.return || n.value;
    case iv:
        return "";
    case av:
        return n.return = n.value + "{" + mo(n.children, l) + "}";
    case Do:
        if (!hn(n.value = n.props.join(",")))
            return ""
    }
    return hn(s = mo(n.children, l)) ? n.return = n.value + "{" + s + "}" : ""
}
function R2(n) {
    var i = lv(n);
    return function(s, l, u, f) {
        for (var d = "", p = 0; p < i; p++)
            d += n[p](s, l, u, f) || "";
        return d
    }
}
function A2(n) {
    return function(i) {
        i.root || (i = i.return) && n(i)
    }
}
function C2(n, i, s, l) {
    if (n.length > -1 && !n.return)
        switch (n.type) {
        case vd:
            n.return = uv(n.value, n.length, s);
            return;
        case av:
            return mo([di(n, {
                value: pe(n.value, "@", "@" + je)
            })], l);
        case Do:
            if (n.length)
                return h2(s = n.props, function(u) {
                    switch (kn(u, l = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        ka(di(n, {
                            props: [pe(u, /:(read-\w+)/, ":" + us + "$1")]
                        })),
                        ka(di(n, {
                            props: [u]
                        })),
                        Bf(n, {
                            props: n0(s, l)
                        });
                        break;
                    case "::placeholder":
                        ka(di(n, {
                            props: [pe(u, /:(plac\w+)/, ":" + je + "input-$1")]
                        })),
                        ka(di(n, {
                            props: [pe(u, /:(plac\w+)/, ":" + us + "$1")]
                        })),
                        ka(di(n, {
                            props: [pe(u, /:(plac\w+)/, Ve + "input-$1")]
                        })),
                        ka(di(n, {
                            props: [u]
                        })),
                        Bf(n, {
                            props: n0(s, l)
                        });
                        break
                    }
                    return ""
                })
        }
}
var j2 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , Lt = {}
  , Fa = typeof process < "u" && Lt !== void 0 && (Lt.REACT_APP_SC_ATTR || Lt.SC_ATTR) || "data-styled"
  , cv = "active"
  , fv = "data-styled-version"
  , Uo = "6.1.15"
  , xd = `/*!sc*/
`
  , po = typeof window < "u" && "HTMLElement"in window
  , M2 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && Lt !== void 0 && Lt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Lt.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Lt.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Lt.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && Lt !== void 0 && Lt.SC_DISABLE_SPEEDY !== void 0 && Lt.SC_DISABLE_SPEEDY !== "" && Lt.SC_DISABLE_SPEEDY !== "false" && Lt.SC_DISABLE_SPEEDY)
  , D2 = {}
  , zo = Object.freeze([])
  , Za = Object.freeze({});
function dv(n, i, s) {
    return s === void 0 && (s = Za),
    n.theme !== s.theme && n.theme || i || s.theme
}
var hv = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"])
  , O2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
  , L2 = /(^-|-$)/g;
function r0(n) {
    return n.replace(O2, "-").replace(L2, "")
}
var _2 = /(a)(d)/gi
  , ql = 52
  , s0 = function(n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97))
};
function Pf(n) {
    var i, s = "";
    for (i = Math.abs(n); i > ql; i = i / ql | 0)
        s = s0(i % ql) + s;
    return (s0(i % ql) + s).replace(_2, "$1-$2")
}
var sf, mv = 5381, Na = function(n, i) {
    for (var s = i.length; s; )
        n = 33 * n ^ i.charCodeAt(--s);
    return n
}, pv = function(n) {
    return Na(mv, n)
};
function gv(n) {
    return Pf(pv(n) >>> 0)
}
function U2(n) {
    return n.displayName || n.name || "Component"
}
function lf(n) {
    return typeof n == "string" && !0
}
var yv = typeof Symbol == "function" && Symbol.for
  , vv = yv ? Symbol.for("react.memo") : 60115
  , z2 = yv ? Symbol.for("react.forward_ref") : 60112
  , k2 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , V2 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , bv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , B2 = ((sf = {})[z2] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
},
sf[vv] = bv,
sf);
function l0(n) {
    return ("type"in (i = n) && i.type.$$typeof) === vv ? bv : "$$typeof"in n ? B2[n.$$typeof] : k2;
    var i
}
var N2 = Object.defineProperty
  , H2 = Object.getOwnPropertyNames
  , o0 = Object.getOwnPropertySymbols
  , P2 = Object.getOwnPropertyDescriptor
  , G2 = Object.getPrototypeOf
  , u0 = Object.prototype;
function xv(n, i, s) {
    if (typeof i != "string") {
        if (u0) {
            var l = G2(i);
            l && l !== u0 && xv(n, l, s)
        }
        var u = H2(i);
        o0 && (u = u.concat(o0(i)));
        for (var f = l0(n), d = l0(i), p = 0; p < u.length; ++p) {
            var h = u[p];
            if (!(h in V2 || s && s[h] || d && h in d || f && h in f)) {
                var m = P2(i, h);
                try {
                    N2(n, h, m)
                } catch {}
            }
        }
    }
    return n
}
function Qi(n) {
    return typeof n == "function"
}
function Sd(n) {
    return typeof n == "object" && "styledComponentId"in n
}
function Xi(n, i) {
    return n && i ? "".concat(n, " ").concat(i) : n || i || ""
}
function Gf(n, i) {
    if (n.length === 0)
        return "";
    for (var s = n[0], l = 1; l < n.length; l++)
        s += n[l];
    return s
}
function ps(n) {
    return n !== null && typeof n == "object" && n.constructor.name === Object.name && !("props"in n && n.$$typeof)
}
function Yf(n, i, s) {
    if (s === void 0 && (s = !1),
    !s && !ps(n) && !Array.isArray(n))
        return i;
    if (Array.isArray(i))
        for (var l = 0; l < i.length; l++)
            n[l] = Yf(n[l], i[l]);
    else if (ps(i))
        for (var l in i)
            n[l] = Yf(n[l], i[l]);
    return n
}
function wd(n, i) {
    Object.defineProperty(n, "toString", {
        value: i
    })
}
function Ji(n) {
    for (var i = [], s = 1; s < arguments.length; s++)
        i[s - 1] = arguments[s];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : ""))
}
var Y2 = function() {
    function n(i) {
        this.groupSizes = new Uint32Array(512),
        this.length = 512,
        this.tag = i
    }
    return n.prototype.indexOfGroup = function(i) {
        for (var s = 0, l = 0; l < i; l++)
            s += this.groupSizes[l];
        return s
    }
    ,
    n.prototype.insertRules = function(i, s) {
        if (i >= this.groupSizes.length) {
            for (var l = this.groupSizes, u = l.length, f = u; i >= f; )
                if ((f <<= 1) < 0)
                    throw Ji(16, "".concat(i));
            this.groupSizes = new Uint32Array(f),
            this.groupSizes.set(l),
            this.length = f;
            for (var d = u; d < f; d++)
                this.groupSizes[d] = 0
        }
        for (var p = this.indexOfGroup(i + 1), h = (d = 0,
        s.length); d < h; d++)
            this.tag.insertRule(p, s[d]) && (this.groupSizes[i]++,
            p++)
    }
    ,
    n.prototype.clearGroup = function(i) {
        if (i < this.length) {
            var s = this.groupSizes[i]
              , l = this.indexOfGroup(i)
              , u = l + s;
            this.groupSizes[i] = 0;
            for (var f = l; f < u; f++)
                this.tag.deleteRule(l)
        }
    }
    ,
    n.prototype.getGroup = function(i) {
        var s = "";
        if (i >= this.length || this.groupSizes[i] === 0)
            return s;
        for (var l = this.groupSizes[i], u = this.indexOfGroup(i), f = u + l, d = u; d < f; d++)
            s += "".concat(this.tag.getRule(d)).concat(xd);
        return s
    }
    ,
    n
}()
  , lo = new Map
  , go = new Map
  , oo = 1
  , $l = function(n) {
    if (lo.has(n))
        return lo.get(n);
    for (; go.has(oo); )
        oo++;
    var i = oo++;
    return lo.set(n, i),
    go.set(i, n),
    i
}
  , q2 = function(n, i) {
    oo = i + 1,
    lo.set(n, i),
    go.set(i, n)
}
  , $2 = "style[".concat(Fa, "][").concat(fv, '="').concat(Uo, '"]')
  , X2 = new RegExp("^".concat(Fa, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'))
  , K2 = function(n, i, s) {
    for (var l, u = s.split(","), f = 0, d = u.length; f < d; f++)
        (l = u[f]) && n.registerName(i, l)
}
  , F2 = function(n, i) {
    for (var s, l = ((s = i.textContent) !== null && s !== void 0 ? s : "").split(xd), u = [], f = 0, d = l.length; f < d; f++) {
        var p = l[f].trim();
        if (p) {
            var h = p.match(X2);
            if (h) {
                var m = 0 | parseInt(h[1], 10)
                  , y = h[2];
                m !== 0 && (q2(y, m),
                K2(n, y, h[3]),
                n.getTag().insertRules(m, u)),
                u.length = 0
            } else
                u.push(p)
        }
    }
}
  , c0 = function(n) {
    for (var i = document.querySelectorAll($2), s = 0, l = i.length; s < l; s++) {
        var u = i[s];
        u && u.getAttribute(Fa) !== cv && (F2(n, u),
        u.parentNode && u.parentNode.removeChild(u))
    }
};
function Z2() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var Sv = function(n) {
    var i = document.head
      , s = n || i
      , l = document.createElement("style")
      , u = function(p) {
        var h = Array.from(p.querySelectorAll("style[".concat(Fa, "]")));
        return h[h.length - 1]
    }(s)
      , f = u !== void 0 ? u.nextSibling : null;
    l.setAttribute(Fa, cv),
    l.setAttribute(fv, Uo);
    var d = Z2();
    return d && l.setAttribute("nonce", d),
    s.insertBefore(l, f),
    l
}
  , Q2 = function() {
    function n(i) {
        this.element = Sv(i),
        this.element.appendChild(document.createTextNode("")),
        this.sheet = function(s) {
            if (s.sheet)
                return s.sheet;
            for (var l = document.styleSheets, u = 0, f = l.length; u < f; u++) {
                var d = l[u];
                if (d.ownerNode === s)
                    return d
            }
            throw Ji(17)
        }(this.element),
        this.length = 0
    }
    return n.prototype.insertRule = function(i, s) {
        try {
            return this.sheet.insertRule(s, i),
            this.length++,
            !0
        } catch {
            return !1
        }
    }
    ,
    n.prototype.deleteRule = function(i) {
        this.sheet.deleteRule(i),
        this.length--
    }
    ,
    n.prototype.getRule = function(i) {
        var s = this.sheet.cssRules[i];
        return s && s.cssText ? s.cssText : ""
    }
    ,
    n
}()
  , J2 = function() {
    function n(i) {
        this.element = Sv(i),
        this.nodes = this.element.childNodes,
        this.length = 0
    }
    return n.prototype.insertRule = function(i, s) {
        if (i <= this.length && i >= 0) {
            var l = document.createTextNode(s);
            return this.element.insertBefore(l, this.nodes[i] || null),
            this.length++,
            !0
        }
        return !1
    }
    ,
    n.prototype.deleteRule = function(i) {
        this.element.removeChild(this.nodes[i]),
        this.length--
    }
    ,
    n.prototype.getRule = function(i) {
        return i < this.length ? this.nodes[i].textContent : ""
    }
    ,
    n
}()
  , W2 = function() {
    function n(i) {
        this.rules = [],
        this.length = 0
    }
    return n.prototype.insertRule = function(i, s) {
        return i <= this.length && (this.rules.splice(i, 0, s),
        this.length++,
        !0)
    }
    ,
    n.prototype.deleteRule = function(i) {
        this.rules.splice(i, 1),
        this.length--
    }
    ,
    n.prototype.getRule = function(i) {
        return i < this.length ? this.rules[i] : ""
    }
    ,
    n
}()
  , f0 = po
  , I2 = {
    isServer: !po,
    useCSSOMInjection: !M2
}
  , yo = function() {
    function n(i, s, l) {
        i === void 0 && (i = Za),
        s === void 0 && (s = {});
        var u = this;
        this.options = ot(ot({}, I2), i),
        this.gs = s,
        this.names = new Map(l),
        this.server = !!i.isServer,
        !this.server && po && f0 && (f0 = !1,
        c0(this)),
        wd(this, function() {
            return function(f) {
                for (var d = f.getTag(), p = d.length, h = "", m = function(b) {
                    var S = function(A) {
                        return go.get(A)
                    }(b);
                    if (S === void 0)
                        return "continue";
                    var T = f.names.get(S)
                      , w = d.getGroup(b);
                    if (T === void 0 || !T.size || w.length === 0)
                        return "continue";
                    var j = "".concat(Fa, ".g").concat(b, '[id="').concat(S, '"]')
                      , U = "";
                    T !== void 0 && T.forEach(function(A) {
                        A.length > 0 && (U += "".concat(A, ","))
                    }),
                    h += "".concat(w).concat(j, '{content:"').concat(U, '"}').concat(xd)
                }, y = 0; y < p; y++)
                    m(y);
                return h
            }(u)
        })
    }
    return n.registerId = function(i) {
        return $l(i)
    }
    ,
    n.prototype.rehydrate = function() {
        !this.server && po && c0(this)
    }
    ,
    n.prototype.reconstructWithOptions = function(i, s) {
        return s === void 0 && (s = !0),
        new n(ot(ot({}, this.options), i),this.gs,s && this.names || void 0)
    }
    ,
    n.prototype.allocateGSInstance = function(i) {
        return this.gs[i] = (this.gs[i] || 0) + 1
    }
    ,
    n.prototype.getTag = function() {
        return this.tag || (this.tag = (i = function(s) {
            var l = s.useCSSOMInjection
              , u = s.target;
            return s.isServer ? new W2(u) : l ? new Q2(u) : new J2(u)
        }(this.options),
        new Y2(i)));
        var i
    }
    ,
    n.prototype.hasNameForId = function(i, s) {
        return this.names.has(i) && this.names.get(i).has(s)
    }
    ,
    n.prototype.registerName = function(i, s) {
        if ($l(i),
        this.names.has(i))
            this.names.get(i).add(s);
        else {
            var l = new Set;
            l.add(s),
            this.names.set(i, l)
        }
    }
    ,
    n.prototype.insertRules = function(i, s, l) {
        this.registerName(i, s),
        this.getTag().insertRules($l(i), l)
    }
    ,
    n.prototype.clearNames = function(i) {
        this.names.has(i) && this.names.get(i).clear()
    }
    ,
    n.prototype.clearRules = function(i) {
        this.getTag().clearGroup($l(i)),
        this.clearNames(i)
    }
    ,
    n.prototype.clearTag = function() {
        this.tag = void 0
    }
    ,
    n
}()
  , eT = /&/g
  , tT = /^\s*\/\/.*$/gm;
function wv(n, i) {
    return n.map(function(s) {
        return s.type === "rule" && (s.value = "".concat(i, " ").concat(s.value),
        s.value = s.value.replaceAll(",", ",".concat(i, " ")),
        s.props = s.props.map(function(l) {
            return "".concat(i, " ").concat(l)
        })),
        Array.isArray(s.children) && s.type !== "@keyframes" && (s.children = wv(s.children, i)),
        s
    })
}
function nT(n) {
    var i, s, l, u = Za, f = u.options, d = f === void 0 ? Za : f, p = u.plugins, h = p === void 0 ? zo : p, m = function(S, T, w) {
        return w.startsWith(s) && w.endsWith(s) && w.replaceAll(s, "").length > 0 ? ".".concat(i) : S
    }, y = h.slice();
    y.push(function(S) {
        S.type === Do && S.value.includes("&") && (S.props[0] = S.props[0].replace(eT, s).replace(l, m))
    }),
    d.prefix && y.push(C2),
    y.push(E2);
    var b = function(S, T, w, j) {
        T === void 0 && (T = ""),
        w === void 0 && (w = ""),
        j === void 0 && (j = "&"),
        i = j,
        s = T,
        l = new RegExp("\\".concat(s, "\\b"),"g");
        var U = S.replace(tT, "")
          , A = w2(w || T ? "".concat(w, " ").concat(T, " { ").concat(U, " }") : U);
        d.namespace && (A = wv(A, d.namespace));
        var k = [];
        return mo(A, R2(y.concat(A2(function(V) {
            return k.push(V)
        })))),
        k
    };
    return b.hash = h.length ? h.reduce(function(S, T) {
        return T.name || Ji(15),
        Na(S, T.name)
    }, mv).toString() : "",
    b
}
var iT = new yo
  , qf = nT()
  , Tv = Zt.createContext({
    shouldForwardProp: void 0,
    styleSheet: iT,
    stylis: qf
});
Tv.Consumer;
Zt.createContext(void 0);
function $f() {
    return C.useContext(Tv)
}
var aT = function() {
    function n(i, s) {
        var l = this;
        this.inject = function(u, f) {
            f === void 0 && (f = qf);
            var d = l.name + f.hash;
            u.hasNameForId(l.id, d) || u.insertRules(l.id, d, f(l.rules, d, "@keyframes"))
        }
        ,
        this.name = i,
        this.id = "sc-keyframes-".concat(i),
        this.rules = s,
        wd(this, function() {
            throw Ji(12, String(l.name))
        })
    }
    return n.prototype.getName = function(i) {
        return i === void 0 && (i = qf),
        this.name + i.hash
    }
    ,
    n
}()
  , rT = function(n) {
    return n >= "A" && n <= "Z"
};
function d0(n) {
    for (var i = "", s = 0; s < n.length; s++) {
        var l = n[s];
        if (s === 1 && l === "-" && n[0] === "-")
            return n;
        rT(l) ? i += "-" + l.toLowerCase() : i += l
    }
    return i.startsWith("ms-") ? "-" + i : i
}
var Ev = function(n) {
    return n == null || n === !1 || n === ""
}
  , Rv = function(n) {
    var i, s, l = [];
    for (var u in n) {
        var f = n[u];
        n.hasOwnProperty(u) && !Ev(f) && (Array.isArray(f) && f.isCss || Qi(f) ? l.push("".concat(d0(u), ":"), f, ";") : ps(f) ? l.push.apply(l, ms(ms(["".concat(u, " {")], Rv(f), !1), ["}"], !1)) : l.push("".concat(d0(u), ": ").concat((i = u,
        (s = f) == null || typeof s == "boolean" || s === "" ? "" : typeof s != "number" || s === 0 || i in j2 || i.startsWith("--") ? String(s).trim() : "".concat(s, "px")), ";")))
    }
    return l
};
function mi(n, i, s, l) {
    if (Ev(n))
        return [];
    if (Sd(n))
        return [".".concat(n.styledComponentId)];
    if (Qi(n)) {
        if (!Qi(f = n) || f.prototype && f.prototype.isReactComponent || !i)
            return [n];
        var u = n(i);
        return mi(u, i, s, l)
    }
    var f;
    return n instanceof aT ? s ? (n.inject(s, l),
    [n.getName(l)]) : [n] : ps(n) ? Rv(n) : Array.isArray(n) ? Array.prototype.concat.apply(zo, n.map(function(d) {
        return mi(d, i, s, l)
    })) : [n.toString()]
}
function Av(n) {
    for (var i = 0; i < n.length; i += 1) {
        var s = n[i];
        if (Qi(s) && !Sd(s))
            return !1
    }
    return !0
}
var sT = pv(Uo)
  , lT = function() {
    function n(i, s, l) {
        this.rules = i,
        this.staticRulesId = "",
        this.isStatic = (l === void 0 || l.isStatic) && Av(i),
        this.componentId = s,
        this.baseHash = Na(sT, s),
        this.baseStyle = l,
        yo.registerId(s)
    }
    return n.prototype.generateAndInjectStyles = function(i, s, l) {
        var u = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, s, l) : "";
        if (this.isStatic && !l.hash)
            if (this.staticRulesId && s.hasNameForId(this.componentId, this.staticRulesId))
                u = Xi(u, this.staticRulesId);
            else {
                var f = Gf(mi(this.rules, i, s, l))
                  , d = Pf(Na(this.baseHash, f) >>> 0);
                if (!s.hasNameForId(this.componentId, d)) {
                    var p = l(f, ".".concat(d), void 0, this.componentId);
                    s.insertRules(this.componentId, d, p)
                }
                u = Xi(u, d),
                this.staticRulesId = d
            }
        else {
            for (var h = Na(this.baseHash, l.hash), m = "", y = 0; y < this.rules.length; y++) {
                var b = this.rules[y];
                if (typeof b == "string")
                    m += b;
                else if (b) {
                    var S = Gf(mi(b, i, s, l));
                    h = Na(h, S + y),
                    m += S
                }
            }
            if (m) {
                var T = Pf(h >>> 0);
                s.hasNameForId(this.componentId, T) || s.insertRules(this.componentId, T, l(m, ".".concat(T), void 0, this.componentId)),
                u = Xi(u, T)
            }
        }
        return u
    }
    ,
    n
}()
  , gs = Zt.createContext(void 0);
gs.Consumer;
function oT(n) {
    var i = Zt.useContext(gs)
      , s = C.useMemo(function() {
        return function(l, u) {
            if (!l)
                throw Ji(14);
            if (Qi(l)) {
                var f = l(u);
                return f
            }
            if (Array.isArray(l) || typeof l != "object")
                throw Ji(8);
            return u ? ot(ot({}, u), l) : l
        }(n.theme, i)
    }, [n.theme, i]);
    return n.children ? Zt.createElement(gs.Provider, {
        value: s
    }, n.children) : null
}
var of = {};
function uT(n, i, s) {
    var l = Sd(n)
      , u = n
      , f = !lf(n)
      , d = i.attrs
      , p = d === void 0 ? zo : d
      , h = i.componentId
      , m = h === void 0 ? function(F, M) {
        var N = typeof F != "string" ? "sc" : r0(F);
        of[N] = (of[N] || 0) + 1;
        var Q = "".concat(N, "-").concat(gv(Uo + N + of[N]));
        return M ? "".concat(M, "-").concat(Q) : Q
    }(i.displayName, i.parentComponentId) : h
      , y = i.displayName
      , b = y === void 0 ? function(F) {
        return lf(F) ? "styled.".concat(F) : "Styled(".concat(U2(F), ")")
    }(n) : y
      , S = i.displayName && i.componentId ? "".concat(r0(i.displayName), "-").concat(i.componentId) : i.componentId || m
      , T = l && u.attrs ? u.attrs.concat(p).filter(Boolean) : p
      , w = i.shouldForwardProp;
    if (l && u.shouldForwardProp) {
        var j = u.shouldForwardProp;
        if (i.shouldForwardProp) {
            var U = i.shouldForwardProp;
            w = function(F, M) {
                return j(F, M) && U(F, M)
            }
        } else
            w = j
    }
    var A = new lT(s,S,l ? u.componentStyle : void 0);
    function k(F, M) {
        return function(N, Q, P) {
            var _ = N.attrs
              , G = N.componentStyle
              , W = N.defaultProps
              , he = N.foldedComponentIds
              , Te = N.styledComponentId
              , ke = N.target
              , Ce = Zt.useContext(gs)
              , Z = $f()
              , I = N.shouldForwardProp || Z.shouldForwardProp
              , ee = dv(Q, Ce, W) || Za
              , ue = function(ce, re, Oe) {
                for (var fe, ye = ot(ot({}, re), {
                    className: void 0,
                    theme: Oe
                }), Se = 0; Se < ce.length; Se += 1) {
                    var Xe = Qi(fe = ce[Se]) ? fe(ye) : fe;
                    for (var nt in Xe)
                        ye[nt] = nt === "className" ? Xi(ye[nt], Xe[nt]) : nt === "style" ? ot(ot({}, ye[nt]), Xe[nt]) : Xe[nt]
                }
                return re.className && (ye.className = Xi(ye.className, re.className)),
                ye
            }(_, Q, ee)
              , R = ue.as || ke
              , X = {};
            for (var te in ue)
                ue[te] === void 0 || te[0] === "$" || te === "as" || te === "theme" && ue.theme === ee || (te === "forwardedAs" ? X.as = ue.forwardedAs : I && !I(te, R) || (X[te] = ue[te]));
            var ne = function(ce, re) {
                var Oe = $f()
                  , fe = ce.generateAndInjectStyles(re, Oe.styleSheet, Oe.stylis);
                return fe
            }(G, ue)
              , J = Xi(he, Te);
            return ne && (J += " " + ne),
            ue.className && (J += " " + ue.className),
            X[lf(R) && !hv.has(R) ? "class" : "className"] = J,
            P && (X.ref = P),
            C.createElement(R, X)
        }(V, F, M)
    }
    k.displayName = b;
    var V = Zt.forwardRef(k);
    return V.attrs = T,
    V.componentStyle = A,
    V.displayName = b,
    V.shouldForwardProp = w,
    V.foldedComponentIds = l ? Xi(u.foldedComponentIds, u.styledComponentId) : "",
    V.styledComponentId = S,
    V.target = l ? u.target : n,
    Object.defineProperty(V, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(F) {
            this._foldedDefaultProps = l ? function(M) {
                for (var N = [], Q = 1; Q < arguments.length; Q++)
                    N[Q - 1] = arguments[Q];
                for (var P = 0, _ = N; P < _.length; P++)
                    Yf(M, _[P], !0);
                return M
            }({}, u.defaultProps, F) : F
        }
    }),
    wd(V, function() {
        return ".".concat(V.styledComponentId)
    }),
    f && xv(V, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }),
    V
}
function h0(n, i) {
    for (var s = [n[0]], l = 0, u = i.length; l < u; l += 1)
        s.push(i[l], n[l + 1]);
    return s
}
var m0 = function(n) {
    return Object.assign(n, {
        isCss: !0
    })
};
function Cv(n) {
    for (var i = [], s = 1; s < arguments.length; s++)
        i[s - 1] = arguments[s];
    if (Qi(n) || ps(n))
        return m0(mi(h0(zo, ms([n], i, !0))));
    var l = n;
    return i.length === 0 && l.length === 1 && typeof l[0] == "string" ? mi(l) : m0(mi(h0(l, i)))
}
function Xf(n, i, s) {
    if (s === void 0 && (s = Za),
    !i)
        throw Ji(1, i);
    var l = function(u) {
        for (var f = [], d = 1; d < arguments.length; d++)
            f[d - 1] = arguments[d];
        return n(i, s, Cv.apply(void 0, ms([u], f, !1)))
    };
    return l.attrs = function(u) {
        return Xf(n, i, ot(ot({}, s), {
            attrs: Array.prototype.concat(s.attrs, u).filter(Boolean)
        }))
    }
    ,
    l.withConfig = function(u) {
        return Xf(n, i, ot(ot({}, s), u))
    }
    ,
    l
}
var jv = function(n) {
    return Xf(uT, n)
}
  , H = jv;
hv.forEach(function(n) {
    H[n] = jv(n)
});
var cT = function() {
    function n(i, s) {
        this.rules = i,
        this.componentId = s,
        this.isStatic = Av(i),
        yo.registerId(this.componentId + 1)
    }
    return n.prototype.createStyles = function(i, s, l, u) {
        var f = u(Gf(mi(this.rules, s, l, u)), "")
          , d = this.componentId + i;
        l.insertRules(d, d, f)
    }
    ,
    n.prototype.removeStyles = function(i, s) {
        s.clearRules(this.componentId + i)
    }
    ,
    n.prototype.renderStyles = function(i, s, l, u) {
        i > 2 && yo.registerId(this.componentId + i),
        this.removeStyles(i, l),
        this.createStyles(i, s, l, u)
    }
    ,
    n
}();
function fT(n) {
    for (var i = [], s = 1; s < arguments.length; s++)
        i[s - 1] = arguments[s];
    var l = Cv.apply(void 0, ms([n], i, !1))
      , u = "sc-global-".concat(gv(JSON.stringify(l)))
      , f = new cT(l,u)
      , d = function(h) {
        var m = $f()
          , y = Zt.useContext(gs)
          , b = Zt.useRef(m.styleSheet.allocateGSInstance(u)).current;
        return m.styleSheet.server && p(b, h, m.styleSheet, y, m.stylis),
        Zt.useLayoutEffect(function() {
            if (!m.styleSheet.server)
                return p(b, h, m.styleSheet, y, m.stylis),
                function() {
                    return f.removeStyles(b, m.styleSheet)
                }
        }, [b, h, m.styleSheet, y, m.stylis]),
        null
    };
    function p(h, m, y, b, S) {
        if (f.isStatic)
            f.renderStyles(h, D2, y, S);
        else {
            var T = ot(ot({}, m), {
                theme: dv(m, b, d.defaultProps)
            });
            f.renderStyles(h, T, y, S)
        }
    }
    return Zt.memo(d)
}
const Td = C.createContext({});
function Ed(n) {
    const i = C.useRef(null);
    return i.current === null && (i.current = n()),
    i.current
}
const ko = C.createContext(null)
  , Rd = C.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
class dT extends C.Component {
    getSnapshotBeforeUpdate(i) {
        const s = this.props.childRef.current;
        if (s && i.isPresent && !this.props.isPresent) {
            const l = s.offsetParent
              , u = l instanceof HTMLElement && l.offsetWidth || 0
              , f = this.props.sizeRef.current;
            f.height = s.offsetHeight || 0,
            f.width = s.offsetWidth || 0,
            f.top = s.offsetTop,
            f.left = s.offsetLeft,
            f.right = u - f.width - f.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function hT({children: n, isPresent: i, anchorX: s}) {
    const l = C.useId()
      , u = C.useRef(null)
      , f = C.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: d} = C.useContext(Rd);
    return C.useInsertionEffect( () => {
        const {width: p, height: h, top: m, left: y, right: b} = f.current;
        if (i || !u.current || !p || !h)
            return;
        const S = s === "left" ? `left: ${y}` : `right: ${b}`;
        u.current.dataset.motionPopId = l;
        const T = document.createElement("style");
        return d && (T.nonce = d),
        document.head.appendChild(T),
        T.sheet && T.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${m}px !important;
          }
        `),
        () => {
            document.head.removeChild(T)
        }
    }
    , [i]),
    v.jsx(dT, {
        isPresent: i,
        childRef: u,
        sizeRef: f,
        children: C.cloneElement(n, {
            ref: u
        })
    })
}
const mT = ({children: n, initial: i, isPresent: s, onExitComplete: l, custom: u, presenceAffectsLayout: f, mode: d, anchorX: p}) => {
    const h = Ed(pT)
      , m = C.useId()
      , y = C.useCallback(S => {
        h.set(S, !0);
        for (const T of h.values())
            if (!T)
                return;
        l && l()
    }
    , [h, l])
      , b = C.useMemo( () => ({
        id: m,
        initial: i,
        isPresent: s,
        custom: u,
        onExitComplete: y,
        register: S => (h.set(S, !1),
        () => h.delete(S))
    }), f ? [Math.random(), y] : [s, y]);
    return C.useMemo( () => {
        h.forEach( (S, T) => h.set(T, !1))
    }
    , [s]),
    C.useEffect( () => {
        !s && !h.size && l && l()
    }
    , [s]),
    d === "popLayout" && (n = v.jsx(hT, {
        isPresent: s,
        anchorX: p,
        children: n
    })),
    v.jsx(ko.Provider, {
        value: b,
        children: n
    })
}
;
function pT() {
    return new Map
}
function Mv(n=!0) {
    const i = C.useContext(ko);
    if (i === null)
        return [!0, null];
    const {isPresent: s, onExitComplete: l, register: u} = i
      , f = C.useId();
    C.useEffect( () => {
        if (n)
            return u(f)
    }
    , [n]);
    const d = C.useCallback( () => n && l && l(f), [f, l, n]);
    return !s && l ? [!1, d] : [!0]
}
const Xl = n => n.key || "";
function p0(n) {
    const i = [];
    return C.Children.forEach(n, s => {
        C.isValidElement(s) && i.push(s)
    }
    ),
    i
}
const Ad = typeof window < "u"
  , Dv = Ad ? C.useLayoutEffect : C.useEffect
  , Kf = ({children: n, custom: i, initial: s=!0, onExitComplete: l, presenceAffectsLayout: u=!0, mode: f="sync", propagate: d=!1, anchorX: p="left"}) => {
    const [h,m] = Mv(d)
      , y = C.useMemo( () => p0(n), [n])
      , b = d && !h ? [] : y.map(Xl)
      , S = C.useRef(!0)
      , T = C.useRef(y)
      , w = Ed( () => new Map)
      , [j,U] = C.useState(y)
      , [A,k] = C.useState(y);
    Dv( () => {
        S.current = !1,
        T.current = y;
        for (let M = 0; M < A.length; M++) {
            const N = Xl(A[M]);
            b.includes(N) ? w.delete(N) : w.get(N) !== !0 && w.set(N, !1)
        }
    }
    , [A, b.length, b.join("-")]);
    const V = [];
    if (y !== j) {
        let M = [...y];
        for (let N = 0; N < A.length; N++) {
            const Q = A[N]
              , P = Xl(Q);
            b.includes(P) || (M.splice(N, 0, Q),
            V.push(Q))
        }
        return f === "wait" && V.length && (M = V),
        k(p0(M)),
        U(y),
        null
    }
    const {forceRender: F} = C.useContext(Td);
    return v.jsx(v.Fragment, {
        children: A.map(M => {
            const N = Xl(M)
              , Q = d && !h ? !1 : y === A || b.includes(N)
              , P = () => {
                if (w.has(N))
                    w.set(N, !0);
                else
                    return;
                let _ = !0;
                w.forEach(G => {
                    G || (_ = !1)
                }
                ),
                _ && (F == null || F(),
                k(T.current),
                d && (m == null || m()),
                l && l())
            }
            ;
            return v.jsx(mT, {
                isPresent: Q,
                initial: !S.current || s ? void 0 : !1,
                custom: i,
                presenceAffectsLayout: u,
                mode: f,
                onExitComplete: Q ? void 0 : P,
                anchorX: p,
                children: M
            }, N)
        }
        )
    })
}
  , _t = n => n;
let Ov = _t;
function Cd(n) {
    let i;
    return () => (i === void 0 && (i = n()),
    i)
}
const Qa = (n, i, s) => {
    const l = i - n;
    return l === 0 ? 1 : (s - n) / l
}
  , Bn = n => n * 1e3
  , Nn = n => n / 1e3
  , gT = {
    useManualTiming: !1
}
  , Kl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , g0 = {
    value: null
};
function yT(n, i) {
    let s = new Set
      , l = new Set
      , u = !1
      , f = !1;
    const d = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , h = 0;
    function m(b) {
        d.has(b) && (y.schedule(b),
        n()),
        h++,
        b(p)
    }
    const y = {
        schedule: (b, S=!1, T=!1) => {
            const j = T && u ? s : l;
            return S && d.add(b),
            j.has(b) || j.add(b),
            b
        }
        ,
        cancel: b => {
            l.delete(b),
            d.delete(b)
        }
        ,
        process: b => {
            if (p = b,
            u) {
                f = !0;
                return
            }
            u = !0,
            [s,l] = [l, s],
            s.forEach(m),
            i && g0.value && g0.value.frameloop[i].push(h),
            h = 0,
            s.clear(),
            u = !1,
            f && (f = !1,
            y.process(b))
        }
    };
    return y
}
const vT = 40;
function Lv(n, i) {
    let s = !1
      , l = !0;
    const u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , f = () => s = !0
      , d = Kl.reduce( (A, k) => (A[k] = yT(f, i ? k : void 0),
    A), {})
      , {read: p, resolveKeyframes: h, update: m, preRender: y, render: b, postRender: S} = d
      , T = () => {
        const A = performance.now();
        s = !1,
        u.delta = l ? 1e3 / 60 : Math.max(Math.min(A - u.timestamp, vT), 1),
        u.timestamp = A,
        u.isProcessing = !0,
        p.process(u),
        h.process(u),
        m.process(u),
        y.process(u),
        b.process(u),
        S.process(u),
        u.isProcessing = !1,
        s && i && (l = !1,
        n(T))
    }
      , w = () => {
        s = !0,
        l = !0,
        u.isProcessing || n(T)
    }
    ;
    return {
        schedule: Kl.reduce( (A, k) => {
            const V = d[k];
            return A[k] = (F, M=!1, N=!1) => (s || w(),
            V.schedule(F, M, N)),
            A
        }
        , {}),
        cancel: A => {
            for (let k = 0; k < Kl.length; k++)
                d[Kl[k]].cancel(A)
        }
        ,
        state: u,
        steps: d
    }
}
const {schedule: ze, cancel: pi, state: dt, steps: uf} = Lv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _t, !0)
  , _v = C.createContext({
    strict: !1
})
  , y0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ja = {};
for (const n in y0)
    Ja[n] = {
        isEnabled: i => y0[n].some(s => !!i[s])
    };
function bT(n) {
    for (const i in n)
        Ja[i] = {
            ...Ja[i],
            ...n[i]
        }
}
const xT = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function vo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || xT.has(n)
}
let Uv = n => !vo(n);
function ST(n) {
    n && (Uv = i => i.startsWith("on") ? !vo(i) : n(i))
}
try {
    ST(require("@emotion/is-prop-valid").default)
} catch {}
function wT(n, i, s) {
    const l = {};
    for (const u in n)
        u === "values" && typeof n.values == "object" || (Uv(u) || s === !0 && vo(u) || !i && !vo(u) || n.draggable && u.startsWith("onDrag")) && (l[u] = n[u]);
    return l
}
function TT(n) {
    if (typeof Proxy > "u")
        return n;
    const i = new Map
      , s = (...l) => n(...l);
    return new Proxy(s,{
        get: (l, u) => u === "create" ? n : (i.has(u) || i.set(u, n(u)),
        i.get(u))
    })
}
const Vo = C.createContext({});
function Bo(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function ys(n) {
    return typeof n == "string" || Array.isArray(n)
}
const jd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Md = ["initial", ...jd];
function No(n) {
    return Bo(n.animate) || Md.some(i => ys(n[i]))
}
function zv(n) {
    return !!(No(n) || n.variants)
}
function ET(n, i) {
    if (No(n)) {
        const {initial: s, animate: l} = n;
        return {
            initial: s === !1 || ys(s) ? s : void 0,
            animate: ys(l) ? l : void 0
        }
    }
    return n.inherit !== !1 ? i : {}
}
function RT(n) {
    const {initial: i, animate: s} = ET(n, C.useContext(Vo));
    return C.useMemo( () => ({
        initial: i,
        animate: s
    }), [v0(i), v0(s)])
}
function v0(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const AT = Symbol.for("motionComponentSymbol");
function Ha(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function CT(n, i, s) {
    return C.useCallback(l => {
        l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == "function" ? s(l) : Ha(s) && (s.current = l))
    }
    , [i])
}
const Dd = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , jT = "framerAppearId"
  , kv = "data-" + Dd(jT)
  , {schedule: Od} = Lv(queueMicrotask, !1)
  , Vv = C.createContext({});
function MT(n, i, s, l, u) {
    var f, d;
    const {visualElement: p} = C.useContext(Vo)
      , h = C.useContext(_v)
      , m = C.useContext(ko)
      , y = C.useContext(Rd).reducedMotion
      , b = C.useRef(null);
    l = l || h.renderer,
    !b.current && l && (b.current = l(n, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: y
    }));
    const S = b.current
      , T = C.useContext(Vv);
    S && !S.projection && u && (S.type === "html" || S.type === "svg") && DT(b.current, s, u, T);
    const w = C.useRef(!1);
    C.useInsertionEffect( () => {
        S && w.current && S.update(s, m)
    }
    );
    const j = s[kv]
      , U = C.useRef(!!j && !(!((f = window.MotionHandoffIsComplete) === null || f === void 0) && f.call(window, j)) && ((d = window.MotionHasOptimisedAnimation) === null || d === void 0 ? void 0 : d.call(window, j)));
    return Dv( () => {
        S && (w.current = !0,
        window.MotionIsMounted = !0,
        S.updateFeatures(),
        Od.render(S.render),
        U.current && S.animationState && S.animationState.animateChanges())
    }
    ),
    C.useEffect( () => {
        S && (!U.current && S.animationState && S.animationState.animateChanges(),
        U.current && (queueMicrotask( () => {
            var A;
            (A = window.MotionHandoffMarkAsComplete) === null || A === void 0 || A.call(window, j)
        }
        ),
        U.current = !1))
    }
    ),
    S
}
function DT(n, i, s, l) {
    const {layoutId: u, layout: f, drag: d, dragConstraints: p, layoutScroll: h, layoutRoot: m} = i;
    n.projection = new s(n.latestValues,i["data-framer-portal-id"] ? void 0 : Bv(n.parent)),
    n.projection.setOptions({
        layoutId: u,
        layout: f,
        alwaysMeasureLayout: !!d || p && Ha(p),
        visualElement: n,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: l,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Bv(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Bv(n.parent)
}
function OT({preloadedFeatures: n, createVisualElement: i, useRender: s, useVisualState: l, Component: u}) {
    var f, d;
    n && bT(n);
    function p(m, y) {
        let b;
        const S = {
            ...C.useContext(Rd),
            ...m,
            layoutId: LT(m)
        }
          , {isStatic: T} = S
          , w = RT(m)
          , j = l(m, T);
        if (!T && Ad) {
            _T();
            const U = UT(S);
            b = U.MeasureLayout,
            w.visualElement = MT(u, j, S, i, U.ProjectionNode)
        }
        return v.jsxs(Vo.Provider, {
            value: w,
            children: [b && w.visualElement ? v.jsx(b, {
                visualElement: w.visualElement,
                ...S
            }) : null, s(u, m, CT(j, w.visualElement, y), j, T, w.visualElement)]
        })
    }
    p.displayName = `motion.${typeof u == "string" ? u : `create(${(d = (f = u.displayName) !== null && f !== void 0 ? f : u.name) !== null && d !== void 0 ? d : ""})`}`;
    const h = C.forwardRef(p);
    return h[AT] = u,
    h
}
function LT({layoutId: n}) {
    const i = C.useContext(Td).id;
    return i && n !== void 0 ? i + "-" + n : n
}
function _T(n, i) {
    C.useContext(_v).strict
}
function UT(n) {
    const {drag: i, layout: s} = Ja;
    if (!i && !s)
        return {};
    const l = {
        ...i,
        ...s
    };
    return {
        MeasureLayout: i != null && i.isEnabled(n) || s != null && s.isEnabled(n) ? l.MeasureLayout : void 0,
        ProjectionNode: l.ProjectionNode
    }
}
const Nv = n => i => typeof i == "string" && i.startsWith(n)
  , Ld = Nv("--")
  , zT = Nv("var(--")
  , _d = n => zT(n) ? kT.test(n.split("/*")[0].trim()) : !1
  , kT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , vs = {};
function VT(n) {
    for (const i in n)
        vs[i] = n[i],
        Ld(i) && (vs[i].isCSSVariable = !0)
}
const tr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Ii = new Set(tr);
function Hv(n, {layout: i, layoutId: s}) {
    return Ii.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!vs[n] || n === "opacity")
}
const yt = n => !!(n && n.getVelocity)
  , Pv = (n, i) => i && typeof n == "number" ? i.transform(n) : n
  , Pn = (n, i, s) => s > i ? i : s < n ? n : s
  , nr = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , bs = {
    ...nr,
    transform: n => Pn(0, 1, n)
}
  , Fl = {
    ...nr,
    default: 1
}
  , Cs = n => ({
    test: i => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${n}`
})
  , hi = Cs("deg")
  , mn = Cs("%")
  , oe = Cs("px")
  , BT = Cs("vh")
  , NT = Cs("vw")
  , b0 = {
    ...mn,
    parse: n => mn.parse(n) / 100,
    transform: n => mn.transform(n * 100)
}
  , HT = {
    borderWidth: oe,
    borderTopWidth: oe,
    borderRightWidth: oe,
    borderBottomWidth: oe,
    borderLeftWidth: oe,
    borderRadius: oe,
    radius: oe,
    borderTopLeftRadius: oe,
    borderTopRightRadius: oe,
    borderBottomRightRadius: oe,
    borderBottomLeftRadius: oe,
    width: oe,
    maxWidth: oe,
    height: oe,
    maxHeight: oe,
    top: oe,
    right: oe,
    bottom: oe,
    left: oe,
    padding: oe,
    paddingTop: oe,
    paddingRight: oe,
    paddingBottom: oe,
    paddingLeft: oe,
    margin: oe,
    marginTop: oe,
    marginRight: oe,
    marginBottom: oe,
    marginLeft: oe,
    backgroundPositionX: oe,
    backgroundPositionY: oe
}
  , PT = {
    rotate: hi,
    rotateX: hi,
    rotateY: hi,
    rotateZ: hi,
    scale: Fl,
    scaleX: Fl,
    scaleY: Fl,
    scaleZ: Fl,
    skew: hi,
    skewX: hi,
    skewY: hi,
    distance: oe,
    translateX: oe,
    translateY: oe,
    translateZ: oe,
    x: oe,
    y: oe,
    z: oe,
    perspective: oe,
    transformPerspective: oe,
    opacity: bs,
    originX: b0,
    originY: b0,
    originZ: oe
}
  , x0 = {
    ...nr,
    transform: Math.round
}
  , Ud = {
    ...HT,
    ...PT,
    zIndex: x0,
    size: oe,
    fillOpacity: bs,
    strokeOpacity: bs,
    numOctaves: x0
}
  , GT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , YT = tr.length;
function qT(n, i, s) {
    let l = ""
      , u = !0;
    for (let f = 0; f < YT; f++) {
        const d = tr[f]
          , p = n[d];
        if (p === void 0)
            continue;
        let h = !0;
        if (typeof p == "number" ? h = p === (d.startsWith("scale") ? 1 : 0) : h = parseFloat(p) === 0,
        !h || s) {
            const m = Pv(p, Ud[d]);
            if (!h) {
                u = !1;
                const y = GT[d] || d;
                l += `${y}(${m}) `
            }
            s && (i[d] = m)
        }
    }
    return l = l.trim(),
    s ? l = s(i, u ? "" : l) : u && (l = "none"),
    l
}
function zd(n, i, s) {
    const {style: l, vars: u, transformOrigin: f} = n;
    let d = !1
      , p = !1;
    for (const h in i) {
        const m = i[h];
        if (Ii.has(h)) {
            d = !0;
            continue
        } else if (Ld(h)) {
            u[h] = m;
            continue
        } else {
            const y = Pv(m, Ud[h]);
            h.startsWith("origin") ? (p = !0,
            f[h] = y) : l[h] = y
        }
    }
    if (i.transform || (d || s ? l.transform = qT(i, n.transform, s) : l.transform && (l.transform = "none")),
    p) {
        const {originX: h="50%", originY: m="50%", originZ: y=0} = f;
        l.transformOrigin = `${h} ${m} ${y}`
    }
}
const kd = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Gv(n, i, s) {
    for (const l in i)
        !yt(i[l]) && !Hv(l, s) && (n[l] = i[l])
}
function $T({transformTemplate: n}, i) {
    return C.useMemo( () => {
        const s = kd();
        return zd(s, i, n),
        Object.assign({}, s.vars, s.style)
    }
    , [i])
}
function XT(n, i) {
    const s = n.style || {}
      , l = {};
    return Gv(l, s, n),
    Object.assign(l, $T(n, i)),
    l
}
function KT(n, i) {
    const s = {}
      , l = XT(n, i);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
    l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none",
    l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    s.style = l,
    s
}
const FT = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Vd(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(FT.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
const ZT = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , QT = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function JT(n, i, s=1, l=0, u=!0) {
    n.pathLength = 1;
    const f = u ? ZT : QT;
    n[f.offset] = oe.transform(-l);
    const d = oe.transform(i)
      , p = oe.transform(s);
    n[f.array] = `${d} ${p}`
}
function S0(n, i, s) {
    return typeof n == "string" ? n : oe.transform(i + s * n)
}
function WT(n, i, s) {
    const l = S0(i, n.x, n.width)
      , u = S0(s, n.y, n.height);
    return `${l} ${u}`
}
function Bd(n, {attrX: i, attrY: s, attrScale: l, originX: u, originY: f, pathLength: d, pathSpacing: p=1, pathOffset: h=0, ...m}, y, b) {
    if (zd(n, m, b),
    y) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: S, style: T, dimensions: w} = n;
    S.transform && (w && (T.transform = S.transform),
    delete S.transform),
    w && (u !== void 0 || f !== void 0 || T.transform) && (T.transformOrigin = WT(w, u !== void 0 ? u : .5, f !== void 0 ? f : .5)),
    i !== void 0 && (S.x = i),
    s !== void 0 && (S.y = s),
    l !== void 0 && (S.scale = l),
    d !== void 0 && JT(S, d, p, h, !1)
}
const Yv = () => ({
    ...kd(),
    attrs: {}
})
  , Nd = n => typeof n == "string" && n.toLowerCase() === "svg";
function IT(n, i, s, l) {
    const u = C.useMemo( () => {
        const f = Yv();
        return Bd(f, i, Nd(l), n.transformTemplate),
        {
            ...f.attrs,
            style: {
                ...f.style
            }
        }
    }
    , [i]);
    if (n.style) {
        const f = {};
        Gv(f, n.style, n),
        u.style = {
            ...f,
            ...u.style
        }
    }
    return u
}
function eE(n=!1) {
    return (s, l, u, {latestValues: f}, d) => {
        const h = (Vd(s) ? IT : KT)(l, f, d, s)
          , m = wT(l, typeof s == "string", n)
          , y = s !== C.Fragment ? {
            ...m,
            ...h,
            ref: u
        } : {}
          , {children: b} = l
          , S = C.useMemo( () => yt(b) ? b.get() : b, [b]);
        return C.createElement(s, {
            ...y,
            children: S
        })
    }
}
function w0(n) {
    const i = [{}, {}];
    return n == null || n.values.forEach( (s, l) => {
        i[0][l] = s.get(),
        i[1][l] = s.getVelocity()
    }
    ),
    i
}
function Hd(n, i, s, l) {
    if (typeof i == "function") {
        const [u,f] = w0(l);
        i = i(s !== void 0 ? s : n.custom, u, f)
    }
    if (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function") {
        const [u,f] = w0(l);
        i = i(s !== void 0 ? s : n.custom, u, f)
    }
    return i
}
const Ff = n => Array.isArray(n)
  , tE = n => !!(n && typeof n == "object" && n.mix && n.toValue)
  , nE = n => Ff(n) ? n[n.length - 1] || 0 : n;
function uo(n) {
    const i = yt(n) ? n.get() : n;
    return tE(i) ? i.toValue() : i
}
function iE({scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s}, l, u, f) {
    const d = {
        latestValues: aE(l, u, f, n),
        renderState: i()
    };
    return s && (d.onMount = p => s({
        props: l,
        current: p,
        ...d
    }),
    d.onUpdate = p => s(p)),
    d
}
const qv = n => (i, s) => {
    const l = C.useContext(Vo)
      , u = C.useContext(ko)
      , f = () => iE(n, i, l, u);
    return s ? f() : Ed(f)
}
;
function aE(n, i, s, l) {
    const u = {}
      , f = l(n, {});
    for (const S in f)
        u[S] = uo(f[S]);
    let {initial: d, animate: p} = n;
    const h = No(n)
      , m = zv(n);
    i && m && !h && n.inherit !== !1 && (d === void 0 && (d = i.initial),
    p === void 0 && (p = i.animate));
    let y = s ? s.initial === !1 : !1;
    y = y || d === !1;
    const b = y ? p : d;
    if (b && typeof b != "boolean" && !Bo(b)) {
        const S = Array.isArray(b) ? b : [b];
        for (let T = 0; T < S.length; T++) {
            const w = Hd(n, S[T]);
            if (w) {
                const {transitionEnd: j, transition: U, ...A} = w;
                for (const k in A) {
                    let V = A[k];
                    if (Array.isArray(V)) {
                        const F = y ? V.length - 1 : 0;
                        V = V[F]
                    }
                    V !== null && (u[k] = V)
                }
                for (const k in j)
                    u[k] = j[k]
            }
        }
    }
    return u
}
function Pd(n, i, s) {
    var l;
    const {style: u} = n
      , f = {};
    for (const d in u)
        (yt(u[d]) || i.style && yt(i.style[d]) || Hv(d, n) || ((l = s == null ? void 0 : s.getValue(d)) === null || l === void 0 ? void 0 : l.liveStyle) !== void 0) && (f[d] = u[d]);
    return f
}
const rE = {
    useVisualState: qv({
        scrapeMotionValuesFromProps: Pd,
        createRenderState: kd
    })
};
function $v(n, i) {
    try {
        i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect()
    } catch {
        i.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
function Xv(n, {style: i, vars: s}, l, u) {
    Object.assign(n.style, i, u && u.getProjectionStyles(l));
    for (const f in s)
        n.style.setProperty(f, s[f])
}
const Kv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Fv(n, i, s, l) {
    Xv(n, i, void 0, l);
    for (const u in i.attrs)
        n.setAttribute(Kv.has(u) ? u : Dd(u), i.attrs[u])
}
function Zv(n, i, s) {
    const l = Pd(n, i, s);
    for (const u in n)
        if (yt(n[u]) || yt(i[u])) {
            const f = tr.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
            l[f] = n[u]
        }
    return l
}
const T0 = ["x", "y", "width", "height", "cx", "cy", "r"]
  , sE = {
    useVisualState: qv({
        scrapeMotionValuesFromProps: Zv,
        createRenderState: Yv,
        onUpdate: ({props: n, prevProps: i, current: s, renderState: l, latestValues: u}) => {
            if (!s)
                return;
            let f = !!n.drag;
            if (!f) {
                for (const p in u)
                    if (Ii.has(p)) {
                        f = !0;
                        break
                    }
            }
            if (!f)
                return;
            let d = !i;
            if (i)
                for (let p = 0; p < T0.length; p++) {
                    const h = T0[p];
                    n[h] !== i[h] && (d = !0)
                }
            d && ze.read( () => {
                $v(s, l),
                ze.render( () => {
                    Bd(l, u, Nd(s.tagName), n.transformTemplate),
                    Fv(s, l)
                }
                )
            }
            )
        }
    })
};
function lE(n, i) {
    return function(l, {forwardMotionProps: u}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Vd(l) ? sE : rE,
            preloadedFeatures: n,
            useRender: eE(u),
            createVisualElement: i,
            Component: l
        };
        return OT(d)
    }
}
function xs(n, i, s) {
    const l = n.getProps();
    return Hd(l, i, s !== void 0 ? s : l.custom, n)
}
const oE = Cd( () => window.ScrollTimeline !== void 0);
class uE {
    constructor(i) {
        this.stop = () => this.runAll("stop"),
        this.animations = i.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(i => "finished"in i ? i.finished : i))
    }
    getAll(i) {
        return this.animations[0][i]
    }
    setAll(i, s) {
        for (let l = 0; l < this.animations.length; l++)
            this.animations[l][i] = s
    }
    attachTimeline(i, s) {
        const l = this.animations.map(u => {
            if (oE() && u.attachTimeline)
                return u.attachTimeline(i);
            if (typeof s == "function")
                return s(u)
        }
        );
        return () => {
            l.forEach( (u, f) => {
                u && u(),
                this.animations[f].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(i) {
        this.setAll("time", i)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(i) {
        this.setAll("speed", i)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let i = 0;
        for (let s = 0; s < this.animations.length; s++)
            i = Math.max(i, this.animations[s].duration);
        return i
    }
    runAll(i) {
        this.animations.forEach(s => s[i]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class cE extends uE {
    then(i, s) {
        return Promise.all(this.animations).then(i).catch(s)
    }
}
function Gd(n, i) {
    return n ? n[i] || n.default || n : void 0
}
const Zf = 2e4;
function Qv(n) {
    let i = 0;
    const s = 50;
    let l = n.next(i);
    for (; !l.done && i < Zf; )
        i += s,
        l = n.next(i);
    return i >= Zf ? 1 / 0 : i
}
function Yd(n) {
    return typeof n == "function"
}
function E0(n, i) {
    n.timeline = i,
    n.onfinish = null
}
const qd = n => Array.isArray(n) && typeof n[0] == "number"
  , fE = {
    linearEasing: void 0
};
function dE(n, i) {
    const s = Cd(n);
    return () => {
        var l;
        return (l = fE[i]) !== null && l !== void 0 ? l : s()
    }
}
const bo = dE( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Jv = (n, i, s=10) => {
    let l = "";
    const u = Math.max(Math.round(i / s), 2);
    for (let f = 0; f < u; f++)
        l += n(Qa(0, u - 1, f)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`
}
;
function Wv(n) {
    return !!(typeof n == "function" && bo() || !n || typeof n == "string" && (n in Qf || bo()) || qd(n) || Array.isArray(n) && n.every(Wv))
}
const ls = ([n,i,s,l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`
  , Qf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ls([0, .65, .55, 1]),
    circOut: ls([.55, 0, 1, .45]),
    backIn: ls([.31, .01, .66, -.59]),
    backOut: ls([.33, 1.53, .69, .99])
};
function Iv(n, i) {
    if (n)
        return typeof n == "function" && bo() ? Jv(n, i) : qd(n) ? ls(n) : Array.isArray(n) ? n.map(s => Iv(s, i) || Qf.easeOut) : Qf[n]
}
const nn = {
    x: !1,
    y: !1
};
function e1() {
    return nn.x || nn.y
}
function hE(n, i, s) {
    var l;
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let u = document;
        const f = (l = void 0) !== null && l !== void 0 ? l : u.querySelectorAll(n);
        return f ? Array.from(f) : []
    }
    return Array.from(n)
}
function t1(n, i) {
    const s = hE(n)
      , l = new AbortController
      , u = {
        passive: !0,
        ...i,
        signal: l.signal
    };
    return [s, u, () => l.abort()]
}
function R0(n) {
    return !(n.pointerType === "touch" || e1())
}
function mE(n, i, s={}) {
    const [l,u,f] = t1(n, s)
      , d = p => {
        if (!R0(p))
            return;
        const {target: h} = p
          , m = i(h, p);
        if (typeof m != "function" || !h)
            return;
        const y = b => {
            R0(b) && (m(b),
            h.removeEventListener("pointerleave", y))
        }
        ;
        h.addEventListener("pointerleave", y, u)
    }
    ;
    return l.forEach(p => {
        p.addEventListener("pointerenter", d, u)
    }
    ),
    f
}
function xo(n, i) {
    const s = `${i}PointerCapture`;
    if (n.target instanceof Element && s in n.target && n.pointerId !== void 0)
        try {
            n.target[s](n.pointerId)
        } catch {}
}
const n1 = (n, i) => i ? n === i ? !0 : n1(n, i.parentElement) : !1
  , $d = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , pE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function gE(n) {
    return pE.has(n.tagName) || n.tabIndex !== -1
}
const os = new WeakSet;
function A0(n) {
    return i => {
        i.key === "Enter" && n(i)
    }
}
function cf(n, i) {
    n.dispatchEvent(new PointerEvent("pointer" + i,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const yE = (n, i) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const l = A0( () => {
        if (os.has(s))
            return;
        cf(s, "down");
        const u = A0( () => {
            cf(s, "up")
        }
        )
          , f = () => cf(s, "cancel");
        s.addEventListener("keyup", u, i),
        s.addEventListener("blur", f, i)
    }
    );
    s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i)
}
;
function C0(n) {
    return $d(n) && !e1()
}
function vE(n, i, s={}) {
    const [l,u,f] = t1(n, s)
      , d = p => {
        const h = p.currentTarget;
        if (!h || !C0(p) || os.has(h))
            return;
        os.add(h),
        xo(p, "set");
        const m = i(h, p)
          , y = (T, w) => {
            h.removeEventListener("pointerup", b),
            h.removeEventListener("pointercancel", S),
            xo(T, "release"),
            !(!C0(T) || !os.has(h)) && (os.delete(h),
            typeof m == "function" && m(T, {
                success: w
            }))
        }
          , b = T => {
            (T.isTrusted ? bE(T, h instanceof Element ? h.getBoundingClientRect() : {
                left: 0,
                top: 0,
                right: window.innerWidth,
                bottom: window.innerHeight
            }) : !1) ? y(T, !1) : y(T, !(h instanceof Element) || n1(h, T.target))
        }
          , S = T => {
            y(T, !1)
        }
        ;
        h.addEventListener("pointerup", b, u),
        h.addEventListener("pointercancel", S, u),
        h.addEventListener("lostpointercapture", S, u)
    }
    ;
    return l.forEach(p => {
        p = s.useGlobalTarget ? window : p;
        let h = !1;
        p instanceof HTMLElement && (h = !0,
        !gE(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0)),
        p.addEventListener("pointerdown", d, u),
        h && p.addEventListener("focus", m => yE(m, u), u)
    }
    ),
    f
}
function bE(n, i) {
    return n.clientX < i.left || n.clientX > i.right || n.clientY < i.top || n.clientY > i.bottom
}
function xE(n) {
    return n === "x" || n === "y" ? nn[n] ? null : (nn[n] = !0,
    () => {
        nn[n] = !1
    }
    ) : nn.x || nn.y ? null : (nn.x = nn.y = !0,
    () => {
        nn.x = nn.y = !1
    }
    )
}
const i1 = new Set(["width", "height", "top", "left", "right", "bottom", ...tr]);
let co;
function SE() {
    co = void 0
}
const pn = {
    now: () => (co === void 0 && pn.set(dt.isProcessing || gT.useManualTiming ? dt.timestamp : performance.now()),
    co),
    set: n => {
        co = n,
        queueMicrotask(SE)
    }
};
function Xd(n, i) {
    n.indexOf(i) === -1 && n.push(i)
}
function Kd(n, i) {
    const s = n.indexOf(i);
    s > -1 && n.splice(s, 1)
}
class Fd {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return Xd(this.subscriptions, i),
        () => Kd(this.subscriptions, i)
    }
    notify(i, s, l) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1)
                this.subscriptions[0](i, s, l);
            else
                for (let f = 0; f < u; f++) {
                    const d = this.subscriptions[f];
                    d && d(i, s, l)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function a1(n, i) {
    return i ? n * (1e3 / i) : 0
}
const j0 = 30
  , wE = n => !isNaN(parseFloat(n));
class TE {
    constructor(i, s={}) {
        this.version = "12.4.7",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (l, u=!0) => {
            const f = pn.now();
            this.updatedAt !== f && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(l),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            u && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(i),
        this.owner = s.owner
    }
    setCurrent(i) {
        this.current = i,
        this.updatedAt = pn.now(),
        this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = wE(this.current))
    }
    setPrevFrameValue(i=this.current) {
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, s) {
        this.events[i] || (this.events[i] = new Fd);
        const l = this.events[i].add(s);
        return i === "change" ? () => {
            l(),
            ze.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : l
    }
    clearListeners() {
        for (const i in this.events)
            this.events[i].clear()
    }
    attach(i, s) {
        this.passiveEffect = i,
        this.stopPassiveEffect = s
    }
    set(i, s=!0) {
        !s || !this.passiveEffect ? this.updateAndNotify(i, s) : this.passiveEffect(i, this.updateAndNotify)
    }
    setWithVelocity(i, s, l) {
        this.set(s),
        this.prev = void 0,
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt - l
    }
    jump(i, s=!0) {
        this.updateAndNotify(i),
        this.prev = i,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        s && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = pn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > j0)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, j0);
        return a1(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(i) {
        return this.stop(),
        new Promise(s => {
            this.hasAnimated = !0,
            this.animation = i(s),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ss(n, i) {
    return new TE(n,i)
}
function EE(n, i, s) {
    n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, Ss(s))
}
function RE(n, i) {
    const s = xs(n, i);
    let {transitionEnd: l={}, transition: u={}, ...f} = s || {};
    f = {
        ...f,
        ...l
    };
    for (const d in f) {
        const p = nE(f[d]);
        EE(n, d, p)
    }
}
function AE(n) {
    return !!(yt(n) && n.add)
}
function Jf(n, i) {
    const s = n.getValue("willChange");
    if (AE(s))
        return s.add(i)
}
function r1(n) {
    return n.props[kv]
}
const s1 = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n
  , CE = 1e-7
  , jE = 12;
function ME(n, i, s, l, u) {
    let f, d, p = 0;
    do
        d = i + (s - i) / 2,
        f = s1(d, l, u) - n,
        f > 0 ? s = d : i = d;
    while (Math.abs(f) > CE && ++p < jE);
    return d
}
function js(n, i, s, l) {
    if (n === i && s === l)
        return _t;
    const u = f => ME(f, 0, 1, n, s);
    return f => f === 0 || f === 1 ? f : s1(u(f), i, l)
}
const l1 = n => i => i <= .5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2
  , o1 = n => i => 1 - n(1 - i)
  , u1 = js(.33, 1.53, .69, .99)
  , Zd = o1(u1)
  , c1 = l1(Zd)
  , f1 = n => (n *= 2) < 1 ? .5 * Zd(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , Qd = n => 1 - Math.sin(Math.acos(n))
  , d1 = o1(Qd)
  , h1 = l1(Qd)
  , m1 = n => /^0[^.\s]+$/u.test(n);
function DE(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || m1(n) : !0
}
const cs = n => Math.round(n * 1e5) / 1e5
  , Jd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function OE(n) {
    return n == null
}
const LE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Wd = (n, i) => s => !!(typeof s == "string" && LE.test(s) && s.startsWith(n) || i && !OE(s) && Object.prototype.hasOwnProperty.call(s, i))
  , p1 = (n, i, s) => l => {
    if (typeof l != "string")
        return l;
    const [u,f,d,p] = l.match(Jd);
    return {
        [n]: parseFloat(u),
        [i]: parseFloat(f),
        [s]: parseFloat(d),
        alpha: p !== void 0 ? parseFloat(p) : 1
    }
}
  , _E = n => Pn(0, 255, n)
  , ff = {
    ...nr,
    transform: n => Math.round(_E(n))
}
  , Ki = {
    test: Wd("rgb", "red"),
    parse: p1("red", "green", "blue"),
    transform: ({red: n, green: i, blue: s, alpha: l=1}) => "rgba(" + ff.transform(n) + ", " + ff.transform(i) + ", " + ff.transform(s) + ", " + cs(bs.transform(l)) + ")"
};
function UE(n) {
    let i = ""
      , s = ""
      , l = ""
      , u = "";
    return n.length > 5 ? (i = n.substring(1, 3),
    s = n.substring(3, 5),
    l = n.substring(5, 7),
    u = n.substring(7, 9)) : (i = n.substring(1, 2),
    s = n.substring(2, 3),
    l = n.substring(3, 4),
    u = n.substring(4, 5),
    i += i,
    s += s,
    l += l,
    u += u),
    {
        red: parseInt(i, 16),
        green: parseInt(s, 16),
        blue: parseInt(l, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1
    }
}
const Wf = {
    test: Wd("#"),
    parse: UE,
    transform: Ki.transform
}
  , Pa = {
    test: Wd("hsl", "hue"),
    parse: p1("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: i, lightness: s, alpha: l=1}) => "hsla(" + Math.round(n) + ", " + mn.transform(cs(i)) + ", " + mn.transform(cs(s)) + ", " + cs(bs.transform(l)) + ")"
}
  , gt = {
    test: n => Ki.test(n) || Wf.test(n) || Pa.test(n),
    parse: n => Ki.test(n) ? Ki.parse(n) : Pa.test(n) ? Pa.parse(n) : Wf.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? Ki.transform(n) : Pa.transform(n)
}
  , zE = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function kE(n) {
    var i, s;
    return isNaN(n) && typeof n == "string" && (((i = n.match(Jd)) === null || i === void 0 ? void 0 : i.length) || 0) + (((s = n.match(zE)) === null || s === void 0 ? void 0 : s.length) || 0) > 0
}
const g1 = "number"
  , y1 = "color"
  , VE = "var"
  , BE = "var("
  , M0 = "${}"
  , NE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ws(n) {
    const i = n.toString()
      , s = []
      , l = {
        color: [],
        number: [],
        var: []
    }
      , u = [];
    let f = 0;
    const p = i.replace(NE, h => (gt.test(h) ? (l.color.push(f),
    u.push(y1),
    s.push(gt.parse(h))) : h.startsWith(BE) ? (l.var.push(f),
    u.push(VE),
    s.push(h)) : (l.number.push(f),
    u.push(g1),
    s.push(parseFloat(h))),
    ++f,
    M0)).split(M0);
    return {
        values: s,
        split: p,
        indexes: l,
        types: u
    }
}
function v1(n) {
    return ws(n).values
}
function b1(n) {
    const {split: i, types: s} = ws(n)
      , l = i.length;
    return u => {
        let f = "";
        for (let d = 0; d < l; d++)
            if (f += i[d],
            u[d] !== void 0) {
                const p = s[d];
                p === g1 ? f += cs(u[d]) : p === y1 ? f += gt.transform(u[d]) : f += u[d]
            }
        return f
    }
}
const HE = n => typeof n == "number" ? 0 : n;
function PE(n) {
    const i = v1(n);
    return b1(n)(i.map(HE))
}
const gi = {
    test: kE,
    parse: v1,
    createTransformer: b1,
    getAnimatableNone: PE
}
  , GE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function YE(n) {
    const [i,s] = n.slice(0, -1).split("(");
    if (i === "drop-shadow")
        return n;
    const [l] = s.match(Jd) || [];
    if (!l)
        return n;
    const u = s.replace(l, "");
    let f = GE.has(i) ? 1 : 0;
    return l !== s && (f *= 100),
    i + "(" + f + u + ")"
}
const qE = /\b([a-z-]*)\(.*?\)/gu
  , If = {
    ...gi,
    getAnimatableNone: n => {
        const i = n.match(qE);
        return i ? i.map(YE).join(" ") : n
    }
}
  , $E = {
    ...Ud,
    color: gt,
    backgroundColor: gt,
    outlineColor: gt,
    fill: gt,
    stroke: gt,
    borderColor: gt,
    borderTopColor: gt,
    borderRightColor: gt,
    borderBottomColor: gt,
    borderLeftColor: gt,
    filter: If,
    WebkitFilter: If
}
  , Id = n => $E[n];
function x1(n, i) {
    let s = Id(n);
    return s !== If && (s = gi),
    s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
}
const XE = new Set(["auto", "none", "0"]);
function KE(n, i, s) {
    let l = 0, u;
    for (; l < n.length && !u; ) {
        const f = n[l];
        typeof f == "string" && !XE.has(f) && ws(f).values.length && (u = n[l]),
        l++
    }
    if (u && s)
        for (const f of i)
            n[f] = x1(s, u)
}
const D0 = n => n === nr || n === oe
  , O0 = (n, i) => parseFloat(n.split(", ")[i])
  , L0 = (n, i) => (s, {transform: l}) => {
    if (l === "none" || !l)
        return 0;
    const u = l.match(/^matrix3d\((.+)\)$/u);
    if (u)
        return O0(u[1], i);
    {
        const f = l.match(/^matrix\((.+)\)$/u);
        return f ? O0(f[1], n) : 0
    }
}
  , FE = new Set(["x", "y", "z"])
  , ZE = tr.filter(n => !FE.has(n));
function QE(n) {
    const i = [];
    return ZE.forEach(s => {
        const l = n.getValue(s);
        l !== void 0 && (i.push([s, l.get()]),
        l.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
    i
}
const Wa = {
    width: ({x: n}, {paddingLeft: i="0", paddingRight: s="0"}) => n.max - n.min - parseFloat(i) - parseFloat(s),
    height: ({y: n}, {paddingTop: i="0", paddingBottom: s="0"}) => n.max - n.min - parseFloat(i) - parseFloat(s),
    top: (n, {top: i}) => parseFloat(i),
    left: (n, {left: i}) => parseFloat(i),
    bottom: ({y: n}, {top: i}) => parseFloat(i) + (n.max - n.min),
    right: ({x: n}, {left: i}) => parseFloat(i) + (n.max - n.min),
    x: L0(4, 13),
    y: L0(5, 14)
};
Wa.translateX = Wa.x;
Wa.translateY = Wa.y;
const Zi = new Set;
let ed = !1
  , td = !1;
function S1() {
    if (td) {
        const n = Array.from(Zi).filter(l => l.needsMeasurement)
          , i = new Set(n.map(l => l.element))
          , s = new Map;
        i.forEach(l => {
            const u = QE(l);
            u.length && (s.set(l, u),
            l.render())
        }
        ),
        n.forEach(l => l.measureInitialState()),
        i.forEach(l => {
            l.render();
            const u = s.get(l);
            u && u.forEach( ([f,d]) => {
                var p;
                (p = l.getValue(f)) === null || p === void 0 || p.set(d)
            }
            )
        }
        ),
        n.forEach(l => l.measureEndState()),
        n.forEach(l => {
            l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY)
        }
        )
    }
    td = !1,
    ed = !1,
    Zi.forEach(n => n.complete()),
    Zi.clear()
}
function w1() {
    Zi.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (td = !0)
    }
    )
}
function JE() {
    w1(),
    S1()
}
class eh {
    constructor(i, s, l, u, f, d=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...i],
        this.onComplete = s,
        this.name = l,
        this.motionValue = u,
        this.element = f,
        this.isAsync = d
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (Zi.add(this),
        ed || (ed = !0,
        ze.read(w1),
        ze.resolveKeyframes(S1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, name: s, element: l, motionValue: u} = this;
        for (let f = 0; f < i.length; f++)
            if (i[f] === null)
                if (f === 0) {
                    const d = u == null ? void 0 : u.get()
                      , p = i[i.length - 1];
                    if (d !== void 0)
                        i[0] = d;
                    else if (l && s) {
                        const h = l.readValue(s, p);
                        h != null && (i[0] = h)
                    }
                    i[0] === void 0 && (i[0] = p),
                    u && d === void 0 && u.set(i[0])
                } else
                    i[f] = i[f - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Zi.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        Zi.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const T1 = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n)
  , WE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function IE(n) {
    const i = WE.exec(n);
    if (!i)
        return [, ];
    const [,s,l,u] = i;
    return [`--${s ?? l}`, u]
}
function E1(n, i, s=1) {
    const [l,u] = IE(n);
    if (!l)
        return;
    const f = window.getComputedStyle(i).getPropertyValue(l);
    if (f) {
        const d = f.trim();
        return T1(d) ? parseFloat(d) : d
    }
    return _d(u) ? E1(u, i, s + 1) : u
}
const R1 = n => i => i.test(n)
  , eR = {
    test: n => n === "auto",
    parse: n => n
}
  , A1 = [nr, oe, mn, hi, NT, BT, eR]
  , _0 = n => A1.find(R1(n));
class C1 extends eh {
    constructor(i, s, l, u, f) {
        super(i, s, l, u, f, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, element: s, name: l} = this;
        if (!s || !s.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < i.length; h++) {
            let m = i[h];
            if (typeof m == "string" && (m = m.trim(),
            _d(m))) {
                const y = E1(m, s.current);
                y !== void 0 && (i[h] = y),
                h === i.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !i1.has(l) || i.length !== 2)
            return;
        const [u,f] = i
          , d = _0(u)
          , p = _0(f);
        if (d !== p)
            if (D0(d) && D0(p))
                for (let h = 0; h < i.length; h++) {
                    const m = i[h];
                    typeof m == "string" && (i[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: i, name: s} = this
          , l = [];
        for (let u = 0; u < i.length; u++)
            DE(i[u]) && l.push(u);
        l.length && KE(i, l, s)
    }
    measureInitialState() {
        const {element: i, unresolvedKeyframes: s, name: l} = this;
        if (!i || !i.current)
            return;
        l === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Wa[l](i.measureViewportBox(), window.getComputedStyle(i.current)),
        s[0] = this.measuredOrigin;
        const u = s[s.length - 1];
        u !== void 0 && i.getValue(l, u).jump(u, !1)
    }
    measureEndState() {
        var i;
        const {element: s, name: l, unresolvedKeyframes: u} = this;
        if (!s || !s.current)
            return;
        const f = s.getValue(l);
        f && f.jump(this.measuredOrigin, !1);
        const d = u.length - 1
          , p = u[d];
        u[d] = Wa[l](s.measureViewportBox(), window.getComputedStyle(s.current)),
        p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
        !((i = this.removedTransforms) === null || i === void 0) && i.length && this.removedTransforms.forEach( ([h,m]) => {
            s.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const U0 = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (gi.test(n) || n === "0") && !n.startsWith("url("));
function tR(n) {
    const i = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== i)
            return !0
}
function nR(n, i, s, l) {
    const u = n[0];
    if (u === null)
        return !1;
    if (i === "display" || i === "visibility")
        return !0;
    const f = n[n.length - 1]
      , d = U0(u, i)
      , p = U0(f, i);
    return !d || !p ? !1 : tR(n) || (s === "spring" || Yd(s)) && l
}
const iR = n => n !== null;
function Ho(n, {repeat: i, repeatType: s="loop"}, l) {
    const u = n.filter(iR)
      , f = i && s !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
    return !f || l === void 0 ? u[f] : l
}
const aR = 40;
class j1 {
    constructor({autoplay: i=!0, delay: s=0, type: l="keyframes", repeat: u=0, repeatDelay: f=0, repeatType: d="loop", ...p}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = pn.now(),
        this.options = {
            autoplay: i,
            delay: s,
            type: l,
            repeat: u,
            repeatDelay: f,
            repeatType: d,
            ...p
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > aR ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && JE(),
        this._resolved
    }
    onKeyframesResolved(i, s) {
        this.resolvedAt = pn.now(),
        this.hasAttemptedResolve = !0;
        const {name: l, type: u, velocity: f, delay: d, onComplete: p, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !nR(i, l, u, f))
            if (d)
                this.options.duration = 0;
            else {
                h && h(Ho(i, this.options, s)),
                p && p(),
                this.resolveFinishedPromise();
                return
            }
        const y = this.initPlayback(i, s);
        y !== !1 && (this._resolved = {
            keyframes: i,
            finalKeyframe: s,
            ...y
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(i, s) {
        return this.currentFinishedPromise.then(i, s)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(i => {
            this.resolveFinishedPromise = i
        }
        )
    }
}
const He = (n, i, s) => n + (i - n) * s;
function df(n, i, s) {
    return s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
}
function rR({hue: n, saturation: i, lightness: s, alpha: l}) {
    n /= 360,
    i /= 100,
    s /= 100;
    let u = 0
      , f = 0
      , d = 0;
    if (!i)
        u = f = d = s;
    else {
        const p = s < .5 ? s * (1 + i) : s + i - s * i
          , h = 2 * s - p;
        u = df(h, p, n + 1 / 3),
        f = df(h, p, n),
        d = df(h, p, n - 1 / 3)
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: l
    }
}
function So(n, i) {
    return s => s > 0 ? i : n
}
const hf = (n, i, s) => {
    const l = n * n
      , u = s * (i * i - l) + l;
    return u < 0 ? 0 : Math.sqrt(u)
}
  , sR = [Wf, Ki, Pa]
  , lR = n => sR.find(i => i.test(n));
function z0(n) {
    const i = lR(n);
    if (!i)
        return !1;
    let s = i.parse(n);
    return i === Pa && (s = rR(s)),
    s
}
const k0 = (n, i) => {
    const s = z0(n)
      , l = z0(i);
    if (!s || !l)
        return So(n, i);
    const u = {
        ...s
    };
    return f => (u.red = hf(s.red, l.red, f),
    u.green = hf(s.green, l.green, f),
    u.blue = hf(s.blue, l.blue, f),
    u.alpha = He(s.alpha, l.alpha, f),
    Ki.transform(u))
}
  , oR = (n, i) => s => i(n(s))
  , Ms = (...n) => n.reduce(oR)
  , nd = new Set(["none", "hidden"]);
function uR(n, i) {
    return nd.has(n) ? s => s <= 0 ? n : i : s => s >= 1 ? i : n
}
function cR(n, i) {
    return s => He(n, i, s)
}
function th(n) {
    return typeof n == "number" ? cR : typeof n == "string" ? _d(n) ? So : gt.test(n) ? k0 : hR : Array.isArray(n) ? M1 : typeof n == "object" ? gt.test(n) ? k0 : fR : So
}
function M1(n, i) {
    const s = [...n]
      , l = s.length
      , u = n.map( (f, d) => th(f)(f, i[d]));
    return f => {
        for (let d = 0; d < l; d++)
            s[d] = u[d](f);
        return s
    }
}
function fR(n, i) {
    const s = {
        ...n,
        ...i
    }
      , l = {};
    for (const u in s)
        n[u] !== void 0 && i[u] !== void 0 && (l[u] = th(n[u])(n[u], i[u]));
    return u => {
        for (const f in l)
            s[f] = l[f](u);
        return s
    }
}
function dR(n, i) {
    var s;
    const l = []
      , u = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let f = 0; f < i.values.length; f++) {
        const d = i.types[f]
          , p = n.indexes[d][u[d]]
          , h = (s = n.values[p]) !== null && s !== void 0 ? s : 0;
        l[f] = h,
        u[d]++
    }
    return l
}
const hR = (n, i) => {
    const s = gi.createTransformer(i)
      , l = ws(n)
      , u = ws(i);
    return l.indexes.var.length === u.indexes.var.length && l.indexes.color.length === u.indexes.color.length && l.indexes.number.length >= u.indexes.number.length ? nd.has(n) && !u.values.length || nd.has(i) && !l.values.length ? uR(n, i) : Ms(M1(dR(l, u), u.values), s) : So(n, i)
}
;
function D1(n, i, s) {
    return typeof n == "number" && typeof i == "number" && typeof s == "number" ? He(n, i, s) : th(n)(n, i)
}
const mR = 5;
function O1(n, i, s) {
    const l = Math.max(i - mR, 0);
    return a1(s - n(l), i - l)
}
const $e = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , V0 = .001;
function pR({duration: n=$e.duration, bounce: i=$e.bounce, velocity: s=$e.velocity, mass: l=$e.mass}) {
    let u, f, d = 1 - i;
    d = Pn($e.minDamping, $e.maxDamping, d),
    n = Pn($e.minDuration, $e.maxDuration, Nn(n)),
    d < 1 ? (u = m => {
        const y = m * d
          , b = y * n
          , S = y - s
          , T = id(m, d)
          , w = Math.exp(-b);
        return V0 - S / T * w
    }
    ,
    f = m => {
        const b = m * d * n
          , S = b * s + s
          , T = Math.pow(d, 2) * Math.pow(m, 2) * n
          , w = Math.exp(-b)
          , j = id(Math.pow(m, 2), d);
        return (-u(m) + V0 > 0 ? -1 : 1) * ((S - T) * w) / j
    }
    ) : (u = m => {
        const y = Math.exp(-m * n)
          , b = (m - s) * n + 1;
        return -.001 + y * b
    }
    ,
    f = m => {
        const y = Math.exp(-m * n)
          , b = (s - m) * (n * n);
        return y * b
    }
    );
    const p = 5 / n
      , h = yR(u, f, p);
    if (n = Bn(n),
    isNaN(h))
        return {
            stiffness: $e.stiffness,
            damping: $e.damping,
            duration: n
        };
    {
        const m = Math.pow(h, 2) * l;
        return {
            stiffness: m,
            damping: d * 2 * Math.sqrt(l * m),
            duration: n
        }
    }
}
const gR = 12;
function yR(n, i, s) {
    let l = s;
    for (let u = 1; u < gR; u++)
        l = l - n(l) / i(l);
    return l
}
function id(n, i) {
    return n * Math.sqrt(1 - i * i)
}
const vR = ["duration", "bounce"]
  , bR = ["stiffness", "damping", "mass"];
function B0(n, i) {
    return i.some(s => n[s] !== void 0)
}
function xR(n) {
    let i = {
        velocity: $e.velocity,
        stiffness: $e.stiffness,
        damping: $e.damping,
        mass: $e.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!B0(n, bR) && B0(n, vR))
        if (n.visualDuration) {
            const s = n.visualDuration
              , l = 2 * Math.PI / (s * 1.2)
              , u = l * l
              , f = 2 * Pn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
            i = {
                ...i,
                mass: $e.mass,
                stiffness: u,
                damping: f
            }
        } else {
            const s = pR(n);
            i = {
                ...i,
                ...s,
                mass: $e.mass
            },
            i.isResolvedFromDuration = !0
        }
    return i
}
function L1(n=$e.visualDuration, i=$e.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: i
    } : n;
    let {restSpeed: l, restDelta: u} = s;
    const f = s.keyframes[0]
      , d = s.keyframes[s.keyframes.length - 1]
      , p = {
        done: !1,
        value: f
    }
      , {stiffness: h, damping: m, mass: y, duration: b, velocity: S, isResolvedFromDuration: T} = xR({
        ...s,
        velocity: -Nn(s.velocity || 0)
    })
      , w = S || 0
      , j = m / (2 * Math.sqrt(h * y))
      , U = d - f
      , A = Nn(Math.sqrt(h / y))
      , k = Math.abs(U) < 5;
    l || (l = k ? $e.restSpeed.granular : $e.restSpeed.default),
    u || (u = k ? $e.restDelta.granular : $e.restDelta.default);
    let V;
    if (j < 1) {
        const M = id(A, j);
        V = N => {
            const Q = Math.exp(-j * A * N);
            return d - Q * ((w + j * A * U) / M * Math.sin(M * N) + U * Math.cos(M * N))
        }
    } else if (j === 1)
        V = M => d - Math.exp(-A * M) * (U + (w + A * U) * M);
    else {
        const M = A * Math.sqrt(j * j - 1);
        V = N => {
            const Q = Math.exp(-j * A * N)
              , P = Math.min(M * N, 300);
            return d - Q * ((w + j * A * U) * Math.sinh(P) + M * U * Math.cosh(P)) / M
        }
    }
    const F = {
        calculatedDuration: T && b || null,
        next: M => {
            const N = V(M);
            if (T)
                p.done = M >= b;
            else {
                let Q = 0;
                j < 1 && (Q = M === 0 ? Bn(w) : O1(V, M, N));
                const P = Math.abs(Q) <= l
                  , _ = Math.abs(d - N) <= u;
                p.done = P && _
            }
            return p.value = p.done ? d : N,
            p
        }
        ,
        toString: () => {
            const M = Math.min(Qv(F), Zf)
              , N = Jv(Q => F.next(M * Q).value, M, 30);
            return M + "ms " + N
        }
    };
    return F
}
function N0({keyframes: n, velocity: i=0, power: s=.8, timeConstant: l=325, bounceDamping: u=10, bounceStiffness: f=500, modifyTarget: d, min: p, max: h, restDelta: m=.5, restSpeed: y}) {
    const b = n[0]
      , S = {
        done: !1,
        value: b
    }
      , T = P => p !== void 0 && P < p || h !== void 0 && P > h
      , w = P => p === void 0 ? h : h === void 0 || Math.abs(p - P) < Math.abs(h - P) ? p : h;
    let j = s * i;
    const U = b + j
      , A = d === void 0 ? U : d(U);
    A !== U && (j = A - b);
    const k = P => -j * Math.exp(-P / l)
      , V = P => A + k(P)
      , F = P => {
        const _ = k(P)
          , G = V(P);
        S.done = Math.abs(_) <= m,
        S.value = S.done ? A : G
    }
    ;
    let M, N;
    const Q = P => {
        T(S.value) && (M = P,
        N = L1({
            keyframes: [S.value, w(S.value)],
            velocity: O1(V, P, S.value),
            damping: u,
            stiffness: f,
            restDelta: m,
            restSpeed: y
        }))
    }
    ;
    return Q(0),
    {
        calculatedDuration: null,
        next: P => {
            let _ = !1;
            return !N && M === void 0 && (_ = !0,
            F(P),
            Q(P)),
            M !== void 0 && P >= M ? N.next(P - M) : (!_ && F(P),
            S)
        }
    }
}
const SR = js(.42, 0, 1, 1)
  , wR = js(0, 0, .58, 1)
  , _1 = js(.42, 0, .58, 1)
  , TR = n => Array.isArray(n) && typeof n[0] != "number"
  , ER = {
    linear: _t,
    easeIn: SR,
    easeInOut: _1,
    easeOut: wR,
    circIn: Qd,
    circInOut: h1,
    circOut: d1,
    backIn: Zd,
    backInOut: c1,
    backOut: u1,
    anticipate: f1
}
  , H0 = n => {
    if (qd(n)) {
        Ov(n.length === 4);
        const [i,s,l,u] = n;
        return js(i, s, l, u)
    } else if (typeof n == "string")
        return ER[n];
    return n
}
;
function RR(n, i, s) {
    const l = []
      , u = s || D1
      , f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let p = u(n[d], n[d + 1]);
        if (i) {
            const h = Array.isArray(i) ? i[d] || _t : i;
            p = Ms(h, p)
        }
        l.push(p)
    }
    return l
}
function AR(n, i, {clamp: s=!0, ease: l, mixer: u}={}) {
    const f = n.length;
    if (Ov(f === i.length),
    f === 1)
        return () => i[0];
    if (f === 2 && i[0] === i[1])
        return () => i[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && (n = [...n].reverse(),
    i = [...i].reverse());
    const p = RR(i, l, u)
      , h = p.length
      , m = y => {
        if (d && y < n[0])
            return i[0];
        let b = 0;
        if (h > 1)
            for (; b < n.length - 2 && !(y < n[b + 1]); b++)
                ;
        const S = Qa(n[b], n[b + 1], y);
        return p[b](S)
    }
    ;
    return s ? y => m(Pn(n[0], n[f - 1], y)) : m
}
function CR(n, i) {
    const s = n[n.length - 1];
    for (let l = 1; l <= i; l++) {
        const u = Qa(0, i, l);
        n.push(He(s, 1, u))
    }
}
function jR(n) {
    const i = [0];
    return CR(i, n.length - 1),
    i
}
function MR(n, i) {
    return n.map(s => s * i)
}
function DR(n, i) {
    return n.map( () => i || _1).splice(0, n.length - 1)
}
function wo({duration: n=300, keyframes: i, times: s, ease: l="easeInOut"}) {
    const u = TR(l) ? l.map(H0) : H0(l)
      , f = {
        done: !1,
        value: i[0]
    }
      , d = MR(s && s.length === i.length ? s : jR(i), n)
      , p = AR(d, i, {
        ease: Array.isArray(u) ? u : DR(i, u)
    });
    return {
        calculatedDuration: n,
        next: h => (f.value = p(h),
        f.done = h >= n,
        f)
    }
}
const OR = n => {
    const i = ({timestamp: s}) => n(s);
    return {
        start: () => ze.update(i, !0),
        stop: () => pi(i),
        now: () => dt.isProcessing ? dt.timestamp : pn.now()
    }
}
  , LR = {
    decay: N0,
    inertia: N0,
    tween: wo,
    keyframes: wo,
    spring: L1
}
  , _R = n => n / 100;
class nh extends j1 {
    constructor(i) {
        super(i),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: s, motionValue: l, element: u, keyframes: f} = this.options
          , d = (u == null ? void 0 : u.KeyframeResolver) || eh
          , p = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new d(f,p,s,l,u),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(i) {
        const {type: s="keyframes", repeat: l=0, repeatDelay: u=0, repeatType: f, velocity: d=0} = this.options
          , p = Yd(s) ? s : LR[s] || wo;
        let h, m;
        p !== wo && typeof i[0] != "number" && (h = Ms(_R, D1(i[0], i[1])),
        i = [0, 100]);
        const y = p({
            ...this.options,
            keyframes: i
        });
        f === "mirror" && (m = p({
            ...this.options,
            keyframes: [...i].reverse(),
            velocity: -d
        })),
        y.calculatedDuration === null && (y.calculatedDuration = Qv(y));
        const {calculatedDuration: b} = y
          , S = b + u
          , T = S * (l + 1) - u;
        return {
            generator: y,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: b,
            resolvedDuration: S,
            totalDuration: T
        }
    }
    onPostResolved() {
        const {autoplay: i=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !i ? this.pause() : this.state = this.pendingPlayState
    }
    tick(i, s=!1) {
        const {resolved: l} = this;
        if (!l) {
            const {keyframes: P} = this.options;
            return {
                done: !0,
                value: P[P.length - 1]
            }
        }
        const {finalKeyframe: u, generator: f, mirroredGenerator: d, mapPercentToKeyframes: p, keyframes: h, calculatedDuration: m, totalDuration: y, resolvedDuration: b} = l;
        if (this.startTime === null)
            return f.next(0);
        const {delay: S, repeat: T, repeatType: w, repeatDelay: j, onUpdate: U} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - y / this.speed, this.startTime)),
        s ? this.currentTime = i : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(i - this.startTime) * this.speed;
        const A = this.currentTime - S * (this.speed >= 0 ? 1 : -1)
          , k = this.speed >= 0 ? A < 0 : A > y;
        this.currentTime = Math.max(A, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = y);
        let V = this.currentTime
          , F = f;
        if (T) {
            const P = Math.min(this.currentTime, y) / b;
            let _ = Math.floor(P)
              , G = P % 1;
            !G && P >= 1 && (G = 1),
            G === 1 && _--,
            _ = Math.min(_, T + 1),
            !!(_ % 2) && (w === "reverse" ? (G = 1 - G,
            j && (G -= j / b)) : w === "mirror" && (F = d)),
            V = Pn(0, 1, G) * b
        }
        const M = k ? {
            done: !1,
            value: h[0]
        } : F.next(V);
        p && (M.value = p(M.value));
        let {done: N} = M;
        !k && m !== null && (N = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
        const Q = this.holdTime === null && (this.state === "finished" || this.state === "running" && N);
        return Q && u !== void 0 && (M.value = Ho(h, this.options, u)),
        U && U(M.value),
        Q && this.finish(),
        M
    }
    get duration() {
        const {resolved: i} = this;
        return i ? Nn(i.calculatedDuration) : 0
    }
    get time() {
        return Nn(this.currentTime)
    }
    set time(i) {
        i = Bn(i),
        this.currentTime = i,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const s = this.playbackSpeed !== i;
        this.playbackSpeed = i,
        s && (this.time = Nn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: i=OR, onPlay: s, startTime: l} = this.options;
        this.driver || (this.driver = i(f => this.tick(f))),
        s && s();
        const u = this.driver.now();
        this.holdTime !== null ? this.startTime = u - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = u) : this.startTime = l ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var i;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (i = this.currentTime) !== null && i !== void 0 ? i : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: i} = this.options;
        i && i()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0,
        this.tick(i, !0)
    }
}
const UR = new Set(["opacity", "clipPath", "filter", "transform"]);
function zR(n, i, s, {delay: l=0, duration: u=300, repeat: f=0, repeatType: d="loop", ease: p="easeInOut", times: h}={}) {
    const m = {
        [i]: s
    };
    h && (m.offset = h);
    const y = Iv(p, u);
    return Array.isArray(y) && (m.easing = y),
    n.animate(m, {
        delay: l,
        duration: u,
        easing: Array.isArray(y) ? "linear" : y,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    })
}
const kR = Cd( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , To = 10
  , VR = 2e4;
function BR(n) {
    return Yd(n.type) || n.type === "spring" || !Wv(n.ease)
}
function NR(n, i) {
    const s = new nh({
        ...i,
        keyframes: n,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let l = {
        done: !1,
        value: n[0]
    };
    const u = [];
    let f = 0;
    for (; !l.done && f < VR; )
        l = s.sample(f),
        u.push(l.value),
        f += To;
    return {
        times: void 0,
        keyframes: u,
        duration: f - To,
        ease: "linear"
    }
}
const U1 = {
    anticipate: f1,
    backInOut: c1,
    circInOut: h1
};
function HR(n) {
    return n in U1
}
class P0 extends j1 {
    constructor(i) {
        super(i);
        const {name: s, motionValue: l, element: u, keyframes: f} = this.options;
        this.resolver = new C1(f, (d, p) => this.onKeyframesResolved(d, p),s,l,u),
        this.resolver.scheduleResolve()
    }
    initPlayback(i, s) {
        let {duration: l=300, times: u, ease: f, type: d, motionValue: p, name: h, startTime: m} = this.options;
        if (!p.owner || !p.owner.current)
            return !1;
        if (typeof f == "string" && bo() && HR(f) && (f = U1[f]),
        BR(this.options)) {
            const {onComplete: b, onUpdate: S, motionValue: T, element: w, ...j} = this.options
              , U = NR(i, j);
            i = U.keyframes,
            i.length === 1 && (i[1] = i[0]),
            l = U.duration,
            u = U.times,
            f = U.ease,
            d = "keyframes"
        }
        const y = zR(p.owner.current, h, i, {
            ...this.options,
            duration: l,
            times: u,
            ease: f
        });
        return y.startTime = m ?? this.calcStartTime(),
        this.pendingTimeline ? (E0(y, this.pendingTimeline),
        this.pendingTimeline = void 0) : y.onfinish = () => {
            const {onComplete: b} = this.options;
            p.set(Ho(i, this.options, s)),
            b && b(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: y,
            duration: l,
            times: u,
            type: d,
            ease: f,
            keyframes: i
        }
    }
    get duration() {
        const {resolved: i} = this;
        if (!i)
            return 0;
        const {duration: s} = i;
        return Nn(s)
    }
    get time() {
        const {resolved: i} = this;
        if (!i)
            return 0;
        const {animation: s} = i;
        return Nn(s.currentTime || 0)
    }
    set time(i) {
        const {resolved: s} = this;
        if (!s)
            return;
        const {animation: l} = s;
        l.currentTime = Bn(i)
    }
    get speed() {
        const {resolved: i} = this;
        if (!i)
            return 1;
        const {animation: s} = i;
        return s.playbackRate
    }
    set speed(i) {
        const {resolved: s} = this;
        if (!s)
            return;
        const {animation: l} = s;
        l.playbackRate = i
    }
    get state() {
        const {resolved: i} = this;
        if (!i)
            return "idle";
        const {animation: s} = i;
        return s.playState
    }
    get startTime() {
        const {resolved: i} = this;
        if (!i)
            return null;
        const {animation: s} = i;
        return s.startTime
    }
    attachTimeline(i) {
        if (!this._resolved)
            this.pendingTimeline = i;
        else {
            const {resolved: s} = this;
            if (!s)
                return _t;
            const {animation: l} = s;
            E0(l, i)
        }
        return _t
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: s} = i;
        s.playState === "finished" && this.updateFinishedPromise(),
        s.play()
    }
    pause() {
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: s} = i;
        s.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: s, keyframes: l, duration: u, type: f, ease: d, times: p} = i;
        if (s.playState === "idle" || s.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: y, onComplete: b, element: S, ...T} = this.options
              , w = new nh({
                ...T,
                keyframes: l,
                duration: u,
                type: f,
                ease: d,
                times: p,
                isGenerator: !0
            })
              , j = Bn(this.time);
            m.setWithVelocity(w.sample(j - To).value, w.sample(j).value, To)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: i} = this;
        i && i.animation.finish()
    }
    cancel() {
        const {resolved: i} = this;
        i && i.animation.cancel()
    }
    static supports(i) {
        const {motionValue: s, name: l, repeatDelay: u, repeatType: f, damping: d, type: p} = i;
        if (!s || !s.owner || !(s.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: m} = s.owner.getProps();
        return kR() && l && UR.has(l) && !h && !m && !u && f !== "mirror" && d !== 0 && p !== "inertia"
    }
}
const PR = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , GR = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , YR = {
    type: "keyframes",
    duration: .8
}
  , qR = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , $R = (n, {keyframes: i}) => i.length > 2 ? YR : Ii.has(n) ? n.startsWith("scale") ? GR(i[1]) : PR : qR;
function XR({when: n, delay: i, delayChildren: s, staggerChildren: l, staggerDirection: u, repeat: f, repeatType: d, repeatDelay: p, from: h, elapsed: m, ...y}) {
    return !!Object.keys(y).length
}
const ih = (n, i, s, l={}, u, f) => d => {
    const p = Gd(l, n) || {}
      , h = p.delay || l.delay || 0;
    let {elapsed: m=0} = l;
    m = m - Bn(h);
    let y = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -m,
        onUpdate: S => {
            i.set(S),
            p.onUpdate && p.onUpdate(S)
        }
        ,
        onComplete: () => {
            d(),
            p.onComplete && p.onComplete()
        }
        ,
        name: n,
        motionValue: i,
        element: f ? void 0 : u
    };
    XR(p) || (y = {
        ...y,
        ...$R(n, y)
    }),
    y.duration && (y.duration = Bn(y.duration)),
    y.repeatDelay && (y.repeatDelay = Bn(y.repeatDelay)),
    y.from !== void 0 && (y.keyframes[0] = y.from);
    let b = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (y.duration = 0,
    y.delay === 0 && (b = !0)),
    b && !f && i.get() !== void 0) {
        const S = Ho(y.keyframes, p);
        if (S !== void 0)
            return ze.update( () => {
                y.onUpdate(S),
                y.onComplete()
            }
            ),
            new cE([])
    }
    return !f && P0.supports(y) ? new P0(y) : new nh(y)
}
;
function KR({protectedKeys: n, needsAnimating: i}, s) {
    const l = n.hasOwnProperty(s) && i[s] !== !0;
    return i[s] = !1,
    l
}
function z1(n, i, {delay: s=0, transitionOverride: l, type: u}={}) {
    var f;
    let {transition: d=n.getDefaultTransition(), transitionEnd: p, ...h} = i;
    l && (d = l);
    const m = []
      , y = u && n.animationState && n.animationState.getState()[u];
    for (const b in h) {
        const S = n.getValue(b, (f = n.latestValues[b]) !== null && f !== void 0 ? f : null)
          , T = h[b];
        if (T === void 0 || y && KR(y, b))
            continue;
        const w = {
            delay: s,
            ...Gd(d || {}, b)
        };
        let j = !1;
        if (window.MotionHandoffAnimation) {
            const A = r1(n);
            if (A) {
                const k = window.MotionHandoffAnimation(A, b, ze);
                k !== null && (w.startTime = k,
                j = !0)
            }
        }
        Jf(n, b),
        S.start(ih(b, S, T, n.shouldReduceMotion && i1.has(b) ? {
            type: !1
        } : w, n, j));
        const U = S.animation;
        U && m.push(U)
    }
    return p && Promise.all(m).then( () => {
        ze.update( () => {
            p && RE(n, p)
        }
        )
    }
    ),
    m
}
function ad(n, i, s={}) {
    var l;
    const u = xs(n, i, s.type === "exit" ? (l = n.presenceContext) === null || l === void 0 ? void 0 : l.custom : void 0);
    let {transition: f=n.getDefaultTransition() || {}} = u || {};
    s.transitionOverride && (f = s.transitionOverride);
    const d = u ? () => Promise.all(z1(n, u, s)) : () => Promise.resolve()
      , p = n.variantChildren && n.variantChildren.size ? (m=0) => {
        const {delayChildren: y=0, staggerChildren: b, staggerDirection: S} = f;
        return FR(n, i, y + m, b, S, s)
    }
    : () => Promise.resolve()
      , {when: h} = f;
    if (h) {
        const [m,y] = h === "beforeChildren" ? [d, p] : [p, d];
        return m().then( () => y())
    } else
        return Promise.all([d(), p(s.delay)])
}
function FR(n, i, s=0, l=0, u=1, f) {
    const d = []
      , p = (n.variantChildren.size - 1) * l
      , h = u === 1 ? (m=0) => m * l : (m=0) => p - m * l;
    return Array.from(n.variantChildren).sort(ZR).forEach( (m, y) => {
        m.notify("AnimationStart", i),
        d.push(ad(m, i, {
            ...f,
            delay: s + h(y)
        }).then( () => m.notify("AnimationComplete", i)))
    }
    ),
    Promise.all(d)
}
function ZR(n, i) {
    return n.sortNodePosition(i)
}
function QR(n, i, s={}) {
    n.notify("AnimationStart", i);
    let l;
    if (Array.isArray(i)) {
        const u = i.map(f => ad(n, f, s));
        l = Promise.all(u)
    } else if (typeof i == "string")
        l = ad(n, i, s);
    else {
        const u = typeof i == "function" ? xs(n, i, s.custom) : i;
        l = Promise.all(z1(n, u, s))
    }
    return l.then( () => {
        n.notify("AnimationComplete", i)
    }
    )
}
function k1(n, i) {
    if (!Array.isArray(i))
        return !1;
    const s = i.length;
    if (s !== n.length)
        return !1;
    for (let l = 0; l < s; l++)
        if (i[l] !== n[l])
            return !1;
    return !0
}
const JR = Md.length;
function V1(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? V1(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
        s
    }
    const i = {};
    for (let s = 0; s < JR; s++) {
        const l = Md[s]
          , u = n.props[l];
        (ys(u) || u === !1) && (i[l] = u)
    }
    return i
}
const WR = [...jd].reverse()
  , IR = jd.length;
function eA(n) {
    return i => Promise.all(i.map( ({animation: s, options: l}) => QR(n, s, l)))
}
function tA(n) {
    let i = eA(n)
      , s = G0()
      , l = !0;
    const u = h => (m, y) => {
        var b;
        const S = xs(n, y, h === "exit" ? (b = n.presenceContext) === null || b === void 0 ? void 0 : b.custom : void 0);
        if (S) {
            const {transition: T, transitionEnd: w, ...j} = S;
            m = {
                ...m,
                ...j,
                ...w
            }
        }
        return m
    }
    ;
    function f(h) {
        i = h(n)
    }
    function d(h) {
        const {props: m} = n
          , y = V1(n.parent) || {}
          , b = []
          , S = new Set;
        let T = {}
          , w = 1 / 0;
        for (let U = 0; U < IR; U++) {
            const A = WR[U]
              , k = s[A]
              , V = m[A] !== void 0 ? m[A] : y[A]
              , F = ys(V)
              , M = A === h ? k.isActive : null;
            M === !1 && (w = U);
            let N = V === y[A] && V !== m[A] && F;
            if (N && l && n.manuallyAnimateOnMount && (N = !1),
            k.protectedKeys = {
                ...T
            },
            !k.isActive && M === null || !V && !k.prevProp || Bo(V) || typeof V == "boolean")
                continue;
            const Q = nA(k.prevProp, V);
            let P = Q || A === h && k.isActive && !N && F || U > w && F
              , _ = !1;
            const G = Array.isArray(V) ? V : [V];
            let W = G.reduce(u(A), {});
            M === !1 && (W = {});
            const {prevResolvedValues: he={}} = k
              , Te = {
                ...he,
                ...W
            }
              , ke = I => {
                P = !0,
                S.has(I) && (_ = !0,
                S.delete(I)),
                k.needsAnimating[I] = !0;
                const ee = n.getValue(I);
                ee && (ee.liveStyle = !1)
            }
            ;
            for (const I in Te) {
                const ee = W[I]
                  , ue = he[I];
                if (T.hasOwnProperty(I))
                    continue;
                let R = !1;
                Ff(ee) && Ff(ue) ? R = !k1(ee, ue) : R = ee !== ue,
                R ? ee != null ? ke(I) : S.add(I) : ee !== void 0 && S.has(I) ? ke(I) : k.protectedKeys[I] = !0
            }
            k.prevProp = V,
            k.prevResolvedValues = W,
            k.isActive && (T = {
                ...T,
                ...W
            }),
            l && n.blockInitialAnimation && (P = !1),
            P && (!(N && Q) || _) && b.push(...G.map(I => ({
                animation: I,
                options: {
                    type: A
                }
            })))
        }
        if (S.size) {
            const U = {};
            if (typeof m.initial != "boolean") {
                const A = xs(n, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                A && A.transition && (U.transition = A.transition)
            }
            S.forEach(A => {
                const k = n.getBaseTarget(A)
                  , V = n.getValue(A);
                V && (V.liveStyle = !0),
                U[A] = k ?? null
            }
            ),
            b.push({
                animation: U
            })
        }
        let j = !!b.length;
        return l && (m.initial === !1 || m.initial === m.animate) && !n.manuallyAnimateOnMount && (j = !1),
        l = !1,
        j ? i(b) : Promise.resolve()
    }
    function p(h, m) {
        var y;
        if (s[h].isActive === m)
            return Promise.resolve();
        (y = n.variantChildren) === null || y === void 0 || y.forEach(S => {
            var T;
            return (T = S.animationState) === null || T === void 0 ? void 0 : T.setActive(h, m)
        }
        ),
        s[h].isActive = m;
        const b = d(h);
        for (const S in s)
            s[S].protectedKeys = {};
        return b
    }
    return {
        animateChanges: d,
        setActive: p,
        setAnimateFunction: f,
        getState: () => s,
        reset: () => {
            s = G0(),
            l = !0
        }
    }
}
function nA(n, i) {
    return typeof i == "string" ? i !== n : Array.isArray(i) ? !k1(i, n) : !1
}
function Hi(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function G0() {
    return {
        animate: Hi(!0),
        whileInView: Hi(),
        whileHover: Hi(),
        whileTap: Hi(),
        whileDrag: Hi(),
        whileFocus: Hi(),
        exit: Hi()
    }
}
class yi {
    constructor(i) {
        this.isMounted = !1,
        this.node = i
    }
    update() {}
}
class iA extends yi {
    constructor(i) {
        super(i),
        i.animationState || (i.animationState = tA(i))
    }
    updateAnimationControlsSubscription() {
        const {animate: i} = this.node.getProps();
        Bo(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: i} = this.node.getProps()
          , {animate: s} = this.node.prevProps || {};
        i !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var i;
        this.node.animationState.reset(),
        (i = this.unmountControls) === null || i === void 0 || i.call(this)
    }
}
let aA = 0;
class rA extends yi {
    constructor() {
        super(...arguments),
        this.id = aA++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: i, onExitComplete: s} = this.node.presenceContext
          , {isPresent: l} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === l)
            return;
        const u = this.node.animationState.setActive("exit", !i);
        s && !i && u.then( () => {
            s(this.id)
        }
        )
    }
    mount() {
        const {register: i, onExitComplete: s} = this.node.presenceContext || {};
        s && s(this.id),
        i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const sA = {
    animation: {
        Feature: iA
    },
    exit: {
        Feature: rA
    }
};
function Ts(n, i, s, l={
    passive: !0
}) {
    return n.addEventListener(i, s, l),
    () => n.removeEventListener(i, s)
}
function Ds(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const lA = n => i => $d(i) && n(i, Ds(i));
function Ga(n, i, s, l) {
    return Ts(n, i, lA(s), l)
}
function B1({top: n, left: i, right: s, bottom: l}) {
    return {
        x: {
            min: i,
            max: s
        },
        y: {
            min: n,
            max: l
        }
    }
}
function oA({x: n, y: i}) {
    return {
        top: i.min,
        right: n.max,
        bottom: i.max,
        left: n.min
    }
}
function uA(n, i) {
    if (!i)
        return n;
    const s = i({
        x: n.left,
        y: n.top
    })
      , l = i({
        x: n.right,
        y: n.bottom
    });
    return {
        top: s.y,
        left: s.x,
        bottom: l.y,
        right: l.x
    }
}
const N1 = 1e-4
  , cA = 1 - N1
  , fA = 1 + N1
  , H1 = .01
  , dA = 0 - H1
  , hA = 0 + H1;
function xt(n) {
    return n.max - n.min
}
function mA(n, i, s) {
    return Math.abs(n - i) <= s
}
function Y0(n, i, s, l=.5) {
    n.origin = l,
    n.originPoint = He(i.min, i.max, n.origin),
    n.scale = xt(s) / xt(i),
    n.translate = He(s.min, s.max, n.origin) - n.originPoint,
    (n.scale >= cA && n.scale <= fA || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= dA && n.translate <= hA || isNaN(n.translate)) && (n.translate = 0)
}
function fs(n, i, s, l) {
    Y0(n.x, i.x, s.x, l ? l.originX : void 0),
    Y0(n.y, i.y, s.y, l ? l.originY : void 0)
}
function q0(n, i, s) {
    n.min = s.min + i.min,
    n.max = n.min + xt(i)
}
function pA(n, i, s) {
    q0(n.x, i.x, s.x),
    q0(n.y, i.y, s.y)
}
function $0(n, i, s) {
    n.min = i.min - s.min,
    n.max = n.min + xt(i)
}
function ds(n, i, s) {
    $0(n.x, i.x, s.x),
    $0(n.y, i.y, s.y)
}
const X0 = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ya = () => ({
    x: X0(),
    y: X0()
})
  , K0 = () => ({
    min: 0,
    max: 0
})
  , Fe = () => ({
    x: K0(),
    y: K0()
});
function Ft(n) {
    return [n("x"), n("y")]
}
function mf(n) {
    return n === void 0 || n === 1
}
function rd({scale: n, scaleX: i, scaleY: s}) {
    return !mf(n) || !mf(i) || !mf(s)
}
function $i(n) {
    return rd(n) || P1(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function P1(n) {
    return F0(n.x) || F0(n.y)
}
function F0(n) {
    return n && n !== "0%"
}
function Eo(n, i, s) {
    const l = n - s
      , u = i * l;
    return s + u
}
function Z0(n, i, s, l, u) {
    return u !== void 0 && (n = Eo(n, u, l)),
    Eo(n, s, l) + i
}
function sd(n, i=0, s=1, l, u) {
    n.min = Z0(n.min, i, s, l, u),
    n.max = Z0(n.max, i, s, l, u)
}
function G1(n, {x: i, y: s}) {
    sd(n.x, i.translate, i.scale, i.originPoint),
    sd(n.y, s.translate, s.scale, s.originPoint)
}
const Q0 = .999999999999
  , J0 = 1.0000000000001;
function gA(n, i, s, l=!1) {
    const u = s.length;
    if (!u)
        return;
    i.x = i.y = 1;
    let f, d;
    for (let p = 0; p < u; p++) {
        f = s[p],
        d = f.projectionDelta;
        const {visualElement: h} = f.options;
        h && h.props.style && h.props.style.display === "contents" || (l && f.options.layoutScroll && f.scroll && f !== f.root && $a(n, {
            x: -f.scroll.offset.x,
            y: -f.scroll.offset.y
        }),
        d && (i.x *= d.x.scale,
        i.y *= d.y.scale,
        G1(n, d)),
        l && $i(f.latestValues) && $a(n, f.latestValues))
    }
    i.x < J0 && i.x > Q0 && (i.x = 1),
    i.y < J0 && i.y > Q0 && (i.y = 1)
}
function qa(n, i) {
    n.min = n.min + i,
    n.max = n.max + i
}
function W0(n, i, s, l, u=.5) {
    const f = He(n.min, n.max, u);
    sd(n, i, s, f, l)
}
function $a(n, i) {
    W0(n.x, i.x, i.scaleX, i.scale, i.originX),
    W0(n.y, i.y, i.scaleY, i.scale, i.originY)
}
function Y1(n, i) {
    return B1(uA(n.getBoundingClientRect(), i))
}
function yA(n, i, s) {
    const l = Y1(n, s)
      , {scroll: u} = i;
    return u && (qa(l.x, u.offset.x),
    qa(l.y, u.offset.y)),
    l
}
const I0 = (n, i) => Math.abs(n - i);
function vA(n, i) {
    const s = I0(n.x, i.x)
      , l = I0(n.y, i.y);
    return Math.sqrt(s ** 2 + l ** 2)
}
class q1 {
    constructor(i, s, {transformPagePoint: l, dragSnapToOrigin: u=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = gf(this.lastMoveEventInfo, this.history)
              , b = this.startEvent !== null
              , S = vA(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!b && !S)
                return;
            const {point: T} = y
              , {timestamp: w} = dt;
            this.history.push({
                ...T,
                timestamp: w
            });
            const {onStart: j, onMove: U} = this.handlers;
            b || (j && j(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            U && U(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, b) => {
            if (y.target instanceof Element && y.target.hasPointerCapture && y.pointerId !== void 0)
                try {
                    if (!y.target.hasPointerCapture(y.pointerId))
                        return
                } catch {}
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = pf(b, this.transformPagePoint),
            ze.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, b) => {
            xo(y, "release"),
            this.end();
            const {onEnd: S, onSessionEnd: T, resumeAnimation: w} = this.handlers;
            if (this.dragSnapToOrigin && w && w(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const j = gf(y.type === "pointercancel" || y.type === "lostpointercapture" ? this.lastMoveEventInfo : pf(b, this.transformPagePoint), this.history);
            this.startEvent && S && S(y, j),
            T && T(y, j)
        }
        ,
        !$d(i))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = s,
        this.transformPagePoint = l;
        const f = Ds(i)
          , d = pf(f, this.transformPagePoint)
          , {point: p} = d
          , {timestamp: h} = dt;
        this.history = [{
            ...p,
            timestamp: h
        }];
        const {onSessionStart: m} = s;
        m && m(i, gf(d, this.history)),
        xo(i, "set"),
        this.removeListeners = Ms(Ga(i.currentTarget, "pointermove", this.handlePointerMove), Ga(i.currentTarget, "pointerup", this.handlePointerUp), Ga(i.currentTarget, "pointercancel", this.handlePointerUp), Ga(i.currentTarget, "lostpointercapture", this.handlePointerUp))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(),
        pi(this.updatePoint)
    }
}
function pf(n, i) {
    return i ? {
        point: i(n.point)
    } : n
}
function ey(n, i) {
    return {
        x: n.x - i.x,
        y: n.y - i.y
    }
}
function gf({point: n}, i) {
    return {
        point: n,
        delta: ey(n, $1(i)),
        offset: ey(n, bA(i)),
        velocity: xA(i, .1)
    }
}
function bA(n) {
    return n[0]
}
function $1(n) {
    return n[n.length - 1]
}
function xA(n, i) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
      , l = null;
    const u = $1(n);
    for (; s >= 0 && (l = n[s],
    !(u.timestamp - l.timestamp > Bn(i))); )
        s--;
    if (!l)
        return {
            x: 0,
            y: 0
        };
    const f = Nn(u.timestamp - l.timestamp);
    if (f === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (u.x - l.x) / f,
        y: (u.y - l.y) / f
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function SA(n, {min: i, max: s}, l) {
    return i !== void 0 && n < i ? n = l ? He(i, n, l.min) : Math.max(n, i) : s !== void 0 && n > s && (n = l ? He(s, n, l.max) : Math.min(n, s)),
    n
}
function ty(n, i, s) {
    return {
        min: i !== void 0 ? n.min + i : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function wA(n, {top: i, left: s, bottom: l, right: u}) {
    return {
        x: ty(n.x, s, u),
        y: ty(n.y, i, l)
    }
}
function ny(n, i) {
    let s = i.min - n.min
      , l = i.max - n.max;
    return i.max - i.min < n.max - n.min && ([s,l] = [l, s]),
    {
        min: s,
        max: l
    }
}
function TA(n, i) {
    return {
        x: ny(n.x, i.x),
        y: ny(n.y, i.y)
    }
}
function EA(n, i) {
    let s = .5;
    const l = xt(n)
      , u = xt(i);
    return u > l ? s = Qa(i.min, i.max - l, n.min) : l > u && (s = Qa(n.min, n.max - u, i.min)),
    Pn(0, 1, s)
}
function RA(n, i) {
    const s = {};
    return i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
}
const ld = .35;
function AA(n=ld) {
    return n === !1 ? n = 0 : n === !0 && (n = ld),
    {
        x: iy(n, "left", "right"),
        y: iy(n, "top", "bottom")
    }
}
function iy(n, i, s) {
    return {
        min: ay(n, i),
        max: ay(n, s)
    }
}
function ay(n, i) {
    return typeof n == "number" ? n : n[i] || 0
}
const CA = new WeakMap;
class jA {
    constructor(i) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Fe(),
        this.visualElement = i
    }
    start(i, {snapToCursor: s=!1}={}) {
        const {presenceContext: l} = this.visualElement;
        if (l && l.isPresent === !1)
            return;
        const u = y => {
            const {dragSnapToOrigin: b} = this.getProps();
            b ? this.pauseAnimation() : this.stopAnimation(),
            s && this.snapToCursor(Ds(y).point)
        }
          , f = (y, b) => {
            const {drag: S, dragPropagation: T, onDragStart: w} = this.getProps();
            if (S && !T && (this.openDragLock && this.openDragLock(),
            this.openDragLock = xE(S),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ft(U => {
                let A = this.getAxisMotionValue(U).get() || 0;
                if (mn.test(A)) {
                    const {projection: k} = this.visualElement;
                    if (k && k.layout) {
                        const V = k.layout.layoutBox[U];
                        V && (A = xt(V) * (parseFloat(A) / 100))
                    }
                }
                this.originPoint[U] = A
            }
            ),
            w && ze.postRender( () => w(y, b)),
            Jf(this.visualElement, "transform");
            const {animationState: j} = this.visualElement;
            j && j.setActive("whileDrag", !0)
        }
          , d = (y, b) => {
            const {dragPropagation: S, dragDirectionLock: T, onDirectionLock: w, onDrag: j} = this.getProps();
            if (!S && !this.openDragLock)
                return;
            const {offset: U} = b;
            if (T && this.currentDirection === null) {
                this.currentDirection = MA(U),
                this.currentDirection !== null && w && w(this.currentDirection);
                return
            }
            this.updateAxis("x", b.point, U),
            this.updateAxis("y", b.point, U),
            this.visualElement.render(),
            j && j(y, b)
        }
          , p = (y, b) => this.stop(y, b)
          , h = () => Ft(y => {
            var b;
            return this.getAnimationState(y) === "paused" && ((b = this.getAxisMotionValue(y).animation) === null || b === void 0 ? void 0 : b.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new q1(i,{
            onSessionStart: u,
            onStart: f,
            onMove: d,
            onSessionEnd: p,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m
        })
    }
    stop(i, s) {
        const l = this.isDragging;
        if (this.cancel(),
        !l)
            return;
        const {velocity: u} = s;
        this.startAnimation(u);
        const {onDragEnd: f} = this.getProps();
        f && ze.postRender( () => f(i, s))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: i, animationState: s} = this.visualElement;
        i && (i.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: l} = this.getProps();
        !l && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        s && s.setActive("whileDrag", !1)
    }
    updateAxis(i, s, l) {
        const {drag: u} = this.getProps();
        if (!l || !Zl(i, u, this.currentDirection))
            return;
        const f = this.getAxisMotionValue(i);
        let d = this.originPoint[i] + l[i];
        this.constraints && this.constraints[i] && (d = SA(d, this.constraints[i], this.elastic[i])),
        f.set(d)
    }
    resolveConstraints() {
        var i;
        const {dragConstraints: s, dragElastic: l} = this.getProps()
          , u = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) === null || i === void 0 ? void 0 : i.layout
          , f = this.constraints;
        s && Ha(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && u ? this.constraints = wA(u.layoutBox, s) : this.constraints = !1,
        this.elastic = AA(l),
        f !== this.constraints && u && this.constraints && !this.hasMutatedConstraints && Ft(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = RA(u.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: i, onMeasureDragConstraints: s} = this.getProps();
        if (!i || !Ha(i))
            return !1;
        const l = i.current
          , {projection: u} = this.visualElement;
        if (!u || !u.layout)
            return !1;
        const f = yA(l, u.root, this.visualElement.getTransformPagePoint());
        let d = TA(u.layout.layoutBox, f);
        if (s) {
            const p = s(oA(d));
            this.hasMutatedConstraints = !!p,
            p && (d = B1(p))
        }
        return d
    }
    startAnimation(i) {
        const {drag: s, dragMomentum: l, dragElastic: u, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: p} = this.getProps()
          , h = this.constraints || {}
          , m = Ft(y => {
            if (!Zl(y, s, this.currentDirection))
                return;
            let b = h && h[y] || {};
            d && (b = {
                min: 0,
                max: 0
            });
            const S = u ? 200 : 1e6
              , T = u ? 40 : 1e7
              , w = {
                type: "inertia",
                velocity: l ? i[y] : 0,
                bounceStiffness: S,
                bounceDamping: T,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...f,
                ...b
            };
            return this.startAxisValueAnimation(y, w)
        }
        );
        return Promise.all(m).then(p)
    }
    startAxisValueAnimation(i, s) {
        const l = this.getAxisMotionValue(i);
        return Jf(this.visualElement, i),
        l.start(ih(i, l, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        Ft(i => this.getAxisMotionValue(i).stop())
    }
    pauseAnimation() {
        Ft(i => {
            var s;
            return (s = this.getAxisMotionValue(i).animation) === null || s === void 0 ? void 0 : s.pause()
        }
        )
    }
    getAnimationState(i) {
        var s;
        return (s = this.getAxisMotionValue(i).animation) === null || s === void 0 ? void 0 : s.state
    }
    getAxisMotionValue(i) {
        const s = `_drag${i.toUpperCase()}`
          , l = this.visualElement.getProps()
          , u = l[s];
        return u || this.visualElement.getValue(i, (l.initial ? l.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        Ft(s => {
            const {drag: l} = this.getProps();
            if (!Zl(s, l, this.currentDirection))
                return;
            const {projection: u} = this.visualElement
              , f = this.getAxisMotionValue(s);
            if (u && u.layout) {
                const {min: d, max: p} = u.layout.layoutBox[s];
                f.set(i[s] - He(d, p, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: i, dragConstraints: s} = this.getProps()
          , {projection: l} = this.visualElement;
        if (!Ha(s) || !l || !this.constraints)
            return;
        this.stopAnimation();
        const u = {
            x: 0,
            y: 0
        };
        Ft(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const h = p.get();
                u[d] = EA({
                    min: h,
                    max: h
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: f} = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none",
        l.root && l.root.updateScroll(),
        l.updateLayout(),
        this.resolveConstraints(),
        Ft(d => {
            if (!Zl(d, i, null))
                return;
            const p = this.getAxisMotionValue(d)
              , {min: h, max: m} = this.constraints[d];
            p.set(He(h, m, u[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        CA.set(this.visualElement, this);
        const i = this.visualElement.current
          , s = Ga(i, "pointerdown", h => {
            const {drag: m, dragListener: y=!0} = this.getProps();
            m && y && this.start(h)
        }
        )
          , l = () => {
            const {dragConstraints: h} = this.getProps();
            Ha(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: u} = this.visualElement
          , f = u.addEventListener("measure", l);
        u && !u.layout && (u.root && u.root.updateScroll(),
        u.updateLayout()),
        ze.read(l);
        const d = Ts(window, "resize", () => this.scalePositionWithinConstraints())
          , p = u.addEventListener("didUpdate", ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Ft(y => {
                const b = this.getAxisMotionValue(y);
                b && (this.originPoint[y] += h[y].translate,
                b.set(b.get() + h[y].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            d(),
            s(),
            f(),
            p && p()
        }
    }
    getProps() {
        const i = this.visualElement.getProps()
          , {drag: s=!1, dragDirectionLock: l=!1, dragPropagation: u=!1, dragConstraints: f=!1, dragElastic: d=ld, dragMomentum: p=!0} = i;
        return {
            ...i,
            drag: s,
            dragDirectionLock: l,
            dragPropagation: u,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: p
        }
    }
}
function Zl(n, i, s) {
    return (i === !0 || i === n) && (s === null || s === n)
}
function MA(n, i=10) {
    let s = null;
    return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"),
    s
}
class DA extends yi {
    constructor(i) {
        super(i),
        this.removeGroupControls = _t,
        this.removeListeners = _t,
        this.controls = new jA(i)
    }
    mount() {
        const {dragControls: i} = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || _t
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const ry = n => (i, s) => {
    n && ze.postRender( () => n(i, s))
}
;
class OA extends yi {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = _t
    }
    onPointerDown(i) {
        this.session = new q1(i,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: u} = this.node.getProps();
        return {
            onSessionStart: ry(i),
            onStart: ry(s),
            onMove: l,
            onEnd: (f, d) => {
                delete this.session,
                u && ze.postRender( () => u(f, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ga(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const fo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function sy(n, i) {
    return i.max === i.min ? 0 : n / (i.max - i.min) * 100
}
const is = {
    correct: (n, i) => {
        if (!i.target)
            return n;
        if (typeof n == "string")
            if (oe.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = sy(n, i.target.x)
          , l = sy(n, i.target.y);
        return `${s}% ${l}%`
    }
}
  , LA = {
    correct: (n, {treeScale: i, projectionDelta: s}) => {
        const l = n
          , u = gi.parse(n);
        if (u.length > 5)
            return l;
        const f = gi.createTransformer(n)
          , d = typeof u[0] != "number" ? 1 : 0
          , p = s.x.scale * i.x
          , h = s.y.scale * i.y;
        u[0 + d] /= p,
        u[1 + d] /= h;
        const m = He(p, h, .5);
        return typeof u[2 + d] == "number" && (u[2 + d] /= m),
        typeof u[3 + d] == "number" && (u[3 + d] /= m),
        f(u)
    }
};
class _A extends C.Component {
    componentDidMount() {
        const {visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: u} = this.props
          , {projection: f} = i;
        VT(UA),
        f && (s.group && s.group.add(f),
        l && l.register && u && l.register(f),
        f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        f.setOptions({
            ...f.options,
            onExitComplete: () => this.safeToRemove()
        })),
        fo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {layoutDependency: s, visualElement: l, drag: u, isPresent: f} = this.props
          , d = l.projection;
        return d && (d.isPresent = f,
        u || i.layoutDependency !== s || s === void 0 ? d.willUpdate() : this.safeToRemove(),
        i.isPresent !== f && (f ? d.promote() : d.relegate() || ze.postRender( () => {
            const p = d.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: i} = this.props.visualElement;
        i && (i.root.didUpdate(),
        Od.postRender( () => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: i, layoutGroup: s, switchLayoutGroup: l} = this.props
          , {projection: u} = i;
        u && (u.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(u),
        l && l.deregister && l.deregister(u))
    }
    safeToRemove() {
        const {safeToRemove: i} = this.props;
        i && i()
    }
    render() {
        return null
    }
}
function X1(n) {
    const [i,s] = Mv()
      , l = C.useContext(Td);
    return v.jsx(_A, {
        ...n,
        layoutGroup: l,
        switchLayoutGroup: C.useContext(Vv),
        isPresent: i,
        safeToRemove: s
    })
}
const UA = {
    borderRadius: {
        ...is,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: is,
    borderTopRightRadius: is,
    borderBottomLeftRadius: is,
    borderBottomRightRadius: is,
    boxShadow: LA
};
function zA(n, i, s) {
    const l = yt(n) ? n : Ss(n);
    return l.start(ih("", l, i, s)),
    l.animation
}
function kA(n) {
    return n instanceof SVGElement && n.tagName !== "svg"
}
const VA = (n, i) => n.depth - i.depth;
class BA {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(i) {
        Xd(this.children, i),
        this.isDirty = !0
    }
    remove(i) {
        Kd(this.children, i),
        this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(VA),
        this.isDirty = !1,
        this.children.forEach(i)
    }
}
function NA(n, i) {
    const s = pn.now()
      , l = ({timestamp: u}) => {
        const f = u - s;
        f >= i && (pi(l),
        n(f - i))
    }
    ;
    return ze.read(l, !0),
    () => pi(l)
}
const K1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , HA = K1.length
  , ly = n => typeof n == "string" ? parseFloat(n) : n
  , oy = n => typeof n == "number" || oe.test(n);
function PA(n, i, s, l, u, f) {
    u ? (n.opacity = He(0, s.opacity !== void 0 ? s.opacity : 1, GA(l)),
    n.opacityExit = He(i.opacity !== void 0 ? i.opacity : 1, 0, YA(l))) : f && (n.opacity = He(i.opacity !== void 0 ? i.opacity : 1, s.opacity !== void 0 ? s.opacity : 1, l));
    for (let d = 0; d < HA; d++) {
        const p = `border${K1[d]}Radius`;
        let h = uy(i, p)
          , m = uy(s, p);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || oy(h) === oy(m) ? (n[p] = Math.max(He(ly(h), ly(m), l), 0),
        (mn.test(m) || mn.test(h)) && (n[p] += "%")) : n[p] = m
    }
    (i.rotate || s.rotate) && (n.rotate = He(i.rotate || 0, s.rotate || 0, l))
}
function uy(n, i) {
    return n[i] !== void 0 ? n[i] : n.borderRadius
}
const GA = F1(0, .5, d1)
  , YA = F1(.5, .95, _t);
function F1(n, i, s) {
    return l => l < n ? 0 : l > i ? 1 : s(Qa(n, i, l))
}
function cy(n, i) {
    n.min = i.min,
    n.max = i.max
}
function Xt(n, i) {
    cy(n.x, i.x),
    cy(n.y, i.y)
}
function fy(n, i) {
    n.translate = i.translate,
    n.scale = i.scale,
    n.originPoint = i.originPoint,
    n.origin = i.origin
}
function dy(n, i, s, l, u) {
    return n -= i,
    n = Eo(n, 1 / s, l),
    u !== void 0 && (n = Eo(n, 1 / u, l)),
    n
}
function qA(n, i=0, s=1, l=.5, u, f=n, d=n) {
    if (mn.test(i) && (i = parseFloat(i),
    i = He(d.min, d.max, i / 100) - d.min),
    typeof i != "number")
        return;
    let p = He(f.min, f.max, l);
    n === f && (p -= i),
    n.min = dy(n.min, i, s, p, u),
    n.max = dy(n.max, i, s, p, u)
}
function hy(n, i, [s,l,u], f, d) {
    qA(n, i[s], i[l], i[u], i.scale, f, d)
}
const $A = ["x", "scaleX", "originX"]
  , XA = ["y", "scaleY", "originY"];
function my(n, i, s, l) {
    hy(n.x, i, $A, s ? s.x : void 0, l ? l.x : void 0),
    hy(n.y, i, XA, s ? s.y : void 0, l ? l.y : void 0)
}
function py(n) {
    return n.translate === 0 && n.scale === 1
}
function Z1(n) {
    return py(n.x) && py(n.y)
}
function gy(n, i) {
    return n.min === i.min && n.max === i.max
}
function KA(n, i) {
    return gy(n.x, i.x) && gy(n.y, i.y)
}
function yy(n, i) {
    return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max)
}
function Q1(n, i) {
    return yy(n.x, i.x) && yy(n.y, i.y)
}
function vy(n) {
    return xt(n.x) / xt(n.y)
}
function by(n, i) {
    return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint
}
class FA {
    constructor() {
        this.members = []
    }
    add(i) {
        Xd(this.members, i),
        i.scheduleRender()
    }
    remove(i) {
        if (Kd(this.members, i),
        i === this.prevLead && (this.prevLead = void 0),
        i === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(i) {
        const s = this.members.findIndex(u => i === u);
        if (s === 0)
            return !1;
        let l;
        for (let u = s; u >= 0; u--) {
            const f = this.members[u];
            if (f.isPresent !== !1) {
                l = f;
                break
            }
        }
        return l ? (this.promote(l),
        !0) : !1
    }
    promote(i, s) {
        const l = this.lead;
        if (i !== l && (this.prevLead = l,
        this.lead = i,
        i.show(),
        l)) {
            l.instance && l.scheduleRender(),
            i.scheduleRender(),
            i.resumeFrom = l,
            s && (i.resumeFrom.preserveOpacity = !0),
            l.snapshot && (i.snapshot = l.snapshot,
            i.snapshot.latestValues = l.animationValues || l.latestValues),
            i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
            const {crossfade: u} = i.options;
            u === !1 && l.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            const {options: s, resumingFrom: l} = i;
            s.onExitComplete && s.onExitComplete(),
            l && l.options.onExitComplete && l.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(i => {
            i.instance && i.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function ZA(n, i, s) {
    let l = "";
    const u = n.x.translate / i.x
      , f = n.y.translate / i.y
      , d = (s == null ? void 0 : s.z) || 0;
    if ((u || f || d) && (l = `translate3d(${u}px, ${f}px, ${d}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s) {
        const {transformPerspective: m, rotate: y, rotateX: b, rotateY: S, skewX: T, skewY: w} = s;
        m && (l = `perspective(${m}px) ${l}`),
        y && (l += `rotate(${y}deg) `),
        b && (l += `rotateX(${b}deg) `),
        S && (l += `rotateY(${S}deg) `),
        T && (l += `skewX(${T}deg) `),
        w && (l += `skewY(${w}deg) `)
    }
    const p = n.x.scale * i.x
      , h = n.y.scale * i.y;
    return (p !== 1 || h !== 1) && (l += `scale(${p}, ${h})`),
    l || "none"
}
const yf = ["", "X", "Y", "Z"]
  , QA = {
    visibility: "hidden"
}
  , xy = 1e3;
let JA = 0;
function vf(n, i, s, l) {
    const {latestValues: u} = i;
    u[n] && (s[n] = u[n],
    i.setStaticValue(n, 0),
    l && (l[n] = 0))
}
function J1(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: i} = n.options;
    if (!i)
        return;
    const s = r1(i);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: u, layoutId: f} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", ze, !(u || f))
    }
    const {parent: l} = n;
    l && !l.hasCheckedOptimisedAppear && J1(l)
}
function W1({attachResizeListener: n, defaultParent: i, measureScroll: s, checkIsScrollRoot: l, resetTransform: u}) {
    return class {
        constructor(d={}, p=i == null ? void 0 : i()) {
            this.id = JA++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(eC),
                this.nodes.forEach(rC),
                this.nodes.forEach(sC),
                this.nodes.forEach(tC)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = p ? p.root || p : this,
            this.path = p ? [...p.path, p] : [],
            this.parent = p,
            this.depth = p ? p.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new BA)
        }
        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Fd),
            this.eventHandlers.get(d).add(p)
        }
        notifyListeners(d, ...p) {
            const h = this.eventHandlers.get(d);
            h && h.notify(...p)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d, p=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = kA(d),
            this.instance = d;
            const {layoutId: h, layout: m, visualElement: y} = this.options;
            if (y && !y.current && y.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            p && (m || h) && (this.isLayoutDirty = !0),
            n) {
                let b;
                const S = () => this.root.updateBlockedByResize = !1;
                n(d, () => {
                    this.root.updateBlockedByResize = !0,
                    b && b(),
                    b = NA(S, 250),
                    fo.hasAnimatedSinceResize && (fo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(wy))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && y && (h || m) && this.addEventListener("didUpdate", ({delta: b, hasLayoutChanged: S, hasRelativeLayoutChanged: T, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const j = this.options.transition || y.getDefaultTransition() || fC
                  , {onLayoutAnimationStart: U, onLayoutAnimationComplete: A} = y.getProps()
                  , k = !this.targetLayout || !Q1(this.targetLayout, w)
                  , V = !S && T;
                if (this.options.layoutRoot || this.resumeFrom || V || S && (k || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(b, V);
                    const F = {
                        ...Gd(j, "layout"),
                        onPlay: U,
                        onComplete: A
                    };
                    (y.shouldReduceMotion || this.options.layoutRoot) && (F.delay = 0,
                    F.type = !1),
                    this.startAnimation(F)
                } else
                    S || wy(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            pi(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(lC),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: d} = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && J1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const b = this.path[y];
                b.shouldResetTransform = !0,
                b.updateScroll("snapshot"),
                b.options.layoutRoot && b.willUpdate(!1)
            }
            const {layoutId: p, layout: h} = this.options;
            if (p === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Sy);
                return
            }
            this.isUpdating || this.nodes.forEach(iC),
            this.isUpdating = !1,
            this.nodes.forEach(aC),
            this.nodes.forEach(WA),
            this.nodes.forEach(IA),
            this.clearAllSnapshots();
            const p = pn.now();
            dt.delta = Pn(0, 1e3 / 60, p - dt.timestamp),
            dt.timestamp = p,
            dt.isProcessing = !0,
            uf.update.process(dt),
            uf.preRender.process(dt),
            uf.render.process(dt),
            dt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Od.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(nC),
            this.sharedNodes.forEach(oC)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ze.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ze.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !xt(this.snapshot.measuredBox.x) && !xt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Fe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: p} = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1),
            p) {
                const h = l(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: h,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!u)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , p = this.projectionDelta && !Z1(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , y = m !== this.prevTransformTemplateValue;
            d && (p || $i(this.latestValues) || y) && (u(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const p = this.measurePageBox();
            let h = this.removeElementScroll(p);
            return d && (h = this.removeTransform(h)),
            dC(h),
            {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var d;
            const {visualElement: p} = this.options;
            if (!p)
                return Fe();
            const h = p.measureViewportBox();
            if (!(((d = this.scroll) === null || d === void 0 ? void 0 : d.wasRoot) || this.path.some(hC))) {
                const {scroll: y} = this.root;
                y && (qa(h.x, y.offset.x),
                qa(h.y, y.offset.y))
            }
            return h
        }
        removeElementScroll(d) {
            var p;
            const h = Fe();
            if (Xt(h, d),
            !((p = this.scroll) === null || p === void 0) && p.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m]
                  , {scroll: b, options: S} = y;
                y !== this.root && b && S.layoutScroll && (b.wasRoot && Xt(h, d),
                qa(h.x, b.offset.x),
                qa(h.y, b.offset.y))
            }
            return h
        }
        applyTransform(d, p=!1) {
            const h = Fe();
            Xt(h, d);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !p && y.options.layoutScroll && y.scroll && y !== y.root && $a(h, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }),
                $i(y.latestValues) && $a(h, y.latestValues)
            }
            return $i(this.latestValues) && $a(h, this.latestValues),
            h
        }
        removeTransform(d) {
            const p = Fe();
            Xt(p, d);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !$i(m.latestValues))
                    continue;
                rd(m.latestValues) && m.updateSnapshot();
                const y = Fe()
                  , b = m.measurePageBox();
                Xt(y, b),
                my(p, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
            }
            return $i(this.latestValues) && my(p, this.latestValues),
            p
        }
        setTargetDelta(d) {
            this.targetDelta = d,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            var p;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(d || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((p = this.parent) === null || p === void 0) && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: b, layoutId: S} = this.options;
            if (!(!this.layout || !(b || S))) {
                if (this.resolvedRelativeTargetAt = dt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const T = this.getClosestProjectingParent();
                    T && T.layout && this.animationProgress !== 1 ? (this.relativeParent = T,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Fe(),
                    this.relativeTargetOrigin = Fe(),
                    ds(this.relativeTargetOrigin, this.layout.layoutBox, T.layout.layoutBox),
                    Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Fe(),
                this.targetWithTransforms = Fe()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                pA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xt(this.target, this.layout.layoutBox),
                G1(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const T = this.getClosestProjectingParent();
                    T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? (this.relativeParent = T,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Fe(),
                    this.relativeTargetOrigin = Fe(),
                    ds(this.relativeTargetOrigin, this.target, T.target),
                    Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || rd(this.parent.latestValues) || P1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var d;
            const p = this.getLead()
              , h = !!this.resumingFrom || this !== p;
            let m = !0;
            if ((this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === dt.timestamp && (m = !1),
            m)
                return;
            const {layout: y, layoutId: b} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(y || b))
                return;
            Xt(this.layoutCorrected, this.layout.layoutBox);
            const S = this.treeScale.x
              , T = this.treeScale.y;
            gA(this.layoutCorrected, this.treeScale, this.path, h),
            p.layout && !p.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (p.target = p.layout.layoutBox,
            p.targetWithTransforms = Fe());
            const {target: w} = p;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (fy(this.prevProjectionDelta.x, this.projectionDelta.x),
            fy(this.prevProjectionDelta.y, this.projectionDelta.y)),
            fs(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== S || this.treeScale.y !== T || !by(this.projectionDelta.x, this.prevProjectionDelta.x) || !by(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", w))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d=!0) {
            var p;
            if ((p = this.options.visualElement) === null || p === void 0 || p.scheduleRender(),
            d) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ya(),
            this.projectionDelta = Ya(),
            this.projectionDeltaWithTransform = Ya()
        }
        setAnimationOrigin(d, p=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , y = {
                ...this.latestValues
            }
              , b = Ya();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !p;
            const S = Fe()
              , T = h ? h.source : void 0
              , w = this.layout ? this.layout.source : void 0
              , j = T !== w
              , U = this.getStack()
              , A = !U || U.members.length <= 1
              , k = !!(j && !A && this.options.crossfade === !0 && !this.path.some(cC));
            this.animationProgress = 0;
            let V;
            this.mixTargetDelta = F => {
                const M = F / 1e3;
                Ty(b.x, d.x, M),
                Ty(b.y, d.y, M),
                this.setTargetDelta(b),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ds(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                uC(this.relativeTarget, this.relativeTargetOrigin, S, M),
                V && KA(this.relativeTarget, V) && (this.isProjectionDirty = !1),
                V || (V = Fe()),
                Xt(V, this.relativeTarget)),
                j && (this.animationValues = y,
                PA(y, m, this.latestValues, M, k, A)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = M
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (pi(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ze.update( () => {
                fo.hasAnimatedSinceResize = !0,
                this.currentAnimation = zA(0, xy, {
                    ...d,
                    onUpdate: p => {
                        this.mixTargetDelta(p),
                        d.onUpdate && d.onUpdate(p)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        d.onComplete && d.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xy),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: p, target: h, layout: m, latestValues: y} = d;
            if (!(!p || !h || !m)) {
                if (this !== d && this.layout && m && I1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Fe();
                    const b = xt(this.layout.layoutBox.x);
                    h.x.min = d.target.x.min,
                    h.x.max = h.x.min + b;
                    const S = xt(this.layout.layoutBox.y);
                    h.y.min = d.target.y.min,
                    h.y.max = h.y.min + S
                }
                Xt(p, h),
                $a(p, y),
                fs(this.projectionDeltaWithTransform, this.layoutCorrected, p, y)
            }
        }
        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new FA),
            this.sharedNodes.get(d).add(p);
            const m = p.options.initialPromotionConfig;
            p.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var d;
            const {layoutId: p} = this.options;
            return p ? ((d = this.getStack()) === null || d === void 0 ? void 0 : d.lead) || this : this
        }
        getPrevLead() {
            var d;
            const {layoutId: p} = this.options;
            return p ? (d = this.getStack()) === null || d === void 0 ? void 0 : d.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: p, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: d} = this.options;
            if (!d)
                return;
            let p = !1;
            const {latestValues: h} = d;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (p = !0),
            !p)
                return;
            const m = {};
            h.z && vf("z", d, m, this.animationValues);
            for (let y = 0; y < yf.length; y++)
                vf(`rotate${yf[y]}`, d, m, this.animationValues),
                vf(`skew${yf[y]}`, d, m, this.animationValues);
            d.render();
            for (const y in m)
                d.setStaticValue(y, m[y]),
                this.animationValues && (this.animationValues[y] = m[y]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            var p, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return QA;
            const m = {
                visibility: ""
            }
              , y = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = uo(d == null ? void 0 : d.pointerEvents) || "",
                m.transform = y ? y(this.latestValues, "") : "none",
                m;
            const b = this.getLead();
            if (!this.projectionDelta || !this.layout || !b.target) {
                const j = {};
                return this.options.layoutId && (j.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                j.pointerEvents = uo(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !$i(this.latestValues) && (j.transform = y ? y({}, "") : "none",
                this.hasProjected = !1),
                j
            }
            const S = b.animationValues || b.latestValues;
            this.applyTransformsToTarget(),
            m.transform = ZA(this.projectionDeltaWithTransform, this.treeScale, S),
            y && (m.transform = y(S, m.transform));
            const {x: T, y: w} = this.projectionDelta;
            m.transformOrigin = `${T.origin * 100}% ${w.origin * 100}% 0`,
            b.animationValues ? m.opacity = b === this ? (h = (p = S.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : S.opacityExit : m.opacity = b === this ? S.opacity !== void 0 ? S.opacity : "" : S.opacityExit !== void 0 ? S.opacityExit : 0;
            for (const j in vs) {
                if (S[j] === void 0)
                    continue;
                const {correct: U, applyTo: A, isCSSVariable: k} = vs[j]
                  , V = m.transform === "none" ? S[j] : U(S[j], b);
                if (A) {
                    const F = A.length;
                    for (let M = 0; M < F; M++)
                        m[A[M]] = V
                } else
                    k ? this.options.visualElement.renderState.vars[j] = V : m[j] = V
            }
            return this.options.layoutId && (m.pointerEvents = b === this ? uo(d == null ? void 0 : d.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var p;
                return (p = d.currentAnimation) === null || p === void 0 ? void 0 : p.stop()
            }
            ),
            this.root.nodes.forEach(Sy),
            this.root.sharedNodes.clear()
        }
    }
}
function WA(n) {
    n.updateLayout()
}
function IA(n) {
    var i;
    const s = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
        const {layoutBox: l, measuredBox: u} = n.layout
          , {animationType: f} = n.options
          , d = s.source !== n.layout.source;
        f === "size" ? Ft(b => {
            const S = d ? s.measuredBox[b] : s.layoutBox[b]
              , T = xt(S);
            S.min = l[b].min,
            S.max = S.min + T
        }
        ) : I1(f, s.layoutBox, l) && Ft(b => {
            const S = d ? s.measuredBox[b] : s.layoutBox[b]
              , T = xt(l[b]);
            S.max = S.min + T,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[b].max = n.relativeTarget[b].min + T)
        }
        );
        const p = Ya();
        fs(p, l, s.layoutBox);
        const h = Ya();
        d ? fs(h, n.applyTransform(u, !0), s.measuredBox) : fs(h, l, s.layoutBox);
        const m = !Z1(p);
        let y = !1;
        if (!n.resumeFrom) {
            const b = n.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const {snapshot: S, layout: T} = b;
                if (S && T) {
                    const w = Fe();
                    ds(w, s.layoutBox, S.layoutBox);
                    const j = Fe();
                    ds(j, l, T.layoutBox),
                    Q1(w, j) || (y = !0),
                    b.options.layoutRoot && (n.relativeTarget = j,
                    n.relativeTargetOrigin = w,
                    n.relativeParent = b)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: l,
            snapshot: s,
            delta: h,
            layoutDelta: p,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: y
        })
    } else if (n.isLead()) {
        const {onExitComplete: l} = n.options;
        l && l()
    }
    n.options.transition = void 0
}
function eC(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function tC(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function nC(n) {
    n.clearSnapshot()
}
function Sy(n) {
    n.clearMeasurements()
}
function iC(n) {
    n.isLayoutDirty = !1
}
function aC(n) {
    const {visualElement: i} = n.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function wy(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function rC(n) {
    n.resolveTargetDelta()
}
function sC(n) {
    n.calcProjection()
}
function lC(n) {
    n.resetSkewAndRotation()
}
function oC(n) {
    n.removeLeadSnapshot()
}
function Ty(n, i, s) {
    n.translate = He(i.translate, 0, s),
    n.scale = He(i.scale, 1, s),
    n.origin = i.origin,
    n.originPoint = i.originPoint
}
function Ey(n, i, s, l) {
    n.min = He(i.min, s.min, l),
    n.max = He(i.max, s.max, l)
}
function uC(n, i, s, l) {
    Ey(n.x, i.x, s.x, l),
    Ey(n.y, i.y, s.y, l)
}
function cC(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const fC = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ry = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Ay = Ry("applewebkit/") && !Ry("chrome/") ? Math.round : _t;
function Cy(n) {
    n.min = Ay(n.min),
    n.max = Ay(n.max)
}
function dC(n) {
    Cy(n.x),
    Cy(n.y)
}
function I1(n, i, s) {
    return n === "position" || n === "preserve-aspect" && !mA(vy(i), vy(s), .2)
}
function hC(n) {
    var i;
    return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot)
}
const mC = W1({
    attachResizeListener: (n, i) => Ts(n, "resize", i),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , bf = {
    current: void 0
}
  , eb = W1({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!bf.current) {
            const n = new mC({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            bf.current = n
        }
        return bf.current
    }
    ,
    resetTransform: (n, i) => {
        n.style.transform = i !== void 0 ? i : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , pC = {
    pan: {
        Feature: OA
    },
    drag: {
        Feature: DA,
        ProjectionNode: eb,
        MeasureLayout: X1
    }
};
function jy(n, i, s) {
    const {props: l} = n;
    n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const u = "onHover" + s
      , f = l[u];
    f && ze.postRender( () => f(i, Ds(i)))
}
class gC extends yi {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = mE(i, (s, l) => (jy(this.node, l, "Start"),
        u => jy(this.node, u, "End"))))
    }
    unmount() {}
}
class yC extends yi {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }
        !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ms(Ts(this.node.current, "focus", () => this.onFocus()), Ts(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function My(n, i, s) {
    const {props: l} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const u = "onTap" + (s === "End" ? "" : s)
      , f = l[u];
    f && ze.postRender( () => f(i, Ds(i)))
}
class vC extends yi {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = vE(i, (s, l) => (My(this.node, l, "Start"),
        (u, {success: f}) => My(this.node, u, f ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const od = new WeakMap
  , xf = new WeakMap
  , bC = n => {
    const i = od.get(n.target);
    i && i(n)
}
  , xC = n => {
    n.forEach(bC)
}
;
function SC({root: n, ...i}) {
    const s = n || document;
    xf.has(s) || xf.set(s, {});
    const l = xf.get(s)
      , u = JSON.stringify(i);
    return l[u] || (l[u] = new IntersectionObserver(xC,{
        root: n,
        ...i
    })),
    l[u]
}
function wC(n, i, s) {
    const l = SC(i);
    return od.set(n, s),
    l.observe(n),
    () => {
        od.delete(n),
        l.unobserve(n)
    }
}
const TC = {
    some: 0,
    all: 1
};
class EC extends yi {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: i={}} = this.node.getProps()
          , {root: s, margin: l, amount: u="some", once: f} = i
          , d = {
            root: s ? s.current : void 0,
            rootMargin: l,
            threshold: typeof u == "number" ? u : TC[u]
        }
          , p = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            f && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: y, onViewportLeave: b} = this.node.getProps()
              , S = m ? y : b;
            S && S(h)
        }
        ;
        return wC(this.node.current, d, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: i, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(RC(i, s)) && this.startObserver()
    }
    unmount() {}
}
function RC({viewport: n={}}, {viewport: i={}}={}) {
    return s => n[s] !== i[s]
}
const AC = {
    inView: {
        Feature: EC
    },
    tap: {
        Feature: vC
    },
    focus: {
        Feature: yC
    },
    hover: {
        Feature: gC
    }
}
  , CC = {
    layout: {
        ProjectionNode: eb,
        MeasureLayout: X1
    }
}
  , ud = {
    current: null
}
  , tb = {
    current: !1
};
function jC() {
    if (tb.current = !0,
    !!Ad)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , i = () => ud.current = n.matches;
            n.addListener(i),
            i()
        } else
            ud.current = !1
}
const MC = [...A1, gt, gi]
  , DC = n => MC.find(R1(n))
  , OC = new WeakMap;
function LC(n, i, s) {
    for (const l in i) {
        const u = i[l]
          , f = s[l];
        if (yt(u))
            n.addValue(l, u);
        else if (yt(f))
            n.addValue(l, Ss(u, {
                owner: n
            }));
        else if (f !== u)
            if (n.hasValue(l)) {
                const d = n.getValue(l);
                d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u)
            } else {
                const d = n.getStaticValue(l);
                n.addValue(l, Ss(d !== void 0 ? d : u, {
                    owner: n
                }))
            }
    }
    for (const l in s)
        i[l] === void 0 && n.removeValue(l);
    return i
}
const Dy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class _C {
    scrapeMotionValuesFromProps(i, s, l) {
        return {}
    }
    constructor({parent: i, props: s, presenceContext: l, reducedMotionConfig: u, blockInitialAnimation: f, visualState: d}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = eh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const T = pn.now();
            this.renderScheduledAt < T && (this.renderScheduledAt = T,
            ze.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m, onUpdate: y} = d;
        this.onUpdate = y,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = s.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = i,
        this.props = s,
        this.presenceContext = l,
        this.depth = i ? i.depth + 1 : 0,
        this.reducedMotionConfig = u,
        this.options = p,
        this.blockInitialAnimation = !!f,
        this.isControllingVariants = No(s),
        this.isVariantNode = zv(s),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(i && i.current);
        const {willChange: b, ...S} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const T in S) {
            const w = S[T];
            h[T] !== void 0 && yt(w) && w.set(h[T], !1)
        }
    }
    mount(i) {
        this.current = i,
        OC.set(i, this),
        this.projection && !this.projection.instance && this.projection.mount(i),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (s, l) => this.bindToMotionValue(l, s)),
        tb.current || jC(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ud.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        pi(this.notifyUpdate),
        pi(this.render),
        this.valueSubscriptions.forEach(i => i()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const i in this.events)
            this.events[i].clear();
        for (const i in this.features) {
            const s = this.features[i];
            s && (s.unmount(),
            s.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(i, s) {
        this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
        const l = Ii.has(i);
        l && this.onBindTransform && this.onBindTransform();
        const u = s.on("change", p => {
            this.latestValues[i] = p,
            this.props.onUpdate && ze.preRender(this.notifyUpdate),
            l && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , f = s.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, i, s)),
        this.valueSubscriptions.set(i, () => {
            u(),
            f(),
            d && d(),
            s.owner && s.stop()
        }
        )
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in Ja) {
            const s = Ja[i];
            if (!s)
                continue;
            const {isEnabled: l, Feature: u} = s;
            if (!this.features[i] && u && l(this.props) && (this.features[i] = new u(this)),
            this.features[i]) {
                const f = this.features[i];
                f.isMounted ? f.update() : (f.mount(),
                f.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Fe()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, s) {
        this.latestValues[i] = s
    }
    update(i, s) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = i,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = s;
        for (let l = 0; l < Dy.length; l++) {
            const u = Dy[l];
            this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](),
            delete this.propEventSubscriptions[u]);
            const f = "on" + u
              , d = i[f];
            d && (this.propEventSubscriptions[u] = this.on(u, d))
        }
        this.prevMotionValues = LC(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const s = this.getClosestVariantNode();
        if (s)
            return s.variantChildren && s.variantChildren.add(i),
            () => s.variantChildren.delete(i)
    }
    addValue(i, s) {
        const l = this.values.get(i);
        s !== l && (l && this.removeValue(i),
        this.bindToMotionValue(i, s),
        this.values.set(i, s),
        this.latestValues[i] = s.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const s = this.valueSubscriptions.get(i);
        s && (s(),
        this.valueSubscriptions.delete(i)),
        delete this.latestValues[i],
        this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, s) {
        if (this.props.values && this.props.values[i])
            return this.props.values[i];
        let l = this.values.get(i);
        return l === void 0 && s !== void 0 && (l = Ss(s === null ? void 0 : s, {
            owner: this
        }),
        this.addValue(i, l)),
        l
    }
    readValue(i, s) {
        var l;
        let u = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : (l = this.getBaseTargetFromProps(this.props, i)) !== null && l !== void 0 ? l : this.readValueFromInstance(this.current, i, this.options);
        return u != null && (typeof u == "string" && (T1(u) || m1(u)) ? u = parseFloat(u) : !DC(u) && gi.test(s) && (u = x1(i, s)),
        this.setBaseTarget(i, yt(u) ? u.get() : u)),
        yt(u) ? u.get() : u
    }
    setBaseTarget(i, s) {
        this.baseTarget[i] = s
    }
    getBaseTarget(i) {
        var s;
        const {initial: l} = this.props;
        let u;
        if (typeof l == "string" || typeof l == "object") {
            const d = Hd(this.props, l, (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom);
            d && (u = d[i])
        }
        if (l && u !== void 0)
            return u;
        const f = this.getBaseTargetFromProps(this.props, i);
        return f !== void 0 && !yt(f) ? f : this.initialValues[i] !== void 0 && u === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, s) {
        return this.events[i] || (this.events[i] = new Fd),
        this.events[i].add(s)
    }
    notify(i, ...s) {
        this.events[i] && this.events[i].notify(...s)
    }
}
class nb extends _C {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = C1
    }
    sortInstanceNodePosition(i, s) {
        return i.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, s) {
        return i.style ? i.style[s] : void 0
    }
    removeValueFromRenderState(i, {vars: s, style: l}) {
        delete s[i],
        delete l[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: i} = this.props;
        yt(i) && (this.childSubscription = i.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }
        ))
    }
}
function UC(n) {
    return window.getComputedStyle(n)
}
class zC extends nb {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Xv
    }
    readValueFromInstance(i, s) {
        if (Ii.has(s)) {
            const l = Id(s);
            return l && l.default || 0
        } else {
            const l = UC(i)
              , u = (Ld(s) ? l.getPropertyValue(s) : l[s]) || 0;
            return typeof u == "string" ? u.trim() : u
        }
    }
    measureInstanceViewportBox(i, {transformPagePoint: s}) {
        return Y1(i, s)
    }
    build(i, s, l) {
        zd(i, s, l.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, s, l) {
        return Pd(i, s, l)
    }
}
class kC extends nb {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Fe,
        this.updateDimensions = () => {
            this.current && !this.renderState.dimensions && $v(this.current, this.renderState)
        }
    }
    getBaseTargetFromProps(i, s) {
        return i[s]
    }
    readValueFromInstance(i, s) {
        if (Ii.has(s)) {
            const l = Id(s);
            return l && l.default || 0
        }
        return s = Kv.has(s) ? s : Dd(s),
        i.getAttribute(s)
    }
    scrapeMotionValuesFromProps(i, s, l) {
        return Zv(i, s, l)
    }
    onBindTransform() {
        this.current && !this.renderState.dimensions && ze.postRender(this.updateDimensions)
    }
    build(i, s, l) {
        Bd(i, s, this.isSVGTag, l.transformTemplate)
    }
    renderInstance(i, s, l, u) {
        Fv(i, s, l, u)
    }
    mount(i) {
        this.isSVGTag = Nd(i.tagName),
        super.mount(i)
    }
}
const VC = (n, i) => Vd(n) ? new kC(i) : new zC(i,{
    allowProjection: n !== C.Fragment
})
  , BC = lE({
    ...sA,
    ...AC,
    ...pC,
    ...CC
}, VC)
  , Ae = TT(BC)
  , NC = H.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
`
  , HC = H.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1000;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background: ${ ({theme: n, isOpen: i}) => i ? "transparent" : n.colors.primary};
    position: relative;
    transition: all 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background: ${ ({theme: n}) => n.colors.primary};
      transition: all 0.3s ease;
    }

    &::before {
      top: ${ ({isOpen: n}) => n ? "0" : "-8px"};
      transform: ${ ({isOpen: n}) => n ? "rotate(45deg)" : "none"};
    }

    &::after {
      bottom: ${ ({isOpen: n}) => n ? "0" : "-8px"};
      transform: ${ ({isOpen: n}) => n ? "rotate(-45deg)" : "none"};
    }
  }
`
  , PC = H(Ae.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  z-index: 99;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 2.5rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`
  , GC = H(Ae.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: rgba(17, 17, 17, 0.95);
  padding: 6rem 2rem;
  backdrop-filter: blur(10px);
`
  , YC = H(Ae.button)` // Changed from motion(Link) to motion.button
  display: block;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  font-size: 1.5rem;
  color: ${ ({theme: n}) => n.colors.light};
  text-decoration: none;
  padding: 1rem 0;
  transition: color 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;

  &:hover {
    color: ${ ({theme: n}) => n.colors.primary};
  }

  &:nth-last-of-type(2) {
    margin-bottom: 2rem;
  }
`
  , qC = () => {
    const [n,i] = C.useState(!1)
      , [s,l] = C.useState(!1);
    Gn();
    const u = jo()
      , f = [{
        title: "Home",
        to: "/"
    }, {
        title: "About",
        to: "/#about"
    }, {
        title: "Events",
        to: "/#events"
    }, {
        title: "Schedule",
        to: "/#schedule"
    }, {
        title: "Gallery",
        to: "/#gallery"
    }, {
        title: "Sponsors",
        to: "/#sponsors"
    }, {
        title: "Campus Ambassador",
        to: "/#ambassador"
    }, {
        title: "Faculty",
        to: "/#faculty"
    }, {
        title: "Team",
        to: "/#team"
    }, {
        title: "Contact",
        to: "/#contact"
    }];
    C.useEffect( () => {
        const y = () => {
            window.scrollY > 300 ? l(!0) : l(!1)
        }
        ;
        return window.addEventListener("scroll", y),
        () => {
            window.removeEventListener("scroll", y)
        }
    }
    , []);
    const d = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
      , p = {
        closed: {
            x: 300,
            transition: {
                type: "tween",
                duration: .3
            }
        },
        open: {
            x: 0,
            transition: {
                type: "tween",
                duration: .3
            }
        }
    }
      , h = {
        closed: {
            x: 50,
            opacity: 0
        },
        open: y => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: y * .1
            }
        })
    }
      , m = y => {
        if (i(!1),
        y === "/")
            u("/"),
            setTimeout( () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
            , 100);
        else if (y.startsWith("/#")) {
            const b = y.substring(2);
            u("/"),
            setTimeout( () => {
                const S = document.getElementById(b);
                S && S.scrollIntoView({
                    behavior: "smooth"
                })
            }
            , 100)
        }
    }
    ;
    return v.jsxs(v.Fragment, {
        children: [v.jsxs(NC, {
            children: [v.jsx(HC, {
                isOpen: n,
                onClick: () => i(!n),
                "aria-label": "Toggle Menu",
                children: v.jsx("span", {})
            }), v.jsx(Kf, {
                children: n && v.jsx(GC, {
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    variants: p,
                    children: f.map( (y, b) => v.jsx(YC, {
                        onClick: () => m(y.to),
                        variants: h,
                        custom: b,
                        whileHover: {
                            x: 20
                        },
                        children: y.title
                    }, y.title))
                })
            })]
        }), v.jsx(Kf, {
            children: s && v.jsx(PC, {
                onClick: d,
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 20
                },
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: .95
                },
                "aria-label": "Go to top",
                children: "^"
            })
        })]
    })
}
  , $C = "" + new URL("trans-CWw6zA7o.png",import.meta.url).href
  , XC = "" + new URL("logo-BJuAXmdg.png",import.meta.url).href
  , KC = H.section`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: relative;
  background-color: #1c1c1c;
  overflow-x: hidden;
  box-sizing: border-box;
`
  , FC = H.div`
  position: absolute;
  top: 2rem;
  left: 5%;
  z-index: 10;

  img {
    height: 50px;
    width: auto;
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }
`
  , ZC = H(Ae.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 900px;
  background: white;
  padding: 2rem;
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-bottom: 0;
    margin-top: 0;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 1rem;
    
    img {
      max-width: 100%;
    }
  }
`
  , QC = H(Ae.div)`
  width: 40px;
  height: 40px;
  margin: 1rem auto;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${ ({theme: n}) => n.colors.primary};
  }
`;
H(Ae.h2)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  margin-bottom: 1rem;
  text-align: center;
`;
H(Ae.div)`
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #ff0000, #ff4d4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
H.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(198, 230, 5, 0.1);
  border-radius: 10px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 90%;
  }
`;
H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 1.5rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
`;
H.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: ${ ({theme: n}) => n.colors.light};

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;
H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  padding: 0.8rem;
  background: rgba(198, 230, 5, 0.1);
  border-radius: 8px;

  @media (max-width: 480px) {
    min-width: 50px;
    padding: 0.5rem;
  }
`;
H.span`
  font-weight: bold;
  color: ${ ({theme: n}) => n.colors.primary};
`;
H.span`
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  color: ${ ({theme: n}) => n.colors.light};
`;
H.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 600px) {
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;
H(Ae.button)`
  padding: 1rem 2rem;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  text-decoration: none;
  border-radius: 30px;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  outline: none;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }

  ${ ({primary: n, theme: i}) => n ? `
    background: ${i.colors.primary};
    color: ${i.colors.dark};
    
    &:hover {
      background: ${i.colors.light};
    }
  ` : `
    border: 2px solid ${i.colors.primary};
    color: ${i.colors.primary};
    background: transparent;
    
    &:hover {
      background: ${i.colors.primary};
      color: ${i.colors.dark};
    }
  `}
`;
const JC = H(Ae.button)`
  position: fixed;
  bottom: 2rem;
  left: 5%;
  padding: 0.5rem 1.5rem;
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  border: none;
  border-radius: 5px;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease, opacity 0.3s ease;

  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  &:hover {
    background: ${ ({theme: n}) => n.colors.light};
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.2rem;
    font-size: clamp(0.8rem, 1.2vw, 1rem);
    bottom: 1.5rem;
    left: 3%;
  }
`
  , WC = H(Ae.div)`
  position: absolute;
  bottom: 1.5rem;
  right: 5%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
  , ib = H(Ae.a)`
  color: ${ ({theme: n}) => n.colors.primary};
  font-size: clamp(1.5rem, 2vw, 1.5rem);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${ ({theme: n}) => n.colors.light};
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 1.5vw, 1.2rem);
    bottom: 1.5rem;
    right: 3%;
  }
`
  , IC = H(Ae.span)`
  visibility: hidden;
  background-color: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 120%;
  right: 0;
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ib}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
  , e5 = H.a`
  font-size: clamp(1.4rem, 3vw, 2rem);
  text-align: center;
  margin: 2rem 0;
  color: ${ ({theme: n}) => n.colors.primary};
  text-decoration: none;
  padding: 1rem 2rem;
  border: 2px solid ${ ({theme: n}) => n.colors.primary};
  border-radius: 10px;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background: ${ ({theme: n}) => n.colors.primary};
    color: ${ ({theme: n}) => n.colors.dark};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    padding: 0.8rem 1.5rem;
  }
`
  , t5 = () => {
    Gn();
    const [n,i] = C.useState(!0)
      , s = C.useRef(null);
    C.useEffect( () => {
        const u = () => {
            if (s.current) {
                const f = s.current.getBoundingClientRect().bottom;
                i(f > 0)
            }
        }
        ;
        return window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
    }
    , []);
    const l = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }
    ;
    return v.jsxs(KC, {
        ref: s,
        children: [v.jsx(FC, {
            children: v.jsx("img", {
                src: $C,
                alt: "MIE ROBOlution"
            })
        }), v.jsx(ZC, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6
            },
            children: v.jsx("img", {
                src: XC,
                alt: "MIE ROBOlution"
            })
        }), v.jsx(QC, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .4,
                repeat: 1 / 0,
                repeatType: "reverse",
                repeatDelay: .2
            },
            children: v.jsx("svg", {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: v.jsx("path", {
                    d: "M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
                })
            })
        }), v.jsx(Ae.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .6,
                delay: .3
            },
            children: v.jsx(e5, {
                href: "https://carnival.mierobolution.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "We have another event ongoing, click here to know more details"
            })
        }), v.jsx(JC, {
            onClick: l,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: n ? 1 : 0
            },
            transition: {
                duration: .3
            },
            children: "Scroll for More"
        }), v.jsx(WC, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .6,
                delay: .6
            },
            children: v.jsxs(ib, {
                href: "mailto:mierobolution2025@gmail.com",
                children: [v.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    width: "40",
                    height: "40",
                    children: v.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                }), v.jsx(IC, {
                    children: "mierobolution2025@gmail.com"
                })]
            })
        })]
    })
}
  , n5 = "modulepreload"
  , i5 = function(n, i) {
    return new URL(n,i).href
}
  , Oy = {}
  , a5 = function(i, s, l) {
    let u = Promise.resolve();
    if (s && s.length > 0) {
        const d = document.getElementsByTagName("link")
          , p = document.querySelector("meta[property=csp-nonce]")
          , h = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
        u = Promise.allSettled(s.map(m => {
            if (m = i5(m, l),
            m in Oy)
                return;
            Oy[m] = !0;
            const y = m.endsWith(".css")
              , b = y ? '[rel="stylesheet"]' : "";
            if (!!l)
                for (let w = d.length - 1; w >= 0; w--) {
                    const j = d[w];
                    if (j.href === m && (!y || j.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${m}"]${b}`))
                return;
            const T = document.createElement("link");
            if (T.rel = y ? "stylesheet" : n5,
            y || (T.as = "script"),
            T.crossOrigin = "",
            T.href = m,
            h && T.setAttribute("nonce", h),
            document.head.appendChild(T),
            y)
                return new Promise( (w, j) => {
                    T.addEventListener("load", w),
                    T.addEventListener("error", () => j(new Error(`Unable to preload CSS for ${m}`)))
                }
                )
        }
        ))
    }
    function f(d) {
        const p = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (p.payload = d,
        window.dispatchEvent(p),
        !p.defaultPrevented)
            throw d
    }
    return u.then(d => {
        for (const p of d || [])
            p.status === "rejected" && f(p.reason);
        return i().catch(f)
    }
    )
}
  , r5 = "" + new URL("ffff-DLAZZjZ-.jpg",import.meta.url).href
  , Sf = "" + new URL("img-Co-rG-kx.jpg",import.meta.url).href;
var as = {}
  , Ro = function() {
    return Ro = Object.assign || function(n) {
        for (var i, s = 1, l = arguments.length; s < l; s++)
            for (var u in i = arguments[s])
                Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
        return n
    }
    ,
    Ro.apply(this, arguments)
}
  , s5 = function() {
    function n(i, s, l) {
        var u = this;
        this.endVal = s,
        this.options = l,
        this.version = "2.8.0",
        this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: "",
            enableScrollSpy: !1,
            scrollSpyDelay: 200,
            scrollSpyOnce: !1
        },
        this.finalEndVal = null,
        this.useEasing = !0,
        this.countDown = !1,
        this.error = "",
        this.startVal = 0,
        this.paused = !0,
        this.once = !1,
        this.count = function(f) {
            u.startTime || (u.startTime = f);
            var d = f - u.startTime;
            u.remaining = u.duration - d,
            u.useEasing ? u.countDown ? u.frameVal = u.startVal - u.easingFn(d, 0, u.startVal - u.endVal, u.duration) : u.frameVal = u.easingFn(d, u.startVal, u.endVal - u.startVal, u.duration) : u.frameVal = u.startVal + (u.endVal - u.startVal) * (d / u.duration);
            var p = u.countDown ? u.frameVal < u.endVal : u.frameVal > u.endVal;
            u.frameVal = p ? u.endVal : u.frameVal,
            u.frameVal = Number(u.frameVal.toFixed(u.options.decimalPlaces)),
            u.printValue(u.frameVal),
            d < u.duration ? u.rAF = requestAnimationFrame(u.count) : u.finalEndVal !== null ? u.update(u.finalEndVal) : u.options.onCompleteCallback && u.options.onCompleteCallback()
        }
        ,
        this.formatNumber = function(f) {
            var d, p, h, m, y = f < 0 ? "-" : "";
            d = Math.abs(f).toFixed(u.options.decimalPlaces);
            var b = (d += "").split(".");
            if (p = b[0],
            h = b.length > 1 ? u.options.decimal + b[1] : "",
            u.options.useGrouping) {
                m = "";
                for (var S = 3, T = 0, w = 0, j = p.length; w < j; ++w)
                    u.options.useIndianSeparators && w === 4 && (S = 2,
                    T = 1),
                    w !== 0 && T % S == 0 && (m = u.options.separator + m),
                    T++,
                    m = p[j - w - 1] + m;
                p = m
            }
            return u.options.numerals && u.options.numerals.length && (p = p.replace(/[0-9]/g, function(U) {
                return u.options.numerals[+U]
            }),
            h = h.replace(/[0-9]/g, function(U) {
                return u.options.numerals[+U]
            })),
            y + u.options.prefix + p + h + u.options.suffix
        }
        ,
        this.easeOutExpo = function(f, d, p, h) {
            return p * (1 - Math.pow(2, -10 * f / h)) * 1024 / 1023 + d
        }
        ,
        this.options = Ro(Ro({}, this.defaults), l),
        this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
        this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
        this.startVal = this.validateValue(this.options.startVal),
        this.frameVal = this.startVal,
        this.endVal = this.validateValue(s),
        this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
        this.resetDuration(),
        this.options.separator = String(this.options.separator),
        this.useEasing = this.options.useEasing,
        this.options.separator === "" && (this.options.useGrouping = !1),
        this.el = typeof i == "string" ? document.getElementById(i) : i,
        this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined",
        typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, i) : (window.onScrollFns = window.onScrollFns || [],
        window.onScrollFns.push(function() {
            return u.handleScroll(u)
        }),
        window.onscroll = function() {
            window.onScrollFns.forEach(function(f) {
                return f()
            })
        }
        ,
        this.handleScroll(this)))
    }
    return n.prototype.handleScroll = function(i) {
        if (i && window && !i.once) {
            var s = window.innerHeight + window.scrollY
              , l = i.el.getBoundingClientRect()
              , u = l.top + window.pageYOffset
              , f = l.top + l.height + window.pageYOffset;
            f < s && f > window.scrollY && i.paused ? (i.paused = !1,
            setTimeout(function() {
                return i.start()
            }, i.options.scrollSpyDelay),
            i.options.scrollSpyOnce && (i.once = !0)) : (window.scrollY > f || u > s) && !i.paused && i.reset()
        }
    }
    ,
    n.prototype.determineDirectionAndSmartEasing = function() {
        var i = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > i;
        var s = i - this.startVal;
        if (Math.abs(s) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = i;
            var l = this.countDown ? 1 : -1;
            this.endVal = i + l * this.options.smartEasingAmount,
            this.duration = this.duration / 2
        } else
            this.endVal = i,
            this.finalEndVal = null;
        this.finalEndVal !== null ? this.useEasing = !1 : this.useEasing = this.options.useEasing
    }
    ,
    n.prototype.start = function(i) {
        this.error || (this.options.onStartCallback && this.options.onStartCallback(),
        i && (this.options.onCompleteCallback = i),
        this.duration > 0 ? (this.determineDirectionAndSmartEasing(),
        this.paused = !1,
        this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
    }
    ,
    n.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null,
        this.duration = this.remaining,
        this.startVal = this.frameVal,
        this.determineDirectionAndSmartEasing(),
        this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
        this.paused = !this.paused
    }
    ,
    n.prototype.reset = function() {
        cancelAnimationFrame(this.rAF),
        this.paused = !0,
        this.resetDuration(),
        this.startVal = this.validateValue(this.options.startVal),
        this.frameVal = this.startVal,
        this.printValue(this.startVal)
    }
    ,
    n.prototype.update = function(i) {
        cancelAnimationFrame(this.rAF),
        this.startTime = null,
        this.endVal = this.validateValue(i),
        this.endVal !== this.frameVal && (this.startVal = this.frameVal,
        this.finalEndVal == null && this.resetDuration(),
        this.finalEndVal = null,
        this.determineDirectionAndSmartEasing(),
        this.rAF = requestAnimationFrame(this.count))
    }
    ,
    n.prototype.printValue = function(i) {
        var s;
        if (this.el) {
            var l = this.formattingFn(i);
            !((s = this.options.plugin) === null || s === void 0) && s.render ? this.options.plugin.render(this.el, l) : this.el.tagName === "INPUT" ? this.el.value = l : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = l : this.el.innerHTML = l
        }
    }
    ,
    n.prototype.ensureNumber = function(i) {
        return typeof i == "number" && !isNaN(i)
    }
    ,
    n.prototype.validateValue = function(i) {
        var s = Number(i);
        return this.ensureNumber(s) ? s : (this.error = "[CountUp] invalid start or end value: ".concat(i),
        null)
    }
    ,
    n.prototype.resetDuration = function() {
        this.startTime = null,
        this.duration = 1e3 * Number(this.options.duration),
        this.remaining = this.duration
    }
    ,
    n
}();
const l5 = Object.freeze(Object.defineProperty({
    __proto__: null,
    CountUp: s5
}, Symbol.toStringTag, {
    value: "Module"
}))
  , o5 = MS(l5);
var Ly;
function u5() {
    if (Ly)
        return as;
    Ly = 1,
    Object.defineProperty(as, "__esModule", {
        value: !0
    });
    var n = Ao()
      , i = o5;
    function s(P, _) {
        var G = P == null ? null : typeof Symbol < "u" && P[Symbol.iterator] || P["@@iterator"];
        if (G != null) {
            var W, he, Te, ke, Ce = [], Z = !0, I = !1;
            try {
                if (Te = (G = G.call(P)).next,
                _ !== 0)
                    for (; !(Z = (W = Te.call(G)).done) && (Ce.push(W.value),
                    Ce.length !== _); Z = !0)
                        ;
            } catch (ee) {
                I = !0,
                he = ee
            } finally {
                try {
                    if (!Z && G.return != null && (ke = G.return(),
                    Object(ke) !== ke))
                        return
                } finally {
                    if (I)
                        throw he
                }
            }
            return Ce
        }
    }
    function l(P, _) {
        var G = Object.keys(P);
        if (Object.getOwnPropertySymbols) {
            var W = Object.getOwnPropertySymbols(P);
            _ && (W = W.filter(function(he) {
                return Object.getOwnPropertyDescriptor(P, he).enumerable
            })),
            G.push.apply(G, W)
        }
        return G
    }
    function u(P) {
        for (var _ = 1; _ < arguments.length; _++) {
            var G = arguments[_] != null ? arguments[_] : {};
            _ % 2 ? l(Object(G), !0).forEach(function(W) {
                p(P, W, G[W])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(G)) : l(Object(G)).forEach(function(W) {
                Object.defineProperty(P, W, Object.getOwnPropertyDescriptor(G, W))
            })
        }
        return P
    }
    function f(P, _) {
        if (typeof P != "object" || !P)
            return P;
        var G = P[Symbol.toPrimitive];
        if (G !== void 0) {
            var W = G.call(P, _);
            if (typeof W != "object")
                return W;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (_ === "string" ? String : Number)(P)
    }
    function d(P) {
        var _ = f(P, "string");
        return typeof _ == "symbol" ? _ : String(_)
    }
    function p(P, _, G) {
        return _ = d(_),
        _ in P ? Object.defineProperty(P, _, {
            value: G,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : P[_] = G,
        P
    }
    function h() {
        return h = Object.assign ? Object.assign.bind() : function(P) {
            for (var _ = 1; _ < arguments.length; _++) {
                var G = arguments[_];
                for (var W in G)
                    Object.prototype.hasOwnProperty.call(G, W) && (P[W] = G[W])
            }
            return P
        }
        ,
        h.apply(this, arguments)
    }
    function m(P, _) {
        if (P == null)
            return {};
        var G = {}, W = Object.keys(P), he, Te;
        for (Te = 0; Te < W.length; Te++)
            he = W[Te],
            !(_.indexOf(he) >= 0) && (G[he] = P[he]);
        return G
    }
    function y(P, _) {
        if (P == null)
            return {};
        var G = m(P, _), W, he;
        if (Object.getOwnPropertySymbols) {
            var Te = Object.getOwnPropertySymbols(P);
            for (he = 0; he < Te.length; he++)
                W = Te[he],
                !(_.indexOf(W) >= 0) && Object.prototype.propertyIsEnumerable.call(P, W) && (G[W] = P[W])
        }
        return G
    }
    function b(P, _) {
        return S(P) || s(P, _) || T(P, _) || j()
    }
    function S(P) {
        if (Array.isArray(P))
            return P
    }
    function T(P, _) {
        if (P) {
            if (typeof P == "string")
                return w(P, _);
            var G = Object.prototype.toString.call(P).slice(8, -1);
            if (G === "Object" && P.constructor && (G = P.constructor.name),
            G === "Map" || G === "Set")
                return Array.from(P);
            if (G === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))
                return w(P, _)
        }
    }
    function w(P, _) {
        (_ == null || _ > P.length) && (_ = P.length);
        for (var G = 0, W = new Array(_); G < _; G++)
            W[G] = P[G];
        return W
    }
    function j() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var U = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? n.useLayoutEffect : n.useEffect;
    function A(P) {
        var _ = n.useRef(P);
        return U(function() {
            _.current = P
        }),
        n.useCallback(function() {
            for (var G = arguments.length, W = new Array(G), he = 0; he < G; he++)
                W[he] = arguments[he];
            return _.current.apply(void 0, W)
        }, [])
    }
    var k = function(_, G) {
        var W = G.decimal
          , he = G.decimals
          , Te = G.duration
          , ke = G.easingFn
          , Ce = G.end
          , Z = G.formattingFn
          , I = G.numerals
          , ee = G.prefix
          , ue = G.separator
          , R = G.start
          , X = G.suffix
          , te = G.useEasing
          , ne = G.useGrouping
          , J = G.useIndianSeparators
          , ce = G.enableScrollSpy
          , re = G.scrollSpyDelay
          , Oe = G.scrollSpyOnce
          , fe = G.plugin;
        return new i.CountUp(_,Ce,{
            startVal: R,
            duration: Te,
            decimal: W,
            decimalPlaces: he,
            easingFn: ke,
            formattingFn: Z,
            numerals: I,
            separator: ue,
            prefix: ee,
            suffix: X,
            plugin: fe,
            useEasing: te,
            useIndianSeparators: J,
            useGrouping: ne,
            enableScrollSpy: ce,
            scrollSpyDelay: re,
            scrollSpyOnce: Oe
        })
    }
      , V = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"]
      , F = {
        decimal: ".",
        separator: ",",
        delay: null,
        prefix: "",
        suffix: "",
        duration: 2,
        start: 0,
        decimals: 0,
        startOnMount: !0,
        enableReinitialize: !0,
        useEasing: !0,
        useGrouping: !0,
        useIndianSeparators: !1
    }
      , M = function(_) {
        var G = Object.fromEntries(Object.entries(_).filter(function(Ie) {
            var sn = b(Ie, 2)
              , vn = sn[1];
            return vn !== void 0
        }))
          , W = n.useMemo(function() {
            return u(u({}, F), G)
        }, [_])
          , he = W.ref
          , Te = W.startOnMount
          , ke = W.enableReinitialize
          , Ce = W.delay
          , Z = W.onEnd
          , I = W.onStart
          , ee = W.onPauseResume
          , ue = W.onReset
          , R = W.onUpdate
          , X = y(W, V)
          , te = n.useRef()
          , ne = n.useRef()
          , J = n.useRef(!1)
          , ce = A(function() {
            return k(typeof he == "string" ? he : he.current, X)
        })
          , re = A(function(Ie) {
            var sn = te.current;
            if (sn && !Ie)
                return sn;
            var vn = ce();
            return te.current = vn,
            vn
        })
          , Oe = A(function() {
            var Ie = function() {
                return re(!0).start(function() {
                    Z == null || Z({
                        pauseResume: fe,
                        reset: ye,
                        start: Xe,
                        update: Se
                    })
                })
            };
            Ce && Ce > 0 ? ne.current = setTimeout(Ie, Ce * 1e3) : Ie(),
            I == null || I({
                pauseResume: fe,
                reset: ye,
                update: Se
            })
        })
          , fe = A(function() {
            re().pauseResume(),
            ee == null || ee({
                reset: ye,
                start: Xe,
                update: Se
            })
        })
          , ye = A(function() {
            re().el && (ne.current && clearTimeout(ne.current),
            re().reset(),
            ue == null || ue({
                pauseResume: fe,
                start: Xe,
                update: Se
            }))
        })
          , Se = A(function(Ie) {
            re().update(Ie),
            R == null || R({
                pauseResume: fe,
                reset: ye,
                start: Xe
            })
        })
          , Xe = A(function() {
            ye(),
            Oe()
        })
          , nt = A(function(Ie) {
            Te && (Ie && ye(),
            Oe())
        });
        return n.useEffect(function() {
            J.current ? ke && nt(!0) : (J.current = !0,
            nt())
        }, [ke, J, nt, Ce, _.start, _.suffix, _.prefix, _.duration, _.separator, _.decimals, _.decimal, _.formattingFn]),
        n.useEffect(function() {
            return function() {
                ye()
            }
        }, [ye]),
        {
            start: Xe,
            pauseResume: fe,
            reset: ye,
            update: Se,
            getCountUp: re
        }
    }
      , N = ["className", "redraw", "containerProps", "children", "style"]
      , Q = function(_) {
        var G = _.className
          , W = _.redraw
          , he = _.containerProps
          , Te = _.children
          , ke = _.style
          , Ce = y(_, N)
          , Z = n.useRef(null)
          , I = n.useRef(!1)
          , ee = M(u(u({}, Ce), {}, {
            ref: Z,
            startOnMount: typeof Te != "function" || _.delay === 0,
            enableReinitialize: !1
        }))
          , ue = ee.start
          , R = ee.reset
          , X = ee.update
          , te = ee.pauseResume
          , ne = ee.getCountUp
          , J = A(function() {
            ue()
        })
          , ce = A(function(fe) {
            _.preserveValue || R(),
            X(fe)
        })
          , re = A(function() {
            if (typeof _.children == "function" && !(Z.current instanceof Element)) {
                console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
                return
            }
            ne()
        });
        n.useEffect(function() {
            re()
        }, [re]),
        n.useEffect(function() {
            I.current && ce(_.end)
        }, [_.end, ce]);
        var Oe = W && _;
        return n.useEffect(function() {
            W && I.current && J()
        }, [J, W, Oe]),
        n.useEffect(function() {
            !W && I.current && J()
        }, [J, W, _.start, _.suffix, _.prefix, _.duration, _.separator, _.decimals, _.decimal, _.className, _.formattingFn]),
        n.useEffect(function() {
            I.current = !0
        }, []),
        typeof Te == "function" ? Te({
            countUpRef: Z,
            start: ue,
            reset: R,
            update: X,
            pauseResume: te,
            getCountUp: ne
        }) : n.createElement("span", h({
            className: G,
            ref: Z,
            style: ke
        }, he), typeof _.start < "u" ? ne().formattingFn(_.start) : "")
    };
    return as.default = Q,
    as.useCountUp = M,
    as
}
var c5 = u5();
const _y = fd(c5);
var cd = new Map
  , Ql = new WeakMap
  , Uy = 0
  , f5 = void 0;
function d5(n) {
    return n ? (Ql.has(n) || (Uy += 1,
    Ql.set(n, Uy.toString())),
    Ql.get(n)) : "0"
}
function h5(n) {
    return Object.keys(n).sort().filter(i => n[i] !== void 0).map(i => `${i}_${i === "root" ? d5(n.root) : n[i]}`).toString()
}
function m5(n) {
    const i = h5(n);
    let s = cd.get(i);
    if (!s) {
        const l = new Map;
        let u;
        const f = new IntersectionObserver(d => {
            d.forEach(p => {
                var h;
                const m = p.isIntersecting && u.some(y => p.intersectionRatio >= y);
                n.trackVisibility && typeof p.isVisible > "u" && (p.isVisible = m),
                (h = l.get(p.target)) == null || h.forEach(y => {
                    y(m, p)
                }
                )
            }
            )
        }
        ,n);
        u = f.thresholds || (Array.isArray(n.threshold) ? n.threshold : [n.threshold || 0]),
        s = {
            id: i,
            observer: f,
            elements: l
        },
        cd.set(i, s)
    }
    return s
}
function p5(n, i, s={}, l=f5) {
    if (typeof window.IntersectionObserver > "u" && l !== void 0) {
        const h = n.getBoundingClientRect();
        return i(l, {
            isIntersecting: l,
            target: n,
            intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
            time: 0,
            boundingClientRect: h,
            intersectionRect: h,
            rootBounds: h
        }),
        () => {}
    }
    const {id: u, observer: f, elements: d} = m5(s)
      , p = d.get(n) || [];
    return d.has(n) || d.set(n, p),
    p.push(i),
    f.observe(n),
    function() {
        p.splice(p.indexOf(i), 1),
        p.length === 0 && (d.delete(n),
        f.unobserve(n)),
        d.size === 0 && (f.disconnect(),
        cd.delete(u))
    }
}
function wf({threshold: n, delay: i, trackVisibility: s, rootMargin: l, root: u, triggerOnce: f, skip: d, initialInView: p, fallbackInView: h, onChange: m}={}) {
    var y;
    const [b,S] = C.useState(null)
      , T = C.useRef(m)
      , [w,j] = C.useState({
        inView: !!p,
        entry: void 0
    });
    T.current = m,
    C.useEffect( () => {
        if (d || !b)
            return;
        let V;
        return V = p5(b, (F, M) => {
            j({
                inView: F,
                entry: M
            }),
            T.current && T.current(F, M),
            M.isIntersecting && f && V && (V(),
            V = void 0)
        }
        , {
            root: u,
            rootMargin: l,
            threshold: n,
            trackVisibility: s,
            delay: i
        }, h),
        () => {
            V && V()
        }
    }
    , [Array.isArray(n) ? n.toString() : n, b, u, l, f, d, s, h, i]);
    const U = (y = w.entry) == null ? void 0 : y.target
      , A = C.useRef(void 0);
    !b && U && !f && !d && A.current !== U && (A.current = U,
    j({
        inView: !!p,
        entry: void 0
    }));
    const k = [S, w.inView, w.entry];
    return k.ref = k[0],
    k.inView = k[1],
    k.entry = k[2],
    k
}
const g5 = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , y5 = H.section`
  padding: 3rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , v5 = H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`
  , b5 = H(Ae.div)`
  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
    max-height: 720px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`
  , zy = H(Ae.div)`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    max-height: 720px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`
  , x5 = H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
  , S5 = H.div`
  h2 {
    color: ${ ({theme: n}) => n.colors.primary};
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    text-align: justify;

    @media (max-width: 768px) {
      padding: 0 5px;
      text-align: left;
    }

    @media screen and (width: 412px) {
      padding: 0 10px;
    }
  }
`
  , w5 = H.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`
  , ky = H(Ae.div)`
  text-align: center;

  .number {
    font-size: 3rem;
    color: ${ ({theme: n}) => n.colors.primary};
    font-family: ${ ({theme: n}) => n.fonts.heading};
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    margin-top: 0;
  }
`
  , T5 = H.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }

  @media screen and (width: 412px) {
    padding: 0 10px;
  }
`
  , Vy = H(Ae.a)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.2rem;
  border: 2px solid ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.primary};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: ${ ({theme: n}) => n.colors.primary};
    color: ${ ({theme: n}) => n.colors.dark};
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
  , E5 = () => {
    const [n,i] = wf({
        triggerOnce: !0,
        threshold: .5
    })
      , [s,l] = wf({
        triggerOnce: !0,
        threshold: .5
    })
      , [u,f] = wf({
        triggerOnce: !0,
        threshold: .3
    })
      , [d,p] = C.useState(null);
    return C.useEffect( () => {
        f && a5( () => import("./video-C-u9lBty.js"), [], import.meta.url).then(h => {
            p(h.default)
        }
        )
    }
    , [f]),
    v.jsxs(v.Fragment, {
        children: [v.jsx(g5, {
            id: "about",
            children: v.jsxs(x5, {
                children: [v.jsxs(S5, {
                    children: [v.jsx("h2", {
                        children: "About CUET MIE & MIE ROBOlution1.0"
                    }), v.jsx("p", {
                        children: "The MIE Department at CUET, established in 2015, addresses the growing demand for automation and industrial innovation in Bangladesh. Integrating mechanical, electronics, and control systems, it prepares 30 students annually for careers in precision engineering, automation, and industrial research. With a strong curriculum and advanced labs, MIE aims to be a hub for innovation and industry-driven research, producing globally competitive engineers."
                    }), v.jsx("p", {
                        children: "MIE ROBOlution 1.0 is a first-of-its-kind robotics and automation festival hosted by CUET MIE. It is designed to bring together the brightest minds, challenging them in robotics competitions. The event aims to bridge academia and industry, inspiring the next generation of engineers to take on global technological challenges."
                    }), v.jsxs("p", {
                        children: ["With a grand prize pool of ", v.jsx("b", {
                            children: "330,000 BDT"
                        }), ", this competition is set to be a groundbreaking event in Bangladesh's robotics and automation landscape."]
                    }), v.jsxs(T5, {
                        children: [v.jsx(Vy, {
                            href: "https://www.facebook.com/events/9420448124644824",
                            target: "_blank",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            children: "EVENT ON FACEBOOK"
                        }), v.jsx(Vy, {
                            href: "https://www.cuet.ac.bd/dept/mie",
                            target: "_blank",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            children: "MORE ON DEPARTMENT"
                        })]
                    }), v.jsxs(w5, {
                        children: [v.jsxs(ky, {
                            ref: n,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            children: [v.jsx("div", {
                                className: "number",
                                children: i ? v.jsx(_y, {
                                    start: 0,
                                    end: 1500,
                                    duration: 2.5,
                                    suffix: "+",
                                    separator: ","
                                }) : "0"
                            }), v.jsx("p", {
                                children: "Participants"
                            })]
                        }), v.jsxs(ky, {
                            ref: s,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .1
                            },
                            children: [v.jsx("div", {
                                className: "number",
                                children: l ? v.jsx(_y, {
                                    start: 0,
                                    end: 10,
                                    duration: 2.5,
                                    suffix: "+"
                                }) : "0"
                            }), v.jsx("p", {
                                children: "Events"
                            })]
                        })]
                    })]
                }), v.jsx(zy, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: v.jsx("img", {
                        src: r5,
                        alt: "MIE ROBOlution"
                    })
                })]
            })
        }), v.jsx(y5, {
            children: v.jsxs(v5, {
                children: [v.jsx(b5, {
                    ref: u,
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: d ? v.jsxs("video", {
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        controls: !0,
                        poster: Sf,
                        children: [v.jsx("source", {
                            src: d,
                            type: "video/mp4"
                        }), "Your browser does not support the video tag."]
                    }) : v.jsx("img", {
                        src: Sf,
                        alt: "Video Placeholder",
                        style: {
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px"
                        }
                    })
                }), v.jsx(zy, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: v.jsx("img", {
                        src: Sf,
                        alt: "MIE ROBOlution Event"
                    })
                })]
            })
        })]
    })
}
  , R5 = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , A5 = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`
  , ab = H(Ae.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(198, 230, 5, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: ${ ({theme: n}) => n.colors.primary};
  }
`
  , C5 = H.div`
  width: 100%;
  padding-top: 36.36%; /* Updated aspect ratio for 400x1100 */
  position: relative;
  overflow: hidden;
`
  , j5 = H.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ab}:hover & {
    transform: scale(1.05);
  }
`
  , M5 = H.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
  , D5 = H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`
  , O5 = H.div`
  flex-grow: 1;
`
  , L5 = H.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`
  , _5 = H(yd)`
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  transition: all 0.3s ease;
  text-align: center;
  font-size: 0.9rem;
  
  @media (max-width: 400px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }
  
  ${ ({primary: n, theme: i}) => n ? `
    background: ${i.colors.primary};
    color: ${i.colors.dark};
  ` : `
    border: 1px solid ${i.colors.primary};
    color: ${i.colors.primary};
  `}
`
  , U5 = H.div`
  margin-top: 1rem;
  background: rgba(198, 230, 5, 0.1); // Light background based on primary color
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-align: center;
  color: ${ ({theme: n}) => n.colors.primary};
  font-weight: bold;
`
  , By = {
    "technical-seminar": new URL("" + new URL("4-CcNFIzSH.png",import.meta.url).href,import.meta.url).href,
    "line-following-robot": new URL("" + new URL("lfr-BMoaqyOB.png",import.meta.url).href,import.meta.url).href,
    "robo-soccer": new URL("" + new URL("3-k7nyvP6o.png",import.meta.url).href,import.meta.url).href,
    "project-presentation": new URL("" + new URL("project-DWJwNNMV.png",import.meta.url).href,import.meta.url).href,
    "cad-contest": new URL("" + new URL("2-sX5P-z45.png",import.meta.url).href,import.meta.url).href,
    techathon: new URL("" + new URL("techathon-CTvj1xC4.png",import.meta.url).href,import.meta.url).href,
    "logo-design-contest": new URL("" + new URL("logo-DzwsmYg4.png",import.meta.url).href,import.meta.url).href,
    "poster-presentation": new URL("" + new URL("poster-B8VhAcqk.png",import.meta.url).href,import.meta.url).href,
    "gaming-efootball": new URL("" + new URL("pes4-CHW08sH3.png",import.meta.url).href,import.meta.url).href,
    "gaming-fifa": new URL("" + new URL("fifa-Bns4k4We.png",import.meta.url).href,import.meta.url).href,
    "chess-competition": new URL("" + new URL("chess1-Dw1OlN1i.png",import.meta.url).href,import.meta.url).href
}
  , z5 = [{
    id: "technical-seminar",
    title: "Technical Seminar",
    description: "Industry experts share insights and knowledge [ No registration required ]",
    detailsLink: "https://www.facebook.com/events/9420448124644824",
    fullDescription: "Join our technical seminar where industry experts will share valuable insights and knowledge on the latest technological trends and innovations. Attendance is open to all with no registration required.",
    date: "March 15, 2025",
    time: "10:00 AM - 1:00 PM",
    venue: "Main Auditorium",
    speakers: ["Dr. John Smith", "Prof. Maria Rodriguez"]
}, {
    id: "techathon",
    title: "Techathon",
    description: "Solve real-world challenges",
    registerLink: "https://forms.gle/BBJu3hKrCN8JjWkm9",
    rulebookLink: "#",
    fullDescription: "A 24-hour hackathon where teams develop solutions to real-world problems provided by industry partners. Food and refreshments will be provided.",
    date: "March 20-21, 2025",
    time: "10:00 AM - 10:00 AM (next day)",
    venue: "Innovation Hub",
    prizes: ["1st Place: $1000", "2nd Place: $700", "3rd Place: $400"],
    prizeMoney: "100,000Tk"
}, {
    id: "robo-soccer",
    title: "Robo Soccer",
    description: "Unleash your robot agility",
    registerLink: "https://forms.gle/yxBbx14ppuBPAKyTA",
    rulebookLink: "#",
    fullDescription: "Build a soccer-playing robot and compete in our tournament. Your robot must be able to detect the ball, navigate the field, and score goals against opponent robots.",
    date: "March 17, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Sports Complex",
    prizes: ["1st Place: $600", "2nd Place: $350", "3rd Place: $200"],
    prizeMoney: "70,000Tk"
}, {
    id: "line-following-robot",
    title: "Line Following Robot",
    description: "Test your robot precision and speed",
    registerLink: "https://forms.gle/PsA17ZVVu6hhZxyMA",
    rulebookLink: "#",
    fullDescription: "Design a robot that can autonomously follow a line track with precision and speed. The competition will test your engineering skills in building sensors and implementing control algorithms.",
    date: "March 16, 2025",
    time: "9:00 AM - 4:00 PM",
    venue: "Robotics Lab",
    prizes: ["1st Place: $500", "2nd Place: $300", "3rd Place: $150"],
    prizeMoney: "50,000Tk"
}, {
    id: "project-presentation",
    title: "Project Presentation",
    description: "Showcase your groundbreaking ideas",
    registerLink: "https://forms.gle/QCdVDivvf7EkaU8c6",
    rulebookLink: "#",
    fullDescription: "Present your innovative projects to a panel of judges from academia and industry. This is a great opportunity to receive feedback and potentially find sponsors for your ideas.",
    date: "March 18, 2025",
    time: "11:00 AM - 3:00 PM",
    venue: "Conference Hall",
    judgingCriteria: ["Innovation", "Technical Feasibility", "Presentation Quality", "Potential Impact"],
    prizeMoney: "45,000Tk"
}, {
    id: "cad-contest",
    title: "CAD Contest",
    description: "Test your design skills",
    registerLink: "https://forms.gle/zh5UohCdRy66Xyq97",
    rulebookLink: "#",
    fullDescription: "Demonstrate your Computer-Aided Design expertise by creating 3D models based on given specifications within a limited time frame.",
    date: "March 19, 2025",
    time: "9:00 AM - 12:00 PM",
    venue: "Design Studio",
    software: ["AutoCAD", "SolidWorks", "Fusion 360"],
    prizeMoney: "27,000Tk"
}, {
    id: "gaming-fifa",
    title: "Gaming Contest - FIFA",
    description: "Compete in exciting games [ Only for CUETian ]",
    registerLink: "https://forms.gle/Y2KMNzBFHd5xSwCo7",
    rulebookLink: "#",
    fullDescription: "Challenge your fellow CUET students in a FIFA tournament. Players will compete in a knockout format to crown the campus champion.",
    date: "March 24, 2025",
    time: "3:00 PM - 7:00 PM",
    venue: "Gaming Arena",
    prizes: ["Winner: Trophy + Certificates", "Runner-up: Certificates"],
    prizeMoney: "6,000Tk"
}, {
    id: "chess-competition",
    title: "Chess Competition",
    description: "Strategic battles of minds [ Only for CUETian ]",
    registerLink: "https://forms.gle/NKwbKdrKd2t2CJC69",
    rulebookLink: "#",
    fullDescription: "Test your strategic thinking in our chess tournament. The competition will follow standard chess rules with time controls appropriate for all skill levels.",
    date: "March 25, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Student Center",
    format: "Swiss-system tournament with 5 rounds",
    prizeMoney: "6,000Tk"
}, {
    id: "gaming-efootball",
    title: "Gaming Contest - efootball",
    description: "Compete in exciting games [ Only for CUETian ]",
    registerLink: "https://forms.gle/Y2KMNzBFHd5xSwCo7",
    rulebookLink: "#",
    fullDescription: "Show off your gaming skills in this efootball tournament exclusively for CUET students. Teams of 4 will compete in multiple rounds to determine the ultimate champions.",
    date: "March 23, 2025",
    time: "2:00 PM - 8:00 PM",
    venue: "Gaming Arena",
    prizes: ["Winner: Trophy + Certificates", "Runner-up: Certificates"],
    prizeMoney: "4,000Tk"
}]
  , k5 = () => {
    const n = jo()
      , i = (s, l) => {
        n(`/events/${l}`)
    }
    ;
    return v.jsxs(R5, {
        id: "events",
        children: [v.jsx("h2", {
            children: "What's in store?"
        }), v.jsx(A5, {
            children: z5.map( (s, l) => v.jsxs(ab, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: l * .1
                },
                onClick: u => i(u, s.id),
                children: [v.jsx(C5, {
                    children: v.jsx(j5, {
                        src: By[s.id] || By["technical-seminar"],
                        alt: `${s.title} event`
                    })
                }), v.jsxs(M5, {
                    children: [v.jsx(D5, {
                        children: s.title
                    }), v.jsx(O5, {
                        children: v.jsx("p", {
                            children: s.description
                        })
                    }), s.prizeMoney && v.jsxs(U5, {
                        children: ["Prize Money: ", s.prizeMoney]
                    }), v.jsx(L5, {
                        children: v.jsx(_5, {
                            to: `/events/${s.id}`,
                            primary: !0,
                            onClick: u => u.stopPropagation(),
                            children: "Learn More"
                        })
                    })]
                })]
            }, l))
        })]
    })
}
  , V5 = "" + new URL("cuet-DuKpPzxH.jpg",import.meta.url).href
  , B5 = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , N5 = H.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
  , H5 = H(Ae.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(198, 230, 5, 0.1);

  h3 {
    color: ${ ({theme: n}) => n.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    
    @media (min-width: 769px) {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
  }
  
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  time {
    color: ${ ({theme: n}) => n.colors.primary};
    font-family: monospace;
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
    
    @media (min-width: 769px) {
      font-size: 1rem;
    }
  }

  span {
    font-family: monospace;
    display: block;
    font-size: 1.1rem;
    
    @media (min-width: 769px) {
      font-size: 1rem;
    }
  }
`
  , P5 = H.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    border-radius: 15px;
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    
    @media (min-width: 769px) {
      font-size: 1.3rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    
    @media (min-width: 769px) {
      font-size: 1rem;
    }
  }
`
  , G5 = () => {
    const n = {
        day1: {
            date: "May 8 - Tursday",
            events: [{
                time: "08:00 - 08:30 am",
                event: "T-shirt Distribution"
            }, {
                time: "08:30 - 09:00 am",
                event: "Inauguration by Cutting Cake"
            }, {
                time: "09:00 - 10:00 am",
                event: "Rally"
            }, {
                time: "10:00 am - 2:00 pm",
                event: "Industrial 4.0 Seminar"
            }, {
                time: "2:00 pm - 5:00 pm",
                event: "FIFA Gaming Event"
            }]
        },
        day2: {
            date: "May 9 - Friday",
            events: [{
                time: "08:00 am - 5:00 pm",
                event: "Line Following Robot"
            }, {
                time: "08:00 am - 5:00 pm",
                event: "Soccer Bot"
            }, {
                time: "09:00 am - 5:00 pm",
                event: "Techathon"
            }, {
                time: "01:00 - 02:00 pm",
                event: "Prayer & Lunch Break"
            }]
        },
        day3: {
            date: "May 10 - Saturday",
            events: [{
                time: "08:00 am - 5:00 pm",
                event: "Project Presentation"
            }, {
                time: "09:00 am - 1:00 pm",
                event: "CAD Contest"
            }, {
                time: "01:00 - 02:00 pm",
                event: "Prayer & Lunch Break"
            }, {
                time: "05:00 pm - 10:00 pm",
                event: "Prize Giving Ceremony and Cultural Event"
            }, {
                time: "05:00 - 05:30 pm",
                event: "Chess Competition"
            }]
        }
    };
    return v.jsxs(B5, {
        id: "schedule",
        children: [v.jsx("h2", {
            children: "Event Schedule"
        }), v.jsx(N5, {
            children: Object.entries(n).map( ([i,s], l) => v.jsxs(H5, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: l * .1
                },
                children: [v.jsx("h3", {
                    children: s.date
                }), v.jsx("ul", {
                    children: s.events.map( (u, f) => v.jsxs("li", {
                        children: [v.jsx("time", {
                            children: u.time
                        }), v.jsx("span", {
                            children: u.event
                        })]
                    }, f))
                })]
            }, i))
        }), v.jsxs(P5, {
            children: [v.jsx("img", {
                src: V5,
                alt: "MIE ROBOlution"
            }), v.jsxs("div", {
                children: [v.jsx("h3", {
                    children: "Venue"
                }), v.jsx("p", {
                    children: "CUET Premises"
                }), v.jsx("p", {
                    children: "The spot will be given by confirmation mail."
                }), v.jsx("p", {
                    children: "Stay tuned with us."
                })]
            })]
        })]
    })
}
  , Y5 = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , q5 = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`
  , $5 = H(Ae.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`
  , X5 = H(Ae.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  
  img {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
  }
`
  , K5 = H.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${ ({theme: n}) => n.colors.light};
  font-size: 2rem;
  cursor: pointer;
`
  , F5 = [new URL("" + new URL("e1-CDEj1c_e.jpg",import.meta.url).href,import.meta.url).href, new URL("" + new URL("e2-CZ9prWTm.jpg",import.meta.url).href,import.meta.url).href, new URL("" + new URL("e3-B7V9-sMT.jpg",import.meta.url).href,import.meta.url).href, new URL("" + new URL("imgg-N-0B0vwi.jpg",import.meta.url).href,import.meta.url).href, new URL("/src/assets/images/mie.jpg",import.meta.url).href, new URL("" + new URL("s5-CvayFNvj.jpg",import.meta.url).href,import.meta.url).href, new URL("" + new URL("img-D1P1yj6a.png",import.meta.url).href,import.meta.url).href, new URL("" + new URL("CUETAI-DMd82CD9.jpg",import.meta.url).href,import.meta.url).href, new URL("" + new URL("CUETAI2-BUh5Dcnv.jpg",import.meta.url).href,import.meta.url).href, new URL("" + new URL("CUETAI3-xKWmqJRb.jpg",import.meta.url).href,import.meta.url).href]
  , Z5 = () => {
    const [n,i] = C.useState(null);
    return v.jsxs(Y5, {
        id: "gallery",
        children: [v.jsx("h2", {
            children: "Gallery"
        }), v.jsx(q5, {
            children: F5.map( (s, l) => v.jsx($5, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: l * .1
                },
                onClick: () => i(s),
                children: v.jsx("img", {
                    src: s,
                    alt: `Gallery Image ${l + 1}`
                })
            }, l))
        }), v.jsx(Kf, {
            children: n && v.jsxs(X5, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: () => i(null),
                children: [v.jsx("img", {
                    src: n,
                    alt: "Selected Gallery Image"
                }), v.jsx(K5, {
                    onClick: () => i(null),
                    children: "×"
                })]
            })
        })]
    })
}
  , Q5 = "" + new URL("1-Bywru9aQ.png",import.meta.url).href
  , J5 = "" + new URL("10-BMy5LyEI.png",import.meta.url).href
  , W5 = "" + new URL("11-B23ogUP3.png",import.meta.url).href
  , I5 = "" + new URL("12-D-Y6ppHj.png",import.meta.url).href
  , ej = "" + new URL("13-DxNGjVKM.png",import.meta.url).href
  , tj = "" + new URL("14-DE3jQqqa.png",import.meta.url).href
  , nj = "" + new URL("15-EDvcEyS-.png",import.meta.url).href
  , ij = "" + new URL("16-CSD7mpgh.png",import.meta.url).href
  , aj = "" + new URL("17-CAlwP9Dc.png",import.meta.url).href
  , rj = "" + new URL("18-BVYejmP0.png",import.meta.url).href
  , sj = "" + new URL("19-BZH-hYRG.png",import.meta.url).href
  , lj = "" + new URL("2-BPP_BX1g.png",import.meta.url).href
  , oj = "" + new URL("20-8bIRdLdh.png",import.meta.url).href
  , uj = "" + new URL("21-D9FkdjUD.png",import.meta.url).href
  , cj = "" + new URL("22-o0ubwrtJ.png",import.meta.url).href
  , fj = "" + new URL("23-DtaRgazB.png",import.meta.url).href
  , dj = "" + new URL("24-BpxidJLF.png",import.meta.url).href
  , hj = "" + new URL("25-CPzrmBbb.png",import.meta.url).href
  , mj = "" + new URL("26-Xdg5Z4ED.png",import.meta.url).href
  , pj = "" + new URL("27-CykHeKCG.png",import.meta.url).href
  , gj = "" + new URL("28-9mDbJilW.png",import.meta.url).href
  , yj = "" + new URL("3-bXsooB4B.png",import.meta.url).href
  , vj = "" + new URL("4-F0jYLwbF.png",import.meta.url).href
  , bj = "" + new URL("5-xPy-UC26.png",import.meta.url).href
  , xj = "" + new URL("6-DSUMxKIJ.png",import.meta.url).href
  , Sj = "" + new URL("7-DLrkhjXi.png",import.meta.url).href
  , wj = "" + new URL("8-CtNCUrd1.png",import.meta.url).href
  , Tj = "" + new URL("9-BE-nY62M.png",import.meta.url).href
  , Ot = {
    socialPartner1: new URL("" + new URL("blink-CH64d7HQ.jpg",import.meta.url).href,import.meta.url).href,
    socialPartner2: new URL("" + new URL("info-BxjynS4Z.jpg",import.meta.url).href,import.meta.url).href,
    socialPartner3: new URL("" + new URL("castor-qNYfBE1x.jpg",import.meta.url).href,import.meta.url).href,
    clubPartner1: new URL("" + new URL("rma-CPN_4ZSE.jpg",import.meta.url).href,import.meta.url).href,
    clubPartner2: new URL("" + new URL("sports-hC2Pdfv0.jpg",import.meta.url).href,import.meta.url).href,
    clubPartner3: new URL("" + new URL("chessc-BOabRXg_.png",import.meta.url).href,import.meta.url).href,
    clubPartner4: new URL("" + new URL("cads-C8xofpI7.jpg",import.meta.url).href,import.meta.url).href,
    clubPartner5: new URL("" + new URL("daffodil-DZH7xYYv.jpg",import.meta.url).href,import.meta.url).href,
    titleSponsor: new URL("" + new URL("cs-bYWXhijK.jpg",import.meta.url).href,import.meta.url).href,
    coSponsor: new URL("" + new URL("iconic-DVFqeCUx.jpg",import.meta.url).href,import.meta.url).href,
    goldSponsor1: new URL("" + new URL("ygen-7C3F1Hdp.jpg",import.meta.url).href,import.meta.url).href,
    goldSponsor2: new URL("" + new URL("sincos-D0lydvx6.jpg",import.meta.url).href,import.meta.url).href,
    goldSponsor3: new URL("" + new URL("particles-DztLUZqd.jpg",import.meta.url).href,import.meta.url).href
}
  , Ej = Array.from({
    length: 31
}, (n, i) => i < 5 ? null : new URL(Object.assign({
    "/src/assets/images/clubs/1.png": Q5,
    "/src/assets/images/clubs/10.png": J5,
    "/src/assets/images/clubs/11.png": W5,
    "/src/assets/images/clubs/12.png": I5,
    "/src/assets/images/clubs/13.png": ej,
    "/src/assets/images/clubs/14.png": tj,
    "/src/assets/images/clubs/15.png": nj,
    "/src/assets/images/clubs/16.png": ij,
    "/src/assets/images/clubs/17.png": aj,
    "/src/assets/images/clubs/18.png": rj,
    "/src/assets/images/clubs/19.png": sj,
    "/src/assets/images/clubs/2.png": lj,
    "/src/assets/images/clubs/20.png": oj,
    "/src/assets/images/clubs/21.png": uj,
    "/src/assets/images/clubs/22.png": cj,
    "/src/assets/images/clubs/23.png": fj,
    "/src/assets/images/clubs/24.png": dj,
    "/src/assets/images/clubs/25.png": hj,
    "/src/assets/images/clubs/26.png": mj,
    "/src/assets/images/clubs/27.png": pj,
    "/src/assets/images/clubs/28.png": gj,
    "/src/assets/images/clubs/3.png": yj,
    "/src/assets/images/clubs/4.png": vj,
    "/src/assets/images/clubs/5.png": bj,
    "/src/assets/images/clubs/6.png": xj,
    "/src/assets/images/clubs/7.png": Sj,
    "/src/assets/images/clubs/8.png": wj,
    "/src/assets/images/clubs/9.png": Tj
})[`/src/assets/images/clubs/${i + 1}.png`],import.meta.url).href).filter(Boolean)
  , Rj = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , Aj = H.div`
  margin-top: 3rem;
`
  , Va = H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`
  , Tf = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`
  , Ef = H(Ae.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(198, 230, 5, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;

  h4 {
    color: ${ ({theme: n}) => n.colors.light};
    margin: 0;
  }

  p {
    color: ${ ({theme: n}) => n.colors.primary};
    margin-top: 0.5rem;
    font-style: italic;
  }

  img {
    width: 100%;
    max-height: 120px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
`
  , Rf = H.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
  margin-bottom: 4rem;
`
  , Af = H(Ae.div)`
  display: flex;
  align-items: center;
`
  , Jl = H(Ae.a)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(198, 230, 5, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 200px;
  margin: 0 1rem;
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  img {
    width: ${ ({isRectangular: n}) => n ? "100%" : "80px"};
    height: ${ ({isRectangular: n}) => n ? "80%" : "80px"};
    object-fit: contain;
    margin-bottom: ${ ({isRectangular: n}) => n ? "0.5rem" : "1rem"};
    border-radius: ${ ({isRectangular: n}) => n ? "10px" : "50%"};
  }

  h4 {
    color: ${ ({theme: n}) => n.colors.light};
    margin: 0;
    font-size: 1.2rem; /* Increased font size for better visibility */
  }

  p {
    color: ${ ({theme: n}) => n.colors.primary};
    margin-top: 0.5rem;
    font-style: italic;
    font-size: 0.9rem;
  }
`
  , rb = H.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${ ({theme: n}) => n.colors.light};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
  , Cf = H(rb)`
  left: 10px; /* Moved inside the carousel container */
`
  , jf = H(rb)`
  right: 10px; /* Moved inside the carousel container */
`
  , Mf = H.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
`
  , Df = H.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${ ({active: n, theme: i}) => n ? i.colors.primary : "rgba(198, 230, 5, 0.3)"};
  margin: 0 5px;
  border: none;
  cursor: pointer;
`
  , Cj = H.button`
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  transition: all 0.3s ease;

  &:hover {
    background: ${ ({theme: n}) => n.colors.light};
    transform: translateY(-2px);
  }
`
  , jj = H(Ae.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
  , Mj = H.div`
  background: ${ ({theme: n}) => n.colors.dark};
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`
  , Dj = H.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${ ({theme: n}) => n.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
`
  , Oj = H.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr)); /* Default: 1 column for mobile */
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr)); /* 3 columns for laptop */
  }
`
  , Lj = H.div`
  text-align: center;
  margin-top: 4rem;

  p {
    margin-bottom: 2rem;
  }
`
  , _j = H.a`
  padding: 1rem 2rem;
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  text-decoration: none;
  border-radius: 30px;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  transition: all 0.3s ease;

  &:hover {
    background: ${ ({theme: n}) => n.colors.light};
    transform: translateY(-2px);
  }
`
  , Uj = () => {
    const [n,i] = C.useState(0)
      , [s,l] = C.useState(0)
      , [u,f] = C.useState(0)
      , [d,p] = C.useState(!1)
      , h = {
        title: [{
            name: "CS LAB",
            image: Ot.titleSponsor
        }],
        co: [{
            name: "Iconic",
            image: Ot.coSponsor
        }],
        gold: [{
            name: "Ygen",
            image: Ot.goldSponsor1
        }, {
            name: "Sincos",
            image: Ot.goldSponsor2
        }, {
            name: "Particles Bangladesh",
            image: Ot.goldSponsor3
        }]
    }
      , m = {
        socialMedia: [{
            name: "blinkworthy",
            image: Ot.socialPartner1,
            url: "https://www.facebook.com/profile.php?id=61557549233031"
        }, {
            name: "Infogram",
            image: Ot.socialPartner2,
            url: "https://www.facebook.com/infogrambd"
        }, {
            name: "Castor",
            image: Ot.socialPartner3,
            url: "https://www.facebook.com/info.thecastor"
        }],
        segment: [{
            name: "RMA",
            image: Ot.clubPartner1,
            url: "https://www.facebook.com/rmabd"
        }, {
            name: "CUET Sports Club",
            image: Ot.clubPartner2,
            url: "https://www.facebook.com/sccuet"
        }, {
            name: "CUET Chess Club",
            image: Ot.clubPartner3,
            url: "https://www.facebook.com/cuetchessclub"
        }, {
            name: "CUET CAD Society",
            image: Ot.clubPartner4,
            url: "https://www.facebook.com/cadsocietycuet"
        }],
        club: [{
            name: "Daffodil Robotics Club",
            image: Ot.clubPartner5,
            url: ""
        }, ...Array.from({
            length: 23
        }, (M, N) => ({
            name: "",
            image: Ej[N],
            url: ""
        }))]
    }
      , y = 232
      , b = [...m.socialMedia, ...m.socialMedia]
      , S = [...m.segment, ...m.segment]
      , T = [...m.club, ...m.club];
    C.useEffect( () => {
        const M = setInterval( () => {
            i(N => {
                const Q = N + 1;
                return Q === m.socialMedia.length && setTimeout( () => i(0), 500),
                Q % b.length
            }
            )
        }
        , 3e3);
        return () => clearInterval(M)
    }
    , [m.socialMedia.length]),
    C.useEffect( () => {
        const M = setInterval( () => {
            l(N => {
                const Q = N + 1;
                return Q === m.segment.length && setTimeout( () => l(0), 500),
                Q % S.length
            }
            )
        }
        , 3e3);
        return () => clearInterval(M)
    }
    , [m.segment.length]),
    C.useEffect( () => {
        const M = setInterval( () => {
            f(N => {
                const Q = N + 1;
                return Q === m.club.length && setTimeout( () => f(0), 500),
                Q % T.length
            }
            )
        }
        , 3e3);
        return () => clearInterval(M)
    }
    , [m.club.length]);
    const w = () => {
        i(M => {
            const N = M - 1;
            return N < 0 ? m.socialMedia.length - 1 : N
        }
        )
    }
      , j = () => {
        i(M => (M + 1) % m.socialMedia.length)
    }
      , U = () => {
        l(M => {
            const N = M - 1;
            return N < 0 ? m.segment.length - 1 : N
        }
        )
    }
      , A = () => {
        l(M => (M + 1) % m.segment.length)
    }
      , k = () => {
        f(M => {
            const N = M - 1;
            return N < 0 ? m.club.length - 1 : N
        }
        )
    }
      , V = () => {
        f(M => (M + 1) % m.club.length)
    }
      , F = M => {
        M.target === M.currentTarget && p(!1)
    }
    ;
    return v.jsxs(Rj, {
        id: "sponsors",
        children: [v.jsx("h2", {
            children: "Our Sponsors & Partners"
        }), v.jsxs(Aj, {
            children: [v.jsxs("div", {
                children: [v.jsx(Va, {
                    children: "TITLE SPONSOR"
                }), v.jsx(Tf, {
                    children: h.title.map( (M, N) => v.jsxs(Ef, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: N * .1
                        },
                        children: [v.jsx("img", {
                            src: M.image,
                            alt: M.name
                        }), v.jsx("h4", {
                            children: M.name
                        })]
                    }, N))
                })]
            }), v.jsxs("div", {
                children: [v.jsx(Va, {
                    children: "CO-SPONSOR"
                }), v.jsx(Tf, {
                    children: h.co.map( (M, N) => v.jsxs(Ef, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: N * .1
                        },
                        children: [v.jsx("img", {
                            src: M.image,
                            alt: M.name
                        }), v.jsx("h4", {
                            children: M.name
                        })]
                    }, N))
                })]
            }), v.jsxs("div", {
                children: [v.jsx(Va, {
                    children: "GOLD SPONSORS"
                }), v.jsx(Tf, {
                    children: h.gold.map( (M, N) => v.jsxs(Ef, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: N * .1
                        },
                        children: [v.jsx("img", {
                            src: M.image,
                            alt: M.name
                        }), v.jsx("h4", {
                            children: M.name
                        })]
                    }, N))
                })]
            }), v.jsxs("div", {
                children: [v.jsx(Va, {
                    children: "SOCIAL MEDIA PARTNERS"
                }), v.jsxs(Rf, {
                    children: [v.jsx(Cf, {
                        onClick: w,
                        children: "<"
                    }), v.jsx(Af, {
                        animate: {
                            x: -n * y
                        },
                        transition: n === 0 ? {
                            duration: 0
                        } : {
                            duration: .5,
                            ease: "easeInOut"
                        },
                        children: b.map( (M, N) => v.jsxs(Jl, {
                            href: M.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [v.jsx("img", {
                                src: M.image,
                                alt: M.name
                            }), v.jsx("h4", {
                                children: M.name
                            })]
                        }, `${M.name}-${N}`))
                    }), v.jsx(jf, {
                        onClick: j,
                        children: ">"
                    })]
                }), v.jsx(Mf, {
                    children: m.socialMedia.map( (M, N) => v.jsx(Df, {
                        active: N === n % m.socialMedia.length,
                        onClick: () => i(N)
                    }, N))
                })]
            }), v.jsxs("div", {
                children: [v.jsx(Va, {
                    children: "SEGMENT PARTNERS"
                }), v.jsxs(Rf, {
                    children: [v.jsx(Cf, {
                        onClick: U,
                        children: "<"
                    }), v.jsx(Af, {
                        animate: {
                            x: -s * y
                        },
                        transition: s === 0 ? {
                            duration: 0
                        } : {
                            duration: .5,
                            ease: "easeInOut"
                        },
                        children: S.map( (M, N) => v.jsxs(Jl, {
                            href: M.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [v.jsx("img", {
                                src: M.image,
                                alt: M.name
                            }), v.jsx("h4", {
                                children: M.name
                            })]
                        }, `${M.name}-${N}`))
                    }), v.jsx(jf, {
                        onClick: A,
                        children: ">"
                    })]
                }), v.jsx(Mf, {
                    children: m.segment.map( (M, N) => v.jsx(Df, {
                        active: N === s % m.segment.length,
                        onClick: () => l(N)
                    }, N))
                })]
            }), v.jsxs("div", {
                children: [v.jsx(Va, {
                    children: "CLUB PARTNERS"
                }), v.jsxs(Rf, {
                    children: [v.jsx(Cf, {
                        onClick: k,
                        children: "<"
                    }), v.jsx(Af, {
                        animate: {
                            x: -u * y
                        },
                        transition: u === 0 ? {
                            duration: 0
                        } : {
                            duration: .5,
                            ease: "easeInOut"
                        },
                        children: T.map( (M, N) => v.jsxs(Jl, {
                            href: M.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            isRectangular: N >= 1,
                            children: [v.jsx("img", {
                                src: M.image,
                                alt: M.name
                            }), N === 0 && v.jsx("h4", {
                                children: M.name
                            }), " "]
                        }, `${M.name}-${N}`))
                    }), v.jsx(jf, {
                        onClick: V,
                        children: ">"
                    })]
                }), v.jsx(Mf, {
                    children: m.club.map( (M, N) => v.jsx(Df, {
                        active: N === u % m.club.length,
                        onClick: () => f(N)
                    }, N))
                }), v.jsx(Cj, {
                    onClick: () => p(!0),
                    children: "View All Club Partners"
                })]
            })]
        }), d && v.jsx(jj, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: F,
            children: v.jsxs(Mj, {
                children: [v.jsx(Dj, {
                    onClick: () => p(!1),
                    children: "×"
                }), v.jsx("h2", {
                    style: {
                        color: "white",
                        textAlign: "center"
                    },
                    children: "All Club Partners"
                }), v.jsx(Oj, {
                    children: m.club.map( (M, N) => v.jsxs(Jl, {
                        href: M.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        isRectangular: N >= 1,
                        children: [v.jsx("img", {
                            src: M.image,
                            alt: M.name
                        }), N === 0 && v.jsx("h4", {
                            children: M.name
                        })]
                    }, `${M.name}-${N}`))
                })]
            })
        }), v.jsxs(Lj, {
            children: [v.jsx("p", {
                children: "Become a partner!"
            }), v.jsx(_j, {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSfUoYsqYmTfhPKLihK2IbawdL0tz5oc6Ek0RLYVfp5wgr8AtA/viewform?usp=header",
                target: "_blank",
                children: "Become a Sponsor or Partner"
            })]
        })]
    })
}
  , zj = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , kj = H.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`
  , Vj = H.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`
  , Wl = H(Ae.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(198, 230, 5, 0.1);

  h3 {
    color: ${ ({theme: n}) => n.colors.primary};
    margin-bottom: 1rem;
  }
`
  , Bj = H(Ae.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  text-decoration: none;
  border-radius: 30px;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  margin-top: 2rem;
  
  &:hover {
    background: ${ ({theme: n}) => n.colors.light};
  }
`
  , Nj = () => v.jsx(zj, {
    id: "ambassador",
    children: v.jsxs(kj, {
        children: [v.jsx("h2", {
            children: "Become a Campus Ambassador"
        }), v.jsx("p", {
            children: "Join our team as a campus ambassador and be part of something extraordinary!"
        }), v.jsxs(Vj, {
            children: [v.jsxs(Wl, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: [v.jsx("h3", {
                    children: "Recognition"
                }), v.jsx("p", {
                    children: "Receive an official certificate and a personalized letter of recommendation, enhancing your professional credibility."
                })]
            }), v.jsxs(Wl, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .1
                },
                children: [v.jsx("h3", {
                    children: "Networking"
                }), v.jsx("p", {
                    children: "Gain access to top industry experts, potential mentors, and a thriving community of passionate innovators."
                })]
            }), v.jsxs(Wl, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .2
                },
                children: [v.jsx("h3", {
                    children: "Exclusive Benefits"
                }), v.jsx("p", {
                    children: "Enjoy priority access to industry events, hands-on workshops, and early-bird perks for tech conferences."
                })]
            }), v.jsxs(Wl, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .3
                },
                children: [v.jsx("h3", {
                    children: "Rewards"
                }), v.jsx("p", {
                    children: "Receive exclusive merchandise, event passes, and special discounts on tech gear and software tools."
                })]
            })]
        }), v.jsx(Bj, {
            href: "https://forms.gle/3MacqsT8R5jRbsCS8",
            target: "_blank",
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: .95
            },
            children: "Register as Ambassador"
        })]
    })
})
  , Hj = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , Pj = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // Reduced from 250px to 200px
  gap: 1.5rem; // Reduced from 2rem to 1.5rem
  margin-top: 3rem;
`
  , Gj = H(Ae.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(198, 230, 5, 0.1);
  border-radius: 8px; // Reduced from 10px to 8px
  overflow: hidden;
  // Added max-width for better control on mobile
  max-width: 100%;
`
  , Yj = H.div`
  width: 100%;
  height: 220px; // Reduced from 300px to 220px
  background: #222;
  background-image: url(${n => n.src});
  background-size: cover;
  background-position: center;
`
  , qj = H.div`
  padding: 1rem; // Reduced from 1.5rem to 1rem
`
  , $j = H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 0.3rem; // Reduced from 0.5rem to 0.3rem
  font-size: 1.1rem; // Added smaller font size
`
  , Xj = H.p`
  font-size: 0.8rem; // Reduced from 0.9rem to 0.8rem
  opacity: 0.8;
  margin-bottom: 0.8rem; // Reduced from 1rem to 0.8rem
`
  , Kj = H.div`
  display: flex;
  gap: 0.8rem; // Reduced from 1rem to 0.8rem
  font-size: 0.8rem;
  
  a {
    color: ${ ({theme: n}) => n.colors.light};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${ ({theme: n}) => n.colors.primary};
    }
  }
`
  , tn = {
    ashiqur: new URL("" + new URL("ashiqur-BLx7V7vW.jpg",import.meta.url).href,import.meta.url).href,
    nakib: new URL("" + new URL("nakib-DtukEMWN.jpg",import.meta.url).href,import.meta.url).href,
    anik: new URL("" + new URL("anik-BIpqfJW3.jpeg",import.meta.url).href,import.meta.url).href,
    marzan: new URL("" + new URL("marzan-DzzfsiU0.jpg",import.meta.url).href,import.meta.url).href,
    sadek: new URL("" + new URL("sadek-OV1jlOHR.jpg",import.meta.url).href,import.meta.url).href,
    rakib: new URL("" + new URL("rakib-Bki2phKY.jpg",import.meta.url).href,import.meta.url).href,
    jubair: new URL("" + new URL("jubair-BgFuzqIC.jpg",import.meta.url).href,import.meta.url).href,
    alif: new URL("" + new URL("alif-CWzaSpHK.jpg",import.meta.url).href,import.meta.url).href,
    mehedi: new URL("" + new URL("mehedi-DhPwyhde.jpg",import.meta.url).href,import.meta.url).href,
    shihab: new URL("" + new URL("shihab-DLjwYKUU.jpg",import.meta.url).href,import.meta.url).href,
    redwan: new URL("" + new URL("redwan-DLiYjDSv.jpg",import.meta.url).href,import.meta.url).href,
    sajid: new URL("" + new URL("sajid-Bv_RXyIx.jpg",import.meta.url).href,import.meta.url).href,
    tanmoy: new URL("" + new URL("tanmoy-M0S_dxN0.jpg",import.meta.url).href,import.meta.url).href,
    shahriar: new URL("" + new URL("shahriar-B_Xd8sVs.jpg",import.meta.url).href,import.meta.url).href
}
  , Fj = [{
    name: "Nakib A. Raj",
    role: "Lead Organizer",
    email: "u1909020@student.cuet.ac.bd",
    phone: "+8801670558956",
    image: tn.nakib
}, {
    name: "Ashiqur Rahman",
    role: "Competition Lead",
    email: "u1909004@student.cuet.ac.bd",
    phone: "+8801511001009",
    image: tn.ashiqur
}, {
    name: "Redwan Rifat",
    role: "Competition Lead",
    email: "u1909018@student.cuet.ac.bd",
    phone: "+8801511001009",
    image: tn.redwan
}, {
    name: "Mehedi Hasan Obhi",
    role: "Logistics & Operations Lead",
    email: "u1909030@student.cuet.ac.bd",
    phone: "+8801630230712",
    image: tn.mehedi
}, {
    name: "Sadek Bin Islam",
    role: "Logistics & Operations Lead",
    email: "u1909013@student.cuet.ac.bd",
    phone: "+8801884974197",
    image: tn.sadek
}, {
    name: "Anik Saha",
    role: "Logistics & Operations Lead",
    email: "u1909001@student.cuet.ac.bd",
    phone: "+8801531822327",
    image: tn.anik
}, {
    name: "Alif Haider",
    role: "Marketing & Sponsorship Lead",
    email: "u1909022@student.cuet.ac.bd",
    phone: "+8801835488814",
    image: tn.alif
}, {
    name: "Ibn Zubair",
    role: "Sports Lead",
    email: "u1909016@student.cuet.ac.bd",
    phone: "+8801571786064",
    image: tn.jubair
}, {
    name: "Al Marzan Sadid",
    role: "Sports Lead",
    email: "u1909009@student.cuet.ac.bd",
    phone: "8801571786064",
    image: tn.marzan
}, {
    name: "SK Rakib Hasan",
    role: "Design Lead",
    email: "u1909002@student.cuet.ac.bd",
    phone: "+8801310678710",
    image: tn.rakib
}, {
    name: "Shihab Uddin",
    role: "Finance Lead",
    email: "u1909029@student.cuet.ac.bd",
    phone: "+8801857087582",
    image: tn.shihab
}]
  , Zj = () => v.jsxs(Hj, {
    id: "team",
    children: [v.jsx("h2", {
        children: "Our Team"
    }), v.jsx(Pj, {
        children: Fj.map( (n, i) => v.jsxs(Gj, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                delay: i * .1
            },
            children: [v.jsx(Yj, {
                src: n.image
            }), v.jsxs(qj, {
                children: [v.jsx($j, {
                    children: n.name
                }), v.jsx(Xj, {
                    children: n.role
                }), v.jsxs(Kj, {
                    children: [v.jsx("a", {
                        href: `mailto:${n.email}`,
                        children: v.jsx("i", {
                            className: "fas fa-envelope"
                        })
                    }), v.jsx("a", {
                        href: `tel:${n.phone}`,
                        children: v.jsx("i", {
                            className: "fas fa-phone"
                        })
                    })]
                })]
            })]
        }, i))
    })]
})
  , Qj = H.footer`
  padding: 5rem 5% 2rem;
  background: ${ ({theme: n}) => n.colors.dark};
  border-top: 1px solid rgba(198, 230, 5, 0.1);
`
  , Jj = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`
  , Of = H.div`
  h3 {
    color: ${ ({theme: n}) => n.colors.primary};
    margin-bottom: 1.5rem;
  }
`
  , Wj = H.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: ${ ({theme: n}) => n.colors.light};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${ ({theme: n}) => n.colors.primary};
    }
  }
`
  , Ij = H.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.7;
`
  , eM = () => v.jsxs(Qj, {
    id: "contact",
    children: [v.jsxs(Jj, {
        children: [v.jsxs(Of, {
            children: [v.jsx("h3", {
                children: "About Event"
            }), v.jsx("p", {
                children: "MIE ROBOlution 1.0 is the premier robotics and automation event at CUET, bringing together innovative minds and cutting-edge technology."
            })]
        }), v.jsxs(Of, {
            children: [v.jsx("h3", {
                children: "Contact Info"
            }), v.jsx("p", {
                children: "Department of Mechatronics & Industrial Engineering"
            }), v.jsx("p", {
                children: "Chittagong University of Engineering & Technology (CUET)"
            }), v.jsx("p", {
                children: "Email: headmie@cuet.ac.bd"
            })]
        }), v.jsxs(Of, {
            children: [v.jsx("h3", {
                children: "Follow Us"
            }), v.jsxs(Wj, {
                children: [v.jsx("a", {
                    href: "https://www.facebook.com/events/9420448124644824",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: v.jsx("i", {
                        className: "fab fa-facebook"
                    })
                }), v.jsxs("a", {
                    href: "mailto:mierobolution2025@gmail.com",
                    children: [v.jsx("i", {
                        className: "fas fa-envelope"
                    }), " "]
                }), v.jsxs("a", {
                    href: "tel:+8801670558956",
                    children: [v.jsx("i", {
                        className: "fas fa-phone"
                    }), " "]
                })]
            })]
        })]
    }), v.jsx(Ij, {
        children: "© 2025 MIE ROBOlution. Made by Shafqat Nawaz"
    })]
})
  , Lf = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
  min-height: 100vh;
`
  , Ny = H(Ae.div)`
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(198, 230, 5, 0.1);
  border-radius: 10px;
  overflow: hidden;
`
  , tM = H.div`
  width: 100%;
  padding-top: 36.36%;
  position: relative;
  overflow: hidden;
`
  , nM = H.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
  , iM = H.div`
  padding: 3rem;
`
  , aM = H.h1`
  color: ${ ({theme: n}) => n.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`
  , Hy = H.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(198, 230, 5, 0.1);
`
  , Ba = H.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  & svg {
    color: ${ ({theme: n}) => n.colors.primary};
  }
`
  , rM = H.div`
  margin-bottom: 2rem;
`
  , Pi = H.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
  , Gi = H.span`
  width: 150px;
  font-weight: bold;
  color: ${ ({theme: n}) => n.colors.primary};
  font-size: 1.1rem;
`
  , Yi = H.span`
  flex: 1;
  font-size: 1.1rem;
`
  , sM = H.div`
  margin-bottom: 2.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
`
  , lM = H.p`
  margin-top: 1rem;
  font-style: italic;
  color: ${ ({theme: n}) => n.colors.primary};
  background: rgba(198, 230, 5, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
`
  , _f = H.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
`
  , qi = H.button`
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-family: ${ ({theme: n}) => n.fonts.heading};
  transition: all 0.3s ease;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  
  ${ ({primary: n, theme: i}) => n ? `
    background: ${i.colors.primary};
    color: ${i.colors.dark};
    
    &:hover {
      background: ${i.colors.primaryDark || "#b4cc04"};
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  ` : `
    border: 2px solid ${i.colors.primary};
    color: ${i.colors.primary};
    background: transparent;
    
    &:hover {
      background: rgba(198, 230, 5, 0.1);
      transform: translateY(-3px);
    }
  `}
`
  , Uf = H.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${ ({theme: n}) => n.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`
  , rs = H.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${ ({theme: n}) => n.colors.primary};
    font-weight: bold;
  }
`
  , oM = H.div`
  text-align: center;
  padding: 4rem;
`
  , uM = H.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${ ({theme: n}) => n.colors.primary};
  color: ${ ({theme: n}) => n.colors.dark};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 300px;
  opacity: 0;
  transform: translateY(-20px);
  animation: slideIn 0.3s forwards, fadeOut 0.3s 3s forwards;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`
  , cM = H.div`
  margin-top: 3rem;
`
  , fM = H(Ae.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`
  , dM = H.h3`
  color: ${ ({theme: n}) => n.colors.light};
  margin-bottom: 1rem;
`
  , hM = H.p`
  margin-bottom: 1rem;
`
  , mM = H.div`
  text-align: center;
  margin: 0 auto 2rem auto;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(198, 230, 5, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 480px) {
    max-width: 90%;
    padding: 0.8rem;
  }
`
  , pM = H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`
  , gM = H.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  color: ${ ({theme: n}) => n.colors.light};

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`
  , Il = H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
  padding: 0.4rem;
  background: rgba(198, 230, 5, 0.1);
  border-radius: 5px;

  @media (max-width: 480px) {
    min-width: 45px;
    padding: 0.3rem;
  }
`
  , eo = H.span`
  font-weight: bold;
  color: ${ ({theme: n}) => n.colors.primary};
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
  , to = H.span`
  font-size: 0.8rem;
  color: ${ ({theme: n}) => n.colors.light};

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`
  , yM = {
    "technical-seminar": new URL("" + new URL("4-CcNFIzSH.png",import.meta.url).href,import.meta.url).href,
    "line-following-robot": new URL("" + new URL("lfr-BMoaqyOB.png",import.meta.url).href,import.meta.url).href,
    "robo-soccer": new URL("" + new URL("3-k7nyvP6o.png",import.meta.url).href,import.meta.url).href,
    "project-presentation": new URL("" + new URL("project-DWJwNNMV.png",import.meta.url).href,import.meta.url).href,
    "cad-contest": new URL("" + new URL("2-sX5P-z45.png",import.meta.url).href,import.meta.url).href,
    techathon: new URL("" + new URL("techathon-CTvj1xC4.png",import.meta.url).href,import.meta.url).href,
    "logo-design-contest": new URL("" + new URL("logo-DzwsmYg4.png",import.meta.url).href,import.meta.url).href,
    "poster-presentation": new URL("" + new URL("poster-B8VhAcqk.png",import.meta.url).href,import.meta.url).href,
    "gaming-efootball": new URL("" + new URL("pes4-CHW08sH3.png",import.meta.url).href,import.meta.url).href,
    "gaming-fifa": new URL("" + new URL("fifa-Bns4k4We.png",import.meta.url).href,import.meta.url).href,
    "chess-competition": new URL("" + new URL("chess1-Dw1OlN1i.png",import.meta.url).href,import.meta.url).href
}
  , sb = [{
    id: "technical-seminar",
    title: "Technical Seminar",
    description: "Industry experts share insights and knowledge [ No registration required ]",
    detailsLink: "https://www.facebook.com/events/9420448124644824",
    fullDescription: "Join our technical seminar where industry experts will share valuable insights and knowledge on the latest technological trends and innovations. Attendance is open to all with no registration required.",
    date: "May 8, 2025",
    time: "10:00 AM - 2:00 PM",
    venue: "Auditorium",
    speakers: ["Shall be announced soon", "Stay tuned for updates"]
}, {
    id: "line-following-robot",
    title: "Line Following Robot",
    description: "Test your robot precision and speed",
    registerLink: "https://forms.gle/YYtVH2fviyY9rU4MA",
    rulebookLink: "https://drive.google.com/file/d/1NDvdd9CY3CGDg1eoLi6rJxQ2Dk-MEWmX/view?usp=drive_link",
    fullDescription: "Design a robot that can autonomously follow a line track with precision and speed. The competition will test your engineering skills in building sensors and implementing control algorithms.",
    date: "May 9, 2025",
    time: "8:00 AM - 5:00 PM",
    venue: "TSC Third Floor",
    prizes: ["Total Prize Pool: 50,000Tk", "Reg Fee: 2040Tk"]
}, {
    id: "robo-soccer",
    title: "Robo Soccer",
    description: "Unleash your robot agility",
    registerLink: "https://forms.gle/DWCHrmtoZauCrFvf7",
    rulebookLink: "https://drive.google.com/file/d/1erYgxErQYygH4F0Er2hrlTawazsAOGoz/view?usp=sharing",
    fullDescription: "Build a soccer-playing robot and compete in our tournament. Your robot must be able to detect the ball, navigate the field, and score goals against opponent robots.",
    date: "May 9, 2025",
    time: "8:00 AM - 5:00 PM",
    venue: "Basketball Ground",
    prizes: ["Total Prize Pool: 70,000Tk", "Reg Fee: 2240Tk"]
}, {
    id: "project-presentation",
    title: "Project Presentation",
    description: "Showcase your groundbreaking ideas",
    registerLink: "https://forms.gle/NYw4vc2BvQ9mXDCi8",
    rulebookLink: "https://drive.google.com/file/d/1u8x-tnwTjZkOeNdQDIGX2HI8BIsfelyd/view?usp=drive_link",
    fullDescription: "Present your innovative projects to a panel of judges from academia and industry. This is a great opportunity to receive feedback and potentially find sponsors for your ideas.",
    date: "May 10, 2025",
    time: "8:00 AM - 5:00 PM",
    venue: "TSC Third Floor",
    judgingCriteria: ["Innovation", "Technical Feasibility", "Presentation Quality", "Potential Impact"],
    prizes: ["Total Prize Pool: 45,000Tk", "Reg Fee: 1220"],
    categories: ["School / College", "University"]
}, {
    id: "cad-contest",
    title: "CAD Contest",
    description: "Test your design skills",
    fullDescription: "Demonstrate your Computer-Aided Design expertise by creating 3D models based on given specifications within a limited time frame.",
    date: "April 27 - May 10, 2025",
    time: "Multiple Phases",
    venue: "Online & PME Classroom#2",
    prizes: ["Total Prize Pool: 27,000Tk", "Reg Fee - Preli: 105Tk Final: 410Tk"],
    phases: [{
        title: "Phase - 1: Preliminary Design Submission",
        smallDetails: "The online selection task will be emailed to all team members on April 27, 2025, at 6:00 PM. Teams must complete the task using SOLIDWORKS (versions 2020-2024) within 48 hours, by April 29, 2025, at 6:00 PM. Participants can use free online resources.",
        date: "April 27 - April 29, 2025",
        time: "Email at 6:00 PM on April 27, ends at 6:00 PM on April 29",
        venue: "Online",
        registerLink: "https://forms.gle/uqPyHMnkznA2rn1h8",
        rulebookLink: "https://drive.google.com/file/d/1rwgfEWQHGBb-evqX__VIpOjT0R2wXIVF/view?usp=drive_link"
    }, {
        title: "Phase - 2: Final Design and Presentation",
        smallDetails: "Refine your design and present it to the judges.",
        date: "May 10, 2025",
        time: "9:00 AM - 1:00 PM",
        venue: "PME Classroom#2"
    }],
    software: ["SOLIDWORKS versions 2020-2024"]
}, {
    id: "techathon",
    title: "Techathon",
    description: "Solve real-world challenges",
    fullDescription: "A 24-hour hackathon where teams develop solutions to real-world problems provided by industry partners. Food and refreshments will be provided.",
    date: "April 24 - 9 May , 2025",
    time: "24 hours",
    venue: "Two Phases: Online & CUET",
    prizes: ["Total Prize Pool: 100,000Tk"],
    categories: ["College", "University"],
    phases: [{
        title: "Phase - 1: Idea Submission and Initial Presentation",
        smallDetails: "Teams submit their project ideas and give a brief presentation.",
        date: "Registration Deadline: April 24, 2025",
        time: "Case unveiling: April 25, 2025, 6 PM",
        venue: "Online",
        registerLink: "https://drive.google.com/file/d/1EbRa_KsxUhyAlSnpNBOxzNzrka6CV7cX/view?usp=sharing",
        rulebookLink: "https://drive.google.com/file/d/1DNvzbIAOCZA3uw-RV9RW_ozDg7Jeh1Sr/view?usp=drive_link"
    }, {
        title: "Phase - 2: Development and Final Presentation",
        smallDetails: "Teams develop their solutions and present the final product.",
        date: "May 9, 2025",
        time: "09:00 AM - 05:00 PM",
        venue: "PME Classroom#3"
    }]
}, {
    id: "gaming-efootball",
    title: "Gaming Contest - efootball",
    description: "Compete in exciting games [ Only for CUETian ]",
    registerLink: "https://forms.gle/CeyrUf1eeqSqJ8PE9",
    rulebookLink: "https://drive.google swap.com/file/d/1F8Phy3auc33qLaj9dKcUWXway7TRwsn7/view?usp=drive_link",
    fullDescription: "Show off your gaming skills in this efootball tournament exclusively for CUET students. Teams of 4 will compete in multiple rounds to determine the ultimate champions.",
    date: "April 24 - 26, 2025",
    time: "Registration Deadline: April 22, 2025",
    venue: "PME Classroom",
    prizes: ["Total Prize Pool: 4,000Tk", " Reg Fee: 55Tk"]
}, {
    id: "gaming-fifa",
    title: "Gaming Contest - FIFA",
    description: "Compete in exciting games [ Only for CUETian ]",
    registerLink: "https://forms.gle/TnsZquKuWdb4kZ5i6",
    rulebookLink: "https://drive.google.com/file/d/1OZosGKBIGN1ZfDsOnbZQFGuypAxqylkM/view?usp=drive_link",
    fullDescription: "Challenge your fellow CUET students in a FIFA tournament. Players will compete in a knockout format to crown the campus champion.",
    date: "April 24 - 26, 2025",
    time: "Registration Deadline: April 22, 2025",
    venue: "PME Classroom",
    prizes: ["Total Prize Pool: 6,000Tk", " Reg Fee: 105Tk"]
}, {
    id: "chess-competition",
    title: "Chess Competition",
    description: "Strategic battles of minds [ Only for CUETian ]",
    registerLink: "https://forms.gle/E9fwJiYcDQCC9u34A",
    rulebookLink: "https://drive.google.com/file/d/1m33NLcG10QpJ7BkQJKRmtZ5g3qFrI5PK/view?usp=sharing",
    fullDescription: "Test your strategic thinking in our chess tournament. The competition will follow standard chess rules with time controls appropriate for all skill levels.",
    date: "May 10, 2025",
    time: "5:00 PM - 5:30 PM",
    venue: "CUET TSC",
    format: "Swiss-system tournament",
    prizes: ["Total Prize Pool: 6,000Tk", " Reg Fee: 210Tk"]
}];
sb.forEach(n => {
    n.fullDescription += " Your confirmation mail & further details shall be sent through your team’s Gmail from registration form."
}
);
const vM = () => {
    const {id: n} = gw()
      , [i,s] = C.useState(null)
      , [l,u] = C.useState(!0)
      , [f,d] = C.useState(null)
      , [p,h] = C.useState({})
      , m = jo();
    C.useEffect( () => {
        const w = sb.find(j => j.id === n);
        s(w),
        u(!1),
        window.scrollTo(0, 0)
    }
    , [n]),
    C.useEffect( () => {
        if ((i == null ? void 0 : i.id) === "techathon") {
            const w = new Date("April 24, 2025 23:59:59").getTime()
              , j = () => {
                const A = new Date().getTime()
                  , k = w - A;
                if (k < 0) {
                    h({
                        expired: !0
                    });
                    return
                }
                h({
                    days: Math.floor(k / (1e3 * 60 * 60 * 24)),
                    hours: Math.floor(k % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
                    minutes: Math.floor(k % (1e3 * 60 * 60) / (1e3 * 60)),
                    seconds: Math.floor(k % (1e3 * 60) / 1e3)
                })
            }
            ;
            j();
            const U = setInterval(j, 1e3);
            return () => clearInterval(U)
        }
    }
    , [i]);
    const y = w => {
        d(w),
        setTimeout( () => {
            d(null)
        }
        , 3500)
    }
      , b = (w, j) => {
        j === "#" ? y(`Registration ${w === "register" ? "form" : "rulebook"} coming soon! Please check back later.`) : window.open(j, "_blank")
    }
      , S = () => {
        alert("Phase 2's rulebooks and registration would be available after finishing phase 1")
    }
      , T = () => {
        m("/"),
        setTimeout( () => {
            const w = document.getElementById("events");
            w && w.scrollIntoView({
                behavior: "smooth"
            })
        }
        , 100)
    }
    ;
    return l ? v.jsxs(Lf, {
        children: [v.jsxs(Uf, {
            onClick: T,
            children: [v.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: v.jsx("path", {
                    d: "M19 12H5M12 19l-7-7 7-7"
                })
            }), "Back to Events"]
        }), v.jsx(Ny, {
            children: v.jsx("div", {
                style: {
                    padding: "3rem",
                    textAlign: "center"
                },
                children: v.jsx("h2", {
                    children: "Loading event details..."
                })
            })
        })]
    }) : i ? v.jsxs(Lf, {
        children: [f && v.jsx(uM, {
            children: f
        }), v.jsxs(Uf, {
            onClick: T,
            children: [v.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: v.jsx("path", {
                    d: "M19 12H5M12 19l-7-7 7-7"
                })
            }), "Back to Events"]
        }), v.jsxs(Ny, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .5
            },
            children: [v.jsx(tM, {
                children: v.jsx(nM, {
                    src: yM[i.id],
                    alt: i.title
                })
            }), v.jsxs(iM, {
                children: [v.jsx(aM, {
                    children: i.title
                }), v.jsxs(Hy, {
                    children: [v.jsxs(Ba, {
                        children: [v.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [v.jsx("rect", {
                                x: "3",
                                y: "4",
                                width: "18",
                                height: "18",
                                rx: "2",
                                ry: "2"
                            }), v.jsx("line", {
                                x1: "16",
                                y1: "2",
                                x2: "16",
                                y2: "6"
                            }), v.jsx("line", {
                                x1: "8",
                                y1: "2",
                                x2: "8",
                                y2: "6"
                            }), v.jsx("line", {
                                x1: "3",
                                y1: "10",
                                x2: "21",
                                y2: "10"
                            })]
                        }), i.date]
                    }), v.jsxs(Ba, {
                        children: [v.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [v.jsx("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }), v.jsx("polyline", {
                                points: "12 6 12 12 16 14"
                            })]
                        }), i.time]
                    }), v.jsxs(Ba, {
                        children: [v.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [v.jsx("path", {
                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                            }), v.jsx("circle", {
                                cx: "12",
                                cy: "10",
                                r: "3"
                            })]
                        }), i.venue]
                    })]
                }), v.jsxs(sM, {
                    children: [i.fullDescription.split(" Your confirmation mail & further details shall be sent through your team’s Gmail from registration form.")[0], v.jsx(lM, {
                        children: "Your confirmation mail & further details shall be sent through your team’s Gmail from registration form."
                    })]
                }), i.id === "techathon" && v.jsxs(mM, {
                    children: [v.jsx(pM, {
                        children: "Phase 1 Registration Deadline: 24 April"
                    }), p.expired ? v.jsxs("div", {
                        children: [v.jsx("p", {
                            children: "Phase 1 Case is published"
                        }), v.jsx("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: v.jsx(_f, {
                                children: v.jsx(qi, {
                                    onClick: () => window.open("https://drive.google.com/file/d/1EbRa_KsxUhyAlSnpNBOxzNzrka6CV7cX/view", "_blank"),
                                    primary: !0,
                                    children: "View Case Details"
                                })
                            })
                        })]
                    }) : v.jsxs(gM, {
                        children: [v.jsxs(Il, {
                            children: [v.jsx(eo, {
                                children: p.days || 0
                            }), v.jsx(to, {
                                children: "Days"
                            })]
                        }), v.jsxs(Il, {
                            children: [v.jsx(eo, {
                                children: p.hours || 0
                            }), v.jsx(to, {
                                children: "Hours"
                            })]
                        }), v.jsxs(Il, {
                            children: [v.jsx(eo, {
                                children: p.minutes || 0
                            }), v.jsx(to, {
                                children: "Minutes"
                            })]
                        }), v.jsxs(Il, {
                            children: [v.jsx(eo, {
                                children: p.seconds || 0
                            }), v.jsx(to, {
                                children: "Seconds"
                            })]
                        })]
                    })]
                }), v.jsxs(rM, {
                    children: [i.prizes && i.prizes.length > 0 && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: [v.jsx("path", {
                                    d: "M17 11h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1"
                                }), v.jsx("path", {
                                    d: "M11 15.5c0 1.7 1.3 3 3 3s3-1.3 3-3v-10c0-1.7-1.3-3-3-3s-3 1.3-3 3v5.5"
                                }), v.jsx("path", {
                                    d: "M3 8v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3"
                                })]
                            }), "Prize Money"]
                        }), v.jsx(Yi, {
                            children: v.jsx("ul", {
                                children: i.prizes.map( (w, j) => v.jsx(rs, {
                                    children: w
                                }, j))
                            })
                        })]
                    }), i.speakers && i.speakers.length > 0 && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: [v.jsx("path", {
                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                }), v.jsx("circle", {
                                    cx: "12",
                                    cy: "7",
                                    r: "4"
                                })]
                            }), "Speakers:"]
                        }), v.jsx(Yi, {
                            children: v.jsx("ul", {
                                children: i.speakers.map( (w, j) => v.jsx(rs, {
                                    children: w
                                }, j))
                            })
                        })]
                    }), i.prize && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: [v.jsx("path", {
                                    d: "M17 11h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1"
                                }), v.jsx("path", {
                                    d: "M11 15.5c0 1.7 1.3 3 3 3s3-1.3 3-3v-10c0-1.7-1.3-3-3-3s-3 1.3-3 3v5.5"
                                }), v.jsx("path", {
                                    d: "M3 8v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3"
                                })]
                            }), "Prize:"]
                        }), v.jsx(Yi, {
                            children: i.prize
                        })]
                    }), i.format && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: [v.jsx("polygon", {
                                    points: "12 2 2 7 12 12 22 7 12 2"
                                }), v.jsx("polyline", {
                                    points: "2 17 12 22 22 17"
                                }), v.jsx("polyline", {
                                    points: "2 12 12 17 22 12"
                                })]
                            }), "Format:"]
                        }), v.jsx(Yi, {
                            children: i.format
                        })]
                    }), i.categories && i.categories.length > 0 && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: v.jsx("path", {
                                    d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                                })
                            }), "Categories:"]
                        }), v.jsx(Yi, {
                            children: v.jsx("ul", {
                                children: i.categories.map( (w, j) => v.jsx(rs, {
                                    children: w
                                }, j))
                            })
                        })]
                    }), i.judgingCriteria && i.judgingCriteria.length > 0 && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: [v.jsx("path", {
                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                }), v.jsx("polyline", {
                                    points: "22 4 12 14.01 9 11.01"
                                })]
                            }), "Judging Criteria:"]
                        }), v.jsx(Yi, {
                            children: v.jsx("ul", {
                                children: i.judgingCriteria.map( (w, j) => v.jsx(rs, {
                                    children: w
                                }, j))
                            })
                        })]
                    }), i.software && i.software.length > 0 && v.jsxs(Pi, {
                        children: [v.jsxs(Gi, {
                            children: [v.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    marginRight: "8px"
                                },
                                children: [v.jsx("rect", {
                                    x: "2",
                                    y: "3",
                                    width: "20",
                                    height: "14",
                                    rx: "2",
                                    ry: "2"
                                }), v.jsx("line", {
                                    x1: "8",
                                    y1: "21",
                                    x2: "16",
                                    y2: "21"
                                }), v.jsx("line", {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "21"
                                })]
                            }), "Software:"]
                        }), v.jsx(Yi, {
                            children: v.jsx("ul", {
                                children: i.software.map( (w, j) => v.jsx(rs, {
                                    children: w
                                }, j))
                            })
                        })]
                    })]
                }), i.phases ? v.jsxs(cM, {
                    children: [v.jsx("h2", {
                        style: {
                            color: w => w.colors.primary,
                            marginBottom: "2rem"
                        },
                        children: "Phases"
                    }), i.phases.map( (w, j) => v.jsxs(fM, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: j * .1
                        },
                        children: [v.jsx(dM, {
                            children: w.title
                        }), v.jsx(hM, {
                            children: w.smallDetails
                        }), v.jsxs(Hy, {
                            children: [v.jsxs(Ba, {
                                children: [v.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [v.jsx("rect", {
                                        x: "3",
                                        y: "4",
                                        width: "18",
                                        height: "18",
                                        rx: "2",
                                        ry: "2"
                                    }), v.jsx("line", {
                                        x1: "16",
                                        y1: "2",
                                        x2: "16",
                                        y2: "6"
                                    }), v.jsx("line", {
                                        x1: "8",
                                        y1: "2",
                                        x2: "8",
                                        y2: "6"
                                    }), v.jsx("line", {
                                        x1: "3",
                                        y1: "10",
                                        x2: "21",
                                        y2: "10"
                                    })]
                                }), w.date]
                            }), v.jsxs(Ba, {
                                children: [v.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [v.jsx("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }), v.jsx("polyline", {
                                        points: "12 6 12 12 16 14"
                                    })]
                                }), w.time]
                            }), v.jsxs(Ba, {
                                children: [v.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [v.jsx("path", {
                                        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                    }), v.jsx("circle", {
                                        cx: "12",
                                        cy: "10",
                                        r: "3"
                                    })]
                                }), w.venue]
                            })]
                        }), v.jsx(_f, {
                            children: (i.id === "techathon" || i.id === "cad-contest") && w.title.includes("Phase - 2") ? v.jsx(qi, {
                                onClick: S,
                                primary: !0,
                                children: "Finish Phase-1 first!"
                            }) : v.jsxs(v.Fragment, {
                                children: [v.jsx(qi, {
                                    onClick: () => b("register", w.registerLink),
                                    primary: !0,
                                    children: i.id === "techathon" ? "View Case Details" : "Register Now"
                                }), v.jsx(qi, {
                                    onClick: () => b("rulebook", w.rulebookLink),
                                    children: "Download Rulebook"
                                })]
                            })
                        })]
                    }, j))]
                }) : v.jsx(_f, {
                    children: i.detailsLink ? v.jsx(qi, {
                        onClick: () => window.open(i.detailsLink, "_blank"),
                        primary: !0,
                        children: "View Event Details"
                    }) : v.jsxs(v.Fragment, {
                        children: [v.jsx(qi, {
                            onClick: () => b("register", i.registerLink),
                            primary: !0,
                            children: "Register Now"
                        }), v.jsx(qi, {
                            onClick: () => b("rulebook", i.rulebookLink),
                            children: "Download Rulebook"
                        })]
                    })
                })]
            })]
        })]
    }) : v.jsxs(Lf, {
        children: [v.jsxs(Uf, {
            onClick: T,
            children: [v.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: v.jsx("path", {
                    d: "M19 12H5M12 19l-7-7 7-7"
                })
            }), "Back to Events"]
        }), v.jsxs(oM, {
            children: [v.jsx("h2", {
                children: "Event not found"
            }), v.jsx("p", {
                children: "Sorry, the event you're looking for doesn't exist."
            })]
        })]
    })
}
  , bM = H.section`
  padding: 4rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
  
`
  , xM = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px)); /* Wider min-width for guest cards */
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center; /* Center the grid items */
`
  , SM = H(Ae.div)`
  background: rgba(255, 255, 255, 0.08); /* Slightly different background for distinction */
  border: 1px solid rgba(198, 230, 5, 0.15);
  border-radius: 10px;
  overflow: hidden;
  max-width: 100%;
`
  , wM = H.a`
  display: block;
  width: 100%;
  cursor: pointer;
`
  , TM = H.div`
  width: 100%;
  height: 300px; /* Taller image for guest cards */
  background: #222;
  background-image: url(${n => n.src});
  background-size: cover;
  background-position: center;
`
  , EM = H.div`
  padding: 1.5rem; /* More padding for larger card */
`
  , RM = H.a`
  text-decoration: none;
  cursor: pointer;
  
  &:hover h3 {
    text-decoration: underline;
  }
`
  , AM = H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 0.4rem;
  font-size: 1.3rem; /* Larger font size */
`
  , CM = H.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
`
  , jM = H.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  
  a {
    color: ${ ({theme: n}) => n.colors.light};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${ ({theme: n}) => n.colors.primary};
    }
  }
`
  , MM = H.section`
  padding: 5rem 5%;
  background: ${ ({theme: n}) => n.colors.dark};
`
  , DM = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`
  , OM = H(Ae.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(198, 230, 5, 0.1);
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
`
  , LM = H.a`
  display: block;
  width: 100%;
  cursor: pointer;
`
  , _M = H.div`
  width: 100%;
  height: 220px;
  background: #222;
  background-image: url(${n => n.src});
  background-size: cover;
  background-position: center;
`
  , UM = H.div`
  padding: 1rem;
`
  , zM = H.a`
  text-decoration: none;
  cursor: pointer;
  
  &:hover h3 {
    text-decoration: underline;
  }
`
  , kM = H.h3`
  color: ${ ({theme: n}) => n.colors.primary};
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
`
  , VM = H.p`
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 0.8rem;
`
  , BM = H.div`
  display: flex;
  gap: 0.8rem;
  font-size: 0.8rem;
  
  a {
    color: ${ ({theme: n}) => n.colors.light};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${ ({theme: n}) => n.colors.primary};
    }
  }
`
  , Kt = {
    prasanjit: new URL("" + new URL("prasanjit-tpgSJelD.jpg",import.meta.url).href,import.meta.url).href,
    homayun: new URL("" + new URL("homayun-RaEgUFod.jpg",import.meta.url).href,import.meta.url).href,
    abdur: new URL("" + new URL("abdur-sfhgmyS8.jpg",import.meta.url).href,import.meta.url).href,
    hridoy: new URL("" + new URL("hridoy-C5ffikBr.jpg",import.meta.url).href,import.meta.url).href,
    sanjeeb: new URL("" + new URL("sanjeeb-CAN2Q3gJ.jpg",import.meta.url).href,import.meta.url).href,
    miraiz: new URL("" + new URL("miraiz-DkO1qnf3.jpg",import.meta.url).href,import.meta.url).href,
    fahim: new URL("" + new URL("shofol-D8w_k4Jj.jpg",import.meta.url).href,import.meta.url).href,
    tasnuva: new URL("" + new URL("tasnuva-D7AmKAjM.jpg",import.meta.url).href,import.meta.url).href,
    naimur: new URL("" + new URL("naimur-C_jj02T0.jpg",import.meta.url).href,import.meta.url).href,
    tasmia: new URL("" + new URL("tasmia-60SwIqPj.jpg",import.meta.url).href,import.meta.url).href,
    nusrat: new URL("" + new URL("nusrat-Bv0-QNi8.jpg",import.meta.url).href,import.meta.url).href,
    jamal: new URL("" + new URL("jamal-C-3T-QEz.jpg",import.meta.url).href,import.meta.url).href
}
  , NM = "https://via.placeholder.com/300x400"
  , HM = [{
    name: "Professor Dr. Jamal Uddin Ahamed",
    role: "Director, Institute of Energy Technology - CUET",
    image: Kt.jamal,
    details: "https://www.cuet.ac.bd/members/9",
    imageKey: "jamal"
}]
  , PM = [{
    name: "Dr. Prasanjit Das",
    role: "Head & Professor",
    email: "headmie@cuet.ac.bd",
    phone: "016-42997909",
    image: Kt.prasanjit,
    details: "https://www.cuet.ac.bd/members/434",
    imageKey: "prasanjit"
}, {
    name: "Dr. Homayun Kabir",
    role: "Assistant Professor",
    email: "homayun@cuet.ac.bd",
    phone: "+8801814330170",
    image: Kt.homayun,
    details: "https://www.cuet.ac.bd/members/393",
    imageKey: "homayun"
}, {
    name: "Md. Abdur Rahman",
    role: "Assistant Professor",
    email: "abdurrahman@cuet.ac.bd",
    phone: "+8801683215377",
    image: Kt.abdur,
    details: "https://www.cuet.ac.bd/members/488",
    imageKey: "abdur"
}, {
    name: "Monowar Wadud Hridoy",
    role: "Assistant Professor",
    email: "hridoy@cuet.ac.bd",
    phone: "01734641700",
    image: Kt.hridoy,
    details: "https://www.cuet.ac.bd/members/604",
    imageKey: "hridoy"
}, {
    name: "Sanjeeb Roy",
    role: "Assistant Professor",
    email: "sanjeeb@cuet.ac.bd",
    phone: "01771810318",
    image: Kt.sanjeeb,
    details: "https://www.cuet.ac.bd/members/590",
    imageKey: "sanjeeb"
}, {
    name: "Md. Miraiz Hossain",
    role: "Lecturer",
    email: "miraizhossain@cuet.ac.bd",
    phone: "+8801521473649",
    image: Kt.miraiz,
    details: "https://www.cuet.ac.bd/members/649",
    imageKey: "miraiz"
}, {
    name: "S. M. Fahim Faisal",
    role: "Assistant Professor",
    email: "fahimfaisal@cuet.ac.bd",
    phone: "+8801832834685",
    image: Kt.fahim,
    details: "https://www.cuet.ac.bd/members/677",
    imageKey: "fahim"
}, {
    name: "Tasnuva Jahan Nuva",
    role: "Assistant Professor",
    email: "tasnuvajahan@cuet.ac.bd",
    phone: "",
    image: Kt.tasnuva,
    details: "https://www.cuet.ac.bd/members/678",
    imageKey: "tasnuva"
}, {
    name: "Kazi Naimur Rahman",
    role: "Lecturer",
    email: "naimur@cuet.ac.bd",
    phone: "01643361857",
    image: Kt.naimur,
    details: "https://www.cuet.ac.bd/members/689",
    imageKey: "naimur"
}, {
    name: "Tasmia Binte Hai",
    role: "Lecturer",
    email: "tasmia_heem@cuet.ac.bd",
    phone: "",
    image: Kt.tasmia,
    details: "https://www.cuet.ac.bd/members/690",
    imageKey: "tasmia"
}, {
    name: "Ms. Nusrat Sultana",
    role: "Lecturer",
    email: "nusratsultana@cuet.ac.bd",
    phone: "01797601059",
    image: Kt.nusrat,
    details: "https://www.cuet.ac.bd/members/758",
    imageKey: "nusrat"
}]
  , GM = () => {
    const n = i => i.image || NM;
    return v.jsxs(v.Fragment, {
        children: [v.jsxs(bM, {
            id: "guests",
            children: [v.jsx("h2", {
                children: "Guests"
            }), v.jsx(xM, {
                children: HM.map( (i, s) => v.jsxs(SM, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: s * .1
                    },
                    children: [v.jsx(wM, {
                        href: i.details,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: v.jsx(TM, {
                            src: n(i)
                        })
                    }), v.jsxs(EM, {
                        children: [v.jsx(RM, {
                            href: i.details,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: v.jsx(AM, {
                                children: i.name
                            })
                        }), v.jsx(CM, {
                            children: i.role
                        }), v.jsxs(jM, {
                            children: [v.jsx("a", {
                                href: `mailto:${i.email}`,
                                children: v.jsx("i", {
                                    className: "fas fa-envelope"
                                })
                            }), i.phone && v.jsx("a", {
                                href: `tel:${i.phone}`,
                                children: v.jsx("i", {
                                    className: "fas fa-phone"
                                })
                            }), v.jsx("a", {
                                href: i.details,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: v.jsx("i", {
                                    className: "fas fa-info-circle"
                                })
                            })]
                        })]
                    })]
                }, s))
            })]
        }), v.jsxs(MM, {
            id: "faculty",
            children: [v.jsx("h2", {
                children: "Our Faculty"
            }), v.jsx(DM, {
                children: PM.map( (i, s) => v.jsxs(OM, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: s * .1
                    },
                    children: [v.jsx(LM, {
                        href: i.details,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: v.jsx(_M, {
                            src: n(i)
                        })
                    }), v.jsxs(UM, {
                        children: [v.jsx(zM, {
                            href: i.details,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: v.jsx(kM, {
                                children: i.name
                            })
                        }), v.jsx(VM, {
                            children: i.role
                        }), v.jsxs(BM, {
                            children: [v.jsx("a", {
                                href: `mailto:${i.email}`,
                                children: v.jsx("i", {
                                    className: "fas fa-envelope"
                                })
                            }), i.phone && v.jsx("a", {
                                href: `tel:${i.phone}`,
                                children: v.jsx("i", {
                                    className: "fas fa-phone"
                                })
                            }), v.jsx("a", {
                                href: i.details,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: v.jsx("i", {
                                    className: "fas fa-info-circle"
                                })
                            })]
                        })]
                    })]
                }, s))
            })]
        })]
    })
}
  , YM = () => v.jsxs(v.Fragment, {
    children: [v.jsx(t5, {}), v.jsx(E5, {}), v.jsx(k5, {}), v.jsx(G5, {}), v.jsx(Z5, {}), v.jsx(Uj, {}), v.jsx(Nj, {}), v.jsx(GM, {}), v.jsx(Zj, {})]
});
function qM() {
    return v.jsxs(e2, {
        children: [" ", v.jsx(qC, {}), v.jsxs(Ow, {
            children: [v.jsx(kf, {
                path: "/",
                element: v.jsx(YM, {})
            }), v.jsx(kf, {
                path: "/events/:id",
                element: v.jsx(vM, {})
            })]
        }), v.jsx(eM, {})]
    })
}
const $M = fT`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${ ({theme: n}) => n.colors.dark};
    color: ${ ({theme: n}) => n.colors.light};
    font-family: ${ ({theme: n}) => n.fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${ ({theme: n}) => n.fonts.heading};
  }
`
  , XM = {
    colors: {
        primary: "#C6E605",
        dark: "#111111",
        light: "#FFFFFF",
        gray: "#333333"
    },
    fonts: {
        heading: '"Orbitron", sans-serif',
        body: '"Inter", sans-serif'
    }
};
HS.createRoot(document.getElementById("root")).render(v.jsx(Zt.StrictMode, {
    children: v.jsxs(oT, {
        theme: XM,
        children: [v.jsx($M, {}), v.jsx(qM, {})]
    })
}));
