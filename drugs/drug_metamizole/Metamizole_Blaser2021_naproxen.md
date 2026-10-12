<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;Metamizole&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/&quot;},{&quot;label&quot;:&quot;Blaser_2021 \u00b7 naproxen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Metamizole_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Fux2022_reference&quot;,&quot;label&quot;:&quot;Fux_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Fux2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Metamizole — `Metamizole_Blaser2021_naproxen`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Kabs, Q and kel have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kabs, Q and kel), so that value has no SI equivalent. None of the extracted parameters is metamizole's own; they describe 4-methylaminoantipyrine, 4-aminoantipyrine and 4-acetylaminoantipyrine. Extracted — 4-methylaminoantipyrine: kabs 0.538 n = 7, V1/F 3.27 L, Q 0.185 n = 7, kel 0.213 n = 7, t1/2z 1.71 h; 4-aminoantipyrine: t1/2z 2.14 h; 4-acetylaminoantipyrine: t1/2z 1 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 4-methylaminoantipyrine, the second reading 4-MAA; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `metamizole`, measured `4-methylaminoantipyrine`.

## Citation
Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021)
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Model component
<dbs-pgx drug="Metamizole" model-id="Metamizole_Blaser2021_naproxen" status="needs_review" stale="false" population="salt-depleted healthy male volunteers" measured-compound="4-methylaminoantipyrine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.538 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row1:col2, T3:row1:col3 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 3.27 | L | 0.00327 | [l] | not captured | exact (1.0) | T3:row2:col3 | — | not captured |
| k12 (1/h) | `Q30` · Q | 0.185 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row3:col2, T3:row3:col3 | — | not captured |
| k10 (1/h) | `Q47` · kel | 0.213 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row5:col2, T3:row5:col3 | — | not captured |
| T1/2 K01 (h) | `Q57` · t1/2z | 1.708 | h | 6148.8 | [h] | not captured | llm_confirmed (0.6) | T3:row15:col2, T3:row15:col3 | — | not captured |
| T1/2 4-AA (h) | `Q57` · t1/2z | 2.14 | h | 7704.0 | [h] | not captured | llm_confirmed (0.6) | T3:row17:col2, T3:row17:col3 | — | not captured |
| T1/2 4-AAA (h) | `Q57` · t1/2z | 1.00 | h | 3600.0 | [h] | not captured | llm_confirmed (0.6) | T3:row18:col2, T3:row18:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V2/F (L) | Q82 | not captured | exact |
| T1/2 4-FAA (h) | Q57 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Metamizole (n = 8)' — extend the ontology if this is a real PK parameter (source ['T3:row0:col2', 'T3:row0:col3'])
- unit_dimension_unknown: 'n = 7' (kabs)
- unit_dimension_unknown: 'n = 7' (Q)
- dropped duplicate Q30 ('k14 (1/h)', value '1.334') — already have one for this compound
- unit_dimension_unknown: 'n = 7' (kel)
- dropped duplicate Q30 ('k23 (1/h)', value '0.009') — already have one for this compound
- dropped duplicate Q30 ('k24 (1/h)', value '2.275') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-MAA (h)', value None) — already have one for this compound
- dropped PD-category row 'EC50 (µM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row20:col3'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['T3:row21:col3'])
- dropped PD-category row 'E0 b' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row22:col3'])
- dropped unlinked row (NIL): 'Emax b' — extend the ontology if this is a real PK parameter (source ['T3:row23:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=4-methylaminoantipyrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'naproxen (n = 7)' subgroup of Blaser_2021 (paper reports 6 populations: 4-aa, 4-aaa, 4-faa, 4-maa, metamizole (n = 8), naproxen (n = 7))
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 28 linked by role; re-tagged naproxen→parent ×2, parent→4-methylaminoantipyrine ×24, naproxen→4-methylaminoantipyrine ×19, parent→4-aminoantipyrine ×3, naproxen→4-aminoantipyrine ×2, parent→4-acetylaminoantipyrine ×1, naproxen→4-acetylaminoantipyrine ×2, parent→4-formylaminoantipyrine ×1, naproxen→4-formylaminoantipyrine ×1, parent→6-keto-prostaglandin F1alpha ×2, naproxen→6-keto-prostaglandin F1alpha ×2
- molar mass: none of 1 PubChem candidate(s) is '4-methylaminoantipyrine' (LLM) — left in mass units
- molar mass: none found for '4-methylaminoantipyrine' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '4-methylaminoantipyrine', not metamizole — the review values are the parent's

**Extraction notes:**
- unparsed cell T3:row6:col3 = '16.8 ± 5.58a'
- unparsed cell T3:row16:col3 = '0.028 ± 0.004a'
- unparsed cell T3:row19:col3 = '22.10 ± 1.32a'
- unparsed cell T3:row20:col2 = 'EC50 (µM)'
- unparsed cell T3:row22:col2 = 'E0'
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['metamizole', '4-methylaminoantipyrine', 'metabolism'], ['4-methylaminoantipyrine', '4-aminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-formylaminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-acetylaminoantipyrine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[k10]` | 0.213 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k10]` | not captured | 0.213 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 0.185 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | not captured | 0.185 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14]` | not captured | 1.334 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` | not captured | 0.009 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.538 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.538 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aa]` | 2.14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aaa]` | 1.00 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-faa]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` | 1.708 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` | not captured | 1.708 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` | 3.27 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` | not captured | 3.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 4-methylaminoantipyrine | 4-MAA | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row2:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row15:col2', 'T3:row15:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row17:col2', 'T3:row17:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row18:col2', 'T3:row18:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row19:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row6:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | n = 7 | not captured | not captured | ['T3:row3:col2', 'T3:row3:col3'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | n = 7 | not captured | not captured | ['T3:row5:col2', 'T3:row5:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | n = 7 | not captured | not captured | ['T3:row1:col2', 'T3:row1:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.27 L | not captured | not captured | ['T3:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metamizole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Blaser_2021` / `Blaser_2021::naproxen`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:17 UTC</sub>
