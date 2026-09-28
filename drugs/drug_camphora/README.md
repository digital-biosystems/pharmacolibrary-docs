<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;camphora&quot;}]"></div>

# camphora

- **generic name:** camphora
- **ATC codes:** `C01EB02`
- **DrugBank:** [DB01744](https://go.drugbank.com/drugs/DB01744) · **PubChem:** [CID 159055](https://pubchem.ncbi.nlm.nih.gov/compound/159055)
- **molar mass:** 152.2334 g/mol (C10H16O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Camphor is a bicyclic monoterpene ketone found widely in plants, especially _Cinnamomum camphora_. It is used topically as a skin antipruritic and as an anti-infective agent. When ingested, camphor has a rapid onset of toxic effects, and camphorated oil is the product most often responsible for its toxicity. The FDA ruled that camphorated oil could not be marketed in the United States and that no product could contain a concentration higher than 11%. It appears in the list of drug products withdrawn or removed from the market for safety or effectiveness.[A254252,L43942] However, camphor can be found in several nonprescription medications at lower concentrations.[A254252]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 20:59 | 59:43 | 0/0/0 | 0/0/0 | 0/0/0 | 156,183/7,892 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 1/13 | 13/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=camphora) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TRPA1 (inhibitor), TRPM8 (activator), TRPV1 (activator), TRPV1 (target), TRPV3 (activator), TRPV3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 323 matched, 90 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_25 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahmed-Laloui_2026.pdf` | Ahmed-Laloui H et al., Cholinesterase Inhibitory Activity, Gas…, Chemistry & biodiversity (2026) | pd | 5 | [10.1002/cbdv.202502879](https://doi.org/10.1002/cbdv.202502879) | [41420846](https://www.ncbi.nlm.nih.gov/pubmed/41420846) | metadata signals extractable PD data (IC50) |
| `Paredes_2014.pdf` | Paredes E et al., Ecotoxicological evaluation of four UV…, Chemosphere (2014) | pd | 5 | [10.1016/j.chemosphere.2013.10.053](https://doi.org/10.1016/j.chemosphere.2013.10.053) | [24359924](https://www.ncbi.nlm.nih.gov/pubmed/24359924) | metadata signals extractable PD data (EC50) |
| `Vieira_2021.pdf` | Vieira Sanches M et al., Ecotoxicological screening of UV-filter…, Environmental pollution (Ba… (2021) | pd | 5 | [10.1016/j.envpol.2021.118011](https://doi.org/10.1016/j.envpol.2021.118011) | [34500394](https://www.ncbi.nlm.nih.gov/pubmed/34500394) | metadata signals extractable PD data (EC50) |
| `Chebbac_2022.pdf` | Chebbac K et al., Antioxidant and Antimicrobial Activitie…, Molecules (Basel, Switzerla… (2022) | pd | 4 | [10.3390/molecules27031136](https://doi.org/10.3390/molecules27031136) | [35164402](https://www.ncbi.nlm.nih.gov/pubmed/35164402) | metadata signals extractable PD data (IC50) |
| `Ed-Dra_2020.pdf` | Ed-Dra A et al., Chemical composition, antioxidant capac…, Microbial pathogenesis (2020) | pd | 4 | [10.1016/j.micpath.2020.104510](https://doi.org/10.1016/j.micpath.2020.104510) | [32956790](https://www.ncbi.nlm.nih.gov/pubmed/32956790) | metadata signals extractable PD data (IC50) |
| `El_2022.pdf` | El Abdali Y et al., Plants (Basel, Switzerland) (2022) | pd | 4 | [10.3390/plants11030311](https://doi.org/10.3390/plants11030311) | [35161292](https://www.ncbi.nlm.nih.gov/pubmed/35161292) | metadata signals extractable PD data (IC50) |
| `El_2023.pdf` | El Abdali Y et al., Antibacterial, Antioxidant, and in sili…, Evidence-based complementar… (2023) | pd | 4 | [10.1155/2023/9766002](https://doi.org/10.1155/2023/9766002) | [36820398](https://www.ncbi.nlm.nih.gov/pubmed/36820398) | metadata signals extractable PD data (IC50) |
| `Elbouzidi_2025.pdf` | Elbouzidi A et al., Optimization of Eugenol, Camphor, and T…, Current issues in molecular… (2025) | pd | 4 | [10.3390/cimb47070512](https://doi.org/10.3390/cimb47070512) | [40728981](https://www.ncbi.nlm.nih.gov/pubmed/40728981) | metadata signals extractable PD data (IC50) |
| `Farzaneh_2006.pdf` | Farzaneh M et al., Chemical composition and antifungal act…, Communications in agricultu… (2006) | pd | 4 | not captured | [17390897](https://www.ncbi.nlm.nih.gov/pubmed/17390897) | metadata signals extractable PD data (EC50) |
| `Gogoi_2025.pdf` | Gogoi A et al., In Vitro and In Silico Approaches to Ex…, Chemistry & biodiversity (2025) | pd | 4 | [10.1002/cbdv.202501395](https://doi.org/10.1002/cbdv.202501395) | [40743998](https://www.ncbi.nlm.nih.gov/pubmed/40743998) | metadata signals extractable PD data (IC50) |
| `Hall_2004.pdf` | Hall AC et al., Modulation of human GABAA and glycine r…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.10.026](https://doi.org/10.1016/j.ejphar.2004.10.026) | [15588619](https://www.ncbi.nlm.nih.gov/pubmed/15588619) | metadata signals extractable PD data (EC50) |
| `Hendel_2024.pdf` | Hendel N et al., Phytochemical Analysis and Antioxidant…, International journal of mo… (2024) | pd | 4 | [10.3390/ijms25147989](https://doi.org/10.3390/ijms25147989) | [39063231](https://www.ncbi.nlm.nih.gov/pubmed/39063231) | metadata signals extractable PD data (IC50) |
| `Ilić_2026.pdf` | Ilić ZS et al., Effect of Light Modification by Shading…, Plants (Basel, Switzerland) (2026) | pd | 4 | [10.3390/plants15030377](https://doi.org/10.3390/plants15030377) | [41681542](https://www.ncbi.nlm.nih.gov/pubmed/41681542) | metadata signals extractable PD data (EC50) |
| `Kang_2019.pdf` | Kang G et al., Screening for Plant Volatile Emissions…, Plants (Basel, Switzerland) (2019) | pd | 4 | [10.3390/plants8110457](https://doi.org/10.3390/plants8110457) | [31661792](https://www.ncbi.nlm.nih.gov/pubmed/31661792) | metadata signals extractable PD data (EC50) |
| `Kazemi_2015.pdf` | Kazemi M et al., Chemical composition and biological act…, Natural product research (2015) | pd | 4 | [10.1080/14786419.2014.953949](https://doi.org/10.1080/14786419.2014.953949) | [25209950](https://www.ncbi.nlm.nih.gov/pubmed/25209950) | metadata signals extractable PD data (IC50) |
| `Long_2026.pdf` | Long J et al., Phenolic Compounds from Cinnamomum camp…, Molecules (Basel, Switzerla… (2026) | pd | 4 | [10.3390/molecules31091550](https://doi.org/10.3390/molecules31091550) | [42123912](https://www.ncbi.nlm.nih.gov/pubmed/42123912) | metadata signals extractable PD data (IC50) |
| `Milenković_2026.pdf` | Milenković L et al., Influence of Shading on Essential Oil Q…, Plants (Basel, Switzerland) (2026) | pd | 4 | [10.3390/plants15111711](https://doi.org/10.3390/plants15111711) | [42280748](https://www.ncbi.nlm.nih.gov/pubmed/42280748) | metadata signals extractable PD data (EC50) |
| `Phyu_2026.pdf` | Phyu MP et al., Extraction Processing Technologies and…, Antioxidants (Basel, Switze… (2026) | pd | 4 | [10.3390/antiox15020227](https://doi.org/10.3390/antiox15020227) | [41750608](https://www.ncbi.nlm.nih.gov/pubmed/41750608) | metadata signals extractable PD data (IC50) |
| `Rguez_2026.pdf` | Rguez S et al., Postharvest Control of Alternaria alter…, Chemistry & biodiversity (2026) | pd | 4 | [10.1002/cbdv.202503424](https://doi.org/10.1002/cbdv.202503424) | [42570279](https://www.ncbi.nlm.nih.gov/pubmed/42570279) | metadata signals extractable PD data (IC50) |
| `Schepetkin_2023.pdf` | Schepetkin IA et al., Composition and Biological Activity of…, Plants (Basel, Switzerland) (2023) | pd | 4 | [10.3390/plants12142643](https://doi.org/10.3390/plants12142643) | [37514257](https://www.ncbi.nlm.nih.gov/pubmed/37514257) | metadata signals extractable PD data (EC50) |
| `Silva_2016.pdf` | Silva FS et al., Chemical composition and pharmacologica…, Pharmaceutical biology (2016) | pd | 4 | [10.3109/13880209.2015.1005751](https://doi.org/10.3109/13880209.2015.1005751) | [25856708](https://www.ncbi.nlm.nih.gov/pubmed/25856708) | metadata signals extractable PD data (EC50) |
| `Wang_2026.pdf` | Wang Z et al., Isolation, Antioxidant Activity, and Re…, ACS omega (2026) | pd | 4 | [10.1021/acsomega.6c00287](https://doi.org/10.1021/acsomega.6c00287) | [42110730](https://www.ncbi.nlm.nih.gov/pubmed/42110730) | metadata signals extractable PD data (IC50) |
| `Yang_2026.pdf` | Yang Y et al., Anti-diabetic effect by Cinnamomum camp…, Spectrochimica acta. Part A… (2026) | pd | 4 | [10.1016/j.saa.2026.128152](https://doi.org/10.1016/j.saa.2026.128152) | [42248009](https://www.ncbi.nlm.nih.gov/pubmed/42248009) | metadata signals extractable PD data (IC50) |
| `Seo_2008.pdf` | Seo KA et al., The monoterpenoids citral and geraniol…, Chemico-biological interact… (2008) | pgx | 7 | [10.1016/j.cbi.2008.06.003](https://doi.org/10.1016/j.cbi.2008.06.003) | [18611395](https://www.ncbi.nlm.nih.gov/pubmed/18611395) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Yao_2007.pdf` | Yao H et al., Structural evidence for a functionally…, Proteins (2007) | pgx | 7 | [10.1002/prot.21508](https://doi.org/10.1002/prot.21508) | [17598143](https://www.ncbi.nlm.nih.gov/pubmed/17598143) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-27T20:49:32.666131+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmed-Laloui_2026 | not_relevant | 0 | 0 | The paper focuses on the cholinesterase inhibitory activity of Artemisia essential oils and does not mention camphora or report any pharmacodynamic or exposure-response relationships for it. |
| popPK | Alfatemi_2015 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro antimicrobial study of essential oil composition, not a pharmacokinetic study, and camphor is only a minor constituent mentioned in the chemical profile. |
| PD | Alfatemi_2015 | not_relevant | 0 | 0 | The study reports the chemical composition of an essential oil (containing 3.71% camphor) and its bulk antimicrobial/antioxidant activity, but does not report a specific pharmacodynamic or exposure-response relationship for the individual compound camphor. |
| popPK | Aramaki_2011 | irrelevant | 0 | 0 | The paper studies the molecular binding mechanism of d-camphor to a bacterial repressor protein (CamR) and reports dissociation constants, not pharmacokinetic disposition parameters. |
| PD | Aramaki_2011 | not_relevant | 0 | 0 | The paper describes molecular binding kinetics (Kd, Hill coefficient) of d-camphor to the CamR repressor protein, which is a biochemical mechanism study, not a pharmacodynamic (exposure-response) analysis of drug effect in a biological system. |
| popPK | Asbabou_2024 | irrelevant | 0 | 0 | The paper is a phytochemical and in vitro study of essential oils, not a pharmacokinetic study, and contains no PK parameters for camphora. |
| PD | Asbabou_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and antimicrobial assays for essential oils, not a pharmacodynamic (exposure-response) relationship for the specific drug camphor. |
| PGx | Avesani_2025 | not_relevant | 0 | 0 | The paper studies plant defense mechanisms in grapevine and mentions camphor only as a metabolite, not as a drug subject to pharmacogenomic analysis. |
| PD | Burmistrov_2020 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a series of compounds, which is a single-point potency metric rather than a pharmacodynamic exposure-response or dose-response curve analysis with derivable PD parameters like Emax or slope. |
| popPK | Chebbac_2022 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Chebbac_2022 | not_relevant | 0 | 0 | The paper studies the antimicrobial activity of Artemisia aragonensis essential oil, not the pharmacodynamics of camphora. |
| popPK | Chokechaijaroenporn_1994 | irrelevant | 0 | 0 | The paper studies mosquito repellent activity of essential oils and does not report any pharmacokinetic parameters for camphora. |
| PD | Chokechaijaroenporn_1994 | not_relevant | 3 | 2 | The paper reports EC50/EC90 values for essential oils (mixtures) against larvae, not for the specific compound camphor, and does not provide a concentration-effect curve or PD model for camphor itself. |
| PD | DELPHAUT_1951 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or analysis results. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antifungal activity of camphor derivatives, not the pharmacokinetics of camphora. |
| popPK | Demissie_2013 | irrelevant | 0 | 0 | The paper is a biochemical study on the biosynthesis of monoterpenes in lavender and does not report pharmacokinetic parameters for camphora. |
| PD | Demissie_2013 | not_relevant | 0 | 0 | The paper describes the biochemical characterization of a plant enzyme (lavandulyl diphosphate synthase) and its kinetic parameters (Km, kcat), not a pharmacodynamic or exposure-response relationship for the drug camphor. |
| popPK | Duan_2022 | irrelevant | 0 | 0 | The paper is a study on the synthesis and in-vitro antifungal activity of camphor derivatives, not a pharmacokinetic study. |
| popPK | Ed-Dra_2020 | irrelevant | 0 | 0 | The paper is a study on the chemical composition and antibacterial activity of essential oils, not a pharmacokinetic study of camphora. |
| PD | Ed-Dra_2020 | not_relevant | 0 | 0 | The paper reports MICs and inhibition diameters for essential oils, not a pharmacodynamic exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for camphor. |
| popPK | El_2022 | irrelevant | 0 | 0 | The paper investigates the chemical composition and biological activities (antioxidant, antifungal, insecticidal) of lavender essential oil, not the pharmacokinetics of camphora. |
| PD | El_2022 | not_relevant | 0 | 0 | The paper reports in vitro/insect bioassay data (IC50, LC50) for the essential oil mixture, not a pharmacodynamic exposure-response relationship for the specific drug camphor in a biological system. |
| PD | El_2023 | not_relevant | 0 | 0 | The paper studies essential oils of Lavandula dentata, not the specific drug camphora, and does not report PK/PD modeling or exposure-response relationships for camphora. |
| PD | Elshibani_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for crude plant extracts and essential oils, not a pharmacodynamic exposure-response or dose-response relationship for the specific drug camphor. |
| popPK | Farzaneh_2006 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Farzaneh_2006 | not_relevant | 0 | 0 | The paper studies the antifungal activity of Artemisia essential oils, not the drug camphora, and does not report pharmacodynamic parameters for camphora. |
| PD | Gogoi_2025 | not_relevant | 0 | 0 | The paper focuses on Curcuma amada essential oil, not camphora, and does not report specific pharmacodynamic parameters for camphora. |
| popPK | Granger_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of borneol's effect on GABA receptors, not a pharmacokinetic study of camphora. |
| popPK | Hall_2004 | irrelevant | 0 | 0 | The study investigates the pharmacological modulation of GABAA and glycine receptors by monoterpenoids (including camphor) in Xenopus oocytes, which is a mechanistic/in-vitro study and does not report pharmacokinetic parameters. |
| PD | Hall_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacology of monoterpenoids on recombinant receptors in Xenopus oocytes, not the pharmacodynamics of camphor in humans or a clinical PK/PD context. |
| PGx | He_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of Bingpian (borneol/isoborneol) and its metabolites, but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Hendel_2024 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PD | Hendel_2024 | not_relevant | 0 | 0 | The paper analyzes phytochemicals and antioxidant/antifungal activities of plant extracts, not the pharmacokinetics or pharmacodynamics of the specific drug camphora. |
| popPK | Heneweer_2005 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study on UV filters (including 4-MBC, not camphora) and does not report pharmacokinetic parameters. |
| PD | Huang_2025 | not_relevant | 1 | 0 | The study reports qualitative pharmacodynamic effects (inflammation markers) and pharmacokinetic changes (exposure) but does not provide numeric concentration-effect or dose-response parameters for camphor. |
| PD | Ilić_2026 | not_relevant | 0 | 0 | The paper studies the effect of shading nets on lavender essential oil yield and composition, not the pharmacodynamics or exposure-response of a drug. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper describes a molecular template for CYP2D6 substrates and does not report pharmacogenomic effects on the PK or PD of camphora. |
| popPK | Kang_2019 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Kang_2019 | not_relevant | 0 | 0 | The paper focuses on the identification of volatile compounds (L-fenchone and 1,8-cineole) and their allelopathic activity, not on the pharmacodynamics or exposure-response of camphora. |
| popPK | Kazemi_2015 | irrelevant | 0 | 0 | The paper is a phytochemical and antimicrobial study of essential oil, not a pharmacokinetic study, and reports no disposition parameters for camphora. |
| PD | Kazemi_2015 | not_relevant | 0 | 0 | The paper reports MIC/MBC values for the whole essential oil and IC50/EC50 for antioxidant activity, but does not provide a concentration-effect curve or PD parameters specifically for camphor. |
| PD | Khan_2025 | not_relevant | 0 | 0 | The paper reports antimicrobial MIC/IC50 values for whole essential oils, not a pharmacodynamic exposure-response relationship for the specific compound camphor. |
| PD | Lenka_2025 | not_relevant | 0 | 0 | The paper reports chemometric diversity and bioactivity assays (DPPH IC50, MIC) for essential oil mixtures, not a pharmacodynamic exposure-response or dose-response relationship for the specific drug camphor. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper is a study on the insecticidal activity and chemical composition of essential oils, not a pharmacokinetic study, and reports no disposition parameters for camphora. |
| PD | Long_2026 | not_relevant | 0 | 0 | The paper focuses on the extraction, purification, and isolation of phenolic compounds from Cinnamomum camphora roots, not on the pharmacokinetics or pharmacodynamics of the drug camphor itself. |
| PGx | Lonsdale_2012 | not_relevant | 0 | 0 | The paper is a computational chemistry study on DFT methods for P450 enzymes and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on androgen receptor activity of UV filters, not a pharmacokinetic study, and camphora is not the subject drug. |
| PD | Malti_2019 | not_relevant | 1 | 1 | The paper reports a single IC50 value for the total essential oil (not the specific drug camphor) and focuses on chemical composition, lacking a dose-response curve or PK/PD modeling for the specific compound. |
| popPK | Marcin_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicology study assessing the acute toxicity of UV filters (including 4-methoxybenzylidene camphor) in aquatic organisms, not a pharmacokinetic study reporting disposition parameters for camphora. |
| popPK | Milenković_2026 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Milenković_2026 | not_relevant | 0 | 0 | The paper analyzes the effect of shading and harvest time on sage essential oil composition, not the pharmacodynamic or exposure-response relationship of camphora in a biological system. |
| PD | Mohanty_2025 | not_relevant | 3 | 2 | The paper reports a single IC50 value for the whole essential oil (CZEO) but does not provide a dose-response curve, PK/PD model, or specific PD parameters for camphor itself. |
| PD | Mostafa-Hedeab_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for Thymol and Limonin, but does not report any quantitative antiviral activity or PD parameters for Camphor. |
| PD | Muñoz-Núñez_2025 | not_relevant | 3 | 3 | The paper reports IC50 values for cytotoxicity, which are single-point potency metrics, but does not provide full dose-response curves, Emax, or any PK/PD modeling required for extractable pharmacodynamic relationships. |
| PD | Oalđe_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for whole plant extracts and rosmarinic acid, but does not provide a pharmacodynamic model or exposure-response relationship for camphor. |
| popPK | Ogawa_1996 | irrelevant | 0 | 0 | The paper analyzes translocatory balance in fruit physiology and mentions Cinnamomum camphora only as a comparative plant species, not as a drug subject of pharmacokinetic study. |
| popPK | Paredes_2014 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on UV filters (including 4-MBC) in marine organisms, not a pharmacokinetic study of camphora. |
| PD | Phyu_2026 | not_relevant | 0 | 0 | The paper focuses on extraction processing technologies and their effects on antioxidant activity in Cinnamomum camphora leaves, not on pharmacodynamic or exposure-response relationships for a drug. |
| popPK | Schepetkin_2023 | irrelevant | 0 | 0 | no_text gate: only 185 chars of text extracted (&lt; 400) |
| PD | Schepetkin_2023 | not_relevant | 0 | 0 | The paper focuses on the chemical composition and immunomodulatory activity of essential oils, specifically dillapiole, and does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for camphora. |
| PGx | Seo_2008 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of CYP2B6 by monoterpenoids (including camphor) but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Sieratowicz_2011 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on UV filters (including camphor derivatives) in aquatic organisms, not a pharmacokinetic study for the drug camphora. |
| popPK | Silva_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Silva_2016 | not_relevant | 0 | 0 | The paper focuses on the chemical composition and general pharmacological properties of Lippia thymoides essential oils, not on the pharmacodynamics or exposure-response relationship of camphora. |
| popPK | Sokolova_2021 | irrelevant | 0 | 0 | The paper reports antiviral activity (EC50) of camphor derivatives, not pharmacokinetic parameters. |
| PD | Tishchenko_2026 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values and basic PK parameters (T1/2) but does not provide an exposure-response or dose-response analysis linking plasma concentrations to antiviral effect in vivo. |
| popPK | Tovar-Sánchez_2013 | irrelevant | 0 | 0 | The paper is an environmental study on sunscreen pollutants in coastal waters and does not report pharmacokinetic parameters for camphora. |
| PD | Tsoĭ_1981 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters are reported. |
| popPK | Tsui_2019 | irrelevant | 0 | 0 | The paper is an environmental toxicology study on UV filters in marine water, not a pharmacokinetic study of camphora. |
| popPK | Vieira_2021 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Vieira_2021 | not_relevant | 0 | 0 | The paper focuses on ecotoxicological screening of UV filters in marine bioassays and does not report pharmacodynamic or exposure-response relationships for the drug camphora. |
| popPK | Vogt-Eisele_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of TRPV3 ion channel activation by camphor and other monoterpenes, reporting no pharmacokinetic parameters. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | The paper studies the biosynthesis of artemisinin in Artemisia annua plants, not the pharmacogenomics of camphor in humans. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical adjuvant (borneol) on the pharmacokinetics of piperlongumine, not the effect of a gene variant or genotype. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on the isolation and antioxidant activity of Chamazulene, not the pharmacodynamics or exposure-response of camphora. |
| popPK | Wang_2026_2 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antifungal activity of camphor derivatives, not the pharmacokinetics of camphora. |
| PD | Yan_2025 | not_relevant | 0 | 0 | The paper reports a safety/toxicology study (NOAEL) and explicitly states there were no dose-response relationships for the measured endpoints; it does not report pharmacodynamic parameters like Emax or EC50. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of camphor-based derivatives as fungicides, reporting no pharmacokinetic parameters for camphora. |
| popPK | Yang_2023_2 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of camphor derivatives, not the pharmacokinetics of camphora. |
| PD | Yang_2023_2 | not_relevant | 3 | 2 | The paper reports single-point IC50/EC50 values for antifungal and enzyme inhibition but does not provide a full dose-response curve, PK/PD model, or multiple concentration-effect data points to derive a PD relationship. |
| PGx | Yao_2007 | not_relevant | 0 | 0 | The paper describes the structural mechanism of substrate binding in P450cam, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Zarubaev_2015 | irrelevant | 0 | 0 | The paper reports antiviral efficacy and mechanism of action for a camphor derivative, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for camphora. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal activity and mechanism of action of camphor derivatives, not on pharmacokinetic parameters. |
| popPK | Zouari_2011 | irrelevant | 0 | 0 | The paper is a phytochemical analysis of a plant and reports no pharmacokinetic parameters for camphora. |
| PD | Zouari_2011 | not_relevant | 0 | 0 | The paper reports the chemical composition (camphor content) and antioxidant activity of plant extracts, but does not report a pharmacodynamic or exposure-response relationship for camphor itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
