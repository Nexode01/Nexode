<template>
  <div class="home-page-hero-visual" aria-hidden="true">
    <div class="hp-phone">
      <div class="hp-screen">
        <div class="hp-app">
          <!-- Status bar -->
          <div class="hp-status">
            <span class="hp-time">23:53 <i class="hp-diamond"></i></span>
            <span class="hp-status-icons">
              <svg viewBox="0 0 24 24" class="hp-si" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8 3h3l1 3h3"/><path d="M4 7h16v11H4z" opacity="0"/><rect x="6" y="8" width="12" height="11" rx="1.6"/></svg>
              <svg viewBox="0 0 24 24" class="hp-si" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M7 7l5 10 5-10-5 2z"/></svg>
              <svg viewBox="0 0 24 18" class="hp-si" fill="currentColor"><path d="M12 15.5l-1.7-1.8a2.4 2.4 0 0 1 3.4 0L12 15.5Zm-3.2-3.3a6.3 6.3 0 0 1 6.4 0l-1.1 1.1a4.8 4.8 0 0 0-4.2 0l-1.1-1.1Zm-2.4-2.5a9.9 9.9 0 0 1 11.2 0l-1.1 1.2a8.3 8.3 0 0 0-9 0L6.4 9.7Zm-2.4-2.4a13.4 13.4 0 0 1 16 0l-1.1 1.2a11.8 11.8 0 0 0-13.8 0L4 7.3Z"/></svg>
              <svg viewBox="0 0 24 24" class="hp-si" fill="currentColor"><path d="M12 2l2 8h-4l2-8zM10 12h4l-1.2 5h-1.6L10 12z" opacity="0"/><path d="M21 15.5 14 8.6V4.5h1.4V3H8.6v1.5H10v4.1L3 15.5V17h7.2v4l-1.5 1.5v.5h6.6v-.5L13.8 21v-4H21z"/></svg>
              <svg viewBox="0 0 30 14" class="hp-si hp-battery"><rect x="0.6" y="0.6" width="25" height="12.8" rx="3.4" fill="none" stroke="currentColor" stroke-width="1.1"/><rect x="2.2" y="2.2" width="7" height="9.6" rx="1.6" fill="currentColor"/><text x="11" y="10.6" font-size="8" font-weight="700" fill="currentColor">31</text><rect x="27" y="4.6" width="1.8" height="4.8" rx="0.9" fill="currentColor"/></svg>
            </span>
          </div>

          <!-- Panels -->
          <div class="hp-body">
            <!-- ============ EDITOR ============ -->
            <div class="hp-panel hp-editor">
              <div class="hp-toolbar">
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>
                </button>
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6.5 10h1M9.5 10h1M12.5 10h1M15.5 10h1M6.5 13.5h11"/></svg>
                </button>
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l4.5 4.5"/></svg>
                </button>
                <span class="hp-toolbar-spacer"></span>
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="6" height="6" rx="1.4"/><rect x="15" y="15" width="6" height="6" rx="1.4"/><path d="M9 6h4a2 2 0 0 1 2 2v7"/></svg>
                </button>
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.6 6H14a2 2 0 0 1 2 2v7.4"/></svg>
                </button>
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>
                </button>
                <button class="hp-cbtn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>
                </button>
              </div>
              <div class="hp-tabstrip">
                <span class="hp-filetab active">
                  <span class="hp-py">py</span>benchmark.py
                  <b class="hp-mod">M</b>
                  <i class="hp-x">×</i>
                </span>
                <button class="hp-cbtn hp-cbtn-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg>
                </button>
              </div>
              <div class="hp-breadcrumb"><span class="hp-py">py</span>benchmark.py</div>
              <div class="hp-code">
                <div class="hp-line"><span class="hp-ln">92</span><span class="hp-src">print(<span class="s">"--sizes must be a comma-separated list"</span>)</span></div>
                <div class="hp-line"><span class="hp-ln">93</span><span class="hp-src"><span class="k">return</span> <span class="n">2</span></span></div>
                <div class="hp-line"><span class="hp-ln">94</span><span class="hp-src"> </span></div>
                <div class="hp-line"><span class="hp-ln">95</span><span class="hp-src">alg_map = {name: <span class="k">ALL_ALGORITHMS</span>[name] <span class="k">for</span> name <span class="k">in</span> names}</span></div>
                <div class="hp-line"><span class="hp-ln">96</span><span class="hp-src"> </span></div>
                <div class="hp-line"><span class="hp-ln">97</span><span class="hp-src">print(<span class="s">f"Benchmarking {len(algorithms)} algorithms"</span>)</span></div>
                <div class="hp-line"><span class="hp-ln">98</span><span class="hp-src">print(<span class="s">f"Patterns: {patterns} | repeats: {args.repeats}"</span>)</span></div>
                <div class="hp-line"><span class="hp-ln">99</span><span class="hp-src"> </span></div>
                <div class="hp-line hp-fold"><span class="hp-ln">100</span><span class="hp-src"><span class="k">if</span> <span class="k">not</span> sizes:</span></div>
                <div class="hp-line hp-fold"><span class="hp-ln">101</span><span class="hp-src">&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="s">"No sizes provided; nothing to run."</span>)</span></div>
                <div class="hp-line hp-fold"><span class="hp-ln">102</span><span class="hp-src">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="n">0</span></span></div>
                <div class="hp-line hp-fold"><span class="hp-ln">103</span><span class="hp-src"> </span></div>
                <div class="hp-line"><span class="hp-ln">104</span><span class="hp-src">results = benchmark_algorithms(</span></div>
                <div class="hp-line"><span class="hp-ln">105</span><span class="hp-src">&nbsp;&nbsp;&nbsp;&nbsp;sizes=sizes,</span></div>
                <div class="hp-line"><span class="hp-ln">106</span><span class="hp-src">&nbsp;&nbsp;&nbsp;&nbsp;patterns=patterns,</span></div>
                <div class="hp-line"><span class="hp-ln">107</span><span class="hp-src">&nbsp;&nbsp;&nbsp;&nbsp;algorithms=alg_map,</span></div>
                <div class="hp-line"><span class="hp-ln">108</span><span class="hp-src">&nbsp;&nbsp;&nbsp;&nbsp;repeats=args.repeats,<span class="hp-caret"></span></span></div>
                <div class="hp-line"><span class="hp-ln">109</span><span class="hp-src">)</span></div>
                <div class="hp-line"><span class="hp-ln">110</span><span class="hp-src"> </span></div>
              </div>
            </div>

            <!-- ============ TERMINAL ============ -->
            <div class="hp-panel hp-terminal">
              <div class="hp-termhead">
                <span class="hp-pill">SSH connected</span>
                <span class="hp-termhead-icons">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.7 5.1 5.1 1.7-5.1 1.7L12 16.6l-1.7-5.1L5.2 9.8l5.1-1.7L12 3z"/></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l4.5 4.5"/></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </span>
              </div>
              <div class="hp-tabstrip hp-bashtabs">
                <span class="hp-filetab">bash <i class="hp-x">×</i></span>
                <span class="hp-filetab active blue">bash <i class="hp-x">×</i></span>
              </div>
              <div class="hp-term">
                <div class="hp-tl">Processes: 560 total, 2 running, 558 sleepin</div>
                <div class="hp-tl">Load Avg: 1.52, 1.37, 1.34</div>
                <div class="hp-tl">CPU usage: 1.12% user, 1.50% sys, 97.36% idl</div>
                <div class="hp-tl">SharedLibs: 964M resident, 156M data, 124M l</div>
                <div class="hp-tl">PhysMem: 23G used (1958M wired, 1280M compre</div>
                <div class="hp-tl">Networks: packets: 84925803/47G in, 67990769</div>
                <div class="hp-tl">Disks: 17653460/593G read, 6034808/345G writ</div>
                <div class="hp-tl"> </div>
                <div class="hp-tl hp-thead"><span>PID</span><span>COMMAND</span><b>%CPU</b><span>TIME</span><span>#TH</span></div>
                <div class="hp-tl"><span>1012</span><span>WallpaperSon</span><span>5.1</span><span>03:55:52</span><span>29</span></div>
                <div class="hp-tl"><span>99835</span><span>top</span><span>4.9</span><span>00:00.33</span><span>1/1</span></div>
                <div class="hp-tl"><span>0</span><span>kernel_task</span><span>3.8</span><span>03:10:18</span><span>640/10</span></div>
                <div class="hp-tl"><span>177</span><span>WindowServer</span><span>3.5</span><span>04:27:07</span><span>19</span></div>
                <div class="hp-tl"><span>1041</span><span>VTDecoderXPC</span><span>2.2</span><span>99:19.87</span><span>7</span></div>
                <div class="hp-tl"><span>2858</span><span>Activity Mon</span><span>2.0</span><span>71:45.57</span><span>6</span></div>
                <div class="hp-tl"><span>1584</span><span>verge-mihomo</span><span>0.8</span><span>45:05.58</span><span>23</span></div>
                <div class="hp-tl"><span>147</span><span>launchservic</span><span>0.2</span><span>02:26.40</span><span>3</span></div>
                <div class="hp-tl"><span>98496</span><span>sshd-session</span><span>0.0</span><span>00:00.04</span><span>1</span></div>
                <div class="hp-tl"><span>98497</span><span>sftp-server</span><span>0.0</span><span>00:00.04</span><span>1</span><span class="hp-cursor"></span></div>
              </div>
              <div class="hp-fnrow">
                <span class="hp-fn primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/></svg>
                  Commands
                </span>
                <span class="hp-fn">Esc</span>
                <span class="hp-fn">Tab</span>
                <span class="hp-fn hp-fn-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H9a4 4 0 0 0-4 4v10"/><path d="M8 16l-3 3 3 3" transform="translate(0 -4)"/></svg></span>
                <span class="hp-fn hp-fn-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7v6a4 4 0 0 1-4 4H4"/><path d="M7 14l-3 3 3 3"/></svg></span>
                <span class="hp-fn hp-fn-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg></span>
              </div>
            </div>

            <!-- ============ AI AGENT ============ -->
            <div class="hp-panel hp-ai">
              <div class="hp-aihead">
                <button class="hp-cbtn hp-cbtn-plain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 6c-2-1.6-5-1.6-8 0v12c3-1.6 6-1.6 8 0 2-1.6 5-1.6 8 0V6c-3-1.6-6-1.6-8 0z"/><path d="M12 6v12"/></svg>
                </button>
                <span class="hp-model">deepseek-v4-flash
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
                <button class="hp-cbtn hp-cbtn-plain">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg>
                </button>
              </div>
              <div class="hp-chat">
                <div class="hp-bubble">run this project</div>
                <div class="hp-assistant">
                  <span class="hp-wand">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.7 5.1 5.1 1.7-5.1 1.7L12 16.6l-1.7-5.1L5.2 9.8l5.1-1.7L12 3z"/></svg>
                  </span>
                  I'll first inspect the workspace to understand what kind of project this is.
                </div>
                <div class="hp-plan">
                  <div class="hp-plan-head">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                    <b>Planning</b>
                    <span class="hp-plan-count">0/1</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>
                  </div>
                  <div class="hp-plan-body">
                    <span class="hp-dot"></span>
                    Tools will start only after you approve this plan.
                  </div>
                  <div class="hp-approval">
                    <b>Plan ready — approval required</b>
                    <div class="hp-approval-row">
                      <svg class="hp-warn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>
                      <span>Tools will start only after you approve this plan.</span>
                      <button class="hp-approve">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>
                        Approve this run
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hp-composer">
                <div class="hp-placeholder">Describe a task — read, edit, run commands</div>
                <div class="hp-composer-actions">
                  <span class="hp-cpill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>
                    Confirm
                  </span>
                  <span class="hp-cpill">Minimal
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                  <svg class="hp-composer-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  <svg class="hp-composer-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
                </div>
              </div>
              <div class="hp-strip">
                <span class="hp-strip-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>
                  run this project
                </span>
                <span class="hp-strip-right">Approval required
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom navigation -->
          <nav class="hp-nav">
            <span class="hp-nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>
              <b>Explore</b>
            </span>
            <span class="hp-nav-item hp-nav-active" style="--d:0s">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 7.5 4.5 12l4 4.5"/><path d="M15.5 7.5 19.5 12l-4 4.5"/></svg>
              <b>Editor</b>
            </span>
            <span class="hp-nav-item hp-nav-active" style="--d:10s">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.7L19.7 10.5l-5.8 1.8L12 18l-1.9-5.7L4.3 10.5l5.8-1.8L12 3z"/><path d="M19 15l.6 1.9 1.9.6-1.9.6L19 20l-.6-1.9-1.9-.6 1.9-.6L19 15z"/></svg>
              <b>AI</b>
            </span>
            <span class="hp-nav-item hp-nav-active" style="--d:5s">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M6.5 9.5l3 3-3 3"/><path d="M13 15.5h4"/></svg>
              <b>Terminal</b>
            </span>
            <span class="hp-nav-item">
              <span class="hp-bell">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"/><path d="M10.5 20a2 2 0 0 0 3 0"/></svg>
                <i class="hp-badge">14</i>
              </span>
              <b>Inbox</b>
            </span>
          </nav>
          <div class="hp-homebar"><span></span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page-hero-visual {
  display: none;
  position: relative;
  z-index: 1;
  justify-self: center;
  align-self: center;
  width: min(100%, 460px);
  animation: nimote-float 8s ease-in-out infinite;
}
.home-page-hero-visual::before {
  content: "";
  position: absolute;
  inset: -18% -22% -14% -22%;
  z-index: -1;
  background: radial-gradient(ellipse 58% 52% at 50% 46%, rgba(99, 102, 241, 0.34), transparent 66%),
    radial-gradient(ellipse 44% 42% at 76% 86%, rgba(139, 92, 246, 0.26), transparent 62%);
  filter: blur(8px);
  opacity: 0.9;
}
@media (min-width: 1025px) {
  .home-page-hero-visual { display: block; }
}

.hp-phone {
  position: relative;
  height: clamp(520px, 47vw, 680px);
  aspect-ratio: 1264 / 2780;
  margin: 0 auto;
  padding: 7px;
  border-radius: 38px;
  background: linear-gradient(155deg, #3a4056 0%, #141824 40%, #05060a 70%, #1b1f2c 100%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px 1px rgba(255, 255, 255, 0.05),
    0 0 0 1px rgba(148, 163, 184, 0.18),
    0 24px 56px rgba(8, 9, 10, 0.42),
    0 0 64px rgba(99, 102, 241, 0.16);
}
.hp-phone::after {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 31px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.07);
  pointer-events: none;
}
.hp-screen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 31px;
  background: #ffffff;
  container-type: size;
}

