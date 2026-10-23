<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;favipiravir&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/&quot;},{&quot;label&quot;:&quot;Pertinez_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Favipiravir_Agyeman2026_reference&quot;,&quot;label&quot;:&quot;Agyeman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Agyeman2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Irie2023_reference&quot;,&quot;label&quot;:&quot;Irie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Irie2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_arithmetic_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_geometric_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Pertinez2021_reference&quot;,&quot;label&quot;:&quot;Pertinez_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# favipiravir — `Favipiravir_Pertinez2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Favipiravir ribofuranosyl-5′-triphosphate’s V/F of 22.1 L is reported in a one-compartment enteral model, not the parent–metabolite structure required for this measured metabolite.

<div class="pk-model-meta" hidden drug="favipiravir" model-id="Favipiravir_Pertinez2021_reference" status="rejected" stale="false" population="Chinese patients" measured-compound="favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP)" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Pertinez H, Rajoli RKR, Khoo SH, Owen A. Pharmacokinetic modelling to estimate intracellular favipiravir ribofuranosyl-5'-triphosphate exposure to support posology for SARS-CoV-2. The Journal of antimicrobial chemotherapy 76(8):2121–2128 (2021).
  ·  DOI: [10.1093/jac/dkab135](https://doi.org/10.1093/jac/dkab135)

## Population and dosing

**Population:** Chinese patients · condition SARS-CoV-2.

**Dosing:** 800, 1200, 1600 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed favipiravir, measured favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP).

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference/Favipiravir_Pertinez2021_reference.svg" alt="Favipiravir_Pertinez2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| kin (h−1) | kfm | 0.048 | h−1 | 15.3 |  |
| kout (h−1) | kel | 0.105 | h−1 | 14.3 |  |
| F (apparent, fractional) | Fab | 1 | apparent, fractional |  | 0.0921 (None% RSE) |
| ka (h−1) | kabs | 1.5 | h−1 |  | 1.05 (None% RSE) |
| CL/F (L/h) | CLm/F | 2.96 | L/h |  | 0.274 (None% RSE) |
| V/F (L) | Vm/F | 37.1 | L |  | 0.128 (None% RSE) |
| V/F (L) | V/F | 22.1 | L |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Favipiravir ribofuranosyl-5′-triphosphate’s V/F of 22.1 L is reported in a one-compartment enteral model, not the parent–metabolite structure required for this measured metabolite.**

The measured analyte’s output was assigned to the central compartment rather than its metabolite compartment, and the model used a one-compartment enteral structure instead of a parent–metabolite structure. A reported unit could not be converted to SI, but the affected parameter is not identified. Tlag was defaulted, and bioavailability and the metabolite fraction were assumed to be 1 with no molar correction. Extracted — favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP): kfm 0.048 h−1, kel 0.105 h−1, V/F 22.1 L; favipiravir: Fab 1 apparent, fractional, kabs 1.5 h−1, CLm/F 2.96 L/h, Vm/F 37.1 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP), the second reading favipiravir ribofuranosyl-5'-triphosphate; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| kin (h−1) | `Q305` · kfm | 0.048 | h−1 | 1.333e-05 | 1/s | 1/h | 15.3 | exact (1) | dkab135-T2:row0:col3, dkab135-T2:row0:col4, dkab135-T2:row0:col6, dkab135-T2:row0:col7, dkab135-T2:row0:col9, dkab135-T2:row0:col10, dkab135-T2:row0:col12, dkab135-T2:row0:col13 |  |
| kout (h−1) | `Q47` · kel | 0.105 | h−1 | 2.917e-05 | 1/s | 1/h | 14.3 | exact (1) | dkab135-T2:row1:col3, dkab135-T2:row1:col4, dkab135-T2:row1:col6, dkab135-T2:row1:col7, dkab135-T2:row1:col9, dkab135-T2:row1:col10, dkab135-T2:row1:col12, dkab135-T2:row1:col13 |  |
| F (apparent, fractional) | `Q40` · Fab | 1 | apparent, fractional |  |  |  |  | exact (1) | Pertinez_2021_table_1:row0:col1 | 0.0921 (None% RSE) |
| ka (h−1) | `Q49` · kabs | 1.5 | h−1 | 0.0004167 | 1/s | 1/h |  | exact (1) | Pertinez_2021_table_1:row1:col1 | 1.05 (None% RSE) |
| CL/F (L/h) | `Q351` · CLm/F | 2.96 | L/h | 8.222e-07 | m3/s | l/h |  | exact (1) | Pertinez_2021_table_1:row2:col1 | 0.274 (None% RSE) |
| V/F (L) | `Q367` · Vm/F | 37.1 | L | 0.0371 | m3 | l |  | exact (1) | Pertinez_2021_table_1:row3:col1 | 0.128 (None% RSE) |
| V/F (L) | `Q76` · V/F | 22.1 | L | 0.0221 | m3 | L |  | review_gapfill (0.7) | Agyeman_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'F (apparent, fractional)' routed out of structural estimates ('Inter-individual variance (ω2, log parameters)')
- table section iiv: 'ka (h−1)' routed out of structural estimates ('Inter-individual variance (ω2, log parameters)')
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('Inter-individual variance (ω2, log parameters)')
- table section iiv: 'V/F (L)' routed out of structural estimates ('Inter-individual variance (ω2, log parameters)')
- table section iiv: 'Inter-individual covariance for ka and V/F (ω2ka∼ω2V/F)' routed out of structural estimates ('Inter-individual variance (ω2, log parameters)')
- dropped PD-category row 'Time-dependent effect on CL/F (% per day)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Pertinez_2021_table_1:row4:col1'])
- metabolite favipiravir ribofuranosyl-5′-triphosphate (favi-rtp): Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite favipiravir ribofuranosyl-5′-triphosphate (favi-rtp): Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 22 linked by role; re-tagged parent→favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP) ×16
- molar mass: no plausible PubChem entry for 'favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP)' ('favipiravir ribofuranosyl-5′-triphosphate') — left in mass units
- molar mass: none found for 'favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q76 (V/F) from Agyeman_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- transposed table dkab135-T2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell dkab135-T2:row0:col1 = 'kin (h−1)'
- unparsed cell dkab135-T2:row1:col1 = 'kout (h−1)'
- companion parameter table 1 transcribed (10 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['favipiravir', 'favipiravir ribofuranosyl-5′-triphosphate (favi-rtp)', 'metabolism']] | [['favipiravir', "favipiravir ribofuranosyl-5'-triphosphate", 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[kin]` |  | 0.048 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kin]` | 0.048 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kout]` |  | 0.105 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kout]` | 0.105 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f]` | 22.1 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP) | favipiravir ribofuranosyl-5'-triphosphate | mismatch |

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
| C5_dimension_Q305 | pass | 1 / [time] |  | ['dkab135-T2:row0:col3', 'dkab135-T2:row0:col4', 'dkab135-T2:row0:col6', 'dkab135-T2:row0:col7', 'dkab135-T2:row0:col9', 'dkab135-T2:row0:col10', 'dkab135-T2:row0:col12', 'dkab135-T2:row0:col13'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Pertinez_2021_table_1:row2:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Pertinez_2021_table_1:row3:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['dkab135-T2:row1:col3', 'dkab135-T2:row1:col4', 'dkab135-T2:row1:col6', 'dkab135-T2:row1:col7', 'dkab135-T2:row1:col9', 'dkab135-T2:row1:col10', 'dkab135-T2:row1:col12', 'dkab135-T2:row1:col13'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Pertinez_2021_table_1:row1:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Agyeman_2026:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 22.1 L | ['Agyeman_2026:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=favipiravir ribofuranosyl-5′-triphosphate (FAVI-RTP)) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | none (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 0.048 /h, F 1). Doses in the paper: 800, 1200, 1600 mg.

<dbs-fmusim paramsurl="drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference/Favipiravir_Pertinez2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference/Favipiravir_Pertinez2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Favipiravir_Pertinez2021_reference_params.json` · controls `Favipiravir_Pertinez2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfavipiravir%5D%20Favipiravir_Pertinez2021_reference&body=Drug%3A%20favipiravir%0ARecord%3A%20Favipiravir_Pertinez2021_reference%0APaper%3A%20Pertinez_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:17 UTC</sub>
