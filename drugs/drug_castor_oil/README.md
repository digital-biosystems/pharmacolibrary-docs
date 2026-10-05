<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;castor oil&quot;}]"></div>

# castor oil

- **generic name:** castor oil
- **ATC codes:** `A06AB05`
- **DrugBank:** [DB11113](https://go.drugbank.com/drugs/DB11113) · **PubChem:** not captured
- **groups:** approved, nutraceutical, vet_approved

## About

Castor oil, pressed from castor seeds, is a contact laxative used to treat constipation. It remains an approved medicine and nutraceutical, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q337492](https://www.wikidata.org/wiki/Q337492) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:13 | 6:29 | 0/0/0 | 0/0/0 | 0/0/0 | 282,146/5,924 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 4/37 | 19/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=castor_oil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGER3 (activator), PTGER3 (target), PTGER4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 193 matched, 110 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ming_2026.pdf` | Ming C et al., Development of a SMEDDS for oral delive…, Journal of pharmaceutical s… (2026) | pd | 5 | [10.1016/j.xphs.2026.104356](https://doi.org/10.1016/j.xphs.2026.104356) | [42250802](https://www.ncbi.nlm.nih.gov/pubmed/42250802) | metadata signals extractable PD data (PK/PD) |
| `van_2000.pdf` | van Zuylen L et al., Inter-relationships of paclitaxel dispo…, Anti-cancer drugs (2000) | pd | 5 | [10.1097/00001813-200006000-00003](https://doi.org/10.1097/00001813-200006000-00003) | [10912949](https://www.ncbi.nlm.nih.gov/pubmed/10912949) | metadata signals extractable PD data (indirectresponse) |
| `Alba-Betancourt_2019.pdf` | Alba-Betancourt C et al., Antidiarrheal, vasorelaxant, and neurop…, Drug development research (2019) | pd | 4 | [10.1002/ddr.21578](https://doi.org/10.1002/ddr.21578) | [31343767](https://www.ncbi.nlm.nih.gov/pubmed/31343767) | metadata signals extractable PD data (EC50) |
| `De_1995.pdf` | De Caterina R et al., The direct effect of injectable cyclosp…, Transplantation (1995) | pd | 4 | [10.1097/00007890-199508000-00011](https://doi.org/10.1097/00007890-199508000-00011) | [7544037](https://www.ncbi.nlm.nih.gov/pubmed/7544037) | metadata signals extractable PD data (IC50) |
| `Pandey_2017.pdf` | Pandey G et al., Grilling enhances antidiarrheal activit…, Journal of ethnopharmacology (2017) | pd | 4 | [10.1016/j.jep.2016.12.003](https://doi.org/10.1016/j.jep.2016.12.003) | [28025164](https://www.ncbi.nlm.nih.gov/pubmed/28025164) | metadata signals extractable PD data (IC50) |
| `Sharma_2019.pdf` | Sharma D et al., Antibacterial and antidiarrheal activit…, Journal of ethnopharmacology (2019) | pd | 4 | [10.1016/j.jep.2019.112014](https://doi.org/10.1016/j.jep.2019.112014) | [31181315](https://www.ncbi.nlm.nih.gov/pubmed/31181315) | metadata signals extractable PD data (EC50) |
| `Song_2015.pdf` | Song H et al., Interaction of gallic acid with trypsin…, Journal of food and drug an… (2015) | pd | 4 | [10.1016/j.jfda.2014.09.001](https://doi.org/10.1016/j.jfda.2014.09.001) | [28911378](https://www.ncbi.nlm.nih.gov/pubmed/28911378) | metadata signals extractable PD data (IC50) |
| `Zhao_2024.pdf` | Zhao H et al., Antidiarrheal properties of Ligusticum…, Pakistan journal of pharmac… (2024) | pd | 4 | not captured | [39348643](https://www.ncbi.nlm.nih.gov/pubmed/39348643) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T15:09:42.696979+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdur_2017 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Phyla nodiflora, using castor oil only as a tool to induce diarrhea in mice, and does not report any pharmacokinetic parameters for castor oil. |
| PD | Abdur_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Phyla nodiflora, not castor oil; castor oil is only used as an irritant to induce diarrhea in the in-vivo model. |
| popPK | Acharya_2025 | irrelevant | 0 | 0 | The paper is an ethnozoological study documenting traditional animal-based medicine and contains no pharmacokinetic data for castor oil. |
| PD | Acharya_2025 | not_relevant | 0 | 0 | The paper is an ethnozoological survey documenting traditional animal-based medicine practices and does not contain any pharmacokinetic, pharmacodynamic, or dose-response data for castor oil or any other substance. |
| popPK | Alam_2019 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Zanthoxylum armatum extracts, using castor oil only as a vehicle to induce diarrhea in mice, and does not report any pharmacokinetic parameters for castor oil. |
| PD | Alam_2020 | not_relevant | 0 | 0 | The paper uses castor oil only as a vehicle to induce diarrhea in an animal model to test the antidiarrheal effect of a plant extract; it does not report a pharmacodynamic or exposure-response relationship for castor oil itself. |
| PD | Alam_2021 | not_relevant | 3 | 2 | The paper reports a dose-response effect of a plant extract on castor oil-induced diarrhea (16.96% and 38.89% inhibition at 200 and 400 mg/kg), but it does not report a pharmacodynamic model, exposure-response relationship, or derived PD parameters (like Emax/EC50) for castor oil itself; castor oil is merely the vehicle for inducing the disease model. |
| popPK | Alba-Betancourt_2019 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Alba-Betancourt_2019 | not_relevant | 0 | 0 | The paper focuses on the diterpene tilifodiolide, not castor oil, and does not report exposure-response or dose-response relationships for castor oil. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report pharmacokinetic parameters for castor oil. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any pharmacodynamic or exposure-response data for castor oil. |
| PD | Amanuma_1984 | not_relevant | 0 | 0 | The paper reports dose-response relationships (ED50) for NSAIDs, not castor oil; castor oil is only mentioned as a reference for a correlation analysis. |
| popPK | Anzoise_2016 | irrelevant | 0 | 0 | Castor oil is used only as a tool to induce diarrhea in a pharmacological study of Passiflora caerulea, with no pharmacokinetic parameters reported. |
| PD | Anzoise_2016 | not_relevant | 0 | 0 | The paper investigates Passiflora caerulea, not castor oil; castor oil is used only as a vehicle to induce diarrhea in the animal model. |
| PD | Barua_2020 | not_relevant | 3 | 2 | The paper reports dose-dependent effects (200 vs 400 mg/kg) and IC50/LC50 values for extracts, but lacks a formal PK/PD model, exposure-response analysis, or derivable PD parameters (Emax, EC50) for a specific drug compound. |
| popPK | Bashir_2023 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Platanus orientalis, using castor oil only as a tool to induce diarrhea, and does not report PK parameters for castor oil. |
| popPK | Bashir_2026 | irrelevant | 0 | 0 | The study investigates the antidiarrheal mechanism of vanillic acid using castor oil only as a tool to induce diarrhea, not as the subject of pharmacokinetic analysis. |
| PD | Bergeron_1996 | not_relevant | 1 | 0 | The paper reports a single effective dose (5 mg/kg) for preventing diarrhea in a castor oil model but does not provide a dose-response curve, concentration-effect data, or numeric PD parameters like Emax or EC50. |
| popPK | Burgalassi_2001 | irrelevant | 0 | 0 | The study evaluates the cytotoxicity of polyethoxylated castor oil (a derivative) on cell lines, not the pharmacokinetics of castor oil. |
| popPK | Caritis_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 17-hydroxyprogesterone caproate, not castor oil. |
| PD | Caritis_2011 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters and concentration-time profiles for 17-hydroxyprogesterone caproate, with no analysis of pharmacodynamic (PD) effects or exposure-response relationships. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | Castor oil is used only as a tool to induce diarrhea in mice, not as the subject drug for pharmacokinetic analysis. |
| popPK | Clementino-Neto_2016 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Solanum paniculatum, using castor oil only as a tool to induce diarrhea in mice, and does not report any pharmacokinetic parameters for castor oil. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of the phytochemical composition and biological activities of the Helianthus genus (sunflowers) and does not contain any pharmacokinetic data for castor oil. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of the Helianthus genus (sunflowers) and does not mention castor oil or report any pharmacodynamic parameters. |
| popPK | De_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not castor oil. |
| PD | Ghanghoria_2016 | not_relevant | 0 | 0 | The paper focuses on the formulation and delivery of paclitaxel nanoparticles, mentioning castor oil only as a solvent for the control formulation, and does not report any pharmacodynamic or exposure-response analysis for castor oil. |
| PD | Gianni_1997 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic interactions and in vitro cellular retention mechanisms, reporting no pharmacodynamic (exposure-response or dose-response) parameters for castor oil or the drugs. |
| popPK | Guarducci_2024 | irrelevant | 0 | 0 | The paper investigates CDK7 inhibition in breast cancer and does not involve castor oil or its pharmacokinetics. |
| PD | Guarducci_2024 | not_relevant | 0 | 0 | The paper investigates CDK7 inhibitors in breast cancer and does not mention castor oil or report any pharmacodynamic parameters for it. |
| PGx | Gurjar_2018 | not_relevant | 0 | 0 | The paper investigates the effect of excipients (including a castor oil derivative) on P-gp activity in vitro, not the effect of a gene variant on the PK/PD of castor oil. |
| popPK | Hafez_2024 | irrelevant | 0 | 0 | The paper is a review of the pharmacological attributes of Acacia (Vachellia nilotica) and does not contain any pharmacokinetic data for castor oil. |
| PD | Hafez_2024 | not_relevant | 0 | 0 | The paper is a review of Vachellia nilotica (Acacia) and does not contain any pharmacodynamic or exposure-response data for castor oil. |
| PD | Hasan_2017 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Lepisanthes rubiginosa) and uses castor oil only as a vehicle to induce diarrhea; it does not report a pharmacodynamic or exposure-response relationship for castor oil itself. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The paper describes genetic code expansion for epigenetic sensing and does not involve castor oil or pharmacokinetic parameters. |
| PD | Hu_2025 | not_relevant | 0 | 0 | The paper focuses on genetic code expansion and biosensor engineering; castor oil is mentioned only as a vehicle for drug formulation, with no pharmacodynamic or exposure-response analysis performed. |
| PGx | Hussain_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Berberis lycium, using castor oil only as a tool to induce diarrhea in animal models, and does not report any pharmacogenomic effects on the PK/PD of castor oil. |
| popPK | Jedidi_2019 | irrelevant | 0 | 0 | The study uses castor oil as a tool to induce diarrhea in rats to test the efficacy of Salvia officinalis extract, rather than measuring the pharmacokinetic parameters of castor oil itself. |
| popPK | Jon_2025 | irrelevant | 0 | 0 | The paper is a review of donepezil delivery systems and does not contain any pharmacokinetic data for castor oil. |
| PD | Jon_2025 | not_relevant | 0 | 0 | The paper is a review of donepezil delivery systems and does not contain any pharmacodynamic or exposure-response data for castor oil. |
| popPK | Kikuchi_2016 | irrelevant | 0 | 0 | The study investigates the effect of a castor oil derivative (HCO-40) as a vehicle on aquatic toxicity, not the pharmacokinetics of castor oil. |
| PD | Kikuchi_2016 | not_relevant | 0 | 0 | The paper investigates the effect of a dispersant (HCO-40) on the toxicity of other chemicals, not the pharmacodynamic or dose-response relationship of castor oil itself. |
| PD | Kumar_2021 | not_relevant | 1 | 0 | The paper reports PK improvements and qualitative behavioral/anti-inflammatory outcomes for curcumin and duloxetine, but does not provide numeric PD parameters or an exposure-response relationship for castor oil. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The paper is a review of resveratrol and its nano-formulations for cancer treatment and does not contain any pharmacokinetic data for castor oil. |
| PD | Kumar_2022 | not_relevant | 0 | 0 | The paper is a review of resveratrol and its nano-formulations, does not mention castor oil, and contains no numeric pharmacodynamic or exposure-response parameters. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The study focuses on the antidiarrheal and antibacterial properties of Pongamia pinnata leaf extract, not the pharmacokinetics of castor oil. |
| PD | Kumar_2026 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent antidiarrheal effects and antibacterial zones of inhibition for a plant extract, but does not provide numeric PD parameters (e.g., EC50, Emax) or a formal exposure-response model for castor oil. |
| popPK | Lebang_2026 | irrelevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome and does not contain any pharmacokinetic data for castor oil. |
| PD | Lebang_2026 | not_relevant | 0 | 0 | The paper is a review of Clerodendrum plants and does not mention castor oil or report any pharmacodynamic parameters. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper reports acute toxicity (EC50) of surfactants to Daphnia magna, not pharmacokinetic parameters for castor oil. |
| PD | Li_2013 | not_relevant | 0 | 0 | The paper reports acute toxicity (EC50) of surfactants to Daphnia magna, which is an environmental toxicology study, not a pharmacodynamic (drug exposure-response) study in a biological system relevant to drug action. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not castor oil. |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and species differences in drug disposition, reporting only qualitative tumor shrinkage percentages without any quantitative exposure-response or dose-response analysis. |
| popPK | Li_2019 | irrelevant | 0 | 0 | Castor oil is used only as a tool to induce diarrhea in mice, not as the subject drug for pharmacokinetic analysis. |
| PD | Liang_2025 | not_relevant | 1 | 0 | The paper focuses on formulation optimization and qualitative in vivo efficacy (inhibition of neuritis) without reporting numeric exposure-response or dose-response parameters for castor oil or the formulation. |
| popPK | Mahmood_2017 | irrelevant | 0 | 0 | The study evaluates the pharmacological effects of Nepeta ruderalis, using castor oil only as a tool to induce diarrhea in mice, and does not report any pharmacokinetic parameters for castor oil. |
| PGx | Mai_2022 | not_relevant | 0 | 0 | The study investigates the effect of excipients (including hydrogenated castor oil) on ranitidine bioavailability in rats, not the pharmacokinetics or pharmacodynamics of castor oil itself, and does not report pharmacogenomic effects. |
| popPK | Matyanga_2020 | irrelevant | 0 | 0 | The paper is a systematic review of African potato (Hypoxis hemerocallidea) and does not study castor oil or report any pharmacokinetic parameters for it. |
| PD | Matyanga_2020 | not_relevant | 0 | 0 | The paper is a systematic review of African potato (Hypoxis hemerocallidea) and does not contain any data, analysis, or parameters for castor oil. |
| popPK | Ming_2026 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Ming_2026 | not_relevant | 0 | 0 | The paper focuses on difelikefalin acetate, not castor oil, and does not report PD parameters for castor oil. |
| PGx | Nieschlag_2006 | not_relevant | 0 | 0 | The paper discusses testosterone treatment and mentions castor oil only as a vehicle for injectable testosterone, without reporting any pharmacogenomic effects on the PK/PD of castor oil itself. |
| PD | Pandey_2017 | not_relevant | 0 | 0 | The study uses castor oil only as a vehicle to induce diarrhea in an animal model and does not report any pharmacodynamic or exposure-response relationship for castor oil itself. |
| popPK | Pastuszak_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of testosterone undecanoate, not castor oil. |
| PD | Pastuszak_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and simulations of testosterone undecanoate; it does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it mention castor oil. |
| PGx | Peng_2020 | not_relevant | 0 | 0 | The paper discusses an allergic reaction to an excipient (castor oil) in cyclosporine, not a pharmacogenomic effect on the PK/PD of castor oil itself. |
| popPK | Qnais_2012 | irrelevant | 0 | 0 | The study evaluates the antidiarrheal activity of Laurus nobilis extract using castor oil only as a model to induce diarrhea, not as the subject drug for pharmacokinetic analysis. |
| popPK | Ravon_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy of vancomycin and tetrahydrolipstatin for tuberculosis, using hydrogenated castor oil only as an excipient, with no PK parameters reported for castor oil. |
| PD | Ravon_2025 | not_relevant | 2 | 1 | The paper reports qualitative efficacy and dose comparisons (e.g., 2-fold reduction) but does not provide a concentration-effect curve, Emax/EC50 parameters, or a PK/PD model for castor oil or the drug combination. |
| popPK | Rehman_2022 | irrelevant | 0 | 0 | The study uses castor oil as a tool to induce diarrhea in mice to test the antidiarrheal effects of a plant extract, rather than studying the pharmacokinetics of castor oil itself. |
| popPK | Riaz_2020 | irrelevant | 0 | 0 | The study uses castor oil as a tool to induce diarrhea in animals to test the pharmacological effects of Sapodilla extract, rather than measuring the pharmacokinetic parameters of castor oil itself. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not contain pharmacokinetic data for castor oil. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not report any pharmacodynamic or exposure-response data for castor oil. |
| popPK | Rovelli_1990 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Rovelli_1990 | not_relevant | 0 | 0 | The paper studies the binding interaction between vitronectin and glia-derived nexin/thrombin, not the pharmacodynamics of castor oil. |
| popPK | Ryu_2004 | irrelevant | 0 | 0 | Castor oil is used only as a model inducer for diarrhea, not as the subject drug for pharmacokinetic analysis. |
| PD | Saha_2013 | not_relevant | 0 | 0 | The paper studies the bioactivity of Musa seminifera extract; castor oil is used only as a vehicle to induce diarrhea in the animal model, not as the drug being analyzed for pharmacodynamics. |
| popPK | Sajjadi_2024 | irrelevant | 0 | 0 | The paper is a review of tacrolimus stability and formulations, not a pharmacokinetic study of castor oil. |
| PD | Sajjadi_2024 | not_relevant | 0 | 0 | The paper is a review on the physicochemical stability and formulation of tacrolimus, containing no pharmacodynamic or exposure-response data for castor oil or any other drug. |
| popPK | Santos_2023 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of menthofuran on gastrointestinal motility, using castor oil only as a tool to induce diarrhea, and does not report any pharmacokinetic parameters for castor oil. |
| popPK | Sarkar_2023 | irrelevant | 0 | 0 | The paper is a review of nanoparticulate formulations for chemotherapeutics (paclitaxel, doxorubicin) and does not mention castor oil or provide any PK parameters for it. |
| PD | Sarkar_2023 | not_relevant | 0 | 0 | The paper is a review of nanoparticulate formulations for chemotherapeutics (paclitaxel, doxorubicin) and does not mention castor oil or report any specific pharmacodynamic or exposure-response parameters. |
| PD | Schmidt_2026 | not_relevant | 3 | 2 | The paper reports IC50 values for surfactants (including polyoxyl 40 hydrogenated castor oil) in cell assays, but these are toxicological endpoints for excipients, not pharmacodynamic exposure-response relationships for the drug castor oil itself. |
| PD | Setnikar_1989 | not_relevant | 2 | 1 | The paper describes qualitative antispasmodic activity and dose ranges (4-40 mg/kg) for tiropramide, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response curve for castor oil. |
| popPK | Shah_2010 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of Mentha longifolia in a castor oil-induced diarrhea model, not the pharmacokinetics of castor oil itself. |
| popPK | Shah_2010_2 | irrelevant | 0 | 0 | Castor oil is used only as a tool to induce diarrhea in mice, not as the subject drug for pharmacokinetic analysis. |
| PD | Shao_2021 | not_relevant | 1 | 0 | The paper reports qualitative pharmacodynamic efficacy (better therapeutic effect in a rabbit model) and PK parameters (AUC, flux), but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve. |
| popPK | Shareef_2014 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Operculina turpethum, using castor oil only as a vehicle to induce diarrhea in mice, and does not report any pharmacokinetic parameters for castor oil. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 17α-hydroxyprogesterone caproate, not castor oil, which is only mentioned as the vehicle for the injection. |
| PD | Sharma_2016 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of 17α-hydroxyprogesterone caproate, not pharmacodynamics (PD) or exposure-response relationships. |
| popPK | Sharma_2019 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| PD | Sharma_2019 | not_relevant | 0 | 0 | The paper investigates Butea Monospermea bark extract, not castor oil, and does not report PD parameters for the target drug. |
| popPK | Siam_2026 | irrelevant | 0 | 0 | The paper is a review of Lannea coromandelica, not castor oil, and contains no pharmacokinetic data. |
| PD | Siam_2026 | not_relevant | 0 | 0 | The paper is a comprehensive review of Lannea coromandelica, not castor oil, and does not report specific pharmacodynamic models or numeric exposure-response parameters. |
| popPK | Sikma_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not castor oil. |
| PD | Sikma_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tacrolimus, not castor oil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Silmore_2021 | irrelevant | 0 | 0 | The paper is a systematic review of cannabidiol (CBD) pharmacokinetics, not castor oil. |
| PD | Silmore_2021 | not_relevant | 1 | 0 | The paper is a systematic review focusing on the pharmacokinetics and food effects of cannabidiol (CBD), not castor oil, and it does not report numeric pharmacodynamic parameters. |
| PD | Silva_2016 | not_relevant | 0 | 0 | The paper reports MIC and IC50 values for copper(II) complexes, not castor oil, and does not provide a concentration-effect curve or PD parameters for castor oil. |
| PD | Song_2015 | not_relevant | 0 | 0 | The paper investigates the interaction between gallic acid and trypsin, not castor oil, and reports biochemical binding/inhibition data rather than pharmacodynamic exposure-response relationships for the specified drug. |
| PD | Syed_2018 | not_relevant | 0 | 0 | The paper focuses on the formulation and physicochemical characterization of a nanoemulsion carrier; it does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or dose-effect curves for castor oil or the active ingredient. |
| popPK | Szymczak_2023 | irrelevant | 0 | 0 | The paper is a review of fisetin bioavailability and does not mention castor oil or provide any pharmacokinetic parameters for it. |
| PD | Szymczak_2023 | not_relevant | 0 | 0 | The paper is a review on fisetin bioavailability and nanotechnology, containing no data or analysis regarding castor oil or any pharmacodynamic parameters. |
| PD | Tayrouz_2003 | not_relevant | 0 | 0 | The study reports pharmacokinetic changes (Cmax, AUC) of digoxin due to Cremophor RH40, but explicitly states that digoxin did not cause a clinically significant change in pharmacodynamic parameters, and no concentration-effect or dose-response model with numeric PD parameters is reported. |
| popPK | Turner_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone undecanoate, where castor oil is merely the vehicle, not the subject drug. |
| popPK | Uddin_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Clerodendrum infortunatum extracts, using castor oil only as an agent to induce diarrhea in the animal model, not as the subject drug for PK analysis. |
| PD | Uddin_2026 | not_relevant | 2 | 1 | The paper reports dose-dependent effects of a plant extract in animal models but does not provide a concentration-effect relationship or numeric PD parameters (e.g., EC50, Emax) for castor oil; castor oil is only used as a model inducer. |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The study investigates the phytochemical and pharmacological properties of Fingerhuthia africana, using castor oil only as a positive control to induce diarrhea in mice, and reports no pharmacokinetic parameters for castor oil. |
| PD | Veras_2025 | not_relevant | 0 | 0 | The paper investigates the essential oil of Eugenia stictopetala, not castor oil, and reports in vitro IC50 values and qualitative in vivo effects without a dose-response or exposure-response analysis for castor oil. |
| popPK | Viswanatha_2011 | irrelevant | 0 | 0 | Castor oil is used only as a tool to induce diarrhea in the animal model, not as the subject drug for pharmacokinetic analysis. |
| popPK | Wen_2023 | irrelevant | 0 | 0 | The study evaluates the antidiarrheal activity of Glycyrrhiza uralensis extract using castor oil only as an agent to induce diarrhea, not as the subject drug for pharmacokinetic analysis. |
| PD | Wen_2023 | not_relevant | 0 | 0 | The provided text describes chromatograms for liguiritin, mono-ammonium glycyrrhizinate, and glycyrrhetinic acid, with no mention of castor oil or any pharmacodynamic/exposure-response analysis. |
| popPK | Wilhelm_2012 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ciclosporin, not castor oil. |
| PD | Wilhelm_2012 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of ciclosporin and limited sampling strategies, with no analysis of castor oil or any quantitative pharmacodynamic/exposure-response modeling. |
| popPK | Yao_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine A, not castor oil, which is only mentioned as a component of the comparator formulation (Cremophor EL). |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacology of NCA029 for inflammatory bowel disease and does not mention castor oil or report any pharmacokinetic parameters for it. |
| PD | Zhang_2024 | not_relevant | 3 | 2 | The paper reports dose-response efficacy in animal models (DAI, survival) and in vitro effects, but does not provide pharmacokinetic data or fit a formal PD model to derive numeric parameters like Emax or EC50. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Zhao_2024 | not_relevant | 0 | 0 | The paper investigates Ligusticum chuanxiong, not castor oil, and does not report PD parameters for the target drug. |
| popPK | da_2016 | irrelevant | 0 | 0 | The study investigates the antidiarrheal activity of a plant extract using castor oil only as a tool to induce diarrhea, not as the subject drug for pharmacokinetic analysis. |
| popPK | van_2000 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | van_2000 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of paclitaxel and Cremophor EL, not castor oil, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | van_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, and castor oil is only mentioned as an excipient in the IV formulation, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
