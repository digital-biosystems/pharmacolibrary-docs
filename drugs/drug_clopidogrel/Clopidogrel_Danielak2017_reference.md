<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/&quot;},{&quot;label&quot;:&quot;Danielak_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clopidogrel_Jung2024_reference&quot;,&quot;label&quot;:&quot;Jung_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Ma2014_reference&quot;,&quot;label&quot;:&quot;Ma_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Ma2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Yousef2013_reference&quot;,&quot;label&quot;:&quot;Yousef_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Yousef2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jung_2024_PRU&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Jung_2024_PRU.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Simon_2015_IPA&quot;,&quot;label&quot;:&quot;Simon_2015 \u00b7 IPA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Simon_2015_IPA.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Jung_2024_CYP2C19_Q45&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 CYP2C19&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45.md&quot;,&quot;status&quot;:&quot;Simulated \u00b7 quantitative&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clopidogrel — `Clopidogrel_Danielak2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Danielak2017_reference" status="needs_review" stale="false" population="adult patients undergoing elective coronarography or PCI" measured-compound="clopidogrel" parameterization="apparent" topology="1C"></div>

## Citation
Danielak D, Karaźniewicz-Łada M, Komosa A, Burchardt P, Lesiak M, Kruszyna Ł et al. Influence of genetic co-factors on the population pharmacokinetic model for clopidogrel and its active thiol metabolite. European journal of clinical pharmacology 73(12):1623–1632 (2017).
  ·  DOI: [10.1007/s00228-017-2334-z](https://doi.org/10.1007/s00228-017-2334-z)

## Population and dosing

**Population:** adult patients undergoing elective coronarography or PCI · age group adult.

**Dosing:** 75 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** Q2/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| k12 [1/h] | k12 | 0.592 | 1/h | 3.53 | 25.3 (7.3% RSE) |
| V2/F [L] | V2/F | 7660 | L | 4.3 | 63.7 (19.6% RSE) |
| FM | fm | 0.045 |  | 3.6 | 71.4 (7.9% RSE) |
| V3/F [L] | V3/F | 4.89 | L | 4.5 |  |
| Q2/F [L/h] | Q2/F | 252 | L/h | 4.2 |  |
| V/F (L/kg) | V/F | 5.079 | L/kg |  |  |
| ka (1/h) | kabs | 5.95 | 1/h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214), gpt-5.6-luna (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Henrich_2021, Ma_2014) cannot stand in for this paper's evidence. Extracted — clopidogrel: k12 0.592 1/h, V2/F 7.66e+03 L, fm 0.045, V3/F 4.89 L, Q2/F 252 L/h, V/F 5.08 L/kg, kabs 5.95 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has clopidogrel, the second reading H4; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k12 [1/h] | `Q301` · k12 | 0.592 | 1/h | 0.0001644 | 1/s | 1/h | 3.53 | llm_confirmed (0.6) | Tab2:row2:col1 | 25.3 (7.3% RSE) |
| V2/F [L] | `Q82` · V2/F | 7660 | L | 7.66 | m3 | l | 4.3 | llm_confirmed (0.6) | Tab2:row3:col1 | 63.7 (19.6% RSE) |
| FM | `Q45` · fm | 0.045 |  | 0.045 |  |  | 3.6 | exact (1) | Tab2:row5:col1 | 71.4 (7.9% RSE) |
| V3/F [L] | `Q78` · V3/F | 4.89 | L | 0.00489 | m3 | l | 4.5 | llm_confirmed (0.6) | Tab2:row6:col1 |  |
| Q2/F [L/h] | `Q80` · Q2/F | 252 | L/h | 7e-05 | m3/s | l/h | 4.2 | llm_confirmed (0.6) | Tab2:row7:col1 |  |
| V/F (L/kg) | `Q76` · V/F | 5.079 | L/kg | 0.3555 | m3 | L |  | review_gapfill (0.7) | Ma_2014:review |  |
| ka (1/h) | `Q49` · kabs | 5.95 | 1/h | 0.001653 | 1/s | 1/h |  | review_gapfill (0.7) | Henrich_2021:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'k12 and V2/F' routed out of structural estimates ('Covariance between')
- table section covariance: 'Proportional residual error for CLP' routed out of structural estimates ('Covariance between')
- table section covariance: 'Proportional residual error for H4' routed out of structural estimates ('Covariance between')
- table representations disagree for 'k12 [1/h]'; source reconciliation required
- table representations disagree for 'V2/F [L]'; source reconciliation required
- table representations disagree for 'FM'; source reconciliation required
- table representations disagree for 'V3/F [L]'; source reconciliation required
- table representations disagree for 'Q2/F [L/h]'; source reconciliation required
- table representations disagree for 'IIVa for k12'; source reconciliation required
- table representations disagree for 'IIVa for V2/F'; source reconciliation required
- table representations disagree for 'IIVa for CL/F'; source reconciliation required
- table representations disagree for 'IIVa for FM'; source reconciliation required
- table representations disagree for 'on FM (COV)b'; source reconciliation required
- routed 'on FM (COV)b' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clopidogrel
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q76 (V/F) from Ma_2014's review values (primary lacked it)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Henrich_2021's review values (primary lacked it)

**Extraction notes:**
- table Tab2: ambiguous_numeric_format
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |
| `gpt-5.6-luna` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[ka]` | 5.95 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[v/f]` | 140.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` |  | 0.045 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` | 0.045 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12 [1/h]]` |  | 0.592 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12 [1/h]]` | 0.592 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f [l/h]]` |  | 252 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f [l/h]]` | 252 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f [l]]` |  | 7660 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f [l]]` | 7660 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f [l]]` |  | 4.89 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f [l]]` | 4.89 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | clopidogrel | H4 | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Tab2:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Henrich_2021:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Ma_2014:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab2:row6:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 356 L | ['Ma_2014:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 7.66e+03 L | ['Tab2:row3:col1'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclopidogrel%5D%20Clopidogrel_Danielak2017_reference&body=Drug%3A%20clopidogrel%0ARecord%3A%20Clopidogrel_Danielak2017_reference%0APaper%3A%20Danielak_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clopidogrel/Clopidogrel_Danielak2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:52 UTC</sub>
