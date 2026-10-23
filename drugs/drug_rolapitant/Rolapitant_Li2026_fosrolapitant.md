<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;rolapitant&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/&quot;},{&quot;label&quot;:&quot;Li_2026 \u00b7 fosrolapitant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rolapitant_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rolapitant — `Rolapitant_Li2026_fosrolapitant`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The rolapitant parent–metabolite model was quarantined because rolapitant's clearance, volume of distribution, absorption rate constant and lag time had no reported values and were left at library defaults, while the structure also mismatched the intended parent–metabolite topology.

<div class="pk-model-meta" hidden drug="rolapitant" model-id="Rolapitant_Li2026_fosrolapitant" status="model_quarantined" stale="false" population="Chinese subjects with impaired or normal liver function" measured-compound="rolapitant" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Li Q, Mai J, Wu M, Zhang H, Yang X, Huang Y et al. Pharmacokinetics, safety, and population pharmacokinetic profiles of Ritanine. Frontiers in pharmacology 17:1833170 (2026).
  ·  DOI: [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170)

## Population and dosing

**Population:** Chinese subjects with impaired or normal liver function · condition hepatic impairment · age group adult.

**Dosing:** 0.25, 218 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed fosrolapitant, measured rolapitant.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 10740.00 | ng/mL |
| AUC0-t (h × ng/mL) | AUCt | 10298.30 | h*ng/mL |
| AUC0−∞ (h × ng/mL) | AUC∞ | 10307.42 | h*ng/mL |
| t1/2 (hour) | t1/2z | 0.42 | hour |
| V (L) | Vm/F | 13.64 | L |
| CL (L/h) | CLm/F | 21.98 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The rolapitant parent–metabolite model was quarantined because rolapitant's clearance, volume of distribution, absorption rate constant and lag time had no reported values and were left at library defaults, while the structure also mismatched the intended parent–metabolite topology.**

The record lists only summary exposure statistics for rolapitant (Cmax 10740.00 ng/mL, AUC0-t 10298.30 h*ng/mL, AUC0−∞ 10307.42 h*ng/mL, t1/2 0.42 h) and apparent metabolite parameters (Vm/F 13.64 L, CLm/F 21.98 L/h), but no estimated clearance, volume, ka or Tlag for rolapitant itself, so placeholders stood in. The topology check expected a parent–metabolite structure but obtained a one-compartment enteral structure, and the deviations check flagged defaulted parameters, the apparent assumption (F=1, Fm=1, no molar correction) and an invented absorption constant as unacceptable. Additionally, one reported unit could not be converted to SI, so that parameter reached the model builder without an SI value. A second reader also proposed an extra metabolism link from rolapitant to m19 that this record does not contain. Extracted — rolapitant: Cmax 1.07e+04 ng/mL, AUCt 1.03e+04 h*ng/mL, AUC∞ 1.03e+04 h*ng/mL, t1/2z 0.42 hour, Vm/F 13.6 L, CLm/F 22 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fosrolapitant, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 10740.00 | ng/mL |  |  | ng/ml | exact (1) | T2:row2:col1, T2:row2:col2 |
| AUC0-t (h × ng/mL) | `Q19` · AUCt | 10298.30 | h*ng/mL |  |  | h*ng/mL | exact (1) | T2:row4:col1, T2:row4:col2 |
| AUC0−∞ (h × ng/mL) | `Q17` · AUC∞ | 10307.42 | h*ng/mL |  |  | h*ng/mL | exact (1) | T2:row5:col1, T2:row5:col2 |
| t1/2 (hour) | `Q57` · t1/2z | 0.42 | hour | 1512 | s | h | exact (1) | T2:row6:col1, T2:row6:col2 |
| V (L) | `Q367` · Vm/F | 13.64 | L | 0.01364 | m3 | l | exact (1) | T2:row7:col1, T2:row7:col2 |
| CL (L/h) | `Q351` · CLm/F | 21.98 | L/h | 6.106e-06 | m3/s | l/h | exact (1) | T2:row8:col1, T2:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h × ng/mL' (AUCt)
- unit_dimension_unknown: 'h × ng/mL' (AUC∞)
- implicit units: 'AUC0-t (h × ng/mL)' → h*ng/mL (from the paper text: "The paper text explicitly states: 'the geometric mean AUC0-t values of palonosetron were 29.59 and 16.69 hng/mL'.")
- implicit units: 'AUC0−∞ (h × ng/mL)' → h*ng/mL (from the paper text: "The paper text explicitly states: 'AUC0-t and AUC0−∞ were increased, with geometric mean ratios... of 1.77... and 1.46..")
- metabolite rolapitant: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite rolapitant: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rolapitant
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'fosrolapitant' subgroup of Li_2026 (paper reports 4 populations: fosrolapitant, healthy control, moderate hepatic impairment, rolapitant)
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged fosrolapitant→parent ×12, rolapitant→parent ×8, parent→rolapitant ×4
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table S1 transcribed (8 record(s))
- LLM selected parameter table(s) 2, S1, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/16 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fosrolapitant', 'rolapitant', 'metabolism']] | [['fosrolapitant', 'rolapitant', 'metabolism'], ['rolapitant', 'm19', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 10307.42 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 10307.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | 10298.30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` |  | 10298.30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 21.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 21.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 10740.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 10740.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 0.42 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 0.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 13.64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 13.64 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fosrolapitant | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rolapitant | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['T2:row5:col1', 'T2:row5:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['T2:row4:col1', 'T2:row4:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T2:row2:col1', 'T2:row2:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T2:row8:col1', 'T2:row8:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['T2:row7:col1', 'T2:row7:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row6:col1', 'T2:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.27 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.61 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.74 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 0.42 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 0.64 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 81.8 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 44.32 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.00–1.25 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 240 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 192 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brolapitant%5D%20Rolapitant_Li2026_fosrolapitant&body=Drug%3A%20rolapitant%0ARecord%3A%20Rolapitant_Li2026_fosrolapitant%0APaper%3A%20Li_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rolapitant/Rolapitant_Li2026_fosrolapitant%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 14:36 UTC</sub>
