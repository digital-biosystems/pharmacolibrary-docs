<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;sodium stibogluconate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/&quot;},{&quot;label&quot;:&quot;Verrest_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumStibogluconate_Jaser1995_reference&quot;,&quot;label&quot;:&quot;Jaser_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Jaser1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumStibogluconate_Verrest2021_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Verrest_2024_parasite_load&quot;,&quot;label&quot;:&quot;Verrest_2024 \u00b7 parasite load&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/pd_Verrest_2024_parasite_load.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium stibogluconate — `SodiumStibogluconate_Verrest2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> paper_subject_is_other_drug; t0_analyte_identity (+1 more).

<div class="pk-model-meta" hidden drug="sodium stibogluconate" model-id="SodiumStibogluconate_Verrest2021_reference" status="rejected" stale="false" population="" measured-compound="sodium_stibogluconate" parameterization="mechanistic" topology="1C"></div>

## Citation
Verrest L, Wasunna M, Kokwaro G, Aman R, Musa AM, Khalil EAG et al. Geographical Variability in Paromomycin Pharmacokinetics Does Not Explain Efficacy Differences between Eastern African and Indian Visceral Leishmaniasis Patients. Clinical pharmacokinetics 60(11):1463–1473 (2021).
  ·  DOI: [10.1007/s40262-021-01036-8](https://doi.org/10.1007/s40262-021-01036-8)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference/SodiumStibogluconate_Verrest2021_reference.svg" alt="SodiumStibogluconate_Verrest2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clpop (L/h) | CL | 4.38 | L/h |
| Vd,pop (L) | V | 15.6 | L |
| ka,pop (h–1) | kabs | 1.99 | h–1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**paper_subject_is_other_drug; t0_analyte_identity (+1 more).**

Extracted — sodium stibogluconate: CL 4.38 L/h, V 15.6 L, kabs 1.99 h–1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q40: this record has 1.0, the second reading none. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clpop (L/h) | `Q22` · CL | 4.38 | L/h | 1.217e-06 | m3/s | L/h | review (0.7) | Verrest_2021:review |
| Vd,pop (L) | `Q61` · V | 15.6 | L | 0.0156 | m3 | L | review (0.7) | Verrest_2021:review |
| ka,pop (h–1) | `Q49` · kabs | 1.99 | h–1 | 0.0005528 | 1/s | 1/h | review (0.7) | Verrest_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- built from REVIEW reference values (Verrest_2021) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (5/6 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q40]` | 1.0 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Verrest_2021:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Verrest_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Verrest_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.38 | ['Verrest_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.38 L/h | ['Verrest_2021:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 15.6 L | ['Verrest_2021:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | sodium_stibogluconate (or metabolite) | paper about another drug |  | paper subject is not sodium_stibogluconate: the paper is about another drug; this one is a co-medication or covariate: This is a population-PK study of paromomycin; sodium stibogluconate is only a co-administered comparator drug with no PK parameters reported for it. |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=sodium_stibogluconate) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict partial; agreement 0.833 (5 of 6 compared fields agree, 1 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.833 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.99 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference/SodiumStibogluconate_Verrest2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference/SodiumStibogluconate_Verrest2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `SodiumStibogluconate_Verrest2021_reference_params.json` · controls `SodiumStibogluconate_Verrest2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_stibogluconate%5D%20SodiumStibogluconate_Verrest2021_reference&body=Drug%3A%20sodium_stibogluconate%0ARecord%3A%20SodiumStibogluconate_Verrest2021_reference%0APaper%3A%20Verrest_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 08:52 UTC</sub>
