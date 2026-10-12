<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;camostat&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/&quot;},{&quot;label&quot;:&quot;Kim_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camostat_Kosinsky2022_reference&quot;,&quot;label&quot;:&quot;Kosinsky_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camostat — `Camostat_Kim2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**GBA volume of distribution is recorded in hours instead of volume, and the parent drug lacks a defined metabolic link to GBPA.**

The volume of distribution for GBA is listed as 1046 h, a time unit that is dimensionally incorrect for a volume parameter. Additionally, the metabolic link from camostat mesylate to GBPA has no associated parameter, leaving the parent drug compartment structurally disconnected from the metabolite. Extracted — GBA: t1/2z 1.01 h, Cmax 72.7 ng/mL, AUClast 152 h × ng/mL, AUC∞ 156 h × ng/mL, CL/F 142 L/h, V 1.05e+03 h.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> **Dose compound ≠ measured compound:** dosed `camostat mesylate`, measured `GBPA`.

## Citation
Kim G et al., Safety Evaluation and Population Pharma…, Pharmaceutics (2023)
  ·  DOI: [10.3390/pharmaceutics15092357](https://doi.org/10.3390/pharmaceutics15092357)

## Model component
<dbs-pgx drug="camostat" model-id="Camostat_Kim2023_reference" status="rejected" stale="false" population="healthy adults" measured-compound="GBPA" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Half-life (h) | `Q57` · t1/2z | 1.012 | h | 3643.2 | [h] | not captured | llm (0.6) | pharmaceutics-15-02357-t002:row2:col1, pharmaceutics-15-02357-t002:row2:col2, pharmaceutics-15-02357-t002:row2:col3, pharmaceutics-15-02357-t002:row2:col4, pharmaceutics-15-02357-t002:row2:col5, pharmaceutics-15-02357-t002:row2:col6 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | 72.68 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | pharmaceutics-15-02357-t002:row3:col1, pharmaceutics-15-02357-t002:row3:col2, pharmaceutics-15-02357-t002:row3:col3, pharmaceutics-15-02357-t002:row3:col4, pharmaceutics-15-02357-t002:row3:col5, pharmaceutics-15-02357-t002:row3:col6 | — | not captured |
| AUClast (h × ng/mL) | `Q74` · AUClast | 152.3 | h × ng/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | pharmaceutics-15-02357-t002:row4:col1, pharmaceutics-15-02357-t002:row4:col2, pharmaceutics-15-02357-t002:row4:col3, pharmaceutics-15-02357-t002:row4:col4, pharmaceutics-15-02357-t002:row4:col5, pharmaceutics-15-02357-t002:row4:col6 | — | not captured |
| AUCinf (h × ng/mL) | `Q17` · AUC∞ | 156.5 | h × ng/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | pharmaceutics-15-02357-t002:row5:col1, pharmaceutics-15-02357-t002:row5:col2, pharmaceutics-15-02357-t002:row5:col3, pharmaceutics-15-02357-t002:row5:col4, pharmaceutics-15-02357-t002:row5:col5, pharmaceutics-15-02357-t002:row5:col6 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 141.7 | L/h | 3.936111111111111e-05 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-15-02357-t002:row6:col1, pharmaceutics-15-02357-t002:row6:col2, pharmaceutics-15-02357-t002:row6:col3, pharmaceutics-15-02357-t002:row6:col4, pharmaceutics-15-02357-t002:row6:col5, pharmaceutics-15-02357-t002:row6:col6 | — | not captured |
| Vd (h) | `Q61` · V | 1046 | h | not captured | [h] | not captured | exact (1.0) | pharmaceutics-15-02357-t002:row7:col1, pharmaceutics-15-02357-t002:row7:col2, pharmaceutics-15-02357-t002:row7:col3, pharmaceutics-15-02357-t002:row7:col4, pharmaceutics-15-02357-t002:row7:col5, pharmaceutics-15-02357-t002:row7:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'gbpa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'gba' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'h × ng/mL' (AUClast)
- unit_dimension_unknown: 'h × ng/mL' (AUC∞)
- unit_dimension_mismatch: 'Vd (h)' → Q61 (unit '[time]' vs ontology '[length] ** 3') — route to review
- implicit units: 'AUClast (h × ng/mL)' — the LLM proposed 'h × ng/mL', whose dimension does not fit Q74; left unset
- implicit units: 'AUCinf (h × ng/mL)' — the LLM proposed 'h × ng/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GBPA
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role; re-tagged GBPA→GBA ×18
- molar mass: none of 1 PubChem candidate(s) is 'GBPA' (LLM) — left in mass units
- molar mass: none found for 'GBPA' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'GBPA', not camostat — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-15-02357-t002:row6:col1', 'pharmaceutics-15-02357-t002:row6:col2', 'pharmaceutics-15-02357-t002:row6:col3', 'pharmaceutics-15-02357-t002:row6:col4', 'pharmaceutics-15-02357-t002:row6:col5', 'pharmaceutics-15-02357-t002:row6:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-15-02357-t002:row3:col1', 'pharmaceutics-15-02357-t002:row3:col2', 'pharmaceutics-15-02357-t002:row3:col3', 'pharmaceutics-15-02357-t002:row3:col4', 'pharmaceutics-15-02357-t002:row3:col5', 'pharmaceutics-15-02357-t002:row3:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-15-02357-t002:row2:col1', 'pharmaceutics-15-02357-t002:row2:col2', 'pharmaceutics-15-02357-t002:row2:col3', 'pharmaceutics-15-02357-t002:row2:col4', 'pharmaceutics-15-02357-t002:row2:col5', 'pharmaceutics-15-02357-t002:row2:col6'] |
| C5_dimension_Q61 | fail | [time] | h | not captured | not captured | ['pharmaceutics-15-02357-t002:row7:col1', 'pharmaceutics-15-02357-t002:row7:col2', 'pharmaceutics-15-02357-t002:row7:col3', 'pharmaceutics-15-02357-t002:row7:col4', 'pharmaceutics-15-02357-t002:row7:col5', 'pharmaceutics-15-02357-t002:row7:col6'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h × ng/mL | not captured | not captured | ['pharmaceutics-15-02357-t002:row5:col1', 'pharmaceutics-15-02357-t002:row5:col2', 'pharmaceutics-15-02357-t002:row5:col3', 'pharmaceutics-15-02357-t002:row5:col4', 'pharmaceutics-15-02357-t002:row5:col5', 'pharmaceutics-15-02357-t002:row5:col6'] |
| C5_unit_missing_Q74 | fail | [mass] * [time] / [length] ** 3 | h × ng/mL | not captured | not captured | ['pharmaceutics-15-02357-t002:row4:col1', 'pharmaceutics-15-02357-t002:row4:col2', 'pharmaceutics-15-02357-t002:row4:col3', 'pharmaceutics-15-02357-t002:row4:col4', 'pharmaceutics-15-02357-t002:row4:col5', 'pharmaceutics-15-02357-t002:row4:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'CLmet'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 142 L/h | not captured | not captured | ['pharmaceutics-15-02357-t002:row6:col1', 'pharmaceutics-15-02357-t002:row6:col2', 'pharmaceutics-15-02357-t002:row6:col3', 'pharmaceutics-15-02357-t002:row6:col4', 'pharmaceutics-15-02357-t002:row6:col5', 'pharmaceutics-15-02357-t002:row6:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_camostat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2023` / `Kim_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 16:45 UTC</sub>
