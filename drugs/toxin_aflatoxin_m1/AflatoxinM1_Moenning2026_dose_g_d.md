<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Aflatoxin M1&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_m1/&quot;},{&quot;label&quot;:&quot;Moenning_2026 \u00b7 dose_g_d&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aflatoxin M1 — `AflatoxinM1_Moenning2026_dose_g_d`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Aflatoxin M1" model-id="AflatoxinM1_Moenning2026_dose_g_d" status="rejected" stale="false" population="dairy cows (lactating Holstein-type cows from 19 controlled feeding studies)" measured-compound="Aflatoxin M1" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Moenning JL, Numata J. Quantifying milk yield-dependent aflatoxin B1-to-M1 transfer in dairy cows: a Bayesian consensus toxicokinetic model. Archives of toxicology 100(8):3479–3489 (2026).
  ·  DOI: [10.1007/s00204-026-04366-3](https://doi.org/10.1007/s00204-026-04366-3)

## Population and dosing

**Population:** dairy cows (lactating Holstein-type cows from 19 controlled feeding studies) · condition chronic dietary exposure via contaminated feed · age group adult · n = unknown (animals from 19 published studies).

**Dosed compound ≠ measured compound:** dosed Aflatoxin B1, measured Aflatoxin M1.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Lamp et al. (2026) | equation variable | 91.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of lamp et al.: this record has 91.2, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Lamp et al. (2026) | `Q900` · equation variable | 91.2 |  | 91.2 | llm (0.6) | Tab1:row2:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Walte et al. (2022)' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col1'])
- dropped unlinked row (NIL): 'Guo et al. (2021)' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col1', 'Tab1:row4:col1'])
- dropped duplicate Q900 ('Britzi et al. (2013)', value '80') — already have one for this compound
- dropped duplicate Q900 ('Jiang et al. (2018)', value '1725') — already have one for this compound
- dropped unlinked row (NIL): 'Masoero et al. (2007)' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col1'])
- dropped unlinked row (NIL): 'Queiroz et al. (2012)' — extend the ontology if this is a real PK parameter (source ['Tab1:row8:col1'])
- dropped duplicate Q900 ('Rodrigues et al. (2019)', value '2800') — already have one for this compound
- dropped unlinked row (NIL): 'Kutz et al. (2009)' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col1'])
- dropped unlinked row (NIL): 'Pietri et al. (2009)' — extend the ontology if this is a real PK parameter (source ['Tab1:row12:col1'])
- dropped duplicate Q900 ('Rojo et al. (2014)', value '880') — already have one for this compound
- dropped unlinked row (NIL): 'Maki et al. (2016)' — extend the ontology if this is a real PK parameter (source ['Tab1:row15:col1'])
- dropped unlinked row (NIL): 'Galvano et al. (1996)' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col1'])
- dropped value-less row: 'Dose and average milk yield of studies used for deriving the consensus model. If a study had animals with vastly different milk yields, they are shown separately'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Aflatoxin M1
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'dose [\mu g /d]' subgroup of Moenning_2026 (paper reports 2 populations: average milk yield [l/d], dose [\mu g /d])
- row roles (LLM): model_class=compartmental; 0/17 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Aflatoxin B1' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table Tab1: unbound_uncertainty
- table Tab1: unparsed_numeric_cell
- table Moenning_2026_table_S1: no_numeric_grid
- companion parameter table S1 transcribed (0 record(s))
- table Moenning_2026_table_S11: missing_label
- table Moenning_2026_table_S11: unknown_column_role
- companion parameter table S11 transcribed (0 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 19 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.8 (4/5 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[lamp et al.]` | 91.2 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflatoxin_m1%5D%20AflatoxinM1_Moenning2026_dose_g_d&body=Drug%3A%20aflatoxin_m1%0ARecord%3A%20AflatoxinM1_Moenning2026_dose_g_d%0APaper%3A%20Moenning_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aflatoxin_m1/AflatoxinM1_Moenning2026_dose_g_d%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:30 UTC</sub>
