<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Hannam_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_RodriguezCruz2021_reference&quot;,&quot;label&quot;:&quot;Rodriguez-Cruz_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_RodriguezCruz2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Standing2008_reference&quot;,&quot;label&quot;:&quot;Standing_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Standing2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Perez_1995_relaxation&quot;,&quot;label&quot;:&quot;Perez_1995 \u00b7 relaxation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Perez_1995_relaxation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Hannam2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-11-07 14:42 UTC (Rejected), but the paper was screened again on 2026-11-03 22:55 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. A phantom acetaminophen metabolite link created an orphan compartment, while a clearance unit mismatch prevented SI conversion.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Hannam2014_reference" status="rejected" stale="true" population="children undergoing tonsillectomy" measured-compound="diclofenac" parameterization="apparent" topology="general_linear"></div>

## Citation
Hannam JA, Anderson BJ, Mahadevan M, Holford NH. Postoperative analgesia using diclofenac and acetaminophen in children. Paediatric anaesthesia 24(9):953–961 (2014).
  ·  DOI: [10.1111/pan.12422](https://doi.org/10.1111/pan.12422)

## Population and dosing

**Population:** children undergoing tonsillectomy · condition postoperative pain · age group child.

**Dosing:** 70 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T 1/2 keq A (h) | t1/2z | 0.496 | h |
| T 1/2 kel PL (h) | kel | 2.94 | h |
| CL A /F (lÁh À1 Á70 kg À1 ) | CL | 10.6 | L/h/70kg |
| V A /F (lÁ70 kg À1 ) | V/F | 62.3 | L/70kg |
| CL D /F (lÁh À1 Á70 kg À1 ) | Q/F | 53.5 | L/h/70kg |
| k a (h À1 ) | kabs | 0.94 | h À1 |
| Lag time 1 | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**A phantom acetaminophen metabolite link created an orphan compartment, while a clearance unit mismatch prevented SI conversion.**

The record defines an interconversion from diclofenac to acetaminophen, a molecule not part of diclofenac pharmacokinetics, leaving the metabolite compartment unreachable. Clearance parameters were reported in units of liters per hour per 70 kilograms, which could not be converted to SI standards. A second reader found no such metabolite link and identified specific elimination rate constants missing from the extracted record. Extracted — diclofenac: t1/2z 0.496 h, kel 2.94 h, CL 10.6 L/h/70kg, V/F 62.3 L/70kg, Q/F 53.5 L/h/70kg, kabs 0.94 h À1, tlag 0 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has diclofenac → acetaminophen (interconversion), the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T 1/2 keq A (h) | `Q57` · t1/2z | 0.496 | h | 1786 | s | h | llm (0.6) | tab_1:row4:col1, tab_1:row4:col2 |
| T 1/2 kel PL (h) | `Q47` · kel | 2.94 | h |  |  | h | llm_confirmed (0.6) | tab_1:row10:col1, tab_1:row10:col2 |
| CL A /F (lÁh À1 Á70 kg À1 ) | `Q22` · CL | 10.6 | L/h/70kg | 2.944e-06 | m3/s | L/h | boundary (0.8) | Hannam_2014:discussion_prose |
| V A /F (lÁ70 kg À1 ) | `Q76` · V/F | 62.3 | L/70kg | 0.0623 | m3 | L | space_fold (0.95) | Hannam_2014:discussion_prose |
| CL D /F (lÁh À1 Á70 kg À1 ) | `Q69` · Q/F | 53.5 | L/h/70kg | 1.486e-05 | m3/s | L/h | space_fold (0.95) | Hannam_2014:discussion_prose |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h | review_gapfill (0.7) | Kim_2016:review |
| Lag time 1 | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Idkaidek_1998:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'E 0 (VAS 0-10)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row2:col1', 'tab_1:row2:col2'])
- dropped PD-category row 'E MAX (VAS 0-10)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row3:col1', 'tab_1:row3:col2'])
- dropped unlinked row (NIL): 'C 50,A (mgÁl À1 )' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col1', 'tab_1:row5:col2'])
- dropped PD-category row 'T 1/2 keq D (h)' → Q337 (ktol, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row6:col1', 'tab_1:row6:col2'])
- dropped PD-category row 'C 50,D (mgÁl À1 )' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row7:col1', 'tab_1:row7:col2'])
- dropped PD-category row 'T 1/2 keq PL (h)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row9:col1', 'tab_1:row9:col2'])
- unit_dimension_mismatch: 'T 1/2 kel PL (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'BETA PL (VAS 0-10)' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col1', 'tab_1:row11:col2'])
- dropped duplicate Q47 ('k (h À1 )', value '0.0152') — already have one for this compound
- dropped unlinked row (NIL): 'b (VAS À1 )' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col1', 'tab_1:row14:col2'])
- routed 'Err additive (VAS 0-10)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- salvaged Q22 ('CL A /F (lÁh À1 Á70 kg À1 )'=10.6) from results prose — parameter table was unreadable
- salvaged Q76 ('V A /F (lÁ70 kg À1 )'=62.3) from results prose — parameter table was unreadable
- salvaged Q69 ('CL D /F (lÁh À1 Á70 kg À1 )'=53.5) from results prose — parameter table was unreadable
- implicit units: 'CL A /F (lÁh À1 Á70 kg À1 )' → L/h/70kg (from the popPK convention: 'The parameter represents clearance (CL/F). In population pharmacokinetic studies, clearance is conventionally expressed ')
- implicit units: 'V A /F (lÁ70 kg À1 )' → L/70kg (from the popPK convention: 'The parameter represents volume of distribution (V/F). In population pharmacokinetics, volume is conventionally expresse')
- implicit units: 'CL D /F (lÁh À1 Á70 kg À1 )' → L/h/70kg (from the popPK convention: "The parameter is labeled 'CL D /F' and described as an apparent intercompartmental clearance or related elimination/clea")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from Idkaidek_1998's review values (primary lacked it)

**Extraction notes:**
- table tab_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['diclofenac', 'acetaminophen', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[beta pl]` |  | 1.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  | 0.0152 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 kel pl]` | 2.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 keq pl]` |  | 2.65 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hannam_2014:discussion_prose'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['tab_1:row10:col1', 'tab_1:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Hannam_2014:discussion_prose'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Hannam_2014:discussion_prose'] |
| C5_dimension_Q83 | pass | [time] |  | ['Idkaidek_1998:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.6 L/h | ['Hannam_2014:discussion_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 62.3 L | ['Hannam_2014:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Hannam2014_reference&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Hannam2014_reference%0APaper%3A%20Hannam_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Hannam2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 22:55 UTC</sub>
