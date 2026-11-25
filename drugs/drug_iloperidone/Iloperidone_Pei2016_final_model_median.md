<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;,&quot;href&quot;:&quot;drugs/drug_iloperidone/&quot;},{&quot;label&quot;:&quot;Pei_2016 \u00b7 final_model_median&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iloperidone — `Iloperidone_Pei2016_final_model_median`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="iloperidone" model-id="Iloperidone_Pei2016_final_model_median" status="rejected" stale="false" population="Chinese schizophrenia patients" measured-compound="iloperidone" parameterization="mechanistic" topology="1C"></div>

## Citation
Pei Q, Huang L, Huang J, Gu JK, Kuang Y, Zuo XC et al. Influences of CYP2D6. Acta pharmacologica Sinica 37(11):1499–1508 (2016).
  ·  DOI: [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96)

## Population and dosing

**Population:** Chinese schizophrenia patients · age group adult.

**Dosing:** 2, 12, 16, 20, 24 mg/d, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| K 20 (h -1 ) | ki0 | 0.068 | h -1 | 13.3 | 19.1 (34% RSE) |
| V 2 (L) | V2 | 668 | L | 13.4 | 35.0 (19% RSE) |
| K 23 (h -1 ) | kcomp | 0.00459 | h -1 | 27.7 | 19.3 (26% RSE) |
| cyp2d6_10_c_t_on_k_24 | cyp2d6_10_c_t_on_k_24 | 0.699 |  | 18.9 |  |
| cyp2d6_10_t_t_on_k_24 | cyp2d6_10_t_t_on_k_24 | 0.488 |  | 24.2 |  |
| theta_q315_cyp2d6 | theta_q315_cyp2d6 | 1.33 |  | 12.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — iloperidone: ki0 0.068 h -1, V2 668 L, kcomp 0.00459 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading iloperidone → m 1 (p-88) (metabolism); iloperidone → m 2 (p-95) (metabolism); it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K 20 (h -1 ) | `Q373` · ki0 | 0.068 | h -1 | 1.889e-05 | 1/s | 1/h | 13.3 | space_fold (0.95) | Pei_2016_table_3:row1:col4 | 19.1 (34% RSE) |
| V 2 (L) | `Q64` · V2 | 668 | L | 0.668 | m3 | l | 13.4 | space_fold (0.95) | Pei_2016_table_3:row4:col4 | 35.0 (19% RSE) |
| K 23 (h -1 ) | `Q48` · kcomp | 0.00459 | h -1 | 1.275e-06 | 1/s | 1/h | 27.7 | space_fold (0.95) | Pei_2016_table_3:row7:col4 | 19.3 (26% RSE) |
| cyp2d6_10_c_t_on_k_24 | `Q900` · cyp2d6_10_c_t_on_k_24 | 0.699 |  |  |  |  | 18.9 |  | Pei_2016_table_3:row9:col4 |  |
| cyp2d6_10_t_t_on_k_24 | `Q900` · cyp2d6_10_t_t_on_k_24 | 0.488 |  |  |  |  | 24.2 |  | Pei_2016_table_3:row10:col4 |  |
| theta_q315_cyp2d6 | `Q900` · theta_q315_cyp2d6 | 1.33 |  |  |  |  | 12.4 |  | Pei_2016_table_3:row11:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- dropped duplicate Q373 ('K 30 (h -1 )', value '0.161') — already have one for this compound
- dropped duplicate Q373 ('K 40 (h -1 )', value '0.108') — already have one for this compound
- dropped duplicate Q48 ('K 24 (h -1 )', value '0.00664') — already have one for this compound
- covariate level 'CYP2D6*10 C/T on K 24' → Q900:cyp2d6_10_c_t_on_k_24 = 0.699 (linear_fractional on the model)
- covariate level 'CYP2D6*10 T/T on K 24' → Q900:cyp2d6_10_t_t_on_k_24 = 0.488 (linear_fractional on the model)
- covariate effect for Q315 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iloperidone
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- pharmacogenetic covariate 'cyp2d6_10_c_t_on_k_24' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'cyp2d6_10_t_t_on_k_24' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q315_cyp2d6' (cyp2d6) — PGx domain
- population split: 'final model / median' subgroup of Pei_2016 (paper reports 2 populations: estimate, final model / median)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['iloperidone', 'm 1 (p-88)', 'metabolism'], ['iloperidone', 'm 2 (p-95)', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cyp2d6_10_c_t_on_k_24]` |  | 0.699 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_c_t_on_k_24]` | 0.699 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_23]` |  | 1.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_24]` |  | 0.488 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_24]` | 0.488 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 20]` |  | 0.068 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 20]` | 0.068 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` |  | 0.00459 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` | 0.00459 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 24]` |  | 0.00664 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 30]` |  | 0.161 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 40]` |  | 0.108 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q315_cyp2d6]` | 1.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` |  | 668 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` | 668 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['Pei_2016_table_3:row1:col4'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Pei_2016_table_3:row7:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Pei_2016_table_3:row4:col4'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 668 L | ['Pei_2016_table_3:row4:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biloperidone%5D%20Iloperidone_Pei2016_final_model_median&body=Drug%3A%20iloperidone%0ARecord%3A%20Iloperidone_Pei2016_final_model_median%0APaper%3A%20Pei_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iloperidone/Iloperidone_Pei2016_final_model_median%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:18 UTC</sub>
