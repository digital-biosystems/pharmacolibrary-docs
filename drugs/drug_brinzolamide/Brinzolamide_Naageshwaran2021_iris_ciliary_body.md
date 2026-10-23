<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;brinzolamide&quot;,&quot;href&quot;:&quot;drugs/drug_brinzolamide/&quot;},{&quot;label&quot;:&quot;Naageshwaran_2021 \u00b7 iris_ciliary_body&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brinzolamide — `Brinzolamide_Naageshwaran2021_iris_ciliary_body`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> Brinzolamide clearance and volume values are physiologically implausible because micro-scale units failed to convert to standard SI units.

<div class="pk-model-meta" hidden drug="brinzolamide" model-id="Brinzolamide_Naageshwaran2021_iris_ciliary_body" status="rejected" stale="false" population="New Zealand White rabbits" measured-compound="brinzolamide" parameterization="apparent" topology="2C"></div>

## Citation
Naageshwaran V, Ranta VP, Gum G, Bhoopathy S, Urtti A, Del Amo EM. Comprehensive Ocular and Systemic Pharmacokinetics of Brinzolamide in Rabbits After Intracameral, Topical, and Intravenous Administration. Journal of pharmaceutical sciences 110(1):529–535 (2021).
  ·  DOI: [10.1016/j.xphs.2020.09.051](https://doi.org/10.1016/j.xphs.2020.09.051)

## Population and dosing

**Population:** New Zealand White rabbits · condition healthy · age group adult.

**Dosing:** 0.75, 4.5, 500 mixed (µg, µg, mg/kg), mixed (intracameral, topical, iv), single.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL, ng/g) | Cmax | 1964 | ng/g |
| tmax (h) | tmax | 0.5 | h |
| Terminal t1/2 (h) | t1/2z | 13 | h |
| AUC0-24h (h*ng/mL, h*ng/g) | AUCt | 7225 | h*ng/g |
| AUC0-∞ (h*ng/mL, h*ng/g) | AUC∞ | 8839 | h*ng/g |
| Dose-normalized AUC0-∞ (h* /mL, h* /g) | AUC/dose | 2 | h* /g |
| The estimated clearance after intracameral injection | CL | 4.12 | µL/min |
| apparent volume of distribution at steady-state | V/F | 673 | µL |
| volume of distribution | V | 687 | µl |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Brinzolamide clearance and volume values are physiologically implausible because micro-scale units failed to convert to standard SI units.**

The extracted clearance (4.12 µL/min) and volume (687 µl) for the rabbit model are far outside physiological limits. These parameters retained micro-scale units that the system could not map to standard SI units, preventing proper magnitude scaling. Consequently, the dimensional checks flagged the values as structurally inconsistent. Extracted — brinzolamide: Cmax 1.96e+03 ng/g, tmax 0.5 h, t1/2z 13 h, AUCt 7.22e+03 h*ng/g, AUC∞ 8.84e+03 h*ng/g, AUC/dose 2 h* /g, CL 4.12 µL/min, V/F 673 µL, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has brinzolamide, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL, ng/g) | `Q32` · Cmax | 1964 | ng/g |  |  | ng/g | exact (1) | Naageshwaran_2021_table_1:row0:col2, Naageshwaran_2021_table_1:row0:col4 |
| tmax (h) | `Q56` · tmax | 0.5 | h | 1800 | s | h | exact (1) | Naageshwaran_2021_table_1:row1:col2, Naageshwaran_2021_table_1:row1:col4 |
| Terminal t1/2 (h) | `Q57` · t1/2z | 13 | h | 4.68e+04 | s | h | exact (1) | Naageshwaran_2021_table_1:row2:col2, Naageshwaran_2021_table_1:row2:col4 |
| AUC0-24h (h*ng/mL, h*ng/g) | `Q19` · AUCt | 7225 | h*ng/g |  |  | (h·ng)/g | llm (0.6) | Naageshwaran_2021_table_1:row3:col2, Naageshwaran_2021_table_1:row3:col4 |
| AUC0-∞ (h*ng/mL, h*ng/g) | `Q17` · AUC∞ | 8839 | h*ng/g |  |  | (h·ng)/g | exact (1) | Naageshwaran_2021_table_1:row4:col2, Naageshwaran_2021_table_1:row4:col4 |
| Dose-normalized AUC0-∞ (h* /mL, h* /g) | `Q189` · AUC/dose | 2 | h* /g |  |  | h/g | llm_corrected (0.6) | Naageshwaran_2021_table_1:row5:col2, Naageshwaran_2021_table_1:row5:col4 |
| The estimated clearance after intracameral injection | `Q22` · CL | 4.12 | µL/min | 6.867e-11 | m3/s | L/h | boundary (0.8) | Naageshwaran_2021:other_prose |
| apparent volume of distribution at steady-state | `Q76` · V/F | 673 | µL | 6.73e-07 | m3 | L | boundary (0.8) | Naageshwaran_2021:other_prose |
| volume of distribution | `Q61` · V | 687 | µl | 6.87e-07 | m3 | L | exact (1) | Naageshwaran_2021:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax (ng/mL, ng/g)' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0-24h (h*ng/mL, h*ng/g)' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0-∞ (h*ng/mL, h*ng/g)' → Q17 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'h* /g' (AUC/dose)
- salvaged Q22 ('The estimated clearance after intracameral injection'=4.12) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution at steady-state'=673) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution'=687) from results prose — parameter table was unreadable
- implicit units: 'Dose-normalized AUC0-∞ (h* /mL, h* /g)' — the LLM proposed 'h*ng/µg', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=brinzolamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'iris-ciliary body' subgroup of Naageshwaran_2021 (paper reports 2 populations: aqueous humor, iris-ciliary body)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Naageshwaran_2021_table_1:row3:col3 = '1896a'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution at steady-state]` | 673 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution at steady-state]` |  | 673 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-24h].value` | 7225 | 17780 | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf].value` | 8839 | 17836 | mismatch |
| `gpt-oss-120b` | `parameters[cmax].value` | 1964 | 11050 | mismatch |
| `gpt-oss-120b` | `parameters[dose-normalized auc0-inf].value` | 2 | 4 | mismatch |
| `gpt-oss-120b` | `parameters[estimated clearance after intracameral injection]` |  | 4.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal t1/2].value` | 13 | 3.4 | mismatch |
| `gpt-oss-120b` | `parameters[the estimated clearance after intracameral injection]` | 4.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax].value` | 0.5 | 0.08 | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 687 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 687 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | brinzolamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | brinzolamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [time] | h*ng/g | ['Naageshwaran_2021_table_1:row4:col2', 'Naageshwaran_2021_table_1:row4:col4'] |
| C5_dimension_Q19 | fail | [time] | h*ng/g | ['Naageshwaran_2021_table_1:row3:col2', 'Naageshwaran_2021_table_1:row3:col4'] |
| C5_dimension_Q32 | fail | dimensionless | ng/g | ['Naageshwaran_2021_table_1:row0:col2', 'Naageshwaran_2021_table_1:row0:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Naageshwaran_2021_table_1:row1:col2', 'Naageshwaran_2021_table_1:row1:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Naageshwaran_2021_table_1:row2:col2', 'Naageshwaran_2021_table_1:row2:col4'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | h* /g | ['Naageshwaran_2021_table_1:row5:col2', 'Naageshwaran_2021_table_1:row5:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000247 L/h | ['Naageshwaran_2021:other_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000687 L | ['Naageshwaran_2021:discussion_prose'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.000673 L | ['Naageshwaran_2021:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrinzolamide%5D%20Brinzolamide_Naageshwaran2021_iris_ciliary_body&body=Drug%3A%20brinzolamide%0ARecord%3A%20Brinzolamide_Naageshwaran2021_iris_ciliary_body%0APaper%3A%20Naageshwaran_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brinzolamide/Brinzolamide_Naageshwaran2021_iris_ciliary_body%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:00 UTC</sub>
