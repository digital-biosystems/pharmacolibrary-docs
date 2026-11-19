<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Tardiveau_2022 \u00b7 bw_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_cow&quot;,&quot;label&quot;:&quot;Tardiveau_2022_cow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_goat&quot;,&quot;label&quot;:&quot;Tardiveau_2022_goat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_hemolymph&quot;,&quot;label&quot;:&quot;Uno_2002_hemolymph&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_hemolymph.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_muscle&quot;,&quot;label&quot;:&quot;Uno_2002_muscle&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_muscle.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxytetracycline — `Oxytetracycline_Tardiveau2022_bw_kg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q3 unit kg ([mass]) vs [length] ** 3 / [mass] / [time].

<div class="pk-model-meta" hidden drug="Oxytetracycline" model-id="Oxytetracycline_Tardiveau2022_bw_kg" status="rejected" stale="false" population="dairy cows and goats (lactating)" measured-compound="Oxytetracycline" parameterization="mechanistic" topology="retention"></div>

## Citation
Tardiveau J, LeRoux-Pullen L, Gehring R, Touchais G, Chotard-Soutif MP, Mirfendereski H et al. A physiologically based pharmacokinetic (PBPK) model exploring the blood-milk barrier in lactating species - A case study with oxytetracycline administered to dairy cows and goats. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 161:112848 (2022).
  ·  DOI: [10.1016/j.fct.2022.112848](https://doi.org/10.1016/j.fct.2022.112848)

## Population and dosing

**Population:** dairy cows and goats (lactating) · condition healthy lactating · age group adult.

**Dosed compound ≠ measured compound:** dosed Oxytetracycline hydrochloride, measured Oxytetracycline.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Calibration (estimation of kIM)1 | CLint | 568 | kg |
| elimination half-life in milk | t1/2z | 7.9 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q3 unit kg ([mass]) vs [length] ** 3 / [mass] / [time].**

A reported unit could not be converted (CLint), so that value has no SI equivalent. Extracted — oxytetracycline: CLint 568 kg, t1/2z 7.9 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Oxytetracycline hydrochloride, the second reading oxytetracycline; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Calibration (estimation of kIM)1 | `Q3` · CLint | 568 | kg |  |  | kg | llm (0.6) | Tardiveau_2022_table_2:row0:col5 |
| elimination half-life in milk | `Q57` · t1/2z | 7.9 | h | 2.844e+04 | s | h | toxin_unit_relink (0.85) | Tardiveau_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bw (kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Calibration (estimation of kIM)1' → Q3 (unit '[mass]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Internal evaluation1' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_2:row1:col5'])
- dropped unlinked row (NIL): 'External evaluation2' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_2:row2:col5'])
- dropped unlinked row (NIL): 'External evaluation3' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_2:row3:col5', 'Tardiveau_2022_table_2:row4:col5', 'Tardiveau_2022_table_2:row5:col5'])
- dropped unlinked row (NIL): 'External evaluation4' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_2:row6:col5', 'Tardiveau_2022_table_2:row7:col5'])
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('elimination half-life in milk'=7.9) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Oxytetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'bw (kg)' subgroup of Tardiveau_2022 (paper reports 3 populations: bw (kg), cow, goat)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tardiveau_2022_table_2: unparsed_numeric_cell
- table Tardiveau_2022_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (54 record(s))
- LLM selected parameter table(s) 1
- LLM region Tardiveau_2022:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[calibration (estimation of kim)1]` | 568 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life in milk]` | 7.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  | 7.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[external evaluation4]` |  | 56 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Oxytetracycline hydrochloride | oxytetracycline | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | kg ([mass]) | ['Tardiveau_2022_table_2:row0:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxytetracycline%5D%20Oxytetracycline_Tardiveau2022_bw_kg&body=Drug%3A%20oxytetracycline%0ARecord%3A%20Oxytetracycline_Tardiveau2022_bw_kg%0APaper%3A%20Tardiveau_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_bw_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:52 UTC</sub>
