<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;captopril&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/&quot;},{&quot;label&quot;:&quot;Duchin_1982 \u00b7 oral_dose_total_radioactivity&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Captopril_Hu2025_reference&quot;,&quot;label&quot;:&quot;Hu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/Captopril_Hu2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# captopril — `Captopril_Duchin1982_oral_dose_total_radioactivity`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-30 23:59 UTC (Needs review), but the paper was screened again on 2026-10-07 05:16 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. This paper's disposition core is incomplete; aUC∞ has no unit.

<div class="pk-model-meta" hidden drug="captopril" model-id="Captopril_Duchin1982_oral_dose_total_radioactivity" status="needs_review" stale="true" population="healthy subjects" measured-compound="captopril" parameterization="mechanistic" topology="1C"></div>

## Citation
Duchin KL, Singhvi SM, Willard DA, Migdalof BH, McKinstry DN. Captopril kinetics. Clinical pharmacology and therapeutics 31(4):452–458 (1982).
  ·  DOI: [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult · n = &gt;=5.

**Dosing:** 10 mg, oral, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/ml) | Cmax | 143.2 | ng/ml |
| tmax (hr) | tmax | 1.00 | hr |
| AUC0-∞ (ng × hr/ml) | AUC∞ | 724.9 | ng*hr/mL |
| Cumulative urinary excretion (% dose) | fe | 60.7 | % dose |
| Vd (/ kg") | V | 0.7 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; aUC∞ has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Hu_2025) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax, AUC∞ and fe), so that value has no SI equivalent. Extracted — captopril: Cmax 143 ng/ml, tmax 1 hr, AUC∞ 725 ng × hr/ml, fe 60.7 % dose, V 0.7 L/kg, CL 3.31 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has captopril, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/ml) | `Q32` · Cmax | 143.2 | ng/ml |  |  | ng/ml | exact (1) | Duchin_1982_table_1:row0:col1 |
| tmax (hr) | `Q56` · tmax | 1.00 | hr | 3600 | s | h | exact (1) | Duchin_1982_table_1:row1:col1 |
| AUC0-∞ (ng × hr/ml) | `Q17` · AUC∞ | 724.9 | ng*hr/mL |  |  | ng*hr/mL | exact (1) | Duchin_1982_table_1:row2:col1 |
| Cumulative urinary excretion (% dose) | `Q44` · fe | 60.7 | % dose |  |  | d·%·ose | exact (1) | Duchin_1982_table_1:row3:col1 |
| Vd (/ kg") | `Q61` · V | 0.7 | L/kg | 0.049 | m3 | L | exact (1) | Duchin_1982:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng × hr/ml' (AUC∞)
- unit_dimension_unknown: '% dose' (fe)
- salvaged Q61 ('Vd (/ kg")'=0.7) from results prose — parameter table was unreadable
- implicit units: 'AUC0-∞ (ng × hr/ml)' → ng*hr/mL (from the paper text: "The paper text explicitly lists the parameter with its unit in the results section: 'AUC0_,,x (ng x hr/ml) 1.00 724.9 -±")
- implicit units: 'Vd (/ kg")' → L/kg (from the paper text: "The abstract states: 'The Vd at steady-state was 0.7 Ilkg.' (where 'Ilkg' is an OCR error for 'L/kg'). The discussion al")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=captopril
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'oral dose* total radioactivity' subgroup of Duchin_1982 (paper reports 4 populations: intravenous dose* total radioactivity, intravenous dose* unchanged captopril, oral dose* total radioactivity, oral dose* unchanged captopril)
- skipped review gap-fill of CL from Hu_2025: its label names a different analyte ('cp-a') — 'CL values for CP-A'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[2]` |  | 0.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 724.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl$_t$]` |  | 0.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 143.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cumulative urinary excretion]` | 60.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_12$]` |  | 4.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_13$]` |  | 1.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_21$]` |  | 8.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_31$]` |  | 0.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_e1$]` |  | 4.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{1/2}β$]` |  | 1.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 1.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v$_c$]` |  | 0.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd$_b$]` |  | 1.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd$_ss$]` |  | 0.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.7 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | captopril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | captopril | unknown | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Duchin_1982_table_1:row2:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Duchin_1982_table_1:row0:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Duchin_1982_table_1:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Duchin_1982:discussion_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 49 L | ['Duchin_1982:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcaptopril%5D%20Captopril_Duchin1982_oral_dose_total_radioactivity&body=Drug%3A%20captopril%0ARecord%3A%20Captopril_Duchin1982_oral_dose_total_radioactivity%0APaper%3A%20Duchin_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_captopril/Captopril_Duchin1982_oral_dose_total_radioactivity%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:16 UTC</sub>
