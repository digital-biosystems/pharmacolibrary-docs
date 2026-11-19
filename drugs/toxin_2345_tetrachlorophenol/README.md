<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;2,3,4,5-Tetrachlorophenol&quot;}]"></div>

# 2,3,4,5-Tetrachlorophenol

- **generic name:** 2,3,4,5-Tetrachlorophenol
- **T3DB:** [T3D0177](http://www.t3db.ca/toxins/T3D0177) · **PubChem:** [CID 21013](https://pubchem.ncbi.nlm.nih.gov/compound/21013)

## About

2,3,4,5-Tetrachlorophenol is one of several chlorophenol isomers. It is a solid with a strong medicinal taste and odor, and small amounts can be tasted in water.

- **Category:** Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin
- **Route of exposure:** inhalation, oral, dermal, eye contact
- **Sources and uses:** Exposure may result from breathing contaminated air, ingesting contaminated water or foods, and skin or eye contact, particularly while treating wood.
- **Mechanism of toxicity:** Tetrachlorophenols decrease or block ATP production without blocking the electron transport chain. Thus the poisons uncouple phosphorylation from oxidation. …
- **Health effects:** Dermal exposure can cause corrosive skin damage.
- **Carcinogenicity:** Not directly listed by IARC, but related polychlorophenols are discussed, and combined exposures to polychlorophenols or to their sodium salts are classified as possibly carcinogenic to humans (Group 2B).
- **Minimal risk levels (ATSDR):** Acute Oral: 0.01 mg/kg/day (Rat) 
Intermediate Oral: 0.003 mg/kg/day (Rat)
- **Acute toxicity:** LD50: >2000 mg/kg (Dermal, Rabbit)
LD50: 400 mg/kg/day (Oral, Mouse)
- **Treatment:** In case of oral exposure, dilution may enhance absorption of phenol and should be avoided, but charcoal may be administered. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0177">T3DB T3D0177</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 25167-83-3</small></p>

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
| 2026-11-15 16:51 | 2:30 | 0/0/0 | 0/0/0 | 0/0/0 | 62,385/2,876 | einfracz / qwen3.8-flash-next | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahlborg_1978.pdf` | Ahlborg UG et al., Metabolism of tetrachlorophenols in the…, Archives of toxicology (1978) | popPK | 5 | [10.1007/BF00353280](https://doi.org/10.1007/BF00353280) | [580377](https://pubmed.ncbi.nlm.nih.gov/580377) | The paper reports on the metabolism and elimination time windows (e.g., 60% recovered within 72 h) for 2,3,4,5-tetrachlorophenol in rats, but does not provide specific kinetic parameters like rate constants or half-lives. |
| `Friesen_2007.pdf` | Friesen MC et al., Impact of the specificity of the exposu…, Epidemiology (Cambridge, Ma… (2007) | pd | 5 | [10.1097/01.ede.0000249558.18960.6b](https://doi.org/10.1097/01.ede.0000249558.18960.6b) | [17130686](https://www.ncbi.nlm.nih.gov/pubmed/17130686) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-11-15 16:50 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlborg_1978 | relevant | 5 | 2 | The paper reports on the metabolism and elimination time windows (e.g., 60% recovered within 72 h) for 2,3,4,5-tetrachlorophenol in rats, but does not provide specific kinetic parameters like rate constants or half-lives. |
| popPK | Babich_1987 | irrelevant | 0 | 0 | The study reports in vitro cytotoxicity (NR50), which is a measure of acute toxicity/lethality, not quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Demers_2006 | irrelevant | 0 | 0 | The paper is an epidemiological study assessing cancer outcomes from exposure, reporting no toxicokinetic parameters such as half-lives or clearance rates. |
| popPK | Dodd_2012 | irrelevant | 2 | 1 | The paper is a subchronic toxicity study reporting blood concentrations at single necropsy time points, not kinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Exon_1984 | irrelevant | 0 | 0 | The paper is a general review of chlorinated phenols with no specific quantitative kinetic parameters for 2345-tetrachlorophenol reported in the evidence. |
| popPK | Friesen_2007 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Hassen_2018 | irrelevant | 1 | 1 | The paper reports environmental biodegradation rates and toxicity values (LC50) for Pseudomonas bacteria in soil, not physiological toxicokinetic parameters in humans or animals. |
| popPK | Kukkonen_2002 | irrelevant | 3 | 10 | The paper reports lethal body residues (toxicity endpoint) for chlorophenols, not toxicokinetic parameters like half-life, clearance, or partition coefficients, and the specific substance 2,3,4,6-tetrachlorophenol is not explicitly analyzed with kinetic data. |
| popPK | Pekari_1991 | irrelevant | 1 | 0 | The paper reports kinetic parameters for 2,3,4,6-tetrachlorophenol, not 2,3,4,5-tetrachlorophenol (different isomer). |
| popPK | Schmied-Tobies_2021 | irrelevant | 0 | 0 | The paper reports urinary concentration levels in a human population survey (exposure/biomonitoring) without reporting any toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper identifies UGT isoforms involved in the metabolism of chlorophenols using in vitro assays (liver microsomes and recombinant enzymes) but does not report on human genetic variants (genotypes/phenotypes) or their specific effect on PK/PD parameters for the drug. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper reports the inhibitory effect of 2,3,4,5-tetrachlorophenol (a chemical/pollutant) on CYP enzyme activity (IC50/Ki) in vitro, not a pharmacogenomic interaction where a human gene variant alters the PK/PD of the compound. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2345_tetrachlorophenol%5D&body=Drug%3A%202345_tetrachlorophenol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2345_tetrachlorophenol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
