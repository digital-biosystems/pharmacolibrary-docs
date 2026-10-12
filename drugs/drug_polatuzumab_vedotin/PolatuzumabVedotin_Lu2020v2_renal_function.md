<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Lu_2020_2 \u00b7 renal_function&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Lu2020v2_renal_function`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record lacks distribution volume and clearance parameters, and the unconjugated MMAE metabolite is an orphan compartment with no dose path.**

The paper reports only exposure metrics like AUC (2930 ng*day/mL) and Cmax (763 ng/mL) for acMMAE, without any volume or clearance values. The unconjugated MMAE metabolite is defined with zero compartments, making it an orphan structure unreachable from the dose. Additionally, the unit ng*day/mL could not be converted to SI units, preventing standardization of the exposure metric. Extracted — acMMAE: AUC 2.93e+03 ng*day/mL, Cmax 763 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polatuzumab_vedotin, the second reading polatuzumab vedotin; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> **Dose compound ≠ measured compound:** dosed `polatuzumab_vedotin`, measured `acMMAE`.

## Citation
Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020)
  ·  DOI: [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6)

<div class="pk-model-meta" hidden drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Lu2020v2_renal_function" status="rejected" stale="false" population="patients with non-Hodgkin lymphoma" measured-compound="acMMAE" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC, ng*day/mL | `Q88` · AUC | 2930 | ng*day/mL | not captured | [[d] · [ng]] / [ml] | not captured | exact (1.0) | Lu_2020_2_table_3:row2:col4, Lu_2020_2_table_3:row2:col5, Lu_2020_2_table_3:row2:col6, Lu_2020_2_table_3:row7:col4, Lu_2020_2_table_3:row7:col5, Lu_2020_2_table_3:row7:col6 | — | not captured |
| Cmax, ng/mL | `Q32` · Cmax | 763 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Lu_2020_2_table_3:row4:col4, Lu_2020_2_table_3:row4:col5, Lu_2020_2_table_3:row4:col6, Lu_2020_2_table_3:row9:col4, Lu_2020_2_table_3:row9:col5, Lu_2020_2_table_3:row9:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Normal (N = 399)' — extend the ontology if this is a real PK parameter (source ['Lu_2020_2_table_3:row0:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'renal function' subgroup of Lu_2020_2 (paper reports 7 populations: bendamustine administrationb, dose, mg/kg, drug product, hepatic function, renal function, rituximab administrationa, sex)
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'acMMAE' ('antibody-conjugated MMAE') — left in mass units
- molar mass: no plausible PubChem entry for 'unconjugated MMAE' ('unconjugated MMAE') — left in mass units
- molar mass: none found for 'acMMAE' — its concentrations stay mass-only
- molar mass: none found for 'unconjugated MMAE' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab1:row1:col3 = '0.1 to 2.4'
- unparsed cell Tab1:row5:col3 = '1.4, 1.8'
- companion parameter table 2 transcribed (39 record(s))
- companion parameter table 3 transcribed (24 record(s))
- companion parameter table 4 transcribed (19 record(s))
- companion parameter table 5 transcribed (13 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['polatuzumab_vedotin', 'acmmae', 'interconversion'], ['acmmae', 'unconjugated mmae', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc]` | 2930 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 763 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | polatuzumab_vedotin | polatuzumab vedotin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Lu_2020_2_table_3:row4:col4', 'Lu_2020_2_table_3:row4:col5', 'Lu_2020_2_table_3:row4:col6', 'Lu_2020_2_table_3:row9:col4', 'Lu_2020_2_table_3:row9:col5', 'Lu_2020_2_table_3:row9:col6'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Lu_2020_2_table_3:row2:col4', 'Lu_2020_2_table_3:row2:col5', 'Lu_2020_2_table_3:row2:col6', 'Lu_2020_2_table_3:row7:col4', 'Lu_2020_2_table_3:row7:col5', 'Lu_2020_2_table_3:row7:col6'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_polatuzumab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lu_2020_2` / `Lu_2020_2::renal_function`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:11 UTC</sub>
