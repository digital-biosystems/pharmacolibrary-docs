<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amitriptyline&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/&quot;},{&quot;label&quot;:&quot;Ratajczak-Enselme_2015 \u00b7 epidural_50_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amitriptyline_Brsen2001_reference&quot;,&quot;label&quot;:&quot;Br\u00f8sen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Brsen2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amitriptyline_Yukawa2002_reference&quot;,&quot;label&quot;:&quot;Yukawa_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Yukawa2002_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amitriptyline — `Amitriptyline_RatajczakEnselme2015_epidural_50_mg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="amitriptyline" model-id="Amitriptyline_RatajczakEnselme2015_epidural_50_mg" status="rejected" stale="false" population="Lacaune ewes" measured-compound="amitriptyline" parameterization="mechanistic" topology="1C"></div>

## Citation
Ratajczak-Enselme M, Grégoire N, Estebe JP, Dollo G, Chevanne F, Bec D et al. Population Pharmacokinetics of Amitriptyline After Intrathecal, Epidural, and Intravenous Administration in Sheep. Regional anesthesia and pain medicine 40(6):681–686 (2015).
  ·  DOI: [10.1097/AAP.0000000000000322](https://doi.org/10.1097/AAP.0000000000000322)

## Population and dosing

**Population:** Lacaune ewes · condition healthy · n = 6.

**Dosing:** 5, 10, 50 mg, iv, it, epi, multiple, every 2 h.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max , μg/mL | Cmax | 1120 | μg/mL |
| T max , min | tmax | 0 | min |
| Intercompartmental clearance CL 72 | Q | 3.17 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.455). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has none, the second reading 55; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max , μg/mL | `Q32` · Cmax | 1120 | μg/mL | 1.12 | kg/m3 | µg/ml | space_fold (0.95) | tab_0:row2:col6 |
| T max , min | `Q56` · tmax | 0 | min | 0 | s | min | space_fold (0.95) | tab_0:row3:col6 |
| Intercompartmental clearance CL 72 | `Q30` · Q | 3.17 | mL/min | 5.283e-08 | m3/s | L/h | boundary (0.8) | Ratajczak-Enselme_2015:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q30 ('Intercompartmental clearance CL 72'=3.17) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amitriptyline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'epidural 50 mg' subgroup of Ratajczak-Enselme_2015 (paper reports 2 populations: epidural 50 mg, intravenous 10 mg)

**Extraction notes:**
- table tab_0: unknown_column_role
- table tab_0: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.455 (5/11 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc t]` |  | 2.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max].value` | 1120 | 0.084 | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  | 55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance cl 72]` | 3.17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance cl]` |  | 3.17 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_0:row2:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_0:row3:col6'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamitriptyline%5D%20Amitriptyline_RatajczakEnselme2015_epidural_50_mg&body=Drug%3A%20amitriptyline%0ARecord%3A%20Amitriptyline_RatajczakEnselme2015_epidural_50_mg%0APaper%3A%20Ratajczak-Enselme_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amitriptyline/Amitriptyline_RatajczakEnselme2015_epidural_50_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:43 UTC</sub>
