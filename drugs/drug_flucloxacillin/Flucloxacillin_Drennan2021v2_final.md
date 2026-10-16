<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/&quot;},{&quot;label&quot;:&quot;Drennan_2021_2 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucloxacillin — `Flucloxacillin_Drennan2021v2_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Flucloxacillin bioavailability 51.3 was interpreted as a unit, not a percentage, causing a negative volume check failure.**

The absolute bioavailability parameter Fab has a value of 51.3 with no unit specified. The missing unit prevented conversion to SI, leading to an implausible covariate scenario check. A second reader disagreed on multiple parameter extractions, including bioavailability and volume parameters. Extracted — flucloxacillin: tlag 52.6 h, kabs 11.8 h−1, V 48.4 L, CL 18.5 L h−1, CLint -0.653, Fab 51.3.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flucloxacillin, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `flucloxacillin`, measured `free flucloxacillin`.

## Citation
Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887)

<div class="pk-model-meta" hidden drug="flucloxacillin" model-id="Flucloxacillin_Drennan2021v2_final" status="rejected" stale="false" population="adults with staphylococcal infections and healthy adults" measured-compound="free flucloxacillin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag,abs (h) | `Q83` · tlag | 52.6 | h | 189360.0 | [h] | not captured | llm_confirmed (0.6) | Drennan_2021_2_table_p5_1:row1:col3, Drennan_2021_2_table_p5_1:row1:col4, Drennan_2021_2_table_p5_1:row1:col5 | — | not captured |
| kabs (h−1) | `Q49` · kabs | 11.8 | h−1 | 0.003277777777777778 | [1] / [h] | not captured | exact (1.0) | Drennan_2021_2_table_p5_1:row3:col3, Drennan_2021_2_table_p5_1:row3:col4, Drennan_2021_2_table_p5_1:row3:col5 | — | 996 (None% RSE) |
| Vpop (L) | `Q61` · V | 48.4 | L | 0.0484 | [l] | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row5:col3, Drennan_2021_2_table_p5_1:row5:col4, Drennan_2021_2_table_p5_1:row5:col5 | — | not captured |
| CLpop (L h−1) | `Q22` · CL | 18.5 | L h−1 | 5.138888888888889e-06 | [l] / [h] | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row7:col3, Drennan_2021_2_table_p5_1:row7:col4, Drennan_2021_2_table_p5_1:row7:col5 | — | 81.1 (None% RSE) |
| βCL fasting | `Q3` · CLint | -0.653 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Drennan_2021_2_table_p5_1:row10:col4, Drennan_2021_2_table_p5_1:row10:col5 | — | not captured |
| βFferrite | `Q40` · Fab | 51.3 | not captured | not captured | not captured | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row11:col3, Drennan_2021_2_table_p5_1:row11:col4, Drennan_2021_2_table_p5_1:row11:col5 | — | not captured |
| a (mg/L) | `Q900` · equation variable | 6.66 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row25:col3, Drennan_2021_2_table_p5_1:row25:col4, Drennan_2021_2_table_p5_1:row25:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωabs' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωkabs' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωV' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωCL' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iov: 'γabs' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γk' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γV' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γCL' routed out of structural estimates ('Between occasion variability (standard deviation)')
- dropped duplicate Q83 ('βTlag,abs', value '-0.987') — already have one for this compound
- dropped duplicate Q49 ('βkabs', value '1.16') — already have one for this compound
- dropped unlinked row (NIL): 'βCLprobenecid' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row8:col4', 'Drennan_2021_2_table_p5_1:row8:col5'])
- dropped duplicate Q900 ('b', value '7.4') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=free flucloxacillin
- model-stage split: 'final model' is the final model of Drennan_2021_2 (paper reports 2 stages: base model, final model); same population, different model-building step
- molar mass: no plausible PubChem entry for 'free flucloxacillin' ('free flucloxacillin') — left in mass units
- molar mass: none found for 'free flucloxacillin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Drennan_2021_2_table_p5_1:row1:col7 = '0.321 (0.057–0.552)'
- unparsed cell Drennan_2021_2_table_p5_1:row2:col7 = '-0.78 (-3.72 to -0.287)'
- unparsed cell Drennan_2021_2_table_p5_1:row3:col7 = '0.625 (0.448–0.788)'
- unparsed cell Drennan_2021_2_table_p5_1:row4:col7 = '1.18 (0.138–1.62)'
- unparsed cell Drennan_2021_2_table_p5_1:row5:col7 = '535 (291–641)'
- unparsed cell Drennan_2021_2_table_p5_1:row7:col7 = '413 (305–581)'
- unparsed cell Drennan_2021_2_table_p5_1:row8:col7 = '0.013 (0.006–0.019)'
- unparsed cell Drennan_2021_2_table_p5_1:row10:col7 = '-0.668 (-0.987 to -0.396)'
- unparsed cell Drennan_2021_2_table_p5_1:row11:col7 = '1.01 (0.806–1.36)'
- unparsed cell Drennan_2021_2_table_p5_1:row14:col7 = '0.198 (0.073–0.442)'
- unparsed cell Drennan_2021_2_table_p5_1:row15:col7 = '0.163 (0.069–0.304)'
- unparsed cell Drennan_2021_2_table_p5_1:row16:col7 = '0.142 (0.04–0.297)'
- unparsed cell Drennan_2021_2_table_p5_1:row17:col7 = '0.251 (0.1–0.34)'
- unparsed cell Drennan_2021_2_table_p5_1:row19:col7 = '0.489 (0.055–0.686)'
- unparsed cell Drennan_2021_2_table_p5_1:row20:col7 = '0.185 (0.069–0.601)'
- unparsed cell Drennan_2021_2_table_p5_1:row21:col7 = '0.306 (0.19–0.508)'
- unparsed cell Drennan_2021_2_table_p5_1:row22:col7 = '0.27 (0.188–0.324)'
- unparsed cell Drennan_2021_2_table_p5_1:row25:col7 = '0.059 (0.003–0.093)'
- unparsed cell Drennan_2021_2_table_p5_1:row26:col7 = '0.206 (0.17–0.284)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[βcl fasting]` | -0.653 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[βfferrite].parameter_id` | Q40 | Q47 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | flucloxacillin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | free flucloxacillin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q3 | fail | not captured | -0.653 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row3:col3', 'Drennan_2021_2_table_p5_1:row3:col4', 'Drennan_2021_2_table_p5_1:row3:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row5:col3', 'Drennan_2021_2_table_p5_1:row5:col4', 'Drennan_2021_2_table_p5_1:row5:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row1:col3', 'Drennan_2021_2_table_p5_1:row1:col4', 'Drennan_2021_2_table_p5_1:row1:col5'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row10:col4', 'Drennan_2021_2_table_p5_1:row10:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.5 | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.5 L/h | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 48.4 L | not captured | not captured | ['Drennan_2021_2_table_p5_1:row5:col3', 'Drennan_2021_2_table_p5_1:row5:col4', 'Drennan_2021_2_table_p5_1:row5:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_flucloxacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Drennan_2021_2` / `Drennan_2021_2::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:02 UTC</sub>
