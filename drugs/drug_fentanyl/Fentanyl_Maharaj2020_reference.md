<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Maharaj_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Maharaj2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Maharaj2020_reference" status="needs_review" stale="false" population="obese children" measured-compound="fentanyl" parameterization="mechanistic" topology="1C"></div>

## Citation
Maharaj AR, Wu H, Zimmerman KO, Speicher DG, Sullivan JE, Watt K et al. Dosing of Continuous Fentanyl Infusions in Obese Children: A Population Pharmacokinetic Analysis. Journal of clinical pharmacology 60(5):636–647 (2020).
  ·  DOI: [10.1002/jcph.1562](https://doi.org/10.1002/jcph.1562)

## Population and dosing

**Population:** obese children · condition obesity · age group child · n = &gt;=21 years.

**Dosing:** 1, 2, 3 mcg/kg/h, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V170kg [L/70 kg] | Vnorm | 10.8 | L/70 kg | 19 |
| CL70kg [L/h] | CL70kg [L/h] | 32.5 | L/h | 15 |
| V" (litre) | V | 269.7 | litre |  |
| clearance, volumes and absorption rate | kabs | 1.0 | h−1 |  |
| t1pp ranged from | tlag | 15.0 | min |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Andersen_1986, Bower_1982, Eleveld_2026) cannot stand in for this paper's evidence. Extracted — fentanyl: Vnorm 10.8 L/70 kg, V 270 litre, kabs 1 h−1, tlag 15 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[v170kg [l/70 kg]].parameter_id`: this record has Q352, the second reading Q61; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V170kg [L/70 kg] | `Q352` · Vnorm | 10.8 | L/70 kg | 0.0108 | m3 | l/70kg | 19 | llm (0.6) | T3:row3:col1, T3:row3:col3, T3:row3:col5 |
| CL70kg [L/h] | `Q900` · CL70kg [L/h] | 32.5 | L/h | 9.028e-06 | m3/s |  | 15 |  | T3:row2:col1, T3:row2:col3, T3:row2:col5 |
| V" (litre) | `Q61` · V | 269.7 | litre | 0.2697 | m3 | L |  | review_gapfill (0.7) | Bower_1982:review |
| clearance, volumes and absorption rate | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h |  | review_gapfill (0.7) | Eleveld_2026:review |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h |  | review_gapfill (0.7) | Andersen_1986:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL70kg [L/h] | Q22 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Q70kg [L/h/70 kg]' — extend the ontology if this is a real PK parameter (source ['T3:row4:col1', 'T3:row4:col3', 'T3:row4:col5'])
- dropped duplicate Q352 ('V270kg [L/70 kg]', value '417') — already have one for this compound
- routed 'ε2 - proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- bound model equation to Q22 (CL): CL = θCL*(WT/70)^0.75; V1=θV1*(WT/70)^1; Q=θQ*(WT/70)^0.75; V2=θV2*(WT/70)^1
- model equation 'NFMcl = FFM + θFFAT,cl(WT-FFM)NFMv= FFM + θFFAT,v(WT-FFM)CL=θCL*(NFMcl/70)^0.75; V1=θV1*(NFMv/70)^1;Q=θQ*(NFMcl/70)^0.75; V2=θV2*(NFMv/70)^1' not bound — neither LHS nor base term 'FFM' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL70kg [L/h]'; equation kept verbatim
- gap-filled Q61 (V) from Bower_1982's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Eleveld_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- table T3: unparsed_numeric_cell
- LLM selected parameter table(s) 3
- captured model equation CL = θCL*(WT/70)^0.75; V1=θV1*(WT/70)^1; Q=θQ*(WT/70)^0.75; V2=θV2*(WT/70)^1
- captured model equation NFMcl = FFM + θFFAT,cl(WT-FFM)NFMv= FFM + θFFAT,v(WT-FFM)CL=θCL*(NFMcl/70)^0.75; V1=θV1*(NFMv/70)^1;Q=θQ*(NFMcl/70)^0.75; V2=θV2*(NFMv/70)^1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[v170kg [l/70 kg]].parameter_id` | Q352 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v270kg [l/70 kg]]` |  | 417 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row2:col1', 'T3:row2:col3', 'T3:row2:col5'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['T3:row3:col1', 'T3:row3:col3', 'T3:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eleveld_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bower_1982:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 270 L | ['Bower_1982:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Maharaj2020_reference&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Maharaj2020_reference%0APaper%3A%20Maharaj_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Maharaj2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 18:28 UTC</sub>
