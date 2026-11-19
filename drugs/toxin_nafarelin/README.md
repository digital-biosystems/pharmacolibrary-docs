<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nafarelin&quot;}]"></div>

# Nafarelin

- **generic name:** Nafarelin
- **T3DB:** [T3D2855](http://www.t3db.ca/toxins/T3D2855) · **DrugBank:** [DB00666](https://go.drugbank.com/drugs/DB00666) · **PubChem:** [CID 25077649](https://pubchem.ncbi.nlm.nih.gov/compound/25077649)
- **groups:** approved, investigational

## About

Nafarelin is only found in individuals that have used or taken this drug. It is a potent synthetic agonist of gonadotropin-releasing hormone with 3-(2-naphthyl)-D-alanine substitution at residue 6. Nafarelin has been used in the treatments of central precocious puberty and endometriosis. [PubChem]Like GnRH, initial or intermittent administration of nafarelin stimulates release of the gonadotropins luteinizing hormone (LH) and follicle-stimulating hormone (FSH) from the pituitary gland, which in turn transiently increases production of estradiol in females and testosterone in both sexes. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** rapidly absorbed into the systemic circulation after intranasal administration. Bioavailability from a 400 &micro, g dose averaged 2.8% (range 1.2 to 5.6%). Not absorbed after oral administration.
- **Sources and uses:** For treatment of central precocious puberty (true precocious puberty, GnRH-dependent precocious precocity, complete isosexual precocity) in children of both sexes and for the treatment of endometriosis.
- **Mechanism of toxicity:** Like GnRH, initial or intermittent administration of nafarelin stimulates release of the gonadotropins luteinizing hormone (LH) and follicle-stimulating hormone (FSH) from the pituitary gland, which in turn transiently increases production of estradiol in females and testosterone in both sexes. However, with continuous daily administration, nafarelin continuously occupies the GnRH receptor, leading to a reversible down-regulation of the GnRH receptors in the pituitary gland and desensitization of the pituitary gonadotropes. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2855">T3DB T3D2855</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 76932-56-4</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nafarelin | parent | 1322.5 | C66H83N17O13 | PubChem | [25077649](https://pubchem.ncbi.nlm.nih.gov/compound/25077649) | Chu_1985 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Chu_1985_reference](drugs/toxin_nafarelin/Nafarelin_Chu1985_reference.md) | held back | 1-compartment, IV | 3 | Chu NI et al., Disposition of nafarelin acetate, a pot…, Drug metabolism and disposi… (1985) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nafarelin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GNRHR (target), GNRHR2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 05:46 | 3:29 | 1/0/0 | 0/0/0 | 0/0/0 | 92,000/7,133 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 37 matched, 37 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chu_1985.pdf` | Chu NI et al., Disposition of nafarelin acetate, a pot…, Drug metabolism and disposi… (1985) | popPK | 10 |  | [2865103](https://pubmed.ncbi.nlm.nih.gov/2865103) | Quantitative t1/2, clearance, and tissue distribution values for nafarelin are reported directly in the abstract. |
| `Haviv_1993.pdf` | Haviv F et al., Effect of N-methyl substitution of the…, Journal of medicinal chemis… (1993) | popPK | 5 | [10.1021/jm00055a007](https://doi.org/10.1021/jm00055a007) | [8381183](https://pubmed.ncbi.nlm.nih.gov/8381183) | Clearance (and thus kinetics) was determined for nafarelin-series analogues and the nafarelin parent, but no numeric values appear in the provided evidence. |

<sub>queue written 2026-11-14 05:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haviv_1993 | relevant | 5 | 1 | Clearance (and thus kinetics) was determined for nafarelin-series analogues and the nafarelin parent, but no numeric values appear in the provided evidence. |
| popPK | Mittapelly_2024 | relevant | 4 | 2 | Nafarelin is one of four subject drugs in a mechanistic in vitro release model for PLGA implants, but it is an in vitro release (not classic toxicokinetic) fit and no numeric parameter values appear in the evidence, apparently living in tables/figures not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnafarelin%5D&body=Drug%3A%20nafarelin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nafarelin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 05:45 UTC</sub>
