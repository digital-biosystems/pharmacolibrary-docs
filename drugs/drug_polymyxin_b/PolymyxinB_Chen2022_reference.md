<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;polymyxin B&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/&quot;},{&quot;label&quot;:&quot;Chen_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PolymyxinB_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Manchandani2018_reference&quot;,&quot;label&quot;:&quot;Manchandani_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Manchandani2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Akrong_2022_CFU&quot;,&quot;label&quot;:&quot;Akrong_2022 \u00b7 CFU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/pd_Akrong_2022_CFU.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Soeorg_2026_cfu&quot;,&quot;label&quot;:&quot;Soeorg_2026 \u00b7 cfu&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/pd_Soeorg_2026_cfu.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polymyxin B — `PolymyxinB_Chen2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 19:53 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="polymyxin B" model-id="PolymyxinB_Chen2022_reference" status="extracted" stale="true" population="patients with severe infections" measured-compound="polymyxin_b" parameterization="mechanistic" topology="2C"></div>

## Citation
Chen N, Guo J, Xie J, Xu M, Hao X, Ma K et al. Population pharmacokinetics of polymyxin B: a systematic review. Annals of translational medicine 10(4):231 (2022).
  ·  DOI: [10.21037/atm-22-236](https://doi.org/10.21037/atm-22-236)

## Population and dosing

**Population:** patients with severe infections · condition severe infections caused by multi-drug-resistant bacteria · age group mixed.

**Dosing:** 0.13, 3.45, 50, 100, 150 mg, iv, multiple, every 12 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| central compartment distribution volume | V1 | 13.4 | L |
| peripheral compartment distribution volume | V2 | 51.6 | L |
| distribution clearance | Q | 8.78 | L/h |
| total clearance | total clearance | 2.43 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Polymyxin b's total clearance (CL) has no extracted value, so a placeholder clearance was substituted and the model was quarantined.**

The record lists total clearance for polymyxin b only as a typical value of 2.43 L/h, while the CL parameter itself carries no value; a placeholder default was substituted for the missing clearance. The distribution clearance Q (8.78 L/h) was also neither emitted nor recorded as defaulted, so the parameter-coverage check found only 1 of 2 expected parameters covered. The second reader returned no values for the central volume (13.4 L), Q, CL, or total clearance, leaving those entries unconfirmed. Extracted — polymyxin b: V 13.4 L, Q 8.78 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polymyxin_b, the second reading polymyxin B; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| central compartment distribution volume | `Q63` · V1 | 13.4 | L | 0.0134 | m3 | L | boundary_compartment (0.9) | Chen_2022:other_prose |
| peripheral compartment distribution volume | `Q64` · V2 | 51.6 | L | 0.0516 | m3 | L | boundary_compartment (0.9) | Chen_2022:other_prose |
| distribution clearance | `Q30` · Q | 8.78 | L/h | 2.439e-06 | m3/s | L/h | exact (1) | Chen_2022:other_prose |
| total clearance | `Q900` · total clearance | 2.43 | L/h | 6.75e-07 | m3/s |  |  | Chen_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| total clearance (CL) | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: '2020 Wang (18)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- table section iiv: '2018 Manchandani (19)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- table section iiv: '2018 Miglis (20)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- table section iiv: '2018 Kubin (21)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- table section iiv: '2018 Avedissian (22)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- table section iiv: '2013 Sandri (23)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- table section iiv: '2008 Kwa (24)' routed out of structural estimates ('Renal insufficiency: CrCL &lt;80 mL/min; CL =1.58 L/h, IIV =26%; Vc =6.98 L, IIV =38%; Vp =10.57 L, IIV =74%; Q =10.28 L/h; RV (SD) =0.10')
- column 'pharmacokinetic parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '2021 Yu (15)' — extend the ontology if this is a real PK parameter (source ['t2:row1:col4'])
- dropped unlinked row (NIL): '2021 Crass (16)' — extend the ontology if this is a real PK parameter (source ['t2:row2:col4'])
- dropped unlinked row (NIL): '2021 Wang (17)' — extend the ontology if this is a real PK parameter (source ['t2:row3:col4'])
- salvaged Q22 ('total clearance (CL)'=2.43) from results prose — parameter table was unreadable
- salvaged Q63 ('central compartment distribution volume'=13.4) from results prose — parameter table was unreadable
- salvaged Q64 ('peripheral compartment distribution volume'=51.6) from results prose — parameter table was unreadable
- salvaged Q30 ('distribution clearance'=8.78) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=polymyxin_b
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q22 (CL): CL = 1.59 L/h, IIV =13.0%; CL (L/h) = 1.59 * (CrCL/80)^0.408; V =20.5 L; RV (CV%) =40.5%
- Q22 (CL) is equation-defined: value moved to equation-variable 'total clearance (CL)'; equation kept verbatim
- status held at "Needs review" — not promoted
- molar mass: none found for 'polymyxin_b' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell t2:row1:col2 = '32/112'
- unparsed cell t2:row1:col3 = '1-CMT'
- unparsed cell t2:row2:col2 = '9/45'
- unparsed cell t2:row2:col3 = '1-CMT'
- unparsed cell t2:row3:col2 = '70/462'
- unparsed cell t2:row3:col3 = '2-CMT'
- unparsed cell t2:row5:col2 = '46/331'
- unparsed cell t2:row5:col3 = '2-CMT'
- unparsed cell t2:row6:col2 = '35/139'
- unparsed cell t2:row6:col3 = '1-CMT'
- unparsed cell t2:row7:col2 = '52/156'
- unparsed cell t2:row7:col3 = '2-CMT'
- unparsed cell t2:row8:col2 = '43/134'
- unparsed cell t2:row8:col3 = '1-CMT'
- unparsed cell t2:row9:col2 = '9/33'
- unparsed cell t2:row9:col3 = '2-CMT'
- unparsed cell t2:row10:col2 = '24/192'
- unparsed cell t2:row10:col3 = '2-CMT'
- unparsed cell t2:row11:col2 = '9/19'
- unparsed cell t2:row11:col3 = '1-CMT'
- LLM selected parameter table(s) 2
- captured model equation CL = 1.59 L/h, IIV =13.0%; CL (L/h) = 1.59 * (CrCL/80)^0.408; V =20.5 L; RV (CV%) =40.5%

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central compartment distribution volume]` |  | 13.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central compartment distribution volume]` | 13.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution clearance]` |  | 8.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution clearance]` | 8.78 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral compartment distribution volume]` |  | 51.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral compartment distribution volume]` | 51.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | polymyxin_b | polymyxin B | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | polymyxin_b | polymyxin B | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.4 L | ['Chen_2022:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 51.6 L | ['Chen_2022:other_prose'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | fail | 2 scholar param(s) emitted or defaulted | 1 covered | neither emitted nor in defaulted[]: ['Q'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolymyxin_b%5D%20PolymyxinB_Chen2022_reference&body=Drug%3A%20polymyxin_b%0ARecord%3A%20PolymyxinB_Chen2022_reference%0APaper%3A%20Chen_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polymyxin_b/PolymyxinB_Chen2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:53 UTC</sub>
