<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Kim_2021 \u00b7 gx&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Kim2021_gx`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The lidocaine record was rejected because it reports no distribution volume and no clearance or elimination rate — an exposure/outcome paper, not a compartmental population PK model — and the metabolite GX is unreachable from the dose.**

The record for lidocaine in male Sprague-Dawley rats contains only summary exposure statistics for the metabolite GX (terminal half-life 61.78 h, Cmax 0.33 ng/mL, Tmax 1786.53 h), with no volume or clearance parameters, so it is not a compartmental population PK model. The GX metabolite has no path from the administered lidocaine dose, leaving it orphaned. Additionally, a reported unit could not be converted to SI, so that parameter lacked an SI value. A second reader disputed the parameterization (apparent rather than mechanistic) and read several parameters (cld/f 0.13, clm1/f 14.94, fm1 0.65, fr 0.373, ka1 5.92, km 136808.67, mtt 0.64) where the record had none. Extracted — GX: t1/2z 61.8 h, Cmax 0.33 ng/mL, tmax 1.79e+03 h.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:27:22.178919+00:00) predates the upstream re-run (2026-10-06 03:23:01.467421+00:00). Current validate status: `rejected`.

## Citation
Kim JH et al., Evaluation of Lidocaine and Metabolite…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_Kim2021_gx" status="rejected" stale="true" population="male Sprague-Dawley rats" measured-compound="lidocaine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Half-life (h) | `Q57` · t1/2z | 61.78 | h | 222408.0 | [h] | not captured | llm (0.6) | Kim_2021_table_3:row1:col3, Kim_2021_table_3:row1:col6, Kim_2021_table_3:row1:col9, Kim_2021_table_3:row1:col12, Kim_2021_table_3:row1:col15 | — | not captured |
| Cmax or Co (ng/mL) | `Q32` · Cmax | 0.33 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Kim_2021_table_3:row2:col3, Kim_2021_table_3:row2:col6, Kim_2021_table_3:row2:col9, Kim_2021_table_3:row2:col12, Kim_2021_table_3:row2:col15 | — | not captured |
| Tmax (h) | `Q56` · tmax | 1786.53 | h | 6431508.0 | [h] | not captured | exact (1.0) | Kim_2021_table_3:row3:col3, Kim_2021_table_3:row3:col6, Kim_2021_table_3:row3:col9, Kim_2021_table_3:row3:col12, Kim_2021_table_3:row3:col15 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Compound' — extend the ontology if this is a real PK parameter (source ['Kim_2021_table_3:row0:col3', 'Kim_2021_table_3:row0:col6', 'Kim_2021_table_3:row0:col9', 'Kim_2021_table_3:row0:col12', 'Kim_2021_table_3:row0:col15'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'gx' subgroup of Kim_2021 (paper reports 12 populations: (0.3% solution, iv), (0.3% solution, sc), (lha 0.3%, sc), (lha 1%, sc), (lha 3%, sc), estimate, group 1, group 2, group 3, group 4, group 5, gx)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 18 linked by role; re-tagged parent→monoethylglycylxylidide ×6, parent→glycylxylidide ×4
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-13-00203-t004:row3:col4 = '(5.19, 6.64)'
- unparsed cell pharmaceutics-13-00203-t004:row4:col1 = 'Apparent volume of distribution of compartment 1'
- unparsed cell pharmaceutics-13-00203-t004:row4:col4 = '(2.23, 2.89)'
- unparsed cell pharmaceutics-13-00203-t004:row5:col1 = 'Apparent volume of distribution of compartment 2'
- unparsed cell pharmaceutics-13-00203-t004:row5:col4 = '(0.06, 0.07)'
- unparsed cell pharmaceutics-13-00203-t004:row6:col4 = '(0.1323, 0.1332)'
- unparsed cell pharmaceutics-13-00203-t004:row7:col4 = '(0.371, 0.374)'
- unparsed cell pharmaceutics-13-00203-t004:row8:col4 = '(0.57, 0.70)'
- unparsed cell pharmaceutics-13-00203-t004:row9:col4 = '(4.96, 4.98)'
- unparsed cell pharmaceutics-13-00203-t004:row10:col4 = '(1.59, 1.74)'
- unparsed cell pharmaceutics-13-00203-t004:row11:col4 = '(383,479.15, 464,446.73)'
- unparsed cell pharmaceutics-13-00203-t004:row12:col4 = '(112,613.9, 161,003.44)'
- unparsed cell pharmaceutics-13-00203-t004:row13:col4 = '(12.76, 17.11)'
- unparsed cell pharmaceutics-13-00203-t004:row14:col4 = '(0.644, 0.646)'
- unparsed cell pharmaceutics-13-00203-t004:row15:col4 = '(1.04, 1.14)'
- unparsed cell pharmaceutics-13-00203-t004:row16:col4 = '(0.46, 0.47)'
- unparsed cell pharmaceutics-13-00203-t004:row18:col4 = '(0.127, 0.152)'
- unparsed cell pharmaceutics-13-00203-t004:row19:col4 = '(0.181, 0.208)'
- unparsed cell pharmaceutics-13-00203-t004:row20:col4 = '(0.077, 0.089)'
- unparsed cell pharmaceutics-13-00203-t004:row21:col4 = '(0.159, 0.183)'
- unparsed cell pharmaceutics-13-00203-t004:row22:col4 = '(0.350, 0.402)'
- unparsed cell pharmaceutics-13-00203-t004:row23:col1 = 'IIV of CLm2'
- unparsed cell pharmaceutics-13-00203-t004:row23:col4 = '(0.216, 0.248)'
- unparsed cell pharmaceutics-13-00203-t004:row25:col4 = '(0.485, 0.504)'
- unparsed cell pharmaceutics-13-00203-t004:row26:col4 = '(0.562, 0.597)'
- unparsed cell pharmaceutics-13-00203-t004:row27:col4 = '(0.399, 0.430)'
- transposed table Kim_2021_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (59 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Kim_2021_table_3:row2:col3', 'Kim_2021_table_3:row2:col6', 'Kim_2021_table_3:row2:col9', 'Kim_2021_table_3:row2:col12', 'Kim_2021_table_3:row2:col15'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Kim_2021_table_3:row3:col3', 'Kim_2021_table_3:row3:col6', 'Kim_2021_table_3:row3:col9', 'Kim_2021_table_3:row3:col12', 'Kim_2021_table_3:row3:col15'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Kim_2021_table_3:row1:col3', 'Kim_2021_table_3:row1:col6', 'Kim_2021_table_3:row1:col9', 'Kim_2021_table_3:row1:col12', 'Kim_2021_table_3:row1:col15'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2021` / `Kim_2021::gx`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 03:23 UTC</sub>
