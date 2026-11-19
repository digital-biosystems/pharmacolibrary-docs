<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Aflatoxin M1&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_m1/&quot;},{&quot;label&quot;:&quot;Guo_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aflatoxin M1 — `AflatoxinM1_Guo2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng mL−1 ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Aflatoxin M1" model-id="AflatoxinM1_Guo2021_reference" status="rejected" stale="false" population="dairy cows" measured-compound="Aflatoxin M1" parameterization="mechanistic" topology="retention"></div>

## Citation
Guo W, Fan Z, Fan K, Meng J, Nie D, Tangni EK et al. In Vivo Kinetics and Biotransformation of Aflatoxin B1 in Dairy Cows Based on the Establishment of a Reliable UHPLC-MS/MS Method. Frontiers in chemistry 9:809480 (2021).
  ·  DOI: [10.3389/fchem.2021.809480](https://doi.org/10.3389/fchem.2021.809480)

## Population and dosing

**Population:** dairy cows · condition dietary exposure (AFB1-contaminated diet) · age group adult · n = 3.

**Dosed compound ≠ measured compound:** dosed Aflatoxin B1, measured Aflatoxin M1.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (0–t) | AUC | 1763.3 |  |
| MRT (0–t) | MRT | 703.5 |  |
| T1/2 | t1/2z | 931.1 | min |
| C0 | C0 | 0 | ng mL−1 |
| Cmax | Cmax | 3.8 | ng mL−1 |
| Tmax | tmax | 35.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng mL−1 ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (C0), so that value has no SI equivalent. Extracted — aflatoxin m1: AUC 1.76e+03, MRT 704, t1/2z 931 min, C0 0 ng mL−1, Cmax 3.8 ng mL−1, tmax 35 min.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Aflatoxin B1, the second reading AFB1; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (0–t) | `Q88` · AUC | 1763.3 |  |  |  |  | exact (1) | T2:row1:col2 |
| MRT (0–t) | `Q53` · MRT | 703.5 |  |  |  |  | exact (1) | T2:row3:col2 |
| T1/2 | `Q57` · t1/2z | 931.1 | min | 5.587e+04 | s | min | half_life_rule (0.95) | T2:row5:col2 |
| C0 | `Q86` · C0 | 0 | ng mL−1 |  |  | ng/ml | exact (1) | T2:row6:col2 |
| Cmax | `Q32` · Cmax | 3.8 | ng mL−1 | 3.8e-06 | kg/m3 | ng/ml | exact (1) | T2:row7:col2 |
| Tmax | `Q56` · tmax | 35.0 | min | 2100 | s | min | exact (1) | T2:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mean ± sd' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- conflicting source units for 'AUC (0–t)': [{'unit': 'ng min mL−1·', 'source': 'T2:row1:col1', 'scope': 'unit_column'}, {'unit': '0–t', 'source': 'T2:row1:col0', 'scope': 'label'}]
- conflicting source units for 'MRT (0–t)': [{'unit': 'min', 'source': 'T2:row3:col1', 'scope': 'unit_column'}, {'unit': '0–t', 'source': 'T2:row3:col0', 'scope': 'label'}]
- dropped duplicate Q88 ('AUC (0–∞)', value '2162.7') — already have one for this compound
- dropped duplicate Q53 ('MRT (0–∞)', value '1220.7') — already have one for this compound
- unit_dimension_mismatch: 'C0' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 40 (source ['T2:footnote']); the table cell was unparseable — needs review
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 390)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Aflatoxin M1
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table T2: conflicting_units
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc]` |  | 1763.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 1763.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[c0]` |  | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c0]` | 0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` |  | 3.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 3.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` |  | 703.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 703.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` |  | 931.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 931.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` |  | 35.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 35.0 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Aflatoxin B1 | AFB1 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Aflatoxin M1 | AFM1 | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T2:row7:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['T2:row8:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row5:col2'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng mL−1 ([mass] / [length] ** 3) | ['T2:row6:col2'] |
| C5_unit_missing_Q53 | fail | [time] |  | ['T2:row3:col2'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['T2:row1:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflatoxin_m1%5D%20AflatoxinM1_Guo2021_reference&body=Drug%3A%20aflatoxin_m1%0ARecord%3A%20AflatoxinM1_Guo2021_reference%0APaper%3A%20Guo_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aflatoxin_m1/AflatoxinM1_Guo2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:30 UTC</sub>
