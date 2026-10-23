<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Courlet_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Malekinejad2014_reference&quot;,&quot;label&quot;:&quot;Malekinejad_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Malekinejad2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Courlet2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Atorvastatin clearance was recorded as 230 L/h instead of 233 L/h, while bioavailability and lag time were left at library placeholders.

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Courlet2020_reference" status="rejected" stale="false" population="aging people living with HIV" measured-compound="atorvastatin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Courlet P, Decosterd LA, Alves Saldanha S, Cavassini M, Stader F, Stoeckle M et al. Influence of Drug-Drug Interactions on the Pharmacokinetics of Atorvastatin and Its Major Active Metabolite ortho-OH-Atorvastatin in Aging People Living with HIV. Clinical pharmacokinetics 59(8):1037–1048 (2020).
  ·  DOI: [10.1007/s40262-020-00876-0](https://doi.org/10.1007/s40262-020-00876-0)

## Population and dosing

**Population:** aging people living with HIV · age group adult · n = &gt;=59.

**Dosing:** 5, 40 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference/Atorvastatin_Courlet2020_reference.svg" alt="Atorvastatin_Courlet2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (h−1)b | kabs | 2.59 | 1/h |
| Logit FRator-oOH | fm | 10 |  |
| CLator (L/h) | CL | 230 | L/h |
| Vcator=Vcmet (L) | V | 2910 | L |
| Q (L/h) | Q | 98 | L/h |
| k23 (h−1) | kel | 0.0072 | h−1 |
| CLo-OH-ator (L/h) | CL | 116 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Atorvastatin clearance was recorded as 230 L/h instead of 233 L/h, while bioavailability and lag time were left at library placeholders.**

The second reader identified the parent compound's total clearance as 233 L/h, but the record lists 230 L/h. Simultaneously, the fraction of drug systemically available and the absorption lag time were not extracted from the paper and defaulted. These omissions mean the simulated concentration profile relies on generic assumptions rather than data specific to this study's aging HIV population. Extracted — atorvastatin: kabs 2.59 1/h, CL 230 L/h, V 2.91e+03 L, Q 98 L/h, kel 0.0072 h−1; o-OH-atorvastatin: fm 10, CL 116 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atorvastatin, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (h−1)b | `Q49` · kabs | 2.59 | 1/h | 0.0007194 | 1/s | 1/h | exact (1) | Tab2:row2:col1 |
| Logit FRator-oOH | `Q45` · fm | 10 |  |  |  |  | exact (1) | Tab2:row4:col2 |
| CLator (L/h) | `Q22` · CL | 230 | L/h | 6.389e-05 | m3/s | l/h | llm (0.6) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3 |
| Vcator=Vcmet (L) | `Q61` · V | 2910 | L | 2.91 | m3 | l | llm (0.6) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3 |
| Q (L/h) | `Q30` · Q | 98 | L/h | 2.722e-05 | m3/s | l/h | exact (1) | Tab2:row14:col1, Tab2:row14:col2, Tab2:row14:col3 |
| k23 (h−1) | `Q47` · kel | 0.0072 | h−1 | 2e-06 | 1/s | 1/h | exact (1) | Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3 |
| CLo-OH-ator (L/h) | `Q22` · CL | 116 | L/h | 3.222e-05 | m3/s | l/h | exact (1) | Tab2:row16:col1, Tab2:row16:col2, Tab2:row16:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameters' — extend the ontology if this is a real PK parameter (source ['Tab2:row0:col3', 'Tab2:row0:col4'])
- dropped unlinked row (NIL): 'θboosted ARVs' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row9:col2'])
- dropped unlinked row (NIL): 'θCYP3A4 inducers' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3'])
- dropped duplicate Q61 ('Vpator (L)', value '617') — already have one for this compound
- implicit units: 'ka (h−1)b' → 1/h (from the paper text: "The paper text states: 'The ka was estimated at 2.59 h−1' and 'total ka was fixed to the value estimated during the anal")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLator (L/h)); Q61 (Vcator=Vcmet (L)); Q30 (Q (L/h)); Q22 (CLo-OH-ator (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atorvastatin
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'Metabolite concentrations were described by considering both linear metabolism from atorvastatin and presystemic metabol')
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 20 linked by role; re-tagged parent→o-OH-atorvastatin ×15
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Tab2:row3:col4 = '25 to 2103'
- unparsed cell Tab2:row4:col1 = '− 1.56'
- unparsed cell Tab2:row4:col3 = '− 1.52'
- unparsed cell Tab2:row4:col4 = '− 2.2 to − 1.0'
- unparsed cell Tab2:row5:col4 = '25 to 92'
- unparsed cell Tab2:row6:col1 = '− 2.25'
- unparsed cell Tab2:row6:col3 = '− 2.27'
- unparsed cell Tab2:row6:col4 = '− 7.9 to − 0.9'
- unparsed cell Tab2:row7:col4 = '162 to 312'
- unparsed cell Tab2:row8:col4 = '37 to 84'
- unparsed cell Tab2:row9:col1 = '− 0.58'
- unparsed cell Tab2:row9:col3 = '− 0.58'
- unparsed cell Tab2:row9:col4 = '− 0.7 to − 0.4'
- unparsed cell Tab2:row10:col4 = '0.05 to 1.30'
- unparsed cell Tab2:row11:col4 = '1215 to 6023'
- unparsed cell Tab2:row12:col4 = '87 to 173'
- unparsed cell Tab2:row13:col4 = '322 to 11,687'
- unparsed cell Tab2:row14:col4 = '40 to 428'
- unparsed cell Tab2:row15:col4 = '0.0035 to 0.019'
- unparsed cell Tab2:row16:col4 = '62 to 196'
- unparsed cell Tab2:row17:col4 = '30 to 46'
- unparsed cell Tab2:row18:col4 = '22 to 34'
- unparsed cell Tab2:row19:col4 = '4 to 60'
- unparsed cell Tab2:row20:col4 = '47 to 77'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k23].parameter_id` | Q47 | Q99 | mismatch |
| `gpt-oss-120b` | `parameters[logit frator-ooh].parameter_id` | Q45 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[vcator=vcmet].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vpator]` |  | 617 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atorvastatin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atorvastatin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 230 L/h | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 116 L/h | ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.91e+03 L | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=atorvastatin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id: defaulted_parameters: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 2.59 /h, F 0.9). Doses in the paper: 5–40 mg.

<dbs-fmusim paramsurl="drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference/Atorvastatin_Courlet2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference/Atorvastatin_Courlet2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Atorvastatin_Courlet2020_reference_params.json` · controls `Atorvastatin_Courlet2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Courlet2020_reference&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Courlet2020_reference%0APaper%3A%20Courlet_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-27 12:36 UTC</sub>
