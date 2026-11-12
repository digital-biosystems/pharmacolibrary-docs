<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Cylindrospermopsin&quot;}]"></div>

# Cylindrospermopsin

- **generic name:** Cylindrospermopsin
- **T3DB:** [T3D4232](http://www.t3db.ca/toxins/T3D4232) · **PubChem:** [CID 42628600](https://pubchem.ncbi.nlm.nih.gov/compound/42628600)

## About

Cylindrospermopsin (abbreviated to CYN, or CYL) is a cyanotoxin produced by a variety of freshwater cyanobacteria. CYN is a polycyclic uracil derivative containing guanidino and sulfate groups. It is also zwitterionic, making it highly water soluble. …

- **Category:** Bacterial Toxin, Natural Toxin
- **Sources and uses:** Cylindrospermopsin (abbreviated to CYN, or CYL) is a cyanotoxin produced by a variety of freshwater cyanobacteria.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4232">T3DB T3D4232</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 143545-90-8</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Norris_2001_reference](drugs/toxin_cylindrospermopsin/Cylindrospermopsin_Norris2001_reference.md) | — | 1-compartment (no model) | 0 | Norris RL et al., Distribution of 14C cylindrospermopsin…, Environmental toxicology (2001) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Froscio_2001_CYN](drugs/toxin_cylindrospermopsin/pd_Froscio_2001_CYN.md) | protein synthesis inhibition ← cylindrospermopsin · direct sigmoid Emax (Hill) effect | — | Froscio SM et al., Cell-free protein synthesis inhibition…, Environmental toxicology (2001) | [10.1002/tox.1050](https://doi.org/10.1002/tox.1050) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Moosova_2019_IL_6](drugs/toxin_cylindrospermopsin/pd_Moosova_2019_IL_6.md) | interleukin-6 ← cylindrospermopsin · stimulation effect | — | Moosova Z et al., Immunomodulatory effects of cyanobacter…, Chemosphere (2019) | [10.1016/j.chemosphere.2019.03.143](https://doi.org/10.1016/j.chemosphere.2019.03.143) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Moosova_2019_NO](drugs/toxin_cylindrospermopsin/pd_Moosova_2019_NO.md) | nitric oxide ← cylindrospermopsin · stimulation effect | — | Moosova Z et al., Immunomodulatory effects of cyanobacter…, Chemosphere (2019) | [10.1016/j.chemosphere.2019.03.143](https://doi.org/10.1016/j.chemosphere.2019.03.143) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Moosova_2019_ROS](drugs/toxin_cylindrospermopsin/pd_Moosova_2019_ROS.md) | reactive oxygen species ← cylindrospermopsin · stimulation effect | — | Moosova Z et al., Immunomodulatory effects of cyanobacter…, Chemosphere (2019) | [10.1016/j.chemosphere.2019.03.143](https://doi.org/10.1016/j.chemosphere.2019.03.143) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Moosova_2019_TNF](drugs/toxin_cylindrospermopsin/pd_Moosova_2019_TNF.md) | TNF-α ← cylindrospermopsin · stimulation effect | — | Moosova Z et al., Immunomodulatory effects of cyanobacter…, Chemosphere (2019) | [10.1016/j.chemosphere.2019.03.143](https://doi.org/10.1016/j.chemosphere.2019.03.143) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 06:40 | 29:31 | 0/1/0 | 2/0/0 | 0/0/0 | 589,769/18,416 | einfracz / qwen3.8-27b | 17 | 2/15 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 65 matched, 65 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Norris_2001.pdf` | Norris RL et al., Distribution of 14C cylindrospermopsin…, Environmental toxicology (2001) | popPK | 8 |  | [11769247](https://pubmed.ncbi.nlm.nih.gov/11769247) | The paper reports quantitative recovery percentages in urine, feces, and liver over time, indicating disposition kinetics, with values directly present in the abstract. |
| `de_2021.pdf` | de Cássio da Silva R et al., Evidence of cylindrospermopsin uptake a…, Journal of fish biology (2021) | popPK | 5 | [10.1111/jfb.14830](https://doi.org/10.1111/jfb.14830) | [34159594](https://pubmed.ncbi.nlm.nih.gov/34159594) | The paper describes uptake and clearance experiments but the provided evidence lacks specific quantitative kinetic parameters (half-lives, rate constants) and only mentions qualitative findings. |
| `Hercog_2020.pdf` | Hercog K et al., Application of advanced HepG2 3D cell m…, Environmental pollution (Ba… (2020) | pgx | 7 | [10.1016/j.envpol.2020.114965](https://doi.org/10.1016/j.envpol.2020.114965) | [32559695](https://www.ncbi.nlm.nih.gov/pubmed/32559695) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Žegura_2011.pdf` | Žegura B et al., Cylindrospermopsin induced DNA damage a…, Toxicon : official journal… (2011) | pgx | 7 | [10.1016/j.toxicon.2011.08.005](https://doi.org/10.1016/j.toxicon.2011.08.005) | [21867723](https://www.ncbi.nlm.nih.gov/pubmed/21867723) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |

<sub>queue written 2026-11-11 06:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdallah_2021 | irrelevant | 0 | 0 | The paper is a review of cyanotoxin contamination in food and does not report quantitative toxicokinetic parameters for cylindrospermopsin. |
| popPK | Acs_2013 | irrelevant | 0 | 0 | The paper is an ecotoxicological study assessing the effects of cyanobacterial extracts on aquatic species and explicitly states that cylindrospermopsins were not detected in the tested isolates, providing no kinetic parameters for the substance. |
| popPK | Adamski_2020 | irrelevant | 0 | 0 | The paper is a review focused on cyanobacterial producers and catalytic decomposition, providing no quantitative toxicokinetic parameters for cylindrospermopsin. |
| popPK | Ahari_2022 | irrelevant | 0 | 0 | The paper is a review of the mouse bioassay method for detecting cyanotoxins and does not report specific quantitative toxicokinetic parameters (e.g., half-life, clearance) for cylindrospermopsin. |
| popPK | Al-Aream_2026 | irrelevant | 0 | 0 | The paper reports dose-dependent cardiotoxicity outcomes and molecular changes but contains no quantitative toxicokinetic parameters such as half-life, clearance, or bioaccumulation rates. |
| popPK | Banfalvi_2017 | irrelevant | 0 | 0 | The paper is a guest editorial describing general cell death mechanisms and does not report any quantitative toxicokinetic parameters for cylindrospermopsin. |
| popPK | Banker_2001 | irrelevant | 0 | 0 | The paper reports toxicological potency (LD50) for cylindrospermopsin and its analogs in mice but provides no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Buratti_2017 | irrelevant | 0 | 0 | The paper is a review of cyanotoxins including cylindrospermopsin, but the provided evidence contains no quantitative kinetic parameter values (half-life, clearance, etc.) for the substance. |
| popPK | Burch_2008 | irrelevant | 0 | 0 | The paper discusses regulatory guidelines and the need for research but does not report any quantitative toxicokinetic parameters for cylindrospermopsin. |
| popPK | Cartmell_2017 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic toxicity study of synthetic analogues and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for cylindrospermopsin. |
| popPK | Casas-Rodriguez_2022 | irrelevant | 0 | 0 | The paper is a review focusing on the endocrine disruption mechanisms of microcystins and cylindrospermopsin, reporting no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for cylindrospermopsin. |
| popPK | Cascajosa-Lira_2026 | relevant | 5 | 2 | The paper reports in silico predictions for plasma clearance and half-life, and qualitative in vitro metabolism data, but specific numeric kinetic parameter values are not clearly present in the provided evidence text (only ranges and qualitative descriptions). |
| popPK | Chernoff_2018 | irrelevant | 0 | 0 | The paper reports subchronic toxicity and histopathology outcomes in mice but contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for cylindrospermopsin. |
| popPK | Chong_2002 | irrelevant | 2 | 0 | The paper reports only LC50 values (toxicity) and uptake mechanisms in hepatocytes, lacking specific quantitative toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Evans_2019 | irrelevant | 0 | 0 | The paper reports in vitro toxicity mechanisms (oxidative stress, apoptosis) of synthetic analogues, but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for cylindrospermopsin. |
| popPK | Froscio_2001 | irrelevant | 0 | 0 | The paper describes a cell-free protein synthesis inhibition assay (in vitro mechanism of toxicity) and does not report quantitative toxicokinetic parameters such as half-life, clearance, or rate constants for cylindrospermopsin. |
| popPK | González-Blanco_2020 | irrelevant | 0 | 0 | The paper focuses on isolation protocols and acute cytotoxicity (viability) in HepG2 cells, reporting no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for cylindrospermopsin. |
| popPK | Greer_2017 | irrelevant | 0 | 0 | The paper reports static concentrations of cyanotoxins in fish tissues but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for cylindrospermopsin. |
| popPK | Gutiérrez-Praena_2013 | irrelevant | 0 | 0 | The paper is a review on the bioaccumulation and reduction of cyanotoxins in food via cooking techniques, containing no quantitative toxicokinetic parameters for cylindrospermopsin. |
| popPK | Hawkins_1997 | irrelevant | 0 | 0 | The paper reports an LD50 (acute toxicity) and concentration data but lacks any quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution for cylindrospermopsin. |
| PGx | Hercog_2020 | not_relevant | 0 | 0 | The paper evaluates the genotoxic effects of the cyanotoxin cylindrospermopsin in a 3D HepG2 model and its impact on gene expression, but does not investigate the influence of genetic variants (pharmacogenomics) on the drug's PK or PD parameters. |
| popPK | Humpage_2003 | irrelevant | 0 | 0 | The paper is a chronic toxicity study determining a NOAEL and organ weights, but it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) for cylindrospermopsin. |
| PGx | Kittler_2016 | not_relevant | 0 | 0 | The paper studies in vitro metabolism in cell lines and tissue fractions and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Konstantinou_2020 | irrelevant | 0 | 0 | The paper reports that cylindrospermopsin was not detected in the cyanobacterial strains and contains no toxicokinetic or pharmacokinetic parameters for the substance. |
| popPK | Lindsay_2006 | irrelevant | 0 | 0 | The study reports acute toxicity (LC50) data for an interaction effect, not quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Lyon-Colbert_2018 | irrelevant | 0 | 0 | The paper is a systematic literature review regarding the toxigenicity of Aphanizomenon flos-aquae and does not report any original quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for cylindrospermopsin. |
| popPK | Massa_2024 | irrelevant | 1 | 0 | The paper reports CYN accumulation in plant tissues (lettuce) and compares it to WHO intake guidelines, but does not measure or report toxicokinetic parameters (half-life, clearance, etc.) for the substance in animals or humans. |
| popPK | Massa_2025 | irrelevant | 0 | 0 | The paper reports static accumulation of cylindrospermopsin in plants (spinach and radish) after soil application, which does not constitute toxicokinetic parameters for an organism (human or animal). |
| popPK | McKindles_2019 | irrelevant | 0 | 0 | The paper reports environmental monitoring of toxin concentrations and gene presence in Lake Winnipeg water, not toxicokinetic parameters in any biological organism. |
| popPK | Metcalf_2002 | irrelevant | 0 | 0 | The paper reports toxicity (LC50) and mortality in brine shrimp but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Metcalf_2012 | irrelevant | 0 | 0 | The paper reports environmental concentrations of cyanotoxins in desert samples and a risk assessment based on microcystin exposure, containing no toxicokinetic parameters for cylindrospermopsin. |
| popPK | Moosova_2019 | irrelevant | 0 | 0 | The paper reports immunomodulatory effects (cytokine production, signaling) in murine macrophages but contains no toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Moraes_2018 | irrelevant | 0 | 0 | The paper is a toxicological study focusing on renal tissue damage and histology, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for cylindrospermopsin. |
| PGx | Niture_2025 | not_relevant | 0 | 0 | The paper studies the effects of cylindrospermopsin exposure on cell viability and gene expression in neuroblastoma cells, but it does not report any pharmacogenomic study (gene variant/genotype) affecting its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Norris_2002 | irrelevant | 0 | 0 | The paper reports survival rates and qualitative GSH changes but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for cylindrospermopsin. |
| popPK | Pichardo_2017 | relevant | 4 | 5 | The paper is a review that cites specific in vitro toxicokinetic parameters for cylindrospermopsin, such as intestinal absorption percentages (2.5% and 20.5%) and notes that permeability coefficients correlate with &lt;20% in vivo absorption, but it lacks detailed numeric tables of clearance, half-life, or partition coefficients. |
| popPK | Plata-Calzado_2024 | irrelevant | 3 | 5 | The primary subject of the study is anatoxin-a; cylindrospermopsin is included only as a comparative control for cytotoxicity and uptake in THP-1 cells (in vitro), providing limited comparative kinetic/cellular uptake data rather than standard toxicokinetic parameters for CYN. |
| popPK | Prieto_2018 | irrelevant | 0 | 0 | The paper reports an analytical method for detecting cylindrospermopsin in lettuce and its accumulation in plant tissues, containing no toxicokinetic parameters (e.g., half-life, clearance) for humans or animals. |
| popPK | Rabelo_2021 | irrelevant | 0 | 0 | The paper reports DNA damage and genotoxicity endpoints (comet assay/micronuclei) but contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Rajput_2026 | irrelevant | 0 | 0 | This is a review of toxicity mechanisms and risk in dietary supplements that does not report or extract any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for cylindrospermopsin. |
| popPK | Rasmussen_2008 | irrelevant | 0 | 0 | The paper reports on the antibacterial and antiparasitic effects (MIC, LC50) of cylindrospermopsin on bacteria and protozoa, containing no toxicokinetic parameters such as half-life, clearance, or partition coefficients for mammalian or human subjects. |
| popPK | Rasooly_2026 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity assays and stability data, but provides no quantitative toxicokinetic parameters (half-life, clearance, rate constants, etc.) for cylindrospermopsin. |
| popPK | Roy-Lachapelle_2017 | irrelevant | 0 | 0 | The paper is an analytical study quantifying cyanotoxin concentrations in dietary supplements, not a toxicokinetic study; cylindrospermopsin was not detected and no kinetic parameters (half-life, clearance, etc.) are reported. |
| popPK | Ruebhart_2011 | irrelevant | 0 | 0 | The paper studies the bioassay for saxitoxin (STX), and cylindrospermopsin is only mentioned as a substance the test organism is tolerant to, with no kinetic parameters reported. |
| popPK | Runnegar_2002 | irrelevant | 0 | 0 | The paper reports in vitro mechanisms of toxicity (protein synthesis inhibition) but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for cylindrospermopsin. |
| popPK | Rücker_2007 | irrelevant | 0 | 0 | The paper reports environmental concentrations of cylindrospermopsin in lakes, not toxicokinetic parameters. |
| popPK | Saha_2022 | irrelevant | 1 | 0 | The paper focuses on gut microbiome and hepatic pathology outcomes (inflammation, fibrosis) rather than quantitative toxicokinetic parameters like half-life or clearance. |
| popPK | Soares_2009 | irrelevant | 0 | 0 | The paper investigates an ecotoxicological endpoint (growth/feeding of Daphnia) using a cyanobacterium strain explicitly stated to be non-producing of cylindrospermopsin, and reports no toxicokinetic parameters. |
| PGx | Straser_2011 | not_relevant | 0 | 0 | The study investigates the genotoxicity of cylindrospermopsin in a single cell line and does not report any pharmacogenomic effect (gene variant altering drug response) or PK/PD parameters related to genetic differences. |
| PGx | Straser_2013 | not_relevant | 0 | 0 | The paper describes general transcriptional responses to cylindrospermopsin in HepG2 cells but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Stucken_2009 | not_relevant | 0 | 0 | The paper discusses the phylogeny and genetics of toxin-producing cyanobacteria, not the pharmacogenomics of drug metabolism or response in humans. |
| popPK | Vehovszky_2015 | irrelevant | 0 | 0 | The paper reports neurotoxic pharmacological effects (EC50) of cyanobacterial extracts on snail neurons, not toxicokinetic parameters (half-life, clearance, etc.) for cylindrospermopsin. |
| popPK | Yang_2025 | irrelevant | 1 | 0 | The paper is an ecotoxicological study focusing on behavioral and physiological effects (neurotoxicity, oxidative stress) in invertebrates, containing no quantitative toxicokinetic parameters for cylindrospermopsin. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper reports chemical degradation kinetics (oxidation/hydrolysis) in aqueous solution, not biological toxicokinetic parameters (ADME) in a host organism. |
| popPK | Zupančič_2021 | irrelevant | 0 | 0 | The paper is an environmental monitoring study using qPCR to detect genes for toxin production in water bodies and does not report any toxicokinetic parameters for cylindrospermopsin. |
| popPK | de_2021 | irrelevant | 5 | 1 | The paper describes uptake and clearance experiments but the provided evidence lacks specific quantitative kinetic parameters (half-lives, rate constants) and only mentions qualitative findings. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Šrédlová_2021 | irrelevant | 0 | 0 | The paper is an ecotoxicological assay comparison measuring toxicity endpoints (LC50, IC50) for whole cellular organic matter, not quantitative toxicokinetic parameters (half-life, clearance, etc.) for cylindrospermopsin. |
| PGx | Žegura_2011 | not_relevant | 0 | 0 | The paper investigates the genotoxicity of cylindrospermopsin and its effect on gene expression in lymphocytes, but does not report pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcylindrospermopsin%5D&body=Drug%3A%20cylindrospermopsin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cylindrospermopsin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 06:36 UTC</sub>
