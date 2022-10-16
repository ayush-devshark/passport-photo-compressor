package com.passportphotocompressor.newarchitecture;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class FSModule extends ReactContextBaseJavaModule {
    public FSModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "fsModule";
    }
}