.hp-app {
  --accent: #4f46e5;
  --accent-soft: #eef2ff;
  --line: #e5e7eb;
  --ink: #111827;
  --ink2: #1f2937;
  --muted: #6b7280;
  --dim: #9ca3af;
  --amber: #b7791f;
  --green: #2ea043;
  --red: #dc2626;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  font-family: var(--vp-font-family-base);
  font-size: 3.4cqw;
  line-height: 1.35;
  color: var(--ink);
  background: #ffffff;
}

/* Status bar */
.hp-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2cqw 4.4cqw 1.2cqw;
  font-size: 3cqw;
  font-weight: 700;
}
.hp-time { display: inline-flex; align-items: center; gap: 1.2cqw; }
.hp-diamond {
  width: 1.8cqw;
  height: 1.8cqw;
  border: 0.5cqw solid var(--dim);
  transform: rotate(45deg);
  border-radius: 0.4cqw;
}
.hp-status-icons { display: flex; align-items: center; gap: 1.5cqw; color: #111827; }
.hp-si { height: 2.3cqw; width: auto; }
.hp-battery { height: 2.6cqw; }

/* Panel frame */
.hp-body { position: relative; flex: 1; min-height: 0; overflow: hidden; }
.hp-panel {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: #ffffff;
  opacity: 0;
  animation: hp-cycle 15s ease-in-out infinite;
}
.hp-panel:nth-child(1) { opacity: 1; }
.hp-panel:nth-child(1) { animation-delay: 0s; }
.hp-panel:nth-child(2) { animation-delay: 5s; }
.hp-panel:nth-child(3) { animation-delay: 10s; }

/* Shared small buttons */
.hp-cbtn {
  display: grid;
  place-items: center;
  width: 8.4cqw;
  height: 8.4cqw;
  flex: none;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #ececef;
  color: #3c4043;
}
.hp-cbtn svg { width: 4.4cqw; height: 4.4cqw; }
.hp-cbtn-sm { width: 6.6cqw; height: 6.6cqw; }
.hp-cbtn-sm svg { width: 3.6cqw; height: 3.6cqw; }
.hp-cbtn-plain { background: transparent; color: #6b7280; }

/* ============ EDITOR ============ */
.hp-toolbar {
  display: flex;
  align-items: center;
  gap: 2cqw;
  padding: 1.6cqw 3.6cqw;
  background: #f4f5f7;
}
.hp-toolbar-spacer { flex: 1; }
.hp-tabstrip {
  display: flex;
  align-items: center;
  gap: 1cqw;
  padding: 0 3cqw;
  background: #f4f5f7;
  border-bottom: 1px solid #e0e0e3;
}
.hp-filetab {
  display: inline-flex;
  align-items: center;
  gap: 1.2cqw;
  padding: 1.9cqw 1.4cqw 1.7cqw;
  font-size: 3cqw;
  color: var(--ink2);
  white-space: nowrap;
}
.hp-filetab.active { position: relative; font-weight: 600; }
.hp-filetab.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.4cqw;
  height: 0.9cqw;
  border-radius: 999px;
  background: var(--accent);
}
.hp-filetab.active.blue { color: #2563eb; }
.hp-filetab.active.blue::after { background: #2563eb; }
.hp-py {
  display: grid;
  place-items: center;
  width: 3.6cqw;
  height: 3.6cqw;
  border-radius: 0.9cqw;
  background: linear-gradient(135deg, #306998, #ffd43b);
  color: #fff;
  font-size: 1.9cqw;
  font-weight: 800;
  letter-spacing: -0.03em;
}
.hp-mod {
  color: var(--amber);
  font-size: 2.6cqw;
  font-weight: 800;
}
.hp-x { color: var(--muted); font-style: normal; font-size: 3cqw; }
.hp-tabstrip .hp-cbtn-sm { margin-left: auto; }
.hp-breadcrumb {
  display: flex;
  align-items: center;
  gap: 1.2cqw;
  padding: 1.7cqw 3.6cqw;
  background: #f4f5f7;
  border-bottom: 1px solid #e8e8ea;
  font-size: 2.9cqw;
  color: var(--ink2);
}
.hp-code {
  flex: 1;
  min-height: 0;
  padding: 1.6cqw 0;
  overflow: hidden;
  background: #f7f7f8;
}
.hp-line {
  display: flex;
  gap: 2.4cqw;
  padding: 0 3cqw 0 2.4cqw;
  font-family: var(--vp-font-family-mono);
  font-size: 3cqw;
  line-height: 1.9;
  white-space: pre;
}
.hp-ln {
  flex: none;
  width: 4cqw;
  text-align: right;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}
.hp-src { color: var(--ink); }
.hp-src .k { color: #7c3aed; }
.hp-src .s { color: #3f8f4f; }
.hp-src .n { color: var(--amber); }
.hp-fold .hp-ln { box-shadow: inset -0.5cqw 0 0 var(--green); }
.hp-caret {
  display: inline-block;
  width: 0.9cqw;
  height: 2.7cqw;
  vertical-align: -0.5cqw;
  margin-left: 0.4cqw;
  background: var(--accent);
  animation: hp-blink 1.1s steps(1) infinite;
}

/* ============ TERMINAL ============ */
.hp-termhead {
  display: flex;
  align-items: center;
  gap: 2cqw;
  padding: 1.8cqw 3.6cqw;
  background: #ffffff;
}
.hp-pill {
  padding: 1cqw 2.6cqw;
  border-radius: 999px;
  background: #f2f2f4;
  color: #8a8a8e;
  font-size: 2.7cqw;
  font-weight: 600;
}
.hp-termhead-icons {
  display: flex;
  align-items: center;
  gap: 2.6cqw;
  margin-left: auto;
  color: #6e6e73;
}
.hp-termhead-icons svg { width: 4.2cqw; height: 4.2cqw; }
.hp-bashtabs { border-bottom: 1px solid #e0e0e3; }
.hp-term {
  flex: 1;
  min-height: 0;
  padding: 2.4cqw 3.4cqw;
  overflow: hidden;
  background: #ffffff;
  font-family: var(--vp-font-family-mono);
  font-size: 2.85cqw;
  line-height: 1.72;
  white-space: pre;
  color: #1a1a1a;
}
.hp-tl { display: flex; gap: 2.2cqw; }
.hp-thead b {
  padding: 0 0.8cqw;
  border-radius: 0.6cqw;
  background: #1c1c1e;
  color: #fff;
  font-weight: 700;
}
.hp-thead span:first-child { min-width: 8cqw; }
.hp-thead span:nth-child(2) { min-width: 20cqw; }
.hp-thead span:nth-child(3) { min-width: 7cqw; }
.hp-thead span:nth-child(4) { min-width: 13cqw; }
.hp-tl span:first-child { min-width: 8cqw; }
.hp-tl span:nth-child(2) { min-width: 20cqw; }
.hp-tl span:nth-child(3) { min-width: 7cqw; }
.hp-tl span:nth-child(4) { min-width: 13cqw; }
.hp-cursor {
  display: inline-block;
  width: 1.1cqw;
  height: 2.7cqw;
  vertical-align: -0.4cqw;
  background: #0a84ff;
  animation: hp-blink 1.1s steps(1) infinite;
}
.hp-fnrow {
  display: flex;
  align-items: center;
  gap: 1.8cqw;
  padding: 1.8cqw 3cqw;
  border-top: 1px solid var(--line);
  background: #fafafb;
  overflow: hidden;
}
.hp-fn {
  display: inline-flex;
  align-items: center;
  gap: 1cqw;
  flex: none;
  padding: 1.4cqw 2.6cqw;
  border-radius: 999px;
  background: #ececf2;
  color: #1c1c1e;
  font-size: 2.75cqw;
  font-weight: 600;
  white-space: nowrap;
}
.hp-fn svg { width: 3.4cqw; height: 3.4cqw; }
.hp-fn.primary { background: #e9eafb; color: #3b5bdb; }
.hp-fn-icon { padding: 1.4cqw 2cqw; }

/* ============ AI ============ */
.hp-aihead {
  display: flex;
  align-items: center;
  gap: 2cqw;
  padding: 1.6cqw 3.4cqw;
  border-bottom: 1px solid var(--line);
  background: #ffffff;
}
.hp-model {
  display: inline-flex;
  align-items: center;
  gap: 1cqw;
  margin: 0 auto;
  font-size: 3.1cqw;
  font-weight: 600;
  color: var(--muted);
}
.hp-model svg { width: 3.2cqw; height: 3.2cqw; }
.hp-chat {
  flex: 1;
  min-height: 0;
  padding: 3cqw 3.4cqw;
  overflow: hidden;
}
.hp-bubble {
  margin-left: auto;
  width: fit-content;
  max-width: 80%;
  padding: 2.2cqw 2.8cqw;
  border-radius: 3cqw 3cqw 0.8cqw 3cqw;
  background: #eef0f8;
  color: var(--ink);
  font-size: 3cqw;
}
.hp-assistant {
  display: flex;
  gap: 1.8cqw;
  margin-top: 2.6cqw;
  color: var(--dim);
  font-size: 3cqw;
  line-height: 1.5;
}
.hp-wand {
  display: grid;
  place-items: center;
  width: 4.4cqw;
  height: 4.4cqw;
  flex: none;
  color: #7c6fe0;
}
.hp-wand svg { width: 4.4cqw; height: 4.4cqw; }
.hp-plan {
  margin-top: 2.8cqw;
  border: 1px solid #eceef4;
  border-radius: 2.8cqw;
  background: #f7f8fc;
  overflow: hidden;
}
.hp-plan-head {
  display: flex;
  align-items: center;
  gap: 1.8cqw;
  padding: 2.2cqw 2.8cqw;
  font-size: 2.8cqw;
}
.hp-plan-head svg { width: 3.6cqw; height: 3.6cqw; color: var(--muted); }
.hp-plan-head b { font-size: 3.1cqw; }
.hp-plan-count { margin-left: auto; color: var(--dim); font-size: 2.7cqw; }
.hp-plan-body {
  display: flex;
  gap: 1.8cqw;
  padding: 0 2.8cqw 2.2cqw;
  color: var(--ink2);
  font-size: 2.9cqw;
  line-height: 1.45;
}
.hp-dot {
  width: 2.6cqw;
  height: 2.6cqw;
  flex: none;
  margin-top: 0.5cqw;
  border: 0.5cqw solid #8b87e8;
  border-radius: 50%;
}
.hp-approval {
  margin: 0 2.2cqw 2.2cqw;
  padding: 2.4cqw;
  border-radius: 2.4cqw;
  background: #f1e8d6;
}
.hp-approval > b { font-size: 3cqw; }
.hp-approval-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4cqw;
  margin-top: 1.6cqw;
  color: var(--muted);
  font-size: 2.7cqw;
  line-height: 1.4;
}
.hp-warn { width: 3.4cqw; height: 3.4cqw; flex: none; color: #c99a3b; }
.hp-approve {
  display: inline-flex;
  align-items: center;
  gap: 1.2cqw;
  margin-left: auto;
  padding: 1.4cqw 2.4cqw;
  border: 0;
  border-radius: 999px;
  background: #6366f1;
  color: #fff;
  font-size: 2.7cqw;
  font-weight: 700;
  white-space: nowrap;
}
.hp-approve svg { width: 3.4cqw; height: 3.4cqw; }
.hp-composer {
  margin: 0 3.4cqw 2.4cqw;
  padding: 2.4cqw 2.8cqw;
  border-radius: 3.4cqw;
  background: #f3f4f8;
}
.hp-placeholder { color: var(--dim); font-size: 2.9cqw; }
.hp-composer-actions {
  display: flex;
  align-items: center;
  gap: 1.8cqw;
  margin-top: 2.2cqw;
}
.hp-cpill {
  display: inline-flex;
  align-items: center;
  gap: 1cqw;
  padding: 1.2cqw 2.2cqw;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: var(--accent);
  font-size: 2.6cqw;
  font-weight: 600;
}
.hp-cpill svg { width: 3.2cqw; height: 3.2cqw; }
.hp-cpill + .hp-cpill { color: #374151; }
.hp-composer-ic { width: 4.2cqw; height: 4.2cqw; color: var(--muted); }
.hp-composer-ic:last-child { margin-left: auto; }
.hp-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8cqw 3.4cqw;
  border-top: 1px solid var(--line);
  background: #fff;
  font-size: 2.8cqw;
}
.hp-strip-left {
  display: inline-flex;
  align-items: center;
  gap: 1.4cqw;
  color: var(--ink);
  font-weight: 600;
}
.hp-strip-left svg { width: 3.6cqw; height: 3.6cqw; color: var(--red); }
.hp-strip-right {
  display: inline-flex;
  align-items: center;
  gap: 0.6cqw;
  color: var(--red);
  font-weight: 600;
}
.hp-strip-right svg { width: 3.2cqw; height: 3.2cqw; }

/* Bottom navigation */
.hp-nav {
  display: flex;
  align-items: stretch;
  border-top: 1px solid var(--line);
  background: #ffffff;
  padding: 1.4cqw 1.4cqw 0;
}
.hp-nav-item {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8cqw;
  padding: 1.2cqw 0 1.8cqw;
  color: var(--dim);
  font-size: 2.55cqw;
}
.hp-nav-item svg { width: 4.6cqw; height: 4.6cqw; }
.hp-nav-item b { font-weight: 600; }
.hp-nav-active { animation: hp-navcolor 15s ease-in-out infinite; animation-delay: var(--d); }
.hp-nav-active::after {
  content: "";
  position: absolute;
  bottom: 0.4cqw;
  width: 5cqw;
  height: 0.8cqw;
  border-radius: 999px;
  background: var(--accent);
  opacity: 0;
  animation: hp-navbar 15s ease-in-out infinite;
  animation-delay: var(--d);
}
.hp-bell { position: relative; display: grid; place-items: center; }
.hp-badge {
  position: absolute;
  top: -1.2cqw;
  right: -2.2cqw;
  min-width: 3.2cqw;
  padding: 0 0.8cqw;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-size: 2.1cqw;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2cqw;
  text-align: center;
}
.hp-homebar {
  display: grid;
  place-items: center;
  padding: 1.2cqw 0 1.6cqw;
  background: #fff;
}
.hp-homebar span {
  width: 32%;
  height: 1.2cqw;
  border-radius: 999px;
  background: #d1d5db;
}

@keyframes hp-cycle {
  0% { opacity: 0; }
  3% { opacity: 1; }
  30% { opacity: 1; }
  33% { opacity: 0; }
  100% { opacity: 0; }
}
@keyframes hp-navcolor {
  0%, 30% { color: var(--accent); }
  33%, 100% { color: var(--dim); }
}
@keyframes hp-navbar {
  0%, 30% { opacity: 1; }
  33%, 100% { opacity: 0; }
}
@keyframes hp-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .home-page-hero-visual {
    animation: none !important;
  }
  .hp-panel,
  .hp-nav-active,
  .hp-nav-active::after,
  .hp-caret,
  .hp-cursor {
    animation: none !important;
  }
  .hp-panel:first-child { opacity: 1; }
  .hp-nav-active { color: var(--dim); }
  .hp-nav-active:nth-child(2) { color: var(--accent); }
  .hp-nav-active:nth-child(2)::after { opacity: 1; }
}
</style>
