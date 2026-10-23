<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;methadone&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/&quot;},{&quot;label&quot;:&quot;Foster_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methadone_Shin2024_reference&quot;,&quot;label&quot;:&quot;Shin_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Shin2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methadone_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methadone — `Methadone_Foster2004_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 03:32 UTC); the status shown comes from the current checks. Methadone's Vd, ka and Tlag were not reported, so library defaults were substituted and the model was quarantined; k12 (0.16 h-1) was also not covered.

<div class="pk-model-meta" hidden drug="methadone" model-id="Methadone_Foster2004_reference" status="needs_review" stale="true" population="methadone maintenance patients" measured-compound="(R)-methadone" parameterization="apparent" topology="1C"></div>

## Citation
Foster DJ, Somogyi AA, White JM, Bochner F. Population pharmacokinetics of (R)-, (S)- and rac-methadone in methadone maintenance patients. British journal of clinical pharmacology 57(6):742–755 (2004).
  ·  DOI: [10.1111/j.1365-2125.2004.02079.x](https://doi.org/10.1111/j.1365-2125.2004.02079.x)

## Population and dosing

**Population:** methadone maintenance patients · condition opioid dependence · age group adult · n = 59.

**Dosed compound ≠ measured compound:** dosed rac-methadone, measured (R)-methadone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (l h -1 ) | CL/F | 0.19 | l h -1 |
| k 12 (h -1 ) | k12 | 0.16 | h -1 |
| AUC t (mg.hr. ml -1 ) † | AUCt | 0.026 | mg.hr. ml -1 |
| C last (ng.ml -1 ) † | Ct | 0.24 | ng.ml -1 |
| apparent volume of distribution for R-methadone | V/F | 496.0 | L |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Methadone's Vd, ka and Tlag were not reported, so library defaults were substituted and the model was quarantined; k12 (0.16 h-1) was also not covered.**

The record reports only CL/F (0.19 l h-1) and k12 (0.16 h-1) for methadone; volume of distribution, absorption rate constant and absorption lag time had no source value, so placeholders stood in and the model was held back rather than published with invented numbers. The k12 parameter was neither emitted nor defaulted, so parameter coverage covered 1 of 2 expected parameters. The builder also assumed F=1 and Fm=1 with no molar correction (apparent parameterization) and defaulted ka, which was judged an invented absorption deviation. The covariate effects defined in the record were not simulated — only the reference individual was. A second reader additionally disagreed on the analyte, reading rac-methadone rather than methadone, and proposed R/S-enantiomer interconversion links absent from the record. Extracted — methadone: CL/F 0.19 l h -1, k12 0.16 h -1, AUC 0.026, Ct 0.24.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rac-methadone, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 0.19 | l h -1 | 5.278e-08 | m3/s | l/h | exact (1) | tab_1:row1:col4 |
| k 12 (h -1 ) | `Q301` · k12 | 0.16 | h -1 | 4.444e-05 | 1/s | 1/h | space_fold (0.95) | tab_1:row3:col4 |
| AUC t (mg.hr. ml -1 ) † | `Q19` · AUCt | 0.026 | mg.hr. ml -1 |  |  | (h·mg)/ml | space_fold (0.95) | tab_1:row12:col4 |
| C last (ng.ml -1 ) † | `Q75` · Ct | 0.24 | ng.ml -1 |  |  | ng/ml | llm (0.6) | tab_1:row15:col4 |
| apparent volume of distribution for R-methadone | `Q76` · V/F | 496.0 | L | 0.496 | m3 | L | review_gapfill (0.7) | Packiasabapathy_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLA | Q22 | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- column 'significance (p-value) ‡' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'F-test (P-value)' — extend the ontology if this is a real PK parameter (source ['Foster_2004_table_3:row7:col1', 'Foster_2004_table_3:row7:col2', 'Foster_2004_table_3:row7:col3'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 70 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 35 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=(R)-methadone
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q22 (CL): CLA = TVCL*(BW/70)^0.75*(PNA/6.8)^θPNA
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLA'; equation kept verbatim
- gap-filled Q76 (V/F) from Packiasabapathy_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row1:col1 = '8.5 (7.6, 9.5)'
- unparsed cell tab_1:row1:col2 = '8.7 (7.9, 9.6)'
- unparsed cell tab_1:row1:col3 = '8.3 (7.3, 9.5)'
- unparsed cell tab_1:row3:col1 = '0.57 (0.52, 0.61)'
- unparsed cell tab_1:row3:col2 = '0.54 (0.50, 0.58)'
- unparsed cell tab_1:row3:col3 = '0.55 (0.51, 0.59)'
- unparsed cell tab_1:row12:col1 = '8.27 (7.39, 9.26)'
- unparsed cell tab_1:row12:col2 = '4.02 (3.64, 4.44)'
- unparsed cell tab_1:row12:col3 = '4.20 (3.69, 4.79)'
- unparsed cell tab_1:row15:col1 = '269 (236, 308)'
- unparsed cell tab_1:row15:col2 = '139 (124, 156)'
- unparsed cell tab_1:row15:col3 = '128 (109, 150)'
- companion parameter table 3 transcribed (3 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CLA = TVCL*(BW/70)^0.75*(PNA/6.8)^θPNA

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution for r-methadone]` | 496.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c last (ng.ml -1 )]` | 0.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cla]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rac-methadone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | (R)-methadone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_1:row12:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row1:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['tab_1:row3:col4'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['tab_1:row15:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Packiasabapathy_2020:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.19 L/h | ['tab_1:row1:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 496 L | ['Packiasabapathy_2020:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 2 scholar param(s) emitted or defaulted | 1 covered | neither emitted nor in defaulted[]: ['k12'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 84 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 84 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 109 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 162 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 20 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethadone%5D%20Methadone_Foster2004_reference&body=Drug%3A%20methadone%0ARecord%3A%20Methadone_Foster2004_reference%0APaper%3A%20Foster_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methadone/Methadone_Foster2004_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:32 UTC</sub>
