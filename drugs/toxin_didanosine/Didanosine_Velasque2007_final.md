<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Didanosine&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/&quot;},{&quot;label&quot;:&quot;Velasque_2007 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Didanosine_Bruzzese1995_reference&quot;,&quot;label&quot;:&quot;Bruzzese_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/Didanosine_Bruzzese1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Pai1992_reference&quot;,&quot;label&quot;:&quot;Pai_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/Didanosine_Pai1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/Didanosine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Didanosine — `Didanosine_Velasque2007_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Didanosine's distribution volume V3 and absorption rate constant kabs are erroneously assigned L/h, conflicting with volume and 1/time dimensions and preventing SI conversion.

<div class="pk-model-meta" hidden drug="Didanosine" model-id="Didanosine_Velasque2007_final" status="rejected" stale="false" population="healthy adult volunteers" measured-compound="Didanosine" parameterization="mechanistic" topology="1C"></div>

## Citation
Velasque LS, Estrela RC, Suarez-Kurtz G, Struchiner CJ. A new model for the population pharmacokinetics of didanosine in healthy subjects. Brazilian journal of medical and biological research = Revista brasileira de pesquisas medicas e biologicas 40(1):97-104 (2007).
  ·  DOI: [10.1590/s0100-879x2007000100013](https://doi.org/10.1590/s0100-879x2007000100013)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult · n = 48.

**Dosing:** 200 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θCL (L/h) | CL | 55.10 | L/h |
| θQ (L/h) | Q | 40.90 | L/h |
| θV3 (L/h) | V3 | 62.70 | L/h |
| θKa (L/h) | kabs | 1.51 | L/h |
| θD (h) | equation variable | 0.44 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Didanosine's distribution volume V3 and absorption rate constant kabs are erroneously assigned L/h, conflicting with volume and 1/time dimensions and preventing SI conversion.**

The parameter V3, representing a volume of distribution, is recorded with the unit L/h rather than liters. Likewise, the absorption rate constant kabs is assigned L/h instead of inverse time. These dimensional inconsistencies caused the record to be rejected. The software could not convert these non-SI compatible units, leaving the parameters without valid metric values. Extracted — didanosine: CL 55.1 L/h, Q 40.9 L/h, V3 62.7 L/h, kabs 1.51 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θCL (L/h) | `Q22` · CL | 55.10 | L/h | 1.531e-05 | m3/s | l/h | llm_confirmed (0.6) | Velasque_2007_table_p5_1:row0:col3 |
| θQ (L/h) | `Q30` · Q | 40.90 | L/h | 1.136e-05 | m3/s | l/h | llm (0.6) | Velasque_2007_table_p5_1:row2:col3 |
| θV3 (L/h) | `Q77` · V3 | 62.70 | L/h | 1.742e-05 | m3/s | l/h | llm_confirmed (0.6) | Velasque_2007_table_p5_1:row3:col3 |
| θKa (L/h) | `Q49` · kabs | 1.51 | L/h |  |  | l/h | llm_confirmed (0.6) | Velasque_2007_table_p5_1:row4:col3 |
| θD (h) | `Q900` · equation variable | 0.44 | h |  |  | h | llm (0.6) | Velasque_2007_table_p5_1:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θV2 (L/h)' — extend the ontology if this is a real PK parameter (source ['Velasque_2007_table_p5_1:row1:col3'])
- unit_dimension_mismatch: 'θV3 (L/h)' → Q77 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'θKa (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q22 ('θCLCR-CL (L/h)', value '240.00') — already have one for this compound
- dropped duplicate Q77 ('θSex-V3 (L)', value '22.90') — already have one for this compound
- dropped duplicate Q22 ('θSex-CL (L/h)', value '16.6') — already have one for this compound
- dropped duplicate Q900 ('OF', value '5081.87') — already have one for this compound
- dropped value-less row: '95% CI'
- dropped value-less row: 'CL'
- dropped value-less row: 'V 2'
- dropped value-less row: 'Q'
- dropped value-less row: 'V 3'
- dropped value-less row: 'K a'
- dropped value-less row: 'D'
- dropped value-less row: 'CL CR'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θCL (L/h)); Q30 (θQ (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Didanosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- model-stage split: 'final model estimate' is the final model of Velasque_2007 (paper reports 4 stages: final model estimate, initial model estimate, trial no. 1, trial no. 2); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Velasque_2007_table_2: unknown_column_role
- companion parameter table 2 transcribed (48 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Velasque_2007_table_p5_1:row0:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Velasque_2007_table_p5_1:row2:col3'] |
| C5_dimension_Q49 | fail | 1 / [time] | L/h ([length] ** 3 / [time]) | ['Velasque_2007_table_p5_1:row4:col3'] |
| C5_dimension_Q77 | fail | [length] ** 3 | L/h ([length] ** 3 / [time]) | ['Velasque_2007_table_p5_1:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 55.1 | ['Velasque_2007_table_p5_1:row0:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 55.1 L/h | ['Velasque_2007_table_p5_1:row0:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdidanosine%5D%20Didanosine_Velasque2007_final&body=Drug%3A%20didanosine%0ARecord%3A%20Didanosine_Velasque2007_final%0APaper%3A%20Velasque_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_didanosine/Didanosine_Velasque2007_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 14:18 UTC</sub>
