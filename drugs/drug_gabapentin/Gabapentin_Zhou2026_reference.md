<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;gabapentin&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/&quot;},{&quot;label&quot;:&quot;Zhou_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gabapentin_Siao2010_reference&quot;,&quot;label&quot;:&quot;Siao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Siao2010_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gabapentin — `Gabapentin_Zhou2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.955), gpt-oss:120b (partly confirmed, agreement 0.864). Primary extraction retained.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The gabapentin record was rejected because a structural parameter failed a dimension check — the elimination rate constant kel (0.53 h-1) is dimensionally inconsistent with the macro-rate constant λ2 (1 h-1) — and one reported unit could not be converted to SI.**

The record lists kel (labelled ke1, 0.53 h-1) as the terminal elimination rate constant and λ2 (labelled ke2, 1 h-1) as the slow-phase macro-rate constant of the two-compartment disposition; the dimension check on these structural parameters failed, and one reported unit could not be converted to SI, so that parameter entered model construction without an SI value. A second reader also disagreed on two values: the record carries ke2 as 1 and the eGFR covariate effect on CL/F as 1.34, whereas the second reader left ke2 and the covariate effect unset and instead assigned 1.34 to a power-form eGFR effect on CL/F, so the covariate effect's form and value are not settled. Extracted — gabapentin: tlag 0.34 h, kabs 0.14 h-1, CL/F 10.2 L/h, V1/F 18.2 L, Q 6.58 L/h, V2/F 358 L, kel 0.53 h-1, λ2 1 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ke2: this record has 1, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:07.611887+00:00) predates the upstream re-run (2026-10-07 06:11:10.836397+00:00). Current validate status: `rejected`.

## Citation
Zhou L et al., Gabapentin CNS exposure and analgesic r…, Frontiers in pharmacology (2026)
  ·  DOI: [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901)

<div class="pk-model-meta" hidden drug="gabapentin" model-id="Gabapentin_Zhou2026_reference" status="rejected" stale="true" population="adults with chronic neuropathic pain" measured-compound="gabapentin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (h) | `Q83` · tlag | 0.34 | h | 1224.0 | [h] | 8.03 | exact (1.0) | T1:row2:col1 | — | 0.52 (14.23% RSE) |
| ka (h-1) | `Q49` · kabs | 0.14 | h-1 | 3.888888888888889e-05 | [1] / [h] | 7.04 | exact (1.0) | T1:row3:col1 | — | 0.15 (45.06% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 10.16 | L/h | 2.8222222222222223e-06 | [l] / [h] | 12.15 | exact (1.0) | T1:row4:col1 | — | not captured |
| logt_egfr_84.85_on_cl_f | `Q900` · logt_egfr_84.85_on_cl_f | 1.34 | not captured | not captured | not captured | 24.38 | not captured (not captured) | T1:row5:col1 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 18.16 | L | 0.01816 | [l] | 15.13 | exact (1.0) | T1:row6:col1 | — | not captured |
| Q (L/h) | `Q30` · Q | 6.58 | L/h | 1.8277777777777777e-06 | [l] / [h] | 18.68 | exact (1.0) | T1:row7:col1 | — | 0.64 (16.19% RSE) |
| V2/F (L) | `Q82` · V2/F | 357.67 | L | 0.35767000000000004 | [l] | 31.27 | exact (1.0) | T1:row8:col1 | — | not captured |
| ke1 (h-1) | `Q47` · kel | 0.53 | h-1 | 0.00014722222222222223 | [1] / [h] | 55.76 | llm (0.6) | T1:row9:col1 | — | not captured |
| ke2 (h-1) | `Q68` · λ2 | 1 | h-1 | not captured | [1] / [h] | not captured | llm (0.6) | T1:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'logt (eGFR/84.85) on CL/F' → Q900:logt_egfr_84.85_on_cl_f = 1.34 (power on Q27)
- dropped unlinked row (NIL): 'OCT2 on ke1' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1'])
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row11:col1'])
- dropped PD-category row 'IC50 (ng/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row12:col1'])
- unit_dimension_mismatch: 'ke2 (h-1)' → Q68 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row14:col1'])
- dropped unlinked row (NIL): 'Additive (a)' — extend the ontology if this is a real PK parameter (source ['T1:row24:col1', 'T1:row26:col1'])
- dropped unlinked row (NIL): 'Proportional (b)' — extend the ontology if this is a real PK parameter (source ['T1:row27:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=gabapentin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T1:row2:col2 = '0.32 (0.23–0.42)'
- unparsed cell T1:row3:col2 = '0.15 (0.13–0.19)'
- unparsed cell T1:row4:col2 = '10.06 (6.57–13.40)'
- unparsed cell T1:row5:col2 = '1.35 (0.56–2.20)'
- unparsed cell T1:row6:col2 = '20.98 (14.43–30.72)'
- unparsed cell T1:row7:col2 = '7.25 (3.82–11.49)'
- unparsed cell T1:row8:col2 = '335.79 (149.49–854.09)'
- unparsed cell T1:row9:col2 = '0.47 (0.14–1.38)'
- unparsed cell T1:row10:col2 = '−2.42 (−4.81–−0.80)'
- unparsed cell T1:row11:col2 = '7.27 (6.01–8.23)'
- unparsed cell T1:row16:col2 = '0.56 (0.37–0.81)'
- unparsed cell T1:row17:col2 = '0.11 (0.037–0.29)'
- unparsed cell T1:row18:col2 = '0.46 (0.32–0.61)'
- unparsed cell T1:row19:col2 = '0.53 (0.30–0.70)'
- unparsed cell T1:row20:col2 = '0.57 (0.34–0.84)'
- unparsed cell T1:row21:col2 = '2.02 (0.91–3.19)'
- unparsed cell T1:row22:col2 = '1.03 (0.47–1.76)'
- unparsed cell T1:row24:col2 = '0.18 (0.13–0.24)'
- unparsed cell T1:row26:col2 = '0.53 (0.36–0.97)'
- unparsed cell T1:row27:col2 = '0.29 (0-0.48)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.955 (21/22 fields) | 1 |
| `gpt-oss:120b` | partly confirmed | 0.864 (19/22 fields) | 3 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ke2]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ke2]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[logt_egfr_84.85_on_cl_f]` | 1.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_egfr_power]` | not captured | 1.34 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q27 | fail | 10.16 | 12.66 | 1.2461 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row7:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row3:col1'] |
| C5_dimension_Q68 | fail | 1 / [time] | h-1 | not captured | not captured | ['T1:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row8:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T1:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.2 L/h | not captured | not captured | ['T1:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 18.2 L | not captured | not captured | ['T1:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 358 L | not captured | not captured | ['T1:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gabapentin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhou_2026` / `Zhou_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:11 UTC</sub>
