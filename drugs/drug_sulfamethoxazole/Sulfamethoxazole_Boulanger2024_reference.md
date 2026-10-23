<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxazole&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/&quot;},{&quot;label&quot;:&quot;Boulanger_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfamethoxazole_Hess1993_reference&quot;,&quot;label&quot;:&quot;Hess_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Hess1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfamethoxazole_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfamethoxazole — `Sulfamethoxazole_Boulanger2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> Vss and AUC∞ have no unit.

<div class="pk-model-meta" hidden drug="sulfamethoxazole" model-id="Sulfamethoxazole_Boulanger2024_reference" status="needs_review" stale="false" population="broilers" measured-compound="sulfamethoxazole" parameterization="mechanistic" topology="2C"></div>

## Citation
Boulanger M, Taillandier JF, Henri J, Devreese M, De Baere S, Ferran AA et al. Pharmacokinetic modeling of sulfamethoxazole-trimethoprim and sulfadiazine-trimethoprim combinations in broilers. Poultry science 103(11):104200 (2024).
  ·  DOI: [10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200)

## Population and dosing

**Population:** broilers · condition healthy · n = 39.

**Dosing:** 2240 mg, iv, single.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F_SDZ | Fab | 99 |  |
| ka_SMX | kabs | 16.40 | 1/h |
| Vd_SMX | V1 | 10.10 | L/kg |
| Vd_TMP | V | 5.42 | L/kg |
| CL_SDZ | CL | 6.00 | L/h/kg |
| CL_TMP | CLmp | 4.77 | L/h/kg |
| β_Vd_SDZ_BW | Vss | 40.70 |  |
| T1/2β SDZ (h) | t1/2β | 2.00 | h |
| AUC∞ SDZ (h × µg/mL) | AUC∞ | 187.00 | h × µg/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.294). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vss and AUC∞ have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC∞), so that value has no SI equivalent. Extracted — sulfamethoxazole: Fab 99, kabs 16.4 1/h, V1 10.1 L/kg, V 5.42 L/kg, CL 6 L/h/kg, CLmp 4.77 L/h/kg, Vss 40.7, t1/2β 2 h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulfamethoxazole, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F_SDZ | `Q40` · Fab | 99 |  |  |  |  | llm (0.6) | tbl0001:row2:col2 |
| ka_SMX | `Q49` · kabs | 16.40 | 1/h | 0.004556 | 1/s | 1/h | llm (0.6) | tbl0001:row6:col2, tbl0001:row6:col3 |
| Vd_SMX | `Q63` · V1 | 10.10 | L/kg | 0.707 | m3 | L | llm (0.6) | tbl0001:row9:col2, tbl0001:row9:col3 |
| Vd_TMP | `Q61` · V | 5.42 | L/kg | 0.3794 | m3 | L | llm (0.6) | tbl0001:row10:col2, tbl0001:row10:col3 |
| CL_SDZ | `Q22` · CL | 6.00 | L/h/kg | 0.0001167 | m3/s | L/h | llm (0.6) | tbl0001:row11:col2, tbl0001:row11:col3 |
| CL_TMP | `Q371` · CLmp | 4.77 | L/h/kg | 9.275e-05 | m3/s | L/h | llm_confirmed (0.6) | tbl0001:row13:col2, tbl0001:row13:col3 |
| β_Vd_SDZ_BW | `Q65` · Vss | 40.70 |  |  |  |  | llm (0.6) | tbl0001:row14:col2, tbl0001:row14:col3 |
| T1/2β SDZ (h) | `Q60` · t1/2β | 2.00 | h | 7200 | s | h | boundary (0.8) | Boulanger_2024_table_2:row2:col1, Boulanger_2024_table_2:row2:col2, Boulanger_2024_table_2:row2:col3, Boulanger_2024_table_2:row2:col4 |
| AUC∞ SDZ (h × µg/mL) | `Q17` · AUC∞ | 187.00 | h × µg/mL |  |  | (h·µg)/ml | llm_confirmed (0.6) | Boulanger_2024_table_2:row5:col1, Boulanger_2024_table_2:row5:col2, Boulanger_2024_table_2:row5:col3, Boulanger_2024_table_2:row5:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'F_SMX' — extend the ontology if this is a real PK parameter (source ['tbl0001:row3:col2'])
- dropped unlinked row (NIL): 'F_TMP' — extend the ontology if this is a real PK parameter (source ['tbl0001:row4:col2'])
- dropped unlinked row (NIL): 'ka_SDZ' — extend the ontology if this is a real PK parameter (source ['tbl0001:row5:col2', 'tbl0001:row5:col3'])
- dropped duplicate Q49 ('ka_TMP', value '11.30') — already have one for this compound
- dropped unlinked row (NIL): 'Vd_SDZ' — extend the ontology if this is a real PK parameter (source ['tbl0001:row8:col2', 'tbl0001:row8:col3'])
- dropped duplicate Q22 ('CL_SMX', value '8.72') — already have one for this compound
- dropped duplicate Q63 ('β_Vd_SMX_BW', value '46.40') — already have one for this compound
- dropped duplicate Q22 ('β_CL_SDZ_BW', value '41.40') — already have one for this compound
- dropped duplicate Q22 ('β_CL_TMP_BW', value '23.10') — already have one for this compound
- dropped duplicate Q60 ('T1/2β SMX (h)', value '2.80') — already have one for this compound
- dropped duplicate Q60 ('T1/2β TMP (h)', value '1.50') — already have one for this compound
- unit_dimension_unknown: 'h × µg/mL' (AUC∞)
- dropped duplicate Q17 ('AUC∞ SMX (h × µg/mL)', value '204.00') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ TMP (h × µg/mL)', value '4.00') — already have one for this compound
- implicit units: 'ka_SMX' → 1/h (from the popPK convention: 'First-order absorption rate constants in population PK are standardly expressed in 1/h. The text discusses the oral admi')
- implicit units: 'Vd_SMX' → L/kg (from the paper text: "The paper text states: 'The volume of distribution of TMP was found to be 3.14 L/kg and about 6 times higher in comparis")
- implicit units: 'Vd_TMP' → L/kg (from the paper text: "The paper text states: 'Trimethoprim was found to have a Vd about 5 to 6 times higher than both sulfonamides (3.14 L/kg)")
- implicit units: 'CL_SDZ' → L/h/kg (from the paper text: "The paper text states: 'The population clearance of SDZ ... (0.15 L/h/kg for both sulfonamides)'. While the table value ")
- implicit units: 'CL_TMP' → L/h/kg (from the paper text: "The paper text states: 'The population clearance of TMP (1.53 L/h/kg)'. The unit for clearance is explicitly L/h/kg. The")
- implicit units: 'AUC∞ SDZ (h × µg/mL)' — the LLM proposed 'h × µg/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfamethoxazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tbl0001:row2:col3 = '&lt;0.1'
- unparsed cell tbl0001:row3:col3 = '&lt;0.1'
- unparsed cell tbl0001:row4:col3 = '&lt;0.1'
- unparsed cell tbl0001:row5:col1 = 'h−1'
- unparsed cell tbl0001:row6:col1 = 'h−1'
- unparsed cell tbl0001:row7:col1 = 'h−1'
- companion parameter table 2 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.294 (5/17 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[cl_tmp]` | 4.77 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f_tmp]` |  | 99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka_sdz]` |  | 20.10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka_smx]` | 16.40 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd_sdz]` |  | 7.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd_smx]` | 10.10 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd_tmp]` | 5.42 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β_cl_sdz_bw]` |  | 41.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[β_vd_sdz_bw]` | 40.70 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulfamethoxazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulfamethoxazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C5_dimension_Q371 | pass | [length] ** 3 / [time] |  | ['tbl0001:row13:col2', 'tbl0001:row13:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl0001:row6:col2', 'tbl0001:row6:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['Boulanger_2024_table_2:row2:col1', 'Boulanger_2024_table_2:row2:col2', 'Boulanger_2024_table_2:row2:col3', 'Boulanger_2024_table_2:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl0001:row10:col2', 'tbl0001:row10:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tbl0001:row9:col2', 'tbl0001:row9:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h × µg/mL | ['Boulanger_2024_table_2:row5:col1', 'Boulanger_2024_table_2:row5:col2', 'Boulanger_2024_table_2:row5:col3', 'Boulanger_2024_table_2:row5:col4'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 |  | ['tbl0001:row14:col2', 'tbl0001:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6 | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 420 L/h | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 379 L | ['tbl0001:row10:col2', 'tbl0001:row10:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 707 L | ['tbl0001:row9:col2', 'tbl0001:row9:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfamethoxazole%5D%20Sulfamethoxazole_Boulanger2024_reference&body=Drug%3A%20sulfamethoxazole%0ARecord%3A%20Sulfamethoxazole_Boulanger2024_reference%0APaper%3A%20Boulanger_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfamethoxazole/Sulfamethoxazole_Boulanger2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:57 UTC</sub>
