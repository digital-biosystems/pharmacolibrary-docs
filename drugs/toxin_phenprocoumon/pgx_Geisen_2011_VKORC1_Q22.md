<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenprocoumon&quot;,&quot;href&quot;:&quot;drugs/toxin_phenprocoumon/&quot;},{&quot;label&quot;:&quot;Geisen_2011 \u00b7 PGx VKORC1&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# VKORC1 — PGx  <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** rejected — not accepted.
- **source:** this paper, `Geisen_2011` — [doi](https://doi.org/10.1007/s00228-010-0950-y)
- **gene:** VKORC1
- **mechanism:** target — the gene's product is what the drug acts on
- **applies to:** pharmacokinetics (exposure)
- **parameter it changes:** CL (`Q22`)
- **effect (θ per phenotype, categorical_fractional):** *1/*1=0.0, *1/*2=-0.0891, *1/*3=-0.08, *2/*3=-0.6392, AA=-0.0316, AG=-0.0754
- **phenotype groups:** the paper's groups mapped to standard phenotypes

### Notes from the extraction

- genotype-stratified θ from Q100 (NIL) — AUC/Cmax inverted to a clearance effect (∝1/CL)
- reference genotype = *1/*1 (most-populous stratum; paper did not designate a reference — engineer may rebase)
- θ target Q22 ('daily phenprocoumon dose') has no matching parameter in the drug's PK record — cannot attach

## Citation
Geisen C et al., Prediction of phenprocoumon maintenance…, European journal of clinica… (2011)
  ·  DOI: [10.1007/s00228-010-0950-y](https://doi.org/10.1007/s00228-010-0950-y)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenprocoumon%5D%20pgx_Geisen_2011_VKORC1_Q22&body=Drug%3A%20phenprocoumon%0ARecord%3A%20pgx_Geisen_2011_VKORC1_Q22%0APaper%3A%20Geisen_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenprocoumon/pgx_Geisen_2011_VKORC1_Q22%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Phenprocoumon](drugs/toxin_phenprocoumon/)</sub>
