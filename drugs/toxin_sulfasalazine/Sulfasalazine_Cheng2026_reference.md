<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Sulfasalazine&quot;,&quot;href&quot;:&quot;drugs/toxin_sulfasalazine/&quot;},{&quot;label&quot;:&quot;Cheng_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfasalazine_Gotanda2016_reference&quot;,&quot;label&quot;:&quot;Gotanda_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sulfasalazine/Sulfasalazine_Gotanda2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sulfasalazine — `Sulfasalazine_Cheng2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Sulfasalazine" model-id="Sulfasalazine_Cheng2026_reference" status="rejected" stale="false" population="healthy adult volunteers (PBPK virtual population; luminal sampling in healthy subjects)" measured-compound="Sulfasalazine" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Cheng L, Cai J, Auster A, Cho S, Keir M, Rhee H et al. Translational Modeling of Gut Microbiome-Mediated Drug Metabolism: A Case Example of Sulfasalazine. CPT: pharmacometrics & systems pharmacology 15(4):e70246 (2026).
  ·  DOI: [10.1002/psp4.70246](https://doi.org/10.1002/psp4.70246)

## Population and dosing

**Population:** healthy adult volunteers (PBPK virtual population; luminal sampling in healthy subjects) · condition healthy · age group adult · n = 10 healthy subjects (bacterial counts in 9); clinical PK from literature studies (e.g. n=10, n=50).

**Dosing:** 250, 4000 mg, oral, single.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW, g/mol | MW | 153.14 | g/mol |
| f u,p | fu | 0.68 |  |
| B:P ratio | Kp | 0.55 |  |
| Clint, HLM μL/min/mg microsome | CLint | 18.145 |  |
| CLRenal, L/h | CLR | 0.50 | L/h |
| AzoR K m, μM | Km | 1000 | μM |
| AzoR V max, pmol/min/mg of luminal content | Vmax | 7061 |  |
| CLiv L/h | CL | 23 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has sulfasalazine → sulfapyridine (gut bacterial azoreductase metabolism (colon luminal)); sulfasalazine → mesalamine (gut bacterial azoreductase metabolism (colon luminal)); sulfapyridine → n-acetylsulfapyridine (nat2-mediated cytosolic acetylation), the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW, g/mol | `Q374` · MW | 153.14 | g/mol | 0.1531 |  | g/(m·ol) | exact (1) | psp470246-tbl-0001:row2:col1, psp470246-tbl-0001:row23:col1, psp470246-tbl-0001:row37:col1 |
| f u,p | `Q46` · fu | 0.68 |  | 0.68 |  |  | llm (0.6) | psp470246-tbl-0001:row5:col1, psp470246-tbl-0001:row26:col1, psp470246-tbl-0001:row40:col1 |
| B:P ratio | `Q410` · Kp | 0.55 |  |  |  |  | llm (0.6) | psp470246-tbl-0001:row6:col1, psp470246-tbl-0001:row27:col1, psp470246-tbl-0001:row41:col1 |
| Clint, HLM μL/min/mg microsome | `Q3` · CLint | 18.145 |  |  |  |  | llm_confirmed (0.6) | psp470246-tbl-0001:row13:col1 |
| CLRenal, L/h | `Q26` · CLR | 0.50 | L/h | 1.389e-07 | m3/s | l/h | llm (0.6) | psp470246-tbl-0001:row14:col1, psp470246-tbl-0001:row35:col1 |
| AzoR K m, μM | `Q1` · Km | 1000 | μM |  |  | µM | llm (0.6) | psp470246-tbl-0001:row17:col1 |
| AzoR V max, pmol/min/mg of luminal content | `Q66` · Vmax | 7061 |  |  |  |  | llm (0.6) | psp470246-tbl-0001:row18:col1 |
| CLiv L/h | `Q22` · CL | 23 | L/h | 6.389e-06 | m3/s | l/h | route_fold (0.9) | psp470246-tbl-0001:row48:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| BCRP J max, pmol/min/cm2 421 C/C(wt), 421 C/A, 421 A/A | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'MW, g/mol'; source reconciliation required
- table representations disagree for 'logP'; source reconciliation required
- table representations disagree for 'f u,p'; source reconciliation required
- table representations disagree for 'B:P ratio'; source reconciliation required
- table representations disagree for 'Clint, HLM μL/min/mg microsome'; source reconciliation required
- table representations disagree for 'CLRenal, L/h'; source reconciliation required
- column 'methods/references' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'CLBile, L/h 421 C/C(wt), 421A/C, 421 A/A'; source reconciliation required
- table representations disagree for 'AzoR K m, μM'; source reconciliation required
- table representations disagree for 'AzoR V max, pmol/min/mg of luminal content'; source reconciliation required
- table representations disagree for 'BCRP J max, pmol/min/cm2 421 C/C(wt), 421 C/A, 421 A/A'; source reconciliation required
- table representations disagree for 'BCRP K m, μM'; source reconciliation required
- table representations disagree for 'pK a'; source reconciliation required
- table representations disagree for 'Tissue Kp scalar'; source reconciliation required
- table representations disagree for 'Intrinsic Solubility, mg/mL'; source reconciliation required
- table representations disagree for 'CLiv L/h'; source reconciliation required
- dropped unlinked row (NIL): 'logP' — extend the ontology if this is a real PK parameter (source ['psp470246-tbl-0001:row3:col1', 'psp470246-tbl-0001:row24:col1', 'psp470246-tbl-0001:row38:col1'])
- dropped unlinked row (NIL): 'CLBile, L/h 421 C/C(wt), 421A/C, 421 A/A' — extend the ontology if this is a real PK parameter (source ['psp470246-tbl-0001:row15:col2'])
- unit_dimension_mismatch: 'AzoR K m, μM' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'BCRP K m, μM' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('BCRP K m, μM', value '11.60') — already have one for this compound
- dropped duplicate Q900 ('pK a', value '8.43') — already have one for this compound
- dropped duplicate Q410 ('Tissue Kp scalar', value '1.65') — already have one for this compound
- dropped unlinked row (NIL): 'Intrinsic Solubility, mg/mL' — extend the ontology if this is a real PK parameter (source ['psp470246-tbl-0001:row44:col1'])
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 333)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Sulfasalazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/15 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Sulfapyridine' — its concentrations stay mass-only
- molar mass: none found for 'Mesalamine' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)

**Extraction notes:**
- table psp470246-tbl-0001: unparsed_numeric_cell
- table psp470246-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['sulfasalazine', 'sulfapyridine', 'gut bacterial azoreductase metabolism (colon luminal)'], ['sulfasalazine', 'mesalamine', 'gut bacterial azoreductase metabolism (colon luminal)'], ['sulfapyridine', 'n-acetylsulfapyridine', 'nat2-mediated cytosolic acetylation']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[bcrp j max, pmol/min/cm2 421 c/c(wt), 421 c/a, 421 a/a]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clbile, l/h 421 c/c(wt), 421a/c, 421 a/a]` |  |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μM ([length]) | ['psp470246-tbl-0001:row17:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470246-tbl-0001:row48:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['psp470246-tbl-0001:row14:col1', 'psp470246-tbl-0001:row35:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['psp470246-tbl-0001:row2:col1', 'psp470246-tbl-0001:row23:col1', 'psp470246-tbl-0001:row37:col1'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] |  | ['psp470246-tbl-0001:row13:col1'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['psp470246-tbl-0001:row18:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 23 | ['psp470246-tbl-0001:row48:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23 L/h | ['psp470246-tbl-0001:row48:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfasalazine%5D%20Sulfasalazine_Cheng2026_reference&body=Drug%3A%20sulfasalazine%0ARecord%3A%20Sulfasalazine_Cheng2026_reference%0APaper%3A%20Cheng_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sulfasalazine/Sulfasalazine_Cheng2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 21:45 UTC</sub>
