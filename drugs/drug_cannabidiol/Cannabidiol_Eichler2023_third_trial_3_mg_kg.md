<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;cannabidiol&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/&quot;},{&quot;label&quot;:&quot;Eichler_2023 \u00b7 third_trial_3_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cannabidiol_Eichler2023_population_value&quot;,&quot;label&quot;:&quot;Eichler_2023_population_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_LaporteAmargos2026_reference&quot;,&quot;label&quot;:&quot;Laporte-Amargos_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_LaporteAmargos2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_McGilveray2005_reference&quot;,&quot;label&quot;:&quot;McGilveray_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_McGilveray2005_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_Shaik2026_reference&quot;,&quot;label&quot;:&quot;Shaik_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_Shaik2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_Snchez2023_reference&quot;,&quot;label&quot;:&quot;S\u00e1nchez_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_Snchez2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cannabidiol — `Cannabidiol_Eichler2023_third_trial_3_mg_kg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> Only clearance was extracted — no volume; aUC has no unit.

<div class="pk-model-meta" hidden drug="cannabidiol" model-id="Cannabidiol_Eichler2023_third_trial_3_mg_kg" status="needs_review" stale="false" population="horses" measured-compound="cannabidiol" parameterization="mechanistic" topology="1C"></div>

## Citation
Eichler F, Poźniak B, Machnik M, Schenk I, Wingender A, Baudisch N et al. Pharmacokinetic modelling of orally administered cannabidiol and implications for medication control in horses. Frontiers in veterinary science 10:1234551 (2023).
  ·  DOI: [10.3389/fvets.2023.1234551](https://doi.org/10.3389/fvets.2023.1234551)

## Population and dosing

**Population:** horses · condition healthy · n = 14.

**Dosing:** 14, 70, 210 mg, oral, multiple, every 12 h.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–12 h (h·ng/mL) | AUCt | 58.56 | h·ng/mL |
| Cmax (ng/mL) | Cmax | 14.61 | ng/mL |
| tmax (hr) | tmax | 1.02 | hr |
| AUC0−12h(CBDPop_PK)AUC0−12h(CBDNCA) | AUC | 0.98 | CBDNCA |
| Q2 | Q | 1.35 | L/h/kg |
| clearance value | CL | 10.75 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.455). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; aUC has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUCt, Cmax and AUC), so that value has no SI equivalent. Extracted — cannabidiol: AUCt 58.6 h·ng/mL, Cmax 14.6 ng/mL, tmax 1.02 hr, AUC 0.98 CBDNCA, Q 1.35 L/h/kg, CL 10.8 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0-12 h].value`: this record has 58.56, the second reading 59.53; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–12 h (h·ng/mL) | `Q19` · AUCt | 58.56 | h·ng/mL |  |  | (h·ng)/ml | llm (0.6) | Eichler_2023_table_5:row0:col3 |
| Cmax (ng/mL) | `Q32` · Cmax | 14.61 | ng/mL |  |  | ng/ml | exact (1) | Eichler_2023_table_5:row1:col3 |
| tmax (hr) | `Q56` · tmax | 1.02 | hr | 3672 | s | h | exact (1) | Eichler_2023_table_5:row2:col3 |
| AUC0−12h(CBDPop_PK)AUC0−12h(CBDNCA) | `Q88` · AUC | 0.98 | CBDNCA |  |  | cbdnca | llm (0.6) | Eichler_2023_table_5:row4:col3 |
| Q2 | `Q30` · Q | 1.35 | L/h/kg | 2.625e-05 | m3/s | L/h | special_case (0.95) | Eichler_2023:discussion_prose |
| clearance value | `Q22` · CL | 10.75 | L/h/kg | 0.000209 | m3/s | L/h | boundary (0.8) | Eichler_2023:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CBDNCA' (AUC)
- unit_dimension_unknown: 'CBDNCA' (Cmax)
- dropped duplicate Q32 ('Cmax(CBDPop_PK)Cmax(CBDNCA)', value '1.18') — already have one for this compound
- unit_dimension_unknown: 'CBDNCA' (tmax)
- dropped duplicate Q56 ('tmax(CBDPop_PK)tmax(CBDNCA)', value '1.12') — already have one for this compound
- salvaged Q30 ('Q2'=1.35) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance value'=10.75) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cannabidiol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'third trial (3 mg/kg, n = 5)' subgroup of Eichler_2023 (paper reports 4 populations: first trial (0.2 mg/kg, n = 3), population value, second trial (1 mg/kg, n = 3), third trial (3 mg/kg, n = 5))
- skipped review gap-fill of V from Laporte-Amargos_2026: its label names a different analyte ('piperacillin') — 'estimated Vd of piperacillin'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 5 transcribed (18 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.455 (5/11 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-12 h].value` | 58.56 | 59.53 | mismatch |
| `gpt-oss-120b` | `parameters[auc0-12h(cbdpop_pk)auc0-12h]` | 0.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance value]` | 10.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 10.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax].value` | 14.61 | 12.17 | mismatch |
| `gpt-oss-120b` | `parameters[tmax].value` | 1.02 | 1.1 | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Eichler_2023_table_5:row0:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Eichler_2023_table_5:row1:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Eichler_2023_table_5:row2:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | CBDNCA | ['Eichler_2023_table_5:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.75 | ['Eichler_2023:discussion_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 753 L/h | ['Eichler_2023:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabidiol%5D%20Cannabidiol_Eichler2023_third_trial_3_mg_kg&body=Drug%3A%20cannabidiol%0ARecord%3A%20Cannabidiol_Eichler2023_third_trial_3_mg_kg%0APaper%3A%20Eichler_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabidiol/Cannabidiol_Eichler2023_third_trial_3_mg_kg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:10 UTC</sub>
