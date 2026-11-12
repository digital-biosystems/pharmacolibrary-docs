<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Dihydrothymine&quot;}]"></div>

# Dihydrothymine

- **generic name:** Dihydrothymine
- **T3DB:** [T3D4332](http://www.t3db.ca/toxins/T3D4332) · **PubChem:** [CID 93556](https://pubchem.ncbi.nlm.nih.gov/compound/93556)

## About

Dihydrothymine is an intermediate breakdown product of thymine. Dihydropyrimidine dehydrogenase catalyzes the reduction of thymine to 5, 6-dihydrothymine then dihydropyrimidinase hydrolyzes 5, 6-dihydrothymine to N-carbamyl-b-alanine. Finally, beta-ureidopropionase catalyzes the conversion of N-carbamyl-b-alanine to beta-alanine. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Mechanism of toxicity:** Dihydropyrimidine dehydrogenase catalyzes the reduction of thymine to 5, 6-dihydrothymine then dihydropyrimidinase hydrolyzes 5, 6-dihydrothymine to N-carbamyl-b-alanine. Finally, beta-ureidopropionase catalyzes the conversion of N-carbamyl-b-alanine to beta-alanine. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4332">T3DB T3D4332</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 696-04-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:27468">ChEBI 27468</a></small></p>

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
| 2026-11-10 01:59 | 6:02 | 0/0/0 | 0/0/0 | 0/0/0 | 92,376/3,954 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2024.pdf` | van den Wildenberg SAH et al., Partial protein binding of uracil and t…, Journal of pharmaceutical a… (2024) | pgx | 8 | [10.1016/j.jpba.2024.116381](https://doi.org/10.1016/j.jpba.2024.116381) | [39067280](https://www.ncbi.nlm.nih.gov/pubmed/39067280) | metadata signals extractable PGX data (DPYD, PK/PD-context) |
| `Duley_2018.pdf` | Duley JA et al., Preliminary Evidence for Enhanced Thymi…, Therapeutic drug monitoring (2018) | pgx | 5 | [10.1097/FTD.0000000000000532](https://doi.org/10.1097/FTD.0000000000000532) | [29846282](https://www.ncbi.nlm.nih.gov/pubmed/29846282) | metadata signals extractable PGX data (DPYD) |

<sub>queue written 2026-11-10 01:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akamatsu_2004 | irrelevant | 0 | 0 | The paper reports radiation chemistry decomposition products (G-values) of thymine in the solid state, not toxicokinetic parameters of dihydrothymine in a biological system. |
| popPK | Conti_1994 | irrelevant | 2 | 0 | The paper describes an HPLC method for separating dihydrothymine (a metabolite) from thymidine, and the abstract mentions that pharmacokinetics are being used for modeling but provides no specific numeric kinetic parameters (t1/2, Cl, etc.) for dihydrothymine in the text. |
| popPK | DHam_1999 | irrelevant | 2 | 0 | The paper reports enzymatic excision kinetics (Vmax/Km) for DNA repair enzymes acting on dihydrothymine-modified oligonucleotides, which is not toxicokinetic disposition (absorption, distribution, metabolism, excretion) of the substance in an organism. |
| popPK | Duley_2016 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PGx | Duley_2016 | not_relevant | 0 | 0 | The study examines the pharmacokinetics of thymine, a precursor/metabolite, rather than a pharmacogenomic effect of dihydrothymine. |
| PGx | Duley_2018 | not_relevant | 0 | 0 | The paper discusses thymine absorption and fluoropyrimidine toxicity, not the pharmacokinetics or pharmacodynamics of dihydrothymine. |
| popPK | Hanrath_2025 | irrelevant | 0 | 0 | The paper uses dihydrothymine (DHT) solely as an endogenous biomarker to predict 5-FU exposure and does not report kinetic parameters for dihydrothymine as the subject substance. |
| PGx | Hanrath_2025 | not_relevant | 0 | 0 | The study investigates thymine as a biomarker for 5-FU exposure but does not report on the pharmacokinetics or pharmacodynamics of the drug dihydrothymine itself. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper is a metabolomics study identifying dihydrothymine as a differential metabolite associated with acne and insulin resistance, containing no toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Helsby_2020 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PGx | Helsby_2020 | not_relevant | 0 | 0 | The paper discusses fluoropyrimidine toxicity and thymine challenge, but does not report pharmacogenomic effects on the PK/PD of dihydrothymine. |
| PGx | Helsby_2025 | not_relevant | 0 | 0 | The paper investigates DPD enzyme activity (via THY/DHT ratio) to predict 5-fluorouracil toxicity, not the pharmacokinetics or pharmacodynamics of dihydrothymine itself. |
| popPK | Hishinuma_2017 | irrelevant | 0 | 0 | The study characterizes the enzyme dihydropyrimidinase (DHP) in vitro, not the toxicokinetics of the substance dihydrothymine. |
| PGx | Hishinuma_2017 | not_relevant | 1 | 0 | The paper characterizes the enzymatic kinetics of dihydropyrimidinase variants regarding the catabolism of pyrimidines and fluoropyrimidines, not the pharmacokinetic or pharmacodynamic parameters of a drug named dihydrothymine. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper discusses dihydrothymine as a biomarker of pyrimidine metabolism deficiency, not as a drug subject to pharmacokinetic or pharmacodynamic changes by a gene variant. |
| popPK | Miersch_1987 | irrelevant | 0 | 0 | The paper studies the enzymatic activity and biological effects of dihydrothymine analogues, not its toxicokinetic parameters (e.g., half-life, clearance, distribution). |
| PGx | Ostapowicz_2012 | not_relevant | 1 | 0 | The paper is a review of methods for DPD activity determination and does not report specific pharmacokinetic or pharmacodynamic parameter changes for dihydrothymine resulting from gene variants. |
| popPK | Swinehart_1975 | irrelevant | 0 | 0 | The paper discusses radiation chemistry of thymine and dihydrothymine-like products in DNA (phage and E. coli), not the toxicokinetics of dihydrothymine as a substance in a biological system. |
| popPK | Van_1996 | irrelevant | 0 | 0 | The paper studies the reverse reaction (reduction of thymine to dihydrothymine) rather than the disposition or elimination kinetics of dihydrothymine as a toxic substance. |
| PGx | Van_2000 | not_relevant | 0 | 0 | The study focuses on dihydropyrimidine dehydrogenase (DPD) and thymine, not the drug dihydrothymine. |
| PGx | van_2024 | not_relevant | 0 | 0 | The paper discusses the analytical method (protein binding and precipitation) for quantifying DHT for DPD phenotyping, not a pharmacogenomic effect of a gene variant on DHT's PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydrothymine%5D&body=Drug%3A%20dihydrothymine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dihydrothymine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
