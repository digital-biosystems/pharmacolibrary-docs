<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Calcium&quot;,&quot;href&quot;:&quot;drugs/toxin_calcium/&quot;},{&quot;label&quot;:&quot;Soria-Chacartegui_2024 \u00b7 PGx SLC6A2&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# SLC6A2 — PGx  <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** rejected — not accepted.
- **source:** this paper, `Soria-Chacartegui_2024` — [doi](https://doi.org/10.3390/pharmaceutics16081077)
- **gene:** SLC6A2
- **mechanism:** transport — the gene's transporter moves the drug
- **applies to:** pharmacokinetics (exposure)
- **parameter it changes:** CL (`Q22`)
- **effect (θ per phenotype, categorical_fractional):** A/A=0.0, A/G=0.1686, C/A=0.0929, G/G=0.1244, IM=0.0369, NM=0.1553
- **phenotype groups:** the paper's groups mapped to standard phenotypes

### Notes from the extraction

- genotype-stratified θ from Q189 (AUC/dose) — AUC/Cmax inverted to a clearance effect (∝1/CL)
- reference genotype = A/A (most-populous stratum; paper did not designate a reference — engineer may rebase)
- multi-gene table (4 PK genes): genotype→gene assignment unverified — θ may conflate co-tabulated genes
- θ target Q22 ('CL/F') has no matching parameter in the drug's PK record — cannot attach

## Citation
Soria-Chacartegui P et al., Genetic Variation in CYP2D6, UGT1A4, SL…, Pharmaceutics (2024)
  ·  DOI: [10.3390/pharmaceutics16081077](https://doi.org/10.3390/pharmaceutics16081077)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcium%5D%20pgx_Soria_Chacartegui_2024_SLC6A2_Q22&body=Drug%3A%20calcium%0ARecord%3A%20pgx_Soria_Chacartegui_2024_SLC6A2_Q22%0APaper%3A%20Soria-Chacartegui_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_calcium/pgx_Soria_Chacartegui_2024_SLC6A2_Q22%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Calcium](drugs/toxin_calcium/)</sub>
