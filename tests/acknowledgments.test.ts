import assert from "node:assert/strict";
import { test } from "node:test";
import {
  acknowledgments,
  marqueeStripCount,
  type Acknowledgment,
} from "../src/lib/acknowledgments";
import { sampleFinding } from "../src/lib/sample-finding";

test("marquee strip count is even, loop-ready, and zero when empty", () => {
  assert.equal(marqueeStripCount(0), 0);
  for (const count of [1, 2, 3, 5, 8, 12]) {
    const strips = marqueeStripCount(count);
    assert.ok(strips >= 2, `${count} entries need at least two strips`);
    assert.equal(
      strips % 2,
      0,
      `${count} entries must produce an even strip count for the -50% loop`,
    );
    assert.ok(
      strips * count >= 8,
      `${count} entries must fill half a wide track`,
    );
  }
});

test("acknowledgment entries stay schema-valid so the wall can render them", () => {
  assert.ok(Array.isArray(acknowledgments));
  const seen = new Set<string>();
  for (const entry of acknowledgments as Acknowledgment[]) {
    assert.ok(entry.company.trim().length > 0, "company name is required");
    assert.match(entry.logo, /^\/acknowledgments\/[\w.-]+\.(svg|png)$/);
    assert.ok(entry.logoWidth > 0 && entry.logoHeight > 0);
    assert.ok(!seen.has(entry.company.toLowerCase()), "companies are unique");
    seen.add(entry.company.toLowerCase());
    if (entry.reference) {
      assert.match(entry.reference, /^https:\/\//, "references must be https");
    }
  }
});

test("sample finding keeps the report shape shown on the homepage", () => {
  assert.match(sampleFinding.id, /^NG-SA-\d{4}-\d{3}/);
  assert.ok(sampleFinding.severity.length > 0);
  assert.ok(sampleFinding.status.length > 0);
  assert.ok(sampleFinding.title.length > 10);
  assert.ok(sampleFinding.meta.length >= 4);
  for (const item of sampleFinding.meta) {
    assert.ok(item.label.length > 0, "meta labels are required");
    assert.ok(item.value.length > 0, "meta values are required");
  }
  for (const field of [
    sampleFinding.impact,
    sampleFinding.confirmed,
    sampleFinding.fix,
  ]) {
    assert.ok(field.length > 30, "finding prose explains the report");
  }
  assert.match(sampleFinding.caption, /redacted/i, "caption discloses redaction");
});
