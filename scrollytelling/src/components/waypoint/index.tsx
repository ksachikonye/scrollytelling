/* -------------------------------------------------------------------------------------------------
 * Waypoint
 * -----------------------------------------------------------------------------------------------*/

import { gsap } from "gsap";
import { Slot } from "@radix-ui/react-slot";
import {
  AnimationProps,
  SimpleTween,
  TweenTarget,
  WaypointBaseDef,
} from "../../types";
import * as React from "react";
import { useScrollytelling } from "../../primitive";
import { getTweenTarget, getValidAt, buildDeclarativeTween } from "../../util";

export function Waypoint(
  props: WaypointBaseDef & {
    tween?: SimpleTween & { target: TweenTarget };
  }
): null;

export function Waypoint(
  props: WaypointBaseDef & {
    children: React.ReactNode;
    tween?: SimpleTween;
  }
): React.ReactElement;

export function Waypoint({
  tween,
  children,
  at,
  label,
  onCall,
  onReverseCall,
  disabled = true,
}: WaypointBaseDef & {
  children?: AnimationProps["children"];
  tween?: SimpleTween & { target?: TweenTarget };
}): React.ReactElement | null {
  const ref = React.useRef<HTMLElement>(null);
  const id = React.useId();
  const lastStateRef = React.useRef<"idle" | "complete" | "reverse-complete">(
    "idle"
  );

  const { timeline } = useScrollytelling();

  React.useEffect(() => {
    if (!timeline || disabled) return;

    let cleanupTween: undefined | (() => void) = undefined;
    let generatedTween: undefined | GSAPTween = undefined;
    if (tween) {
      const { duration, ...op } = tween;
      const tweenTarget = getTweenTarget({ targetContainer: tween, ref });
      cleanupTween = buildDeclarativeTween({
        id: id + "-tween",
        op,
        duration,
        target: tweenTarget,
        paused: true,
      });
      generatedTween = gsap.getById<gsap.core.Tween>(id + "-tween");
    }

    const validAt = getValidAt(at);

    // create a new paused set
    const newSet = gsap.set({}, { id, paused: true });

    /**
     * if the lastStateRef is "complete", it means that this waypoint was already triggered
     * now, the state changed, so this effect cleaned up the previous set, so we lost the "complete" state inside the tween
     * we now recover it by playing the new set, which will trigger the onComplete callback (with nothing in it)
     * then we put the correct callbacks so that it "resumes"
     */
    if (lastStateRef.current === "complete") {
      // play it to trigger the onComplete (that was previously triggered)
      newSet.play();
    }

    // set the callbacks
    newSet.vars.onComplete = () => {
      lastStateRef.current = "complete";
      onCall?.();
      generatedTween?.play();
    };
    newSet.vars.onReverseComplete = () => {
      lastStateRef.current = "reverse-complete";
      onReverseCall?.();
      if (!tween?.forwards) {
        generatedTween?.reverse();
      }
    };

    // add it to the timeline
    timeline.add(newSet, validAt);

    // this won't actually play it. it will enable it so that the timeline can play it whenever it needs to
    newSet.play();

    if (label) {
      timeline.addLabel(label, validAt);
    }

    return () => {
      gsap.getById(id)?.revert();
      cleanupTween?.();
      if (label) timeline.removeLabel(label);
    };
  }, [at, disabled, id, label, onCall, onReverseCall, timeline, tween]);

  if (children) {
    return <Slot ref={ref}>{children}</Slot>;
  }
  return null;
}
