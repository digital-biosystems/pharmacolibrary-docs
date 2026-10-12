<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;mitoxantrone&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/&quot;},{&quot;label&quot;:&quot;Lacayo_2002 \u00b7 control_arm&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitoxantrone_Brandon2026_reference&quot;,&quot;label&quot;:&quot;Brandon_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Brandon2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Launay1989_reference&quot;,&quot;label&quot;:&quot;Launay_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Launay1989_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mitoxantrone — `Mitoxantrone_Lacayo2002_control_arm`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.615). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**CLnorm and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC and V), so that value has no SI equivalent. Extracted — mitoxantrone: CLnorm 3.8, AUC 66 mg*h/l, V 6.5 l/m 2, t1/2z 0.37 h, t1/2β 3.5 h, CL 57 L/h, t1/2γ 24 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has etoposide and mitoxantrone, with or without cyclosporine, the second reading mitoxantrone, etoposide; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `etoposide and mitoxantrone, with or without cyclosporine`, measured `mitoxantrone`.

## Citation
Lacayo NJ et al., Pharmacokinetic interactions of cyclosp…, Leukemia (2002)
  ·  DOI: [10.1038/sj.leu.2402455](https://doi.org/10.1038/sj.leu.2402455)

## Model component
<dbs-pgx drug="mitoxantrone" model-id="Mitoxantrone_Lacayo2002_control_arm" status="needs_review" stale="false" population="children with de novo acute myeloid leukemia" measured-compound="mitoxantrone" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance l/h/m 2 ) | `Q354` · CLnorm | 3.8 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_0:row4:col1 | — | not captured |
| AUC (mg*h/l) | `Q88` · AUC | 66 | mg*h/l | not captured | [[h] · [mg]] / [l] | not captured | exact (1.0) | tab_0:row5:col1 | — | not captured |
| V 1 (l/m 2 ) | `Q61` · V | 6.5 | l/m 2 | not captured | [l] / [m2] | not captured | space_fold (0.95) | tab_0:row6:col1, tab_0:row13:col1 | — | not captured |
| T . ␣ (h) | `Q57` · t1/2z | 0.37 | h | 1332.0 | [h] | not captured | llm (0.6) | tab_0:row7:col1, tab_0:row14:col1 | — | not captured |
| T . ␤ (h) | `Q60` · t1/2β | 3.5 | h | 12600.0 | [h] | not captured | llm (0.6) | tab_0:row8:col1, tab_0:row15:col1 | — | not captured |
| Clearance (l/h/m 2 ) | `Q22` · CL | 57 | L/h | 1.5833333333333333e-05 | L/h | not captured | exact (1.0) | tab_0:row11:col1 | — | not captured |
| T . ␥ (h) | `Q89` · t1/2γ | 24 | h | 86400.0 | [h] | not captured | llm (0.6) | tab_0:row16:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Etoposide' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col1'])
- dropped unlinked row (NIL): 'Dose (mg/m 2 )' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1'])
- unit_dimension_unknown: 'l/m 2' (V1)
- dropped unlinked row (NIL): 'Mitoxantrone' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1'])
- unit_dimension_unknown: 'l/h/m 2' (CL)
- dropped duplicate Q88 ('AUC (ng*h/l)', value '194') — already have one for this compound
- implicit units: 'Clearance l/h/m 2 )' — the LLM proposed 'L/h/m2', whose dimension does not fit Q354; left unset
- implicit units: 'V 1 (l/m 2 )' — the LLM proposed 'L/m2', whose dimension does not fit Q63; left unset
- implicit units: 'Clearance (l/h/m 2 )' → L/h (from the popPK convention: 'The excerpts do not state a unit. This is an unindexed clearance, conventionally expressed in L/h; a value of 57 is cons')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mitoxantrone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V 1 (l/m 2 )' is the general volume)
- status held at route_to_review — not promoted
- population split: 'control arm' subgroup of Lacayo_2002 (paper reports 3 populations: control arm, no toxicity, p value a)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row3:col4 = 'Ͻ0.001'
- unparsed cell tab_0:row8:col4 = 'Ͻ0.001'
- unparsed cell tab_0:row10:col1 = '1 0'
- unparsed cell tab_0:row10:col4 = 'Ͻ0.001'
- unparsed cell tab_0:row16:col4 = 'Ͻ0.001'
- unparsed cell Lacayo_2002_table_4:row1:col1 = '73.6 (36.5) 68.3 (30.1)'
- unparsed cell Lacayo_2002_table_4:row3:col1 = '214.3 (97.8) 222.8 (96.9)'
- companion parameter table 4 transcribed (2 record(s))
- LLM selected parameter table(s) 1, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clearance l/h/m 2 )].parameter_id` | Q354 | Q22 | mismatch |
| `qwen3.8-27b` | `parameters[clearance]` | 57 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t . ␣].parameter_id` | Q57 | Q361 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | etoposide and mitoxantrone, with or without cyclosporine | mitoxantrone, etoposide | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | mitoxantrone | mitoxantrone, etoposide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row11:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row14:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_0:row8:col1', 'tab_0:row15:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row5:col1'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['tab_0:row16:col1'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | l/m 2 | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row13:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 57.0 | not captured | not captured | ['tab_0:row11:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 57 L/h | not captured | not captured | ['tab_0:row11:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mitoxantrone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lacayo_2002` / `Lacayo_2002::control_arm`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 19:30 UTC</sub>
