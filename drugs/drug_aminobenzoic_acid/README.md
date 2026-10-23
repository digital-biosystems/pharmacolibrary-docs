<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D02B&quot;,&quot;href&quot;:&quot;atc/D02B.md&quot;},{&quot;label&quot;:&quot;aminobenzoic acid&quot;}]"></div>

# aminobenzoic acid

- **generic name:** aminobenzoic acid
- **ATC codes:** `D02BA01`
- **DrugBank:** [DB02362](https://go.drugbank.com/drugs/DB02362) · **PubChem:** [CID 978](https://pubchem.ncbi.nlm.nih.gov/compound/978)
- **molar mass:** 137.136 g/mol (C7H7NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Aminobenzoic acid (PABA) was used as a topical sunscreen to protect against UV radiation and to treat photodermatitis. It is no longer used in sunscreens, having been withdrawn from approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q284959](https://www.wikidata.org/wiki/Q284959) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aminobenzoic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: pobA (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:16 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 79,399/1,866 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Song_1996.pdf` | Song DJ et al., Determination of p-aminobenzoic acid an…, Journal of chromatography.… (1996) | popPK | 7 | [10.1016/0378-4347(95)00434-3](https://doi.org/10.1016/0378-4347(95)00434-3) | [8925104](https://pubmed.ncbi.nlm.nih.gov/8925104) | Reports IV PK parameters (one-compartment model, half-lives) for PABA in rabbits, but lacks specific numeric values for clearance or volume of distribution. |

<sub>queue written 2026-10-07 22:16 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alig_1992 | irrelevant | 0 | 0 | The paper focuses on fibrinogen receptor antagonists; aminobenzoic acid is only mentioned as a structural moiety (m-aminobenzoic acid) within larger synthetic peptides, and no PK data for aminobenzoic acid itself is reported. |
| popPK | Bassetto_2019 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel blockers, not a pharmacokinetic study, and aminobenzoic acid is only a comparator for structural analogy. |
| popPK | Brain_2008 | irrelevant | 0 | 0 | The study investigates p-aminobenzoic acid as a biomarker of toxicity in *Lemna gibba* (duckweed) exposed to sulfamethoxazole, not as a pharmacokinetic subject drug in a mammalian or human system. |
| popPK | Butcher_2000 | irrelevant | 0 | 0 | The study focuses on the enzymatic down-regulation of NAT1 by p-aminobenzoic acid in cultured cells (in vitro) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bwijo_2003 | irrelevant | 0 | 0 | The study investigates drug resistance mechanisms in malaria parasites, not the pharmacokinetics of aminobenzoic acid in a host species. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | The study is an in vitro toxicology assessment of skin sensitization potential, not a pharmacokinetic study, and aminobenzoic acid is used only as a negative control. |
| popPK | Jiang_2023 | irrelevant | 0 | 0 | The study investigates the antibacterial mechanism of p-aminobenzoic acid on soybean pathogens, not its pharmacokinetic disposition parameters. |
| popPK | Jin_2026 | irrelevant | 0 | 0 | The paper is a chemical biology study characterizing new benzoxazole natural products (goondoxazoles) and their anthelmintic activity against parasites, containing no pharmacokinetic data for aminobenzoic acid. |
| popPK | Nakazono_1991 | irrelevant | 0 | 0 | The provided evidence contains only metadata from the GROBID software and no scientific content regarding aminobenzoic acid pharmacokinetics. |
| popPK | Richter_2015 | irrelevant | 0 | 0 | The paper describes a yeast bioassay for detecting marine toxins using xenobiotic receptors, not a pharmacokinetic study of aminobenzoic acid. |
| popPK | Rodríguez-Romero_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of iopamidol and p-aminohippuric acid, using p-aminobenzoic acid only as an internal standard. |
| popPK | Santos_2020 | irrelevant | 0 | 0 | The paper is an electrochemical oxidation study of pollutants (methyl red and 2,4-DNa) where aminobenzoic acid is merely mentioned as a potential byproduct, not a subject of pharmacokinetic analysis. |
| popPK | St_1999 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of vascular contractility in rats using 3-aminobenzamide and 3-aminobenzoic acid as modulators, not a pharmacokinetic study reporting disposition parameters for aminobenzoic acid. |
| popPK | Zhu_2022 | irrelevant | 0 | 0 | The study investigates the diffusion and antifungal efficacy of fungicides (including p-aminobenzoic acid) in pear fruit, not pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminobenzoic_acid%5D&body=Drug%3A%20aminobenzoic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aminobenzoic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
