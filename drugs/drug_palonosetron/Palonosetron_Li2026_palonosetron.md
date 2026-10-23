<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;palonosetron&quot;,&quot;href&quot;:&quot;drugs/drug_palonosetron/&quot;},{&quot;label&quot;:&quot;Li_2026 \u00b7 palonosetron&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palonosetron — `Palonosetron_Li2026_palonosetron`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record was quarantined because fosrolapitant's clearance and volume of distribution were left at library defaults, and the topology (single compartment) does not match the required parent–metabolite structure.

<div class="pk-model-meta" hidden drug="palonosetron" model-id="Palonosetron_Li2026_palonosetron" status="model_quarantined" stale="false" population="Chinese subjects with impaired or normal liver function" measured-compound="fosrolapitant and rolapitant" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Li Q, Mai J, Wu M, Zhang H, Yang X, Huang Y et al. Pharmacokinetics, safety, and population pharmacokinetic profiles of Ritanine. Frontiers in pharmacology 17:1833170 (2026).
  ·  DOI: [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170)

## Population and dosing

**Population:** Chinese subjects with impaired or normal liver function · condition hepatic impairment · age group adult · n = &gt;=16.

**Dosing:** 0.25, 218 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed Ritanine (fosrolapitant and palonosetron), measured fosrolapitant and rolapitant.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 0.67 | ng/mL |
| AUC0-t (h × ng/mL) | AUCt | 31.18 | h*ng/mL |
| AUC0−∞ (h × ng/mL) | AUC∞ | 34.89 | h*ng/mL |
| t1/2 (hour) | t1/2z | 81.80 | hour |
| V (L) | V | 839.62 | L |
| CL (L/h) | CL | 7.92 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was quarantined because fosrolapitant's clearance and volume of distribution were left at library defaults, and the topology (single compartment) does not match the required parent–metabolite structure.**

All six extracted parameters (Cmax 0.67 ng/mL, AUCt 31.18 h*ng/mL, AUC∞ 34.89 h*ng/mL, t1/2z 81.80 h, V 839.62 L, CL 7.92 L/h) describe fosrolapitant, while palonosetron's clearance and volume of distribution had no value, so placeholders stood in and the model was held back rather than published with invented numbers. The topology check expected a parent–metabolite structure but obtained a one-compartment model, and the deviations check flagged the defaulted clearance and volume of distribution as not acceptable. A second reader also disagreed on the dose compound, the primary analyte, and an additional fosrolapitant-to-m19 metabolism link not present in this record. Extracted — fosrolapitant: Cmax 0.67 ng/mL, AUCt 31.2 h*ng/mL, AUC∞ 34.9 h*ng/mL, t1/2z 81.8 hour, V 840 L, CL 7.92 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has Ritanine (fosrolapitant and palonosetron), the second reading fosrolapitant; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 0.67 | ng/mL |  |  | ng/ml | exact (1) | T2:row2:col5, T2:row2:col6 |
| AUC0-t (h × ng/mL) | `Q19` · AUCt | 31.18 | h*ng/mL |  |  | h*ng/mL | exact (1) | T2:row4:col5, T2:row4:col6 |
| AUC0−∞ (h × ng/mL) | `Q17` · AUC∞ | 34.89 | h*ng/mL |  |  | h*ng/mL | exact (1) | T2:row5:col5, T2:row5:col6 |
| t1/2 (hour) | `Q57` · t1/2z | 81.80 | hour | 2.945e+05 | s | h | exact (1) | T2:row6:col5, T2:row6:col6 |
| V (L) | `Q61` · V | 839.62 | L | 0.8396 | m3 | l | exact (1) | T2:row7:col5, T2:row7:col6 |
| CL (L/h) | `Q22` · CL | 7.92 | L/h | 2.2e-06 | m3/s | l/h | exact (1) | T2:row8:col5, T2:row8:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h × ng/mL' (AUCt)
- unit_dimension_unknown: 'h × ng/mL' (AUC∞)
- implicit units: 'AUC0-t (h × ng/mL)' → h*ng/mL (from the paper text: "The paper text explicitly states: 'the geometric mean AUC0-t values of palonosetron were 29.59 and 16.69 hng/mL'.")
- implicit units: 'AUC0−∞ (h × ng/mL)' → h*ng/mL (from the paper text: "The paper text explicitly states: 'AUC0-t was approximately 30 hng/mL' and discusses AUC0-∞ in the same context with con")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fosrolapitant and rolapitant
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'palonosetron' subgroup of Li_2026 (paper reports 3 populations: healthy control, moderate hepatic impairment, palonosetron)
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged rolapitant→fosrolapitant ×8, parent→fosrolapitant ×16, parent→rolapitant ×4
- molar mass: no plausible PubChem entry for 'fosrolapitant and rolapitant' ('no full name in the paper') — left in mass units
- molar mass: none found for 'fosrolapitant and rolapitant' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'fosrolapitant and rolapitant', not palonosetron — the review values are the parent's

**Extraction notes:**
- companion parameter table S1 transcribed (8 record(s))
- LLM selected parameter table(s) 2, S1, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.062 (1/16 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fosrolapitant', 'rolapitant', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 34.89 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 34.89 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` |  | 31.18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | 31.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 7.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 7.92 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 0.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 0.67 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 81.80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 81.80 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 839.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 839.62 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | Ritanine (fosrolapitant and palonosetron) | fosrolapitant | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fosrolapitant and rolapitant | fosrolapitant | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['T2:row5:col5', 'T2:row5:col6'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['T2:row4:col5', 'T2:row4:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row8:col5', 'T2:row8:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T2:row2:col5', 'T2:row2:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row6:col5', 'T2:row6:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T2:row7:col5', 'T2:row7:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.92 | ['T2:row8:col5', 'T2:row8:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.92 L/h | ['T2:row8:col5', 'T2:row8:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 840 L | ['T2:row7:col5', 'T2:row7:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_shared_parameters |  | pass | 6 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron/Palonosetron_Li2026_palonosetron_matlab.zip" download>Palonosetron_Li2026_palonosetron_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron/Palonosetron_Li2026_palonosetron_matlab_simbio.zip" download>Palonosetron_Li2026_palonosetron_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron/Palonosetron_Li2026_palonosetron_sbml.zip" download>Palonosetron_Li2026_palonosetron_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron/Palonosetron_Li2026_palonosetron_cellml.zip" download>Palonosetron_Li2026_palonosetron_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Li Q, Mai J, Wu M, Zhang H, Yang X, Huang Y et al. Pharmacokinetics, safety, and population pharmacokinetic profiles of Ritanine. Frontiers in pharmacology 17:1833170 (2026). [doi:10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170)

**This record:** Pharmacolibrary v26.09, model `Palonosetron_Li2026_palonosetron`. <https://pharmacolibrary.github.io/#/drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron>

```bibtex
@misc{pharmacolibrary_PalonosetronLi2026palonosetron,
  title  = {{Pharmacolibrary model Palonosetron_Li2026_palonosetron}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron},
  note   = {Parameters from doi:10.3389/fphar.2026.1833170},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalonosetron%5D%20Palonosetron_Li2026_palonosetron&body=Drug%3A%20palonosetron%0ARecord%3A%20Palonosetron_Li2026_palonosetron%0APaper%3A%20Li_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 14:23 UTC</sub>
