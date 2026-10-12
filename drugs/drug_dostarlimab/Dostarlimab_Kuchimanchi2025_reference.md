<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/&quot;},{&quot;label&quot;:&quot;Kuchimanchi_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dostarlimab_Melhem2022_mean&quot;,&quot;label&quot;:&quot;Melhem_2022_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Kuchimanchi2025_reference&quot;,&quot;label&quot;:&quot;Kuchimanchi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dostarlimab — `Dostarlimab_Kuchimanchi2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.382, model 0.138); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — dostarlimab: CL 0.00732 L/h, V1 3.09 L, Q 0.0191 L/h, V2 2.48 L, t1/2z 145 days.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[central volume of distribution (vc (l))].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025)
  ·  DOI: [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325)

<div class="pk-model-meta" hidden drug="dostarlimab" model-id="Dostarlimab_Kuchimanchi2025_reference" status="needs_review" stale="false" population="patients with primary advanced or recurrent endometrial cancer" measured-compound="dostarlimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL [L·h−1]) | `Q22` · CL | 0.00732 | L/h | 2.0333333333333333e-09 | L/h | 2.03 | exact (1.0) | bcp16325-tbl-0002:row1:col1, bcp16325-tbl-0002:row1:col2, bcp16325-tbl-0002:row1:col3 | — | None (6.97% RSE) |
| Central volume of distribution (Vc (L)) | `Q63` · V1 | 3.09 | L | 0.00309 | L | 0.754 | boundary_compartment (0.9) | bcp16325-tbl-0002:row2:col1, bcp16325-tbl-0002:row2:col2, bcp16325-tbl-0002:row2:col3 | — | None (8.30% RSE) |
| Intercompartmental clearance (Q [L·h−1]) | `Q30` · Q | 0.0191 | L/h | 5.305555555555555e-09 | L/h | 12.0 | exact (1.0) | bcp16325-tbl-0002:row5:col1, bcp16325-tbl-0002:row5:col2, bcp16325-tbl-0002:row5:col3 | — | not captured |
| Peripheral volume of distribution (Vp (L)) | `Q64` · V2 | 2.48 | L | 0.00248 | L | 5.18 | boundary_compartment (0.9) | bcp16325-tbl-0002:row6:col1, bcp16325-tbl-0002:row6:col2, bcp16325-tbl-0002:row6:col3 | — | not captured |
| T50 (days) | `Q57` · t1/2z | 145 | days | 12528000.0 | [d] | 12.9 | llm (0.6) | bcp16325-tbl-0002:row8:col1, bcp16325-tbl-0002:row8:col2, bcp16325-tbl-0002:row8:col3 | — | not captured |
| Effect of ALT on CL | `Q900` · equation variable | -0.0623 | not captured | not captured | not captured | 26.5 | llm_corrected (0.6) | bcp16325-tbl-0002:row15:col1, bcp16325-tbl-0002:row15:col2 | — | not captured |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.523 | not captured | not captured | not captured | 7.78 | not captured (not captured) | bcp16325-tbl-0002:row10:col1, bcp16325-tbl-0002:row10:col2, bcp16325-tbl-0002:row10:col3 | — | not captured |
| theta_v1_wt | `Q900` · theta_v1_wt | 0.48 | not captured | not captured | not captured | 4.75 | not captured (not captured) | bcp16325-tbl-0002:row11:col1, bcp16325-tbl-0002:row11:col2, bcp16325-tbl-0002:row11:col3 | — | not captured |
| theta_cl_age | `Q900` · theta_cl_age | -0.238 | not captured | not captured | not captured | 26.2 | not captured (not captured) | bcp16325-tbl-0002:row13:col1, bcp16325-tbl-0002:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CL [L·h−1]' (CL)
- unit_dimension_unknown: 'Q [L·h−1]' (Q)
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16325-tbl-0002:row7:col1', 'bcp16325-tbl-0002:row7:col2'])
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16325-tbl-0002:row9:col1', 'bcp16325-tbl-0002:row9:col2', 'bcp16325-tbl-0002:row9:col3'])
- dropped unlinked row (NIL): 'Effect of ALB on CL' — extend the ontology if this is a real PK parameter (source ['bcp16325-tbl-0002:row14:col1', 'bcp16325-tbl-0002:row14:col2'])
- dropped duplicate Q22 ('Effect of combination therapy on CL', value '-0.0779') — already have one for this compound
- dropped duplicate Q22 ('Effect of male on CL', value '0.15') — already have one for this compound
- dropped duplicate Q63 ('Effect of ALB on Vc', value '-0.132') — already have one for this compound
- dropped duplicate Q63 ('Effect of male on Vc', value '0.137') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Clearance (CL [L·h−1])' → L/h (from the paper text: 'The parameter is listed as “Clearance (CL [L·h−1])”. This explicitly states L/h.')
- implicit units: 'Central volume of distribution (Vc (L))' → L (from the paper text: 'The parameter is listed as “Central volume of distribution (Vc (L))”. This explicitly states L.')
- implicit units: 'Intercompartmental clearance (Q [L·h−1])' → L/h (from the paper text: 'The parameter is listed as “Intercompartmental clearance (Q [L·h−1])”. This explicitly states L/h.')
- implicit units: 'Peripheral volume of distribution (Vp (L))' → L (from the paper text: 'The parameter is listed as “Peripheral volume of distribution (Vp (L))”. This explicitly states L.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dostarlimab
- molar mass: none found for 'dostarlimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp16325-tbl-0002:row7:col3 = '(−0.157 to −0.0704)'
- unparsed cell bcp16325-tbl-0002:row13:col3 = '(−0.360 to −0.116)'
- unparsed cell bcp16325-tbl-0002:row14:col3 = '(−1.06 to −0.778)'
- unparsed cell bcp16325-tbl-0002:row15:col3 = '(−0.0947 to −0.0300)'
- unparsed cell bcp16325-tbl-0002:row16:col3 = '(−0.118 to −0.0384)'
- unparsed cell bcp16325-tbl-0002:row18:col3 = '(−0.222 to −0.0409)'
- unparsed cell bcp16325-tbl-0002:row20:col1 = '0.0563 (23.7% CV)'
- unparsed cell bcp16325-tbl-0002:row22:col1 = '0.0278 (16.7% CV)'
- unparsed cell bcp16325-tbl-0002:row23:col1 = '0.903 (95.0% CV)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[central volume of distribution (vc (l))].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[clearance].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[effect of alb on vc]` | not captured | -0.132 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of alt on cl]` | -0.0623 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_age_on_cl]` | not captured | -0.238 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_wt_on_cl]` | not captured | 0.523 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_wt_on_vc_and_vp]` | not captured | 0.48 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t50]` | 145 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_age]` | -0.238 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.523 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_wt]` | 0.48 | not captured | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16325-tbl-0002:row1:col1', 'bcp16325-tbl-0002:row1:col2', 'bcp16325-tbl-0002:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16325-tbl-0002:row5:col1', 'bcp16325-tbl-0002:row5:col2', 'bcp16325-tbl-0002:row5:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['bcp16325-tbl-0002:row8:col1', 'bcp16325-tbl-0002:row8:col2', 'bcp16325-tbl-0002:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp16325-tbl-0002:row2:col1', 'bcp16325-tbl-0002:row2:col2', 'bcp16325-tbl-0002:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp16325-tbl-0002:row6:col1', 'bcp16325-tbl-0002:row6:col2', 'bcp16325-tbl-0002:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00732 | not captured | not captured | ['bcp16325-tbl-0002:row1:col1', 'bcp16325-tbl-0002:row1:col2', 'bcp16325-tbl-0002:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00732 L/h | not captured | not captured | ['bcp16325-tbl-0002:row1:col1', 'bcp16325-tbl-0002:row1:col2', 'bcp16325-tbl-0002:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.09 L | not captured | not captured | ['bcp16325-tbl-0002:row2:col1', 'bcp16325-tbl-0002:row2:col2', 'bcp16325-tbl-0002:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.48 L | not captured | not captured | ['bcp16325-tbl-0002:row6:col1', 'bcp16325-tbl-0002:row6:col2', 'bcp16325-tbl-0002:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=dostarlimab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.382 | 0.13773091363802034 | 0.3606 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.72 | 0.13773091363802034 | not captured | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | pass | 0.147 | 0.13773091363802034 | 0.9369 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 0.145 | 0.13773091363802034 | 0.9499 | mg/L→SI vs simulated kg/m3 |
| T1_cmin_ss | reference | skipped | 39.70 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 39.50 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 15.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dostarlimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kuchimanchi_2025` / `Kuchimanchi_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_dostarlimab/models/modelica/Dostarlimab_Kuchimanchi2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dostarlimab/models/modelica/Dostarlimab_Kuchimanchi2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_dostarlimab/models/modelica/Dostarlimab_Kuchimanchi2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_modelica.zip" download>Dostarlimab_Kuchimanchi2025_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_fmi.zip" download>Dostarlimab_Kuchimanchi2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_matlab.zip" download>Dostarlimab_Kuchimanchi2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_matlab_simbio.zip" download>Dostarlimab_Kuchimanchi2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_sbml.zip" download>Dostarlimab_Kuchimanchi2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_cellml.zip" download>Dostarlimab_Kuchimanchi2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference.svg" alt="Dostarlimab_Kuchimanchi2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 500 mg infusion over 10 min, single dose. Doses in the paper: 500, 1000 mg.

<dbs-fmusim paramsurl="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Dostarlimab_Kuchimanchi2025_reference_params.json` · controls `Dostarlimab_Kuchimanchi2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:09 UTC</sub>
