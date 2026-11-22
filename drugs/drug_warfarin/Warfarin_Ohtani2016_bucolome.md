<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Ohtani_2016 \u00b7 bucolome&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Gomeni2026_reference&quot;,&quot;label&quot;:&quot;Gomeni_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Gomeni2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Ooi2017_reference&quot;,&quot;label&quot;:&quot;Ooi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Ooi2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sasaki_2009_INR&quot;,&quot;label&quot;:&quot;Sasaki_2009 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Sasaki_2009_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Ohtani2016_bucolome`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLint has no unit.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Ohtani2016_bucolome" status="needs_review" stale="false" population="virtual populations (European Caucasian and Japanese)" measured-compound="(S)-warfarin" parameterization="apparent" topology="1C"></div>

## Citation
Ohtani H, Hakoda R, Imaoka A, Akiyoshi T. In silico evaluation of warfarin-bucolome therapy. Biopharmaceutics & drug disposition 37(4):233–242 (2016).
  ·  DOI: [10.1002/bdd.2008](https://doi.org/10.1002/bdd.2008)

## Population and dosing

**Population:** virtual populations (European Caucasian and Japanese) · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed warfarin, measured (S)-warfarin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW (g/mol) | MW | 266.34 | g/mol |
| Vss (L/kg) | Vss | 3 | L/kg |
| In vivo clearance CL po (L/hr) | CL/F | 19 | L/hr |
| CL int | CLint | 0.0099 |  |
| ka (1/h) | kabs | 0.214 | 1/h |
| Lag (h) | tlag | 1.29 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLint has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — warfarin: MW 266 g/mol, Vss 3 L/kg, CL/F 19 L/hr, CLint 0.0099; (S)-warfarin: kabs 0.214 1/h, tlag 1.29 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has (S)-warfarin, the second reading warfarin; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW (g/mol) | `Q374` · MW | 266.34 | g/mol | 0.2663 |  | g/(m·ol) | exact (1) | tab_0:row2:col5, tab_0:row2:col5, tab_0:row2:col5 |
| Vss (L/kg) | `Q65` · Vss | 3 | L/kg | 0.21 | m3 | l/kg | exact (1) | tab_0:row6:col5 |
| In vivo clearance CL po (L/hr) | `Q27` · CL/F | 19 | L/hr | 5.278e-06 | m3/s | l/h | llm_corrected (0.6) | tab_0:row7:col5 |
| CL int | `Q3` · CLint | 0.0099 |  |  |  |  | space_fold (0.95) | tab_0:row12:col5, tab_0:row12:col7 |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'MW (g/mol)'; source reconciliation required
- table representations disagree for 'logPO:W Type pKa B/P f u Binding protein a)'; source reconciliation required
- table representations disagree for 'Vss (L/kg)'; source reconciliation required
- table representations disagree for 'In vivo clearance CL po (L/hr)'; source reconciliation required
- table representations disagree for 'CL int'; source reconciliation required
- table representations disagree for 'f umic'; source reconciliation required
- dropped unlinked row (NIL): 'logPO:W Type pKa B/P f u Binding protein a)' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col5', 'tab_0:row3:col5', 'tab_0:row3:col5'])
- dropped unlinked row (NIL): 'f umic' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col5', 'tab_0:row14:col7'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=(S)-warfarin
- status held at "Needs review" — not promoted
- population split: 'bucolome' subgroup of Ohtani_2016 (paper reports 2 populations: (s)-wf, bucolome)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- table tab_0: unknown_column_role
- table tab_0: ragged_grid
- table tab_0: unparsed_numeric_cell
- table tab_0: representations disagree; selected evidence retained, not merged
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl int].value` | 0.0099 | 0.0253 | mismatch |
| `gpt-oss-120b` | `parameters[in vivo clearance cl po]` | 19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[logpo:w type pka b/p f u binding protein a)]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mw].value` | 266.34 | 308.3 | mismatch |
| `gpt-oss-120b` | `parameters[v d]` |  | 3.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss].value` | 3 | 0.114 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | (S)-warfarin | warfarin | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_0:row7:col5'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['tab_0:row2:col5', 'tab_0:row2:col5', 'tab_0:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_0:row6:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] |  | ['tab_0:row12:col5', 'tab_0:row12:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19 L/h | ['tab_0:row7:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 210 L | ['tab_0:row6:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Ohtani2016_bucolome&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Ohtani2016_bucolome%0APaper%3A%20Ohtani_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Ohtani2016_bucolome%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 23:24 UTC</sub>
