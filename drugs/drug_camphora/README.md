<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;camphora&quot;}]"></div>

# camphora

- **generic name:** camphora
- **ATC codes:** `C01EB02`
- **DrugBank:** [DB01744](https://go.drugbank.com/drugs/DB01744) · **PubChem:** [CID 159055](https://pubchem.ncbi.nlm.nih.gov/compound/159055)
- **molar mass:** 152.2334 g/mol (C10H16O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Camphor is a natural compound that was used in cardiac therapy and, more generally, as a topical remedy in traditional medicine. It is no longer used as a medicine, having been withdrawn from drug databases, though it remains known as a chemical substance.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27089415](https://www.wikidata.org/wiki/Q27089415) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:38 | 1:15 | 0/0/0 | 0/0/0 | 0/0/0 | 243,358/3,863 | einfracz / qwen3.8-27b | 40 | 2/18 | 39/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=camphora) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TRPA1 (inhibitor), TRPM8 (activator), TRPV1 (activator), TRPV1 (target), TRPV3 (activator), TRPV3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 323 matched, 118 returned
- **screened:** 12  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahmed-Laloui_2026.pdf` | Ahmed-Laloui H et al., Cholinesterase Inhibitory Activity, Gas…, Chemistry & biodiversity (2026) | pd | 5 | [10.1002/cbdv.202502879](https://doi.org/10.1002/cbdv.202502879) | [41420846](https://www.ncbi.nlm.nih.gov/pubmed/41420846) | metadata signals extractable PD data (IC50) |
| `Paredes_2014.pdf` | Paredes E et al., Ecotoxicological evaluation of four UV…, Chemosphere (2014) | pd | 5 | [10.1016/j.chemosphere.2013.10.053](https://doi.org/10.1016/j.chemosphere.2013.10.053) | [24359924](https://www.ncbi.nlm.nih.gov/pubmed/24359924) | metadata signals extractable PD data (EC50) |
| `Sankaranarayanan_2026.pdf` | Sankaranarayanan P et al., In vitro and in silico validation of th…, In silico pharmacology (2026) | pd | 5 | [10.1007/s40203-026-00610-x](https://doi.org/10.1007/s40203-026-00610-x) | [41930245](https://www.ncbi.nlm.nih.gov/pubmed/41930245) | metadata signals extractable PD data (IC50) |
| `Vieira_2021.pdf` | Vieira Sanches M et al., Ecotoxicological screening of UV-filter…, Environmental pollution (Ba… (2021) | pd | 5 | [10.1016/j.envpol.2021.118011](https://doi.org/10.1016/j.envpol.2021.118011) | [34500394](https://www.ncbi.nlm.nih.gov/pubmed/34500394) | metadata signals extractable PD data (EC50) |
| `Beiras_2019.pdf` | Beiras R et al., Polyethylene microplastics do not incre…, The Science of the total en… (2019) | pd | 4 | [10.1016/j.scitotenv.2019.07.106](https://doi.org/10.1016/j.scitotenv.2019.07.106) | [31326592](https://www.ncbi.nlm.nih.gov/pubmed/31326592) | metadata signals extractable PD data (EC50) |
| `Chebbac_2022.pdf` | Chebbac K et al., Antioxidant and Antimicrobial Activitie…, Molecules (Basel, Switzerla… (2022) | pd | 4 | [10.3390/molecules27031136](https://doi.org/10.3390/molecules27031136) | [35164402](https://www.ncbi.nlm.nih.gov/pubmed/35164402) | metadata signals extractable PD data (IC50) |
| `Ed-Dra_2020.pdf` | Ed-Dra A et al., Chemical composition, antioxidant capac…, Microbial pathogenesis (2020) | pd | 4 | [10.1016/j.micpath.2020.104510](https://doi.org/10.1016/j.micpath.2020.104510) | [32956790](https://www.ncbi.nlm.nih.gov/pubmed/32956790) | metadata signals extractable PD data (IC50) |
| `El_2022.pdf` | El Abdali Y et al., Lavandula dentata L.: Phytochemical Ana…, Plants (Basel, Switzerland) (2022) | pd | 4 | [10.3390/plants11030311](https://doi.org/10.3390/plants11030311) | [35161292](https://www.ncbi.nlm.nih.gov/pubmed/35161292) | metadata signals extractable PD data (IC50) |
| `Farzaneh_2006.pdf` | Farzaneh M et al., Chemical composition and antifungal act…, Communications in agricultu… (2006) | pd | 4 | not captured | [17390897](https://www.ncbi.nlm.nih.gov/pubmed/17390897) | metadata signals extractable PD data (EC50) |
| `Gogoi_2025.pdf` | Gogoi A et al., In Vitro and In Silico Approaches to Ex…, Chemistry & biodiversity (2025) | pd | 4 | [10.1002/cbdv.202501395](https://doi.org/10.1002/cbdv.202501395) | [40743998](https://www.ncbi.nlm.nih.gov/pubmed/40743998) | metadata signals extractable PD data (IC50) |
| `Hall_2004.pdf` | Hall AC et al., Modulation of human GABAA and glycine r…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.10.026](https://doi.org/10.1016/j.ejphar.2004.10.026) | [15588619](https://www.ncbi.nlm.nih.gov/pubmed/15588619) | metadata signals extractable PD data (EC50) |
| `Hendel_2024.pdf` | Hendel N et al., Phytochemical Analysis and Antioxidant…, International journal of mo… (2024) | pd | 4 | [10.3390/ijms25147989](https://doi.org/10.3390/ijms25147989) | [39063231](https://www.ncbi.nlm.nih.gov/pubmed/39063231) | metadata signals extractable PD data (IC50) |
| `Kang_2019.pdf` | Kang G et al., Screening for Plant Volatile Emissions…, Plants (Basel, Switzerland) (2019) | pd | 4 | [10.3390/plants8110457](https://doi.org/10.3390/plants8110457) | [31661792](https://www.ncbi.nlm.nih.gov/pubmed/31661792) | metadata signals extractable PD data (EC50) |
| `Kazemi_2015.pdf` | Kazemi M et al., Chemical composition and biological act…, Natural product research (2015) | pd | 4 | [10.1080/14786419.2014.953949](https://doi.org/10.1080/14786419.2014.953949) | [25209950](https://www.ncbi.nlm.nih.gov/pubmed/25209950) | metadata signals extractable PD data (IC50) |
| `Milenković_2026.pdf` | Milenković L et al., Influence of Shading on Essential Oil Q…, Plants (Basel, Switzerland) (2026) | pd | 4 | [10.3390/plants15111711](https://doi.org/10.3390/plants15111711) | [42280748](https://www.ncbi.nlm.nih.gov/pubmed/42280748) | metadata signals extractable PD data (EC50) |
| `Rguez_2026.pdf` | Rguez S et al., Postharvest Control of Alternaria alter…, Chemistry & biodiversity (2026) | pd | 4 | [10.1002/cbdv.202503424](https://doi.org/10.1002/cbdv.202503424) | [42570279](https://www.ncbi.nlm.nih.gov/pubmed/42570279) | metadata signals extractable PD data (IC50) |
| `Schepetkin_2023.pdf` | Schepetkin IA et al., Composition and Biological Activity of…, Plants (Basel, Switzerland) (2023) | pd | 4 | [10.3390/plants12142643](https://doi.org/10.3390/plants12142643) | [37514257](https://www.ncbi.nlm.nih.gov/pubmed/37514257) | metadata signals extractable PD data (EC50) |
| `Silva_2016.pdf` | Silva FS et al., Chemical composition and pharmacologica…, Pharmaceutical biology (2016) | pd | 4 | [10.3109/13880209.2015.1005751](https://doi.org/10.3109/13880209.2015.1005751) | [25856708](https://www.ncbi.nlm.nih.gov/pubmed/25856708) | metadata signals extractable PD data (EC50) |
| `Yang_2026.pdf` | Yang Y et al., Anti-diabetic effect by Cinnamomum camp…, Spectrochimica acta. Part A… (2026) | pd | 4 | [10.1016/j.saa.2026.128152](https://doi.org/10.1016/j.saa.2026.128152) | [42248009](https://www.ncbi.nlm.nih.gov/pubmed/42248009) | metadata signals extractable PD data (IC50) |
| `Seo_2008.pdf` | Seo KA et al., The monoterpenoids citral and geraniol…, Chemico-biological interact… (2008) | pgx | 7 | [10.1016/j.cbi.2008.06.003](https://doi.org/10.1016/j.cbi.2008.06.003) | [18611395](https://www.ncbi.nlm.nih.gov/pubmed/18611395) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Yao_2007.pdf` | Yao H et al., Structural evidence for a functionally…, Proteins (2007) | pgx | 7 | [10.1002/prot.21508](https://doi.org/10.1002/prot.21508) | [17598143](https://www.ncbi.nlm.nih.gov/pubmed/17598143) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-08T11:38:07.894484+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Aati_2024 | not_relevant | 0 | 0 | The paper reports phytochemical composition and in vitro enzyme inhibition percentages, but does not provide concentration-response curves, IC50 values, or any numeric pharmacodynamic parameters for camphor. |
| PD | Ahmed-Laloui_2026 | not_relevant | 0 | 0 | The paper focuses on the cholinesterase inhibitory activity of Artemisia essential oils and does not mention camphora or report any pharmacodynamic or exposure-response relationships for it. |
| popPK | Alfatemi_2015 | irrelevant | 0 | 0 | The study analyzes the chemical composition and in vitro antimicrobial activity of essential oil, containing no pharmacokinetic parameters. |
| PD | Alfatemi_2015 | not_relevant | 0 | 0 | The study reports the chemical composition of an essential oil (containing 3.71% camphor) and its bulk antimicrobial/antioxidant activity, but does not report a specific pharmacodynamic or exposure-response relationship for the individual compound camphor. |
| popPK | Aramaki_2011 | irrelevant | 0 | 0 | The paper studies the molecular binding mechanism of d-camphor to the bacterial repressor protein (CamR), which is an in vitro mechanistic study, not a pharmacokinetic study of drug disposition. |
| PD | Aramaki_2011 | not_relevant | 0 | 0 | The paper describes molecular binding kinetics (Kd, Hill coefficient) of d-camphor to the CamR repressor protein, which is a biochemical mechanism study, not a pharmacodynamic (exposure-response) analysis of drug effect in a biological system. |
| popPK | Asbabou_2024 | irrelevant | 0 | 0 | The study analyzes the phytochemical composition and antimicrobial properties of essential oils, containing no pharmacokinetic parameters for camphor. |
| PD | Asbabou_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and antimicrobial assays for essential oils, not a pharmacodynamic (exposure-response) relationship for the specific drug camphor. |
| PGx | Avesani_2025 | not_relevant | 0 | 0 | The paper studies plant defense mechanisms against downy mildew, not human pharmacogenomics or PK/PD parameters of the drug Camphora. |
| popPK | Beiras_2019 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Beiras_2019 | not_relevant | 0 | 0 | The paper investigates the toxicity of nonylphenol and 4-MBC in the presence of microplastics, not the pharmacodynamics of camphora. |
| PD | Burmistrov_2020 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a series of compounds, which is a single-point potency metric rather than a pharmacodynamic exposure-response or dose-response curve analysis with derivable PD parameters like Emax or slope. |
| popPK | Chebbac_2022 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Chebbac_2022 | not_relevant | 0 | 0 | The paper studies the antimicrobial activity of Artemisia aragonensis essential oil, not the pharmacodynamics of camphora. |
| popPK | Chokechaijaroenporn_1994 | irrelevant | 0 | 0 | The study reports mosquito repellent and larvicidal activities of essential oils, not pharmacokinetic parameters for camphor. |
| PD | Chokechaijaroenporn_1994 | not_relevant | 3 | 2 | The paper reports EC50/EC90 values for essential oils (mixtures) against larvae, not for the specific compound camphor, and does not provide a concentration-effect curve or PD model for camphor itself. |
| PD | DELPHAUT_1951 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or analysis results. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro antifungal activity and mechanistic design of camphor hydrazide derivatives as fungicides, not on the pharmacokinetics of camphora. |
| popPK | Demissie_2013 | irrelevant | 0 | 0 | This is a biochemical study on the biosynthesis of monoterpenes in lavender plants (in vitro enzyme characterization) and does not report pharmacokinetic parameters for the drug camphora. |
| PD | Demissie_2013 | not_relevant | 0 | 0 | The paper describes the biochemical characterization of a plant enzyme (lavandulyl diphosphate synthase) and its kinetic parameters (Km, kcat), not a pharmacodynamic or exposure-response relationship for the drug camphor. |
| popPK | Duan_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro antifungal/cytotoxic activity of camphor derivatives, containing no pharmacokinetic data. |
| popPK | Ed-Dra_2020 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PD | Ed-Dra_2020 | not_relevant | 0 | 0 | The paper reports MICs and inhibition diameters for essential oils, not a pharmacodynamic exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for camphor. |
| popPK | El_2022 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | El_2022 | not_relevant | 0 | 0 | The paper reports in vitro/insect bioassay data (IC50, LC50) for the essential oil mixture, not a pharmacodynamic exposure-response relationship for the specific drug camphor in a biological system. |
| PD | El_2023 | not_relevant | 0 | 0 | The paper studies essential oils of Lavandula dentata, not the specific drug camphora, and does not report PK/PD modeling or exposure-response relationships for camphora. |
| PD | El_2024 | not_relevant | 2 | 2 | The paper reports IC50 values for the whole essential oil, not for the specific compound camphor, and lacks a formal PK/PD or dose-response curve for camphor itself. |
| PD | Elbouzidi_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of essential oil mixtures, not a pharmacodynamic or exposure-response relationship for the drug camphor in a biological system. |
| PD | Elshibani_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for crude plant extracts and essential oils, not a pharmacodynamic exposure-response or dose-response relationship for the specific drug camphor. |
| PD | Ettakifi_2023 | not_relevant | 0 | 0 | The paper focuses on the chemical characterization and antifungal activity of Blue Tansy essential oil against a fungus, with no mention of camphora or any pharmacodynamic/exposure-response modeling. |
| popPK | Farzaneh_2006 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Farzaneh_2006 | not_relevant | 0 | 0 | The paper studies the antifungal activity of Artemisia essential oils, not the drug camphora, and does not report pharmacodynamic parameters for camphora. |
| popPK | Freitas_2021 | irrelevant | 0 | 0 | The paper describes a pharmacological/mechanistic study of camphor's relaxing effect on isolated rat trachea (in vitro/ex vivo) rather than a pharmacokinetic study reporting disposition parameters. |
| PD | Gogoi_2025 | not_relevant | 0 | 0 | The paper focuses on Curcuma amada essential oil, not camphora, and does not report specific pharmacodynamic parameters for camphora. |
| popPK | Granger_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of borneol and its analogues (including camphor) on GABA receptors, containing no pharmacokinetic parameters. |
| PD | Haj_2025 | not_relevant | 4 | 4 | The paper reports dose-response data (MIC, MFC, inhibition rates) for a complex essential oil mixture, not for the specific drug 'camphora' (camphor), and lacks a formal PD model or specific numeric PD parameters for the isolated compound. |
| popPK | Hall_2004 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Hall_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacology of monoterpenoids on recombinant receptors in Xenopus oocytes, not the pharmacodynamics of camphor in humans or a clinical PK/PD context. |
| PD | Hashemi_2023 | not_relevant | 0 | 0 | The paper reports food science data (antimicrobial zones, lipid oxidation) for rosemary essential oil, not pharmacodynamic exposure-response relationships for the drug camphor. |
| PD | He_2025 | not_relevant | 2 | 1 | The paper describes qualitative inhibition of foam-cell formation and atherosclerosis reduction but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative exposure-response model for camphor. |
| PGx | He_2025 | not_relevant | 2 | 0 | The study characterizes general first-pass metabolism of Borneolum syntheticum (Bingpian) constituents and their anti-atherosclerotic effects, but does not report any pharmacogenomic effects (gene variant-specific changes) on PK or PD parameters for camphora. |
| popPK | Hendel_2024 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PD | Hendel_2024 | not_relevant | 0 | 0 | The paper analyzes phytochemicals and antioxidant/antifungal activities of plant extracts, not the pharmacokinetics or pharmacodynamics of the specific drug camphora. |
| popPK | Heneweer_2005 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study assessing estrogenic effects of UV filters (including 4-MBC, a camphor derivative) and does not report pharmacokinetic parameters for the drug camphora. |
| PD | Huang_2025 | not_relevant | 1 | 0 | The study reports qualitative pharmacodynamic effects (inflammation markers) and pharmacokinetic changes (exposure) but does not provide numeric concentration-effect or dose-response parameters for camphor. |
| PD | Ilić_2026 | not_relevant | 0 | 0 | The paper studies the effect of shading nets on lavender essential oil yield and composition, not the pharmacodynamics or exposure-response of a drug. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper discusses CYP2D6 substrate modeling and does not report pharmacogenomic effects on PK/PD parameters for camphora. |
| popPK | Kang_2019 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Kang_2019 | not_relevant | 0 | 0 | The paper focuses on the identification of volatile compounds (L-fenchone and 1,8-cineole) and their allelopathic activity, not on the pharmacodynamics or exposure-response of camphora. |
| PD | Karageçili_2026 | not_relevant | 0 | 0 | The paper focuses on the metabolite profiling and in vitro antioxidant/enzyme-inhibitory effects of lavender essential oil, not on the pharmacodynamics or exposure-response of camphora. |
| popPK | Kazemi_2015 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Kazemi_2015 | not_relevant | 0 | 0 | The paper reports MIC/MBC values for the whole essential oil and IC50/EC50 for antioxidant activity, but does not provide a concentration-effect curve or PD parameters specifically for camphor. |
| PD | Khan_2025 | not_relevant | 0 | 0 | The paper reports antimicrobial MIC/IC50 values for whole essential oils, not a pharmacodynamic exposure-response relationship for the specific compound camphor. |
| PD | Lenka_2025 | not_relevant | 0 | 0 | The paper reports chemometric diversity and bioactivity assays (DPPH IC50, MIC) for essential oil mixtures, not a pharmacodynamic exposure-response or dose-response relationship for the specific drug camphor. |
| PD | Ling_2022 | not_relevant | 0 | 0 | The paper focuses on chemical composition and antioxidant activity of essential oils, not on pharmacokinetic or pharmacodynamic modeling of a specific drug. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper describes insecticidal and antifeedant activities (LC50, EC50) in insects, not pharmacokinetic disposition parameters. |
| PD | Long_2026 | not_relevant | 0 | 0 | The paper focuses on the extraction, purification, and isolation of phenolic compounds from Cinnamomum camphora roots, not on the pharmacokinetics or pharmacodynamics of the drug camphor itself. |
| PGx | Lonsdale_2012 | not_relevant | 0 | 0 | The paper focuses on computational chemistry (QM/MM) methods for modeling P450 enzymes, not on clinical pharmacogenomics or human drug parameters. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The study is an in vitro assay of androgen receptor activity for UV filters and does not contain pharmacokinetic data for camphora. |
| popPK | Madeddu_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study evaluating the antiviral activity of plant essential oil components (including camphor) against BVDV, and it contains no pharmacokinetic or disposition parameters. |
| PD | Malti_2019 | not_relevant | 1 | 1 | The paper reports a single IC50 value for the total essential oil (not the specific drug camphor) and focuses on chemical composition, lacking a dose-response curve or PK/PD modeling for the specific compound. |
| popPK | Marcin_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on UV filters, not a pharmacokinetic study on the drug camphora. |
| popPK | Milenković_2026 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Milenković_2026 | not_relevant | 0 | 0 | The paper analyzes the effect of shading and harvest time on sage essential oil composition, not the pharmacodynamic or exposure-response relationship of camphora in a biological system. |
| PD | Mohanty_2025 | not_relevant | 3 | 2 | The paper reports a single IC50 value for the whole essential oil (CZEO) but does not provide a dose-response curve, PK/PD model, or specific PD parameters for camphor itself. |
| PD | Mostafa-Hedeab_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for Thymol and Limonin, but does not report any quantitative antiviral activity or PD parameters for Camphor. |
| PD | Muñoz-Núñez_2025 | not_relevant | 3 | 3 | The paper reports IC50 values for cytotoxicity, which are single-point potency metrics, but does not provide full dose-response curves, Emax, or any PK/PD modeling required for extractable pharmacodynamic relationships. |
| PD | Oalđe_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for whole plant extracts and rosmarinic acid, but does not provide a pharmacodynamic model or exposure-response relationship for camphor. |
| popPK | Ogawa_1996 | irrelevant | 0 | 0 | The paper studies translocatory balance in fruit plants (durian and camphora tree) and does not involve drug pharmacokinetics. |
| popPK | Paredes_2014 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | Paudel_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for whole essential oil extracts, not for the specific compound camphor, and does not provide a concentration-effect curve or PK/PD model for camphor. |
| PD | Phyu_2026 | not_relevant | 0 | 0 | The paper focuses on extraction processing technologies and their effects on antioxidant activity in Cinnamomum camphora leaves, not on pharmacodynamic or exposure-response relationships for a drug. |
| PD | Ramírez-Vidal_2026 | not_relevant | 2 | 2 | The paper reports IC50/LC50 values for the essential oil mixture, not for the specific compound camphora, and does not provide a concentration-effect curve or PK/PD model for camphora. |
| PD | Sankaranarayanan_2026 | not_relevant | 0 | 0 | The paper focuses on the chemical profiling (GC/MS) and molecular dynamics simulation of Tea tree oil, not on the pharmacodynamics or exposure-response of camphora. |
| popPK | Schepetkin_2023 | irrelevant | 0 | 0 | no_text gate: only 185 chars of text extracted (&lt; 400) |
| PD | Schepetkin_2023 | not_relevant | 0 | 0 | The paper focuses on the chemical composition and immunomodulatory activity of essential oils, specifically dillapiole, and does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for camphora. |
| popPK | Schlumpf_2004 | irrelevant | 0 | 0 | The study investigates the endocrine-disrupting properties (estrogenic activity) of a camphor derivative, not its pharmacokinetic parameters. |
| PGx | Seo_2008 | not_relevant | 0 | 0 | The paper investigates CYP2B6 inhibition by monoterpenoids (including camphor) using a chemical probe (bupropion) and does not report any genetic variants or pharmacogenomic effects on the PK/PD of camphor itself. |
| popPK | Shehata_2012 | irrelevant | 0 | 0 | The paper is an in vitro genotoxicity study investigating DNA double-strand breaks, containing no pharmacokinetic data for camphor. |
| popPK | Sieratowicz_2011 | irrelevant | 0 | 0 | The study assesses acute and chronic toxicity (LC50/EC50) of UV filters in aquatic organisms, not the pharmacokinetic disposition parameters of camphora. |
| popPK | Silva_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Silva_2016 | not_relevant | 0 | 0 | The paper focuses on the chemical composition and general pharmacological properties of Lippia thymoides essential oils, not on the pharmacodynamics or exposure-response relationship of camphora. |
| popPK | Sokolova_2021 | irrelevant | 0 | 0 | The study reports antiviral activity and EC50 values, not pharmacokinetic disposition parameters (CL, V, etc.) for camphora. |
| PD | Syaj_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for plant extracts, not for the specific compound camphor, and does not provide a concentration-effect curve or PD model for camphor. |
| PD | Tishchenko_2026 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values and basic PK parameters (T1/2) but does not provide an exposure-response or dose-response analysis linking plasma concentrations to antiviral effect in vivo. |
| popPK | Tovar-Sánchez_2013 | irrelevant | 0 | 0 | The paper is an environmental ecotoxicology study measuring UV filter concentrations in seawater and algal toxicity, not a pharmacokinetic study of the drug camphora. |
| PD | Tsoĭ_1981 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters are reported. |
| popPK | Tsui_2019 | irrelevant | 0 | 0 | The paper is an environmental toxicology study on UV filters in marine water and does not report pharmacokinetic parameters for the drug camphora. |
| popPK | Vieira_2021 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Vieira_2021 | not_relevant | 0 | 0 | The paper focuses on ecotoxicological screening of UV filters in marine bioassays and does not report pharmacodynamic or exposure-response relationships for the drug camphora. |
| popPK | Vogt-Eisele_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of ion channel activation, not a pharmacokinetic study, and contains no disposition parameters for camphora. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis of artemisinin in Artemisia annua and mentions camphor as a plant metabolite, not as a drug subject to pharmacogenomic analysis. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper studies the effect of borneol (a P-gp/BCRP inhibitor) on the uptake of piperlongumine, not the pharmacogenomic effect of a gene variant on camphora. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on the isolation and antioxidant activity of Chamazulene, not the pharmacodynamics or exposure-response of camphora. |
| popPK | Wang_2026_2 | irrelevant | 0 | 0 | The study focuses on the antifungal activity and mechanism of action of camphor derivatives against a fungus, not on the pharmacokinetics of camphora. |
| PD | Wildy_2026 | not_relevant | 0 | 0 | The paper reports MIC/MBC for plant extracts and identifies camphor via GC-MS, but does not perform any pharmacodynamic or exposure-response analysis on camphor itself. |
| PD | Yan_2025 | not_relevant | 0 | 0 | The paper reports a safety/toxicology study (NOAEL) and explicitly states there were no dose-response relationships for the measured endpoints; it does not report pharmacodynamic parameters like Emax or EC50. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of camphor-based derivatives, not the pharmacokinetics of the drug camphora. |
| popPK | Yang_2023_2 | irrelevant | 0 | 0 | The paper reports in vitro and in vivo antifungal activity of camphor derivatives against fungi, not pharmacokinetic parameters for the drug camphora. |
| PD | Yang_2023_2 | not_relevant | 3 | 2 | The paper reports single-point IC50/EC50 values for antifungal and enzyme inhibition but does not provide a full dose-response curve, PK/PD model, or multiple concentration-effect data points to derive a PD relationship. |
| PGx | Yao_2007 | not_relevant | 0 | 0 | The paper focuses on the structural and binding mechanism of camphor in P450cam, not on pharmacogenomic effects of human gene variants on drug pharmacokinetics or pharmacodynamics. |
| popPK | Zarubaev_2015 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy and mechanism of action of a camphor derivative, not on the pharmacokinetic disposition parameters of camphora. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal activity and mechanism of camphor derivatives against a fungus, not on the pharmacokinetics of camphora as a drug. |
| popPK | Zouari_2011 | irrelevant | 0 | 0 | The study is a phytochemical and nutritional analysis of a plant (*Malva aegyptiaca*) and reports the content of camphor in plant lipids, but contains no pharmacokinetic data, administration, or disposition parameters. |
| PD | Zouari_2011 | not_relevant | 0 | 0 | The paper reports the chemical composition (camphor content) and antioxidant activity of plant extracts, but does not report a pharmacodynamic or exposure-response relationship for camphor itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
