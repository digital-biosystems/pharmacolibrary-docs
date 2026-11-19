<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cyanocobalamin&quot;,&quot;href&quot;:&quot;drugs/toxin_cyanocobalamin/&quot;},{&quot;label&quot;:&quot;Kashyap_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cyanocobalamin_NavaOcampo2005_reference&quot;,&quot;label&quot;:&quot;Nava-Ocampo_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyanocobalamin/Cyanocobalamin_NavaOcampo2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cyanocobalamin — `Cyanocobalamin_Kashyap2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected: exposure paper lacking kinetic parameters for cyanocobalamin; reported 65% absolute bioavailability lacked SI unit conversion.

<div class="pk-model-meta" hidden drug="Cyanocobalamin" model-id="Cyanocobalamin_Kashyap2024_reference" status="rejected" stale="false" population="Healthy Indian adults" measured-compound="Methylcobalamin" parameterization="mechanistic" topology="1C"></div>

## Citation
Kashyap S, Gowda P, Pasanna RM, Sivadas A, Sachdev HS, Kurpad AV et al. The Oral Bioavailability of Vitamin B&lt;sub&gt;12&lt;/sub&gt; at Different Doses in Healthy Indian Adults. Nutrients 16(23):4157 (2024).
  ·  DOI: [10.3390/nu16234157](https://doi.org/10.3390/nu16234157)

## Population and dosing

**Population:** Healthy Indian adults · condition healthy · age group adult · n = 9.

**Dosing:** 0.0025, 0.005, 0.01 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Cyanocobalamin, measured Methylcobalamin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fractional Bioavailability (%) | Fab | 65.0 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected: exposure paper lacking kinetic parameters for cyanocobalamin; reported 65% absolute bioavailability lacked SI unit conversion.**

The model lacks kinetic parameters such as half-life, rate constants, volume, or clearance, identifying it as an exposure paper rather than a structural PK model. The absolute bioavailability of cyanocobalamin was reported as 65%, but this percentage unit could not be converted to a dimensionless fraction, leaving the parameter without a usable SI value. Extracted — cyanocobalamin: Fab 65 %.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Fractional Bioavailability (%) | `Q40` · Fab | 65.0 | % | llm_confirmed (0.6) | Kashyap_2024_table_1:row0:col1, Kashyap_2024_table_1:row1:col1, Kashyap_2024_table_1:row2:col1, Kashyap_2024_table_1:row3:col1, Kashyap_2024_table_1:row4:col1, Kashyap_2024_table_1:row5:col1, Kashyap_2024_table_1:row6:col1, Kashyap_2024_table_1:row7:col1, Kashyap_2024_table_2:row0:col1, Kashyap_2024_table_2:row1:col1, Kashyap_2024_table_2:row2:col1, Kashyap_2024_table_2:row3:col1, Kashyap_2024_table_2:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'oral doses' — extend the ontology if this is a real PK parameter (source ['nutrients-16-04157-f002:caption', 'nutrients-16-04157-f002:caption', 'nutrients-16-04157-f002:caption', 'nutrients-16-04157-f002:caption'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methylcobalamin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 3/3 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'Methylcobalamin', not cyanocobalamin — the review values are the parent's

**Extraction notes:**
- table array1: no_numeric_grid
- final table array1: no supported point estimates; targeted recovery unresolved
- transposed table Kashyap_2024_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (16 record(s))
- transposed table Kashyap_2024_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (10 record(s))
- LLM selected parameter table(s) 1, 2
- toxin: the located table(s) gave no kinetic value — 14 record(s) read from the paper's prose

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyanocobalamin%5D%20Cyanocobalamin_Kashyap2024_reference&body=Drug%3A%20cyanocobalamin%0ARecord%3A%20Cyanocobalamin_Kashyap2024_reference%0APaper%3A%20Kashyap_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cyanocobalamin/Cyanocobalamin_Kashyap2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 19:31 UTC</sub>
