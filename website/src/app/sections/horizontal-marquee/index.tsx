"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./horizontal-marquee.module.scss";
import { forwardRef } from "react";

// const phrase = "OUR WOR IS SERIOUS WE ARE NOT";
const phrase = "FROM THE LABORATORY...";
const splitted = phrase.split("");
const charsLength = splitted.length;

export const HorizontalMarquee = () => {
  return (
    <Scrollytelling.Root start="top top+=300px">
      <section className={s.section}>
        <div className={s.pinned}>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: 98, ease: "linear" },
            }}
          >
            <div className={s.animated}>
              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  to: { x: "-=50vw", ease: "linear" },
                }}
              >
                <p>
                  {splitted.map((s, i) => {
                    const charDuration = 90 / charsLength;
                    const charStart = charDuration * i;
                    const charEnd = charStart + charDuration;

                    return (
                      <Scrollytelling.Animation
                        key={i}
                        tween={{
                          start: charStart * 0.7, // make it start a bit sooner, actually
                          end: charEnd,
                          fromTo: [
                            {
                              yPercent: 40,
                              scale: 0.5,
                              autoAlpha: 0,
                              transformOrigin: "center right",
                            },
                            {
                              keyframes: {
                                "0%": { autoAlpha: 0, scale: 0.5 },
                                "50%": { autoAlpha: 1, scale: 1 },
                                "100%": { yPercent: 0 },
                                easeEach: "linear",
                              },
                              ease: "linear",
                            },
                          ],
                        }}
                      >
                        <span
                          data-character
                          style={{
                            display: "inline-block",
                          }}
                        >
                          {s === " " ? <>&nbsp;</> : s}
                        </span>
                      </Scrollytelling.Animation>
                    );
                  })}
                </p>
              </Scrollytelling.Animation>
              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  fromTo: [
                    { scale: 0.8, opacity: 0 },
                    { scale: 1.45, opacity: 1, ease: "linear" },
                  ],
                }}
              >
                <WorldSvg />
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};

