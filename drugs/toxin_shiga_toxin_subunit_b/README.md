<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Shiga toxin subunit B&quot;}]"></div>

# Shiga toxin subunit B

- **generic name:** Shiga toxin subunit B
- **T3DB:** [T3D3129](http://www.t3db.ca/toxins/T3D3129) · **PubChem:** none

## About

Shiga toxin, also called verotoxin, is produced by Shigella dysenteriae. Shiga toxins belongs to the family of A-B5 toxins. The A subunit (32,000 molecular weight) is responsible for the toxic action of the protein, and the B subunit (7,700 molecular weight) is responsible for binding to a specific cell type.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Shiga toxin, also called verotoxin, is produced by Shigella dysenteriae.
- **Mechanism of toxicity:** Shiga toxin causes the glycosidase cleavage of ribosomal eucaryotic 28S rRNA, resulting in inhibition of protein synthesis in susceptible cells.
- **Health effects:** Shiga toxin is produced by Shigella dysenteriae. Shigella dysenteriae can cause shigellosis (bacillary dysentery).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3129">T3DB T3D3129</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 75757-64-1</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 16:35 | 3:02 | 0/0/0 | 0/0/0 | 0/0/0 | 58,472/1,647 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chauhan_2019 | irrelevant | 1 | 2 | This is a biochemical reconstitution/bioactivity study; the only numbers (yield, KD of A-B subunit interaction) are not toxicokinetic parameters, and the mouse lethality assay gives no kinetic values. |
| popPK | Fathi_2023 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/protection study using StxB as an antigen, with no kinetic parameters for shiga toxin subunit B; LD50 survival data are efficacy outcomes, not toxicokinetics. |
| popPK | Felegary_2021 | irrelevant | 0 | 0 | StxB is only a component of an experimental vaccine immunogen; the study reports antibody titers, protection and challenge outcomes, with no kinetic parameters (half-life, clearance, partitioning, etc.). |
| popPK | Felegary_2024 | irrelevant | 0 | 0 | StxB is only a vaccine antigen for producing IgY; the paper reports survival/mortality outcomes, not any toxicokinetic parameter for shiga_toxin_subunit_b. |
| popPK | Giaretta_2017 | irrelevant | 0 | 0 | This paper models aspirin pharmacodynamics, not shiga toxin subunit B toxicokinetics. |
| popPK | Hadi_2024 | irrelevant | 0 | 0 | This is a vaccine/antibody prophylaxis efficacy study (IgY against Stx/Shigella) with no toxicokinetic parameters (no half-life, clearance, partitioning, or disposition data) for shiga toxin subunit B, which appears only as a vaccine antigen component. |
| popPK | Johannes_2018 | irrelevant | 0 | 0 | This is a review of RNA delivery technologies; shiga toxin B-subunit appears only as a keyword/illustrative mention with no toxicokinetic parameters of its own. |
| popPK | Kim_2010 | irrelevant | 0 | 0 | Microbiology/virology study of toxin assembly in OMVs with no toxicokinetic parameters for shiga toxin B subunit. |
| popPK | Mondini_2015 | irrelevant | 0 | 0 | Efficacy study of an STxB-E7 cancer vaccine in mice with no kinetic parameters for shiga toxin subunit B reported. |
| popPK | Sharma_2012 | irrelevant | 0 | 0 | This is a recombinant protein production/optimization study in E. coli with no kinetic parameters of any kind. |
| PGx | Tosetto_2022 | not_relevant | 0 | 0 | Paper concerns aspirin pharmacodynamics, not shiga_toxin_subunit_b; no pharmacogenomic effect on a PK/PD parameter of that drug is reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bshiga_toxin_subunit_b%5D&body=Drug%3A%20shiga_toxin_subunit_b%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_shiga_toxin_subunit_b/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
