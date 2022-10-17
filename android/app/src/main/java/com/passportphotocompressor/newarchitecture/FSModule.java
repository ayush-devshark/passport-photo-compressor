package com.passportphotocompressor.newarchitecture;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FSModule extends ReactContextBaseJavaModule {
    public FSModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "fsModule";
    }
    @ReactMethod
    public void justGreetMe(String name, Promise promise) {
        promise.resolve("HI " + name);
    }
}
