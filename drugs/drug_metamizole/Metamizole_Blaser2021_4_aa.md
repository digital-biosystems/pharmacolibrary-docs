<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;Metamizole&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/&quot;},{&quot;label&quot;:&quot;Blaser_2021 \u00b7 4_aa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Metamizole_Fux2022_reference&quot;,&quot;label&quot;:&quot;Fux_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Fux2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Metamizole — `Metamizole_Blaser2021_4_aa`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Metamizole" model-id="Metamizole_Blaser2021_4_aa" status="rejected" stale="false" population="salt-depleted healthy male volunteers" measured-compound="4-methylaminoantipyrine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Blaser LS, Duthaler U, Bouitbir J, Leuppi-Taegtmeyer AB, Liakoni E, Dolf R et al. Comparative Effects of Metamizole (Dipyrone) and Naproxen on Renal Function and Prostacyclin Synthesis in Salt-Depleted Healthy Subjects - A Randomized Controlled Parallel Group Study. Frontiers in pharmacology 12:620635 (2021).
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Population and dosing

**Population:** salt-depleted healthy male volunteers · condition healthy · age group adult.

**Dosing:** 1000 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed metamizole, measured 4-methylaminoantipyrine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax ratio MD/SD | Cmax_ratio | 2.22 | mg/L |
| AUC0-5h ratio MD/SD | AUC ratio | 3.24 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.042). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c8 unreachable/orphan compartment or unlinked metabolite.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax_ratio), so that value has no SI equivalent. None of the extracted parameters is metamizole's own; they describe 4-methylaminoantipyrine. Extracted — 4-methylaminoantipyrine: Cmax_ratio 2.22 mg/L, AUC ratio 3.24.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 4-methylaminoantipyrine, the second reading unknown; it also differs on 22 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Cmax ratio MD/SD | `Q33` · Cmax_ratio | 2.22 | mg/L | mg/l | llm_corrected (0.6) | Blaser_2021_table_2:row9:col2 |
| AUC0-5h ratio MD/SD | `Q21` · AUC ratio | 3.24 |  |  | llm (0.6) | Blaser_2021_table_2:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=4-methylaminoantipyrine
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: '4-aa' subgroup of Blaser_2021 (paper reports 6 populations: 4-aa, 4-aaa, 4-faa, 4-maa, metamizole (n = 8), naproxen (n = 7))
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
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.042 (1/24 fields) | 23 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['metamizole', '4-methylaminoantipyrine', 'metabolism'], ['4-methylaminoantipyrine', '4-aminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-formylaminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-acetylaminoantipyrine', 'metabolism']] | [['metamizole', '4-maa', 'metabolism'], ['4-maa', '4-aa', 'metabolism'], ['4-aa', '4-faa', 'metabolism'], ['4-aa', '4-aaa', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc0-5h ratio md/sd]` | 3.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax ratio md/sd]` | 2.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k10]` |  | 0.178 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 0.030 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` |  | 0.552 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` |  | 0.033 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k30]` |  | 0.074 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40]` |  | 0.567 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 2.528 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke0]` |  | 0.012 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aa]` |  | 2.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aaa]` |  | 10.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-faa]` |  | 6.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-maa]` |  | 3.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` |  | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` |  | 71.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 35.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 55.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` |  | 11.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 4-methylaminoantipyrine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 2 |
| C0b_disposition_core | fail |  |
| C8_topology | fail |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetamizole%5D%20Metamizole_Blaser2021_4_aa&body=Drug%3A%20metamizole%0ARecord%3A%20Metamizole_Blaser2021_4_aa%0APaper%3A%20Blaser_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metamizole/Metamizole_Blaser2021_4_aa%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 06:17 UTC</sub>
