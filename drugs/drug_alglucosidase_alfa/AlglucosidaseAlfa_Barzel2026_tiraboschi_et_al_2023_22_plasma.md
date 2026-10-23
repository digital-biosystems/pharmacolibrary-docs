<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Barzel_2026 \u00b7 tiraboschi_et_al_2023_22_plasma&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlglucosidaseAlfa_Tiraboschi2023_reference&quot;,&quot;label&quot;:&quot;Tiraboschi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Tiraboschi2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alglucosidase alfa — `AlglucosidaseAlfa_Barzel2026_tiraboschi_et_al_2023_22_plasma`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:35 UTC (Needs review), but the paper was screened again on 2026-10-05 10:36 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="alglucosidase alfa" model-id="AlglucosidaseAlfa_Barzel2026_tiraboschi_et_al_2023_22_plasma" status="extracted" stale="true" population="patients with lysosomal storage diseases" measured-compound="alglucosidase_alfa" parameterization="mechanistic" topology="1C"></div>

## Citation
Barzel I, van der Ploeg AT, Pijnappel WWMP, van der Kuy PHM, van den Hout JMP, Preijers T. Population Pharmacokinetic/Pharmacodynamic Modeling of Therapeutic Enzymes in Lysosomal Storage Diseases. Clinical pharmacokinetics 65(5):647-664 (2026).
  ·  DOI: [10.1007/s40262-026-01636-2](https://doi.org/10.1007/s40262-026-01636-2)

## Population and dosing

**Population:** patients with lysosomal storage diseases · condition lysosomal storage diseases · age group mixed.

**Dosing:** 770, 4753, 16380, 358400 mg, iv, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Vc/V1 (L) | V | 69.1 | L |
| Ktrans (h−1) | ktr | 0.581 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for alglucosidase alfa's bioavailability, clearance and absorption lag time.**

The model was built, but alglucosidase alfa's bioavailability, clearance and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — alglucosidase alfa: V 69.1 L, ktr 0.581 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alglucosidase_alfa, the second reading alglucosidase alfa; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/V1 (L) | `Q61` · V | 69.1 | L | 0.0691 | m3 | l | llm (0.6) | Barzel_2026_table_3:row1:col6 |
| Ktrans (h−1) | `Q306` · ktr | 0.581 | h−1 | 0.0001614 | 1/s | 1/h | pd_twin_relink (1) | Barzel_2026_table_3:row22:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'tiraboschi et al., 2023 [22]plasma' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Fixed effect parameters' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row0:col6'])
- relinked 'Ktrans (h−1)' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped unlinked row (NIL): 'Inter-individual variability (CV%)' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row23:col6'])
- dropped duplicate Q63 ('VcV1', value '40.3') — already have one for this compound
- relinked 'Ktrans' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('Ktrans', value '42.0') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alglucosidase_alfa
- bound model equation to Q22 (CL): CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc/V1 (L)' is the general volume)
- population split: 'tiraboschi et al., 2023 [22]plasma' subgroup of Barzel_2026 (paper reports 5 populations: gras-colomer et al., 2021 [25]plasma/leukocyteθ, qi et al., 2018 [23]plasma, tiraboschi et al., 2023 [22]plasma, troy et al., 2020 [26]serum/csf*, tuffal et al., 2023 [21]plasma)
- molar mass: none found for 'alglucosidase_alfa' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col4 = '2-compartment'
- unparsed cell Tab2:row2:col8 = 'TBW on CL and Q (0.587, [0.444; 0.730]), Vc and Vp (0.483, [0315; 0.651])'
- unparsed cell Tab2:row5:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row5:col4 = '3-compartment'
- unparsed cell Tab2:row6:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row6:col4 = '3-compartment'
- unparsed cell Tab2:row6:col7 = 'Forward inclusion (alpha risk: 5%) and backward elimination (alpha risk: 0.1%)'
- unparsed cell Tab2:row6:col8 = 'Time-varying TBW on CL (0.896, [0.754; 1.04]), V1 (0.661, [0.578; 0.7444]) and Vm (0.463, [0.352;0.574])'
- unparsed cell Tab2:row7:col3 = 'NONMEM v7.3'
- unparsed cell Tab2:row7:col4 = 'CNS: 2-compartmentSerum: 1-compartment'
- unparsed cell Barzel_2026_table_3:row0:col4 = '3.85 × 10−2'
- unparsed cell Barzel_2026_table_3:row1:col3 = '1.10 × 10−2'
- unparsed cell Barzel_2026_table_3:row41:col3 = 'Plasma: 29Leukocyte: 11'
- unparsed cell Barzel_2026_table_3:row41:col6 = 'CSF: 98.1Serum: 67.5'
- companion parameter table 3 transcribed (62 record(s))
- LLM selected parameter table(s) 3
- captured model equation CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alglucosidase_alfa | alglucosidase alfa | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alglucosidase_alfa | alglucosidase alfa | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Barzel_2026_table_3:row22:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Barzel_2026_table_3:row1:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 69.1 L | ['Barzel_2026_table_3:row1:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 477 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balglucosidase_alfa%5D%20AlglucosidaseAlfa_Barzel2026_tiraboschi_et_al_2023_22_plasma&body=Drug%3A%20alglucosidase_alfa%0ARecord%3A%20AlglucosidaseAlfa_Barzel2026_tiraboschi_et_al_2023_22_plasma%0APaper%3A%20Barzel_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Barzel2026_tiraboschi_et_al_2023_22_plasma%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 10:36 UTC</sub>
