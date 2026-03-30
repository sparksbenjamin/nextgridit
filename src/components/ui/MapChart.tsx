"use client"

import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

type MapGeography = {
  rsmKey: string;
  properties: {
    name?: string;
  };
};

const MapChart = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[50px]" style={{ backgroundColor: "var(--hero-glow-two)" }} />

      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          rotate: [81.0, -33.8, 0],
          scale: 4500
        }}
        className="w-full h-auto max-h-[400px]"
      >
        <ZoomableGroup center={[-81, 33.8]} zoom={1} minZoom={1} maxZoom={5}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              (geographies as MapGeography[]).map((geo) => {
                const isSC = geo.properties.name === "South Carolina";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isSC ? "var(--accent-alt-soft)" : "var(--surface-muted)"}
                    stroke={isSC ? "var(--accent-strong)" : "var(--border)"}
                    strokeWidth={isSC ? 2 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isSC ? "var(--accent-soft)" : "var(--surface)",
                        outline: "none",
                        transition: "all 250ms"
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          <Marker coordinates={[-82.3940, 34.8526]}>
            <circle r={8} fill="var(--accent)" className="animate-pulse" />
            <circle r={20} fill="transparent" stroke="var(--accent)" strokeWidth={1} className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          </Marker>

          <circle cx={0} cy={0} r={0} fill="none" />
          <Marker coordinates={[-82.3940, 34.8526]}>
            <circle r={60} fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth={1} strokeDasharray="4 4" opacity={0.35} />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>

      <div className="theme-terminal absolute bottom-4 right-4 rounded-xl p-3 font-mono text-xs backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block h-3 w-3 border border-[var(--accent-strong)] bg-[var(--accent-alt-soft)]" />
          <span className="theme-copy">Physical Deployment Zone</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 items-center justify-center rounded-full border border-[var(--accent)] bg-transparent">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="theme-copy">HQ: Upstate SC</span>
        </div>
      </div>
    </div>
  );
};

export default memo(MapChart);
