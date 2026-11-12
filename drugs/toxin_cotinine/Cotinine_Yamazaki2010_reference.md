<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Cotinine&quot;,&quot;href&quot;:&quot;drugs/toxin_cotinine/&quot;},{&quot;label&quot;:&quot;Yamazaki_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cotinine_Dempsey2013_reference&quot;,&quot;label&quot;:&quot;Dempsey_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cotinine/Cotinine_Dempsey2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cotinine_Kovar2020_reference&quot;,&quot;label&quot;:&quot;Kovar_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cotinine/Cotinine_Kovar2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cotinine_Yamazaki2010_reference&quot;,&quot;label&quot;:&quot;Yamazaki_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cotinine/Cotinine_Yamazaki2010_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cotinine — `Cotinine_Yamazaki2010_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The cotinine model was rejected because absorption rate and lag time defaulted, and the topology mismatched the measured metabolite output.

<div class="pk-model-meta" hidden drug="Cotinine" model-id="Cotinine_Yamazaki2010_reference" status="rejected" stale="false" population="Rats and Humans" measured-compound="Cotinine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Yamazaki H, Horiuchi K, Takano R, Nagano T, Shimizu M, Kitajima M et al. Human blood concentrations of cotinine, a biomonitoring marker for tobacco smoke, extrapolated from nicotine metabolism in rats and humans and physiologically based pharmacokinetic modeling. International journal of environmental research and public health 7(9):3406–3421 (2010).
  ·  DOI: [10.3390/ijerph7093406](https://doi.org/10.3390/ijerph7093406)

## Population and dosing

**Population:** Rats and Humans · condition healthy · age group adult.

**Dosing:** 1, 43.4 mg/kg, mg, oral, inhaled, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Nicotine, measured Cotinine.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_cotinine/Cotinine_Yamazaki2010_reference/Cotinine_Yamazaki2010_reference.svg" alt="Cotinine_Yamazaki2010_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Octanol-water partition coefficient | Kp | 0.040 |  |
| Hepatic intrinsic clearance | CLm/F | 0.208 | L/h |
| Renal clearance | CLR | 0.00421 | L/h |
| Plasma unbound fraction | fu | 0.743 | - |
| Volume of systemic circulation | Vm/F | 0.451 | L |
| Hepatic volume | VH | 0.00850 | L |
| Hepatic blood flow rate of systemic circulation to the tissue compartment | QH | 0.853 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The cotinine model was rejected because absorption rate and lag time defaulted, and the topology mismatched the measured metabolite output.**

Absorption parameters ka and Tlag used library defaults rather than estimates from the paper. The model topology did not match the expected parent-metabolite structure, and the output variable was incorrect for the measured compound. Extracted — cotinine: Kp 0.04, CLm/F 0.208 L/h, CLR 0.00421 L/h, fu 0.743 -, Vm/F 0.451 L, VH 0.0085 L, QH 0.853 L/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Octanol-water partition coefficient | `Q410` · Kp | 0.040 |  |  |  |  | llm_confirmed (0.6) | t1-ijerph-07-03406:row1:col3 |
| Hepatic intrinsic clearance | `Q351` · CLm/F | 0.208 | L/h | 5.778e-08 | m3/s | l/h | boundary_llm_dim_refused (0.8) | t1-ijerph-07-03406:row2:col3, Yamazaki_2010_table_2:row0:col3 |
| Renal clearance | `Q26` · CLR | 0.00421 | L/h | 1.169e-09 | m3/s | l/h | exact (1) | t1-ijerph-07-03406:row4:col3, Yamazaki_2010_table_2:row1:col3 |
| Plasma unbound fraction | `Q46` · fu | 0.743 | - | 0.743 |  | - | llm_confirmed (0.6) | t1-ijerph-07-03406:row5:col3 |
| Volume of systemic circulation | `Q367` · Vm/F | 0.451 | L | 0.000451 | m3 | l | llm_confirmed (0.6) | t1-ijerph-07-03406:row7:col3, Yamazaki_2010_table_2:row2:col3 |
| Hepatic volume | `Q368` · VH | 0.00850 | L | 8.5e-06 | m3 | l | exact (1) | t1-ijerph-07-03406:row8:col3, Yamazaki_2010_table_2:row3:col3 |
| Hepatic blood flow rate of systemic circulation to the tissue compartment | `Q369` · QH | 0.853 | L/h | 2.369e-07 | m3/s | l/h | llm_confirmed (0.6) | t1-ijerph-07-03406:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'Liver-plasma concentration ratio' — extend the ontology if this is a real PK parameter (source ['t1-ijerph-07-03406:row3:col3'])
- unit_dimension_unknown: '-' (fu)
- dropped unlinked row (NIL): 'Ratio of the blood to plasma concentration' — extend the ontology if this is a real PK parameter (source ['t1-ijerph-07-03406:row6:col3'])
- dropped duplicate Q369 ('Hepatic blood flow rate systemic circulation to the tissue compartment', value '96.6') — already have one for this compound
- metabolite cotinine: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite cotinine: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Cotinine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q368, Q369)')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 13/13 row label(s) assigned, 10 linked by role; re-tagged Nicotine→parent ×19, Cotinine→parent ×14
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- table t1-ijerph-07-03406: missing_unit_binding
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['t1-ijerph-07-03406:row4:col3', 'Yamazaki_2010_table_2:row1:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['t1-ijerph-07-03406:row2:col3', 'Yamazaki_2010_table_2:row0:col3'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['t1-ijerph-07-03406:row7:col3', 'Yamazaki_2010_table_2:row2:col3'] |
| C5_dimension_Q368 | pass | [length] ** 3 |  | ['t1-ijerph-07-03406:row8:col3', 'Yamazaki_2010_table_2:row3:col3'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['t1-ijerph-07-03406:row9:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=Cotinine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_cotinine/Cotinine_Yamazaki2010_reference/Cotinine_Yamazaki2010_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_cotinine/Cotinine_Yamazaki2010_reference/Cotinine_Yamazaki2010_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cotinine_Yamazaki2010_reference_params.json` · controls `Cotinine_Yamazaki2010_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcotinine%5D%20Cotinine_Yamazaki2010_reference&body=Drug%3A%20cotinine%0ARecord%3A%20Cotinine_Yamazaki2010_reference%0APaper%3A%20Yamazaki_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cotinine/Cotinine_Yamazaki2010_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 09:15 UTC</sub>
