<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;lead&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/&quot;},{&quot;label&quot;:&quot;Souwer_2023 \u00b7 PGx CYP2D6&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# CYP2D6 — PGx  <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** rejected — not accepted.
- **source:** this paper, `Souwer_2023` — [doi](https://doi.org/10.1007/s10549-023-06925-z)
- **gene:** CYP2D6
- **mechanism:** metabolism — the gene's enzyme clears the drug
- **applies to:** pharmacokinetics (exposure)
- **parameter it changes:** CL (`Q22`)
- **effect (θ per phenotype, categorical_fractional):** IM=0.0, NM=0.2197, PM=-0.1615
- **phenotype groups:** the paper's groups mapped to standard phenotypes

### Notes from the extraction

- genotype-stratified θ from Q100 (NIL) — AUC/Cmax inverted to a clearance effect (∝1/CL)
- reference genotype = IM (most-populous stratum; paper did not designate a reference — engineer may rebase)
- multi-gene table (2 PK genes): genotype→gene assignment unverified — θ may conflate co-tabulated genes
- θ target Q22 ('endoxifen_concentration') has no matching parameter in the drug's PK record — cannot attach

## Citation
Souwer ETD et al., Tamoxifen pharmacokinetics and pharmaco…, Breast cancer research and… (2023)
  ·  DOI: [10.1007/s10549-023-06925-z](https://doi.org/10.1007/s10549-023-06925-z)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [lead](drugs/toxin_lead/)</sub>
