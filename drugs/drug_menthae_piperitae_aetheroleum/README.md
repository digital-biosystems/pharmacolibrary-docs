<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;menthae piperitae aetheroleum&quot;}]"></div>

# menthae piperitae aetheroleum

- **generic name:** menthae piperitae aetheroleum
- **ATC codes:** `A03AX15`
- **DrugBank:** [DB11198](https://go.drugbank.com/drugs/DB11198) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Peppermint oil, the essential oil of peppermint, is used for functional gastrointestinal disorders. It is an approved medicine and is also widely used as a food ingredient and herbal remedy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q353391](https://www.wikidata.org/wiki/Q353391) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:56 | 4:53 | 0/0/0 | 0/0/0 | 0/0/0 | 172,667/5,057 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 5/16 | 21/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 59 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shulman_2025.pdf` | Shulman RJ et al., Randomized trial: Peppermint oil (menth…, British journal of clinical… (2025) | popPK | 9 | [10.1002/bcp.70097](https://doi.org/10.1002/bcp.70097) | [40390282](https://pubmed.ncbi.nlm.nih.gov/40390282) | The study reports PK parameters (Cmax, Tmax, clearance, Vd) for menthol (active ingredient of peppermint oil) in children, but specific numeric values are not provided in the text, only qualitative descriptions and relative comparisons. |
| `Shulman_2022.pdf` | Shulman RJ et al., Randomised trial: Peppermint oil (menth…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.15076](https://doi.org/10.1111/bcp.15076) | [34528282](https://pubmed.ncbi.nlm.nih.gov/34528282) | The study reports pharmacokinetic parameters (half-life, AUC) for menthol, the active ingredient in peppermint oil (menthae piperitae aetheroleum), in children, with specific half-life values provided in the abstract. |
| `Wu_2010.pdf` | Wu JF et al., Bioequivalence evaluation of menthol af…, Arzneimittel-Forschung (2010) | popPK | 8 | [10.1055/s-0031-1296315](https://doi.org/10.1055/s-0031-1296315) | [20863003](https://pubmed.ncbi.nlm.nih.gov/20863003) | The study reports PK parameters (Cmax, Tmax, t1/2, MRT, AUC) for menthol (the main component of peppermint oil/menthae piperitae aetheroleum) in dogs, but the specific numeric values for these parameters are not listed in the provided evidence, only the relative bioavailability percentage. |

<sub>queue written 2026-10-04T12:56:30.929973+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | AboulFotouh_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of candesartan cilexetil, not menthae_piperitae_aetheroleum. |
| popPK | Almansob_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of silver nanoparticles using Mentha piperita extract, containing no pharmacokinetic data for the essential oil. |
| popPK | Alonso_2024 | irrelevant | 0 | 0 | The study focuses on toxicology, repellency, and in silico ADME predictions for Mentha arvensis oil components, not quantitative pharmacokinetic parameters (CL, V, ka) for menthae_piperitae_aetheroleum. |
| popPK | Ashara_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and formulation of chloramphenicol, not menthae_piperitae_aetheroleum. |
| popPK | Burbott_1969 | irrelevant | 0 | 0 | The study investigates the metabolic turnover of monoterpenes in peppermint plants (botany/plant physiology), not the pharmacokinetics of the drug in an animal or human host. |
| popPK | Chumpitazi_2018 | irrelevant | 1 | 0 | This is a review article discussing physiological effects and safety, and it does not report original quantitative pharmacokinetic parameters (CL, V, ka) for peppermint oil. |
| popPK | Croteau_1982 | irrelevant | 0 | 0 | The paper describes the enzymatic compartmentation of l-menthone metabolism in peppermint leaves (plant physiology), not the pharmacokinetics of the drug menthae_piperitae_aetheroleum in a biological host. |
| popPK | Croteau_1991 | irrelevant | 0 | 0 | The paper is a review of plant biochemistry and monoterpene metabolism in mint species, not a pharmacokinetic study of the drug in an animal or human host. |
| popPK | Davis_2005 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of enzymes involved in the biosynthesis of menthol in peppermint plants, not the pharmacokinetics of menthae_piperitae_aetheroleum in an animal or human subject. |
| popPK | DeVault_1987 | irrelevant | 0 | 0 | The study investigates the effects of antireflux therapies on salivary function and does not involve menthae_piperitae_aetheroleum or its pharmacokinetics. |
| popPK | Dresser_2002 | irrelevant | 0 | 0 | The study investigates peppermint oil as a CYP3A4 inhibitor affecting the pharmacokinetics of the probe drug felodipine, rather than reporting the disposition parameters of peppermint oil itself. |
| popPK | Ferguson_2007 | irrelevant | 0 | 0 | The study focuses on the binding of pulegone and its metabolites to alpha2u-globulin in rat kidneys, not on the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Friedman_1991 | irrelevant | 0 | 0 | The paper is a clinical review of IBS treatment that mentions peppermint oil (menthae piperitae aetheroleum) only as a potential therapeutic agent without providing any pharmacokinetic data or quantitative disposition parameters. |
| popPK | Grigoleit_2005 | irrelevant | 2 | 0 | The paper describes general pharmacokinetic properties (absorption, elimination, metabolites) but does not report quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Han_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of peppermint oil for reducing colonic spasms and does not report any pharmacokinetic parameters. |
| popPK | Henderson_2021 | irrelevant | 0 | 0 | The study analyzes breath washout of peppermint oil volatiles (menthol, menthone, etc.) for standardization purposes and does not report pharmacokinetic parameters (CL, V, ka) for the specific drug menthae_piperitae_aetheroleum. |
| popPK | Hiki_2011 | irrelevant | 0 | 0 | The study evaluates L-menthol (NPO-11), which is a different chemical entity from menthae_piperitae_aetheroleum (peppermint oil), and does not report quantitative PK parameters for the target drug. |
| popPK | Hudecová_2024 | irrelevant | 0 | 0 | The study investigates the in vitro antibacterial and antibiofilm activity of essential oils against fish pathogens, not the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Johnson_2017 | irrelevant | 0 | 0 | The paper is a study on the bioenergetics and biosynthesis of essential oils in plant trichomes, not a pharmacokinetic study of menthae_piperitae_aetheroleum in an animal or human subject. |
| popPK | Kapila_1984 | irrelevant | 0 | 0 | The study investigates the relationship between salivary flow and swallow rate in healthy volunteers and does not report pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Kobayashi_2011 | irrelevant | 0 | 0 | The study assesses fluoride ingestion from dentifrice in children and does not involve the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Krueger_2004 | irrelevant | 0 | 0 | The paper is a general review of complementary and alternative medicine and does not report any quantitative pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Kusuma_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on fluoride and calcium ion release from dental varnish, not a pharmacokinetic study of menthae_piperitae_aetheroleum. |
| popPK | Lan_2021 | irrelevant | 0 | 0 | The study is a breath metabolomics analysis of peppermint oil components (menthol, limonene, etc.) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for menthae_piperitae_aetheroleum. |
| popPK | Liang_2024 | irrelevant | 0 | 0 | The study investigates the postharvest physiological effects of peppermint extract on pear fruit ripening, not the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Martinkus_1981 | irrelevant | 0 | 0 | The study is an in-vitro plant physiology investigation of enzyme kinetics and compartmentation in peppermint leaves, not a pharmacokinetic study of the drug in an animal or human host. |
| popPK | Mascher_2001 | irrelevant | 2 | 2 | The study reports PK parameters for menthol and carvone (constituents) rather than the total peppermint oil (menthae_piperitae_aetheroleum) as a single entity, and lacks compartmental parameters like CL or V. |
| popPK | Mascher_2002 | irrelevant | 2 | 2 | The study reports PK parameters for the specific components menthol and carvone, not for the whole drug entity 'menthae_piperitae_aetheroleum' (peppermint oil) as a single subject, and lacks compartmental parameters (CL, V) for the oil itself. |
| popPK | Mirosławski_2018 | irrelevant | 0 | 0 | The paper analyzes heavy metal content in peppermint leaves and infusions, not the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Mora-Flórez_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro digestion of menthol/luteolin powders, not on the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Morton_1995 | irrelevant | 0 | 0 | The paper is a clinical case series on contact sensitivity (allergy) to menthol and peppermint, reporting no pharmacokinetic parameters. |
| popPK | Peat_2016 | irrelevant | 0 | 0 | The paper describes an analytical method for menthol (a component of peppermint oil) and does not report population pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Pham_2023 | irrelevant | 2 | 0 | The study reports breath washout times for volatile terpenes (peppermint oil constituents) rather than quantitative pharmacokinetic parameters (CL, V, ka) for the specific drug entity menthae_piperitae_aetheroleum. |
| popPK | Rathod_2022 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the safety and efficacy of an essential oil blend for COVID-19 symptoms and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for menthae_piperitae_aetheroleum. |
| popPK | Ribeiro_2005 | irrelevant | 1 | 0 | The study uses menthae_piperitae_aetheroleum (peppermint oil/menthol) as a tracer to measure gluconeogenesis, reporting only urinary recovery amounts rather than quantitative PK parameters (CL, V, ka) for the drug itself. |
| popPK | Ringer_2005 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of plant enzymes involved in monoterpene biosynthesis, not the pharmacokinetics of menthae_piperitae_aetheroleum in an animal or human subject. |
| popPK | Rys_2022 | irrelevant | 0 | 0 | The paper investigates the herbicidal activity and physicochemical properties of peppermint oil nanoemulsions on plants, not the pharmacokinetics of the drug in an animal or human subject. |
| popPK | Sartaj_2026 | irrelevant | 0 | 0 | The study is a network pharmacology and molecular docking analysis of Mentha piperita phytochemicals, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the drug. |
| popPK | Sato_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 inhibition by natural medicines (including peppermint oil) and does not report pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Schwartz_1979 | irrelevant | 0 | 0 | The study investigates the effects of olfactory stimulation on muscle activity (EMG) and does not report any pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Setzer_2021 | irrelevant | 0 | 0 | The paper is an agricultural and phytochemical study on the essential oil composition of mountain mint varieties, containing no pharmacokinetic data or disposition parameters. |
| popPK | Shah_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating peppermint oil as a topical antispasmodic for colonoscopy visualization and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Shulman_2025 | relevant | 9 | 2 | The study reports PK parameters (Cmax, Tmax, clearance, Vd) for menthol (active ingredient of peppermint oil) in children, but specific numeric values are not provided in the text, only qualitative descriptions and relative comparisons. |
| popPK | Sindi_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, with peppermint oil serving only as an excipient in the formulation, not as the subject drug. |
| popPK | Somerville_1984 | irrelevant | 2 | 0 | The study reports qualitative/relative excretion data (peak levels, delay) for menthol (a metabolite/component) but does not provide quantitative PK parameters (CL, V, ka, t1/2) for the parent drug menthae_piperitae_aetheroleum. |
| popPK | Tyagi_2026 | irrelevant | 0 | 0 | The study focuses on Selegiline and Biochanin A, using peppermint oil only as an excipient, and does not report PK parameters for menthae_piperitae_aetheroleum. |
| popPK | Tyfa_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antibiofilm activity of essential oils against bacteria, containing no pharmacokinetic data for menthae_piperitae_aetheroleum. |
| popPK | Vaka_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nerve growth factor (NGF) using peppermint oil as a permeation enhancer, not the pharmacokinetics of peppermint oil itself. |
| popPK | Wacher_2002 | irrelevant | 0 | 0 | The study investigates the effect of peppermint oil on the pharmacokinetics of cyclosporine, not the pharmacokinetic parameters of peppermint oil itself. |
| popPK | Wilkinson_2021 | irrelevant | 0 | 0 | The study is a benchmarking protocol for breath analysis (GC-MS) and reports washout times, not pharmacokinetic parameters (CL, V, ka) for menthae_piperitae_aetheroleum. |
| popPK | Wu_2010 | relevant | 8 | 2 | The study reports PK parameters (Cmax, Tmax, t1/2, MRT, AUC) for menthol (the main component of peppermint oil/menthae piperitae aetheroleum) in dogs, but the specific numeric values for these parameters are not listed in the provided evidence, only the relative bioavailability percentage. |
| popPK | Xiao_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study evaluating essential oils against Staphylococcus aureus and does not report any pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Yu_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insect microsomal oxidation of various allelochemicals (including peppermint oil/menthol) and does not report pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Zhu_2019 | irrelevant | 0 | 0 | The study is an in vitro food science investigation of peppermint oil nanoemulsion stability and digestion, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for the drug. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Özakar_2024 | irrelevant | 0 | 0 | The study focuses on the preparation, stability, and in-vitro antimicrobial/antioxidant properties of peppermint oil nanoemulsions, reporting no pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
