"use client";

import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { getLocation, locations } from "@/lib/site-data";

const geoUrl = "/states-10m.json";

type MapGeography = {
  rsmKey: string;
  properties: {
    name?: string;
  };
};

export const LocationAreaMap = memo(function LocationAreaMap({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const currentLocation = getLocation(currentSlug);

  if (!currentLocation) {
    return null;
  }

  const visibleLocations = locations.filter(
    (location) =>
      location.slug === currentSlug ||
      currentLocation.nearbyCities.includes(location.city),
  );

  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
        style={{ backgroundColor: "var(--hero-glow-two)" }}
      />

      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          rotate: [81.0, -33.8, 0],
          scale: 4500,
        }}
        className="relative z-10 w-full max-w-[520px]"
      >
        <ZoomableGroup
          center={currentLocation.coordinates}
          zoom={3.1}
          minZoom={3.1}
          maxZoom={3.1}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              (geographies as MapGeography[])
                .filter((geo) => geo.properties.name === "South Carolina")
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="var(--accent-alt-soft)"
                    stroke="var(--accent-strong)"
                    strokeWidth={2}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
            }
          </Geographies>

          {visibleLocations.map((location) => {
            const isCurrent = location.slug === currentSlug;

            return (
              <Marker key={location.slug} coordinates={location.coordinates}>
                {isCurrent ? (
                  <>
                    <circle r={28} fill="var(--accent-soft)" opacity={0.3} />
                    <circle r={9} fill="var(--accent)" />
                    <circle
                      r={32}
                      fill="transparent"
                      stroke="var(--accent)"
                      strokeWidth={1.2}
                      strokeDasharray="4 4"
                    />
                  </>
                ) : (
                  <>
                    <circle r={10} fill="var(--accent-alt-soft)" opacity={0.28} />
                    <circle r={4.5} fill="var(--accent-alt)" opacity={0.7} />
                  </>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      <div className="theme-terminal absolute bottom-4 right-4 rounded-2xl p-4 font-mono text-xs backdrop-blur-sm">
        <p className="theme-copy mb-2 uppercase tracking-[0.18em]">
          Local Area
        </p>
        <div className="space-y-2">
          <p className="theme-copy">
            Highlighted: <span className="theme-accent">{currentLocation.city}</span>
          </p>
          <p className="theme-copy">
            County: <span className="theme-accent-strong">{currentLocation.county}</span>
          </p>
          <p className="theme-copy">
            Nearby: {currentLocation.nearbyCities.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
});
