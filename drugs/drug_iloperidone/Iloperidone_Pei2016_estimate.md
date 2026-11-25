<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;,&quot;href&quot;:&quot;drugs/drug_iloperidone/&quot;},{&quot;label&quot;:&quot;Pei_2016 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iloperidone — `Iloperidone_Pei2016_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="iloperidone" model-id="Iloperidone_Pei2016_estimate" status="rejected" stale="false" population="Chinese schizophrenia patients" measured-compound="iloperidone" parameterization="mechanistic" topology="2C"></div>

## Citation
Pei Q, Huang L, Huang J, Gu JK, Kuang Y, Zuo XC et al. Influences of CYP2D6. Acta pharmacologica Sinica 37(11):1499–1508 (2016).
  ·  DOI: [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96)

## Population and dosing

**Population:** Chinese schizophrenia patients · age group adult.

**Dosing:** 2, 12, 16, 20, 24 mg/d, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| K a (h -1 ) | kabs | 2.26 | h -1 |  |
| K 20 (h -1 ) | ki0 | 0.067 | h -1 | 19.5 (None% RSE) |
| V 2 (L) | V2 | 679 | L | 35.8 (None% RSE) |
| V 3 (L) | V3 | 10 | L |  |
| V 4 (L) | V | 10 | L |  |
| K 23 (h -1 ) | kcomp | 0.00451 | h -1 | 19.6 (None% RSE) |
| cyp2d6_10_c_t_on_k_24 | cyp2d6_10_c_t_on_k_24 | 0.693 |  |  |
| theta_q361_cyp2d6 | theta_q361_cyp2d6 | 0.492 |  |  |
| theta_q31_cyp2d6 | theta_q31_cyp2d6 | 1.34 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — iloperidone: kabs 2.26 h -1, ki0 0.067 h -1, V2 679 L, V3 10 L, V 10 L, kcomp 0.00451 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading iloperidone → m1 (p-88) (metabolism); iloperidone → m2 (p-95) (metabolism); it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| K a (h -1 ) | `Q49` · kabs | 2.26 | h -1 | 0.0006278 | 1/s | 1/h | space_fold (0.95) | Pei_2016_table_3:row0:col1 |  |
| K 20 (h -1 ) | `Q373` · ki0 | 0.067 | h -1 | 1.861e-05 | 1/s | 1/h | space_fold (0.95) | Pei_2016_table_3:row1:col1 | 19.5 (None% RSE) |
| V 2 (L) | `Q64` · V2 | 679 | L | 0.679 | m3 | l | space_fold (0.95) | Pei_2016_table_3:row4:col1 | 35.8 (None% RSE) |
| V 3 (L) | `Q77` · V3 | 10 | L | 0.01 | m3 | l | space_fold (0.95) | Pei_2016_table_3:row5:col1 |  |
| V 4 (L) | `Q61` · V | 10 | L | 0.01 | m3 | l | llm (0.6) | Pei_2016_table_3:row6:col1 |  |
| K 23 (h -1 ) | `Q48` · kcomp | 0.00451 | h -1 | 1.253e-06 | 1/s | 1/h | space_fold (0.95) | Pei_2016_table_3:row7:col1 | 19.6 (None% RSE) |
| cyp2d6_10_c_t_on_k_24 | `Q900` · cyp2d6_10_c_t_on_k_24 | 0.693 |  |  |  |  |  | Pei_2016_table_3:row9:col1 |  |
| theta_q361_cyp2d6 | `Q900` · theta_q361_cyp2d6 | 0.492 |  |  |  |  |  | Pei_2016_table_3:row10:col1 |  |
| theta_q31_cyp2d6 | `Q900` · theta_q31_cyp2d6 | 1.34 |  |  |  |  |  | Pei_2016_table_3:row11:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'K 20 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V 2 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 23 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 24 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iov: 'K 20' routed out of structural estimates ('Inter-occasion variability')
- table section residual_error: 'CV 1 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 2 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 3 (%)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q373 ('K 30 (h -1 )', value '0.160') — already have one for this compound
- dropped duplicate Q373 ('K 40 (h -1 )', value '0.106') — already have one for this compound
- dropped duplicate Q48 ('K 24 (h -1 )', value '0.00649') — already have one for this compound
- covariate level 'CYP2D6*10 C/T on K 24' → Q900:cyp2d6_10_c_t_on_k_24 = 0.693 (linear_fractional on the model)
- covariate effect for Q361 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (V 2 (L)); Q61 (V 4 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iloperidone
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- pharmacogenetic covariate 'cyp2d6_10_c_t_on_k_24' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q361_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q31_cyp2d6' (cyp2d6) — PGx domain
- population split: 'estimate' subgroup of Pei_2016 (paper reports 2 populations: estimate, final model / median)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['iloperidone', 'm1 (p-88)', 'metabolism'], ['iloperidone', 'm2 (p-95)', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cyp2d6_10_c_t_on_k_24]` |  | 0.693 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_c_t_on_k_24]` | 0.693 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_23]` |  | 1.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_24]` |  | 0.492 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 20]` |  | 0.067 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 20]` | 0.067 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` |  | 0.00451 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` | 0.00451 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 24]` |  | 0.00649 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 30]` |  | 0.160 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 40]` |  | 0.106 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` |  | 2.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 2.26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_cyp2d6]` | 1.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q361_cyp2d6]` | 0.492 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` |  | 679 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` | 679 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3]` |  | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3]` | 10 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 4]` |  | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 4]` | 10 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['Pei_2016_table_3:row1:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Pei_2016_table_3:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Pei_2016_table_3:row0:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Pei_2016_table_3:row6:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Pei_2016_table_3:row4:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Pei_2016_table_3:row5:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 10 L | ['Pei_2016_table_3:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 679 L | ['Pei_2016_table_3:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biloperidone%5D%20Iloperidone_Pei2016_estimate&body=Drug%3A%20iloperidone%0ARecord%3A%20Iloperidone_Pei2016_estimate%0APaper%3A%20Pei_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iloperidone/Iloperidone_Pei2016_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:18 UTC</sub>
