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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#39ff14]/10 blur-[50px] pointer-events-none rounded-full" />

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
                    fill={isSC ? "rgba(57, 255, 20, 0.4)" : "#1a1a1a"}
                    stroke={isSC ? "#39ff14" : "rgba(255,255,255,0.1)"}
                    strokeWidth={isSC ? 2 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isSC ? "rgba(57, 255, 20, 0.6)" : "#222",
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
            <circle r={8} fill="#00f0ff" className="animate-pulse" />
            <circle r={20} fill="transparent" stroke="#00f0ff" strokeWidth={1} className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          </Marker>

          <circle cx={0} cy={0} r={0} fill="none" />
          <Marker coordinates={[-82.3940, 34.8526]}>
            <circle r={60} fill="rgba(0, 240, 255, 0.05)" stroke="rgba(0, 240, 255, 0.2)" strokeWidth={1} strokeDasharray="4 4" />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>

      <div className="absolute bottom-4 right-4 bg-black/80 border border-white/10 p-3 font-mono text-xs backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 bg-[rgba(57,255,20,0.4)] border border-[#39ff14] inline-block" />
          <span className="text-gray-300">Physical Deployment Zone</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-transparent border border-[#00f0ff] rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full" />
          </span>
          <span className="text-gray-300">HQ: Upstate SC</span>
        </div>
      </div>
    </div>
  );
};

export default memo(MapChart);
