"use client";

import { useEffect } from "react";
import { useRef } from "react";
import { useReducer } from "react";
import { MatchState } from "../../features/scoring/match/types/match";
import { RawPointInput } from "../../features/scoring/match/types/point";
import { defaultMatchState } from "./constants/defaultMatchState";
import { MatchStateContext } from "./MatchStateContext";
import { matchStateReducer } from "./matchStateReducer";
import { MatchLength } from "@/features/scoring/match-setup/types/match-setup";
import { Player } from "@/features/scoring/types/player";

export const MatchStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const stateHistory = useRef<MatchState[]>([]);
  const [state, dispatch] = useReducer(matchStateReducer, defaultMatchState);

  useEffect(() => {
    const cachedMatchState = localStorage.getItem("matchState");
    if (cachedMatchState) {
      setInitialStateFromCache(JSON.parse(cachedMatchState));
    }
  }, []);

  useEffect(() => {
    stateHistory.current = [...stateHistory.current, state];
    localStorage.setItem("matchState", JSON.stringify(state));
  }, [state]);

  //TODO これの命名よくない。useStateのsetみたいになる。
  const setInitialStateFromCache = (matchState: MatchState) => {
    dispatch({ type: "SET_INITIAL_STATE_FROM_CACHE", payload: matchState });
  };

  const addPoint = (
    pointData: RawPointInput,
    matchLength: MatchLength,
    initialServer: Player
  ) => {
    dispatch({
      type: "ADD_POINT",
      payload: { pointData, matchLength, initialServer },
    });
  };

  const removeLatestPoint = () => {
    if (stateHistory.current.length >= 2) {
      let previousState = stateHistory.current[stateHistory.current.length - 2];

      // 最新の状態を削除(previousがまたstateリストに追加されるので二個消しておく)
      stateHistory.current = stateHistory.current.slice(0, -2);

      dispatch({ type: "REMOVE_LATEST_POINT", payload: { previousState } });
    } else {
      dispatch({ type: "REMOVE_LATEST_POINT" });
    }
  };

  const completeMatch = () => {
    dispatch({ type: "COMPLETE_MATCH_STATE" });
  };

  const resetMatchState = () => {
    stateHistory.current = [];
    localStorage.removeItem("matchState");
    dispatch({ type: "RESET_MATCH_STATE" });
  };

  return (
    <MatchStateContext.Provider
      value={{
        state,
        dispatch,
        setInitialStateFromCache,
        addPoint,
        removeLatestPoint,
        completeMatch,
        resetMatchState,
      }}
    >
      {children}
    </MatchStateContext.Provider>
  );
};
