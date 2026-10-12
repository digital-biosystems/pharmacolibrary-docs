<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/&quot;},{&quot;label&quot;:&quot;Lowenthal_1974 \u00b7 patients&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium salicylate — `SodiumSalicylate_Lowenthal1974_patients`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The 0.00879 min⁻¹ rate constant was rejected because its unit could not be converted to SI, causing a dimension mismatch.**

The record reports a micro-rate constant (k₆₁) of 0.00879 min⁻¹. Although the unit is standard, it was not recognized by the review system, so the parameter lacked a valid SI value. This prevented the dimensional consistency check from passing, resulting in the model's rejection. Extracted — sodium salicylate: λ1 0.408 min⁻¹, kel 0.0026 1/min, k13 0.281 min⁻¹, k31 0.121 min⁻¹, kcomp 0.00879 min⁻¹, V 0.05 liter/kg, Vnorm 0.168 liter/kg, t1/2z 266 min, … (+1).

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `sodium salicylate`, measured `salicylic acid`.

## Citation
Lowenthal DT et al., Kinetics of salicylate elimination by a…, The Journal of clinical inv… (1974)
  ·  DOI: [10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

<div class="pk-model-meta" hidden drug="sodium salicylate" model-id="SodiumSalicylate_Lowenthal1974_patients" status="rejected" stale="false" population="anephric patients" measured-compound="salicylic acid" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A, mg/liter | `Q900` · equation variable | 123 | mg/liter | not captured | [mg] / [l] | not captured | llm (0.6) | Lowenthal_1974_table_2:row1:col1, Lowenthal_1974_table_2:row1:col2, Lowenthal_1974_table_2:row1:col3, Lowenthal_1974_table_2:row1:col4, Lowenthal_1974_table_2:row1:col5, Lowenthal_1974_table_2:row1:col6 | — | not captured |
| α, min⁻¹ | `Q67` · λ1 | 0.408 | min⁻¹ | not captured | [1] / [min] | not captured | exact (1.0) | Lowenthal_1974_table_2:row3:col1, Lowenthal_1974_table_2:row3:col2, Lowenthal_1974_table_2:row3:col3, Lowenthal_1974_table_2:row3:col4, Lowenthal_1974_table_2:row3:col5, Lowenthal_1974_table_2:row3:col6 | — | not captured |
| β,* min⁻¹ | `Q47` · kel | 0.00260 | 1/min | 4.3333333333333334e-05 | 1/h | not captured | exact (1.0) | Lowenthal_1974_table_2:row4:col1, Lowenthal_1974_table_2:row4:col2, Lowenthal_1974_table_2:row4:col3, Lowenthal_1974_table_2:row4:col4, Lowenthal_1974_table_2:row4:col5, Lowenthal_1974_table_2:row4:col6 | — | not captured |
| k₁₃, min⁻¹ | `Q303` · k13 | 0.281 | min⁻¹ | 0.004683333333333334 | [1] / [min] | not captured | exact (1.0) | Lowenthal_1974_table_2:row5:col1, Lowenthal_1974_table_2:row5:col2, Lowenthal_1974_table_2:row5:col3, Lowenthal_1974_table_2:row5:col4, Lowenthal_1974_table_2:row5:col5, Lowenthal_1974_table_2:row5:col6 | — | not captured |
| k₃₁, min⁻¹ | `Q304` · k31 | 0.121 | min⁻¹ | 0.0020166666666666666 | [1] / [min] | not captured | exact (1.0) | Lowenthal_1974_table_2:row6:col1, Lowenthal_1974_table_2:row6:col2, Lowenthal_1974_table_2:row6:col3, Lowenthal_1974_table_2:row6:col4, Lowenthal_1974_table_2:row6:col5, Lowenthal_1974_table_2:row6:col6 | — | not captured |
| k₆₁, min⁻¹ | `Q48` · kcomp | 0.00879 | min⁻¹ | 0.00014649999999999998 | [1] / [min] | not captured | exact (1.0) | Lowenthal_1974_table_2:row7:col1, Lowenthal_1974_table_2:row7:col2, Lowenthal_1974_table_2:row7:col3, Lowenthal_1974_table_2:row7:col4, Lowenthal_1974_table_2:row7:col5, Lowenthal_1974_table_2:row7:col6 | — | not captured |
| Vₐ, liter/kg | `Q61` · V | 0.050 | liter/kg | 0.0035 | [l] / [kg] | not captured | llm (0.6) | Lowenthal_1974_table_2:row8:col1, Lowenthal_1974_table_2:row8:col2, Lowenthal_1974_table_2:row8:col3, Lowenthal_1974_table_2:row8:col4, Lowenthal_1974_table_2:row8:col5, Lowenthal_1974_table_2:row8:col6 | — | not captured |
| Vₐ (area), liter/kg | `Q352` · Vnorm | 0.168 | liter/kg | 0.011760000000000001 | [l] / [kg] | not captured | llm (0.6) | Lowenthal_1974_table_2:row9:col1, Lowenthal_1974_table_2:row9:col2, Lowenthal_1974_table_2:row9:col3, Lowenthal_1974_table_2:row9:col4, Lowenthal_1974_table_2:row9:col5, Lowenthal_1974_table_2:row9:col6 | — | not captured |
| t₁/₂ (β), min | `Q57` · t1/2z | 266 | min | 15960.0 | [min] | not captured | space_fold (0.95) | Lowenthal_1974_table_2:row10:col1, Lowenthal_1974_table_2:row10:col2, Lowenthal_1974_table_2:row10:col3, Lowenthal_1974_table_2:row10:col4, Lowenthal_1974_table_2:row10:col5, Lowenthal_1974_table_2:row10:col6 | — | not captured |
| lag time | `Q83` · tlag | 0.42 | h | 1512.0 | h | not captured | review_gapfill (0.7) | Somani_2016:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'patients' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'B, mg/liter' — extend the ontology if this is a real PK parameter (source ['Lowenthal_1974_table_2:row2:col1', 'Lowenthal_1974_table_2:row2:col2', 'Lowenthal_1974_table_2:row2:col3', 'Lowenthal_1974_table_2:row2:col4', 'Lowenthal_1974_table_2:row2:col5', 'Lowenthal_1974_table_2:row2:col6'])
- unit_dimension_mismatch: 'α, min⁻¹' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_unknown: '* min⁻¹' (kel)
- implicit units: 'β,* min⁻¹' → 1/min (from the paper text: "Table III lists the parameter β with the unit 'min-' (OCR artifact for min⁻¹), and the footnote for Table II explicitly ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'patients' subgroup of Lowenthal_1974 (paper reports 3 populations: four normal subjects*, patients, six anephric patients)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Somani_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Lowenthal_1974_table_3:row5:col3 = '&gt; 0.7'
- unparsed cell Lowenthal_1974_table_3:row6:col3 = '&gt; 0.8'
- unparsed cell Lowenthal_1974_table_3:row7:col3 = '&gt; 0.1'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row5:col1', 'Lowenthal_1974_table_2:row5:col2', 'Lowenthal_1974_table_2:row5:col3', 'Lowenthal_1974_table_2:row5:col4', 'Lowenthal_1974_table_2:row5:col5', 'Lowenthal_1974_table_2:row5:col6'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row6:col1', 'Lowenthal_1974_table_2:row6:col2', 'Lowenthal_1974_table_2:row6:col3', 'Lowenthal_1974_table_2:row6:col4', 'Lowenthal_1974_table_2:row6:col5', 'Lowenthal_1974_table_2:row6:col6'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row9:col1', 'Lowenthal_1974_table_2:row9:col2', 'Lowenthal_1974_table_2:row9:col3', 'Lowenthal_1974_table_2:row9:col4', 'Lowenthal_1974_table_2:row9:col5', 'Lowenthal_1974_table_2:row9:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row4:col1', 'Lowenthal_1974_table_2:row4:col2', 'Lowenthal_1974_table_2:row4:col3', 'Lowenthal_1974_table_2:row4:col4', 'Lowenthal_1974_table_2:row4:col5', 'Lowenthal_1974_table_2:row4:col6'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row7:col1', 'Lowenthal_1974_table_2:row7:col2', 'Lowenthal_1974_table_2:row7:col3', 'Lowenthal_1974_table_2:row7:col4', 'Lowenthal_1974_table_2:row7:col5', 'Lowenthal_1974_table_2:row7:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row10:col1', 'Lowenthal_1974_table_2:row10:col2', 'Lowenthal_1974_table_2:row10:col3', 'Lowenthal_1974_table_2:row10:col4', 'Lowenthal_1974_table_2:row10:col5', 'Lowenthal_1974_table_2:row10:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lowenthal_1974_table_2:row8:col1', 'Lowenthal_1974_table_2:row8:col2', 'Lowenthal_1974_table_2:row8:col3', 'Lowenthal_1974_table_2:row8:col4', 'Lowenthal_1974_table_2:row8:col5', 'Lowenthal_1974_table_2:row8:col6'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | not captured | not captured | ['Lowenthal_1974_table_2:row3:col1', 'Lowenthal_1974_table_2:row3:col2', 'Lowenthal_1974_table_2:row3:col3', 'Lowenthal_1974_table_2:row3:col4', 'Lowenthal_1974_table_2:row3:col5', 'Lowenthal_1974_table_2:row3:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Somani_2016:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.5 L | not captured | not captured | ['Lowenthal_1974_table_2:row8:col1', 'Lowenthal_1974_table_2:row8:col2', 'Lowenthal_1974_table_2:row8:col3', 'Lowenthal_1974_table_2:row8:col4', 'Lowenthal_1974_table_2:row8:col5', 'Lowenthal_1974_table_2:row8:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sodium_salicylate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lowenthal_1974` / `Lowenthal_1974::patients`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:13 UTC</sub>
