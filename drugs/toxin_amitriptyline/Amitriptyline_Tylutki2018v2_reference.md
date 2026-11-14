<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amitriptyline&quot;,&quot;href&quot;:&quot;drugs/toxin_amitriptyline/&quot;},{&quot;label&quot;:&quot;Tylutki_2018_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Amitriptyline — `Amitriptyline_Tylutki2018v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Amitriptyline" model-id="Amitriptyline_Tylutki2018v2_reference" status="rejected" stale="false" population="healthy or depressed adults (Caucasian); intoxication cases" measured-compound="Amitriptyline" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Tylutki Z, Mendyk A, Polak S. Physiologically based pharmacokinetic-quantitative systems toxicology and safety (PBPK-QSTS) modeling approach applied to predict the variability of amitriptyline pharmacokinetics and cardiac safety in populations and in individuals. Journal of pharmacokinetics and pharmacodynamics 45(5):663–677 (2018).
  ·  DOI: [10.1007/s10928-018-9597-6](https://doi.org/10.1007/s10928-018-9597-6)

## Population and dosing

**Population:** healthy or depressed adults (Caucasian); intoxication cases · condition therapeutic oral dosing and overdose (acute poisoning) · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Burch 1981 [9] | equation variable | 50 |  |
| ka | kabs | 0.24 | [h−1] |
| tlag | tlag | 1.33 | [h] |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has amitriptyline → nortriptyline (metabolism), the second reading amitriptyline → nortriptyline (metabolic conversion); it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| Burch 1981 [9] | `Q900` · equation variable | 50 |  | 50 |  | llm (0.6) | Tylutki_2018_2_table_S1:row12:col2 |
| ka | `Q49` · kabs | 0.24 | [h−1] |  | h−1 | exact (1) | Tylutki_2018_2:prose |
| tlag | `Q83` · tlag | 1.33 | [h] |  | h | exact (1) | Tylutki_2018_2:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'pbpk model parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Curry 1985 [1]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row2:col2'])
- dropped PD-category row 'Venkatakrish nan 2001 [2]' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tylutki_2018_2_table_S1:row3:col2'])
- routed 'Gupta 1999 [3]' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Nam 2015 [4]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row5:col2'])
- dropped unlinked row (NIL): 'Dorian 1983 [5]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row7:col2'])
- dropped unlinked row (NIL): 'Liedholm 1998 [6]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row8:col2'])
- dropped unlinked row (NIL): 'Ogura 1983 [7]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row9:col2'])
- dropped unlinked row (NIL): 'Bhatt 2010 [8]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row11:col2'])
- dropped unlinked row (NIL): 'Ghahramani 1996 [10]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row13:col2'])
- dropped unlinked row (NIL): 'Jang 1990 [11]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row14:col2'])
- dropped unlinked row (NIL): 'Mellstorm 1983 [12]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row15:col2'])
- dropped unlinked row (NIL): 'Warrington 1984 [13]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row16:col2'])
- dropped unlinked row (NIL): 'Balant- Gorgia 1982 [14]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row17:col2'])
- table mostly unlinked (11/14 table-cell rows NIL) — likely the wrong table was located, not 3 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q49 ('ka'=0.24) from results prose — parameter table was unreadable
- salvaged Q83 ('tlag'=1.33) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Amitriptyline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'Assuming:2F=(fa×Fg)×Fhwhere fa is the fraction of administered dose of AT absorbed to enterocytes, Fg is the fraction of')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/14 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Nortriptyline' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) S1
- table Tylutki_2018_2_table_S1: unknown_column_role
- table Tylutki_2018_2_table_S1: missing_label
- table Tylutki_2018_2_table_S1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 10 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['amitriptyline', 'nortriptyline', 'metabolism']] | [['amitriptyline', 'nortriptyline', 'metabolic conversion']] | mismatch |
| `gpt-oss:120b` | `parameters[burch 1981 [9]]` | 50 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q49 | fail | 1 / [time] | [h−1] | ['Tylutki_2018_2:prose'] |
| C5_unit_missing_Q83 | fail | [time] | [h] | ['Tylutki_2018_2:prose'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamitriptyline%5D%20Amitriptyline_Tylutki2018v2_reference&body=Drug%3A%20amitriptyline%0ARecord%3A%20Amitriptyline_Tylutki2018v2_reference%0APaper%3A%20Tylutki_2018_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amitriptyline/Amitriptyline_Tylutki2018v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 20:01 UTC</sub>
