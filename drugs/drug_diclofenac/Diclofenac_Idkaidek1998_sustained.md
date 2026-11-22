<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Idkaidek_1998 \u00b7 sustained&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Lucas2016_reference&quot;,&quot;label&quot;:&quot;Lucas_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Lucas2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Idkaidek1998_sustained&quot;,&quot;label&quot;:&quot;Idkaidek_1998_sustained&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Idkaidek1998_sustained`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The inter-compartmental transfer rate kcomp was missing, and bioavailability Fab had an unconvertible unit.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Idkaidek1998_sustained" status="needs_review" stale="false" population="adults" measured-compound="diclofenac" parameterization="apparent" topology="1C"></div>

## Citation
Idkaidek NM, Amidon GL, Smith DE, Najib NM, Hassan MM. Determination of the population pharmacokinetic parameters of sustained-release and enteric-coated oral formulations, and the suppository formulation of diclofenac sodium by simultaneous data fitting using NONMEM. Biopharmaceutics & drug disposition 19(3):169–174 (1998).
  ·  DOI: [10.1002/(sici)1099-081x(199804)19:3<169::aid-bdd83>3.0.co;2-c](https://doi.org/10.1002/(sici)1099-081x(199804)19:3<169::aid-bdd83>3.0.co;2-c)

## Population and dosing

**Population:** adults · condition healthy · age group adult · n = 84.

**Dosing:** 100 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed diclofenac sodium, measured diclofenac.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained/Diclofenac_Idkaidek1998_sustained.svg" alt="Diclofenac_Idkaidek1998_sustained diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| K 23 (h -1 ) | kcomp | 0.106 | h -1 | 0.172 (None% RSE) |
| K 30 (h -1 ) | ki0 | 7.20 | h -1 |  |
| V central /f (L) | V/F | 4.70 | L |  |
| Lag time 2 (h) | tlag | 2.77 | h |  |
| Fraction absorbed from depot 1 (A1) | Fab | 0.58 | 1.71×10 -9 |  |
| Cl/f | CL/F | 260.0 | mL min -1 |  |
| k a (h À1 ) | kabs | 0.94 | h À1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The inter-compartmental transfer rate kcomp was missing, and bioavailability Fab had an unconvertible unit.**

The record lists kcomp as 0.106 h-1, but the system failed to emit a value for this parameter. The bioavailability Fab is recorded as 0.58 with the unit 1.71×10-9, which could not be converted to standard SI units. Consequently, the model lacks a valid SI value for kcomp and a valid unit for Fab. Extracted — diclofenac: kcomp 0.106 h -1, ki0 7.2 h -1, V/F 4.7 L, tlag 2.77 h, Fab 0.58 1.71×10 -9, CL/F 260 mL min -1, kabs 0.94 h À1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has diclofenac, the second reading diclofenac sodium; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| K 23 (h -1 ) | `Q48` · kcomp | 0.106 | h -1 | 2.944e-05 | 1/s | 1/h | space_fold (0.95) | tab_0:row2:col1 | 0.172 (None% RSE) |
| K 30 (h -1 ) | `Q373` · ki0 | 7.20 | h -1 | 0.002 | 1/s | 1/h | space_fold (0.95) | tab_0:row8:col1 |  |
| V central /f (L) | `Q76` · V/F | 4.70 | L | 0.0047 | m3 | l | llm (0.6) | tab_0:row10:col1 |  |
| Lag time 2 (h) | `Q83` · tlag | 2.77 | h | 9972 | s | h | llm_confirmed (0.6) | tab_0:row13:col1 |  |
| Fraction absorbed from depot 1 (A1) | `Q40` · Fab | 0.58 | 1.71×10 -9 |  |  | 1.71·10-9 | llm_confirmed (0.6) | tab_0:row14:col1 |  |
| Cl/f | `Q27` · CL/F | 260.0 | mL min -1 | 4.333e-06 | m3/s | L/h | review_gapfill (0.7) | Idkaidek_1998:review |  |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h | review_gapfill (0.7) | Kim_2016:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'K 34' routed out of structural estimates ('Inter-individual variability')
- dropped duplicate Q48 ('K 34 (h -1 )', value '5.36') — already have one for this compound
- dropped duplicate Q48 ('K 43 (h -1 )', value '0.70') — already have one for this compound
- unit_dimension_unknown: '1.71×10 -9' (Fab)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V central /f (L)' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'sustained' subgroup of Idkaidek_1998 (paper reports 3 populations: enteric coated, suppository, sustained)
- gap-filled Q27 (CL/F) from Idkaidek_1998's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)

**Extraction notes:**
- table tab_0: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[c max (ng ml -1 ) i]` |  | 582 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mat (h) f]` |  | 6.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 depot1 (h) h]` |  | 2.962 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 i (h) h]` |  | 1.768 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | diclofenac | diclofenac sodium | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Idkaidek_1998:review'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['tab_0:row8:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['tab_0:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_0:row10:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_0:row13:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.6 L/h | ['Idkaidek_1998:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.7 L | ['tab_0:row10:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=diclofenac) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
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

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.94 /h, lag 166 min, F 1). Dose in the paper: 100 mg.

<dbs-fmusim paramsurl="drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained/Diclofenac_Idkaidek1998_sustained_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained/Diclofenac_Idkaidek1998_sustained_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Diclofenac_Idkaidek1998_sustained_params.json` · controls `Diclofenac_Idkaidek1998_sustained_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Idkaidek1998_sustained&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Idkaidek1998_sustained%0APaper%3A%20Idkaidek_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:01 UTC</sub>
