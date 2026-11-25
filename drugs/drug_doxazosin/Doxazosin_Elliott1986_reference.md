<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;doxazosin&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/&quot;},{&quot;label&quot;:&quot;Elliott_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxazosin_Kaye1986_man&quot;,&quot;label&quot;:&quot;Kaye_1986_man&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Kaye1986_man.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Kaye1986_rat&quot;,&quot;label&quot;:&quot;Kaye_1986_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Kaye1986_rat.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Young1988_reference&quot;,&quot;label&quot;:&quot;Young_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Young1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Elliott1986_reference&quot;,&quot;label&quot;:&quot;Elliott_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Elliott1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Doxazosin_unknown2023_reference&quot;,&quot;label&quot;:&quot;unknown_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_unknown2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Reid_1990_SBP&quot;,&quot;label&quot;:&quot;Reid_1990 \u00b7 SBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/pd_Reid_1990_SBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doxazosin — `Doxazosin_Elliott1986_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> K12, k21 use library defaults, not estimates from this paper; t6_deviations.

<div class="pk-model-meta" hidden drug="doxazosin" model-id="Doxazosin_Elliott1986_reference" status="needs_review" stale="false" population="normotensive young and elderly subjects" measured-compound="doxazosin" parameterization="apparent" topology="2C"></div>

## Citation
Elliott HL, Meredith PA, Vincent J, Reid JL. Clinical pharmacological studies with doxazosin. British journal of clinical pharmacology 21 Suppl 1(Suppl 1):27S–31S (1986).
  ·  DOI: [10.1111/j.1365-2125.1986.tb02850.x](https://doi.org/10.1111/j.1365-2125.1986.tb02850.x)

## Population and dosing

**Population:** normotensive young and elderly subjects · condition healthy · age group mixed · n = 36.

**Dosing:** 1, 2 mg, oral and iv, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_doxazosin/Doxazosin_Elliott1986_reference/Doxazosin_Elliott1986_reference.svg" alt="Doxazosin_Elliott1986_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean bioavailability | Fab | 65 |  |
| terminal elimination half-lives | t1/2z | 9.5 | h |
| apparent volume of distribution | V/F | 1.71 | L/kg |
| clearance | CL | 140 | mL/min |
| Volume of distribution (1 kg-') | V | 0.97 | L/kg |
| ka | kabs | 0.077 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**K12, k21 use library defaults, not estimates from this paper; t6_deviations.**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — doxazosin: Fab 65, t1/2z 9.5 h, V/F 1.71 L/kg, CL 140 mL/min, V 0.97 L/kg, kabs 0.077 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean bioavailability | `Q40` · Fab | 65 |  |  |  |  | llm_confirmed (0.6) | Elliott_1986:abstract |
| terminal elimination half-lives | `Q57` · t1/2z | 9.5 | h | 3.42e+04 | s | h | llm (0.6) | Elliott_1986:abstract, Elliott_1986:abstract |
| apparent volume of distribution | `Q76` · V/F | 1.71 | L/kg | 0.1197 | m3 | L | exact (1) | Elliott_1986:abstract, Elliott_1986:abstract |
| clearance | `Q22` · CL | 140 | mL/min | 2.333e-06 | m3/s | L/h | exact (1) | Elliott_1986:abstract, Elliott_1986:abstract |
| Volume of distribution (1 kg-') | `Q61` · V | 0.97 | L/kg | 0.0679 | m3 | L | exact (1) | Elliott_1986:abstract, Elliott_1986:abstract |
| ka | `Q49` · kabs | 0.077 | h-1 | 2.139e-05 | 1/s | 1/h | review_gapfill (0.7) | unknown_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q57 ('half-lives', value 8.8) — already have one for this compound
- unit_dimension_unknown: "kg-'" (V/F)
- unit_dimension_unknown: "ml min-'" (CL)
- dropped duplicate Q57 ('plasma half-life', value 2.5) — already have one for this compound
- unit_dimension_unknown: 'mlmin-' (CL)
- dropped duplicate Q22 ('Clearance (mlmin-)', value 83) — already have one for this compound
- unit_dimension_unknown: "mlmin-Ikg-'" (CL)
- dropped duplicate Q22 ("Clearance (mlmin-Ikg-')", value 1.16) — already have one for this compound
- dropped duplicate Q57 ('Terminal elimination half-life (h)', value 10.5) — already have one for this compound
- implicit units: 'apparent volume of distribution' → L/kg (from the paper text: 'The paper states in the abstract that the apparent volume of distribution was "1.71 kg-\'" in elderly subjects and "1.0 1')
- implicit units: 'clearance' → mL/min (from the paper text: 'The paper states in the abstract that clearance was "140 ml min-\'" in elderly subjects and "83 ml min-\'" in young subjec')
- implicit units: "Volume of distribution (1 kg-')" → L/kg (from the popPK convention: "The parameter name includes the dimension '1 kg-'' (L/kg) which suggests volume per body weight. The value 0.97 is consi")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=doxazosin
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q49 (kabs) from unknown_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Elliott_1986_extracted.txt (23 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 65 | 1.16 | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 1.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance].value` | 140 | 0.97 | mismatch |
| `gpt-oss-120b` | `parameters[mean bioavailability]` | 65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal bioavailability]` |  | 1.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination half-lives]` | 9.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination half‐life]` |  | 10.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution].value` | 0.97 | 83 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['unknown_2023:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.4 L/h | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 67.9 L | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 120 L | ['Elliott_1986:abstract', 'Elliott_1986:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=doxazosin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| X1_cross_check | skipped |  |  | no second reading of this record |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 0.077 /h, F 1). Doses in the paper: 1, 2 mg.

<dbs-fmusim paramsurl="drugs/drug_doxazosin/Doxazosin_Elliott1986_reference/Doxazosin_Elliott1986_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_doxazosin/Doxazosin_Elliott1986_reference/Doxazosin_Elliott1986_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Doxazosin_Elliott1986_reference_params.json` · controls `Doxazosin_Elliott1986_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxazosin%5D%20Doxazosin_Elliott1986_reference&body=Drug%3A%20doxazosin%0ARecord%3A%20Doxazosin_Elliott1986_reference%0APaper%3A%20Elliott_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxazosin/Doxazosin_Elliott1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 10:28 UTC</sub>
