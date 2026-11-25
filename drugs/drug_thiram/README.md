<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;thiram&quot;}]"></div>

# thiram

- **generic name:** thiram
- **ATC codes:** `P03AA05`
- **DrugBank:** [DB13245](https://go.drugbank.com/drugs/DB13245) · **PubChem:** none
- **molar mass:** 240.433 g/mol (C6H12N2S4) — DrugBank
- **groups:** approved

## About

Thiram is an organosulfur compound used as a fungicide and ectoparasiticide to treat conditions such as scabies in humans. It is administered topically, often as a kit or applied directly to the skin. The drug is widely used for agricultural purposes including seed protection and as an animal repellent.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416572](https://www.wikidata.org/wiki/Q416572), [Wikipedia](https://en.wikipedia.org/wiki/Thiram?oldid=1380708184) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Zhu_2022_Alternaria_alternata_mycelial_growth_inhibition](drugs/drug_thiram/pd_Zhu_2022_Alternaria_alternata_mycelial_growth_inhibition.md) | Alternaria alternata mycelial growth inhibition ← thiram · direct sigmoid Emax (Hill) effect | — | Zhu GY et al., Peel Diffusion and Antifungal Efficacy…, Journal of fungi (Basel, Sw… (2022) | [10.3390/jof8050547](https://doi.org/10.3390/jof8050547) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:52 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,024/157 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aguirrezabalaga_1994 | irrelevant | 0 | 0 | The study focuses on the genotoxicity of thiram in Drosophila using the SMART test, not on pharmacokinetic parameters. |
| PGx | Aguirrezabalaga_1994 | not_relevant | 0 | 0 | The paper studies the genotoxicity of thiram in Drosophila and genotype-dependent sensitivity to another compound (HMPA), but does not report pharmacokinetic or pharmacodynamic parameters of thiram affected by genetic variants. |
| popPK | Alves_2013 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on earthworms measuring toxicity endpoints (LC50, EC50) rather than pharmacokinetic parameters for thiram. |
| PGx | Alves_2013 | not_relevant | 0 | 0 | The paper assesses the ecotoxicological effects of thiram on earthworms, not pharmacogenomic variations in human PK/PD parameters. |
| popPK | Budge_2001 | irrelevant | 0 | 0 | The paper is an agricultural study on fungicide compatibility with biocontrol agents and does not contain any pharmacokinetic data for thiram. |
| PGx | Budge_2001 | not_relevant | 0 | 0 | The paper investigates the effect of fungicides on biological control agents, not human pharmacogenomics. |
| popPK | Fan_2024 | irrelevant | 0 | 0 | The paper is a fungicide screening study on fungal pathogens of walnut and reports efficacy data, not pharmacokinetic parameters for thiram in an animal or human host. |
| PGx | Fan_2024 | not_relevant | 0 | 0 | The paper discusses the efficacy of fungicides against a fungal pathogen in plants, containing no human pharmacogenomic data. |
| popPK | Glynn_2008 | irrelevant | 0 | 0 | The study evaluates fungicide efficacy against fungal pathogens and does not contain pharmacokinetic parameters for thiram. |
| PGx | Glynn_2008 | not_relevant | 0 | 0 | The paper evaluates fungicide efficacy in plants/organisms, not human pharmacogenomics of thiram. |
| popPK | Iljin_2009 | irrelevant | 0 | 0 | The paper is an in-vitro screening and mechanistic study of thiram as a cancer cell growth inhibitor and does not report pharmacokinetic disposition parameters. |
| PGx | Iljin_2009 | not_relevant | 0 | 0 | The paper investigates the anticancer activity of thiram and disulfiram but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lalancette_2020 | irrelevant | 0 | 0 | The paper is a plant pathology study on fungicide efficacy in peaches and does not contain pharmacokinetic data for thiram in a biological host. |
| PGx | Lalancette_2020 | not_relevant | 0 | 0 | The paper discusses agricultural fungicide efficacy for plant disease management and does not report on human pharmacogenomics, pharmacokinetics, or pharmacodynamics. |
| popPK | Lowy_1980 | irrelevant | 0 | 0 | This is a toxicology study focused on dose-response modeling and organ weight/metabolite changes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Lowy_1980 | not_relevant | 0 | 0 | The paper is a toxicology study on rats determining a no-effect level and does not involve human genetic variants or pharmacogenomics. |
| popPK | Martins_2007 | irrelevant | 0 | 0 | The study investigates the toxicological effect of thiram on Daphnia magna behavior (phototaxis) and does not report any pharmacokinetic disposition parameters. |
| PGx | Martins_2007 | not_relevant | 0 | 0 | The paper investigates toxicological bioindicators in Daphnia magna and does not address human pharmacogenomics or genetic variants affecting the PK/PD of thiram. |
| popPK | Milenkovski_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicology study measuring fungal and bacterial toxicity endpoints, not a pharmacokinetic study of thiram disposition. |
| PGx | Milenkovski_2010 | not_relevant | 0 | 0 | The paper studies the toxicity of fungicides to bacterial communities, not human pharmacogenomics. |
| popPK | Polemi_2021 | irrelevant | 0 | 0 | The paper analyzes in vitro toxicology and exposure biomarkers, not in vivo pharmacokinetics, and contains no quantitative disposition parameters for thiram. |
| PGx | Polemi_2021 | not_relevant | 0 | 0 | The paper analyzes chemical exposure disparities and in vitro toxicity of thiram as an environmental chemical, not the pharmacogenomics of thiram as a drug. |
| popPK | Putnam_2017 | irrelevant | 0 | 0 | The study is an in vitro metabolomics/toxicology assay in fish cell lines and does not report pharmacokinetic parameters like clearance or volume for thiram. |
| PGx | Putnam_2017 | not_relevant | 0 | 0 | The paper studies metabolomic fingerprints in fish cell lines exposed to thiram and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Staal_2018 | irrelevant | 0 | 0 | This is a zebrafish embryo developmental toxicity (skeletal malformation) study; thiram is a test compound with dose-response/BMC data, not a pharmacokinetic study with CL/V/ka parameters. |
| popPK | Vasamsetti_2022 | irrelevant | 0 | 0 | This is a zebrafish embryo developmental toxicity study reporting LC50/EC50 values, not pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) for thiram. |
| popPK | Wrobel_2025 | irrelevant | 0 | 0 | In-vitro study of pesticide effects on bovine cervical smooth muscle contractions; no PK parameters for thiram. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study investigates a fungal pathogen and fungicide sensitivity, not the pharmacokinetics of the drug thiram. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper describes the identification of a new fungal pathogen and its sensitivity to fungicides, with no human pharmacogenomics or PK/PD parameters involved. |
| popPK | Zhu_2022 | irrelevant | 1 | 2 | This is a plant/fruit diffusion and antifungal efficacy study in pears, not a pharmacokinetic study; no CL, V, ka, half-life, or PK model for thiram is reported (only diffusion percentages and degradation rates). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiram%5D&body=Drug%3A%20thiram%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_thiram/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
