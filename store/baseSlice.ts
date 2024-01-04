import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface BaseState {
  isMobile: boolean;
  mobileNavOpenedIndicator: boolean;
  isNavigationLinkPortfolioClicked: boolean;
  isNavigationLinkAboutClicked: boolean;
  isNavigationLinkQuickSmsClicked: boolean;
  isNavigationLinkInvictaClicked: boolean;
  isNavigationLinkTonmainersClicked: boolean;
  isNavigationLinkEarngamesClicked: boolean;
  isPreloaderFinished: boolean;
}

const initialBaseState: BaseState = {
  isMobile: false,
  mobileNavOpenedIndicator: false,
  isNavigationLinkPortfolioClicked: false,
  isNavigationLinkAboutClicked: false,
  isNavigationLinkQuickSmsClicked: false,
  isNavigationLinkInvictaClicked: false,
  isNavigationLinkTonmainersClicked: false,
  isNavigationLinkEarngamesClicked: false,
  isPreloaderFinished: false,
};

const baseSlice = createSlice({
    name: 'base',
    initialState: initialBaseState,
    reducers: {
        isMobileToTrue(state) {
          state.isMobile = true;
        },
        isMobileToFalse(state) {
          state.isMobile = false;
        },
        isPreloaderFinishedToTrue(state) {
          state.isPreloaderFinished = true;
        },
        toggleMobileNavOpenedIndicator(state): void {
            state.mobileNavOpenedIndicator = !state.mobileNavOpenedIndicator;
        },
        closeMobileNavOpenedIndicator(state): void {
            state.mobileNavOpenedIndicator = false;
        },
        isNavigationLinkClicked(state, action) {
          if (action.payload.type === 'portfolio') {
            state.isNavigationLinkPortfolioClicked = action.payload.value;
          } else if (action.payload.type === 'about') {
            state.isNavigationLinkAboutClicked = action.payload.value;
          } else if (action.payload.type === 'sms') {
            state.isNavigationLinkQuickSmsClicked = action.payload.value;
          } else if (action.payload.type === 'invicta') {
            state.isNavigationLinkInvictaClicked = action.payload.value;
          } else if (action.payload.type === 'tonmainers') {
            state.isNavigationLinkTonmainersClicked = action.payload.value;
          } else if (action.payload.type === 'earngames') {
            state.isNavigationLinkEarngamesClicked = action.payload.value;
          }
        },
        
    },
});

export const baseActions = baseSlice.actions;

export const selectIsMobile = (state: RootState) => state.base.isMobile;
export const selectIsPreloaderFinished = (state: RootState) => state.base.isPreloaderFinished;
export const selectMobileNavOpenedIndicator = (state: RootState) => state.base.mobileNavOpenedIndicator;
export const selectIsNavigationLinkPortfolioClicked = (state: RootState) => state.base.isNavigationLinkPortfolioClicked;
export const selectIsNavigationLinkAboutClicked = (state: RootState) => state.base.isNavigationLinkAboutClicked;
export const selectIsNavigationLinkQuickSmsClicked = (state: RootState) => state.base.isNavigationLinkQuickSmsClicked;
export const selectIsNavigationLinkInvictaClicked = (state: RootState) => state.base.isNavigationLinkInvictaClicked;
export const selectIsNavigationLinkTonmainersClicked = (state: RootState) => state.base.isNavigationLinkTonmainersClicked;
export const selectIsNavigationLinkEarngamesClicked = (state: RootState) => state.base.isNavigationLinkEarngamesClicked;

export default baseSlice.reducer;
