<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sunitinib&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/&quot;},{&quot;label&quot;:&quot;Wang_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sunitinib_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sunitinib_Wang2020_reference&quot;,&quot;label&quot;:&quot;Wang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Wang2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sunitinib — `Sunitinib_Wang2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The sunitinib record was refused because its peripheral volume V2/F (63.8 L) was not represented, and its measured-compound output and model structure did not match.

<div class="pk-model-meta" hidden drug="sunitinib" model-id="Sunitinib_Wang2020_reference" status="rejected" stale="false" population="pediatric patients with solid tumors" measured-compound="sunitinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Wang E, DuBois SG, Wetmore C, Khosravan R. Population pharmacokinetics-pharmacodynamics of sunitinib in pediatric patients with solid tumors. Cancer chemotherapy and pharmacology 86(2):181–192 (2020).
  ·  DOI: [10.1007/s00280-020-04106-z](https://doi.org/10.1007/s00280-020-04106-z)

## Population and dosing

**Population:** pediatric patients with solid tumors · condition solid tumors · age group mixed · n = 59.

**Dosing:** 15, 20 mg/m2, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sunitinib/Sunitinib_Wang2020_reference/Sunitinib_Wang2020_reference.svg" alt="Sunitinib_Wang2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F, L/hc | CL/F | 24.1 | L/h | 34.2 (None% RSE) |
| Vc/F, Lc | V1/F | 1070 | L | 24.1 (None% RSE) |
| ka, 1/h | kabs | 0.38 | 1/h | 87.7 (None% RSE) |
| tlag, h | tlag | 0.64 | h |  |
| Vp/F, L | V2/F | 63.8 | L |  |
| Q/F, L/h | Q/F | 0.28 | L/h |  |
| BSA on CL/F | allometric_exponent | 0.56 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sunitinib record was refused because its peripheral volume V2/F (63.8 L) was not represented, and its measured-compound output and model structure did not match.**

Only 5 of the 6 expected parameters were covered; V2/F, the peripheral-compartment volume for sunitinib, was absent. The output was central-compartment concentration rather than the measured sunitinib compartment, and the parent–metabolite structure was represented as a one-compartment enteral model. The builder also defaulted the absorption lag time despite the recorded estimate of 0.64 h, and assumed F=1 and Fm=1 with no molar correction. Extracted — sunitinib: CL/F 24.1 L/h, V1/F 1.07e+03 L, kabs 0.38 1/h, tlag 0.64 h, V2/F 63.8 L, Q/F 0.28 L/h, allometric_exponent 0.56.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/hc | `Q27` · CL/F | 24.1 | L/h | 6.694e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab3:row2:col1 | 34.2 (None% RSE) |
| Vc/F, Lc | `Q290` · V1/F | 1070 | L | 1.07 | m3 | L | llm_confirmed (0.6) | Tab3:row3:col1 | 24.1 (None% RSE) |
| ka, 1/h | `Q49` · kabs | 0.38 | 1/h | 0.0001056 | 1/s | 1/h | exact (1) | Tab3:row4:col1 | 87.7 (None% RSE) |
| tlag, h | `Q83` · tlag | 0.64 | h | 2304 | s | h | exact (1) | Tab3:row5:col1 |  |
| Vp/F, L | `Q82` · V2/F | 63.8 | L | 0.0638 | m3 | l | exact (1) | Tab3:row6:col1 |  |
| Q/F, L/h | `Q69` · Q/F | 0.28 | L/h | 7.778e-08 | m3/s | l/h | exact (1) | Tab3:row7:col1 |  |
| BSA on CL/F | `Q319` · allometric_exponent | 0.56 |  |  |  |  | llm_corrected (0.6) | Tab3:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q290 ('BSA on Vc/F', value '1.47') — already have one for this compound
- implicit units: 'CL/F, L/hc' → L/h (from the paper text: 'The paper states: “the estimated typical values for CL/F and Vc/F were 24.1 L/h and 1070 L, respectively.”')
- implicit units: 'Vc/F, Lc' → L (from the paper text: 'The paper states: “the estimated typical values for CL/F and Vc/F were 24.1 L/h and 1070 L, respectively.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sunitinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 12 linked by role; re-tagged sunitinib→parent ×12, SU012662→parent ×12
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Tab3:row2:col2 = '23.8 (13.4–27.1)'
- unparsed cell Tab3:row2:col4 = '11.0 (9.3–12.8)'
- unparsed cell Tab3:row3:col2 = '1025 (784–1,230)'
- unparsed cell Tab3:row3:col4 = '953 (494–1231)'
- unparsed cell Tab3:row4:col2 = '0.35 (0.21–0.57)'
- unparsed cell Tab3:row4:col4 = '0.26 (0.13–0.38)'
- unparsed cell Tab3:row5:col2 = '0.64 (0.47–0.76)'
- unparsed cell Tab3:row5:col4 = '0.48 (0.14–0.65)'
- unparsed cell Tab3:row6:col2 = '86.0 (45.9–776,900)'
- unparsed cell Tab3:row6:col4 = '154 (26.7–445)'
- unparsed cell Tab3:row7:col2 = '0.33 (0.20–20.4)'
- unparsed cell Tab3:row7:col4 = '22.9 (0.84–479)'
- unparsed cell Tab3:row8:col2 = '0.57 (0.31–1.04)'
- unparsed cell Tab3:row8:col4 = '0.84 (0.41–1.27)'
- unparsed cell Tab3:row9:col2 = '1.50 (1.00–1.93)'
- unparsed cell Tab3:row9:col4 = '1.92 (1.21–3.69)'
- unparsed cell Tab3:row10:col2 = '34.1 (27.1–61.5)'
- unparsed cell Tab3:row10:col4 = '47.0 (34.4–60.4)'
- unparsed cell Tab3:row11:col2 = '20.5 (24.1–41.1)'
- unparsed cell Tab3:row11:col4 = '51.4 (36.5–75.1)'
- unparsed cell Tab3:row12:col2 = '86.5 (51.9–120)'
- unparsed cell Tab3:row12:col4 = '65.0 (24.2–92.8)'
- unparsed cell Tab3:row13:col2 = '31.0 (24.0–39.3)'
- unparsed cell Tab3:row13:col4 = '22.8 (19.4–27.3)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row6:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.1 L/h | ['Tab3:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.07e+03 L | ['Tab3:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 63.8 L | ['Tab3:row6:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=sunitinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2/F'] |
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

**Administration: oral** — 33 mg, single dose, first-order absorption (ka 0.38 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 33 mg oral (L01EX01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_sunitinib/Sunitinib_Wang2020_reference/Sunitinib_Wang2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sunitinib/Sunitinib_Wang2020_reference/Sunitinib_Wang2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Sunitinib_Wang2020_reference_params.json` · controls `Sunitinib_Wang2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsunitinib%5D%20Sunitinib_Wang2020_reference&body=Drug%3A%20sunitinib%0ARecord%3A%20Sunitinib_Wang2020_reference%0APaper%3A%20Wang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sunitinib/Sunitinib_Wang2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:31 UTC</sub>
