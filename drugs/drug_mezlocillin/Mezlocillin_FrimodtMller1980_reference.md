<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;mezlocillin&quot;,&quot;href&quot;:&quot;drugs/drug_mezlocillin/&quot;},{&quot;label&quot;:&quot;Frimodt-M\u00f6ller_1980 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mezlocillin_Jungbluth1989_reference&quot;,&quot;label&quot;:&quot;Jungbluth_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mezlocillin/Mezlocillin_Jungbluth1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mezlocillin_Modr1982_reference&quot;,&quot;label&quot;:&quot;Modr_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mezlocillin/Mezlocillin_Modr1982_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mezlocillin_Pacifici2010_reference&quot;,&quot;label&quot;:&quot;Pacifici_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mezlocillin/Mezlocillin_Pacifici2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mezlocillin_FrimodtMller1980_reference&quot;,&quot;label&quot;:&quot;Frimodt-M\u00f6ller_1980_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mezlocillin/Mezlocillin_FrimodtMller1980_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mezlocillin — `Mezlocillin_FrimodtMller1980_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record uses creatinine clearance as a surrogate for mezlocillin elimination clearance instead of an actual pharmacokinetic estimate.

<div class="pk-model-meta" hidden drug="mezlocillin" model-id="Mezlocillin_FrimodtMller1980_reference" status="rejected" stale="false" population="patients with varying degrees of renal function" measured-compound="mezlocillin" parameterization="mechanistic" topology="1C"></div>

## Citation
Frimodt-Möller N, Maigaard S, Toothaker RD, Bundtzen RW, Brodey MV, Craig WA et al. Mezlocillin pharmacokinetics after single intravenous doses to patients with varying degrees of renal function. Antimicrobial agents and chemotherapy 17(4):599–607 (1980).
  ·  DOI: [10.1128/AAC.17.4.599](https://doi.org/10.1128/AAC.17.4.599)

## Population and dosing

**Population:** patients with varying degrees of renal function · condition renal impairment · age group adult.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_mezlocillin/Mezlocillin_FrimodtMller1980_reference/Mezlocillin_FrimodtMller1980_reference.svg" alt="Mezlocillin_FrimodtMller1980_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| creatinine clearances | CLu | 60 | L/h |
| mean elimination half-life | t1/2z | 1.3 | h |
| V(dss) | V | 0.32 | liter kg(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record uses creatinine clearance as a surrogate for mezlocillin elimination clearance instead of an actual pharmacokinetic estimate.**

The elimination parameter is labeled 'creatinine clearances' with a value of 60 L/h, which defines renal filtration capacity rather than the drug's clearance. Although the measured compound is mezlocillin, the model structure relies on this biomarker value for the unbound clearance parameter. Because the record was abstract-only, these summary statistics were used directly without deriving true drug-specific kinetic values. Extracted — mezlocillin: CLu 60 L/h, t1/2z 1.3 h, V 0.32 liter kg(-1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mezlocillin, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| creatinine clearances | `Q24` · CLu | 60 | L/h | 1.667e-05 | m3/s | L/h | llm (0.6) | Frimodt-Möller_1980:abstract, Frimodt-Möller_1980:abstract, Frimodt-Möller_1980:abstract |
| mean elimination half-life | `Q57` · t1/2z | 1.3 | h | 4680 | s | h | llm (0.6) | Frimodt-Möller_1980:abstract, Frimodt-Möller_1980:abstract, Frimodt-Möller_1980:abstract |
| V(dss) | `Q61` · V | 0.32 | liter kg(-1) | 0.0224 | m3 | l/kg | exact (1) | Frimodt-Möller_1980:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ml min(-1) 1.73 m(-2)' (CLu)
- dropped duplicate Q57 ('mean serum half-life', value 1.5) — already have one for this compound
- implicit units: 'creatinine clearances' → L/h (from the popPK convention: 'Creatinine clearance (CLcr) is a standard surrogate marker for glomerular filtration rate used as a covariate in populat')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mezlocillin
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Frimodt-Möller_1980_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[creatinine clearances]` | 60 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean elimination half-life of mezlocillin after the 2-g dose]` |  | 1.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean elimination half-life]` | 1.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 0.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 0.32 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mezlocillin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mezlocillin | unknown | mismatch |

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
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  | ['Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Frimodt-Möller_1980:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 60 | ['Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q24 | pass | clearance within physiological range | 60 L/h | ['Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract', 'Frimodt-Möller_1980:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 22.4 L | ['Frimodt-Möller_1980:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | fail | mezlocillin (or metabolite) | creatinine clearances | disposition label(s) name a biomarker, not mezlocillin: 'creatinine clearances' |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=mezlocillin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
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

**Administration: intravenous** — 6000 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 6000 mg parenteral (J01CA10) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_mezlocillin/Mezlocillin_FrimodtMller1980_reference/Mezlocillin_FrimodtMller1980_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_mezlocillin/Mezlocillin_FrimodtMller1980_reference/Mezlocillin_FrimodtMller1980_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Mezlocillin_FrimodtMller1980_reference_params.json` · controls `Mezlocillin_FrimodtMller1980_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmezlocillin%5D%20Mezlocillin_FrimodtMller1980_reference&body=Drug%3A%20mezlocillin%0ARecord%3A%20Mezlocillin_FrimodtMller1980_reference%0APaper%3A%20Frimodt-M%C3%B6ller_1980%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mezlocillin/Mezlocillin_FrimodtMller1980_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:07 UTC</sub>
