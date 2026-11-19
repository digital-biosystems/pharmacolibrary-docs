<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Ochratoxin A&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/&quot;},{&quot;label&quot;:&quot;Zhu_2024 \u00b7 value_of_ota&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OchratoxinA_Bernhoft2017_reference&quot;,&quot;label&quot;:&quot;Bernhoft_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/OchratoxinA_Bernhoft2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;OchratoxinA_Fuchs1992_reference&quot;,&quot;label&quot;:&quot;Fuchs_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/OchratoxinA_Fuchs1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ochratoxin A — `OchratoxinA_Zhu2024_value_of_ota`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> CL and V have no unit.

<div class="pk-model-meta" hidden drug="Ochratoxin A" model-id="OchratoxinA_Zhu2024_value_of_ota" status="needs_review" stale="false" population="lactating sows" measured-compound="Ochratoxin A" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhu Q, Qu H, Kang R, Zheng Y, Guo Q, Huang S et al. The Toxicokinetics, Excretion Patterns, and Milk Transmission of Ochratoxin A in Lactating Sows. Toxins 16(3) (2024).
  ·  DOI: [10.3390/toxins16030128](https://doi.org/10.3390/toxins16030128)

## Population and dosing

**Population:** lactating sows · condition healthy · age group adult · n = 4.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 9.00 | h |
| Cmax (µg·L−1) | Cmax | 920.25 | µg·L−1 |
| T1/2Elim (h) | t1/2z | 78.47 | h |
| AUC (µg·mL−1·h) | AUC | 69.50 | µg·mL−1·h |
| MRT (h) | MRT | 107.78 | h |
| Cl (L·kg·BW−1·h−1) | CL | 0.0014 | L·kg·BW−1·h−1 |
| Vd (L/kg BW) | V | 0.16 | L/kg BW |
| GT | tlag | 6.32 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.917). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL and V), so that value has no SI equivalent. Extracted — ochratoxin a: tmax 9 h, Cmax 920 µg·L−1, t1/2z 78.5 h, AUC 69.5 µg·mL−1·h, MRT 108 h, CL 0.0014 L·kg·BW−1·h−1, V 0.16 L/kg BW, tlag 6.32 min.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of ota: this record has none, the second reading 500. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 9.00 | h | 3.24e+04 | s | h | exact (1) | toxins-16-00128-t003:row2:col1 |
| Cmax (µg·L−1) | `Q32` · Cmax | 920.25 | µg·L−1 | 0.0009202 | kg/m3 | µg/l | exact (1) | toxins-16-00128-t003:row3:col1 |
| T1/2Elim (h) | `Q57` · t1/2z | 78.47 | h | 2.825e+05 | s | h | half_life_rule (0.95) | toxins-16-00128-t003:row4:col1 |
| AUC (µg·mL−1·h) | `Q88` · AUC | 69.50 | µg·mL−1·h | 250.2 | kg*s/m3 | µg/(h·ml) | exact (1) | toxins-16-00128-t003:row5:col1 |
| MRT (h) | `Q53` · MRT | 107.78 | h | 3.88e+05 | s | h | exact (1) | toxins-16-00128-t003:row6:col1 |
| Cl (L·kg·BW−1·h−1) | `Q22` · CL | 0.0014 | L·kg·BW−1·h−1 |  |  | (kg·l)/(h·bw) | exact (1) | toxins-16-00128-t003:row7:col1 |
| Vd (L/kg BW) | `Q61` · V | 0.16 | L/kg BW |  |  | l/(kg·bw) | exact (1) | toxins-16-00128-t003:row8:col1 |
| GT | `Q83` · tlag | 6.32 | min | 379.2 | s | h | review_gapfill (0.7) | Berger_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OTA (μg/kg BW)' — extend the ontology if this is a real PK parameter (source ['toxins-16-00128-t003:row1:col1'])
- unit_dimension_unknown: 'L·kg·BW−1·h−1' (CL)
- unit_dimension_unknown: 'L/kg BW' (V)
- dropped value-less row: 'Tmax'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'T1/2Elim'
- dropped value-less row: 'AUC'
- dropped value-less row: 'MRT'
- dropped value-less row: 'Cl'
- dropped value-less row: 'Vd'
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 142 (char 141)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ochratoxin A
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'value of ota' subgroup of Zhu_2024 (paper reports 2 populations: value of ota, value of otα)
- row roles (LLM): model_class=noncompartmental; 0/15 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Ochratoxin alpha (OTα)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Berger_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[ota]` |  | 500 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 78.47 | 79.22 | 1.01 | 0.25 | reported t½β |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['toxins-16-00128-t003:row3:col1'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['toxins-16-00128-t003:row6:col1'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['toxins-16-00128-t003:row2:col1'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['toxins-16-00128-t003:row4:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Berger_2025:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['toxins-16-00128-t003:row5:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L·kg·BW−1·h−1 |  |  | ['toxins-16-00128-t003:row7:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | L/kg BW |  |  | ['toxins-16-00128-t003:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0014 |  |  | ['toxins-16-00128-t003:row7:col1'] |
| C8_topology | pass |  |  |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bochratoxin_a%5D%20OchratoxinA_Zhu2024_value_of_ota&body=Drug%3A%20ochratoxin_a%0ARecord%3A%20OchratoxinA_Zhu2024_value_of_ota%0APaper%3A%20Zhu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ochratoxin_a/OchratoxinA_Zhu2024_value_of_ota%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 15:43 UTC</sub>
