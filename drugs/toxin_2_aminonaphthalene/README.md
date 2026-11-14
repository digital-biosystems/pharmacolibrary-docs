<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;2-Aminonaphthalene&quot;}]"></div>

# 2-Aminonaphthalene

- **generic name:** 2-Aminonaphthalene
- **T3DB:** [T3D4213](http://www.t3db.ca/toxins/T3D4213) · **PubChem:** [CID 7057](https://pubchem.ncbi.nlm.nih.gov/compound/7057)

## About

2-Aminonaphthalene is an aromatic amine. It is used to make azo dyes. It is a known human carcinogen and has largely been replaced by less toxic compounds. 2-Aminonaphthalene is prepared by heating 2-naphthol with ammonium zinc chloride to 200-210 °C; or in the form of its acetyl derivative by heating 2-naphthol with ammonium acetate to 270-280 °C. …

- **Category:** Cigarette Toxin, Industrial/Workplace Toxin, Synthetic Toxin
- **Carcinogenicity:** IARC group 1, carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4213">T3DB T3D4213</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 91-59-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:27878">ChEBI 27878</a></small></p>

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
| 2026-11-11 02:52 | 5:51 | 0/0/0 | 0/0/0 | 0/0/0 | 124,457/3,048 | einfracz / qwen3.8-27b | 4 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bollard_2000 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for the dopamine agonist Z-7760, not 2-aminonaphthalene. |
| popPK | Cheung_1997 | irrelevant | 0 | 0 | The paper investigates CYP1A induction and Ah receptor binding (mechanism/toxicodynamics) rather than toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| PGx | Cheung_1997 | not_relevant | 0 | 0 | The paper investigates the biochemical properties of aminonaphthalenes (mutagenicity, CYP1A induction) but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cruickshank_2026 | irrelevant | 0 | 0 | The paper is a clinical study on HPV screening performance and does not report any toxicokinetic parameters for 2-aminonaphthalene. |
| popPK | Ge_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacodynamic evaluation (antiviral mechanism, inflammation, pathology) of 2-aminonaphthalene, reporting no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Hein_1993 | irrelevant | 3 | 0 | The paper reports in vitro enzyme kinetics (affinity/rates) for 2-aminonaphthalene metabolization but does not provide in vivo toxicokinetic parameters (half-life, clearance, partition coefficients) or quantitative values in the text. |
| popPK | Mazumder_2019 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying aromatic amines in urine and contains no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for 2-aminonaphthalene. |
| popPK | Mukai_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of (18)F-labeled oligodeoxynucleotides for drug delivery evaluation, and does not involve 2-aminonaphthalene. |
| popPK | Shadid_2021 | irrelevant | 0 | 0 | The paper is a review of antisense oligonucleotide (ASO) pharmacokinetics and does not mention 2-aminonaphthalene or provide any kinetic parameters for it. |
| popPK | Wada_2021 | irrelevant | 0 | 0 | The paper describes the development of bridged nucleic acid antisense oligonucleotides targeting PCSK9 and contains no data for 2-aminonaphthalene. |
| popPK | Zhu_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting the association between urinary concentrations of 2-aminonaphthalene and depression risk, containing no toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Zuo_2024 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of nicotine, not 2-aminonaphthalene, which is not mentioned in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2_aminonaphthalene%5D&body=Drug%3A%202_aminonaphthalene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2_aminonaphthalene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
