declare module "react-simple-maps" {
    import * as React from "react";

    type UnknownRecord = Record<string, unknown>;
    type MapPosition = UnknownRecord;
    type MapEvent = React.SyntheticEvent;

    export interface ComposableMapProps {
        projection?: string | ((...args: unknown[]) => unknown);
        projectionConfig?: UnknownRecord;
        width?: number;
        height?: number;
        viewBox?: string;
        className?: string;
        children?: React.ReactNode;
    }

    export const ComposableMap: React.FC<ComposableMapProps>;

    export interface ZoomableGroupProps {
        center?: [number, number];
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        onMoveStart?: (event: MapEvent, position: MapPosition) => void;
        onMoveEnd?: (event: MapEvent, position: MapPosition) => void;
        onMove?: (position: MapPosition) => void;
        translateExtent?: [[number, number], [number, number]];
        filterZoomEvent?: (event: MapEvent) => boolean;
        className?: string;
        children?: React.ReactNode;
    }

    export const ZoomableGroup: React.FC<ZoomableGroupProps>;

    export interface GeographiesProps {
        geography: string | object | string[];
        children: (data: { geographies: UnknownRecord[]; outline: UnknownRecord; borders: UnknownRecord }) => React.ReactNode;
        parseGeographies?: (geos: UnknownRecord[]) => UnknownRecord[];
    }

    export const Geographies: React.FC<GeographiesProps>;

    export interface GeographyProps {
        geography: UnknownRecord;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseDown?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        onClick?: React.MouseEventHandler;
        onFocus?: React.FocusEventHandler;
        onBlur?: React.BlurEventHandler;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
        className?: string;
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
    }

    export const Geography: React.FC<GeographyProps>;

    export interface MarkerProps {
        coordinates: [number, number];
        children?: React.ReactNode;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseDown?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        onClick?: React.MouseEventHandler;
        onFocus?: React.FocusEventHandler;
        onBlur?: React.BlurEventHandler;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
        className?: string;
    }

    export const Marker: React.FC<MarkerProps>;
}
