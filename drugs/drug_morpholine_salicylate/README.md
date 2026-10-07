<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;morpholine salicylate&quot;}]"></div>

# morpholine salicylate

- **generic name:** morpholine salicylate
- **ATC codes:** `N02BA08`
- **DrugBank:** [DB13669](https://go.drugbank.com/drugs/DB13669) · **PubChem:** not captured
- **molar mass:** 87.1204 g/mol (C4H9NO) — DrugBank
- **groups:** experimental

## About

Morpholine salicylate is a salicylic acid derivative classified as an analgesic and antipyretic, used for pain and fever relief. It appears only as an experimental drug, with no authorisation record in the European Union, so its current clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410243](https://www.wikidata.org/wiki/Q410243) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:36 | 3:51 | 0/0/0 | 0/0/0 | 0/0/0 | 344,020/8,180 | einfracz / qwen3.8-27b | 21 | 6/42 | 20/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 372 matched, 171 returned
- **screened:** 8  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maliyakkal_2020.pdf` | Maliyakkal N et al., A New Potent and Selective Monoamine Ox…, ChemMedChem (2020) | pd | 5 | [10.1002/cmdc.202000305](https://doi.org/10.1002/cmdc.202000305) | [32583952](https://www.ncbi.nlm.nih.gov/pubmed/32583952) | metadata signals extractable PD data (IC50) |
| `Aguayo_1986.pdf` | Aguayo LG et al., Effects of phencyclidine and its analog…, The Journal of pharmacology… (1986) | pd | 4 | not captured | [3489835](https://www.ncbi.nlm.nih.gov/pubmed/3489835) | metadata signals extractable PD data (IC50) |
| `Robak_1993.pdf` | Robak J et al., Nitric oxide donors as generators and s…, Polish journal of pharmacol… (1993) | pd | 4 | not captured | [8401759](https://www.ncbi.nlm.nih.gov/pubmed/8401759) | metadata signals extractable PD data (IC50) |
| `Barsanti_2015.pdf` | Barsanti PA et al., Structure-Based Drug Design of Novel, P…, ACS medicinal chemistry let… (2015) | pgx | 7 | [10.1021/ml500352s](https://doi.org/10.1021/ml500352s) | [25589928](https://www.ncbi.nlm.nih.gov/pubmed/25589928) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ni_2024.pdf` | Ni S et al., In vitro and in vivo pharmacokinetics,…, European journal of pharmac… (2024) | pgx | 7 | [10.1016/j.ejps.2023.106658](https://doi.org/10.1016/j.ejps.2023.106658) | [38048851](https://www.ncbi.nlm.nih.gov/pubmed/38048851) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Noguchi_2000.pdf` | Noguchi K et al., Identification of cytochrome P450 isofo…, Xenobiotica; the fate of fo… (2000) | pgx | 7 | [10.1080/004982500237505](https://doi.org/10.1080/004982500237505) | [10875683](https://www.ncbi.nlm.nih.gov/pubmed/10875683) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Obach_2022.pdf` | Obach RS, Linezolid Metabolism Is Catalyzed by Cy…, Drug metabolism and disposi… (2022) | pgx | 7 | [10.1124/dmd.121.000776](https://doi.org/10.1124/dmd.121.000776) | [35042700](https://www.ncbi.nlm.nih.gov/pubmed/35042700) | metadata signals extractable PGX data (CYP2J2, PK/PD-context) |

<sub>queue written 2026-10-07T06:35:04.068217+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelsattar_2026 | irrelevant | 0 | 0 | The paper is a metabolomics study for liver disease biomarkers and does not report any pharmacokinetic parameters for morpholine_salicylate. |
| popPK | Aggarwal_1990 | irrelevant | 0 | 0 | The paper studies zidovudine prodrugs, not morpholine salicylate, and reports in-vitro stability/uptake data rather than population PK parameters for the target drug. |
| popPK | Aguayo_1986 | irrelevant | 0 | 0 | The paper is an electrophysiological study of PCP analogs on neuromuscular junctions and does not report pharmacokinetic parameters for morpholine_salicylate. |
| PGx | Ahn_2016 | not_relevant | 0 | 0 | The paper describes a novel P2Y12 antagonist (Compound E) containing a morpholine scaffold, not the drug morpholine salicylate, and reports no pharmacogenomic data. |
| popPK | Al-Qurain_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tramadol and its metabolite, not for morpholine salicylate. |
| PD | Al-Qurain_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tramadol and its metabolite, but contains no pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Alves_2024 | irrelevant | 0 | 0 | The paper studies the synthesis and pharmacological activity of morpholine-containing pyrimidinones on adrenoceptors, not the pharmacokinetics of morpholine salicylate. |
| PD | Alves_2024 | not_relevant | 4 | 2 | The paper describes concentration-effect curves for alpha-adrenoceptor activity but does not provide numeric PD parameters (e.g., pIC50, Emax) or the full text data required to derive them. |
| popPK | Arias_2013 | irrelevant | 0 | 0 | The paper investigates the pharmacology of (-)-reboxetine on nicotinic acetylcholine receptors and contains no data regarding morpholine salicylate. |
| PD | Arias_2013 | not_relevant | 0 | 0 | The paper studies (-)-reboxetine, not morpholine salicylate. |
| popPK | Attwa_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics/metabolic stability of pemigatinib, not morpholine_salicylate. |
| PD | Attwa_2022 | not_relevant | 0 | 0 | The paper describes an analytical method for pemigatinib and its metabolic stability, containing no pharmacodynamic or exposure-response data for morpholine salicylate. |
| PGx | Attwa_2023 | not_relevant | 0 | 0 | The paper reports metabolic stability and PK parameters (t1/2, Clint) for the drug alectinib, not morpholine_salicylate, and does not investigate the effect of gene variants on these parameters. |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on pyrimidine derivatives for breast cancer and does not involve morpholine salicylate or pharmacokinetic parameters. |
| PGx | Barsanti_2015 | not_relevant | 0 | 0 | The paper focuses on the design of ATR inhibitors and does not mention morpholine_salicylate or any pharmacogenomic analysis. |
| popPK | Boschi_2026 | irrelevant | 0 | 0 | The paper describes a medicinal chemistry library of morpholine-containing pentacycles and reports in vitro ADME properties (microsomal clearance, PAMPA permeability), but does not study the specific drug 'morpholine_salicylate' or report pharmacokinetic parameters (CL, V, t1/2) for it in vivo. |
| popPK | Brady_1981 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment on PCP analogues in squirrel monkeys and does not report pharmacokinetic parameters for morpholine_salicylate. |
| popPK | Buron_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PI3K/mTOR inhibitors and does not report pharmacokinetic parameters for morpholine salicylate. |
| PD | Buron_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic IC50 values and cellular cytotoxicity data for PI3K/mTOR inhibitors, but does not report a pharmacodynamic (exposure-response) model or relationship for morpholine salicylate. |
| popPK | Cabantchik_1989 | irrelevant | 0 | 0 | The paper studies the antimalarial mechanism of N-dodecyl morpholine (a different compound) in vitro, not the pharmacokinetics of morpholine salicylate. |
| popPK | Cascieri_1997 | irrelevant | 0 | 0 | The paper studies a different drug (L-742,694, an NK1 antagonist) and reports receptor binding kinetics, not pharmacokinetic parameters for morpholine_salicylate. |
| popPK | Chatterjee_2021 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of ruthenium complexes, not a pharmacokinetic study of morpholine salicylate. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper studies a different drug called gliocidin for glioblastoma, not morpholine salicylate. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper studies gliocidin, not morpholine salicylate. |
| popPK | Corio-Costet_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of action of the fungicide fenpropimorph on sterol biosynthesis in cell cultures and does not report pharmacokinetic parameters for morpholine salicylate. |
| popPK | Couffignal_2014 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for imipenem, not morpholine_salicylate. |
| PD | Couffignal_2014 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for imipenem and evaluates dosage regimens based on time above MIC, but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for morpholine salicylate or any other drug. |
| popPK | DAmbra_1992 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (receptor binding/functional assays) of cannabinoid receptor agonists, not the pharmacokinetics of morpholine salicylate. |
| PD | DAmbra_1992 | not_relevant | 3 | 2 | The paper reports IC50 values for pravadoline and analogues in a functional assay (MVD), but it does not provide a full concentration-effect curve, Emax, or a PK/PD model for morpholine salicylate (which is not the primary subject; the subject is pravadoline analogues). |
| popPK | Davies_1988 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study on dinucleotide analogues and does not report pharmacokinetic parameters for morpholine salicylate. |
| PD | Davies_1988 | not_relevant | 0 | 0 | The paper reports IC50 values for dinucleotide analogues, not morpholine salicylate, and does not describe a pharmacodynamic exposure-response relationship for the specified drug. |
| popPK | Dayanand_2025 | irrelevant | 0 | 0 | The study is a computational pharmacoinformatics analysis of phytochemicals in a traditional oil and does not involve morpholine salicylate. |
| PD | Dayanand_2025 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) of phytochemicals in a traditional oil formulation and does not contain any pharmacokinetic or pharmacodynamic data for morpholine salicylate. |
| popPK | Dinh_2022 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of imipenem, not morpholine salicylate. |
| PD | Dinh_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of imipenem and uses Monte Carlo simulations for dose optimization based on PK/PD targets (T&gt;MIC), but it does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for morpholine salicylate or any other drug. |
| popPK | Dwivedi_2022 | irrelevant | 0 | 0 | The paper studies morpholine-substituted quinazoline derivatives for anticancer activity, not the pharmacokinetics of morpholine salicylate. |
| PD | Dwivedi_2022 | not_relevant | 0 | 0 | The paper studies morpholine-substituted quinazoline derivatives, not morpholine salicylate. |
| popPK | El-Damasy_2023 | irrelevant | 0 | 0 | The paper describes the discovery of a BCR-ABL inhibitor (AKE-72) and does not study morpholine_salicylate or report any pharmacokinetic parameters. |
| PD | El-Damasy_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic IC50 and cell-based GI50/TGI values for AKE-72, but does not report any pharmacodynamic (exposure-response) relationship or PK/PD modeling for morpholine salicylate. |
| PGx | Elipe_2003 | not_relevant | 0 | 0 | The paper discusses the metabolism of MK-0869 (a different drug) and does not mention morpholine salicylate or pharmacogenomic effects. |
| popPK | Farghaly_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro anticancer activity of CDK2 inhibitors, not the pharmacokinetics of morpholine salicylate. |
| PGx | Fujimoto_2017 | not_relevant | 0 | 0 | The paper reports on the discovery of CDK8/19 inhibitors and does not involve morpholine_salicylate. |
| popPK | Gadekar_2021 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of kinase inhibitors, not the pharmacokinetics of morpholine salicylate. |
| PD | Gadekar_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for kinase inhibition (EGFR/IGF1R) of a novel compound, not a pharmacodynamic exposure-response or dose-response relationship for morpholine salicylate. |
| popPK | Gaur_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel indole-based anticancer compounds and does not report pharmacokinetic parameters for morpholine salicylate. |
| popPK | Ghafary_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and tyrosinase inhibitory activity of morpholine-containing cinnamamide derivatives, not the pharmacokinetics of morpholine salicylate. |
| PD | Ghafary_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for tyrosinase inhibitors, not a pharmacodynamic (exposure-response) relationship for morpholine salicylate in a biological system. |
| popPK | Gu_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetics for SN30000, not morpholine_salicylate. |
| popPK | Guan_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine for rheumatoid arthritis and does not report pharmacokinetic parameters for morpholine_salicylate. |
| PD | Guan_2025 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine compound (New Bitongling) and does not report any pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Götz_2023 | irrelevant | 0 | 0 | The paper describes a chemical synthesis platform for N-heterocycles and does not involve morpholine salicylate or pharmacokinetic studies. |
| PD | Götz_2023 | not_relevant | 0 | 0 | The paper focuses on high-throughput organic synthesis and machine learning for reaction prediction, containing no pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Haney_2023 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of AEF0117 (a CB1 receptor inhibitor), not morpholine_salicylate. |
| PGx | Hartley_2004 | not_relevant | 0 | 0 | The paper studies PXR activators in rats and does not involve morpholine salicylate or pharmacogenomic effects on a specific drug's PK/PD. |
| popPK | Hawtin_2023 | irrelevant | 0 | 0 | The paper describes the pharmacological and pharmacokinetic characterization of MHV370 (a TLR7/8 antagonist) and does not study morpholine salicylate. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on MAO-B and BuChE inhibitors and does not involve morpholine salicylate or pharmacokinetic parameters. |
| PD | He_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel compounds, not pharmacodynamic exposure-response or dose-response relationships for morpholine salicylate. |
| PGx | Hoskins_2001 | not_relevant | 0 | 0 | The paper studies moclobemide, not morpholine_salicylate, and does not report a pharmacogenomic effect. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper studies compound A36 (a calpastatin-calpain-2 stabilizer) in mice, not morpholine salicylate. |
| popPK | Huneif_2022 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro/in-vivo efficacy of a new vanillin hybrid for diabetes, not the pharmacokinetics of morpholine salicylate. |
| PD | Huneif_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a novel vanillin hybrid compound, not morpholine salicylate, and does not provide a pharmacokinetic/pharmacodynamic exposure-response model or dose-response curve for the specified drug. |
| popPK | Huynh_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro biological evaluation of SARS-CoV-2 main protease inhibitors, not the pharmacokinetics of morpholine salicylate. |
| PD | Huynh_2024 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for SARS-CoV-2 main protease inhibitors, not pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Hwu_2020 | irrelevant | 0 | 0 | The paper reports antiviral activity (EC50) of morpholine-containing compounds against Enterovirus 71, but contains no pharmacokinetic data or disposition parameters. |
| popPK | Ibrahim_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PI3Kα inhibitors and does not report pharmacokinetic parameters for morpholine salicylate. |
| PD | Ibrahim_2015 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for PI3Kα inhibition and cytotoxicity, which are pharmacological potency metrics, not pharmacodynamic (exposure-response) relationships or PK/PD models. |
| popPK | Jarrahpour_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro antimicrobial/antimalarial activity of β-lactam derivatives, containing no pharmacokinetic data for morpholine salicylate. |
| PD | Jarrahpour_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a series of synthesized beta-lactams, which is a standard pharmacological screening result, not a pharmacodynamic (exposure-response) model or analysis for a specific drug like morpholine salicylate. |
| PGx | Kaczor_2020 | not_relevant | 0 | 0 | The paper focuses on the development of ABCB1 modulators (imidazolones) and molecular modeling of Pgp; it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of morpholine_salicylate. |
| PGx | Kaczor_2021 | not_relevant | 0 | 0 | The paper reports on the mechanism of action of new antibiotic adjuvants against bacteria, focusing on protein interactions and MIC reductions, and does not investigate human pharmacogenomics or the PK/PD parameters of morpholine salicylate. |
| popPK | Kang_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and photophysical properties of BODIPY dyes, not the pharmacokinetics of morpholine salicylate. |
| PD | Kang_2024 | not_relevant | 0 | 0 | The paper describes the synthesis and photophysical properties of BODIPY dyes, not the pharmacodynamics of morpholine salicylate. |
| popPK | Keglevich_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro cytotoxicity of vindoline derivatives, not a pharmacokinetic study of morpholine salicylate. |
| PD | Keglevich_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for new vindoline derivatives, not morpholine salicylate, and does not provide a pharmacodynamic model or exposure-response relationship for the specified drug. |
| popPK | Kravchenko_2005 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity (caspase-3 inhibition) of pyrroloquinoline derivatives, not the pharmacokinetics of morpholine salicylate. |
| PD | Kravchenko_2005 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a series of novel pyrroloquinoline caspase-3 inhibitors, not morpholine salicylate, and does not contain any pharmacokinetic or pharmacodynamic modeling. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper studies the pharmacological properties of Pongamia pinnata leaf extract and contains no data for morpholine salicylate. |
| popPK | Kumari_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antioxidant activity of indole derivatives, not the pharmacokinetics of morpholine salicylate. |
| PD | Kumari_2023 | not_relevant | 0 | 0 | The paper reports IC50/EC50 values for indole derivatives as antioxidants, but does not contain any data, analysis, or mention of morpholine salicylate. |
| popPK | Kułaga_2026 | irrelevant | 0 | 0 | The paper studies morpholine-based triazine anticancer agents, not the drug morpholine salicylate, and reports no pharmacokinetic parameters. |
| PD | Kułaga_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for a novel morpholine-based triazine (Compound 14), not for morpholine salicylate, and contains no pharmacodynamic modeling or exposure-response analysis for the specified drug. |
| PGx | Kułaga_2026 | not_relevant | 0 | 0 | The paper reports preclinical drug discovery and standard ADME-Tox profiling, but contains no pharmacogenomic studies linking gene variants to PK/PD changes. |
| popPK | Köprülü_2021 | irrelevant | 0 | 0 | The paper is an in-vitro anticancer study of quinoline derivatives and does not report pharmacokinetic parameters for morpholine salicylate. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro inhibition of LH2 by 1,3-diketone analogues and does not involve morpholine salicylate or pharmacokinetic parameters. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linezolid, not morpholine_salicylate. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of linezolid, not morpholine salicylate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Liang_2017 | irrelevant | 0 | 0 | The paper describes the discovery of a BTK inhibitor and contains no pharmacokinetic data for morpholine salicylate. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro cholinesterase inhibition of morpholine-bearing quinoline derivatives, not the pharmacokinetics of morpholine salicylate. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The study examines the metabolism of tuxobertinib, not morpholine salicylate, and does not report pharmacogenomic effects. |
| popPK | Liu_2025_2 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological evaluation of novel antitumor agents, not the pharmacokinetics of morpholine salicylate. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper studies morpholine-coumarin derivatives as IDO1/TDO inhibitors, not the drug morpholine salicylate, and contains no pharmacokinetic parameters. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for enzyme inhibition (in vitro) and behavioral effects at a single dose in vivo, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for morpholine salicylate or any PK/PD model. |
| popPK | Ma_2021 | irrelevant | 0 | 0 | The study focuses on the design and in vitro evaluation of hepatitis B virus inhibitors and does not involve morpholine salicylate. |
| PD | Ma_2021 | not_relevant | 3 | 2 | The paper reports in vitro EC50 values for HBV capsid protein inhibition, which is a pharmacodynamic potency metric, but it does not report an exposure-response or dose-response relationship for morpholine salicylate (the specific drug queried) nor does it provide a PK/PD model or curve for the synthesized analogues. |
| popPK | Mabied_2023 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and crystallography study of 2-cyanoguanidinophenytoin derivatives, not a pharmacokinetic study of morpholine salicylate. |
| PD | Mabied_2023 | not_relevant | 0 | 0 | The paper reports the synthesis, crystallography, and antimicrobial/cytotoxic activity (IC50) of 2-cyanoguanidinophenytoin and its Mannich bases, but does not contain any pharmacokinetic data, exposure-response analysis, or PD modeling for morpholine salicylate. |
| popPK | Makhija_2024 | irrelevant | 0 | 0 | The paper is a review of EGFR inhibitors for lung cancer and does not report pharmacokinetic parameters for morpholine salicylate. |
| PD | Makhija_2024 | not_relevant | 1 | 0 | The paper is a review of EGFR inhibitors and does not report any pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Maliyakkal_2020 | irrelevant | 0 | 0 | The paper studies a MAO-B inhibitor (MO10) and does not report pharmacokinetic parameters for morpholine salicylate. |
| popPK | Mascagna_1992 | irrelevant | 0 | 0 | The paper reports cytotoxicity (IC50) data for new 4-aminophenol derivatives, not pharmacokinetic parameters for morpholine salicylate. |
| popPK | Menke_2024 | irrelevant | 0 | 0 | The paper investigates the proton affinity and conformational integrity of a triazine macrocycle, which is unrelated to the pharmacokinetics of morpholine salicylate. |
| PD | Menke_2024 | not_relevant | 0 | 0 | The paper describes the proton affinity and conformational dynamics of a triazine macrocycle, not the pharmacodynamics of morpholine salicylate. |
| popPK | Miller_1983 | irrelevant | 0 | 0 | The paper studies the mechanism of lysosomotropic detergents (specifically dodecyl-imidazole) on cell lysosomes and does not report pharmacokinetic parameters for morpholine salicylate. |
| PD | Miller_1983 | not_relevant | 0 | 0 | The paper studies the mechanism of cell killing by lysosomotropic detergents (specifically imidazole derivatives) and does not report any pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Miller_2004 | irrelevant | 0 | 0 | The paper studies fungicide sensitivity in a plant pathogen (*Uncinula necator*) and does not involve the drug morpholine_salicylate or any pharmacokinetic parameters. |
| PD | Miller_2004 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for Uncinula necator, not a pharmacodynamic relationship for morpholine salicylate. |
| popPK | Mori_2020 | irrelevant | 0 | 0 | The paper studies a radiotracer (FIPM) for LRRK2, not the drug morpholine_salicylate, and does not report PK parameters for the target drug. |
| PD | Mori_2020 | not_relevant | 0 | 0 | The paper reports an in vitro binding affinity (IC50) for a radiotracer candidate, which is a pharmacological binding parameter, not a pharmacodynamic (exposure-response or dose-response) relationship for a therapeutic drug. |
| popPK | Morrison_1984 | irrelevant | 0 | 0 | The paper studies the formation of N-nitrosomorpholine (a carcinogen) from morpholine, not the pharmacokinetics of morpholine salicylate. |
| PD | Morrison_1984 | not_relevant | 1 | 0 | The paper describes a method for detecting N-nitrosomorpholine formation and notes a qualitative dose-dependence, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for morpholine salicylate. |
| popPK | Muhammad_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on morpholine-based heterocycles for antitumor activity, not a pharmacokinetic study of morpholine salicylate. |
| popPK | Muhammad_2024 | irrelevant | 0 | 0 | The paper studies kinase inhibitors and antiproliferative activities, not the pharmacokinetics of morpholine salicylate. |
| PD | Muhammad_2024 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a kinase inhibitor (compound 4), not a pharmacodynamic exposure-response or dose-response relationship for morpholine salicylate. |
| popPK | Mundra_2017 | irrelevant | 0 | 0 | The paper focuses on medicinal chemistry and antiparasitic activity of ClpP inhibitors, containing no pharmacokinetic data for morpholine salicylate. |
| PD | Mundra_2017 | not_relevant | 2 | 1 | The paper reports a single EC50 value for antiparasitic activity but does not provide a concentration-effect curve, dose-response analysis, or PK/PD model for morpholine salicylate. |
| popPK | Munir_2024 | irrelevant | 0 | 0 | The paper studies morpholine-thiophene thiosemicarbazones as urease inhibitors, not the drug morpholine salicylate, and contains no pharmacokinetic disposition parameters for the target drug. |
| popPK | Nandanan_2000 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of P2Y1 receptor ligands (adenosine analogues) and does not involve the drug morpholine_salicylate or its pharmacokinetics. |
| PD | Nandanan_2000 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/functional assay data (EC50/IC50) for P2Y1 receptor ligands, not pharmacodynamic exposure-response or dose-response relationships for morpholine salicylate. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper describes in vitro anticancer activity of thiazole analogues and does not involve morpholine salicylate or any pharmacokinetic parameters. |
| PGx | Ni_2024 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of tinengotinib (a drug metabolite of morpholine salicylate) but does not report pharmacogenomic effects or genotype-dependent changes in PK/PD parameters. |
| PGx | Noguchi_2000 | not_relevant | 0 | 0 | The paper studies the metabolism of YM992 (a novel SSRI), not morpholine salicylate, and focuses on CYP1A2 enzyme identification rather than genetic variant effects on PK parameters. |
| PGx | Obach_2022 | not_relevant | 0 | 0 | The paper studies the metabolism of linezolid, not morpholine_salicylate. |
| popPK | Osmaniye_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro MAO-A inhibition of thiazolyl-hydrazone derivatives, not the pharmacokinetics of morpholine salicylate. |
| PD | Osmaniye_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for MAO-A inhibition, which is a pharmacodynamic parameter, but the specific drug queried (morpholine salicylate) is not the subject of the study; the study focuses on thiazolyl-hydrazone derivatives. |
| popPK | Petrova_2024 | irrelevant | 0 | 0 | The paper describes antiviral activity and molecular docking of synthesized compounds, containing no pharmacokinetic data for morpholine salicylate. |
| PD | Petrova_2024 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (IC50/EC50) for triterpenic Mannich bases, not morpholine salicylate, and does not contain pharmacokinetic or pharmacodynamic modeling data. |
| popPK | Poddar_2020 | irrelevant | 0 | 0 | The paper studies a different drug (DI-87) and does not involve morpholine salicylate. |
| popPK | Purohit_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid, not morpholine_salicylate. |
| PD | Purohit_2026 | not_relevant | 0 | 0 | The paper reports a population PK model for linezolid and the effect of rifampicin dose on linezolid clearance, but it does not report a pharmacodynamic (exposure-response or dose-response) model for morpholine salicylate or any other drug. |
| popPK | Qin_2025 | irrelevant | 0 | 0 | The paper is a computational method for molecular property prediction and does not contain pharmacokinetic data for morpholine_salicylate. |
| PD | Qin_2025 | not_relevant | 0 | 0 | The paper describes a machine learning architecture (MoleculeFormer) for molecular property prediction and does not contain any pharmacodynamic, exposure-response, or dose-response data for morpholine salicylate. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on transporter polypharmacology and does not report pharmacokinetic parameters for morpholine_salicylate. |
| PD | Rafehi_2026 | not_relevant | 0 | 0 | The paper does not mention morpholine salicylate and focuses on transporter inhibition (IC50) of other compounds. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper focuses on NIRF theranostic probes for Alzheimer's disease and does not study the pharmacokinetics of morpholine_salicylate. |
| PD | Rai_2026 | not_relevant | 0 | 0 | The paper studies a NIRF probe (I-43) for Alzheimer's disease and does not mention morpholine salicylate or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Raig_2025 | irrelevant | 0 | 0 | The paper describes the development of LRRK2 kinase inhibitors for Parkinson's disease and does not involve morpholine_salicylate or any pharmacokinetic parameters. |
| PD | Raig_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values and dose-response curves for LRRK2 kinase inhibitors, but does not contain any data, analysis, or mention of morpholine salicylate. |
| PGx | Ren_2018 | not_relevant | 0 | 0 | The paper reports preclinical and clinical PK/PD data for a novel HBV capsid inhibitor (HEC72702), but does not report any pharmacogenomic effects (gene variant/genotype) on the pharmacokinetics or pharmacodynamics of morpholine salicylate. |
| popPK | Resendiz-Galvan_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linezolid, not morpholine salicylate. |
| PD | Resendiz-Galvan_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of linezolid, not morpholine salicylate, and does not report a pharmacodynamic model or numeric PD parameters for the target drug. |
| PGx | Richter_2023 | not_relevant | 0 | 0 | The paper investigates synthetic cannabinoid receptor agonists (QMMSB and QMiPSB), not morpholine_salicylate, and focuses on general metabolic fate rather than specific pharmacogenomic effects. |
| popPK | Robak_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of nitric oxide donors and does not report pharmacokinetic parameters for morpholine salicylate. |
| popPK | Sala_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of deoxydidehydronucleosides (ddhN) in rats and does not involve morpholine salicylate. |
| PD | Sala_2026 | not_relevant | 0 | 0 | The paper investigates the metabolism and excretion of deoxydidehydronucleosides in rats and does not mention morpholine salicylate or report any pharmacodynamic or exposure-response relationships. |
| popPK | Sasidharan_2021 | irrelevant | 0 | 0 | The paper studies morpholine-based chalcones as enzyme inhibitors, not the pharmacokinetics of morpholine salicylate. |
| PD | Sasidharan_2021 | not_relevant | 0 | 0 | The paper reports in vitro biochemical IC50 and Ki values for morpholine-based chalcones, not pharmacodynamic exposure-response or dose-response relationships for morpholine salicylate. |
| popPK | Schindler_2006 | irrelevant | 0 | 0 | The paper studies sGC agonists (ataciguat and S3448), not the pharmacokinetics of morpholine salicylate. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on galectin-1 inhibitors and does not involve the drug morpholine_salicylate or its pharmacokinetics. |
| PD | Sethi_2024 | not_relevant | 0 | 0 | The paper reports in vitro binding constants (Ka) and enzyme inhibition percentages for galectin-1 inhibitors, but does not report pharmacokinetic data, exposure-response relationships, or pharmacodynamic models for morpholine salicylate or any other drug. |
| PGx | Sevrioukova_2024 | not_relevant | 0 | 0 | The paper studies the interaction of cobicistat with CYP3A4 and does not investigate the pharmacokinetics or pharmacodynamics of morpholine salicylate. |
| PGx | Shackleford_2021 | not_relevant | 0 | 0 | The paper characterizes the metabolism of OZ439 (an antimalarial), not morpholine_salicylate, and does not report pharmacogenomic effects. |
| popPK | Shank_1976 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Shank_1976 | not_relevant | 0 | 0 | The paper reports a carcinogenicity study (tumor incidence) rather than a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Sharina_2012 | irrelevant | 0 | 0 | The paper describes the mechanism of action of cobinamides on soluble guanylyl cyclase and does not contain any pharmacokinetic data for morpholine salicylate. |
| PD | Sharina_2012 | not_relevant | 0 | 0 | The paper studies cobinamides (sGC coactivators) and does not report any pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological activity (anti-HIV, anti-SARS-CoV-2, antibacterial) of novel thiazolidinedione derivatives, with no pharmacokinetic data for morpholine salicylate. |
| PD | Singh_2025 | not_relevant | 0 | 0 | The paper reports in vitro EC50 values for novel thiazolidinedione derivatives, not morpholine salicylate, and does not contain any pharmacokinetic or exposure-response data. |
| popPK | Soraluce_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linezolid, not morpholine salicylate. |
| PD | Soraluce_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of linezolid and its PK/PD targets (AUC/MIC, T&gt;MIC), not on morpholine salicylate. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper describes in-vitro drug discovery and structural biology targeting bacterial methionyl-tRNA synthetase and does not involve the drug morpholine_salicylate or any pharmacokinetic analysis. |
| PD | Su_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of a bacterial MetRS inhibitor (MRS-9) and does not mention or analyze morpholine salicylate. |
| PGx | Tang_2022 | not_relevant | 0 | 0 | The paper investigates mechanism-based inhibition of CYP3A by Pemigatinib, not the pharmacokinetics of morpholine_salicylate, and does not report pharmacogenomic effects. |
| popPK | Thimmaiah_1992 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on phenoxazine synthesis and cytotoxicity, not a pharmacokinetic study of morpholine salicylate. |
| PD | Thimmaiah_1992 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of N-substituted phenoxazines and their qualitative/semi-quantitative effects on drug accumulation and cytotoxicity (IC50), but does not report a pharmacodynamic (exposure-response) relationship for morpholine salicylate. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not morpholine_salicylate. |
| PD | Tian_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PPK) of linezolid, not morpholine salicylate, and does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters. |
| PGx | Treiber_2025 | not_relevant | 0 | 0 | The paper discusses the metabolism of nivasorexant and its metabolites (including a morpholine derivative), not the pharmacogenomics of morpholine salicylate. |
| popPK | Tretyakova_2022 | irrelevant | 0 | 0 | The paper reports antiviral activity and synthesis of diterpenic Mannich bases, not pharmacokinetic parameters for morpholine salicylate. |
| PD | Tretyakova_2022 | not_relevant | 0 | 0 | The paper reports antiviral activity (IC50/EC50) for diterpenic Mannich bases, not morpholine salicylate, and does not provide a pharmacodynamic exposure-response model. |
| popPK | Tsuji_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linezolid, not morpholine_salicylate. |
| popPK | Ueno_1984 | irrelevant | 0 | 0 | The paper investigates the mutagenicity of rubber additives using a bacterial assay and does not contain any pharmacokinetic data for morpholine salicylate. |
| PD | Ueno_1984 | not_relevant | 0 | 0 | The paper investigates the mutagenicity of rubber additives (e.g., bis-morpholine disulfide) using a bacterial assay and does not report any pharmacodynamic or exposure-response data for morpholine salicylate. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review of Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs) for HIV and does not mention morpholine salicylate or report any pharmacokinetic parameters for it. |
| PD | Vanangamudi_2023 | not_relevant | 0 | 0 | The paper is a review on the design and development of NNRTIs and does not contain any pharmacodynamic or exposure-response data for morpholine salicylate. |
| PGx | Velaparthi_2010 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study on IGF-1R inhibitors and does not report pharmacogenomic effects on morpholine_salicylate. |
| PGx | Wacher_1998 | not_relevant | 2 | 1 | The paper discusses a different peptide compound (K02) and does not report pharmacogenomic data for morpholine salicylate. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper studies Cobicistat, not morpholine_salicylate, and does not report pharmacogenomic effects. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper focuses on the discovery and in vitro biological evaluation of novel HIV-1 NNRTIs, not the pharmacokinetics of morpholine_salicylate. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of imipenem, not morpholine salicylate. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of imipenem, not morpholine salicylate, and does not report any pharmacodynamic parameters or exposure-response relationships for the target drug. |
| popPK | Wangngae_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro cellular uptake of IR794 cyanine dyes, not the pharmacokinetics of morpholine salicylate. |
| popPK | Witkowski_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and cardiovascular effects of erythritol, not morpholine_salicylate. |
| PD | Witkowski_2023 | not_relevant | 0 | 0 | The paper studies erythritol, not morpholine salicylate, and reports epidemiological associations and qualitative thrombotic effects without numeric PD parameters for the target drug. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid, not morpholine salicylate. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper investigates morpholine-containing derivatives as antibacterial agents against plant pathogens, containing no pharmacokinetic data for morpholine salicylate. |
| popPK | Zaib_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro cholinesterase inhibition of pyrimidine-morpholine hybrids, not the pharmacokinetics of morpholine salicylate. |
| PD | Zaib_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for cholinesterase inhibition, which are pharmacodynamic potency metrics, but does not report an exposure-response or dose-response relationship for the specific drug 'morpholine salicylate' (the study focuses on pyrimidine-morpholine hybrids) nor does it provide a PK/PD model or concentration-effect curve for a specific subject or population. |
| popPK | Zask_2009 | irrelevant | 0 | 0 | The paper focuses on the medicinal chemistry and selectivity of mTOR inhibitors, not the pharmacokinetics of morpholine salicylate. |
| PD | Zask_2009 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for mTOR inhibitors, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug morpholine salicylate in a biological system. |
| popPK | Zeng_2024 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of chalcone derivatives against tobacco mosaic virus, not the pharmacokinetics of morpholine salicylate. |
| PGx | Zhang_1998 | not_relevant | 0 | 0 | The paper studies the PK of a cysteine protease inhibitor (K02), not morpholine salicylate, and reports on CYP3A/P-gp substrate specificity rather than pharmacogenomic effects of specific gene variants. |
| PGx | Zhou_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with ketoconazole and rifampicin in dogs, not pharmacogenomic effects of morpholine salicylate. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of HIV-1 protease inhibitors containing morpholine, not the pharmacokinetics of the drug morpholine_salicylate. |
| PD | Zhu_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme Ki and antiviral IC50 values for novel HIV-1 protease inhibitors, which are pharmacological potency metrics, not a pharmacodynamic (exposure-response or dose-response) model with parameters like Emax, EC50, or slope for a specific drug's effect over time or concentration in a physiological context. |
| popPK | Zhu_2022 | irrelevant | 0 | 0 | The study focuses on the biological evaluation of HIV-1 protease inhibitors containing morpholine cores, not the pharmacokinetics of the drug morpholine salicylate. |
| PD | Zhu_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic IC50 and in vitro antiviral EC50 values for HIV-1 protease inhibitors, which are pharmacological potency metrics, not pharmacodynamic (exposure-response or dose-response) relationships for a drug in a physiological context. |
| popPK | Řehulka_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro cytotoxicity of quinolinone derivatives, not the pharmacokinetics of morpholine salicylate. |
| PD | Řehulka_2020 | not_relevant | 3 | 2 | The paper reports IC50 values for a series of quinolinone derivatives (tubulin inhibitors), not morpholine salicylate, and does not provide a concentration-effect curve or PK/PD model for the specified drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
