<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Dinophysistoxin 1&quot;}]"></div>

# Dinophysistoxin 1

- **generic name:** Dinophysistoxin 1
- **T3DB:** [T3D4030](http://www.t3db.ca/toxins/T3D4030) · **PubChem:** [CID 6437058](https://pubchem.ncbi.nlm.nih.gov/compound/6437058)

## About

Dinophysistoxin 1 is found in mollusks. Dinophysistoxin 1 is a metabolite of Dinophysis fortii. Dinophysistoxin 1 is found in scallops and mussels. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** ingestion
- **Sources and uses:** Dinophysistoxin 1 is found in mollusks. Dinophysistoxin 1 is a metabolite of Dinophysis fortii. …
- **Mechanism of toxicity:** Dinophysistoxin 1 (DTX1) is the analogue of okadaic acid causing diarrheic shellfish poisoning (DSP) in humans shortly after the ingestion of contaminated seafood. DTX1 is able to disrupt the integrity of Caco-2 monolayer cells at concentrations above 50 nM. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4030">T3DB T3D4030</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 81720-10-7</small></p>

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
| 2026-11-10 02:13 | 7:41 | 0/0/0 | 0/0/0 | 0/0/0 | 252,612/6,137 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Braga_2021.pdf` | Braga AC et al., Invasive clams (Ruditapes philippinarum…, The Science of the total en… (2021) | popPK | 8 | [10.1016/j.scitotenv.2020.144887](https://doi.org/10.1016/j.scitotenv.2020.144887) | [33636784](https://pubmed.ncbi.nlm.nih.gov/33636784) | The paper reports species-specific toxicokinetics (accumulation/elimination) of dinophysistoxin-1 in clams, but specific numeric rate constants or half-lives are not present in the provided text extract. |
| `Li_2020.pdf` | Li A et al., Accumulation and esterification of diar…, Harmful algae (2020) | popPK | 8 | [10.1016/j.hal.2020.101797](https://doi.org/10.1016/j.hal.2020.101797) | [32307077](https://pubmed.ncbi.nlm.nih.gov/32307077) | The paper reports accumulation and esterification data for dinophysistoxin-1 in mussels, including a qualitative mention of reduced clearance, but specific numeric kinetic parameters are not present in the provided evidence. |

<sub>queue written 2026-11-10 02:12 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abal_2018 | irrelevant | 1 | 0 | The paper reports acute toxicity (LD50) and toxicity equivalence factors but does not provide quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for dinophysistoxin_1 in the provided text. |
| popPK | Boundy_2020 | irrelevant | 0 | 0 | The paper is a risk assessment regarding pectenotoxins in shellfish, and dinophysistoxin_1 is only mentioned as a co-occurring toxin without any toxicokinetic parameters reported for it. |
| popPK | Braga_2021 | relevant | 8 | 2 | The paper reports species-specific toxicokinetics (accumulation/elimination) of dinophysistoxin-1 in clams, but specific numeric rate constants or half-lives are not present in the provided text extract. |
| popPK | Cañete_2010 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity and dose-response variability for dinophysistoxin-1 in NG108-15 cells, but does not provide any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Ferron_2016 | not_relevant | 0 | 0 | The paper investigates phycotoxin (DTX-1) metabolism and toxicity, not the pharmacokinetics or pharmacodynamics of a pharmaceutical drug. |
| popPK | Figueroa_2020 | irrelevant | 0 | 0 | The study reports toxicity (LC50/EC50) and oxidative stress biomarkers, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for dinophysistoxin_1. |
| popPK | Figueroa_2022 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) and oxidative stress biomarker responses to DTX-1, but contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Gaillard_2023 | irrelevant | 0 | 0 | The paper reports toxicological effects (mortality, LC50, histopathology) of PTX2 and Dinophysis on fish larvae, but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for dinophysistoxin_1. |
| popPK | Hassoun_2021 | irrelevant | 0 | 0 | The paper is an occurrence study reporting that dinophysistoxin-1 concentrations were below the limit of detection in marine biota, with no toxicokinetic parameters reported. |
| popPK | Holmes_1991 | irrelevant | 0 | 0 | The paper describes an analytical method (bioscreen) for detecting toxins and reports enzymatic IC50 values, but provides no toxicokinetic parameters (half-life, clearance, etc.) for dinophysistoxin-1 in vivo. |
| popPK | Ji_2025 | irrelevant | 0 | 0 | The paper focuses on the isolation and structural identification of dinophysistoxin-1 diol ester derivatives and their cytotoxicity (IC50), reporting no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for dinophysistoxin-1. |
| popPK | Li_2020 | relevant | 8 | 1 | The paper reports accumulation and esterification data for dinophysistoxin-1 in mussels, including a qualitative mention of reduced clearance, but specific numeric kinetic parameters are not present in the provided evidence. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper reports environmental occurrence and partitioning behavior of dinophysistoxin_1 in water and sediments, not toxicokinetic parameters (half-life, clearance, etc.) in a biological organism. |
| popPK | Mafra_2015 | irrelevant | 0 | 0 | The paper reports static accumulation concentrations of dinophysistoxin_1 in mussels and octopuses but contains no quantitative kinetic parameters (e.g., half-life, rate constants, or clearance). |
| popPK | McGuire_2025 | irrelevant | 2 | 0 | The paper reports accumulation levels and clearance rates for the algal species in bivalves, but does not report specific toxicokinetic parameters (such as half-life, clearance, or Vd) for dinophysistoxin_1 disposition in the tissue. |
| popPK | Park_2023 | irrelevant | 0 | 0 | The paper is a comparative toxicity study (LD50 and histopathology) and does not report any quantitative toxicokinetic parameters (e.g., clearance, half-life, volume of distribution) for dinophysistoxin-1. |
| popPK | Park_2024 | irrelevant | 0 | 0 | The paper is a surveillance and exposure risk assessment study reporting toxin concentrations in seafood, but it contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for dinophysistoxin_1. |
| popPK | Suzuki_2018 | irrelevant | 0 | 0 | The paper reports LD50 values (lethal dose) and survival times, which are toxicodynamic outcomes, not quantitative toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Yuasa_1994 | irrelevant | 1 | 0 | The paper reports a time-course of cell proliferation (BrdU labeling) and dose-response data, but does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for dinophysistoxin-1. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdinophysistoxin_1%5D&body=Drug%3A%20dinophysistoxin_1%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dinophysistoxin_1/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
