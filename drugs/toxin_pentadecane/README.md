<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Pentadecane&quot;}]"></div>

# Pentadecane

- **generic name:** Pentadecane
- **T3DB:** [T3D4782](http://www.t3db.ca/toxins/T3D4782) · **DrugBank:** [DB03715](https://go.drugbank.com/drugs/DB03715) · **PubChem:** [CID 12391](https://pubchem.ncbi.nlm.nih.gov/compound/12391)

## About

Pentadecane belongs to the family of Acyclic Alkanes. These are acyclic hydrocarbons consisting only of n carbon atoms and m hydrogen atoms where m=2*n + 2

- **Category:** Household Toxin, Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4782">T3DB T3D4782</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 629-62-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28897">ChEBI 28897</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 12:32 | 7:18 | 0/0/0 | 0/0/0 | 0/0/0 | 165,277/3,701 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2005.pdf` | Smith AQ et al., Rat tissue and blood partition coeffici…, International journal of to… (2005) | popPK | 5 | [10.1080/10915810590918698](https://doi.org/10.1080/10915810590918698) | [15981738](https://pubmed.ncbi.nlm.nih.gov/15981738) | Pentadecane partition coefficients are only predicted by regression from measured C8–C12 values, and no numeric pentadecane values appear in the evidence (any predictions likely in a table/figure not shown). |

<sub>queue written 2026-11-14 12:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashour_2009 | irrelevant | 0 | 0 | Pentadecane appears only as a minor component of an essential oil; no kinetic parameters for pentadecane are reported. |
| popPK | Cox_2002 | irrelevant | 3 | 2 | This is a VOC material-emission model for vinyl flooring; the partition and diffusion coefficients describe material/air transport, not toxicokinetic disposition of pentadecane in a living organism, and no organism or species exists in the study. |
| popPK | Han_2002 | irrelevant | 0 | 0 | Pentadecane appears only as a minor analytical component of aphid cuticle rinses with no kinetic parameters of any kind. |
| popPK | Han_2025 | irrelevant | 0 | 0 | Pentadecane appears only as a qualitatively identified constituent of a herbal syrup with no kinetic parameters, concentrations, or kinetics of any kind reported. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | Pentadecane appears only as a tested acaricide against mites with no kinetic, half-life or disposition parameter. |
| popPK | Kong_2026 | irrelevant | 0 | 0 | This is an organic synthesis paper; "pentadecane" appears only as part of the bicyclo[12.1.0]pentadecane skeleton name, with no toxicokinetic parameters for the substance pentadecane. |
| popPK | Lin_2012 | irrelevant | 0 | 0 | Pentadecane appears only as a minor named component of an essential oil with no toxicokinetic parameters; values are compositional percentages at most, not kinetic data. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | This is a natural-product chemistry paper; pentadecane appears only as part of a ring-system name, with no toxicokinetic parameters. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | Pentadecane appears only as a host volatile tested for insect electrophysiology/behavior; no toxicokinetic parameters of any kind are reported. |
| popPK | Ng_2019 | irrelevant | 1 | 1 | This is an aerosol oxidative-stress study where pentadecane is only an SOA precursor, with no toxicokinetic parameters for pentadecane reported. |
| popPK | Perumalsamy_2010 | irrelevant | 0 | 0 | Only LC50 toxicity data for mosquito larvae, no kinetic parameters for pentadecane. |
| popPK | Pumnuan_2022 | irrelevant | 0 | 0 | Pentadecane is merely identified as the main GC-MS constituent of a plant extract; no kinetic parameter (half-life, rate constant, partitioning, etc.) for pentadecane is reported. |
| PGx | Schnabel_2011 | not_relevant | 0 | 0 | Paper is about total synthesis of jatrophane diterpenes; pentadecane is only a scaffold name, no gene variant effect on PK/PD parameters. |
| popPK | Sharmin_2025 | irrelevant | 0 | 0 | Pentadecane appears only as a GC-MS-detected phytochemical in litchi seed extracts, with no kinetic parameters of any kind. |
| popPK | Smith_2005 | relevant | 5 | 2 | Pentadecane partition coefficients are only predicted by regression from measured C8–C12 values, and no numeric pentadecane values appear in the evidence (any predictions likely in a table/figure not shown). |
| popPK | Sutthanont_2010 | irrelevant | 0 | 0 | Pentadecane appears only as an oil composition percentage (26.08%), with no kinetic parameters. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | This is a phytochemistry/pharmacology review of the plant Peucedanum decursivum; pentadecane has no kinetic parameters here (possibly only as a volatile oil component, if at all). |
| popPK | Thomas_2024 | irrelevant | 0 | 0 | This is a headspace sampling analytical methods paper; pentadecane is merely one component of a synthetic VOC test blend, with no toxicokinetic parameters in vivo or in vitro. |
| popPK | Vivekanandhan_2024 | irrelevant | 0 | 0 | Pentadecane appears only as a GC-MS-identified constituent of an essential oil mixture tested via whole-oil toxicity; no kinetic parameters for pentadecane itself are reported. |
| popPK | de_2019 | irrelevant | 0 | 0 | Pentadecane is only a comparator chemical in a larvicidal efficacy study; no kinetic parameters of any kind are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentadecane%5D&body=Drug%3A%20pentadecane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pentadecane/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
