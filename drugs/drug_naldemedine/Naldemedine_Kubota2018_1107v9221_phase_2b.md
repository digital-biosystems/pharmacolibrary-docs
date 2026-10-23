<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naldemedine&quot;,&quot;href&quot;:&quot;drugs/drug_naldemedine/&quot;},{&quot;label&quot;:&quot;Kubota_2018 \u00b7 1107v9221_phase_2b&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naldemedine — `Naldemedine_Kubota2018_1107v9221_phase_2b`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-04 16:42 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="naldemedine" model-id="Naldemedine_Kubota2018_1107v9221_phase_2b" status="extracted" stale="true" population="healthy subjects, patients with chronic non-cancer pain and OIC, and cancer patients with OIC" measured-compound="naldemedine" parameterization="apparent" topology="2C"></div>

## Citation
Kubota R, Fukumura K, Wajima T. Population Pharmacokinetics and Exposure-Response Relationships of Naldemedine. Pharmaceutical research 35(11):225 (2018).
  ·  DOI: [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7)

## Population and dosing

**Population:** healthy subjects, patients with chronic non-cancer pain and OIC, and cancer patients with OIC · condition chronic non-cancer pain, opioid-induced constipation, cancer · age group adult.

**Dosing:** 0.1, 0.2, 0.4, 3, 10, 30, 100 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Vc/F (L) | V1/F | 87.5 | L | 42.6 (None% RSE) |
| Q/F (L/hr) | Q/F | 5.59 | L/hr | 63.3 (None% RSE) |
| Vp/F (L) | V2/F | 46.6 | L | 43.3 (None% RSE) |
| ALAG (hr) | tlag | 0.202 | hr |  |
| CL/F | CL/F | 8.44 | L/hr |  |
| Ka | Ka | 4.45 | hr-1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The naldemedine two-compartment model was quarantined because clearance (CL/F) and absorption rate constant (Ka) had no source values and library placeholder defaults were substituted, with the invented absorption constant judged unacceptable.**

The record lists CL/F and Ka for naldemedine without values, so placeholder defaults stood in for these parameters; substituting a default absorption rate constant not reported in the source was judged an invented absorption constant, not acceptable. The model also assumes F=1 and Fm=1 with no molar correction, so all parameters are apparent. A second reader recorded a maximum parameter value of 13.49 where the first reader recorded none, and the comparison could not be computed (ratio None). Extracted — naldemedine: V1/F 87.5 L, Q/F 5.59 L/hr, V2/F 46.6 L, tlag 0.202 hr.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Vc/F (L) | `Q290` · V1/F | 87.5 | L | 0.0875 | m3 | l | exact (1) | Kubota_2018_table_S2:row2:col5 | 42.6 (None% RSE) |
| Q/F (L/hr) | `Q69` · Q/F | 5.59 | L/hr | 1.553e-06 | m3/s | l/h | exact (1) | Kubota_2018_table_S2:row4:col5 | 63.3 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 46.6 | L | 0.0466 | m3 | l | exact (1) | Kubota_2018_table_S2:row5:col5 | 43.3 (None% RSE) |
| ALAG (hr) | `Q83` · tlag | 0.202 | hr | 727.2 | s | h | exact (1) | Kubota_2018_table_S2:row6:col5 |  |
| CL/F | `Q900` · CL/F | 8.44 | L/hr | 2.344e-06 | m3/s |  |  | Kubota_2018_table_S2:row1:col5 |  |
| Ka | `Q900` · Ka | 4.45 | hr-1 | 0.001236 | s |  |  | Kubota_2018_table_S2:row3:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F (L/hr) | Q27 | exact |
| Ka (hr-1) | Q49 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vc/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Ka' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Q/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vp/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- routed 'proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Dose(mg)' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row0:col2', 'Kubota_2018_table_S3:row0:col3', 'Kubota_2018_table_S3:row0:col6'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row1:col2', 'Kubota_2018_table_S3:row1:col3', 'Kubota_2018_table_S3:row1:col6'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row2:col2', 'Kubota_2018_table_S3:row2:col3', 'Kubota_2018_table_S3:row2:col6'])
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row3:col2', 'Kubota_2018_table_S3:row3:col3', 'Kubota_2018_table_S3:row3:col6'])
- dropped unlinked row (NIL): 'CV%' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row4:col2', 'Kubota_2018_table_S3:row4:col3', 'Kubota_2018_table_S3:row4:col6'])
- dropped unlinked row (NIL): 'Max' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row5:col2', 'Kubota_2018_table_S3:row5:col3', 'Kubota_2018_table_S3:row5:col6'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row6:col2', 'Kubota_2018_table_S3:row6:col3', 'Kubota_2018_table_S3:row6:col6'])
- dropped unlinked row (NIL): 'Min' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row7:col2', 'Kubota_2018_table_S3:row7:col3', 'Kubota_2018_table_S3:row7:col6'])
- dropped unlinked row (NIL): 'Geometric Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row8:col2', 'Kubota_2018_table_S3:row8:col3', 'Kubota_2018_table_S3:row8:col6'])
- dropped unlinked row (NIL): 'CV% Geometric Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row9:col2', 'Kubota_2018_table_S3:row9:col3', 'Kubota_2018_table_S3:row9:col6'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row2:col5', 'Kubota_2018_table_S4:row2:col6', 'Kubota_2018_table_S4:row2:col8', 'Kubota_2018_table_S4:row2:col9', 'Kubota_2018_table_S4:row2:col10'])
- dropped unlinked row (NIL): 'Gender' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row6:col5', 'Kubota_2018_table_S4:row6:col6', 'Kubota_2018_table_S4:row6:col8', 'Kubota_2018_table_S4:row6:col9', 'Kubota_2018_table_S4:row6:col10'])
- dropped unlinked row (NIL): 'Race' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row8:col5', 'Kubota_2018_table_S4:row8:col6', 'Kubota_2018_table_S4:row8:col8'])
- dropped unlinked row (NIL): 'Health status' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row13:col5', 'Kubota_2018_table_S4:row13:col6', 'Kubota_2018_table_S4:row13:col8'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=naldemedine
- bound model equation to Q27 (CL/F): CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- bound model equation to Q49 (kabs): Ka = THETA (10) * (Age/52) ** THETA (11)
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F (L/hr)'; equation kept verbatim
- Q49 (kabs) is equation-defined: value moved to equation-variable 'Ka (hr-1)'; equation kept verbatim
- population split: '1107v9221(phase 2b)' subgroup of Kubota_2018 (paper reports 3 populations: 1107v9221(phase 2b), 1314v9231_1315v9232(phase 3), estimate)

