"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Headphones,
  Lock,
  Play,
  Radio,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Unlock,
  Video,
  X,
  Zap,
  Flame,
} from "lucide-react";

interface StreamChannel {
  id: string;
  name: string;
  type: "video" | "audio";
  link: string;
}

type ChannelType = "video" | "audio";

export default function LiveStreamSection() {
  const [videoChannel, setVideoChannel] = useState<StreamChannel>({
    id: "video",
    name: "Live Video",
    type: "video",
    link: "",
  });

  const [audioChannel, setAudioChannel] = useState<StreamChannel>({
    id: "audio",
    name: "Live Audio",
    type: "audio",
    link: "",
  });

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminToken, setAdminToken] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [editingChannel, setEditingChannel] = useState<ChannelType | null>(
    null,
  );
  const [newLink, setNewLink] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStreams = useCallback(async (showRefreshing = false) => {
    if (showRefreshing) setRefreshing(true);

    try {
      const response = await fetch("/api/streams", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to retrieve streams");
      }

      const data = await response.json();

      if (data.video) setVideoChannel(data.video);
      if (data.audio) setAudioChannel(data.audio);
    } catch (error) {
      console.error("Error fetching streams:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    void fetchStreams();

    const interval = setInterval(() => {
      void fetchStreams();
    }, 5000);

    return () => clearInterval(interval);
  }, [fetchStreams]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    try {
      const response = await fetch("/api/streams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          password: passwordInput,
        }),
      });

      if (!response.ok) {
        setPasswordError("Incorrect password. Please try again.");
        setPasswordInput("");
        return;
      }

      const data = await response.json();

      if (!data.token) {
        setPasswordError("Login failed. No session token was returned.");
        return;
      }

      setAdminToken(data.token);
      setIsAdminMode(true);
      setPasswordInput("");
      setPasswordError("");
    } catch (error) {
      console.error("Login error:", error);
      setPasswordError("Unable to log in. Please try again.");
    }
  };

  const handleUpdateChannel = async (channelType: ChannelType) => {
    if (!newLink.trim()) {
      setPasswordError("Please enter a stream URL.");
      return;
    }

    setSaving(true);
    setPasswordError("");

    try {
      const response = await fetch("/api/streams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          token: adminToken,
          channelType,
          link: newLink.trim(),
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setPasswordError("Session expired. Please log in again.");
          setIsAdminMode(false);
          setAdminToken("");
        } else {
          setPasswordError("Failed to update the stream.");
        }
        return;
      }

      const data = await response.json();

      if (channelType === "video" && data.video) {
        setVideoChannel(data.video);
      }

      if (channelType === "audio" && data.audio) {
        setAudioChannel(data.audio);
      }

      setNewLink("");
      setEditingChannel(null);
      setPasswordError("");
    } catch (error) {
      console.error("Error updating stream:", error);
      setPasswordError("Something went wrong while saving the stream.");
    } finally {
      setSaving(false);
    }
  };

  const startEditing = (channelType: ChannelType, currentLink: string) => {
    setEditingChannel(channelType);
    setNewLink(currentLink);
    setPasswordError("");
  };

  const cancelEditing = () => {
    setEditingChannel(null);
    setNewLink("");
    setPasswordError("");
  };

  const exitAdminMode = () => {
    setIsAdminMode(false);
    setAdminToken("");
    setEditingChannel(null);
    setPasswordInput("");
    setNewLink("");
    setPasswordError("");
  };

  const extractEmbedUrl = (url: string): string => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname.replace(/^www\./, "");
      let videoId: string | null = null;

      if (hostname === "youtu.be") {
        videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
      } else if (hostname === "youtube.com" || hostname === "m.youtube.com") {
        const segments = parsedUrl.pathname.split("/").filter(Boolean);

        if (parsedUrl.pathname === "/watch") {
          videoId = parsedUrl.searchParams.get("v");
        } else if (["live", "embed", "shorts"].includes(segments[0])) {
          videoId = segments[1] ?? null;
        }
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch {
      // A non-URL value is handled by the fallback below.
    }

    return url;
  };

  if (!mounted) return null;

  const isAdminAuthenticated = isAdminMode && Boolean(adminToken);

  const channelCard = (channel: StreamChannel, channelType: ChannelType) => {
    const isVideo = channelType === "video";
    const isEditing = editingChannel === channelType;
    const hasLink = Boolean(channel.link);
    const embedUrl = isVideo ? extractEmbedUrl(channel.link) : "";

    const accent = isVideo
      ? {
          glow: "bg-[#D99A72]/15",
          gradient: "from-[#A66D50] via-[#D99A72] to-[#E8C98D]",
          soft: "bg-[#D99A72]/10",
          border: "border-[#D99A72]/25",
          text: "text-[#E5B38E]",
          button: "bg-[#A66D50] hover:bg-[#BB8060] shadow-[#0c2418]/30",
          label: "VIDEO BROADCAST",
        }
      : {
          glow: "bg-[#A8B99A]/15",
          gradient: "from-[#69856B] via-[#91A88B] to-[#D6B978]",
          soft: "bg-[#A8B99A]/10",
          border: "border-[#A8B99A]/25",
          text: "text-[#B8CBAE]",
          button: "bg-[#58765C] hover:bg-[#6C8B70] shadow-[#0c2418]/30",
          label: "AUDIO BROADCAST",
        };

    return (
      <motion.article
        key={channel.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -5 }}
        className="group relative min-w-0"
      >
        <div
          className={`absolute -inset-[1px] rounded-[1.8rem] bg-gradient-to-br ${accent.gradient} opacity-30 blur-sm transition duration-500 group-hover:opacity-70`}
        />

        <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#214331]">
          {/* Decorative top strip */}
          <div className={`h-1.5 bg-gradient-to-r ${accent.gradient}`} />

          <div className="relative p-5 sm:p-7">
            <div
              className={`pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full ${accent.glow} blur-[70px]`}
            />

            {/* Channel heading */}
            <div className="relative mb-6 flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${accent.border} ${accent.soft} ${accent.text}`}
                >
                  {isVideo ? <Video size={22} /> : <Headphones size={22} />}
                </div>

                <div className="min-w-0">
                  <p
                    className={`text-[9px] font-extrabold tracking-[0.2em] ${accent.text} sm:text-[10px]`}
                  >
                    {accent.label}
                  </p>

                  <h3 className="mt-1 truncate text-xl font-extrabold tracking-tight text-[#FFF9EF] sm:text-2xl">
                    {channel.name}
                  </h3>
                </div>
              </div>

              <div
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 ${
                  hasLink
                    ? "border-[#A8C5A0]/20 bg-[#A8C5A0]/10 text-[#B9D1AD]"
                    : "border-white/10 bg-white/[0.04] text-white/40"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    hasLink ? "animate-pulse bg-[#A8C5A0]" : "bg-white/30"
                  }`}
                />

                <span className="text-[9px] font-bold uppercase tracking-wider">
                  {loading ? "Checking" : hasLink ? "Ready" : "Offline"}
                </span>
              </div>
            </div>

            {/* Video player or audio panel */}
            {isEditing ? (
              <div
                className={`relative rounded-2xl border ${accent.border} bg-white/[0.035] p-4 sm:p-5`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={16} className={accent.text} />
                  <h4 className="text-sm font-bold text-white">
                    Configure {isVideo ? "video" : "audio"} stream
                  </h4>
                </div>

                <label
                  htmlFor={`${channelType}-stream-url`}
                  className="mb-2 block text-xs font-semibold text-white/60"
                >
                  Stream URL
                </label>

                <input
                  id={`${channelType}-stream-url`}
                  type="url"
                  placeholder={
                    isVideo
                      ? "Paste a YouTube or video link"
                      : "Paste a Mixlr or audio stream link"
                  }
                  value={newLink}
                  onChange={(e) => {
                    setNewLink(e.target.value);
                    setPasswordError("");
                  }}
                  className="w-full rounded-xl border border-white/10 bg-[#183D2B] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#D99A72]/60 focus:ring-2 focus:ring-[#D99A72]/10"
                />

                {passwordError && (
                  <p className="mt-3 text-xs text-[#F0B5A0]">{passwordError}</p>
                )}

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => void handleUpdateChannel(channelType)}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition disabled:cursor-not-allowed disabled:opacity-50 ${accent.button}`}
                  >
                    {saving ? (
                      <RefreshCw size={16} className="animate-spin" />
                    ) : (
                      <CheckCircle2 size={16} />
                    )}
                    {saving ? "Saving..." : "Save stream"}
                  </button>

                  <button
                    type="button"
                    disabled={saving}
                    onClick={cancelEditing}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 disabled:opacity-50"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : hasLink ? (
              <div className="space-y-4">
                {isVideo ? (
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/30">
                    {embedUrl !== channel.link ||
                    channel.link.includes("youtube.com") ||
                    channel.link.includes("youtu.be") ? (
                      <iframe
                        src={embedUrl}
                        title={channel.name}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                        <Play size={28} className="text-[#E5B38E]" />
                        <p className="text-sm text-white/60">
                          This stream opens on its hosting platform.
                        </p>
                        <a
                          href={channel.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[#FFF9EF] px-4 py-2.5 text-sm font-bold text-[#183D2B] transition hover:bg-[#F4EADC]"
                        >
                          Open video
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    )}

                    <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D99A72]" />
                      <span className="text-[9px] font-bold tracking-[0.16em] text-white">
                        RHEMA LIVE
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#183D2B] p-6 text-center">
                    <div
                      className={`absolute -left-10 -top-10 h-40 w-40 rounded-full ${accent.glow} blur-[60px]`}
                    />

                    <div className="absolute inset-0 opacity-[0.08]">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                          backgroundSize: "18px 18px",
                        }}
                      />
                    </div>

                    <div
                      className={`relative mb-5 flex h-20 w-20 items-center justify-center rounded-[1.7rem] border ${accent.border} ${accent.soft} ${accent.text}`}
                    >
                      <Radio size={32} />
                      <span className="absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full border-2 border-[#183D2B] bg-[#A8C5A0]" />
                    </div>

                    <p className="relative text-lg font-extrabold text-white">
                      Tune in and listen
                    </p>

                    <p className="relative mt-2 max-w-xs text-xs leading-6 text-white/55">
                      Your audio stream is ready. Open the stream to listen to
                      the service wherever you are.
                    </p>

                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${accent.gradient} px-5 py-3 text-sm font-bold text-[#183D2B] shadow-lg transition hover:brightness-110`}
                    >
                      <Play size={16} fill="currentColor" />
                      Listen now
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}

                {isAdminAuthenticated && (
                  <button
                    type="button"
                    onClick={() => startEditing(channelType, channel.link)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    Update stream link
                  </button>
                )}
              </div>
            ) : (
              <div className="relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/10 bg-white/[0.025] p-6 text-center">
                <div
                  className={`absolute -bottom-12 -right-8 h-36 w-36 rounded-full ${accent.glow} blur-[60px]`}
                />

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${accent.border} ${accent.soft} ${accent.text}`}
                >
                  {isVideo ? <Play size={25} /> : <Radio size={25} />}
                </div>

                <h4 className="relative mt-5 text-base font-bold text-white">
                  {loading ? "Finding your stream..." : "Your stream awaits"}
                </h4>

                <p className="relative mt-2 max-w-xs text-xs leading-6 text-white/45">
                  {loading
                    ? "Checking the available broadcast channels."
                    : "There is no stream configured here just yet. Check back when the next service goes live."}
                </p>

                {isAdminAuthenticated && !loading && (
                  <button
                    type="button"
                    onClick={() => startEditing(channelType, "")}
                    className={`relative mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${accent.gradient} px-5 py-3 text-sm font-bold text-[#183D2B] transition hover:brightness-110`}
                  >
                    <Sparkles size={16} />
                    Add {isVideo ? "video" : "audio"} stream
                  </button>
                )}
              </div>
            )}

            {/* Footer metadata */}
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
              <p className="text-[10px] font-medium text-white/40 sm:text-xs">
                {isVideo
                  ? "Watch services and worship"
                  : "Listen wherever life takes you"}
              </p>

              <div
                className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${accent.text}`}
              >
                {isVideo ? <Video size={13} /> : <Headphones size={13} />}
                {isVideo ? "Watch" : "Listen"}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="live-stream"
      className="relative isolate overflow-hidden bg-[#183D2B] px-4 py-20 text-[#FFF9EF] sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#91A88B]/15 blur-[120px]" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#D99A72]/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#D6B978]/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFF9EF 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="absolute -right-20 -top-24 h-80 w-80 rotate-12 rounded-[4rem] border border-white/[0.07]" />
        <div className="absolute -right-8 -top-12 h-64 w-64 rotate-12 rounded-[3rem] border border-white/[0.06]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8C98D]/20 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D99A72] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D99A72]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E8C98D] sm:text-xs">
                You are always welcome here
              </span>

              <Sparkles size={14} className="text-[#D99A72]" />
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Wherever you are,
              <br />
              <span className="relative inline-block bg-gradient-to-r from-[#E8C98D] via-[#F0D8B5] to-[#D99A72] bg-clip-text pb-2 text-transparent">
                you belong here.
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 400 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8C93 2 247 2 397 7"
                    stroke="#D99A72"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Join us for worship and the Word. Stay connected to the Rhema
              Chapel family, wherever life finds you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D99A72]/25 to-[#E8C98D]/15 text-[#E8C98D]">
              <Zap size={23} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">Stay connected</p>
              <p className="mt-1 text-xs text-white/50">
                Video and audio streams
              </p>
            </div>
          </motion.div>
        </div>

        {/* Channel heading */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded-full bg-gradient-to-b from-[#E8C98D] to-[#D99A72]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
              Choose your experience
            </span>
          </div>

          <button
            type="button"
            onClick={() => void fetchStreams(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white/55 transition hover:border-[#E8C98D]/30 hover:text-white disabled:opacity-50 sm:text-xs"
          >
            <RefreshCw size={13} className={refreshing ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Stream channels */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {channelCard(videoChannel, "video")}
          {channelCard(audioChannel, "audio")}
        </div>

        {/* Admin access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-14"
        >
          {isAdminAuthenticated ? (
            <div className="relative overflow-hidden rounded-[1.6rem] border border-[#A8C5A0]/20 bg-gradient-to-r from-[#A8C5A0]/[0.09] via-white/[0.025] to-[#D99A72]/[0.08] p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#A8C5A0]/20 bg-[#A8C5A0]/10 text-[#B9D1AD]">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Stream control is unlocked
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/50">
                      You can add or update the video and audio links for
                      everyone visiting the website.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={exitAdminMode}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D99A72]/20 bg-[#D99A72]/[0.08] px-4 py-3 text-sm font-semibold text-[#F0C3A5] transition hover:bg-[#D99A72]/15"
                >
                  <Unlock size={16} />
                  Exit admin mode
                </button>
              </div>
            </div>
          ) : isAdminMode ? (
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[1.7rem] border border-[#E8C98D]/20 bg-[#214331] p-6 shadow-2xl shadow-black/20 sm:p-8">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D99A72]/15 blur-[60px]" />

              <div className="relative mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E8C98D]/20 bg-[#E8C98D]/10 text-[#E8C98D]">
                  <Lock size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">
                    Admin access
                  </h3>
                  <p className="mt-1 text-xs text-white/50">
                    Sign in to manage live streams
                  </p>
                </div>
              </div>

              <form onSubmit={handleAdminLogin} className="relative space-y-4">
                <label
                  htmlFor="stream-admin-password"
                  className="block text-xs font-semibold text-white/65"
                >
                  Admin password
                </label>

                <input
                  id="stream-admin-password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError("");
                  }}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#183D2B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#D99A72]/60 focus:ring-2 focus:ring-[#D99A72]/10"
                />

                {passwordError && (
                  <p role="alert" className="text-sm text-[#F0B5A0]">
                    {passwordError}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A66D50] to-[#D99A72] px-4 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
                >
                  <Unlock size={16} />
                  Unlock controls
                  <ArrowUpRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsAdminMode(false);
                    setPasswordInput("");
                    setPasswordError("");
                  }}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/60 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Cancel
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:flex-row sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50">
                  <Lock size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white/80">
                    Stream administrator?
                  </p>
                  <p className="mt-1 text-xs text-white/45">
                    Manage the links displayed on this page.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsAdminMode(true);
                  setPasswordError("");
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8C98D]/20 bg-[#E8C98D]/[0.08] px-5 py-3 text-sm font-bold text-[#E8C98D] transition hover:border-[#E8C98D]/40 hover:bg-[#E8C98D]/[0.14] sm:w-auto"
              >
                <Lock size={15} />
                Admin access
                <ArrowUpRight size={15} />
              </button>
            </div>
          )}
        </motion.div>

        {/* Closing strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-xs">
          <span className="flex items-center gap-2">
            <Flame size={13} className="text-[#D99A72]" />
            One community
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>Many places</span>

          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>One faith</span>
        </div>
      </div>
    </section>
  );
}
