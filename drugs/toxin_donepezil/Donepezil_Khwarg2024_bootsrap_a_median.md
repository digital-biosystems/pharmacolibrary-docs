<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Donepezil&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/&quot;},{&quot;label&quot;:&quot;Khwarg_2024 \u00b7 bootsrap_a_median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Karalis2023_drug_donepezil&quot;,&quot;label&quot;:&quot;Karalis_2023_drug_donepezil&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Karalis2023_drug_donepezil.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Pyka2024_reference&quot;,&quot;label&quot;:&quot;Pyka_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Pyka2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Donepezil — `Donepezil_Khwarg2024_bootsrap_a_median`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kabs, CL, V, Q and tlag have no unit.

<div class="pk-model-meta" hidden drug="Donepezil" model-id="Donepezil_Khwarg2024_bootsrap_a_median" status="needs_review" stale="false" population="healthy participants" measured-compound="Donepezil" parameterization="mechanistic" topology="1C"></div>

## Citation
Khwarg J, Lee H, Yu KS, Seol E, Chung JY. Population Pharmacokinetic Modeling and Simulation for Dose Optimization of GB-5001, a Long-Acting Intramuscular Injection of Donepezil, in Healthy Participants. Neurology and therapy 13(5):1453-1466 (2024).
  ·  DOI: [10.1007/s40120-024-00643-4](https://doi.org/10.1007/s40120-024-00643-4)

## Population and dosing

**Population:** healthy participants · condition healthy · age group adult.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate constant (depot 1) | kabs | 0.21 | depot 1 | 11.40 |  |
| Clearance | CL | 10.295 |  | 6.10 | 0.045 (39.20% RSE) |
| Volume of distribution (central) | V | 40.737 | central | 36.50 | 1.498 (31.10% RSE) |
| Intercompartmental clearance | Q | 86.514 |  | 9.60 |  |
| Absorption lag time (depot 1) | tlag | 0.93 | depot 1 |  |  |
| Fraction of dose (depot 4) | Fab | 0.748 | depot 4 |  | 0.013 (28.60% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.933). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kabs, CL, V, Q and tlag have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kabs, V, tlag and Fab), so that value has no SI equivalent. Extracted — donepezil: kabs 0.21 depot 1, CL 10.3, V 40.7 central, Q 86.5, tlag 0.93 depot 1, Fab 0.748 depot 4.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[fraction of dose].parameter_id`: this record has Q40, the second reading Q43. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|
| Absorption rate constant (depot 1) | `Q49` · kabs | 0.21 | depot 1 | d·epot1 | 11.40 | exact (1) | Khwarg_2024_table_p7_1:row1:col6 |  |
| Clearance | `Q22` · CL | 10.295 |  |  | 6.10 | exact (1) | Khwarg_2024_table_p7_1:row2:col6, Khwarg_2024_table_p7_1:row18:col6 | 0.045 (39.20% RSE) |
| Volume of distribution (central) | `Q61` · V | 40.737 | central | central | 36.50 | exact (1) | Khwarg_2024_table_p7_1:row3:col6 | 1.498 (31.10% RSE) |
| Intercompartmental clearance | `Q30` · Q | 86.514 |  |  | 9.60 | exact (1) | Khwarg_2024_table_p7_1:row4:col6 |  |
| Absorption lag time (depot 1) | `Q83` · tlag | 0.93 | depot 1 | d·epot1 |  | exact (1) | Khwarg_2024_table_p7_1:row6:col6 |  |
| Fraction of dose (depot 4) | `Q40` · Fab | 0.748 | depot 4 | d·epot4 |  | llm (0.6) | Khwarg_2024_table_p7_1:row14:col6 | 0.013 (28.60% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'depot 1' (kabs)
- unit_dimension_unknown: 'central' (V)
- unit_dimension_unknown: 'peripheral' (V)
- dropped duplicate Q61 ('Volume of distribution (peripheral)', value '1073.55') — already have one for this compound
- unit_dimension_unknown: 'depot 1' (tlag)
- unit_dimension_unknown: 'depot 4' (Fab)
- unit_dimension_unknown: 'depot 5' (Fab)
- dropped duplicate Q40 ('Fraction of dose (depot 5)', value '0.144') — already have one for this compound
- unit_dimension_unknown: 'depot 4' (kabs)
- dropped duplicate Q49 ('Absorption rate constant (depot 4)', value '0.004') — already have one for this compound
- unit_dimension_unknown: 'depot 5' (kabs)
- dropped duplicate Q49 ('Absorption rate constant (depot 5)', value '0.015') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Donepezil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'bootsrap^a median' subgroup of Khwarg_2024 (paper reports 2 populations: bootsrap^a median, final model estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Khwarg_2024_table_p7_1: unbound_uncertainty
- table Khwarg_2024_table_p7_1: units_need_context
- table Khwarg_2024_table_p7_1: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.933 (14/15 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[fraction of dose].parameter_id` | Q40 | Q43 | mismatch |

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
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Khwarg_2024_table_p7_1:row2:col6', 'Khwarg_2024_table_p7_1:row18:col6'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Khwarg_2024_table_p7_1:row4:col6'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | depot 1 | ['Khwarg_2024_table_p7_1:row1:col6'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | central | ['Khwarg_2024_table_p7_1:row3:col6'] |
| C5_unit_missing_Q83 | fail | [time] | depot 1 | ['Khwarg_2024_table_p7_1:row6:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.29 | ['Khwarg_2024_table_p7_1:row2:col6', 'Khwarg_2024_table_p7_1:row18:col6'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Khwarg2024_bootsrap_a_median&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Khwarg2024_bootsrap_a_median%0APaper%3A%20Khwarg_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_donepezil/Donepezil_Khwarg2024_bootsrap_a_median%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:40 UTC</sub>
