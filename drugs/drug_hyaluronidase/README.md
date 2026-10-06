<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;hyaluronidase&quot;}]"></div>

# hyaluronidase

- **generic name:** hyaluronidase
- **ATC codes:** `B06AA03`
- **DrugBank:** [DB14740](https://go.drugbank.com/drugs/DB14740) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Hyaluronidase is an enzyme medicine used to treat extravasation, and has also been studied for injection into the eye to treat vitreous hemorrhage. It is an approved medication, though one European application for an eye-related use was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105488220](https://www.wikidata.org/wiki/Q105488220) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:10 | 8:04 | 0/0/0 | 0/0/0 | 0/0/0 | 344,847/6,277 | ollama / qwen3.8:27b-mtp-q8_0 | 38 | 6/70 | 38/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hyaluronidase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TGFB1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 364 matched, 128 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Coutinho_2023.pdf` | Coutinho S et al., Melipona scutellaris Geopropolis: Chemi…, Microorganisms (2023) | pd | 4 | [10.3390/microorganisms11112779](https://doi.org/10.3390/microorganisms11112779) | [38004790](https://www.ncbi.nlm.nih.gov/pubmed/38004790) | metadata signals extractable PD data (IC50) |
| `Harding_1988.pdf` | Harding SE et al., Contractile responses of isolated adult…, Journal of molecular and ce… (1988) | pd | 4 | [10.1016/s0022-2828(88)80121-4](https://doi.org/10.1016/s0022-2828(88)80121-4) | [3172250](https://www.ncbi.nlm.nih.gov/pubmed/3172250) | metadata signals extractable PD data (EC50) |
| `Qi_2024.pdf` | Qi ZC et al., Triterpenoids from Juglans mandshurica…, Journal of Asian natural pr… (2024) | pd | 4 | [10.1080/10286020.2024.2327514](https://doi.org/10.1080/10286020.2024.2327514) | [38469752](https://www.ncbi.nlm.nih.gov/pubmed/38469752) | metadata signals extractable PD data (IC50) |
| `Sawabe_1992.pdf` | Sawabe Y et al., Inhibitory effects of pectic substances…, Biochimica et biophysica ac… (1992) | pd | 4 | [10.1016/0167-4889(92)90147-4](https://doi.org/10.1016/0167-4889(92)90147-4) | [1280162](https://www.ncbi.nlm.nih.gov/pubmed/1280162) | metadata signals extractable PD data (IC50) |
| `Załuski_2015.pdf` | Załuski D et al., Variation in phytochemicals and bioacti…, Natural product research (2015) | pd | 4 | [10.1080/14786419.2014.1002091](https://doi.org/10.1080/14786419.2014.1002091) | [25605044](https://www.ncbi.nlm.nih.gov/pubmed/25605044) | metadata signals extractable PD data (EC50) |
| `Zeghbib_2024.pdf` | Zeghbib W et al., LC-ESI-UHR-QqTOF-MS/MS profiling and an…, Food chemistry (2024) | pd | 4 | [10.1016/j.foodchem.2024.140414](https://doi.org/10.1016/j.foodchem.2024.140414) | [39084103](https://www.ncbi.nlm.nih.gov/pubmed/39084103) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T01:05:46.610532+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmed_2023 | not_relevant | 3 | 3 | The paper reports in vitro enzyme inhibition IC50 values for phytoconstituents against hyaluronidase, which is a pharmacological potency metric, but it does not report a pharmacodynamic (exposure-response) relationship for the drug hyaluronidase itself (e.g., effect vs. drug concentration in a biological system). |
| PD | Ahmed_2025 | not_relevant | 2 | 1 | The paper reports a single-point enzyme inhibition percentage (53%) for hyaluronidase and dose-response curves for other enzymes (COX), but does not provide a concentration-effect curve or numeric PD parameters (like IC50) specifically for hyaluronidase. |
| popPK | Albiges_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for nivolumab, while hyaluronidase is only a co-formulated excipient/enhancer and not the subject drug. |
| popPK | Antczak_2026 | irrelevant | 0 | 0 | The paper describes a genetic tool for protein depletion in mice and does not involve hyaluronidase or pharmacokinetic parameters. |
| PD | Antczak_2026 | not_relevant | 0 | 0 | The paper describes a genetic degron-tag system for protein depletion and does not report any pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for hyaluronidase or any other drug. |
| popPK | Araújo_2017 | irrelevant | 0 | 0 | The study investigates bee pollen extracts and their inhibitory activity against hyaluronidase as an enzyme, not the pharmacokinetics of hyaluronidase as a drug. |
| PD | Araújo_2017 | not_relevant | 0 | 0 | The paper investigates bee pollen extracts and reports enzyme inhibitory activity (including hyaluronidase) but does not report a pharmacodynamic model or exposure-response relationship for the drug hyaluronidase itself. |
| PGx | Athira_2026 | not_relevant | 0 | 0 | The paper characterizes the genome of a bacterial pathogen (Clostridium chauvoei) and mentions hyaluronidase as a virulence factor, but does not report any pharmacogenomic effects on the PK or PD of a hyaluronidase drug. |
| PD | Bailey_1984 | not_relevant | 0 | 0 | The paper uses hyaluronidase only as a reagent for cell isolation and does not report any pharmacodynamic or exposure-response data for the enzyme itself. |
| PGx | Basu_2012 | not_relevant | 0 | 0 | The paper investigates genetic associations with glaucoma disease status, not the pharmacokinetics or pharmacodynamics of hyaluronidase as a therapeutic drug. |
| popPK | Bohlooli_2026 | irrelevant | 0 | 0 | The paper is a review of metal-organic frameworks (MOFs) and does not contain any pharmacokinetic data for hyaluronidase. |
| PD | Bohlooli_2026 | not_relevant | 0 | 0 | The paper is a review on metal-organic frameworks (MOFs) and does not discuss hyaluronidase or any pharmacodynamic parameters. |
| PGx | Brüggemann_2019 | not_relevant | 0 | 0 | The paper investigates the genome decay and virulence factors (including hyaluronidase activity) of the bacterium Staphylococcus saccharolyticus, not the pharmacogenomics of hyaluronidase as a therapeutic drug. |
| popPK | Butkeviciute_2021 | irrelevant | 0 | 0 | The study investigates apple extracts as hyaluronidase inhibitors in vitro, not the pharmacokinetics of hyaluronidase itself. |
| PD | Butkeviciute_2021 | not_relevant | 2 | 1 | The paper reports a single-point hyaluronidase inhibition percentage (26-35%) for apple extracts, not a dose-response curve or numeric PD parameters (EC50) for the enzyme inhibition. |
| PGx | CHANG_1962 | not_relevant | 0 | 0 | The paper describes the propagation and characterization of a viral agent in cell cultures and does not involve hyaluronidase or pharmacogenomics. |
| PGx | Cardoso_2010 | not_relevant | 0 | 0 | The paper is a transcriptomic analysis of snake venom gland gene expression and does not report pharmacogenomic effects on the PK/PD of hyaluronidase. |
| popPK | Chan_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for atezolizumab, not hyaluronidase. |
| PD | Chan_2025 | not_relevant | 0 | 0 | The paper analyzes atezolizumab, not hyaluronidase, and reports no significant exposure-response relationship (flat ER). |
| popPK | Chawana_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the monoclonal antibody VRC07-523LS, not hyaluronidase. |
| PD | Chawana_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for a monoclonal antibody (VRC07-523LS), not hyaluronidase, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for intravenous immunoglobulin (IgG), not hyaluronidase. |
| PD | Cheng_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for intravenous immunoglobulin (IVIG), not hyaluronidase, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| PD | Ciganović_2023 | not_relevant | 3 | 2 | The paper reports an IC50 for hyaluronidase inhibition of a plant extract, which is a single-point enzyme assay parameter, not a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| PD | Coutinho_2023 | not_relevant | 0 | 0 | The paper reports hyaluronidase inhibition as a qualitative anti-inflammatory activity of a plant extract, not a pharmacodynamic exposure-response relationship for the drug hyaluronidase. |
| popPK | Desai_2026 | irrelevant | 0 | 0 | The paper focuses on lung cancer resistance mechanisms and targeted therapies (ALK, HER2) and does not involve hyaluronidase pharmacokinetics. |
| PD | Desai_2026 | not_relevant | 0 | 0 | The paper focuses on tumor microenvironment mechanisms of resistance and does not report pharmacokinetic or pharmacodynamic modeling (e.g., Emax, EC50) for hyaluronidase or any other drug. |
| PD | Di_2024 | not_relevant | 0 | 0 | The paper analyzes the biophysical (viscosity) and biochemical (cell growth) properties of hyaluronan formulations, not the pharmacodynamic response to hyaluronidase. |
| popPK | Digiovanni_2026 | irrelevant | 0 | 0 | The paper focuses on IRAK1 inhibitors in non-small cell lung cancer and does not study hyaluronidase pharmacokinetics. |
| PD | Digiovanni_2026 | not_relevant | 0 | 0 | The paper focuses on IRAK1 inhibitors and cisplatin in NSCLC; it does not report any pharmacodynamic or exposure-response data for hyaluronidase. |
| PD | Dorr_1985 | not_relevant | 3 | 2 | The paper reports qualitative efficacy and relative changes in PK parameters (e.g., AUC reduced to 1/7, t1/2 to 1/3) for hyaluronidase, but does not provide a concentration-effect curve or specific numeric PD parameters (like Emax or EC50) for hyaluronidase itself. |
| PD | Dorr_1987 | not_relevant | 0 | 0 | The paper studies dacarbazine (DTIC), not hyaluronidase; hyaluronidase is only mentioned as an ineffective antidote without any PD or exposure-response analysis. |
| popPK | Dychter_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ondansetron, with hyaluronidase acting only as an excipient/enhancer, not as the subject drug. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The study investigates the anticancer effects of neomenthol, using hyaluronidase only as a target enzyme for inhibition assays, not as a drug subject to pharmacokinetic analysis. |
| popPK | Fayad_2019 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study of hyaluronidase inhibition/activation using capillary electrophoresis, not a pharmacokinetic study of hyaluronidase as a drug. |
| popPK | Felip_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of atezolizumab, where hyaluronidase is used only as a co-formulated permeation enhancer, not as the subject drug. |
| popPK | Ferreira_2016 | irrelevant | 0 | 0 | The study characterizes spider venom components (including hyaluronidase) for antimicrobial and cytotoxic activities, but does not report any pharmacokinetic parameters for hyaluronidase. |
| PD | Ferreira_2016 | not_relevant | 0 | 0 | The paper reports general toxicity and antimicrobial activity of crude spider venom, not a pharmacodynamic or exposure-response relationship for the specific drug hyaluronidase. |
| popPK | Freitas_2020 | irrelevant | 0 | 0 | The study evaluates the inhibitory effect of seaweed extracts on hyaluronidase enzyme activity in vitro, rather than the pharmacokinetics of hyaluronidase as a drug. |
| PD | Freitas_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for the inhibition of hyaluronidase by seaweed extracts, which is an enzyme kinetics/inhibition assay, not a pharmacodynamic (exposure-response) relationship for a drug. |
| PD | Garcia-Carbonero_2022 | not_relevant | 3 | 2 | The paper reports qualitative increases in hyaluronidase (PH20) levels and viral load over time, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for hyaluronidase. |
| popPK | Gershuni_1985 | irrelevant | 0 | 0 | The study measures compartment pressure decay rates to assess therapeutic efficacy, not pharmacokinetic disposition parameters (CL, V, t1/2) of hyaluronidase. |
| popPK | Gibiansky_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of rituximab, not hyaluronidase. |
| PD | Gibiansky_2021 | not_relevant | 3 | 2 | The paper focuses on PK modeling and explicitly states that inherent data limitations prevented reliable assessment of exposure-response relationships, offering only qualitative observations and categorical survival analyses without numeric PD parameters. |
| popPK | González-Correa_2025 | irrelevant | 0 | 0 | The study investigates the probiotic Limosilactobacillus fermentum and hydrochlorothiazide in rats, with no mention of hyaluronidase or its pharmacokinetics. |
| PD | González-Correa_2025 | not_relevant | 0 | 0 | The paper studies hydrochlorothiazide and a probiotic, not hyaluronidase, and does not report a pharmacodynamic model or numeric PD parameters for hyaluronidase. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of LOXL4-driven matrix stiffening and T cell exhaustion in lung cancer, with no mention of hyaluronidase pharmacokinetics. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of acetyldigoxin (a LOXL4 inhibitor) in lung cancer and does not report any pharmacodynamic or exposure-response data for hyaluronidase. |
| popPK | Han_2025 | irrelevant | 0 | 0 | The paper is a review of Wedelolactone, a different drug, and does not contain pharmacokinetic data for hyaluronidase. |
| PD | Han_2025 | not_relevant | 0 | 0 | The paper is a review of Wedelolactone, not hyaluronidase, and does not report specific PD parameters for the target drug. |
| popPK | Harding_1988 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Harding_1988 | not_relevant | 0 | 0 | The paper studies the contractile response of cardiac myocytes to isoproterenol and calcium, not hyaluronidase. |
| PGx | Harrison_2007 | not_relevant | 0 | 0 | The paper describes the identification and sequence analysis of hyaluronidase cDNAs in snake venoms, not the pharmacogenomics of a hyaluronidase drug. |
| popPK | Heide_2025 | irrelevant | 0 | 0 | The paper investigates NNMT inhibition in cancer-associated fibroblasts and contains no data regarding hyaluronidase pharmacokinetics. |
| PD | Heide_2025 | not_relevant | 0 | 0 | The paper investigates NNMT inhibition in cancer and does not mention hyaluronidase or report any pharmacodynamic or exposure-response parameters for it. |
| popPK | Hourcade-Potelleret_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trastuzumab, not hyaluronidase. |
| PD | Hourcade-Potelleret_2014 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for trastuzumab, not hyaluronidase, and contains no pharmacodynamic or exposure-response analysis. |
| PD | Huang_2022 | not_relevant | 1 | 0 | The paper describes a combination therapy using hyaluronidase to enhance drug delivery and efficacy, but it does not report a quantitative exposure-response or dose-response relationship for hyaluronidase itself, nor does it provide numeric PD parameters (e.g., EC50, Emax) for hyaluronidase. |
| PD | Jakupović_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of hyaluronidase by plant extracts, which is a pharmacological assay, not a pharmacodynamic (exposure-response) relationship for the drug hyaluronidase itself. |
| PGx | Jose_2009 | not_relevant | 0 | 0 | The paper is a review on bioanalytical methods in medicinal chemistry and mentions hyaluronidase only as a target for inhibitor development, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Jung_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the antibody-drug conjugate ALT-P7, with hyaluronidase (berahyaluronidase alfa) serving only as an absorption enhancer/co-administered agent, not the subject drug. |
| PGx | Kang_2022 | not_relevant | 0 | 0 | The paper describes a nanoparticle delivery system for pancreatic cancer and does not report any pharmacogenomic effects on the PK or PD of hyaluronidase. |
| popPK | Karatoprak_2022 | irrelevant | 0 | 0 | The study investigates the enzyme inhibition of hyaluronidase by plant extracts in vitro, not the pharmacokinetics of hyaluronidase as a drug. |
| PD | Karatoprak_2022 | not_relevant | 0 | 0 | The paper reports that extracts did not show inhibitory activity on hyaluronidase and provides no numeric PD parameters or dose-response curves for hyaluronidase. |
| popPK | Kirschbrown_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pertuzumab and trastuzumab, where hyaluronidase is only a co-administered excipient/enzyme to facilitate subcutaneous delivery, not the subject drug. |
| PD | Kirschbrown_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) and dose-finding of pertuzumab and trastuzumab, with no analysis of the pharmacodynamic (PD) or exposure-response relationship for hyaluronidase. |
| PD | Kłosiński_2020 | not_relevant | 3 | 3 | The paper reports IC50 values for hyaluronidase inhibition, which is a static in vitro potency metric, not a pharmacodynamic (exposure- or dose-response) relationship for the drug hyaluronidase itself. |
| popPK | Lagache_2026 | irrelevant | 0 | 0 | The paper focuses on spatial proteomics and breast cancer therapy guidance, with no mention of hyaluronidase pharmacokinetics. |
| PD | Lagache_2026 | not_relevant | 0 | 0 | The paper reports dose-response curves and IC50 values for chemotherapy and targeted agents (paclitaxel, sunitinib, etc.) in breast cancer tumoroids, but does not study hyaluronidase or report any pharmacodynamic parameters for it. |
| popPK | Lebang_2026 | irrelevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome and does not study hyaluronidase pharmacokinetics. |
| PD | Lebang_2026 | not_relevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome and does not mention hyaluronidase or report any pharmacodynamic parameters. |
| popPK | Li_1992 | irrelevant | 0 | 0 | The study measures interstitial pressure and compliance in rabbit lungs, not the pharmacokinetic disposition parameters (CL, V, t1/2) of hyaluronidase. |
| PD | Li_2021 | not_relevant | 2 | 2 | The paper reports an IC50 for the drug nanocarrier (SNX) in cell lines, which is a dose-response metric, but it does not report a pharmacodynamic model, exposure-response relationship, or concentration-effect curve for hyaluronidase itself; Hyaluronidase is only mentioned as a stimulus for the nanocarrier's release mechanism. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for immunoglobulin G (IgG), not hyaluronidase, which is only a facilitator of subcutaneous absorption. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) simulations of IgG concentrations based on BMI and age, but it does not model or report any pharmacodynamic (PD) or exposure-response relationship (e.g., efficacy vs. concentration). |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for immunoglobulin G (IgG), not hyaluronidase, which is only mentioned as a facilitator for subcutaneous administration. |
| popPK | Li_2024_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of intravenous immunoglobulin G (IVIG), not hyaluronidase. |
| PD | Li_2024_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for IVIG but does not include a pharmacodynamic (PD) model or quantitative exposure-response analysis linking IgG concentrations to clinical efficacy or disease activity. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper describes engineered enzyme variants for therapeutic use, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of hyaluronidase. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of monoclonal antibodies and mentions hyaluronidase only as a co-formulant for subcutaneous administration, without reporting any pharmacogenomic effects on hyaluronidase PK/PD. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pertuzumab, not hyaluronidase. |
| PD | Liu_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) simulations for pertuzumab and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Luo_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for daratumumab, not hyaluronidase. |
| PD | Luo_2021 | not_relevant | 4 | 3 | The paper analyzes Daratumumab (a monoclonal antibody), not hyaluronidase; while it contains exposure-response data, it is for the wrong drug. |
| PGx | Mahomed_2020 | not_relevant | 0 | 0 | The paper is a study protocol for a Phase I clinical trial assessing the safety and pharmacokinetics of an anti-HIV antibody, with no data on pharmacogenomic effects on hyaluronidase PK/PD. |
| popPK | Mahomed_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of monoclonal antibodies (VRC07-523LS and PGT121) for HIV prevention, not hyaluronidase. |
| PD | Mahomed_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and neutralization activity (IC50) for HIV antibodies (VRC07-523LS and PGT121), but does not report a pharmacodynamic or exposure-response relationship for hyaluronidase. |
| popPK | Mahomed_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for broadly neutralizing antibodies (bNAbs) where hyaluronidase (ENHANZE) is used as a delivery enhancer, not as the subject drug. |
| PD | Mahomed_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) parameters (AUC, Cmax) and administration times, but does not report any pharmacodynamic (PD) or exposure-response relationship for hyaluronidase or the antibodies. |
| popPK | Mahomed_2025_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CAP256V2LS, an HIV antibody, not hyaluronidase. |
| PD | Mahomed_2025_2 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and exposure comparisons for an antibody, but contains no pharmacodynamic (PD) or exposure-response analysis, nor any numeric PD parameters. |
| popPK | Mahomed_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for HIV broadly neutralizing monoclonal antibodies (PGDM1400LS, VRC07-523LS, PGT121.414.LS), not hyaluronidase. |
| PGx | Menzel_1998 | not_relevant | 0 | 0 | The paper is a general review of hyaluronidase biochemistry and therapeutic uses, mentioning CD44 variants in the context of metastasis but not reporting pharmacogenomic effects on hyaluronidase PK/PD parameters. |
| popPK | Michel_2014 | irrelevant | 0 | 0 | The study evaluates the anti-inflammatory activity of plant extracts by measuring their inhibition of hyaluronidase enzyme activity, rather than studying the pharmacokinetics of hyaluronidase as a drug. |
| PD | Michel_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (hyaluronidase) of plant extracts, not a pharmacodynamic exposure-response relationship for the drug hyaluronidase. |
| PD | Nagai_1983 | not_relevant | 0 | 0 | The paper studies the anti-allergic effects of glucocorticoids, not hyaluronidase; hyaluronidase is only mentioned as a control mediator whose effect was not altered by steroids. |
| popPK | Newsome_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ocrelizumab, not hyaluronidase. |
| PD | Newsome_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and safety for ocrelizumab, not hyaluronidase, and does not provide numeric PD parameters or exposure-response models. |
| popPK | Ni_2024 | irrelevant | 0 | 0 | The paper describes a computational method for drug target identification using transcriptomics and does not contain any pharmacokinetic data for hyaluronidase. |
| PD | Ni_2024 | not_relevant | 0 | 0 | The paper focuses on a machine learning method (PertKGE) for target identification and reports dose-response data for tankyrase inhibitors (K-756) and ALDH1B1 inhibitors, but contains no data or analysis for hyaluronidase. |
| popPK | Nolan_2024 | irrelevant | 1 | 0 | The study models the pharmacokinetics of antibodies co-administered with hyaluronidase, not the pharmacokinetics of hyaluronidase itself. |
| popPK | Nolan_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of therapeutic antibodies (e.g., ocrelizumab) using rHuPH20 as a delivery enhancer, not the pharmacokinetics of hyaluronidase itself. |
| PD | Ottestad_1988 | not_relevant | 0 | 0 | The paper describes a cell culture method for breast carcinoma and reports dose-response curves for chemotherapeutic agents (doxorubicin, vincristine, cyclophosphamide), but does not report a pharmacodynamic or exposure-response relationship for hyaluronidase. |
| popPK | Pang_2025 | irrelevant | 0 | 0 | The paper is a single-cell transcriptomic study of lampreys and mice focusing on Natterin and adipose tissue browning, with no mention of hyaluronidase or pharmacokinetic parameters. |
| PD | Pang_2025 | not_relevant | 0 | 0 | The paper focuses on the single-cell transcriptome of lampreys and the biological effects of Natterin (a hyaluronidase) on adipose tissue browning, but it does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., EC50, Emax) for hyaluronidase. |
| PD | Paun_2019 | not_relevant | 3 | 3 | The paper reports a single IC50 value for hyaluronidase inhibition by a plant extract, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) model or curve for a drug. |
| PGx | Pedicino_2018 | not_relevant | 0 | 0 | The paper investigates endogenous hyaluronidase (HYAL2) gene expression in disease states, not the pharmacokinetics or pharmacodynamics of an exogenous hyaluronidase drug. |
| PD | Perera_2018 | not_relevant | 2 | 2 | The paper reports single-point enzyme inhibition percentages for hyaluronidase at a fixed concentration (500 μg/mL) for plant extracts, but does not provide a dose-response curve, IC50 for hyaluronidase, or any pharmacokinetic/pharmacodynamic modeling parameters. |
| PD | Phongpradist_2023 | not_relevant | 2 | 1 | The paper reports qualitative enzyme inhibition and molecular docking for hyaluronidase but does not provide a dose-response curve or numeric PD parameters (e.g., IC50, Ki) for the hyaluronidase inhibition. |
| popPK | Pieczykolan_2022 | irrelevant | 0 | 0 | The study investigates the cosmetic potential of Aerva lanata extracts, where hyaluronidase is only mentioned as an enzyme target for inhibition (anti-hyaluronidase activity), not as the subject drug for pharmacokinetic analysis. |
| PD | Pieczykolan_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (EC50) of hyaluronidase by plant extracts, which is a pharmacological assay, not a pharmacodynamic (exposure-response) relationship for a drug in a biological system. |
| popPK | Prado_2016 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory activity of a kefir extract using hyaluronidase as a diagnostic enzyme assay, not the pharmacokinetics of hyaluronidase itself. |
| PD | Prado_2016 | not_relevant | 0 | 0 | The paper reports hyaluronidase inhibition by a kefir polysaccharide extract, not a pharmacodynamic relationship for the drug hyaluronidase itself. |
| popPK | Quartino_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for trastuzumab, not hyaluronidase. |
| PD | Quartino_2016 | not_relevant | 0 | 0 | The paper analyzes trastuzumab, not hyaluronidase, and reports no exposure-response relationship for the drug of interest. |
| PGx | ROGERS_1953 | not_relevant | 0 | 0 | The paper describes bacterial population dynamics of Staphylococcus aureus, not human pharmacogenomics or drug PK/PD. |
| popPK | Romero-Cantú_2026 | irrelevant | 0 | 0 | The study evaluates plant extracts as hyaluronidase inhibitors (enzyme activity) rather than measuring the pharmacokinetic disposition parameters of hyaluronidase itself. |
| PD | Romero-Cantú_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (EC50) of hyaluronidase by plant extracts, which is a pharmacological assay, not a pharmacodynamic (exposure-response) relationship for a drug in a biological system. |
| PD | Sagan_2024 | not_relevant | 2 | 1 | The paper reports an in vitro IC50 for hyaluronidase inhibition by hop extracts, which is a single-point potency metric rather than a pharmacodynamic exposure-response or dose-response relationship for a drug. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | The paper is a review of chitosan-based hydrogels and does not report pharmacokinetic parameters for hyaluronidase. |
| PD | Salamat_2026 | not_relevant | 0 | 0 | The paper is a review of chitosan-based hydrogels and does not report any pharmacodynamic or exposure-response data for hyaluronidase. |
| popPK | Sarma_2026 | irrelevant | 0 | 0 | The paper is a review on 4D nanoimaging-guided smart therapeutics and does not report pharmacokinetic parameters for hyaluronidase. |
| PD | Sarma_2026 | not_relevant | 0 | 0 | The paper is a review of 4D nanoimaging-guided smart therapeutics and does not report any specific pharmacodynamic or exposure-response data for hyaluronidase. |
| popPK | Shah_2026 | irrelevant | 0 | 0 | The study focuses on multiple myeloma treatment outcomes (neutropenia and response rates) using MBMA and QSP models, with no mention of hyaluronidase pharmacokinetics. |
| PD | Shah_2026 | not_relevant | 0 | 0 | The paper focuses on MBMA and QSP modeling for multiple myeloma outcomes (ORR, neutropenia) and does not report any pharmacodynamic or exposure-response analysis for hyaluronidase. |
| PD | Shankar_2023 | not_relevant | 0 | 0 | The paper analyzes economic productivity and environmental efficiency using directional distance functions, not pharmacodynamics or drug exposure-response relationships. |
| PGx | Shuster_2002 | not_relevant | 0 | 0 | The paper reports the anti-tumor efficacy of hyaluronidase in mice but does not investigate the impact of any gene variant or genotype on its pharmacokinetics or pharmacodynamics. |
| popPK | Siemiątkowska_2026 | irrelevant | 0 | 0 | The paper is a review of subcutaneous absorption models for antibody-based therapeutics, where hyaluronidase is mentioned only as a delivery facilitator, not as the subject drug for PK parameter estimation. |
| popPK | Soberón_2010 | irrelevant | 0 | 0 | The study evaluates phenolic compounds as inhibitors of hyaluronidase enzyme activity (in vitro), not the pharmacokinetics of hyaluronidase as a drug. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study characterizes a polysaccharide's hyaluronidase inhibitory activity in vitro, not the pharmacokinetics of hyaluronidase. |
| PGx | Tanaka_2011 | not_relevant | 0 | 0 | The paper is a review of therapeutic strategies for prostate cancer and mentions hyaluronidase only as a patented molecule, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PD | Tawfeek_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of hyaluronidase by plant extracts, which is a pharmacological assay, not a pharmacodynamic (exposure-response) relationship for the drug hyaluronidase itself. |
| PGx | Triggs-Raine_1999 | not_relevant | 0 | 0 | The paper describes a genetic cause for a lysosomal storage disorder (MPS IX) involving endogenous hyaluronidase deficiency, not the pharmacogenomics of hyaluronidase as a therapeutic drug. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pertuzumab and trastuzumab, where hyaluronidase is only mentioned as an excipient/enzyme in the formulation, not as the subject drug. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response of pertuzumab and trastuzumab, not hyaluronidase; no PD parameters for hyaluronidase are reported. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nivolumab, not hyaluronidase. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on PK simulations and cost-effectiveness for nivolumab dosing; it does not report any pharmacodynamic (PD) or exposure-response relationship for hyaluronidase or any other drug. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | This is a narrative review of oncology antibodies where hyaluronidase is used as a delivery excipient, not the subject drug for PK parameter estimation. |
| popPK | Załuski_2015 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Załuski_2015 | not_relevant | 0 | 0 | The paper analyzes phytochemicals and bioactivity of Eleutherococcus fruits and does not mention hyaluronidase or any pharmacodynamic modeling. |
| popPK | Załuski_2017 | irrelevant | 0 | 0 | The study investigates plant extracts as inhibitors of hyaluronidase enzyme activity (in vitro), not the pharmacokinetics of hyaluronidase as a drug. |
| PD | Załuski_2017 | not_relevant | 2 | 2 | The paper reports single-point enzyme inhibition percentages for plant extracts against hyaluronidase but does not provide dose-response curves, EC50 values, or any numeric PD parameters for hyaluronidase. |
| PD | Zeghbib_2024 | not_relevant | 0 | 0 | The paper studies Opuntia fruit extracts and does not mention hyaluronidase or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nivolumab, with hyaluronidase serving only as an excipient/enzyme to facilitate subcutaneous absorption, not as the subject drug. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nivolumab, not hyaluronidase. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling and simulation of nivolumab (an anti-PD-1 antibody) and does not report any pharmacodynamic (PD) or exposure-response relationships for hyaluronidase or any other drug. |
| PGx | Zhu_2026 | not_relevant | 0 | 0 | The paper reports protein engineering of a bacterial enzyme for industrial production, not a pharmacogenomic effect on a drug's PK/PD in humans. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetics for immunoglobulins (IgG), not hyaluronidase. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not contain any data, analysis, or parameters for hyaluronidase. |
| PD | Łyko_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of hyaluronidase by plant polyphenols, which is a pharmacological assay, not a pharmacodynamic (exposure-response) relationship for a drug in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
