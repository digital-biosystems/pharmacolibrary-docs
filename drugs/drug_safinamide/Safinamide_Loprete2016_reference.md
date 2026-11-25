<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;safinamide&quot;,&quot;href&quot;:&quot;drugs/drug_safinamide/&quot;},{&quot;label&quot;:&quot;Loprete_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# safinamide — `Safinamide_Loprete2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C7 apparent-parameter coherence violated (double correction).

<div class="pk-model-meta" hidden drug="safinamide" model-id="Safinamide_Loprete2016_reference" status="rejected" stale="false" population="patients with Parkinson&#39;s disease" measured-compound="safinamide" parameterization="apparent" topology="1C"></div>

## Citation
Loprete L, Leuratti C, Cattaneo C, Thapar MM, Farrell C, Sardina M. Population pharmacokinetic and pharmacodynamic analyses of safinamide in subjects with Parkinson's disease. Pharmacology research & perspectives 4(5):e00251 (2016).
  ·  DOI: [10.1002/prp2.251](https://doi.org/10.1002/prp2.251)

## Population and dosing

**Population:** patients with Parkinson's disease · condition Parkinson's disease · age group adult.

**Dosing:** 50, 100 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 3.59 | L/h | 2.67 |
| Vd/F (L) | V/F | 120 | L | 4.38 |
| KA (h−1) | kabs | 0.582 | h−1 | 21.6 |
| F (STUD016) | Fab | 0.724 | STUD016 | 2.49 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C7 apparent-parameter coherence violated (double correction).**

A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — safinamide: CL/F 3.59 L/h, V/F 120 L, kabs 0.582 h−1, Fab 0.724 STUD016.

Independently confirmed by `gpt-oss-120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 3.59 | L/h | 9.972e-07 | m3/s | l/h | 2.67 | exact (1) | prp2251-tbl-0003:row2:col1 |
| Vd/F (L) | `Q76` · V/F | 120 | L | 0.12 | m3 | l | 4.38 | exact (1) | prp2251-tbl-0003:row3:col1 |
| KA (h−1) | `Q49` · kabs | 0.582 | h−1 | 0.0001617 | 1/s | 1/h | 21.6 | exact (1) | prp2251-tbl-0003:row4:col1 |
| F (STUD016) | `Q40` · Fab | 0.724 | STUD016 |  |  |  | 2.49 | exact (1) | prp2251-tbl-0003:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω 2 Vd' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ 2prop' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=safinamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 22 | 23.17 | 1.053 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['prp2251-tbl-0003:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['prp2251-tbl-0003:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['prp2251-tbl-0003:row3:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.724 with apparent parameterization |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.59 L/h |  |  | ['prp2251-tbl-0003:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 120 L |  |  | ['prp2251-tbl-0003:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsafinamide%5D%20Safinamide_Loprete2016_reference&body=Drug%3A%20safinamide%0ARecord%3A%20Safinamide_Loprete2016_reference%0APaper%3A%20Loprete_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_safinamide/Safinamide_Loprete2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:55 UTC</sub>
