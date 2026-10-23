<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Weisskopf_2020 \u00b7 model_for_scit_sdcit_in_plasma_breast_milk&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Λ1 has no unit.

<div class="pk-model-meta" hidden drug="citalopram" model-id="Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea" status="needs_review" stale="false" population="lactating women treated with escitalopram or racemic citalopram (perinatal period)" measured-compound="escitalopram (SCIT)" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Weisskopf E, Guidi M, Fischer CJ, Bickle Graz M, Beaufils E, Nguyen KA et al. A population pharmacokinetic model for escitalopram and its major metabolite in depressive patients during the perinatal period: Prediction of infant drug exposure through breast milk. British journal of clinical pharmacology 86(8):1642–1653 (2020).
  ·  DOI: [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278)

## Population and dosing

**Population:** lactating women treated with escitalopram or racemic citalopram (perinatal period) · condition depression / perinatal period, breastfeeding · age group adult · n = 33.

**Dosing:** 5, 20 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed escitalopram (or racemic citalopram), measured escitalopram (SCIT).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL(SCIT) (L/h) | CL | 8 | L/h |
| V(SCIT) (L) | V | 19 | L |
| k12 (h⁻¹) | kabs | 34 | h⁻¹ |
| VMR | V | 8 | L |
| α(CL) (%) | λ1 | 16 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Λ1 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is citalopram's own; they describe escitalopram (SCIT) and S-desmethylcitalopram (SDCIT). Extracted — escitalopram (SCIT): CL 8 L/h, V 19 L, kabs 34 h⁻¹, λ1 16; S-desmethylcitalopram (SDCIT): V 8 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has escitalopram (or racemic citalopram), the second reading escitalopram; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL(SCIT) (L/h) | `Q22` · CL | 8 | L/h | 2.222e-06 | m3/s | l/h | space_fold (0.95) | Weisskopf_2020_table_p7_1:row0:col2 |
| V(SCIT) (L) | `Q61` · V | 19 | L | 0.019 | m3 | l | space_fold (0.95) | Weisskopf_2020_table_p7_1:row1:col2 |
| k12 (h⁻¹) | `Q49` · kabs | 34 | h⁻¹ | 0.009444 | 1/s | 1/h | exact (1) | Weisskopf_2020_table_p7_1:row2:col2 |
| VMR | `Q61` · V | 8 | L | 0.008 | m3 | l | llm (0.6) | Weisskopf_2020_table_p7_1:row4:col2 |
| α(CL) (%) | `Q67` · λ1 | 16 |  |  |  |  | space_fold (0.95) | Weisskopf_2020_table_p7_1:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit inherited for V (Q61): 'L' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'α(CL) (%)' — the LLM proposed '%', whose dimension does not fit Q67; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL(SCIT) (L/h)); Q61 (V(SCIT) (L)); Q61 (VMR)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=escitalopram (SCIT)
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- population split: 'model for scit + sdcit in plasma + breast milk' subgroup of Weisskopf_2020 (paper reports 3 populations: estimate, model for scit + sdcit in plasma, model for scit + sdcit in plasma + breast milk)
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 22 linked by role; re-tagged parent→escitalopram (SCIT) ×34, parent→S-desmethylcitalopram (SDCIT) ×20
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.077 (1/13 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['escitalopram (scit)', 's-desmethylcitalopram (sdcit)', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl(scit)]` |  | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl(scit)]` | 8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v(scit)]` |  | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v(scit)]` | 19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmr]` | 8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[α(cl)]` |  | 16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[α(cl)]` | 16 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | escitalopram (or racemic citalopram) | escitalopram | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | escitalopram (SCIT) | escitalopram | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Weisskopf_2020_table_p7_1:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Weisskopf_2020_table_p7_1:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Weisskopf_2020_table_p7_1:row1:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Weisskopf_2020_table_p7_1:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8 | ['Weisskopf_2020_table_p7_1:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8 L/h | ['Weisskopf_2020_table_p7_1:row0:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 19 L | ['Weisskopf_2020_table_p7_1:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8 L | ['Weisskopf_2020_table_p7_1:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitalopram%5D%20Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea&body=Drug%3A%20citalopram%0ARecord%3A%20Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea%0APaper%3A%20Weisskopf_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:12 UTC</sub>
