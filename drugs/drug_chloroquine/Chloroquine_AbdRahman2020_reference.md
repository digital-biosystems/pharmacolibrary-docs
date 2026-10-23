<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/&quot;},{&quot;label&quot;:&quot;Abd-Rahman_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroquine_Yao2021_reference&quot;,&quot;label&quot;:&quot;Yao_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Yao2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Chloroquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloroquine — `Chloroquine_AbdRahman2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life.

<div class="pk-model-meta" hidden drug="chloroquine" model-id="Chloroquine_AbdRahman2020_reference" status="needs_review" stale="false" population="healthy adults inoculated with blood-stage Plasmodium vivax" measured-compound="chloroquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Abd-Rahman AN, Marquart L, Gobeau N, Kümmel A, Simpson JA, Chalon S et al. Population Pharmacokinetics and Pharmacodynamics of Chloroquine in a Plasmodium vivax Volunteer Infection Study. Clinical pharmacology and therapeutics 108(5):1055–1066 (2020).
  ·  DOI: [10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893)

## Population and dosing

**Population:** healthy adults inoculated with blood-stage Plasmodium vivax · condition Plasmodium vivax malaria (volunteer infection study) · age group adult · n = 24.

**Dosing:** 375, 500, 1000 mg, oral, multiple.

## Model

**Structure:** parent–metabolite model: parent with 2 compartment(s); metabolite desethylchloroquine: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference.svg" alt="Chloroquine_AbdRahman2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka, hour−1 | kabs | 0.943 | hour−1 | 0.662 (None% RSE) |
| Frel (%) | Frel | 100 |  | 0.192 (None% RSE) |
| CLCQ/F, L/h | CL/F | 54.6 | L/h |  |
| Vc CQ/F, L | V1/F | 2930 | L |  |
| Q1CQF, L/h | Q | 47.2 | L/h |  |
| Vp1 CQ/F, L | V2/F | 4700 | L |  |
| CLDCQ/F, L/h | CL/F | 37.6 | L/h |  |
| Vc DCQ/F, L | V1/F | 40.0 | L |  |
| Q1DCQ/F, L/h | Q/F | 36.3 | L/h |  |
| Vp1 DCQ/F, L | V2/F | 2840 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — chloroquine: kabs 0.943 hour−1, Frel 100, CL/F 54.6 L/h, V1/F 2.93e+03 L, Q 47.2 L/h, V2/F 4.7e+03 L; desethylchloroquine: CL/F 37.6 L/h, V1/F 40 L, Q/F 36.3 L/h, V2/F 2.84e+03 L.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka, hour−1 | `Q49` · kabs | 0.943 | hour−1 | 0.0002619 | 1/s | 1/h | exact (1) | cpt1893-tbl-0002:row3:col1, cpt1893-tbl-0002:row3:col2, cpt1893-tbl-0002:row3:col3, cpt1893-tbl-0002:row3:col5, cpt1893-tbl-0002:row3:col6, cpt1893-tbl-0002:row3:col7 | 0.662 (None% RSE) |
| Frel (%) | `Q87` · Frel | 100 |  |  |  |  | exact (1) | cpt1893-tbl-0002:row4:col1, cpt1893-tbl-0002:row4:col5 | 0.192 (None% RSE) |
| CLCQ/F, L/h | `Q27` · CL/F | 54.6 | L/h | 1.517e-05 | m3/s | l/h | llm (0.6) | cpt1893-tbl-0002:row5:col1, cpt1893-tbl-0002:row5:col2, cpt1893-tbl-0002:row5:col3, cpt1893-tbl-0002:row5:col5, cpt1893-tbl-0002:row5:col6, cpt1893-tbl-0002:row5:col7 |  |
| Vc CQ/F, L | `Q290` · V1/F | 2930 | L | 2.93 | m3 | l | llm_corrected (0.6) | cpt1893-tbl-0002:row6:col1, cpt1893-tbl-0002:row6:col2, cpt1893-tbl-0002:row6:col3, cpt1893-tbl-0002:row6:col5, cpt1893-tbl-0002:row6:col6, cpt1893-tbl-0002:row6:col7 |  |
| Q1CQF, L/h | `Q30` · Q | 47.2 | L/h | 1.311e-05 | m3/s | l/h | exact (1) | cpt1893-tbl-0002:row7:col1, cpt1893-tbl-0002:row7:col2, cpt1893-tbl-0002:row7:col3, cpt1893-tbl-0002:row7:col5, cpt1893-tbl-0002:row7:col6, cpt1893-tbl-0002:row7:col7 |  |
| Vp1 CQ/F, L | `Q82` · V2/F | 4700 | L | 4.7 | m3 | l | exact (1) | cpt1893-tbl-0002:row8:col1, cpt1893-tbl-0002:row8:col2, cpt1893-tbl-0002:row8:col3, cpt1893-tbl-0002:row8:col5, cpt1893-tbl-0002:row8:col6, cpt1893-tbl-0002:row8:col7 |  |
| CLDCQ/F, L/h | `Q27` · CL/F | 37.6 | L/h | 1.044e-05 | m3/s | l/h | exact (1) | cpt1893-tbl-0002:row9:col1, cpt1893-tbl-0002:row9:col2, cpt1893-tbl-0002:row9:col3, cpt1893-tbl-0002:row9:col5, cpt1893-tbl-0002:row9:col6, cpt1893-tbl-0002:row9:col7 |  |
| Vc DCQ/F, L | `Q290` · V1/F | 40.0 | L | 0.04 | m3 | l | exact (1) | cpt1893-tbl-0002:row10:col1, cpt1893-tbl-0002:row10:col2, cpt1893-tbl-0002:row10:col3, cpt1893-tbl-0002:row10:col5, cpt1893-tbl-0002:row10:col6, cpt1893-tbl-0002:row10:col7 |  |
| Q1DCQ/F, L/h | `Q69` · Q/F | 36.3 | L/h | 1.008e-05 | m3/s | l/h | exact (1) | cpt1893-tbl-0002:row11:col1, cpt1893-tbl-0002:row11:col2, cpt1893-tbl-0002:row11:col3, cpt1893-tbl-0002:row11:col5, cpt1893-tbl-0002:row11:col6, cpt1893-tbl-0002:row11:col7 |  |
| Vp1 DCQ/F, L | `Q82` · V2/F | 2840 | L | 2.84 | m3 | l | exact (1) | cpt1893-tbl-0002:row12:col1, cpt1893-tbl-0002:row12:col2, cpt1893-tbl-0002:row12:col3, cpt1893-tbl-0002:row12:col5, cpt1893-tbl-0002:row12:col6, cpt1893-tbl-0002:row12:col7 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ωka' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωFrel' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωCLCQF' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωVcCQF' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωCLDCQF' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωVcDCQF' routed out of structural estimates ('Interindividual variability')
- column 'plasma samples' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'whole blood samples' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'εprop CQ' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'εprop DCQ' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chloroquine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 54 linked by role; re-tagged parent→desethylchloroquine ×42, chloroquine→parent ×1
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt1893-tbl-0002:row5:col1', 'cpt1893-tbl-0002:row5:col2', 'cpt1893-tbl-0002:row5:col3', 'cpt1893-tbl-0002:row5:col5', 'cpt1893-tbl-0002:row5:col6', 'cpt1893-tbl-0002:row5:col7'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt1893-tbl-0002:row9:col1', 'cpt1893-tbl-0002:row9:col2', 'cpt1893-tbl-0002:row9:col3', 'cpt1893-tbl-0002:row9:col5', 'cpt1893-tbl-0002:row9:col6', 'cpt1893-tbl-0002:row9:col7'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt1893-tbl-0002:row6:col1', 'cpt1893-tbl-0002:row6:col2', 'cpt1893-tbl-0002:row6:col3', 'cpt1893-tbl-0002:row6:col5', 'cpt1893-tbl-0002:row6:col6', 'cpt1893-tbl-0002:row6:col7'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt1893-tbl-0002:row10:col1', 'cpt1893-tbl-0002:row10:col2', 'cpt1893-tbl-0002:row10:col3', 'cpt1893-tbl-0002:row10:col5', 'cpt1893-tbl-0002:row10:col6', 'cpt1893-tbl-0002:row10:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt1893-tbl-0002:row7:col1', 'cpt1893-tbl-0002:row7:col2', 'cpt1893-tbl-0002:row7:col3', 'cpt1893-tbl-0002:row7:col5', 'cpt1893-tbl-0002:row7:col6', 'cpt1893-tbl-0002:row7:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt1893-tbl-0002:row3:col1', 'cpt1893-tbl-0002:row3:col2', 'cpt1893-tbl-0002:row3:col3', 'cpt1893-tbl-0002:row3:col5', 'cpt1893-tbl-0002:row3:col6', 'cpt1893-tbl-0002:row3:col7'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cpt1893-tbl-0002:row11:col1', 'cpt1893-tbl-0002:row11:col2', 'cpt1893-tbl-0002:row11:col3', 'cpt1893-tbl-0002:row11:col5', 'cpt1893-tbl-0002:row11:col6', 'cpt1893-tbl-0002:row11:col7'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt1893-tbl-0002:row8:col1', 'cpt1893-tbl-0002:row8:col2', 'cpt1893-tbl-0002:row8:col3', 'cpt1893-tbl-0002:row8:col5', 'cpt1893-tbl-0002:row8:col6', 'cpt1893-tbl-0002:row8:col7'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt1893-tbl-0002:row12:col1', 'cpt1893-tbl-0002:row12:col2', 'cpt1893-tbl-0002:row12:col3', 'cpt1893-tbl-0002:row12:col5', 'cpt1893-tbl-0002:row12:col6', 'cpt1893-tbl-0002:row12:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 54.6 L/h | ['cpt1893-tbl-0002:row5:col1', 'cpt1893-tbl-0002:row5:col2', 'cpt1893-tbl-0002:row5:col3', 'cpt1893-tbl-0002:row5:col5', 'cpt1893-tbl-0002:row5:col6', 'cpt1893-tbl-0002:row5:col7'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 37.6 L/h | ['cpt1893-tbl-0002:row9:col1', 'cpt1893-tbl-0002:row9:col2', 'cpt1893-tbl-0002:row9:col3', 'cpt1893-tbl-0002:row9:col5', 'cpt1893-tbl-0002:row9:col6', 'cpt1893-tbl-0002:row9:col7'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.93e+03 L | ['cpt1893-tbl-0002:row6:col1', 'cpt1893-tbl-0002:row6:col2', 'cpt1893-tbl-0002:row6:col3', 'cpt1893-tbl-0002:row6:col5', 'cpt1893-tbl-0002:row6:col6', 'cpt1893-tbl-0002:row6:col7'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 40 L | ['cpt1893-tbl-0002:row10:col1', 'cpt1893-tbl-0002:row10:col2', 'cpt1893-tbl-0002:row10:col3', 'cpt1893-tbl-0002:row10:col5', 'cpt1893-tbl-0002:row10:col6', 'cpt1893-tbl-0002:row10:col7'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.7e+03 L | ['cpt1893-tbl-0002:row8:col1', 'cpt1893-tbl-0002:row8:col2', 'cpt1893-tbl-0002:row8:col3', 'cpt1893-tbl-0002:row8:col5', 'cpt1893-tbl-0002:row8:col6', 'cpt1893-tbl-0002:row8:col7'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.84e+03 L | ['cpt1893-tbl-0002:row12:col1', 'cpt1893-tbl-0002:row12:col2', 'cpt1893-tbl-0002:row12:col3', 'cpt1893-tbl-0002:row12:col5', 'cpt1893-tbl-0002:row12:col6', 'cpt1893-tbl-0002:row12:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_metabolite_built[desethylchloroquine] |  | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.04, 'CL': 1.0444444444444445e-05, 'formation': 1.5166666666666667e-05} |  | desethylchloroquine = compartment M1 with its own numbers |
| T3_metabolite_output[desethylchloroquine] |  | pass |  | 7.676e-05 |  | C_M1 (desethylchloroquine) must rise above 0 when the parent is dosed |
| T3_molar_mass[desethylchloroquine] |  | pass |  | {'MW': 0.319872, 'MW_m1': 0.2918} |  | formation is molecule-for-molecule |
| T3_output_variable |  | pass | C_central (measured=chloroquine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 9 scholar param(s) emitted or defaulted | 9 covered |  | all structural parameters accounted for |
| T3_shared_parameters |  | skipped |  |  |  | parent–metabolite template: every compound has its own slot |
| T3_topology_template |  | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped |  | 126.5 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 4.5 | 126.5 | 28.1 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_modelica.zip" download>Chloroquine_AbdRahman2020_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_fmi.zip" download>Chloroquine_AbdRahman2020_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_matlab.zip" download>Chloroquine_AbdRahman2020_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_sbml.zip" download>Chloroquine_AbdRahman2020_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_cellml.zip" download>Chloroquine_AbdRahman2020_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000375 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 1.044e-05 | m3/s |
| input | model | `MW` | 0.3199 |  |
| input | model | `MW_m1` | 0.2918 |  |
| input | model | `Vd1` | 2.93 |  |
| input | model | `Vd1m1` | 0.04 | m3 |
| input | model | `Vd2` | 4.7 |  |
| input | model | `Vd2m1` | 2.84 |  |
| input | model | `ka` | 0.0002619 | 1/s |
| input | model | `q12` | 1.311e-05 |  |
| input | model | `q1_m11` | 1.517e-05 | m3/s |
| input | model | `q21` | 1.311e-05 |  |
| input | model | `qm11_m12` | 1.008e-05 |  |
| input | model | `qm12_m11` | 1.008e-05 |  |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Abd-Rahman AN, Marquart L, Gobeau N, Kümmel A, Simpson JA, Chalon S et al. Population Pharmacokinetics and Pharmacodynamics of Chloroquine in a Plasmodium vivax Volunteer Infection Study. Clinical pharmacology and therapeutics 108(5):1055–1066 (2020). [doi:10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893)

**This record:** Pharmacolibrary v26.09, model `Chloroquine_AbdRahman2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference>

```bibtex
@misc{pharmacolibrary_ChloroquineAbdRahman2020reference,
  title  = {{Pharmacolibrary model Chloroquine_AbdRahman2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference},
  note   = {Parameters from doi:10.1002/cpt.1893},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 375 mg, single dose, first-order absorption (ka 0.943 /h, F 1). Doses in the paper: 375, 500, 1000 mg.

<dbs-fmusim paramsurl="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference/Chloroquine_AbdRahman2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Chloroquine_AbdRahman2020_reference_params.json` · controls `Chloroquine_AbdRahman2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloroquine%5D%20Chloroquine_AbdRahman2020_reference&body=Drug%3A%20chloroquine%0ARecord%3A%20Chloroquine_AbdRahman2020_reference%0APaper%3A%20Abd-Rahman_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:19 UTC</sub>
