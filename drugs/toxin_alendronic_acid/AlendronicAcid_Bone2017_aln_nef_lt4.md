<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Alendronic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_alendronic_acid/&quot;},{&quot;label&quot;:&quot;Bone_2017 \u00b7 aln_nef_lt4&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alendronic acid — `AlendronicAcid_Bone2017_aln_nef_lt4`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Volume of distribution value 2.99 uses unit ml/h instead of volume, causing clearance/volume ratio to be physiologically implausible.

<div class="pk-model-meta" hidden drug="Alendronic acid" model-id="AlendronicAcid_Bone2017_aln_nef_lt4" status="rejected" stale="false" population="healthy adults" measured-compound="Alendronic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Bone HG, Walter MA, Hurley ME, Epstein S. Pharmacokinetics of coadministration of levothyroxine sodium and alendronate sodium new effervescent formulation. Osteoporosis international : a journal established as result of cooperation between the European Foundation for Osteoporosis and the National Osteoporosis Foundation of the USA 28(5):1745–1752 (2017).
  ·  DOI: [10.1007/s00198-017-3941-3](https://doi.org/10.1007/s00198-017-3941-3)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 30.

**Dosing:** 70 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Alendronate sodium, measured Alendronic acid.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μg/dL) | Cmax | 3.694 | μg/dL |
| AUC0-48 (μg·h/dL) | AUClast | 97.457 | μg·h/dL |
| GR | CL | 0.003 | ml/h |
| LZM | V | 2.99 | ml/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Volume of distribution value 2.99 uses unit ml/h instead of volume, causing clearance/volume ratio to be physiologically implausible.**

The volume of distribution parameter is assigned the unit ml/h, which is incorrect for a volume metric. This unit error renders the clearance-to-volume ratio calculation meaningless and outside physiological bounds. Consequently, the model was rejected due to this fundamental unit extraction failure. Extracted — alendronic acid: Cmax 3.69 μg/dL, AUClast 97.5 μg·h/dL, CL 0.003 ml/h, V 2.99 ml/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μg/dL) | `Q32` · Cmax | 3.694 | μg/dL | 3.694e-05 | kg/m3 | µg/dl | exact (1) | Bone_2017_table_3:row0:col1 |
| AUC0-48 (μg·h/dL) | `Q74` · AUClast | 97.457 | μg·h/dL | 3.508 | kg*s/m3 | (h·µg)/dl | llm (0.6) | Bone_2017_table_3:row1:col1 |
| GR | `Q22` · CL | 0.003 | ml/h | 8.333e-13 | m3/s | L/h | review_gapfill (0.7) | Katsumi_2015:review |
| LZM | `Q61` · V | 2.99 | ml/h | 8.306e-10 | m3/s | L | review_gapfill (0.7) | Katsumi_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alendronic acid
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: 'aln-nef + lt4 (n = 29)' subgroup of Bone_2017 (paper reports 3 populations: aln-nef (n = 29), aln-nef + lt4 (n = 29), ratio of means b)
- gap-filled Q22 (CL) from Katsumi_2015's review values (primary lacked it)
- gap-filled Q61 (V) from Katsumi_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: ambiguous_numeric_format
- table Tab2: unbound_uncertainty
- table Bone_2017_table_3: unbound_uncertainty
- companion parameter table 3 transcribed (10 record(s))
- LLM selected parameter table(s) 2, 3
- toxin: the located table(s) gave no kinetic value — 9 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Katsumi_2015:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Bone_2017_table_3:row0:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 / [time] |  | ['Katsumi_2015:review'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Bone_2017_table_3:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.003 | ['Katsumi_2015:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 3e-06 L/h | ['Katsumi_2015:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 8.31e-07 L | ['Katsumi_2015:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balendronic_acid%5D%20AlendronicAcid_Bone2017_aln_nef_lt4&body=Drug%3A%20alendronic_acid%0ARecord%3A%20AlendronicAcid_Bone2017_aln_nef_lt4%0APaper%3A%20Bone_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alendronic_acid/AlendronicAcid_Bone2017_aln_nef_lt4%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 15:49 UTC</sub>
