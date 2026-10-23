<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/&quot;},{&quot;label&quot;:&quot;Melhem_2022 \u00b7 estimate_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dostarlimab_Melhem2022_mean&quot;,&quot;label&quot;:&quot;Melhem_2022_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Kuchimanchi2025_reference&quot;,&quot;label&quot;:&quot;Kuchimanchi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dostarlimab — `Dostarlimab_Melhem2022_estimate_b`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Dostarlimab’s clearance, 0.179, was reported with an unconvertible unit, and the record was refused for a structural-parameter dimension mismatch.

<div class="pk-model-meta" hidden drug="dostarlimab" model-id="Dostarlimab_Melhem2022_estimate_b" status="rejected" stale="false" population="patients with advanced solid tumours" measured-compound="dostarlimab" parameterization="mechanistic" topology="2C"></div>

## Citation
Melhem M, Hanze E, Lu S, Alskär O, Visser S, Gandhi Y. Population pharmacokinetics and exposure-response of anti-programmed cell death protein-1 monoclonal antibody dostarlimab in advanced solid tumours. British journal of clinical pharmacology 88(9):4142–4154 (2022).
  ·  DOI: [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339)

## Population and dosing

**Population:** patients with advanced solid tumours · condition advanced solid tumours · age group adult · n = 546.

**Dosing:** 1, 3, 10, 500, 1000 mg kg−1; mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L d −1 ) a | CL | 0.179 | units | 0.0551 (None% RSE) |
| V c (L) a | V1 | 2.98 | units |  |
| Q (L d −1 ) | Q | 0.547 | L d −1 |  |
| V p (L) | V2 | 2.10 | L |  |
| T50 (d) | t1/2z | 108 | d |  |
| Effect of ALT on CL | equation variable | -0.0585 | units |  |
| theta_q319_wt | theta_q319_wt | 0.470 |  |  |
| theta_q319_wt | theta_q319_wt | 0.419 |  |  |
| theta_cl_age | theta_cl_age | -0.227 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.458). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dostarlimab’s clearance, 0.179, was reported with an unconvertible unit, and the record was refused for a structural-parameter dimension mismatch.**

