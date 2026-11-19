<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;2-Phenoxyethanol&quot;,&quot;href&quot;:&quot;drugs/toxin_2_phenoxyethanol/&quot;},{&quot;label&quot;:&quot;Eckert_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_2Phenoxyethanol_Eckert2024_reference&quot;,&quot;label&quot;:&quot;Eckert_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_2_phenoxyethanol/D_2Phenoxyethanol_Eckert2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 2-Phenoxyethanol — `D_2Phenoxyethanol_Eckert2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The renal excretion rate for 2-phenoxyethanol uses mass-per-time units incompatible with its mass definition, and its fractional excretion unit could not be converted.

<div class="pk-model-meta" hidden drug="2-Phenoxyethanol" model-id="D_2Phenoxyethanol_Eckert2025_reference" status="rejected" stale="false" population="healthy adults" measured-compound="2-Phenoxyethanol" parameterization="mechanistic" topology="retention"></div>

## Citation
Eckert E, Jäger T, Leibold E, Bader M, Göen T, Hiller J. Dermal penetration of 2-phenoxyethanol in humans: in vivo metabolism and toxicokinetics. Archives of toxicology 99(3):1095–1103 (2025).
  ·  DOI: [10.1007/s00204-024-03938-5](https://doi.org/10.1007/s00204-024-03938-5)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 5.

**Dosing:** 28.7 mg, transdermal, single.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| cmax [µg/L] | Cmax | 11.7 | µg/L |
| tmax [h] | tmax | 1.6 | h |
| t1/2 [h] | t1/2z | 1.5 | h |
| RE,max [µg/h] | Ae | 8.1 | µg/h |
| FUE [24 h, %] | fe | 0.09 | 24 h, % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The renal excretion rate for 2-phenoxyethanol uses mass-per-time units incompatible with its mass definition, and its fractional excretion unit could not be converted.**

The parameter for amount excreted (Ae) is reported with units of mass per time (µg/h) but is defined as a cumulative mass, creating a dimensional conflict. The fractional excretion parameter (fe) is recorded with the unit '24 h, %', which could not be converted to a dimensionless fraction. This lack of convertible units prevented the model from being constructed. Extracted — 2 phenoxyethanol: Cmax 11.7 µg/L, tmax 1.6 h, t1/2z 1.5 h, Ae 8.1 µg/h, fe 0.09 24 h, %.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| cmax [µg/L] | `Q32` · Cmax | 11.7 | µg/L | 1.17e-05 | kg/m3 | µg/l | llm_confirmed (0.6) | Eckert_2025_table_2:row0:col1 |
| tmax [h] | `Q56` · tmax | 1.6 | h | 5760 | s | h | llm_confirmed (0.6) | Eckert_2025_table_2:row0:col2, Eckert_2025_table_3:row0:col2 |
| t1/2 [h] | `Q57` · t1/2z | 1.5 | h | 5400 | s | h | llm_confirmed (0.6) | Eckert_2025_table_2:row0:col3, Eckert_2025_table_3:row0:col3 |
| RE,max [µg/h] | `Q91` · Ae | 8.1 | µg/h |  |  | µg/h | llm (0.6) | Eckert_2025_table_3:row0:col1 |
| FUE [24 h, %] | `Q44` · fe | 0.09 | 24 h, % |  |  | 24h | llm (0.6) | Eckert_2025_table_3:row0:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'phe' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'RE,max [µg/h]' → Q91 (unit '[mass] / [time]' vs ontology '[mass]') — route to review
- unit_dimension_unknown: '24 h, %' (fe)
- dropped unlinked row (NIL): 'FUE [48 h, %]' — extend the ontology if this is a real PK parameter (source ['Eckert_2025_table_3:row0:col5'])
- dropped unlinked row (NIL): 'rel. analyte share [%]' — extend the ontology if this is a real PK parameter (source ['Eckert_2025_table_3:row0:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2-Phenoxyethanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: none of 1 PubChem candidate(s) is '2-Phenoxyethanol' (LLM) — left in mass units
- molar mass: none found for '2-Phenoxyethanol' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- transposed table Eckert_2025_table_2: logical view retains original source coordinates
- transposed table Eckert_2025_table_3: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Eckert_2025_table_2:row0:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Eckert_2025_table_2:row0:col2', 'Eckert_2025_table_3:row0:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Eckert_2025_table_2:row0:col3', 'Eckert_2025_table_3:row0:col3'] |
| C5_dimension_Q91 | fail | [mass] | µg/h ([mass] / [time]) | ['Eckert_2025_table_3:row0:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2_phenoxyethanol%5D%20D_2Phenoxyethanol_Eckert2025_reference&body=Drug%3A%202_phenoxyethanol%0ARecord%3A%20D_2Phenoxyethanol_Eckert2025_reference%0APaper%3A%20Eckert_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2_phenoxyethanol/D_2Phenoxyethanol_Eckert2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 18:51 UTC</sub>
