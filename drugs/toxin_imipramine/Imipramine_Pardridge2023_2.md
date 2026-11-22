<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Imipramine&quot;,&quot;href&quot;:&quot;drugs/toxin_imipramine/&quot;},{&quot;label&quot;:&quot;Pardridge_2023 \u00b7 2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Imipramine — `Imipramine_Pardridge2023_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because it lacks kinetic parameters and misidentifies a table column as a study population.

<div class="pk-model-meta" hidden drug="Imipramine" model-id="Imipramine_Pardridge2023_2" status="rejected" stale="false" population="human" measured-compound="Imipramine" parameterization="mechanistic" topology="1C"></div>

## Citation
Pardridge WM. Physiologically Based Pharmacokinetic Model of Brain Delivery of Plasma Protein Bound Drugs. Pharmaceutical research 40(3):661–674 (2023).
  ·  DOI: [10.1007/s11095-023-03484-2](https://doi.org/10.1007/s11095-023-03484-2)

## Population and dosing

**Population:** human · condition healthy.

**Dosing:** 7.5, 80 mixed, mixed, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kp,brain | Kp | 5.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because it lacks kinetic parameters and misidentifies a table column as a study population.**

The extracted parameters consist only of a partition coefficient and volume of distribution values, with no half-life, rate constant, or clearance data, indicating an exposure or outcome paper rather than a kinetic model. Additionally, the population field incorrectly lists '2', which is a statistic column from the estimates table, confirming the source table was improperly split. Extracted — imipramine: Kp 5.4.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Kp,brain | `Q410` · Kp | 5.4 |  | llm_confirmed (0.6) | Pardridge_2023_table_3:row2:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| VP | Q64 | exact |
| V | Q61 | exact |

## Departures & gaps

**Interpretation flags:**
- transposed table Pardridge_2023_table_3: rows are variants (1, 2, 3, 4, 5, 6), the parameters are the column headers (Kp,brain) — read one record per variant
- transposed table Pardridge_2023_table_4: rows are variants (11, 12, 13, 14, 15, 16), the parameters are the column headers (Kp,brain) — read one record per variant
- dropped unlinked row (NIL): 'VT' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col2', 'Tab2:row8:col3'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2'])
- dropped PD-category row 's' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row20:col2'])
- NIL: refused to back-fill base 'Css' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'KD' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'GL0'
- dropped value-less row: 'GF0'
- dropped value-less row: 'AL0'
- dropped value-less row: 'LF0'
- dropped value-less row: 'GL'
- dropped value-less row: 'GF'
- dropped value-less row: 'AL'
- dropped value-less row: 'LF'
- dropped value-less row: 'LM'
- dropped value-less row: 'PL'
- dropped value-less row: 'PF'
- dropped unlinked row (NIL): 'total drug in brain' — extend the ontology if this is a real PK parameter (source ['Fig1:caption'])
- dropped unlinked row (NIL): 'total drug in plasma' — extend the ontology if this is a real PK parameter (source ['Fig1:caption'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Imipramine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- estimate-method split: '2' is one of 20 estimates of Pardridge_2023's substance matrix (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20); same population, different estimation method
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- table Pardridge_2023_table_3: ambiguous_numeric_format
- companion parameter table 3 transcribed (109 record(s))
- table Pardridge_2023_table_4: ambiguous_numeric_format
- companion parameter table 4 transcribed (109 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 47 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 1 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimipramine%5D%20Imipramine_Pardridge2023_2&body=Drug%3A%20imipramine%0ARecord%3A%20Imipramine_Pardridge2023_2%0APaper%3A%20Pardridge_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_imipramine/Imipramine_Pardridge2023_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 14:26 UTC</sub>
