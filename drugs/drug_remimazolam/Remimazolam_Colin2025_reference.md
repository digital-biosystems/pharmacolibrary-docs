<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;remimazolam&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/&quot;},{&quot;label&quot;:&quot;Colin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remimazolam_Chen2025_base_model&quot;,&quot;label&quot;:&quot;Chen_2025_base_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025_base_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Chen2025_median_by_1_000_bootstraps&quot;,&quot;label&quot;:&quot;Chen_2025_median_by_1_000_bootstraps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025_median_by_1_000_bootstraps.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Chen2025v2_reference&quot;,&quot;label&quot;:&quot;Chen_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Colin2025_reference&quot;,&quot;label&quot;:&quot;Colin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Colin2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Remimazolam_Schttler2020_reference&quot;,&quot;label&quot;:&quot;Sch\u00fcttler_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Schttler2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_de2025_vellinga_38&quot;,&quot;label&quot;:&quot;de_2025_vellinga_38&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_de2025_vellinga_38.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remimazolam — `Remimazolam_Colin2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The remimazolam parent–metabolite record was rejected: the fast peripheral volume V2 (10.8 l·70 kg⁻¹) was never extracted, the model output was set to the parent's central compartment instead of the measured remimazolam, and the structure was built as one compartment instead of the three-compartment parent–metabolite topology.

<div class="pk-model-meta" hidden drug="remimazolam" model-id="Remimazolam_Colin2025_reference" status="rejected" stale="false" population="pediatric patients aged 6 to 18 yr undergoing procedural sedation" measured-compound="remimazolam" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Colin PJ, Bichajian LH, Curt VR, Koomen JV, Stöhr T, Struys MMRF et al. Pharmacokinetics and Pharmacodynamics of Remimazolam for Procedural Sedation in Children and Adolescents. Anesthesiology 143(2):368–382 (2025).
  ·  DOI: [10.1097/ALN.0000000000005560](https://doi.org/10.1097/ALN.0000000000005560)

## Population and dosing

**Population:** pediatric patients aged 6 to 18 yr undergoing procedural sedation · condition procedural sedation · age group mixed · n = 31.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_remimazolam/Remimazolam_Colin2025_reference/Remimazolam_Colin2025_reference.svg" alt="Remimazolam_Colin2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Volume of central compartment, l · 70 kg-1 | V1 | 12.2 | l · 70 kg-1 | 49.5 (None% RSE) |
| Volume of fast peripheral compartment, l · 70 kg-1 | V2 | 10.8 | l · 70 kg-1 | 92.4 (None% RSE) |
| Volume of slow peripheral compartment, l · 70 kg-1 | V3 | 12.3 | l · 70 kg-1 |  |
| Elimination clearance, l · min-1 · 70 kg-1 | CL | 0.70 | l · min-1 · 70 kg-1 | 63.1 (None% RSE) |
| Fast distributional clearance, l · min-1 · 70 kg-1 | Q | 1.68 | l · min-1 · 70 kg-1 |  |
| Slow distributional clearance, l · min-1 · 70 kg-1 | Q2 | 0.23 | l · min-1 · 70 kg-1 |  |
| Elimination clearance, l · h-1 · 70 kg-1* | CL | 4.07 | L/h/70kg |  |
| Mean transit time, min | MTT | 3.97 | min |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The remimazolam parent–metabolite record was rejected: the fast peripheral volume V2 (10.8 l·70 kg⁻¹) was never extracted, the model output was set to the parent's central compartment instead of the measured remimazolam, and the structure was built as one compartment instead of the three-compartment parent–metabolite topology.**

The paper reports a three-compartment parent model with V1 12.2, V2 10.8, V3 12.3 l·70 kg⁻¹, CL 0.70 and Q 1.68, Q2 0.23 l·min⁻¹·70 kg⁻¹, plus metabolite CNS7054 clearance 4.07 L/h/70kg and MTT 3.97 min, but only 5 of the 6 expected parameters were carried into the model, leaving V2 absent. The reported output was the parent's central compartment rather than the measured analyte remimazolam. The topology was reduced to a single compartment instead of the three-compartment parent–metabolite structure. Additionally, one reported unit (l·70 kg⁻¹ style) could not be converted to SI units, so that parameter reached the model build without an SI value. Extracted — remimazolam: V1 12.2 l · 70 kg-1, V2 10.8 l · 70 kg-1, V3 12.3 l · 70 kg-1, CL 0.7 l · min-1 · 70 kg-1, Q 1.68 l · min-1 · 70 kg-1, Q2 0.23 l · min-1 · 70 kg-1; CNS7054: CL 4.07 L/h/70kg, MTT 3.97 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remimazolam, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Volume of central compartment, l · 70 kg-1 | `Q63` · V1 | 12.2 | l · 70 kg-1 | 0.854 | m3 | l/kg | exact (1) | T4:row2:col2, T4:row2:col3, T4:row2:col4, T4:row10:col2, T4:row10:col3, T4:row10:col4, T4:row10:col6, T4:row10:col7 | 49.5 (None% RSE) |
| Volume of fast peripheral compartment, l · 70 kg-1 | `Q64` · V2 | 10.8 | l · 70 kg-1 | 0.756 | m3 | l/kg | exact (1) | T4:row3:col2, T4:row3:col3, T4:row3:col4, T4:row3:col6, T4:row3:col7 | 92.4 (None% RSE) |
| Volume of slow peripheral compartment, l · 70 kg-1 | `Q77` · V3 | 12.3 | l · 70 kg-1 | 0.861 | m3 | l/kg | exact (1) | T4:row4:col2, T4:row4:col3, T4:row4:col4 |  |
| Elimination clearance, l · min-1 · 70 kg-1 | `Q22` · CL | 0.70 | l · min-1 · 70 kg-1 | 0.0008167 | m3/s | l/(min·kg) | exact (1) | T4:row5:col2, T4:row5:col3, T4:row5:col4, T4:row5:col6, T4:row5:col7 | 63.1 (None% RSE) |
| Fast distributional clearance, l · min-1 · 70 kg-1 | `Q30` · Q | 1.68 | l · min-1 · 70 kg-1 | 0.00196 | m3/s | l/(min·kg) | exact (1) | T4:row6:col2, T4:row6:col3, T4:row6:col4 |  |
| Slow distributional clearance, l · min-1 · 70 kg-1 | `Q99` · Q2 | 0.23 | l · min-1 · 70 kg-1 | 0.0002683 | m3/s | l/(min·kg) | exact (1) | T4:row7:col2, T4:row7:col3, T4:row7:col4 |  |
| Elimination clearance, l · h-1 · 70 kg-1* | `Q22` · CL | 4.07 | L/h/70kg | 1.131e-06 | m3/s | L/h | exact (1) | T4:row11:col2, T4:row11:col3, T4:row11:col4, T4:row11:col6, T4:row11:col7 |  |
| Mean transit time, min | `Q81` · MTT | 3.97 | min |  |  | min | exact (1) | T4:row12:col2, T4:row12:col3, T4:row12:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Volume of fast peripheral compartment, l · 70 kg-1' routed out of structural estimates ('IIV')
- table section iiv: 'Elimination clearance, l · min-1 · 70 kg-1' routed out of structural estimates ('IIV')
- table section iiv: 'Volume of central compartment, l · 70 kg-1' routed out of structural estimates ('IIV')
- table section iiv: 'Elimination clearance, l · h-1 · 70 kg-1*' routed out of structural estimates ('IIV')
- unit_dimension_unknown: 'l · h-1 · 70 kg-1*' (CL)
- implicit units: 'Elimination clearance, l · h-1 · 70 kg-1*' → L/h/70kg (from the paper text: 'Text states: "the apparent CNS7054 elimination clearance for both populations are similar (3 l · h–1 · 70 kg–1 for Velli')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remimazolam
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0]
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 40 linked by role; re-tagged parent→CNS7054 ×13
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell T4:row2:col1 = 'V1'
- unparsed cell T4:row3:col1 = 'V2'
- unparsed cell T4:row4:col1 = 'V3'
- unparsed cell T4:row6:col1 = 'Q2'
- unparsed cell T4:row7:col1 = 'Q3'
- unparsed cell T4:row13:col1 = 'PropCNS7054'
- unparsed cell T4:row14:col1 = 'AddCNS7054'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination clearance]` | 0.70 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination clearance]` |  | 0.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fast distributional clearance]` | 1.68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fast distributional clearance]` |  | 1.68 | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow distributional clearance]` | 0.23 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow distributional clearance]` |  | 0.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of central compartment]` | 12.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of central compartment]` |  | 12.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of fast peripheral compartment]` | 10.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of fast peripheral compartment]` |  | 10.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of slow peripheral compartment]` | 12.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of slow peripheral compartment]` |  | 12.3 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | remimazolam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | remimazolam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4', 'T4:row5:col6', 'T4:row5:col7'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row11:col2', 'T4:row11:col3', 'T4:row11:col4', 'T4:row11:col6', 'T4:row11:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T4:row6:col2', 'T4:row6:col3', 'T4:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T4:row2:col2', 'T4:row2:col3', 'T4:row2:col4', 'T4:row10:col2', 'T4:row10:col3', 'T4:row10:col4', 'T4:row10:col6', 'T4:row10:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T4:row3:col2', 'T4:row3:col3', 'T4:row3:col4', 'T4:row3:col6', 'T4:row3:col7'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T4:row4:col2', 'T4:row4:col3', 'T4:row4:col4'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['T4:row7:col2', 'T4:row7:col3', 'T4:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.7 | ['T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4', 'T4:row5:col6', 'T4:row5:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.94e+03 L/h | ['T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4', 'T4:row5:col6', 'T4:row5:col7'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.07 L/h | ['T4:row11:col2', 'T4:row11:col3', 'T4:row11:col4', 'T4:row11:col6', 'T4:row11:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 854 L | ['T4:row2:col2', 'T4:row2:col3', 'T4:row2:col4', 'T4:row10:col2', 'T4:row10:col3', 'T4:row10:col4', 'T4:row10:col6', 'T4:row10:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 756 L | ['T4:row3:col2', 'T4:row3:col3', 'T4:row3:col4', 'T4:row3:col6', 'T4:row3:col7'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=remimazolam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_remimazolam/Remimazolam_Colin2025_reference/Remimazolam_Colin2025_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_remimazolam/Remimazolam_Colin2025_reference/Remimazolam_Colin2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Remimazolam_Colin2025_reference_params.json` · controls `Remimazolam_Colin2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremimazolam%5D%20Remimazolam_Colin2025_reference&body=Drug%3A%20remimazolam%0ARecord%3A%20Remimazolam_Colin2025_reference%0APaper%3A%20Colin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remimazolam/Remimazolam_Colin2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:12 UTC</sub>