The record labels clearance as L d−1 but lists its unit as “units,” which could not be converted to SI. The finding reports a structural-parameter dimension mismatch but does not identify which parameter failed it. Extracted — dostarlimab: CL 0.179 units, V1 2.98 units, Q 0.547 L d −1, V2 2.1 L, t1/2z 108 d.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl (l d -1 ) a].rse_percent`: this record has none, the second reading 1.57; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L d −1 ) a | `Q22` · CL | 0.179 | units |  |  | units | llm_confirmed (0.6) | bcp15339-tbl-0003:row1:col1 | 0.0551 (None% RSE) |
| V c (L) a | `Q63` · V1 | 2.98 | units |  |  | units | llm (0.6) | bcp15339-tbl-0003:row2:col1 |  |
| Q (L d −1 ) | `Q30` · Q | 0.547 | L d −1 | 6.331e-09 | m3/s | l/d | exact (1) | bcp15339-tbl-0003:row3:col1 |  |
| V p (L) | `Q64` · V2 | 2.10 | L | 0.0021 | m3 | l | space_fold (0.95) | bcp15339-tbl-0003:row4:col1 |  |
| T50 (d) | `Q57` · t1/2z | 108 | d | 9.331e+06 | s | d | llm (0.6) | bcp15339-tbl-0003:row6:col1 |  |
| Effect of ALT on CL | `Q900` · equation variable | -0.0585 | units |  |  | units | llm_corrected (0.6) | bcp15339-tbl-0003:row12:col1 |  |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.470 |  |  |  |  |  | bcp15339-tbl-0003:row8:col1 |  |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.419 |  |  |  |  |  | bcp15339-tbl-0003:row9:col1 |  |
| theta_cl_age | `Q900` · theta_cl_age | -0.227 |  |  |  |  |  | bcp15339-tbl-0003:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL (L d −1 ) a' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V c (L) a' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped PD-category row 'I max a' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp15339-tbl-0003:row5:col1'])
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp15339-tbl-0003:row7:col1'])
- unit_dimension_mismatch: 'Effect of ALB on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('Effect of ALB on CL', value '-1.01') — already have one for this compound
- unit_dimension_mismatch: 'Effect of male on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('Effect of male on CL', value '0.165') — already have one for this compound
- unit_dimension_mismatch: 'Effect of ALB on V c' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('Effect of ALB on V c', value '-0.153') — already have one for this compound
- unit_dimension_mismatch: 'Effect of male on V c' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('Effect of male on V c', value '0.162') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dostarlimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'estimate b' subgroup of Melhem_2022 (paper reports 2 populations: estimate b, mean)
- molar mass: none found for 'dostarlimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp15339-tbl-0003:row1:col3 = '0.173, 0.184'
- unparsed cell bcp15339-tbl-0003:row2:col3 = '2.93, 3.03'
- unparsed cell bcp15339-tbl-0003:row4:col3 = '2.02, 2.18'
- unparsed cell bcp15339-tbl-0003:row5:col3 = '−0.187, −0.134'
- unparsed cell bcp15339-tbl-0003:row6:col3 = '92.6, 124.0'
- unparsed cell bcp15339-tbl-0003:row7:col3 = '4.34, 6.23'
- unparsed cell bcp15339-tbl-0003:row8:col3 = '0.414, 0.527'
- unparsed cell bcp15339-tbl-0003:row9:col3 = '0.376, 0.463'
- unparsed cell bcp15339-tbl-0003:row10:col3 = '−0.360, −0.0951'
- unparsed cell bcp15339-tbl-0003:row11:col3 = '−1.18, −0.835'
- unparsed cell bcp15339-tbl-0003:row12:col3 = '−0.0956, −0.0213'
- unparsed cell bcp15339-tbl-0003:row13:col3 = '0.106, 0.225'
- unparsed cell bcp15339-tbl-0003:row14:col3 = '−0.261, −0.0461'
- unparsed cell bcp15339-tbl-0003:row15:col3 = '0.122, 0.202'
- unparsed cell bcp15339-tbl-0003:row16:col3 = '0.0470, 0.0632'
- unparsed cell bcp15339-tbl-0003:row17:col3 = '0.0164, 0.0255'
- unparsed cell bcp15339-tbl-0003:row18:col3 = '0.0220, 0.0296'
- unparsed cell bcp15339-tbl-0003:row19:col3 = '0.365, 0.710'
- unparsed cell bcp15339-tbl-0003:row20:col3 = '0.126, 0.139'
- unparsed cell bcp15339-tbl-0003:row21:col3 = '1.98, 3.59'
- companion parameter table 4 transcribed (24 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.458 (11/24 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl (l d -1 ) a].rse_percent` |  | 1.57 | mismatch |
| `qwen3.8-27b` | `parameters[effect of alb on v c]` |  | -0.153 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of alt on cl]` | -0.0585 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of male on v c]` |  | 0.162 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q].rse_percent` |  | 9.18 | mismatch |
| `qwen3.8-27b` | `parameters[t50].parameter_id` | Q57 | Q71 | mismatch |
| `qwen3.8-27b` | `parameters[t50].rse_percent` |  | 7.47 | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_age].rse_percent` |  | 29.7 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q314_wt]` |  | 0.419 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.470 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q31_wt]` |  | 0.470 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c (l) a].rse_percent` |  | 0.871 | mismatch |
| `qwen3.8-27b` | `parameters[v p].rse_percent` |  | 2.00 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_alpha | pass | 1.51 | 1.472 | 0.9748 | 0.25 | reported t½α |
| C1_half_life_beta | pass | 23.5 | 20.86 | 0.8877 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | units |  |  | ['bcp15339-tbl-0003:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['bcp15339-tbl-0003:row3:col1'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['bcp15339-tbl-0003:row6:col1'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | units |  |  | ['bcp15339-tbl-0003:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['bcp15339-tbl-0003:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.179 |  |  | ['bcp15339-tbl-0003:row1:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.1 L |  |  | ['bcp15339-tbl-0003:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdostarlimab%5D%20Dostarlimab_Melhem2022_estimate_b&body=Drug%3A%20dostarlimab%0ARecord%3A%20Dostarlimab_Melhem2022_estimate_b%0APaper%3A%20Melhem_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dostarlimab/Dostarlimab_Melhem2022_estimate_b%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:09 UTC</sub>
