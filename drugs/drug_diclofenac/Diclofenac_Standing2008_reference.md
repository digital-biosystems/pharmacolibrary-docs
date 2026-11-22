<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Standing_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Lucas2016_reference&quot;,&quot;label&quot;:&quot;Lucas_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Lucas2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Idkaidek1998_sustained&quot;,&quot;label&quot;:&quot;Idkaidek_1998_sustained&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Standing2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected due to an unreachable compartment in the diclofenac model structure.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Standing2008_reference" status="rejected" stale="false" population="children and adults with acute pain" measured-compound="diclofenac" parameterization="apparent" topology="1C"></div>

## Citation
Standing JF, Howard RF, Johnson A, Savage I, Wong IC. Population pharmacokinetics of oral diclofenac for acute pain in children. British journal of clinical pharmacology 66(6):846–853 (2008).
  ·  DOI: [10.1111/j.1365-2125.2008.03289.x](https://doi.org/10.1111/j.1365-2125.2008.03289.x)

## Population and dosing

**Population:** children and adults with acute pain · condition acute pain · age group mixed.

**Dosing:** 1, 50 mg/kg, mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| MTT1 (h) | MTT | 0.68 | h | 11.8 | 82 (149% RSE) |
| F1 | Fab | 0.70 |  | 7.6 | 24 (19.9% RSE) |
| t1/2A1 (h) | t1/2z | 0.09 | h | 50.1 | 31 (58.8% RSE) |
| Vp/F (l 70 kg⁻¹) | V2/F | 4.84 | l 70 kg⁻¹ | 86.2 | 54 (254% RSE) |
| CL/F (l h⁻¹ 70 kg⁻¹) | CL/F | 53.98 | l h⁻¹ 70 kg⁻¹ | 4.8 | 26 (18.2% RSE) |
| V d /f | V/F | 40.7 | L |  |  |
| k a (h À1 ) | kabs | 0.94 | h À1 |  |  |
| Lag time 1 | tlag | 0.0 | h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected due to an unreachable compartment in the diclofenac model structure.**

The model structure contained an unreachable or orphan compartment, meaning no path exists from the dose to that part of the model. Although a second reader disagreed on the terminal half-life assignment and suggested a value of 1.06, the primary defect remained the structural integrity issue. Extracted — diclofenac: MTT 0.68 h, Fab 0.7, t1/2z 0.09 h, V2/F 4.84 l 70 kg⁻¹, CL/F 54 l h⁻¹ 70 kg⁻¹, V/F 40.7 L, kabs 0.94 h À1, tlag 0 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[t1/2a1].parameter_id`: this record has Q57, the second reading Q59; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MTT1 (h) | `Q81` · MTT | 0.68 | h | 2448 | s | h | 11.8 | llm (0.6) | Standing_2008_table_p6_1:row1:col1 | 82 (149% RSE) |
| F1 | `Q40` · Fab | 0.70 |  | 0.7 |  |  | 7.6 | exact (1) | Standing_2008_table_p6_1:row3:col1 | 24 (19.9% RSE) |
| t1/2A1 (h) | `Q57` · t1/2z | 0.09 | h | 324 | s | h | 50.1 | llm (0.6) | Standing_2008_table_p6_1:row4:col1 | 31 (58.8% RSE) |
| Vp/F (l 70 kg⁻¹) | `Q82` · V2/F | 4.84 | l 70 kg⁻¹ | 0.00484 | m3 | l/70kg | 86.2 | exact (1) | Standing_2008_table_p6_1:row8:col1 | 54 (254% RSE) |
| CL/F (l h⁻¹ 70 kg⁻¹) | `Q27` · CL/F | 53.98 | l h⁻¹ 70 kg⁻¹ | 1.499e-05 | m3/s | l/(h·70kg) | 4.8 | exact (1) | Standing_2008_table_p6_1:row9:col1 | 26 (18.2% RSE) |
| V d /f | `Q76` · V/F | 40.7 | L | 0.0407 | m3 | L |  | review_gapfill (0.7) | Idkaidek_1998:review |  |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h |  | review_gapfill (0.7) | Kim_2016:review |  |
| Lag time 1 | `Q83` · tlag | 0.0 | h | 0 | s | h |  | review_gapfill (0.7) | Idkaidek_1998:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'MTT1 (h)' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 'N1' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 'F1' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 't1/2A1 (h)' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 'MTT2 (h)' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 'N2' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 't1/2A2 (h)' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iiv: 'Vp/F (l 70 kg⁻¹)' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iov: 'Vp/F (l 70 kg⁻¹)' routed out of structural estimates ('Random effects (η) / Between occasion variability (%) (RSE)')
- table section iiv: 'CL/F (l h⁻¹ 70 kg⁻¹)' routed out of structural estimates ('Random effects (η) / Inter-individual variability (%) (RSE)')
- table section iov: 'CL/F (l h⁻¹ 70 kg⁻¹)' routed out of structural estimates ('Random effects (η) / Between occasion variability (%) (RSE)')
- table section residual_error: 'Adult data' routed out of structural estimates ('Residual variability (ε) (%)')
- table section residual_error: 'Paediatric data' routed out of structural estimates ('Residual variability (ε) (%)')
- dropped unlinked row (NIL): 'N1' — extend the ontology if this is a real PK parameter (source ['Standing_2008_table_p6_1:row2:col1'])
- dropped duplicate Q81 ('MTT2 (h)', value '1.37') — already have one for this compound
- dropped unlinked row (NIL): 'N2' — extend the ontology if this is a real PK parameter (source ['Standing_2008_table_p6_1:row6:col1'])
- dropped unlinked row (NIL): 't1/2A2 (h)' — extend the ontology if this is a real PK parameter (source ['Standing_2008_table_p6_1:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=diclofenac
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q76 (V/F) from Idkaidek_1998's review values (primary lacked it)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from Idkaidek_1998's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1/2a1].parameter_id` | Q57 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2a2]` |  | 1.06 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Standing_2008_table_p6_1:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Standing_2008_table_p6_1:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Idkaidek_1998:review'] |
| C5_dimension_Q81 | pass | [time] |  | ['Standing_2008_table_p6_1:row1:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Standing_2008_table_p6_1:row8:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Idkaidek_1998:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 54 L/h | ['Standing_2008_table_p6_1:row9:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 40.7 L | ['Idkaidek_1998:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.84 L | ['Standing_2008_table_p6_1:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Standing2008_reference&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Standing2008_reference%0APaper%3A%20Standing_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Standing2008_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:01 UTC</sub>
