<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;telmisartan&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/&quot;},{&quot;label&quot;:&quot;Baek_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telmisartan_Huang2019_reference&quot;,&quot;label&quot;:&quot;Huang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Huang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Ieiri2011_reference&quot;,&quot;label&quot;:&quot;Ieiri_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Ieiri2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Petersen2024_reference&quot;,&quot;label&quot;:&quot;Petersen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Petersen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Tatami2003_final&quot;,&quot;label&quot;:&quot;Tatami_2003_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Jeong2025_reference&quot;,&quot;label&quot;:&quot;Jeong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Jeong2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Tatami2003_estimated_parameters&quot;,&quot;label&quot;:&quot;Tatami_2003_estimated_parameters&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telmisartan — `Telmisartan_Baek2013_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<div class="pk-model-meta" hidden drug="telmisartan" model-id="Telmisartan_Baek2013_reference" status="not_modelled" stale="false" population="beagle dogs" measured-compound="telmisartan" parameterization="apparent" topology="2C"></div>

## Citation
Baek IH, Lee BY, Lee ES, Kwon KI. Pharmacokinetics of angiotensin II receptor blockers in the dog following a single oral administration. Drug research 63(7):357–361 (2013).
  ·  DOI: [10.1055/s-0033-1341424](https://doi.org/10.1055/s-0033-1341424)

## Population and dosing

**Population:** beagle dogs · age group adult.

**Dosing:** 50, 80, 160 mg, oral, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl t /F | CL | 3.65 | L/h |
| V z /F | V/F | 27.93 | L |
| K a | kabs | 0.92 | h -1 |
| V c /F | V1/F | 2.19 | L |
| V 2 /F (L) | V2/F | 360.0 | L |
| Q/F (L/h) | Q/F | 12.7 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl t /f: this record has 3.65, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl t /F | `Q22` · CL | 3.65 | L/h | 1.014e-06 | m3/s | L/h | boundary (0.8) | Baek_2013:other_prose |
| V z /F | `Q76` · V/F | 27.93 | L | 0.02793 | m3 | L | space_fold (0.95) | Baek_2013:other_prose |
| K a | `Q49` · kabs | 0.92 | h -1 | 0.0002556 | 1/s | 1/h | space_fold (0.95) | Baek_2013:other_prose |
| V c /F | `Q290` · V1/F | 2.19 | L | 0.00219 | m3 | L | space_fold (0.95) | Baek_2013:other_prose |
| V 2 /F (L) | `Q82` · V2/F | 360.0 | L | 0.36 | m3 | L | review_gapfill (0.7) | Jeong_2025:review |
| Q/F (L/h) | `Q69` · Q/F | 12.7 | L/h | 3.528e-06 | m3/s | L/h | review_gapfill (0.7) | Jeong_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- documentation only: 'K a' → Q49 (kabs) comes from ['fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'K el' → Q47 (kel) comes from ['fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'V c /F' → Q290 (V1/F) comes from ['fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- salvaged Q22 ('Cl t /F'=3.65) from results prose — parameter table was unreadable
- salvaged Q76 ('V z /F'=27.93) from results prose — parameter table was unreadable
- salvaged Q49 ('K a'=0.92) from results prose — parameter table was unreadable
- salvaged Q290 ('V c /F'=2.19) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telmisartan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q82 (V2/F) from Jeong_2025's review values (primary lacked it)
- gap-filled Q69 (Q/F) from Jeong_2025's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_1: no_numeric_grid
- final table tab_1: no supported point estimates; targeted recovery unresolved
- companion parameter table 1 transcribed (32 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl t /f]` | 3.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a].value` | 0.92 | 1.79 | mismatch |
| `gpt-oss-120b` | `parameters[k el]` |  | 0.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c /f].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[v c /f].value` | 2.19 | 42.54 | mismatch |
| `gpt-oss-120b` | `parameters[v z /f]` | 27.93 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Jeong_2025:review'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Jeong_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.65 L/h | ['Baek_2013:other_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.19 L | ['Baek_2013:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 27.9 L | ['Baek_2013:other_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 360 L | ['Jeong_2025:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | skipped |  |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 8.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.21 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.68 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 4.13 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 10.63 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 7.43 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 5.31 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 3 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 6 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 24 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5.43 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.8 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.83 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.80 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelmisartan%5D%20Telmisartan_Baek2013_reference&body=Drug%3A%20telmisartan%0ARecord%3A%20Telmisartan_Baek2013_reference%0APaper%3A%20Baek_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telmisartan/Telmisartan_Baek2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 16:53 UTC</sub>