**Extraction notes:**
- companion parameter table S2 transcribed (42 record(s), model stage 'base')
- companion parameter table S3 transcribed (40 record(s))
- unparsed cell Kubota_2018_table_S4:row2:col1 = '&lt; 65'
- companion parameter table S4 transcribed (20 record(s))
- LLM selected parameter table(s) 3, S2, S3, S4
- captured model equation CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- captured model equation Ka = THETA (10) * (Age/52) ** THETA (11)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[alag]` | 0.202 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose]` |  | 0.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[max]` |  | 13.49 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f]` | 5.59 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f]` | 87.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/f]` | 46.6 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kubota_2018_table_S2:row1:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Kubota_2018_table_S2:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kubota_2018_table_S2:row3:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Kubota_2018_table_S2:row4:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Kubota_2018_table_S2:row5:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kubota_2018_table_S2:row6:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 87.5 L | ['Kubota_2018_table_S2:row2:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 46.6 L | ['Kubota_2018_table_S2:row5:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaldemedine%5D%20Naldemedine_Kubota2018_1107v9221_phase_2b&body=Drug%3A%20naldemedine%0ARecord%3A%20Naldemedine_Kubota2018_1107v9221_phase_2b%0APaper%3A%20Kubota_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_naldemedine/Naldemedine_Kubota2018_1107v9221_phase_2b%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 16:42 UTC</sub>