const WorldSvg = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      viewBox="0 0 699 467"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.worldSvg}
      ref={ref}
    >
      <path
        d="M632.89 340.891c-.843 1.264-1.898 2.528-2.741 3.897-2.32 3.477-3.058 3.582-7.065.633l17.82-15.802-8.014 11.272ZM406.282 311.823c1.055 0 2.215.738 3.269.843l18.242.737c4.774.894 9.673.894 14.446 0 2.426-.948 2.953-6.847 4.324-10.534.632-1.791 1.265-3.687 1.792-5.584.106-1.191.106-2.39 0-3.581h-.949l-15.079 18.014v-14.222c-.351-2.855.025-5.752 1.094-8.422 1.07-2.671 2.797-5.028 5.022-6.853 3.796-2.634 5.8-7.269 10.545-8.744 1.168-.396 2.182-1.147 2.901-2.149.718-1.001 1.105-2.202 1.106-3.434 0-7.69 1.687-15.381 2.214-23.071.527-7.69 0-8.533-8.436-8.849-8.435-.316-7.697-.738-10.544 6.847-.54 1.768-1.209 3.493-2.004 5.162-1.318 2.155-2.169 4.563-2.496 7.068-.327 2.504-.123 5.049.598 7.47.854 3.455 1.384 6.982 1.582 10.535-2.842 1.237-5.474 2.907-7.803 4.951-3.785 4.718-7.305 9.642-10.544 14.749-1.687 2.739-2.636 5.899-4.113 8.849-1.476 2.949-2.53 4.846-3.69 7.269-.54.958-1.032 1.943-1.477 2.949ZM430.96 203.317c.396.599.907 1.113 1.505 1.511.598.398 1.269.672 1.975.807 1.78-.26 3.517-.756 5.166-1.475-1.054-1.475-1.898-2.95-2.952-4.319-.706-.97-1.56-1.823-2.531-2.529-4.704-2.968-8.385-7.307-10.544-12.431-1.335-2.574-2.814-5.071-4.429-7.479l-1.582.843c.364 1.261.822 2.494 1.371 3.687 3.902 7.163 7.803 14.327 12.021 21.385ZM446.773 203.408c7.275-.738 8.435-3.055 4.534-10.535l-11.177 10.535.632 1.158 6.011-1.158ZM452.472 213.225c-.941 5.423-3.968 10.263-8.435 13.484-.844.738-1.055 2.213-1.476 3.266 1.023.412 2.082.729 3.163.948h6.748c2.215 0 3.269-.843 3.164-2.95v-11.904c0-1.053-1.16-2.001-1.793-2.949l-1.371.105ZM500.138 326.379l-50.087-6.531c-.471-.142-.967-.181-1.455-.117-.488.065-.957.232-1.376.491-.418.259-.777.603-1.053 1.011-.275.408-.461.869-.544 1.354 0 1.264-.633 2.528-1.055 3.792-7.506 21.695-17.371 42.503-29.419 62.049-1.054 1.58-1.054 2.739.949 3.266l3.796 1.159 43.865 11.904c.635.181 1.3.227 1.954.136.654-.09 1.281-.316 1.842-.663 6.057-4.455 11.866-9.238 17.399-14.327 10.544-10.535 21.722-21.069 31.634-33.184 6.178-7.859 11.916-16.053 17.187-24.546-1.969-.736-3.975-1.369-6.01-1.896-9.279-1.159-18.453-2.739-27.627-3.898ZM510.049 235.777h-42.178c-6.643 0-6.221 0-6.748 6.426-.949 12.115-1.793 24.23-3.797 36.134-2.003 11.904-4.955 21.807-7.592 32.657-.632 2.634 0 3.793 2.953 3.898 2.952.106 4.218 0 6.327 0l37.855 5.794 31.633 4.741c8.33 1.159 8.33 1.264 12.548-5.794.019-.351.019-.703 0-1.054 4.253-8.906 7.985-18.051 11.177-27.39 3.432-11.607 6.074-23.433 7.909-35.396.738-4.846 4.429-10.535-1.898-15.065v-.737c0-4.214-2.32-4.319-5.378-4.319l-42.811.105ZM520.585 226.936c-.746.846-1.352 1.806-1.793 2.844 1.006.46 2.07.779 3.163.948h15.923c5.689.317 11.392.317 17.082 0 2.32-.603 4.366-1.977 5.799-3.898.527-.526-1.265-3.055-2.109-4.53-1.613-2.036-3.025-4.223-4.217-6.531-2.215-6.321-3.902-12.852-6.116-19.173-.893-2.14-2.306-4.023-4.113-5.478-2.003-1.791-5.588-2.212-4.85-6.215 0 0-1.266-1.159-2.004-1.581l-4.956-2.423c-3.058-1.475-7.908 0-8.435 3.055-1.265 6.637-2.425 13.169-4.007 19.7-.738 2.739 0 3.266 2.425 3.371 2.425.106 3.585 0 4.534.738 1.633 2.172 2.425 4.861 2.232 7.571-.194 2.71-1.361 5.258-3.286 7.177-1.892 1.308-3.657 2.789-5.272 4.425ZM458.162 165.725c1.377 1.776 2.578 3.681 3.585 5.689 5.484 9.27 5.694 6.11-2.003 13.906-.908.723-1.624 1.659-2.084 2.725-.46 1.066-.649 2.228-.552 3.385 1.265 12.22 2.32 24.44 3.479 36.555 0 2.634 1.898 2.844 3.902 2.739h48.716c1.371 0 4.112-1.264 4.007-1.896.428-3.571-.043-7.192-1.371-10.535-6.959-12.747-14.552-25.178-21.933-37.609-.712-.957-1.655-1.718-2.741-2.212l-30.052-16.855c-1.821-1.08-3.769-1.929-5.8-2.529-.949 0-2.32.632-3.374 1.054.761.986 1.608 1.902 2.531 2.739 1.316.831 2.551 1.783 3.69 2.844ZM381.509 30.4382c4.534 4.6352 7.381 10.5346 14.551 13.1683 1.96.5771 4.016.7533 6.045.518 2.029-.2353 3.99-.8773 5.765-1.8875l-17.82-11.6935c3.691-1.7909 6.538-3.1604 9.174-4.7406 1.078-.727 2.068-1.5753 2.952-2.5283-.846-.8904-1.803-1.6692-2.847-2.3176-11.915-4.8459-23.725-9.6919-35.64-14.3271-1.119-.17059-2.256-.17059-3.375 0 .29.90243.717 1.75513 1.266 2.52833 6.537 7.05817 13.075 14.43247 19.929 21.27997ZM405.972 118.402c-1.898-.738-4.007-2.423-5.483-2.002-3.119 1.401-6.117 3.057-8.963 4.951l.633 1.581 13.286-2.739c.211-.211.316-.843.527-1.791ZM392.784 136.324c-4.596-1.875-9.416-3.15-14.34-3.792-1.555-.309-3.161-.24-4.684.2-1.523.44-2.918 1.238-4.068 2.328-1.776 1.369-3.434 2.884-4.956 4.53-.652.739-1.153 1.598-1.476 2.528.845.518 1.726.976 2.636 1.37 9.542 2.748 19.666 2.748 29.208 0 4.534-1.264 5.378-2.528 4.007-7.374-2.32.105-5.061 1.053-6.327.21ZM357.362 40.3396c6.036 3.3829 11.397 7.8467 15.817 13.1683.738.9481 2.108 2.5283 2.847 2.3176 4.217-1.1588 8.33-2.739 13.18-4.4245l-3.901-4.3192c-.633-.6321-1.582-1.7909-1.371-2.107 2.109-3.3711-.844-5.2673-2.425-7.1635-4.745-6.0048-9.807-11.7988-14.974-17.3821-5.166-5.5834-8.541-8.5331-13.18-13.06299-1.956 14.43939-1.529 29.10159 1.265 43.40269.949-3.7925 1.793-6.9529 2.742-10.4293ZM316.232 75.0987c6.116 0 6.116.0001 4.851-5.5833-.515-1.6356-.519-3.3893-.01-5.027.509-1.6376 1.505-3.0812 2.857-4.1381 2.741 2.423 5.377 4.8459 4.956 8.7437-.188.8836-.176 1.7975.033 2.6762.208.8787.61 1.7002 1.174 2.4054.565.7052 1.279 1.2766 2.091 1.673.813.3964 1.703.6081 2.606.6197 3.156.3175 6.335.3175 9.491 0 1.898 0 2.847-1.7909.949-2.8444-1.898-1.0535-1.16-2.8443-.949-4.3192.926-5.0192 1.595-10.0824 2.003-15.1698V8.20387l-1.265-.63209c-4.64 4.63522-9.279 9.27052-13.814 14.01112-3.156 2.7761-5.922 5.9653-8.224 9.4811-2.815 5.5473-5.144 11.3278-6.96 17.2768-.534 1.7498-1.515 3.3306-2.846 4.5867-1.331 1.256-2.967 2.1441-4.746 2.5768-8.33 2.3176-11.282 9.4812-15.5 17.1715 8.224.8428 15.817 1.7909 23.303 2.4229ZM336.482 85.0996c.109.6136.081 1.2436-.084 1.8447-.164.6012-.459 1.1584-.865 1.6317-2.008 2.0055-4.119 3.9043-6.326 5.6888.043.385.043.7737 0 1.1588 1.232.0002 2.452-.2507 3.585-.7374 3.163-2.3177 6.01-4.846 8.963-7.4796 1.38-1.3652 2.683-2.8072 3.901-4.3192-2.329-.5054-4.689-.8573-7.065-1.0535-1.898-.2107-2.636.8428-2.109 3.2657ZM313.92 230.814c2.003 0 3.374 0 3.48-2.634.006-2.018-.751-3.965-2.12-5.449-1.368-1.485-3.248-2.398-5.262-2.557h-11.177c-3.69 0-4.323-1.159-4.323-4.425v-32.552c-.197-2.635.182-5.281 1.111-7.755s2.384-4.716 4.267-6.572c2.621-2.942 5.018-6.076 7.17-9.376 2.003-2.844 1.16-4.53-2.214-4.635-9.385 0-18.77-.738-28.154-1.37-5.694 0-11.494-.948-17.188-1.685-.603-.19-1.24-.248-1.867-.171-.628.077-1.231.287-1.771.616-.539.33-1.002.77-1.356 1.293-.355.523-.594 1.116-.7 1.738-1.582 5.584-3.585 11.062-4.956 16.645-4.281 17.865-6.265 36.203-5.905 54.569 0 3.371 1.371 4.214 4.534 4.214H313.92v.106ZM136.559 173.49c1.491-.232 2.882-.89 4.006-1.896.677-.802 1.179-1.734 1.477-2.739 2.003-5.057 4.007-10.008 5.905-15.065 0-1.159.738-3.266 0-3.792-1.353-1.141-3.081-1.742-4.851-1.686-2.628.441-4.991 1.859-6.615 3.97-1.623 2.111-2.387 4.757-2.137 7.408v2.423c-.158 2.771-.158 5.55 0 8.322.527 1.159 1.687 3.16 2.215 3.055ZM155.637 219.318c-3.796-3.687-8.963-6.426-10.544-12.431 0-1.791-3.585-2.95-5.589-4.425-.632 1.475-1.898 2.845-2.003 4.32-.527 7.058-.844 14.116-.949 21.069 0 .843 1.898 2.423 2.952 2.528h10.545c.452.08.917.057 1.359-.068.442-.124.85-.346 1.195-.65.344-.303.616-.681.794-1.103.179-.423.26-.881.237-1.339-.021-.527.074-1.052.279-1.538.206-.486.516-.92.909-1.273.392-.352.858-.613 1.364-.765.505-.151 1.038-.189 1.56-.111 1.371 0 2.742-1.265 4.113-1.897-.223-.473-.399-.967-.528-1.474-1.792 0-4.428.316-5.694-.843ZM168.61 326.467l21.089-3.265c2.847 0 3.374-1.475 1.581-3.898-1.876-2.351-3.371-4.981-4.428-7.796-1.266-4.214-1.582-8.744-2.531-13.063-.949-4.319 0-11.693-6.327-15.486-6.327-3.792-10.544-7.585-15.711-11.482-1.107-.899-1.916-2.111-2.32-3.477-2.742-9.481-5.483-18.962-7.698-28.549-.738-3.16-1.898-3.792-4.745-3.687-10.544 0-10.544 0-10.544 10.535h-.949c1.476 8.217 2.741 16.539 4.639 24.756 3.623 17.43 9.656 34.272 17.926 50.04 2.32 5.583 4.007 6.426 10.018 5.372ZM283.335 391.37c-3.163-6.111-6.432-11.694-9.068-17.593-7.698-16.856-15.184-33.922-22.882-50.883-.304-.702-.767-1.324-1.352-1.818-.586-.493-1.278-.845-2.022-1.026-6.734-.676-13.492 1.039-19.086 4.846-2.214 1.791-3.163 3.266-1.265 5.794.873 1.071 1.35 2.411 1.35 3.793 0 1.381-.477 2.721-1.35 3.792-1.696 2.199-2.863 4.759-3.411 7.48-.549 2.722-.464 5.533.248 8.217.738 1.896.632 4.108 1.476 6.004.843 1.897 2.109 2.529 3.058 2.423 4.639-.632 6.643 1.581 8.541 5.478 3.374 7.269 7.486 14.222 11.915 22.334-2.214-.632-3.269-.738-4.218-1.159-5.694-2.528-11.282-5.267-16.976-7.585-1.733-.614-3.316-1.589-4.643-2.86-1.327-1.272-2.368-2.81-3.055-4.514-1.315-2.424-2.907-4.686-4.745-6.742-3.536-3.667-6.584-7.775-9.068-12.221-2.109-4.846-1.582-10.534-3.269-15.696-1.632-4.291-4.025-8.252-7.065-11.694-.844-1.053-4.218 0-6.538 0h-1.898l-21.089 3.582c-1.898 0-2.636 1.686-1.265 3.582 6.538 9.165 12.548 18.962 19.929 27.495 13.738 15.53 28.999 29.647 45.553 42.139.505.338 1.075.569 1.674.678.598.109 1.213.093 1.805-.046 11.494-3.371 22.882-7.058 34.27-10.535 4.64-.948 9.701-2.317 14.446-3.265ZM239.262 315.707c2.215 0 4.429-.632 6.644-.738 2.214-.105 3.374-1.369 2.847-3.687-.547-3.256-1.358-6.462-2.426-9.586-.393-.708-.955-1.309-1.635-1.75-.68-.441-1.458-.708-2.266-.779-1.898 0-5.062 1.054-4.007 4.32.58 1.51.768 3.142.547 4.745-.221 1.602-.845 3.123-1.812 4.42-1.266 2.528-.211 3.266 2.108 3.055ZM314.334 110.923c3.101.002 6.188-.424 9.174-1.264.599-.464 1.062-1.08 1.341-1.785.278-.704.361-1.471.24-2.218-2.003-6.5318-3.163-7.2692-9.912-7.4799h-2.109c.526-4.7497 1.335-9.4636 2.426-14.1164.949-3.7924-.738-4.2138-3.796-4.5299-5.273 0-10.545-1.5802-15.923-2.1069-2.847 0-6.115-1.5802-8.224 2.0016-2.109 3.5817-6.011 9.5865-8.647 14.5378-8.339 15.7347-15.391 32.1167-21.089 48.9857-.949 2.739-.844 4.319 2.531 4.425 3.374.105 5.694.527 8.646.737l37.012 2.213c2.741 0 3.585-1.159 4.323-3.582 1.084-3.296 2.572-6.445 4.429-9.376 1.687-2.634 1.898-4.003-1.477-4.109-3.374-.105-3.058-1.264-3.058-3.476v-14.327c0-4.741.633-4.635 4.113-4.53ZM267.522 66.3603c.633 0 2.32-.8428 2.32-1.2642 0-6.9528 5.483-10.5346 8.541-16.2233 1.974-3.3078 3.532-6.846 4.64-10.5346.34-2.245 1.218-4.3748 2.558-6.2087 1.34-1.834 3.103-3.3179 5.139-4.3259 3.353-1.6651 6.562-3.603 9.596-5.7941-.218-.5252-.501-1.0207-.844-1.4748l-31.633 15.8019 10.544 9.6919-16.66 6.6368-15.606 6.3208c1.265 1.1588 1.582 1.6855 2.109 1.7908 6.327 2.0016 12.653 3.8979 19.296 5.5834ZM290.613 63.4141l-4.64 3.371c-.86.679-1.67 1.4184-2.425 2.2123.438.5118.933.9713 1.476 1.3695l2.004.9481 4.85-7.0581-1.265-.8428ZM244.428 56.2598l-5.272-1.1587v2.3176c1.671.3478 3.361.5941 5.061.7374 0 0 0-1.2642.211-1.8963ZM220.592 82.5014c5.483-6.0047 10.544-12.0095 16.344-18.2249 0 0 0-1.8962-.633-2.2122-.423-.2215-.893-.3372-1.371-.3372-.477 0-.948.1157-1.37.3372-3.644 2.0397-7.165 4.2909-10.545 6.7421-1.564.8654-2.734 2.2988-3.269 4.0031-.266 3.2955-.266 6.6071 0 9.9026.317-.316.738-.1053.844-.2107ZM248.332 146.227c.763-.036 1.504-.268 2.151-.674.646-.406 1.177-.973 1.54-1.644 4.534-10.535 8.435-22.017 13.181-32.763 3.901-8.954 8.541-17.6979 13.075-26.547 1.581-3.055 3.585-5.8994 5.272-8.7437-5.483-5.162-9.068 0-13.919 2.4229 1.582-5.8993-1.687-6.9528-5.483-7.9009-3.796-.9481-7.276-2.2123-10.544-3.055-.949 0-2.004.7374-3.058 1.1587.738.9482 1.159 2.2123 2.108 2.6337 1.262.3944 2.581.5725 3.902.5268.11.8744.11 1.7592 0 2.6336-2.797 10.6042-7.321 20.6764-13.392 29.8129-.617 1.163-.804 2.506-.527 3.793 0 3.055 1.055 6.004 1.582 9.059-5.061 0-9.807-.842-14.552-1.053-2.537-.541-5.16-.541-7.697 0-7.276 3.266-14.235 7.058-21.089 10.534-1.055.633-1.582 2.423-2.215 3.793-.632 1.369-2.108 5.478-3.585 9.06 7.065 1.053 14.657 2.423 22.249 3.265 10.018 2.002 20.457 2.95 31.001 3.688ZM149.419 186.685c.896.627 1.643 1.442 2.19 2.388.546.947.879 2.001.973 3.09-.091 2.239.338 4.47 1.252 6.517.915 2.046 2.291 3.854 4.021 5.282.371.681.92 1.25 1.588 1.646.668.397 1.431.606 2.208.606.777 0 1.539-.209 2.207-.606.668-.396 1.217-.965 1.589-1.646l9.806-13.379h.949v9.375c0 3.161.844 4.425 4.429 2.423 3.585-2.001 6.748-5.162 9.806-4.74 3.058.421 5.8 4.424 8.541 6.953 2.742 2.528 6.433 7.795 10.545 9.481 4.112 1.685 6.748 6.847 8.963 11.061.885 1.806 2.268 3.321 3.987 4.366 1.719 1.045 3.702 1.578 5.714 1.534h5.167c1.792 0 3.69-1.37 3.901-4.109.633-8.744.949-17.593 2.32-26.336 2.109-13.485 4.639-26.969 7.486-40.348 1.898-9.06 2.215-8.744-7.064-9.797-9.28-1.054-16.45-2.213-24.675-3.371-8.224-1.159-17.82-2.213-26.677-3.477-5.409-1.126-11.022-.762-16.239 1.054-2.847 1.158-4.85 2.212-4.745 5.794.008 2.238-.421 4.457-1.265 6.531-1.476 3.582-4.64 1.37-7.065 1.686 0 0-1.582-2.107-1.793-3.371-.124-2.281-.124-4.567 0-6.848-1.265.948-1.792 1.054-1.898 1.37l-9.49 25.493c-1.007 1.956-1.23 4.222-.623 6.336.608 2.115 2 3.918 3.892 5.042ZM287.981 397.355c-.37-.44-.842-.785-1.374-1.005-.532-.22-1.11-.309-1.684-.259-6.959 1.581-13.813 3.266-21.089 5.162-7.275 1.896-15.184 4.53-22.671 6.953-1.054 0-1.792 1.37-2.636 2.107.56.829 1.234 1.574 2.004 2.212 3.796 2.634 7.592 5.268 11.493 7.796l10.545 6.426 1.16-.737c-.633-5.478-1.266-10.535-2.004-16.329h.844c6.643 8.322 13.286 16.645 20.035 24.862 1.363 1.264 2.846 2.393 4.428 3.371l2.953-4.425c.259-.758.471-1.532.632-2.317 1.055-4.952 2.426-9.587 8.331-11.167 2.741-.738 2.109-2.844.738-4.741-3.585-6.215-7.487-12.431-11.705-17.909ZM343.543 390.82c-15.705-.617-31.431.407-46.923 3.055-4.113.737-4.324 1.58-1.898 5.056 3.585 5.057 7.064 10.535 10.544 15.17 1.119 1.413 2.677 2.414 4.429 2.844 5.905.633 11.81.949 17.715 1.265 5.905.316 12.653-1.054 17.715 4.635 0-.948.843-1.37.843-1.791v-27.811c-.169-.575-.48-1.097-.904-1.52-.423-.424-.946-.734-1.521-.903ZM346.393 321.199c0-5.057 0-5.162-5.061-5.057-19.613 0-39.121.843-58.628 1.475-7.908 0-15.711 1.264-23.62 1.791-2.741 0-2.952 1.475-2.109 3.687 1.793 4.846 3.164 9.902 5.378 14.538 8.119 16.75 16.555 33.394 24.991 49.934.527.59 1.179 1.057 1.908 1.366.729.31 1.518.455 2.309.425 6.222-.632 12.443-2.002 18.664-2.318 10.545-.737 21.089-1.054 31.634-1.264 3.163 0 4.112-1.159 4.007-4.214v-30.55l.527-29.813ZM346.392 239.885c0-2.845-.738-4.53-4.007-4.109-.913.051-1.828.051-2.741 0h-92.265c-1.513.305-2.948.915-4.218 1.791.844 1.58 1.265 3.792 2.636 4.635 4.113 2.845 8.541 5.162 13.286 7.796-.891 1.559-1.914 3.039-3.058 4.424-1.791 1.94-3.143 4.242-3.962 6.751-.819 2.509-1.086 5.166-.783 7.787.12 3.243-.568 6.465-2.003 9.376-1.609 3.274-1.947 7.027-.949 10.535 1.793 7.479 3.796 14.853 5.378 22.333.738 3.371 2.53 3.792 5.483 3.476 11.599-.948 23.303-2.317 35.008-2.633h47.766c3.586 0 4.535-1.37 4.429-4.741v-38.135c0-10.113-.105-19.7 0-29.286ZM342.911 121.271c-3.796 0-5.589 1.475-5.378 5.478.211 4.004 4.218 2.529 6.538 3.266 0 0 2.003-2.212 3.058-3.476-.739-4.951-.949-5.268-4.218-5.268ZM358.305 139.477s1.476 1.053 2.32 1.686c0-3.266 2.214-7.164 1.054-9.587-1.159-2.423-5.377-4.635-8.224-6.847l-1.687.948c.738 2.001.949 4.53 2.319 5.899 1.371 1.37 4.535 4.425 4.218 7.901ZM356.836 311.282h10.545c3.374 0 3.48-1.159 2.742-3.687-2.004-7.058-4.113-14.222-6.011-21.07-1.289-3.866-2.173-7.855-2.636-11.904-.19-4.316.2-8.639 1.16-12.852 1.898-9.165-6.327-13.379-8.541-20.542h-1.687v65.314c-.527 3.582.949 5.057 4.428 4.741ZM355.987 385.792c8.647 0 17.293 0 25.834.632s14.657 1.685 21.933 2.844c3.374 0 5.905 0 7.697-3.476 5.694-11.483 12.021-22.65 17.504-34.238 4.218-9.06 7.382-18.646 10.545-28.022.949-2.634 1.054-4.741-2.742-4.846-10.544 0-21.721-.843-32.582-1.053-1.911.18-3.77.716-5.483 1.58l-24.78 9.586c-.527-2.949-.844-5.583-1.266-8.111-.421-2.529-1.476-4.846-5.166-4.636-3.827.264-7.667.264-11.494 0-2.847 0-4.112.948-4.007 3.898v61.838c-.105 2.95 1.371 3.898 4.007 4.004ZM396.802 392.94l-40.28-2.212c-2.426 0-4.218 0-4.218 3.265v30.656c0 .948 1.581 2.844 2.214 2.739 7.323-.066 14.534-1.795 21.089-5.057 4.323-2.739 7.698-7.901 14.024-6.742.528 0 1.371-.737 1.793-1.369 4.64-6.216 9.174-12.536 14.446-19.911-3.691-.526-6.432-1.159-9.068-1.369ZM458.691 409.499c-1.146-1.009-2.423-1.86-3.796-2.528-14.024-3.687-28.049-7.374-42.178-10.534-.696-.081-1.401.001-2.059.239-.659.238-1.253.624-1.737 1.13-4.534 6.426-8.963 12.958-13.708 20.016 1.047.735 2.138 1.403 3.269 2.001 9.173 3.371 18.347 6.743 27.521 9.903 1.13.201 2.295-.025 3.269-.632 8.857-5.478 17.715-10.535 26.467-16.54 1.074-.927 2.062-1.949 2.952-3.055Z"
        fill="#fff"
      />
      <path
        d="M349.922 0C170.967 0 25 104.714 25 233.447S170.545 467 349.5 467 674 362.286 674 233.447C674 104.609 528.876 0 349.922 0Zm-95.485 450.566c2.846-2.739 5.691-5.478 8.747-8.112.876-.617 1.575-1.454 2.025-2.427.45-.972.636-2.046.54-3.113-.096-1.068-.471-2.091-1.088-2.967-.616-.877-1.453-1.576-2.425-2.027-9.38-6.11-18.76-12.22-28.35-18.12-.91-.416-1.898-.632-2.899-.632-1 0-1.989.216-2.898.632-9.801 4.951-19.392 10.535-29.088 15.381-1.581.842-3.267 1.896-5.059 3.055l-5.796-2.318c8.01-4.53 15.809-9.586 23.818-14.116 3.785-1.91 7.693-3.564 11.699-4.952 1.686-.737 3.478-1.474 1.054-3.581-5.797-4.952-11.91-9.587-17.495-14.854-8.748-8.217-17.074-16.856-25.61-25.389-2.124-2.161-4.03-4.525-5.692-7.058-5.058-7.479-10.539-15.17-15.176-22.649-1.232-1.344-2.61-2.546-4.11-3.582l-15.282 2.95c-10.539 1.896-20.34 3.476-30.353 5.794-10.012 2.317-21.0779 5.688-32.4602 8.533l-1.7916.737-3.3726-4.319c3.1617-.737 6.2182-1.686 9.3799-2.528 13.3847-3.161 26.6635-6.426 40.0485-9.376 9.064-2.107 18.338-3.687 27.402-5.689 4.953-1.053 5.059-1.475 2.846-6.005-6.83-12.65-12.069-26.096-15.598-40.031-4.022-12.83-6.187-26.168-6.429-39.61.109-1.016.109-2.04 0-3.055 0-4.109-2.53-4.952-6.324-4.846H31.4289v-2.318c-.0526-.912-.0526-1.827 0-2.739h92.0061c7.062 0 7.905-.843 8.01-8.112v-3.897c0-4.741.738-9.482 1.476-14.117.737-4.635 0-7.69-3.689-9.902-5.586-3.055-11.066-6.11-16.757-9.06-.979-.371-1.803-1.063-2.339-1.962s-.752-1.952-.612-2.989v-8.849h-1.792c-1.475 4.951-2.845 9.902-4.321 14.853h-.843v-54.78c0-2.212 0-4.424-2.6347-5.056-8.7475-2.213-17.6004-4.32-26.3479-6.216l3.2671-4.108c6.8505 1.685 13.0686 3.371 19.1813 4.74 6.1122 1.37 6.7452 1.264 8.6422-5.478v-1.053c4.11-8.744 8.22-17.4876 12.541-26.126 1.057-2.247 2.649-4.2004 4.638-5.6887 3.018-2.1229 6.272-3.8904 9.696-5.2673 1.761-.6033 3.303-1.7169 4.429-3.1989 1.126-1.4821 1.785-3.2656 1.894-5.1235.632-4.0032 2.213-6.2154 6.64-5.8994 1.264 0 3.478-1.0534 3.689-1.8962.161-1.4.161-2.8139 0-4.2139 2.74-1.6855 5.585-3.2657 8.536-4.8459 2.951-1.5802 6.956-1.4748 10.539-2.423.494-.1001.962-.2973 1.378-.58.416-.2828.772-.6456 1.047-1.0672.275-.4215.463-.8935.553-1.3884.09-.4949.081-1.0029-.027-1.4943 13.322-6.4216 27.011-12.05 40.998-16.8554h4.637c9.696 0 9.696 0 12.331 9.2705.58 1.4787 1.248 2.921 2.002 4.3192l1.475-.6321c-1.159-4.5299-2.318-9.0597-3.372-13.5896-.239-1.0036-.165-2.0561.212-3.0165.376-.9603 1.038-1.7825 1.896-2.3562l4.215-1.1588c7.483-.9481 7.799 0 10.54 7.6903-.048.5256-.048 1.0545 0 1.5802 1.37 2.2122 0 3.8978-1.16 5.5833-1.159 1.6855-4.848 5.5834-7.166 8.4277-.383.9015-.598 1.8656-.633 2.8444 1.16 0 2.635.8428 3.267 0 4.743-3.2658 10.54-5.162 12.437-11.9042.843-3.5817 4.426-5.6887 6.534-4.3192 4.742 3.1604 7.377-.5267 10.539-2.0016l47.848-22.33336c6.007 0 12.12-.7374 18.232-.84274-7.24 1.84244-14.296 4.3462-21.078 7.4796 2.21 2.0248 4.533 3.9241 6.956 5.6887.843.6321 2.951 1.1588 3.478.632 4.005-4.2138 7.799-8.6384 11.698-12.95756V6.7422h12.963c9.696 0 19.287-.00002 28.772 1.05344h1.265c13.279 5.79406 26.664 11.58806 39.838 17.48746 2.845 1.2642 3.899.6321 4.216-2.2122.316-2.8444.843-3.7925 1.264-6.1101 3.478 2.4229 6.218 4.6352 9.275 6.3208 2.031 1.1041 4.332 1.6151 6.639 1.4748 4.039-.4974 8.049-1.2007 12.015-2.1069 2.529 0 2.846-1.3695 2.002-3.4764 22.735 5.6529 44.893 13.4119 66.186 23.1761l-15.703 2.8444c-.637.0115-1.263.1672-1.831.4554-.568.2881-1.063.7011-1.449 1.208-.385.5069-.651 1.0945-.776 1.7187-.126.6242-.108 1.2687.051 1.8852.843 6.1101 1.792 11.9041 8.958 14.2217 2.416 1.0517 4.713 2.3584 6.851 3.8978.948 0 2.213.9482 2.951.6321 2.536-1.1485 5.327-1.6166 8.1-1.358 2.772.2586 5.429 1.235 7.708 2.8329 5.609 2.9847 11.062 6.2547 16.336 9.7972 5.164 3.7924 9.696 8.4276 15.282 13.3789l-9.907.6321v1.1588c4.637 10.5346 9.169 20.1216 14.017 30.1286 0 .843 2.424 1.265 3.689 1.37 1.295-.178 2.567-.496 3.794-.948 2.108 0 2.635-1.054 1.791-3.161-1.347-4.552-2.966-9.019-4.847-13.379-.725-1.073-1.028-2.374-.853-3.657.175-1.282.816-2.455 1.801-3.295 2.788-1.466 5.918-2.157 9.064-2.002.843 0 1.686 3.371 2.529 5.162 1.792 4.109 0 10.535 7.272 10.535 0 1.896 0 3.371-.527 4.846 1.686 0 3.267 0 4.953-.527l12.015-2.528 9.801-2.318c1.371 1.58 2.53 3.16 3.795 4.74-.515-.161-1.067-.161-1.581 0l-26.454 5.9c-3.688.737-6.428 2.001-7.272 6.11-.766 3.04-1.716 6.03-2.845 8.954l-2.846-8.217c-.068-.53-.267-1.036-.577-1.472-.31-.436-.723-.789-1.202-1.029-.478-.239-1.009-.357-1.544-.343-.535.013-1.059.158-1.525.421l-3.372 1.054c-2.319.737-2.319 1.791-.632 3.371 1.686 1.58 2.95 2.318 3.161 3.792 1.581 8.744 2.74 17.593 4.216 27.285-2.213-1.58-3.583-2.739-5.164-3.687-1.581-.948-3.057-1.053-3.478 1.37-.349 2.882-.912 5.734-1.686 8.533-.685 1.861-.746 3.894-.176 5.794.57 1.899 1.741 3.563 3.337 4.74 7.378 7.796 7.167 7.901 3.689 17.909v1.896c-1.37 3.266-2.635 6.532-4.216 10.535-2.529-2.212-4.215-3.898-6.218-5.373-1.126-.643-2.33-1.139-3.583-1.475v4.32c4.321 5.899 8.958 11.588 13.49 17.276h1.37c-2.424-10.534 6.85-13.8 11.804-21.069 2.845 3.793 5.059 7.164 7.693 10.535 2.635 3.371 4.321 5.899 1.16 9.692-.633.632 0 2.107 0 3.16s2.529 0 3.161-.632c4.111-4.214 9.38-3.687 14.966-4.214 0 5.267 3.9 5.689 8.221 5.583h38.573c.96.138 1.937-.088 2.74-.632v6.216c-.784-.505-1.702-.762-2.635-.738h-38.573c-1.885.157-3.664.935-5.059 2.213-5.375 4.846-10.539 10.534-16.335 15.486-.522-1.473-.91-2.989-1.16-4.53v-7.901c0-2.634.949-5.057-2.424-5.373-1.469-.479-3.066-.375-4.459.292-1.394.667-2.476 1.845-3.024 3.29-1.58 3.687-3.899 7.058-6.218 11.272-1.099-4.194-2.472-8.311-4.11-12.326-.6-.765-1.368-1.382-2.246-1.803-.877-.42-1.84-.632-2.813-.62-.829.1-1.63.367-2.354.783-.725.416-1.358.974-1.861 1.64-2.635 3.266 0 6.637.527 9.798 1.791 6.636 4.004 13.273 6.007 19.91-4.321-7.058-8.537-14.116-13.49-22.123-.738 2.739-1.37 4.425-1.686 6.11-.588 6.12-1.503 12.203-2.741 18.225-4.054 19.159-10.907 37.617-20.34 54.78 0 .632 0 2.739.843 2.845 3.267.842 6.534 1.369 9.696 1.896 3.162.527 5.902 1.896 7.588.843 1.686-1.054 1.476-4.741 2.424-7.164 3.689-9.481 7.483-18.857 11.383-28.233.53-1.193 1.463-2.162 2.634-2.739 6.218-2.423 12.542-4.53 18.76-7.058.779-.459 1.46-1.068 2.002-1.791.543-.723.937-1.546 1.16-2.423.843-6.11.632-6.215 6.955-6.11 2.39.374 4.835.166 7.128-.604s4.367-2.08 6.046-3.82c4.638-4.846 7.378-4.32 12.964 0 1.58 1.264 2.423 1.053 4.321 0 2.4-1.356 5.159-1.945 7.904-1.686 1.265 0 3.162 2.528 3.372 4.109 2.776 9.3 2.255 19.272-1.475 28.232-.369 1.094-.369 2.278 0 3.371.527 2.845 1.265 5.795 2.108 9.06-7.174 13.502-15.797 26.183-25.716 37.82-.416-.312-.899-.523-1.41-.617-.511-.095-1.038-.069-1.538.074-.5.142-.96.399-1.344.749-.385.35-.683.784-.872 1.268-1.115 2.416-2.532 4.682-4.216 6.743-1.344 1.424-3.06 2.445-4.953 2.949-7.799 1.791-11.804-3.265-15.703-8.954.843-1.054 1.791-1.896 2.635-2.95 3.056-3.687 2.002-6.531-2.741-7.585-6.639-1.475-13.279-3.055-20.024-4.319-.776-.093-1.563-.019-2.309.217-.745.236-1.431.629-2.012 1.152-1.8 1.539-3.426 3.27-4.848 5.162l-.949-.632c.267-1.71.267-3.451 0-5.162 0-1.264-1.475-3.055-2.529-3.265-5.48-1.37-11.066-2.318-16.652-3.477-1.328-.377-2.749-.24-3.98.385-1.231.625-2.181 1.692-2.659 2.986-6.358 11.475-14.149 22.094-23.187 31.604-6.112 6.321-12.12 12.642-18.443 18.647-6.323 6.004-13.279 12.43-20.235 18.224-3.583 3.055-3.9 3.477 0 5.794l1.475.633 34.463 18.857-5.48 2.317c-2.237-1.716-4.597-3.265-7.061-4.635-10.539-5.267-20.235-10.535-30.458-15.275-.611-.283-1.277-.43-1.95-.43-.674 0-1.339.147-1.95.43-5.059 3.371-9.801 7.163-14.86 10.534-5.059 3.371-9.907 6.11-15.176 9.376 2.634 3.161 5.375 4.319 8.747 2.002 1.723-1.63 4.004-2.539 6.376-2.539 2.372 0 4.654.909 6.376 2.539 4.427 3.371 6.64 6.004 4.216 11.482v.843c-66.973 17.223-137.075 18.342-204.564 3.266l-1.476.316ZM679.598 121.152c-3.842 0-7.597-1.14-10.79-3.274-3.193-2.135-5.68-5.169-7.145-8.717-1.465-3.548-1.843-7.451-1.086-11.2135.757-3.7629 2.615-7.2165 5.339-9.9231 2.724-2.7067 6.191-4.5444 9.962-5.2804 3.77-.736 7.675-.3371 11.218 1.1462s6.566 3.9841 8.686 7.1856c2.119 3.2015 3.239 6.9594 3.218 10.7972-.028 5.123-2.084 10.026-5.72 13.639-3.636 3.612-8.555 5.64-13.682 5.64Zm0-35.7127c-3.258-.0208-6.448.9252-9.167 2.7183-2.719 1.7931-4.844 4.3524-6.105 7.3534-1.262 3.001-1.602 6.309-.98 9.503.623 3.195 2.181 6.133 4.478 8.442 2.296 2.309 5.227 3.885 8.42 4.527 3.194.643 6.507.324 9.519-.917 3.012-1.24 5.587-3.347 7.399-6.052 1.812-2.704 2.78-5.886 2.78-9.141.014-2.1528-.399-4.2874-1.214-6.2807-.815-1.9933-2.017-3.8058-3.536-5.3332-1.519-1.5275-3.325-2.7396-5.315-3.5668-1.99-.8272-4.124-1.253-6.279-1.253Z"
        fill="#fff"
      />
      <path
        d="M673.384 93.2323h7.698c1.434-.1341 2.866.28 4.007 1.1588.478.4137.852.9349 1.091 1.5209.238.586.334 1.22.279 1.8501.031.6277-.076 1.2546-.312 1.8368-.237.5821-.598 1.1061-1.058 1.5341h-.844c.491.319.893.757 1.169 1.272.277.516.419 1.093.413 1.678v3.792c-.069.384-.069.776 0 1.159.241.068.496.068.738 0h-2.847c-.031-.35-.031-.703 0-1.053V104.82c.056-.806-.209-1.601-.738-2.212-.678-.471-1.497-.694-2.32-.632h-5.378v7.164h-2.214l.316-15.9077Zm2.214 7.4797h5.589c.792.085 1.587-.141 2.214-.632.268-.2995.471-.65.598-1.0304.126-.3804.174-.7826.141-1.1821.046-.3842.004-.774-.124-1.1393-.128-.3653-.338-.6963-.615-.9677-.709-.4869-1.567-.7104-2.425-.632h-5.378v5.5835Z"
        fill="#fff"
      />
    </svg>
  );
});
