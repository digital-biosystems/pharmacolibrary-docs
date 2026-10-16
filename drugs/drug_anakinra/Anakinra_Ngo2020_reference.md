<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anakinra&quot;,&quot;href&quot;:&quot;drugs/drug_anakinra/&quot;},{&quot;label&quot;:&quot;Ngo_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Anakinra_Urien2013_reference&quot;,&quot;label&quot;:&quot;Urien_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anakinra/Anakinra_Urien2013_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# anakinra — `Anakinra_Ngo2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (λ2, kon and Kp), so that value has no SI equivalent. Extracted — anakinra: kabs 1.21 1/h, λ2 0.0171 1/h, kon 0.0338 1/h, CL/F 0.208 L/h, V1/F 11.3 L, Q/F 0.0288 L/h, V2/F 5.06 L, Kp 0.00952 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q1: this record has 0.00952, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Ngo L et al., Development of a Pharmacokinetic Model…, CPT: pharmacometrics & syst… (2020)
  ·  DOI: [10.1002/psp4.12555](https://doi.org/10.1002/psp4.12555)

<div class="pk-model-meta" hidden drug="anakinra" model-id="Anakinra_Ngo2020_reference" status="rejected" stale="false" population="healthy adults" measured-compound="HL2351, anakinra" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka1 (1/h) | `Q49` · kabs | 1.21 | 1/h | 0.0003361111111111111 | [1] / [h] | 28.9 | llm (0.6) | Ngo_2020_table_p5_1:row0:col2 | — | not captured |
| Ka2 (1/h) | `Q68` · λ2 | 0.0171 | 1/h | not captured | [1] / [h] | 38.3 | llm (0.6) | Ngo_2020_table_p5_1:row3:col2 | — | not captured |
| Krec (1/h) | `Q329` · kon | 0.0338 | 1/h | not captured | [1] / [h] | 50.6 | llm (0.6) | Ngo_2020_table_p5_1:row4:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 0.208 | L/h | 5.7777777777777775e-08 | [l] / [h] | 36.9 | exact (1.0) | Ngo_2020_table_p5_1:row6:col2 | — | 22.9 (65.4% RSE) |
| Vc/F (L) | `Q290` · V1/F | 11.3 | L | 0.011300000000000001 | [l] | 24.2 | exact (1.0) | Ngo_2020_table_p5_1:row7:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 0.0288 | L/h | 7.999999999999999e-09 | [l] / [h] | 33.6 | exact (1.0) | Ngo_2020_table_p5_1:row8:col2 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 5.06 | L | 0.005059999999999999 | [l] | not captured | exact (1.0) | Ngo_2020_table_p5_1:row9:col2 | — | not captured |
| Kup (1/h) | `Q410` · Kp | 0.00952 | 1/h | not captured | [1] / [h] | not captured | llm (0.6) | Ngo_2020_table_p5_1:row13:col2 | — | not captured |
| A lag (h) | `Q83` · tlag | 0.312 | h | 1123.2 | [h] | 27.9 | space_fold (0.95) | Ngo_2020_table_p5_1:row14:col2 | — | 55.5 (69.5% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ka1' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Ka2' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Krec' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Kdeg1' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Kup' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'A lag' routed out of structural estimates ('Interindividual variability (%)')
- table section residual_error: 'Additive (nmol/L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (%)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'AKSS1 (nmol)' — extend the ontology if this is a real PK parameter (source ['Ngo_2020_table_p5_1:row1:col2'])
- dropped unlinked row (NIL): 'AFCRN1 (nmol)' — extend the ontology if this is a real PK parameter (source ['Ngo_2020_table_p5_1:row2:col2'])
- unit_dimension_mismatch: 'Ka2 (1/h)' → Q68 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Krec (1/h)' → Q329 (unit '1 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Kdeg1 (1/h)' — extend the ontology if this is a real PK parameter (source ['Ngo_2020_table_p5_1:row5:col2'])
- dropped unlinked row (NIL): 'Kdeg2 (1/h)' — extend the ontology if this is a real PK parameter (source ['Ngo_2020_table_p5_1:row10:col2'])
- dropped unlinked row (NIL): 'CIL1R1 (nmol/L)' — extend the ontology if this is a real PK parameter (source ['Ngo_2020_table_p5_1:row11:col2'])
- dropped unlinked row (NIL): 'KSS2 (nmol/L)' — extend the ontology if this is a real PK parameter (source ['Ngo_2020_table_p5_1:row12:col2'])
- unit_dimension_mismatch: 'Kup (1/h)' → Q410 (unit '1 / [time]' vs ontology 'dimensionless') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=HL2351, anakinra
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'HL2351, anakinra' ('HL2351, anakinra') — left in mass units
- molar mass: none found for 'anakinra' — its concentrations stay mass-only
- molar mass: none found for 'HL2351, anakinra' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q1]` | 0.00952 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q34]` | not captured | 14.5 | only_one_extracted |
| `gpt-oss-120b` | `values[Q51]` | not captured | 0.0264 | only_one_extracted |
| `gpt-oss-120b` | `values[Q68]` | 0.0171 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q75]` | not captured | 2.23 | only_one_extracted |
| `gpt-oss-120b` | `values[Q900]` | 2.23 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ngo_2020_table_p5_1:row6:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ngo_2020_table_p5_1:row7:col2'] |
| C5_dimension_Q329 | fail | 1 / [time] | 1/h | not captured | not captured | ['Ngo_2020_table_p5_1:row4:col2'] |
| C5_dimension_Q410 | fail | 1 / [time] | 1/h | not captured | not captured | ['Ngo_2020_table_p5_1:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ngo_2020_table_p5_1:row0:col2'] |
| C5_dimension_Q68 | fail | 1 / [time] | 1/h | not captured | not captured | ['Ngo_2020_table_p5_1:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ngo_2020_table_p5_1:row8:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ngo_2020_table_p5_1:row9:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Ngo_2020_table_p5_1:row14:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.208 L/h | not captured | not captured | ['Ngo_2020_table_p5_1:row6:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 11.3 L | not captured | not captured | ['Ngo_2020_table_p5_1:row7:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.06 L | not captured | not captured | ['Ngo_2020_table_p5_1:row9:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_anakinra/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ngo_2020` / `Ngo_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:26 UTC</sub>
