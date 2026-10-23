<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Lee_2022 \u00b7 sr_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Lee2022_sr_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The donepezil (Beagle dog) record was rejected because the parameter D1 is dimensionally inconsistent: it is labelled 'Dose (mg)' with value 5 mg, but it actually represents the duration of a zero-order input, which should be in time units.

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Lee2022_sr_2" status="rejected" stale="false" population="Beagle dogs" measured-compound="donepezil" parameterization="apparent" topology="1C"></div>

## Citation
Lee DY, Shin S, Kim TH, Shin BS. Establishment of Level a In Vitro-In Vivo Correlation (IVIVC) via Extended DoE-IVIVC Model: A Donepezil Case Study. Pharmaceutics 14(6) (2022).
  ·  DOI: [10.3390/pharmaceutics14061226](https://doi.org/10.3390/pharmaceutics14061226)

## Population and dosing

**Population:** Beagle dogs · condition healthy · age group adult · n = 3.

**Dosing:** 4.562, 5 mg, oral, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dose (mg) | D1 | 5 | mg |
| t1/2 (h) | t1/2z | 7.37 | h |
| Cmax (ng/mL) | Cmax | 1.62 | ng/mL |
| AUClast (ng·h/mL) | AUClast | 7.27 | ng·h/mL |
| AUCinf (ng·h/mL) | AUC∞ | 9.46 | ng·h/mL |
| Vz/F (L) | V/F | 9291.73 | L |
| CL/F (mL/min) | CL/F | 11840.78 | mL/min |
| MRT (h) b | MRT | 9.76 | h |
| Absorption rate constant, /hour | kabs | 2.73 | /hour |
| Lag time, hours | tlag | 0.54 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The donepezil (Beagle dog) record was rejected because the parameter D1 is dimensionally inconsistent: it is labelled 'Dose (mg)' with value 5 mg, but it actually represents the duration of a zero-order input, which should be in time units.**

In this one-compartment donepezil model, D1 carries a dose value (5 mg) while its meaning is the duration of a zero-order infusion or zero-order absorption into the dosing compartment, so a structural input-duration parameter was given a mass value and mass units — a dimension mismatch on a structural parameter. In addition, one reported parameter had a unit that could not be converted to SI units, so it reached the model builder without an SI value. The remaining reported parameters (t1/2z 7.37 h, Cmax 1.62 ng/mL, AUClast 7.27 ng·h/mL, AUC∞ 9.46 ng·h/mL, V/F 9291.73 L, CL/F 11840.78 mL/min, MRT 9.76 h, kabs 2.73 /hour, tlag 0.54 h) are consistent with their stated meanings. Extracted — donepezil: D1 5 mg, t1/2z 7.37 h, Cmax 1.62 ng/mL, AUClast 7.27 ng·h/mL, AUC∞ 9.46 ng·h/mL, V/F 9.29e+03 L, CL/F 1.18e+04 mL/min, MRT 9.76 h, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has donepezil, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dose (mg) | `Q310` · D1 | 5 | mg |  |  | mg | llm (0.6) | Lee_2022_table_3:row0:col3 |
| t1/2 (h) | `Q57` · t1/2z | 7.37 | h | 2.653e+04 | s | h | exact (1) | Lee_2022_table_3:row1:col3 |
| Cmax (ng/mL) | `Q32` · Cmax | 1.62 | ng/mL |  |  | ng/ml | exact (1) | Lee_2022_table_3:row3:col3 |
| AUClast (ng·h/mL) | `Q74` · AUClast | 7.27 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Lee_2022_table_3:row4:col3 |
| AUCinf (ng·h/mL) | `Q17` · AUC∞ | 9.46 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Lee_2022_table_3:row5:col3 |
| Vz/F (L) | `Q76` · V/F | 9291.73 | L | 9.292 | m3 | l | exact (1) | Lee_2022_table_3:row6:col3 |
| CL/F (mL/min) | `Q27` · CL/F | 11840.78 | mL/min | 0.0001973 | m3/s | ml/min | exact (1) | Lee_2022_table_3:row7:col3 |
| MRT (h) b | `Q53` · MRT | 9.76 | h | 3.514e+04 | s | h | llm_confirmed (0.6) | Lee_2022_table_3:row8:col3 |
| Absorption rate constant, /hour | `Q49` · kabs | 2.73 | /hour | 0.0007583 | 1/s | 1/h | review_gapfill (0.7) | Bakker_2021:review |
| Lag time, hours | `Q83` · tlag | 0.54 | hours | 1944 | s | h | review_gapfill (0.7) | Bakker_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Dose (mg)' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_unknown: 'n = 3' (MRT)
- implicit units: 'MRT (h) b' → h (from the paper text: "The table itself labels the parameter as 'MRT (h)', and the footnote defines 'b mean residence time', so the unit h is s")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=donepezil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'sr-2 (n = 3)' subgroup of Lee_2022 (paper reports 5 populations: ir (n = 3), population mean, sr-1 (n = 3), sr-2 (n = 3), sr-3 (n = 3))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bakker_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Bakker_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-14-01226-t004:row1:col1 = 'V1'
- unparsed cell pharmaceutics-14-01226-t004:row2:col1 = 'V2'
- unparsed cell pharmaceutics-14-01226-t004:row7:col1 = 'AM50·in vivo'
- unparsed cell pharmaceutics-14-01226-t004:row9:col1 = 'Vmax·in vivo·SR-1'
- unparsed cell pharmaceutics-14-01226-t004:row10:col1 = 'Vmax·in vivo·SR-2'
- unparsed cell pharmaceutics-14-01226-t004:row11:col1 = 'Vmax·in vivo·SR-3'
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 2.73 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` | 9.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` |  | 9.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast]` | 7.27 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast]` |  | 7.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 11840.78 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 11840.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 1.62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 1.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` | 5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt (h) b]` | 9.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt (h) b]` |  | 9.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 7.37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 7.37 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 9291.73 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` |  | 9291.73 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | donepezil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | donepezil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Lee_2022_table_3:row5:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Lee_2022_table_3:row7:col3'] |
| C5_dimension_Q310 | fail | [mass] | mg | ['Lee_2022_table_3:row0:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Lee_2022_table_3:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bakker_2021:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Lee_2022_table_3:row8:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lee_2022_table_3:row1:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Lee_2022_table_3:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Lee_2022_table_3:row6:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Bakker_2021:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 710 L/h | ['Lee_2022_table_3:row7:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.29e+03 L | ['Lee_2022_table_3:row6:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Lee2022_sr_2&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Lee2022_sr_2%0APaper%3A%20Lee_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_donepezil/Donepezil_Lee2022_sr_2%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:30 UTC</sub>
