<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;darunavir&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/&quot;},{&quot;label&quot;:&quot;Abdalla_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Darunavir_Stillemans2021_reference&quot;,&quot;label&quot;:&quot;Stillemans_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Darunavir_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# darunavir — `Darunavir_Abdalla2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> KD has no unit.

<div class="pk-model-meta" hidden drug="darunavir" model-id="Darunavir_Abdalla2024_reference" status="needs_review" stale="false" population="HIV-1 infected adolescents" measured-compound="darunavir" parameterization="apparent" topology="1C"></div>

## Citation
Abdalla S, Compagnucci A, Riault Y, Chan MK, Bamford A, Nolan A et al. Simultaneous pharmacokinetic modeling of unbound and total darunavir with ritonavir in adolescents: a substudy of the SMILE trial. Antimicrobial agents and chemotherapy 68(2):e0100423 (2024).
  ·  DOI: [10.1128/aac.01004-23](https://doi.org/10.1128/aac.01004-23)

## Population and dosing

**Population:** HIV-1 infected adolescents · condition HIV-1 infection · age group adolescent.

**Dosing:** 800 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka DRV (h -1 ) | kabs | 0.43 | h -1 |  |
| CL/F DRV, u (L/h) | CLu | 169 | L/h |  |
| V/F DRV, u (L) | V/F | 2601 | L | 76.1 (None% RSE) |
| K d, AAG (×10 -3 mmol/L) | KD | 0.85 |  |  |
| CL/F RTV (L/h) | CL/F | 21.6 | L/h | 29.3 (None% RSE) |
| weight_effect_on | weight_effect_on | 1 |  |  |
| RTV concentrations | equation variable | 50 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**KD has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — darunavir: kabs 0.43 h -1, CLu 169 L/h, V/F 2.6e+03 L, KD 0.85, CL/F 21.6 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc rtv effect on cl/f drv: this record has none, the second reading -0.5; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka DRV (h -1 ) | `Q49` · kabs | 0.43 | h -1 | 0.0001194 | 1/s | 1/h | llm_confirmed (0.6) | tab_1:row3:col1 |  |
| CL/F DRV, u (L/h) | `Q24` · CLu | 169 | L/h | 4.694e-05 | m3/s | l/h | llm_corrected (0.6) | tab_1:row4:col1 |  |
| V/F DRV, u (L) | `Q76` · V/F | 2601 | L | 2.601 | m3 | l | llm_confirmed (0.6) | tab_1:row6:col1 | 76.1 (None% RSE) |
| K d, AAG (×10 -3 mmol/L) | `Q331` · KD | 0.85 |  |  |  |  | llm (0.6) | tab_1:row8:col1 |  |
| CL/F RTV (L/h) | `Q27` · CL/F | 21.6 | L/h | 6e-06 | m3/s | l/h | llm_confirmed (0.6) | tab_1:row12:col1 | 29.3 (None% RSE) |
| weight_effect_on | `Q900` · weight_effect_on | 1 |  |  |  |  |  | tab_1:row13:col1, tab_1:row16:col1 |  |
| RTV concentrations | `Q900` · equation variable | 50 |  | 50 |  |  | llm (0.6) | tab_1:row25:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F DRV,u' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'V/F DRV,u' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'CL/F RTV' routed out of structural estimates ('Inter-individual variability (CV%)')
- table representations disagree for 'ka DRV (h -1 )'; source reconciliation required
- table representations disagree for 'CL/F DRV, u (L/h)'; source reconciliation required
- table representations disagree for 'AUC RTV effect on CL/F DRV, u'; source reconciliation required
- table representations disagree for 'V/F DRV, u (L)'; source reconciliation required
- table representations disagree for 'K d, AAG (×10 -3 mmol/L)'; source reconciliation required
- table representations disagree for 'Θ HSA (L/mmol)'; source reconciliation required
- table representations disagree for 'ka RTV (h -1 )'; source reconciliation required
- table representations disagree for 'CL/F RTV (L/h)'; source reconciliation required
- table representations disagree for 'Weight effect on'; source reconciliation required
- table representations disagree for 'V/F RTV (L)'; source reconciliation required
- table representations disagree for 'Unbound DRV concentrations'; source reconciliation required
- table representations disagree for 'Total DRV concentrations'; source reconciliation required
- table representations disagree for 'RTV concentrations'; source reconciliation required
- dropped 'AUC RTV effect on CL/F DRV, u' → Q27 = -0.5: a clearance of -0.5 is not a parameter value (source ['tab_1:row5:col1'])
- dropped unlinked row (NIL): 'Θ HSA (L/mmol)' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col1'])
- dropped duplicate Q49 ('ka RTV (h -1 )', value '0.18') — already have one for this compound
- covariate level 'Weight effect on' → Q900:weight_effect_on = 1 (linear_fractional on Q24)
- dropped duplicate Q76 ('V/F RTV (L)', value '105.7') — already have one for this compound
- dropped unlinked row (NIL): 'Unbound DRV concentrations' — extend the ontology if this is a real PK parameter (source ['tab_1:row23:col1'])
- dropped unlinked row (NIL): 'Total DRV concentrations' — extend the ontology if this is a real PK parameter (source ['tab_1:row24:col1'])
- implicit units: 'K d, AAG (×10 -3 mmol/L)' — the LLM proposed 'mmol/L', whose dimension does not fit Q331; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=darunavir
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_1: unbound_uncertainty
- table tab_1: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.444 (8/18 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc rtv effect on cl/f drv]` |  | -0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f drv].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f drv].parameter_id` | Q24 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f rtv]` | 21.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rtv concentrations]` | 50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[unbound drv concentrations]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight_effect_on]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ hsa]` |  | 5.54 | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row6:col1'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['tab_1:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q24 | pass | clearance within physiological range | 169 L/h | ['tab_1:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 21.6 L/h | ['tab_1:row12:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.6e+03 L | ['tab_1:row6:col1'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdarunavir%5D%20Darunavir_Abdalla2024_reference&body=Drug%3A%20darunavir%0ARecord%3A%20Darunavir_Abdalla2024_reference%0APaper%3A%20Abdalla_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_darunavir/Darunavir_Abdalla2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:13 UTC</sub>
