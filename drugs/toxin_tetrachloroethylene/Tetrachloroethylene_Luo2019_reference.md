<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Tetrachloroethylene&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrachloroethylene/&quot;},{&quot;label&quot;:&quot;Luo_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tetrachloroethylene_Frantz1983_reference&quot;,&quot;label&quot;:&quot;Frantz_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrachloroethylene/Tetrachloroethylene_Frantz1983_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tetrachloroethylene — `Tetrachloroethylene_Luo2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Tetrachloroethylene" model-id="Tetrachloroethylene_Luo2019_reference" status="rejected" stale="false" population="Male Collaborative Cross mice" measured-compound="S-(1,2,2-trichlorovinyl)glutathione, S-(1,2,2-trichlorovinyl)-L-cysteine, N-acetyl-S-(1,2,2-trichlorovinyl)-L-cysteine, Tetrachloroethylene, Trichloroacetic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Luo YS, Cichocki JA, Hsieh NH, Lewis L, Wright FA, Threadgill DW et al. Using Collaborative Cross Mouse Population to Fill Data Gaps in Risk Assessment: A Case Study of Population-Based Analysis of Toxicokinetics and Kidney Toxicodynamics of Tetrachloroethylene. Environmental health perspectives 127(6):67011 (2019).
  ·  DOI: [10.1289/EHP5105](https://doi.org/10.1289/EHP5105)

## Population and dosing

**Population:** Male Collaborative Cross mice · condition acute exposure · age group adult.

**Dosed compound ≠ measured compound:** dosed Tetrachloroethylene, measured S-(1,2,2-trichlorovinyl)glutathione, S-(1,2,2-trichlorovinyl)-L-cysteine, N-acetyl-S-(1,2,2-trichlorovinyl)-L-cysteine, Tetrachloroethylene, Trichloroacetic acid.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'PERC dose' routed out of structural estimates ('AbstractBackground:Interindividual variability in susceptibility remains poorly characterized for environmental chemicals such as tetrachloroethylene (PERC).')
- table section iiv: 'Interstrain difference for unchanged PERC' routed out of structural estimates ('AbstractBackground:Interindividual variability in susceptibility remains poorly characterized for environmental chemicals such as tetrachloroethylene (PERC).')
- table section iiv: 'Interstrain difference for oxidation' routed out of structural estimates ('AbstractBackground:Interindividual variability in susceptibility remains poorly characterized for environmental chemicals such as tetrachloroethylene (PERC).')
- table section iiv: 'Interstrain difference for GSH conjugation' routed out of structural estimates ('AbstractBackground:Interindividual variability in susceptibility remains poorly characterized for environmental chemicals such as tetrachloroethylene (PERC).')
- table section iiv: 'Interstrain difference for bioactivation of GSH conjugates' routed out of structural estimates ('AbstractBackground:Interindividual variability in susceptibility remains poorly characterized for environmental chemicals such as tetrachloroethylene (PERC).')
- dropped unlinked row (NIL): 'GM' — extend the ontology if this is a real PK parameter (source ['t1:row1:col1', 't1:row1:col2', 't1:row1:col3', 't1:row1:col4', 't1:row1:col5'])
- dropped unlinked row (NIL): 'GSD' — extend the ontology if this is a real PK parameter (source ['t1:row2:col1', 't1:row2:col2', 't1:row2:col3', 't1:row2:col4', 't1:row2:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-(1,2,2-trichlorovinyl)glutathione, S-(1,2,2-trichlorovinyl)-L-cysteine, N-acetyl-S-(1,2,2-trichlorovinyl)-L-cysteine, Tetrachloroethylene, Trichloroacetic acid
- toxin: 4 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- toxin: the located table(s) gave no kinetic value — 5 record(s) read from the paper's prose

## Validation

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetrachloroethylene%5D%20Tetrachloroethylene_Luo2019_reference&body=Drug%3A%20tetrachloroethylene%0ARecord%3A%20Tetrachloroethylene_Luo2019_reference%0APaper%3A%20Luo_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tetrachloroethylene/Tetrachloroethylene_Luo2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 03:16 UTC</sub>
