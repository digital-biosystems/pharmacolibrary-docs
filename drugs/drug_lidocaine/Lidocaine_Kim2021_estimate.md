<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Kim_2021 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Kim2021_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The lidocaine rat model record was rejected because apparent parameters (V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, CLm1/F 14.94 L/h) were double-corrected for bioavailability, a structural parameter had a dimension mismatch, and clearance/volume magnitudes were physiologically implausible, with one reported unit that could not be converted to SI.**

The record lists lidocaine parameters already adjusted for bioavailability (V1/F, V2/F, Q/F, CLm1/F), yet the coherence check found a double correction applied to these apparent parameters. A dimension mismatch was flagged on a structural parameter, and the clearance/volume values fell outside a physiological window, consistent with a unit or scale extraction error. One reported unit could not be converted to SI, so that parameter was carried without an SI value. The second reader additionally supplied relative standard errors absent from this record (e.g., CLd/F 0.37%, CLm1/F 15.31%, Fm1 1.06%) and classified the absorption half-life parameter (t1/2ka, 5.92 h−1) differently from this record. Extracted — lidocaine: t1/2ka 5.92 h−1, V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, FR 0.373, MTT 0.64 h, Vmax 4.24e+05 nmol/h, Km 1.37e+05 nmol/L, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has lidocaine → monoethylglycylxylidide (metabolism); monoethylglycylxylidide → glycylxylidide (metabolism), the second reading lidocaine → megx (metabolism); megx → gx (metabolism); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:27:22.103729+00:00) predates the upstream re-run (2026-10-06 03:23:01.467421+00:00). Current validate status: `rejected`.

## Citation
Kim JH et al., Evaluation of Lidocaine and Metabolite…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_Kim2021_estimate" status="rejected" stale="true" population="male Sprague-Dawley rats" measured-compound="lidocaine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka1 (h−1) | `Q49` · kabs | 5.92 | h−1 | 0.0016444444444444445 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row3:col2 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 2.57 | L | 0.00257 | [l] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row4:col2 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 0.07 | L | 7.000000000000001e-05 | [l] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row5:col2 | — | not captured |
| CLd/F (L/h) | `Q69` · Q/F | 0.13 | L/h | 3.611111111111111e-08 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row6:col2 | — | not captured |
| Fr | `Q43` · FR | 0.373 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row7:col2 | — | not captured |
| MTT (h) | `Q81` · MTT | 0.64 | h | not captured | [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row8:col2 | — | not captured |
| Ka2(h−1) | `Q49` · kabs | 1.67 | h−1 | 0.00046388888888888885 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row10:col2 | — | not captured |
| Vmax (nmol/h) | `Q66` · Vmax | 423962.94 | nmol/h | not captured | [nM] / [h] | not captured | special_case (0.95) | pharmaceutics-13-00203-t004:row11:col2 | — | 0.08 (None% RSE) |
| Km (nmol/L) | `Q1` · Km | 136808.67 | nmol/L | not captured | [nM] / [l] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row12:col2 | — | 0.17 (None% RSE) |
| CLm1/F (L/h) | `Q27` · CL/F | 14.94 | L/h | 4.15e-06 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row13:col2 | — | not captured |
| Fm1 | `Q45` · fm | 0.65 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row14:col2 | — | not captured |
| CLm2/F (L/h) | `Q27` · CL/F | 1.09 | L/h | 3.027777777777778e-07 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row15:col2 | — | not captured |
| Fm2 | `Q45` · fm | 0.47 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row16:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'ε1' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε2' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε3' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Ntr' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00203-t004:row9:col2'])
- unit_dimension_mismatch: 'Vmax (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (nmol/L)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Kim_2021 (paper reports 12 populations: (0.3% solution, iv), (0.3% solution, sc), (lha 0.3%, sc), (lha 1%, sc), (lha 3%, sc), estimate, group 1, group 2, group 3, group 4, group 5, gx)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 18 linked by role; re-tagged parent→monoethylglycylxylidide ×6, parent→glycylxylidide ×4
- fm scheme: monoethylglycylxylidide = Fm1 = 0.65 of CL, glycylxylidide = Fm1*Fm2 = 0.305 of CL
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (11/22 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['lidocaine', 'monoethylglycylxylidide', 'metabolism'], ['monoethylglycylxylidide', 'glycylxylidide', 'metabolism']] | [['lidocaine', 'megx', 'metabolism'], ['megx', 'gx', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[clm1/f]` | not captured | 14.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm1/f]` | 14.94 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm2/f]` | not captured | 1.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm2/f]` | 1.09 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm1]` | not captured | 0.65 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm1]` | 0.65 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm2]` | not captured | 0.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm2]` | 0.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka2]` | 1.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ntr]` | not captured | 4.97 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['pharmaceutics-13-00203-t004:row12:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row13:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row15:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row10:col2'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row11:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.9 L/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row13:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.09 L/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row15:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.57 L | not captured | not captured | ['pharmaceutics-13-00203-t004:row4:col2'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.07 L | not captured | not captured | ['pharmaceutics-13-00203-t004:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2021` / `Kim_2021::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 03:23 UTC</sub>
