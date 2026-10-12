<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;isatuximab&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/&quot;},{&quot;label&quot;:&quot;Brillac_2025 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isatuximab_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# isatuximab — `Isatuximab_Brillac2025_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The isatuximab record was rejected for an unreachable compartment; it reports a weight allometric exponent of 0.833 but no clearance value.**

The model has a two-compartment structure, and the finding says a compartment was unreachable, without specifying which one. The reported clearance value is absent, while the allometric exponent is 0.833. A reported unit could not be converted to SI, leaving a parameter without an SI value; the finding does not identify that parameter. Extracted — isatuximab: allometric_exponent 0.833 WT/MedWT, V1 1.98 L, V2 2.2 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[β_cl_log].parameter_id`: this record has Q319, the second reading Q31; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Brillac C et al., Selection of isatuximab dosing regimen…, Cancer chemotherapy and pha… (2025)
  ·  DOI: [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2)

## Model component
<dbs-pgx drug="isatuximab" model-id="Isatuximab_Brillac2025_final" status="rejected" stale="false" population="Pediatric patients with R/R acute leukemia pooled with adults from ISLAY" measured-compound="isatuximab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| β_CL_log(WT/MedWT) | `Q319` · allometric_exponent | 0.833 | WT/MedWT | not captured | [wt] / [[m] · [edwt]] | not captured | llm (0.6) | Tab1:row5:col3, Tab1:row5:col4 | — | not captured |
| V1 (L) | `Q63` · V1 | 1.98 | L | 0.00198 | [l] | not captured | exact (1.0) | Tab1:row6:col3, Tab1:row6:col4 | — | not captured |
| V2 (L) | `Q64` · V2 | 2.20 | L | 0.0022 | [l] | not captured | exact (1.0) | Tab1:row10:col3, Tab1:row10:col4 | — | not captured |
| CL | `Q900` · CL | 0.00556 | L/h | 1.5444444444444446e-09 | not captured | not captured | not captured (not captured) | Tab1:row4:col3, Tab1:row4:col4 | — | not captured |
| Q | `Q900` · Q | 0.0358 | L/h | 9.944444444444443e-09 | not captured | not captured | not captured (not captured) | Tab1:row8:col3, Tab1:row8:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL (L/h) | Q22 | not captured | exact |
| Q (L/h) | Q30 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω(CL)' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ω(V1)' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ω(Q)' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ω(V2)' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Residual error proportional (%)' routed out of structural estimates ('Interindividual variability (%)')
- dropped unlinked row (NIL): '−2LL' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col3', 'Tab1:row1:col4', 'Tab1:row1:col5'])
- dropped unlinked row (NIL): 'BIC' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col3', 'Tab1:row2:col4', 'Tab1:row2:col5'])
- unit_dimension_unknown: 'WT/MedWT' (allometric_exponent)
- dropped duplicate Q319 ('β_V1_log(WT/MedWT)', value '0.821') — already have one for this compound
- dropped duplicate Q319 ('β_Q_log(WT/MedWT)', value '0.85') — already have one for this compound
- dropped duplicate Q319 ('Β_V2_log(WT/MedWT)', value '0.72') — already have one for this compound
- NIL: refused to back-fill base 'MW' from footnote/prose loose number 54 (source ['Tab1:footnote', 'Tab1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=isatuximab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q22 (CL): CL = 0.00775 * (WT/54)^0.85(fixed)
- bound model equation to Q30 (Q): Q = 0.0386 * (WT/54)^0.85(fixed)
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL (L/h)'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q (L/h)'; equation kept verbatim
- status held at route_to_review — not promoted
- model-stage split: 'final model with β coefficient on q fixed (n = 79)' is the final model of Brillac_2025 (paper reports 2 stages: final model with β coefficient on q fixed (n = 79), model 1 (n = 32)); same population, different model-building step
- molar mass: none found for 'isatuximab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab1:row5:col5 = '1.37E–08'
- unparsed cell Tab1:row7:col5 = '&lt; 2.2E–16'
- unparsed cell Tab1:row11:col5 = '7.08E–07'
- captured model equation CL = 0.00775 * (WT/54)^0.85(fixed)
- captured model equation Q = 0.0386 * (WT/54)^0.85(fixed)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[β_cl_log].parameter_id` | Q319 | Q31 | mismatch |
| `qwen3.8-27b` | `parameters[β_v2_log]` | not captured | 0.72 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q63 | pass | 1.98 | 1.98 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q64 | pass | 2.2 | 2.2 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q900 | pass | 0.00556 | 0.00556 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row4:col3', 'Tab1:row4:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row8:col3', 'Tab1:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row6:col3', 'Tab1:row6:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row10:col3', 'Tab1:row10:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.98 L | not captured | not captured | ['Tab1:row6:col3', 'Tab1:row6:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.2 L | not captured | not captured | ['Tab1:row10:col3', 'Tab1:row10:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_isatuximab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Brillac_2025` / `Brillac_2025::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:03 UTC</sub>
