<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;liquid paraffin&quot;}]"></div>

# liquid paraffin

- **generic name:** liquid paraffin
- **ATC codes:** `A06AA01`
- **DrugBank:** [DB11057](https://go.drugbank.com/drugs/DB11057) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Liquid paraffin, a mineral oil, is used as a laxative to treat constipation and also serves as an excipient in cosmetics and medicines. It remains in use, is approved for human and veterinary use, and is widely available as a mild treatment for constipation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6557471](https://www.wikidata.org/wiki/Q6557471) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:20 | 6:13 | 0/0/0 | 0/0/0 | 0/0/0 | 217,428/5,572 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 4/22 | 11/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 67 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Costello_2011.pdf` | Costello S et al., Metalworking fluids and malignant melan…, Epidemiology (Cambridge, Ma… (2011) | pd | 5 | [10.1097/EDE.0b013e3181fce4b8](https://doi.org/10.1097/EDE.0b013e3181fce4b8) | [20975563](https://www.ncbi.nlm.nih.gov/pubmed/20975563) | metadata signals extractable PD data (exposure-response) |
| `Dement_1991.pdf` | Dement JM, Carcinogenicity of chrysotile asbestos:…, Cell biology and toxicology (1991) | pd | 5 | [10.1007/BF00121330](https://doi.org/10.1007/BF00121330) | [1647260](https://www.ncbi.nlm.nih.gov/pubmed/1647260) | metadata signals extractable PD data (exposure-response) |
| `Dement_1994.pdf` | Dement JM et al., Follow-up study of chrysotile asbestos…, American journal of industr… (1994) | pd | 5 | [10.1002/ajim.4700260402](https://doi.org/10.1002/ajim.4700260402) | [7810543](https://www.ncbi.nlm.nih.gov/pubmed/7810543) | metadata signals extractable PD data (exposure-response) |
| `Friesen_2009.pdf` | Friesen MC et al., Quantitative exposure to metalworking f…, American journal of epidemi… (2009) | pd | 5 | [10.1093/aje/kwp073](https://doi.org/10.1093/aje/kwp073) | [19414495](https://www.ncbi.nlm.nih.gov/pubmed/19414495) | metadata signals extractable PD data (exposure-response) |
| `Friesen_2012.pdf` | Friesen MC et al., Metalworking fluid exposure and cancer…, Cancer causes & control : C… (2012) | pd | 5 | [10.1007/s10552-012-9976-z](https://doi.org/10.1007/s10552-012-9976-z) | [22562220](https://www.ncbi.nlm.nih.gov/pubmed/22562220) | metadata signals extractable PD data (exposure-response) |
| `Kojima_1993.pdf` | Kojima S et al., Inhibitory effect of neopterin on NADPH…, FEBS letters (1993) | pd | 4 | [10.1016/0014-5793(93)80207-b](https://doi.org/10.1016/0014-5793(93)80207-b) | [8394827](https://www.ncbi.nlm.nih.gov/pubmed/8394827) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T16:16:45.131625+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrade_2014 | irrelevant | 0 | 0 | The study investigates the antiparasitic activity of auranofin against Toxoplasma gondii and does not report pharmacokinetic parameters for liquid paraffin. |
| popPK | Antczak_2026 | irrelevant | 0 | 0 | The paper describes a genetic tool for protein depletion in mice and does not involve liquid_paraffin or pharmacokinetic parameters. |
| PD | Antczak_2026 | not_relevant | 0 | 0 | The paper describes a genetic degron-tag system for protein depletion and does not report pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for liquid paraffin. |
| popPK | Ayodeji_2025 | irrelevant | 0 | 0 | The paper describes fluorescent androgen receptor imaging probes for prostate cancer and does not involve liquid paraffin or its pharmacokinetics. |
| PD | Ayodeji_2025 | not_relevant | 0 | 0 | The paper reports pharmacological binding affinities (IC50, Kd) and imaging biodistribution for a fluorescent probe, but does not report a pharmacodynamic exposure-response or dose-response relationship for liquid paraffin. |
| popPK | Balmus_2018 | irrelevant | 0 | 0 | The paper is a preclinical study on a genetic disease model (HGPS) and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Balmus_2018 | not_relevant | 0 | 0 | The paper studies Remodelin (a NAT10 inhibitor), not liquid paraffin, and does not report a pharmacodynamic exposure-response model or numeric PD parameters for the queried drug. |
| popPK | Barson_1994 | irrelevant | 0 | 0 | The paper is a study on entomopathogenic fungi for house fly control and does not involve liquid paraffin or pharmacokinetic parameters. |
| PD | Barson_1994 | not_relevant | 0 | 0 | The paper studies entomopathogenic fungi and oil carriers for insect control, not the pharmacodynamics of liquid paraffin. |
| popPK | Belldina_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cysteamine, not liquid paraffin. |
| popPK | Bhuvaneswari_2004 | irrelevant | 0 | 0 | The study is a carcinogenesis/chemoprevention experiment where liquid paraffin is used only as a vehicle for DMBA, not as the subject drug for pharmacokinetic analysis. |
| PD | Bhuvaneswari_2004 | not_relevant | 0 | 0 | The paper studies the dose-response of tomato paste/lycopene, not liquid paraffin, and liquid paraffin is only used as a vehicle for DMBA. |
| popPK | Bolton_2019 | irrelevant | 0 | 0 | The paper is a study on insect electrophysiology and behavior regarding volatile organic compounds, not a pharmacokinetic study of liquid paraffin. |
| PD | Bolton_2019 | not_relevant | 0 | 0 | The paper studies electrophysiological and behavioral responses of insects to volatile organic compounds, not the pharmacodynamics of liquid paraffin. |
| popPK | Brynildsen_2016 | irrelevant | 0 | 0 | The study investigates nicotine dependence in rats and does not involve liquid_paraffin or its pharmacokinetics. |
| popPK | Bull_1983 | irrelevant | 0 | 0 | The study investigates the biological effect of mineral oil (a form of liquid paraffin) on DNA incorporation in rat colon, not its pharmacokinetic disposition parameters. |
| PD | Bull_1983 | not_relevant | 4 | 3 | The paper reports a dose-response relationship for bile acids (specifically sodium deoxycholate) but explicitly states that mineral oil (liquid paraffin) had no effect on the endpoint, providing no numeric PD parameters for the target drug. |
| popPK | Carter_2020 | irrelevant | 0 | 0 | The study focuses on pitavastatin and eltrombopag in human hepatocytes, with no mention of liquid paraffin. |
| PD | Carter_2020 | not_relevant | 0 | 0 | The paper focuses on transporter-mediated drug-drug interactions (DDI) and PK modeling (PBPK) for pitavastatin and eltrombopag, containing no pharmacodynamic (PD) or exposure-response analysis for liquid paraffin. |
| popPK | Ciscato_2025 | irrelevant | 0 | 0 | The paper describes a chemogenetic protocol for neuropharmacology in mice and does not involve liquid_paraffin or pharmacokinetic parameters. |
| PD | Ciscato_2025 | not_relevant | 0 | 0 | The paper describes a chemogenetic protocol (CATCH) for receptor antagonism and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for liquid paraffin. |
| popPK | Costello_2011 | irrelevant | 0 | 0 | The paper is an epidemiological study on cancer incidence associated with occupational exposure to metalworking fluids, not a pharmacokinetic study of liquid paraffin. |
| PD | Costello_2011 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study reporting hazard ratios for cancer incidence based on cumulative occupational exposure, not a pharmacodynamic or exposure-response analysis of liquid paraffin with numeric PD parameters. |
| popPK | Couillard_2002 | irrelevant | 0 | 0 | The paper is a toxicology study on petroleum oil effects on fish embryos and does not report pharmacokinetic parameters for liquid paraffin. |
| popPK | Dement_1991 | irrelevant | 0 | 0 | The paper is an epidemiological case-control study on asbestos carcinogenicity and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Dement_1991 | not_relevant | 0 | 0 | The paper discusses the carcinogenicity of chrysotile asbestos and mineral oil in a case-control study, not the pharmacodynamics of liquid paraffin. |
| popPK | Dement_1994 | irrelevant | 0 | 0 | The paper is an epidemiological study on asbestos exposure and mortality, containing no pharmacokinetic data for liquid paraffin. |
| PD | Dement_1994 | not_relevant | 0 | 0 | The paper reports an epidemiological exposure-response relationship for asbestos (chrysotile) and lung cancer, not a pharmacodynamic relationship for liquid paraffin. |
| popPK | Dement_1994_2 | irrelevant | 0 | 0 | The paper is an epidemiological study on lung cancer mortality in asbestos workers and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Dement_1994_2 | not_relevant | 2 | 1 | The paper discusses an exposure-response relationship for asbestos (not liquid paraffin) and explicitly states that mineral oil exposure was not a significant factor, providing no numeric PD parameters for the target drug. |
| popPK | Earp_2009 | irrelevant | 0 | 0 | The paper describes disease progression models for arthritis in rats and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Earp_2009 | not_relevant | 0 | 0 | The paper models disease progression in arthritis (paw edema) and does not involve liquid paraffin or any drug exposure-response relationship. |
| popPK | Ferreyra_2022 | irrelevant | 0 | 0 | The paper describes a sarcoptic mange outbreak in wild camelids and contains no pharmacokinetic data for liquid paraffin. |
| PD | Ferreyra_2022 | not_relevant | 0 | 0 | The paper describes an epidemiological outbreak of sarcoptic mange in wild camelids and does not involve the drug liquid paraffin or any pharmacodynamic modeling. |
| popPK | Fitzpatrick_1996 | irrelevant | 0 | 0 | The paper is an NMR study of inorganic phosphate in brain tissue and does not involve liquid paraffin or its pharmacokinetics. |
| popPK | Friesen_2009 | irrelevant | 0 | 0 | The paper is an epidemiological study on bladder cancer risk associated with metalworking fluid exposure, not a pharmacokinetic study of liquid paraffin. |
| PD | Friesen_2009 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study on bladder cancer risk associated with metalworking fluid exposure, not a pharmacodynamic study of liquid paraffin. |
| popPK | Friesen_2012 | irrelevant | 0 | 0 | The paper is an epidemiological study on cancer risk associated with metalworking fluid exposure, not a pharmacokinetic study of liquid paraffin. |
| PD | Friesen_2012 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study reporting hazard ratios for cancer mortality based on exposure categories, not a pharmacodynamic or exposure-response analysis with numeric PD parameters (e.g., Emax, EC50) for liquid paraffin. |
| popPK | Fritschi_2007 | irrelevant | 0 | 0 | The paper is an epidemiological case-control study on occupational risk factors for prostate cancer and BPH, not a pharmacokinetic study of liquid paraffin. |
| PD | Fritschi_2007 | not_relevant | 0 | 0 | The paper is an epidemiological case-control study on occupational risk factors for prostate cancer and BPH, explicitly stating that no dose-response relationships were seen, and does not involve liquid paraffin or pharmacodynamic modeling. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| PD | Gangneux_2019 | not_relevant | 0 | 0 | The text is a conference invitation for the 9th Congress on Trends in Medical Mycology and contains no pharmacodynamic data or analysis for liquid paraffin. |
| popPK | George_2012 | irrelevant | 0 | 0 | The paper investigates nanoparticle adjuvants for antibody production and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | George_2012 | not_relevant | 0 | 0 | The paper investigates immunological adjuvants for antibody production and does not report any pharmacodynamic or exposure-response relationship for liquid paraffin. |
| PGx | Ghafoory_2013 | not_relevant | 0 | 0 | The paper studies liver gene expression zonation following CCl4 injury and does not report pharmacogenomic effects on the PK/PD of liquid paraffin. |
| popPK | Gopaul_2021 | irrelevant | 0 | 0 | The study investigates the effect of mineral oil (a comparator/vehicle) on the pharmacokinetics of atorvastatin and pravastatin, not the pharmacokinetic parameters of liquid paraffin itself. |
| PD | Gopaul_2021 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters and qualitative inflammatory marker changes, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for liquid paraffin. |
| popPK | Greuber_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine, not liquid paraffin. |
| PD | Greuber_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of lidocaine and in vitro permeation, reporting no pharmacodynamic (effect) data or exposure-response relationship. |
| popPK | Haas_1992 | irrelevant | 0 | 0 | The paper describes an inflammation model using mustard oil and Evans' blue dye, and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Haas_1992 | not_relevant | 0 | 0 | The paper describes a model of inflammation using mustard oil (allyl isothiocyanate) and does not report any pharmacodynamic or exposure-response data for liquid paraffin. |
| popPK | Harmsen_2007 | irrelevant | 0 | 0 | The paper discusses environmental remediation of mineral oil and PAHs via landfarming, not the pharmacokinetics of liquid paraffin in a biological subject. |
| PGx | Hastilestari_2013 | not_relevant | 0 | 0 | The paper studies the genetic diversity and drought tolerance of the plant Euphorbia tirucalli for biofuel production, not the pharmacogenomics of liquid paraffin. |
| popPK | Hawtin_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of MHV370 (a TLR7/8 antagonist), not liquid paraffin. |
| popPK | Hermann_1980 | irrelevant | 0 | 0 | The paper is a toxicology study on the mutagenicity of mineral oils using the Ames test and contains no pharmacokinetic data for liquid paraffin. |
| PD | Hermann_1980 | not_relevant | 1 | 0 | The paper describes a qualitative dose-response phenomenon (enhancement/inhibition) in a mutagenicity assay but does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of donepezil, not liquid paraffin. |
| PD | Jung_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and bioequivalence analysis for donepezil, but contains no pharmacodynamic (PD) or exposure-response data. |
| popPK | Kettman_1978 | irrelevant | 0 | 0 | The paper is an immunology study on guinea pig spleen cells and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Kettman_1978 | not_relevant | 0 | 0 | The paper studies the immunological effect of mineral oil-induced peritoneal exudate lymphocytes (PELs) on spleen cells, not the pharmacodynamic or exposure-response relationship of liquid paraffin itself. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fat taste receptor agonists (NKS-3 and NKS-5) in mice, not liquid paraffin. |
| popPK | Kojima_1993 | irrelevant | 0 | 0 | The study investigates the inhibitory effect of neopterin on macrophage oxidase activity and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Kojima_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of neopterin, not liquid paraffin (mineral oil is only used as an irritant to elicit macrophages). |
| popPK | Krishnaveni_2012 | irrelevant | 0 | 0 | The study investigates the chemopreventive effects of Phyllanthus emblica extract on DMBA-induced carcinogenesis and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Krishnaveni_2012 | not_relevant | 0 | 0 | The paper studies Phyllanthus emblica extract, not liquid paraffin, and reports qualitative dose-response trends without numeric PD parameters. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a review of topical corticosteroids for eczema and does not contain pharmacokinetic data for liquid paraffin. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials regarding the use of topical corticosteroids for eczema and does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for liquid paraffin or any other drug. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper is a dietary exposure and risk assessment study for mineral oil hydrocarbons, not a pharmacokinetic study reporting disposition parameters for liquid paraffin. |
| PD | Li_2020 | not_relevant | 0 | 0 | The paper is a dietary exposure and risk assessment study using Margin of Exposure (MOE) analysis; it does not report any pharmacodynamic (PD) or exposure-response relationship for liquid paraffin. |
| popPK | Lurie_1988 | irrelevant | 0 | 0 | The study focuses on in vitro DNA adduct formation of DMBA, not the pharmacokinetics of liquid paraffin. |
| PD | Lurie_1988 | not_relevant | 0 | 0 | The paper studies DMBA-DNA adduct formation, not liquid paraffin, and does not report a pharmacodynamic model or numeric PD parameters for the specified drug. |
| popPK | Lutterodt_1992 | irrelevant | 0 | 0 | The study uses liquid paraffin only as a vehicle/control for measuring intestinal propulsion rates, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | Lutterodt_1992 | not_relevant | 4 | 3 | The paper reports a dose-response relationship for Psidium guajava extract and morphine, but liquid paraffin is used only as a vehicle/control meal and no PD parameters are reported for it. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel human constitutive androstane receptor (CAR) agonists and does not involve liquid paraffin or its pharmacokinetics. |
| popPK | Mertens_2021 | irrelevant | 0 | 0 | The paper is a toxicological risk assessment of mineral oil (MOSH/MOAH) exposure and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Mertens_2021 | not_relevant | 0 | 0 | The paper is a dietary risk assessment using NOAEL and MOE approaches, not a pharmacodynamic or exposure-response modeling study with numeric PD parameters. |
| popPK | Oehlsen_2022 | irrelevant | 0 | 0 | The paper is a review on ferrofluid synthesis and applications, containing no pharmacokinetic data for liquid paraffin. |
| PD | Oehlsen_2022 | not_relevant | 0 | 0 | The paper is a review on the synthesis and applications of ferrofluids (magnetic nanoparticles) and contains no pharmacodynamic or exposure-response data for liquid paraffin. |
| popPK | Polin_1985 | irrelevant | 0 | 0 | The study focuses on the withdrawal of polybrominated biphenyls (PBBs) from chickens, using mineral oil (liquid paraffin) only as a co-administered agent to enhance xenobiotic removal, without reporting PK parameters for liquid paraffin itself. |
| PD | Polin_1985 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response observation for colestipol (2.5% vs 10%) in the context of xenobiotic withdrawal, but does not report numeric PD parameters (Emax, EC50) or a formal concentration-effect model for liquid paraffin/mineral oil. |
| PGx | Pérez-de-Mora_2011 | not_relevant | 0 | 0 | The paper studies the ecology of bacteria degrading hydrocarbons in soil, not the pharmacogenomics of liquid paraffin in humans. |
| popPK | Qin_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a TrkB agonist antibody (Ab4B19) in mice, not liquid paraffin. |
| popPK | Remane_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic response (erythema onset) of methyl nicotinate, not the pharmacokinetic parameters of liquid paraffin. |
| PD | Remane_2006 | not_relevant | 0 | 0 | The paper studies methyl nicotinate, not liquid paraffin, and focuses on erythema onset time rather than reporting numeric PD parameters for the target drug. |
| popPK | Ritz_2006 | irrelevant | 0 | 0 | The paper is an epidemiological study on hydrazine exposure and cancer risk, containing no pharmacokinetic data for liquid paraffin. |
| PD | Ritz_2006 | not_relevant | 0 | 0 | The paper studies hydrazine exposure and cancer risk in humans, not liquid paraffin, and reports epidemiological rate ratios rather than pharmacodynamic parameters. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric populations and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a theoretical review of excipients in paediatric formulations and does not report any pharmacodynamic or exposure-response data for liquid paraffin. |
| popPK | Saez-Ayala_2023 | irrelevant | 0 | 0 | The paper describes the development of a deoxycytidine kinase inhibitor (OR0642) for leukemia and does not involve liquid paraffin or its pharmacokinetics. |
| PD | Saez-Ayala_2023 | not_relevant | 0 | 0 | The paper focuses on the drug OR0642 and dT for acute lymphoblastic leukemia; liquid paraffin is not mentioned or studied. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of dopamine on carotid bodies in vitro and does not involve liquid paraffin or pharmacokinetic parameters. |
| popPK | Sati_2025 | irrelevant | 0 | 0 | The paper is a review of silver nanoparticles and does not contain any pharmacokinetic data for liquid paraffin. |
| PD | Sati_2025 | not_relevant | 0 | 0 | The paper is a review of silver nanoparticle synthesis and applications, containing no pharmacodynamic or exposure-response data for liquid paraffin. |
| popPK | Scott_1995 | irrelevant | 0 | 0 | The paper describes an MRI imaging technique (RF current density imaging) and does not report any pharmacokinetic parameters for liquid paraffin. |
| popPK | Silva_2020 | irrelevant | 0 | 0 | The study investigates the microcirculatory effects of babassu and olive oils, using mineral oil only as a negative control, and does not report any pharmacokinetic parameters for liquid paraffin. |
| popPK | Tomasek_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of a bacterial lysate (OM-89) on bladder epithelium and antibiotic efficacy against E. coli, with no mention of liquid paraffin or its pharmacokinetics. |
| PD | Tomasek_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of OM-89 (an E. coli lysate) on bladder epithelial cells and antibiotic uptake, not the pharmacodynamics of liquid paraffin. |
| popPK | Tsujimoto_1986 | irrelevant | 0 | 0 | The paper is an immunology study on muramyldipeptides and does not report pharmacokinetic parameters for liquid paraffin. |
| PD | Tsujimoto_1986 | not_relevant | 3 | 1 | The paper describes a dose-response study for immunopotentiators (MDP derivatives) but does not report numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves in the provided text, and the specific drug 'liquid paraffin' is not the subject of the PD analysis. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper investigates retinal ganglion cell energetics and is unrelated to the pharmacokinetics of liquid paraffin. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper investigates retinal ganglion cell energetics and does not involve liquid paraffin or report any pharmacodynamic exposure-response relationship. |
| popPK | Wasilczuk_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of volatile anesthetics (isoflurane, sevoflurane, etc.) and sex hormones, not liquid paraffin. |
| popPK | Zaki_2011 | irrelevant | 0 | 0 | The study focuses on hydroxyzine hydrochloride, and liquid paraffin is used only as a manufacturing excipient (continuous medium) rather than the subject drug. |
| PD | Zaki_2011 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro/in vivo release of hydroxyzine microsponges; liquid paraffin is merely a process excipient, and no pharmacodynamic or exposure-response data for liquid paraffin are reported. |
| popPK | Zhu_2012 | irrelevant | 0 | 0 | The paper studies the storage stability of fungicide resistance in a plant pathogenic fungus, not the pharmacokinetics of liquid paraffin. |
| PD | Zhu_2012 | not_relevant | 0 | 0 | The paper studies the stability of fungicide resistance in fungi during storage, not the pharmacodynamic exposure-response relationship of liquid paraffin in a biological system. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The paper investigates liver fibrosis mechanisms in ASGR1 knockout mice and does not involve liquid paraffin or pharmacokinetic parameters. |
| PD | Zhu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of liver fibrosis in ASGR1 knockout mice and does not report any pharmacodynamic or exposure-response relationship for liquid paraffin. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific study data, drug information, or pharmacodynamic parameters for liquid paraffin. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is a conference header and contains no information regarding liquid paraffin, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a conference title and contains no information regarding liquid paraffin, pharmacodynamics, or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
