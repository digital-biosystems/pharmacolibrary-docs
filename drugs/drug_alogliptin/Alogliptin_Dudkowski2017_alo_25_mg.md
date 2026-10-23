<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;alogliptin&quot;,&quot;href&quot;:&quot;drugs/drug_alogliptin/&quot;},{&quot;label&quot;:&quot;Dudkowski_2017 \u00b7 alo_25_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alogliptin_Dudkowski2017_final_parameter_estimate&quot;,&quot;label&quot;:&quot;Dudkowski_2017_final_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alogliptin — `Alogliptin_Dudkowski2017_alo_25_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:35 UTC) predates the latest extraction (2026-10-04 22:10 UTC); the status shown comes from the current checks. The alogliptin two-compartment model was rejected because a compartment has no path from the dose, and the reported AUCt of 1699 %·hr could not be converted to SI units.

<div class="pk-model-meta" hidden drug="alogliptin" model-id="Alogliptin_Dudkowski2017_alo_25_mg" status="needs_review" stale="true" population="children, adolescents, and adults with type 2 diabetes mellitus" measured-compound="alogliptin" parameterization="apparent" topology="2C"></div>

## Citation
Dudkowski C, Tsai M, Liu J, Zhao Z, Schmidt E, Xie J. The pharmacokinetics and pharmacodynamics of alogliptin in children, adolescents, and adults with type 2 diabetes mellitus. European journal of clinical pharmacology 73(3):279–288 (2017).
  ·  DOI: [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1)

## Population and dosing

**Population:** children, adolescents, and adults with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group mixed.

**Dosing:** 12.5, 25 mg, oral, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUEC0–24 (%·hr) | AUCt | 1699 | %·hr |
| Cmax (ng/mL) | Cmax | 101.423 | ng/mL |
| AUC0-inf (ng·hr./mL) | AUC∞ | 1222.010 | ng·hr./mL |
| CL/F (L/hr) | CL/F | 20.6512 | L/hr |
| Vz/F (L) | V/F | 543.422 | L |
| T1/2 (hr) | t1/2z | 18.0910 | hr |
| CLr (L/hr) | CLR | 14.519 | L/hr |
| Fe (%) | fe | 59.212 |  |
| Central volume of distribution [V2/F] (L) | V1 | 27.6 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The alogliptin two-compartment model was rejected because a compartment has no path from the dose, and the reported AUCt of 1699 %·hr could not be converted to SI units.**

The structure check found an unreachable or orphan compartment in the alogliptin model, so the model structure was judged invalid and the record refused. The AUCt parameter (1699 %·hr) was reported in a unit that could not be converted to SI, so it was passed on without an SI value. The second reader also disagreed on the exposure parameters: this record lists AUCt as 1699 and fe as 59.212, while the second reader read AUCt as absent and instead recorded 57.4 for the 0–24 exposure, and null for fe. Additionally, the parameter labelled central volume of distribution (V2/F, 27.6 L) is annotated as the peripheral compartment volume, an inconsistency within the record. Extracted — alogliptin: AUCt 1.7e+03 %·hr, Cmax 101 ng/mL, AUC∞ 1.22e+03 ng·hr./mL, CL/F 20.7 L/hr, V/F 543 L, t1/2z 18.1 hr, CLR 14.5 L/hr, fe 59.2, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has alogliptin, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUEC0–24 (%·hr) | `Q19` · AUCt | 1699 | %·hr |  |  | h·% | llm (0.6) | Tab3:row4:col5 |
| Cmax (ng/mL) | `Q32` · Cmax | 101.423 | ng/mL |  |  | ng/ml | exact (1) | Dudkowski_2017_table_2:row3:col3 |
| AUC0-inf (ng·hr./mL) | `Q17` · AUC∞ | 1222.010 | ng·hr./mL |  |  | (h·ng)/ml | exact (1) | Dudkowski_2017_table_2:row5:col3 |
| CL/F (L/hr) | `Q27` · CL/F | 20.6512 | L/hr | 5.736e-06 | m3/s | l/h | exact (1) | Dudkowski_2017_table_2:row6:col3 |
| Vz/F (L) | `Q76` · V/F | 543.422 | L | 0.5434 | m3 | l | exact (1) | Dudkowski_2017_table_2:row7:col3 |
| T1/2 (hr) | `Q57` · t1/2z | 18.0910 | hr | 6.513e+04 | s | h | exact (1) | Dudkowski_2017_table_2:row8:col3 |
| CLr (L/hr) | `Q26` · CLR | 14.519 | L/hr | 4.033e-06 | m3/s | l/h | exact (1) | Dudkowski_2017_table_2:row9:col3 |
| Fe (%) | `Q44` · fe | 59.212 |  |  |  |  | exact (1) | Dudkowski_2017_table_2:row10:col3 |
| Central volume of distribution [V2/F] (L) | `Q63` · V1 | 27.6 | L | 0.0276 | m3 | l | boundary_compartment (0.9) | Dudkowski_2017_table_S1:row3:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Number' — extend the ontology if this is a real PK parameter (source ['Tab3:row1:col5', 'Dudkowski_2017_table_2:row1:col3'])
- dropped PD-category row 'Emax (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row3:col5'])
- unit_dimension_unknown: '%·hr' (AUCt)
- dropped unlinked row (NIL): 'E24 (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col5'])
- dropped duplicate Q27 ('Oral clearance [CL/F] in pediatric subjects (L/hr)', value '53.7') — already have one for this compound
- dropped PD-category row 'Concentration at half-maximal response [EC50] in pediatric subjects (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row8:col4'])
- dropped PD-category row 'Concentration at half-maximal response [EC50] in adult subjects (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row10:col4'])
- dropped duplicate Q27 ('Oral clearance [CL/F] in adult subjects (L/hr)', value '53.7') — already have one for this compound
- implicit units: 'AUEC0–24 (%·hr)' — the LLM proposed '%·h', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=alogliptin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted
- population split: 'alo 25 mg' subgroup of Dudkowski_2017 (paper reports 5 populations: 14 to &lt;18 years, adults, alo 12.5 mg, alo 25 mg, final parameter estimate)

**Extraction notes:**
- transposed table Tab3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab3:row0:col3 = '10 to &lt;14 years'
- unparsed cell Tab3:row0:col5 = '10 to &lt;14 years'
- unparsed cell Tab3:row0:col7 = '22a'
- unparsed cell Tab3:row1:col4 = '4.00 (2.00, 4.03)'
- unparsed cell Tab3:row1:col6 = '4.00 (3.97, 4.12)'
- unparsed cell Tab3:row1:col7 = '2.00 (2.00, 4.07)'
- unparsed cell Tab3:row2:col3 = '4.05 (2.00, 4.08)'
- unparsed cell Tab3:row2:col5 = '2.08 (2.00, 4.00)'
- unparsed cell Tab3:row4:col1 = 'AUEC0–24 (%·hr)'
- unparsed cell Tab3:row5:col1 = 'E24 (%)'
- transposed table Dudkowski_2017_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Dudkowski_2017_table_2:row0:col1 = '10 to &lt;14 years'
- unparsed cell Dudkowski_2017_table_2:row0:col3 = '10 to &lt;14 years'
- unparsed cell Dudkowski_2017_table_2:row1:col1 = '5a'
- unparsed cell Dudkowski_2017_table_2:row3:col2 = '3.001.00, 23.97'
- unparsed cell Dudkowski_2017_table_2:row3:col4 = '3.971.00, 4.08'
- unparsed cell Dudkowski_2017_table_2:row3:col5 = '2.001.00, 4.07'
- unparsed cell Dudkowski_2017_table_2:row4:col1 = '4.002.00, 4.08'
- unparsed cell Dudkowski_2017_table_2:row4:col3 = '2.042.00, 2.08'
- companion parameter table 2 transcribed (39 record(s))
- companion parameter table 4 transcribed (14 record(s))
- unparsed cell Dudkowski_2017_table_S1:row2:col3 = '18.5 %CV'
- unparsed cell Dudkowski_2017_table_S1:row3:col3 = '30.1 %CV'
- unparsed cell Dudkowski_2017_table_S1:row4:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row5:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row6:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row7:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row8:col3 = '24.6 %CV'
- unparsed cell Dudkowski_2017_table_S1:row9:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row10:col3 = '24.6 %CV'
- unparsed cell Dudkowski_2017_table_S1:row11:col3 = '18.5 %CV'
- unparsed cell Dudkowski_2017_table_S1:row13:col3 = '28.6 %CV'
- unparsed cell Dudkowski_2017_table_S1:row14:col3 = '0.100 SD'
- unparsed cell Dudkowski_2017_table_S1:row15:col3 = '1.92 SD'
- companion parameter table S1 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 4, S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auec0-24].parameter_id` | Q19 | Q84 | mismatch |
| `gpt-oss:120b` | `parameters[e24]` |  | 57.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fe]` | 59.212 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alogliptin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alogliptin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q44 | fail | 59.21 | 70 | 1.182 | 0.05 | footnote reference category |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Dudkowski_2017_table_2:row5:col3'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Dudkowski_2017_table_2:row9:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Dudkowski_2017_table_2:row6:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Dudkowski_2017_table_2:row3:col3'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Dudkowski_2017_table_2:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Dudkowski_2017_table_S1:row3:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Dudkowski_2017_table_2:row7:col3'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | %·hr |  |  | ['Tab3:row4:col5'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.7 L/h |  |  | ['Dudkowski_2017_table_2:row6:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 27.6 L |  |  | ['Dudkowski_2017_table_S1:row3:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 543 L |  |  | ['Dudkowski_2017_table_2:row7:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balogliptin%5D%20Alogliptin_Dudkowski2017_alo_25_mg&body=Drug%3A%20alogliptin%0ARecord%3A%20Alogliptin_Dudkowski2017_alo_25_mg%0APaper%3A%20Dudkowski_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alogliptin/Alogliptin_Dudkowski2017_alo_25_mg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 22:10 UTC</sub>
