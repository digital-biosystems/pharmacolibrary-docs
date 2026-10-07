<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;carmustine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carmustine_Levin1978_reference&quot;,&quot;label&quot;:&quot;Levin_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carmustine/Carmustine_Levin1978_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carmustine_Russo1981_reference&quot;,&quot;label&quot;:&quot;Russo_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carmustine/Carmustine_Russo1981_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# carmustine

- **generic name:** carmustine
- **ATC codes:** `L01AD01`
- **DrugBank:** [DB00262](https://go.drugbank.com/drugs/DB00262) · **PubChem:** [CID 2578](https://pubchem.ncbi.nlm.nih.gov/compound/2578)
- **molar mass:** 214.05 g/mol (C5H9Cl2N3O2) — DrugBank
- **groups:** approved, investigational

## About

Carmustine is an alkylating anticancer drug used to treat cancers such as Hodgkin disease and non-Hodgkin lymphoma. It remains an approved medicine, with an authorised product in the European Union, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415869](https://www.wikidata.org/wiki/Q415869) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:22 | 2:53 | 2/1/0 | 2/1/0 | 0/0/0 | 156,578/7,741 | einfracz / qwen3.8-27b | 13 | 3/14 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Levin_1978_reference](drugs/drug_carmustine/Carmustine_Levin1978_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Levin VA et al., Pharmacokinetics of BCNU in man: a prel…, Cancer treatment reports (1978) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Russo_1981_reference](drugs/drug_carmustine/Carmustine_Russo1981_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Russo R et al., Differential pulse polarographic determ…, Cancer treatment reports (1981) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [El-Yazigi_1988_reference](drugs/drug_carmustine/Carmustine_ElYazigi1988_reference.md) | — | 1-compartment (no model) | 3 | El-Yazigi A et al., Capillary gas chromatography and thermi…, Pharmaceutical research (1988) | [10.1023/a:1015989612562](https://doi.org/10.1023/a:1015989612562) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Clancy_2022_Cell_viability](drugs/drug_carmustine/pd_Clancy_2022_Cell_viability.md) | cell viability biomarker turnover ← BCNU | — | Clancy A et al., Hydrogel-based microfluidic device with…, Scientific reports (2022) | [10.1038/s41598-022-22439-y](https://doi.org/10.1038/s41598-022-22439-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2022_IC50](drugs/drug_carmustine/pd_Liu_2022_IC50.md) | Cell Viability ← BCNU · direct Emax (saturable) effect | — | Liu CA et al., Interstitial Control-Released Polymer C…, Cancers (2022) | [10.3390/cancers14041051](https://doi.org/10.3390/cancers14041051) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Doroshenko_2003_cytotoxicity](drugs/drug_carmustine/pd_Doroshenko_2003_cytotoxicity.md) | cytotoxicity ← carmustine · direct Emax (saturable) effect | — | Doroshenko N et al., Ion dependence of cytotoxicity of carmu…, European journal of pharmac… (2003) | [10.1016/s0014-2999(03)02191-5](https://doi.org/10.1016/s0014-2999(03)02191-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carmustine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), GSR (allosteric modulator), RNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 215 matched, 108 returned
- **screened:** 100  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Henner_1986.pdf` | Henner WD et al., Pharmacokinetics and immediate effects…, Cancer treatment reports (1986) | popPK | 10 | not captured | [3719578](https://pubmed.ncbi.nlm.nih.gov/3719578) | The abstract provides explicit quantitative pharmacokinetic parameters for carmustine (elimination constant, volume of distribution, clearance, peak concentration, AUC) measured in human patients. |
| `Levin_1978.pdf` | Levin VA et al., Pharmacokinetics of BCNU in man: a prel…, Cancer treatment reports (1978) | popPK | 10 | not captured | [688274](https://pubmed.ncbi.nlm.nih.gov/688274) | The paper reports quantitative two-compartment pharmacokinetic parameters (Vd, CL, K10) for BCNU (carmustine) in humans, with all numeric values provided in the text. |
| `Russo_1981.pdf` | Russo R et al., Differential pulse polarographic determ…, Cancer treatment reports (1981) | popPK | 10 | not captured | [7248980](https://pubmed.ncbi.nlm.nih.gov/7248980) | The evidence reports quantitative PK parameters (t1/2, Vd, CL) for BCNU (carmustine) in patients. |
| `El-Yazigi_1988.pdf` | El-Yazigi A et al., Capillary gas chromatography and thermi…, Pharmaceutical research (1988) | popPK | 5 | [10.1023/a:1015989612562](https://doi.org/10.1023/a:1015989612562) | [3247301](https://pubmed.ncbi.nlm.nih.gov/3247301) | Reports quantitative pharmacokinetic parameters (clearance, rate constants) for carmustine in rabbits. |
| `Grahovac_2026.pdf` | Grahovac T et al., The Role of Cellular Glutathione Redox…, International journal of mo… (2026) | pd | 4 | [10.3390/ijms27156920](https://doi.org/10.3390/ijms27156920) | [42589574](https://www.ncbi.nlm.nih.gov/pubmed/42589574) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T16:21:44.306115+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auger-Quittet_2014 | irrelevant | 0 | 0 | This is a meta-analysis of clinical outcomes (survival/response rates) for a conditioning regimen in lymphoma, and does not report any pharmacokinetic parameters (CL, V, etc.) for carmustine. |
| PGx | Babich_1998 | not_relevant | 0 | 0 | The paper studies the cytotoxicity of sodium nitroprusside, not the pharmacokinetics or pharmacodynamics of carmustine. |
| PGx | Bachanova_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on clinical outcomes (relapse/survival) for cyclophosphamide, not PK/PD parameters for carmustine. |
| PGx | Barcellos-Hoff_1992 | not_relevant | 1 | 2 | The paper investigates acquired phenotypic resistance and hypersensitivity in tumor cell lines, not the effect of a human genetic variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes an in silico/in vitro method for identifying synergistic drug combinations and does not report pharmacokinetic parameters for carmustine. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on a machine learning framework for identifying synergistic drug combinations and does not report specific pharmacodynamic parameters or exposure-response relationships for carmustine. |
| popPK | Blasco_2010 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics in patients receiving MBVP chemotherapy, while carmustine (BCNU) is only a co-administered drug without reported PK parameters. |
| PD | Blasco_2010 | not_relevant | 2 | 1 | The study analyzes the association between MTX exposure (AUC) and clinical outcome (survival/response) but reports no numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect model. |
| PD | Bouffet_1997 | not_relevant | 1 | 0 | The paper is a clinical phase II trial reporting only qualitative outcomes (response rates) and mentions a steep dose-response curve in animal models, but provides no numeric PD parameters or exposure-response data for the patients. |
| PGx | Buckner_2003 | not_relevant | 1 | 0 | The paper focuses on irinotecan pharmacogenetics and mentions carmustine only as a context for glioma treatment, without reporting any data on carmustine's PK/PD. |
| PD | Cagnoni_1999 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) drug-drug interactions (AUC, Cmax, t1/2) but explicitly states that pharmacodynamic (PD) endpoints such as toxicity or antitumor effect could not be analyzed due to sample size and heterogeneity. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for melphalan, not carmustine (BCNU is only a comparator drug in a regimen). |
| PD | Choi_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for melphalan, not carmustine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Chou_2012 | not_relevant | 0 | 0 | The paper investigates microenvironmental hypoxia and ABCB1 expression effects on BCNU sensitivity, but does not report genetic variants or pharmacogenomic associations. |
| popPK | Dahi_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for melphalan, not carmustine, even though carmustine is part of the BEAM regimen. |
| PD | Dahi_2022 | not_relevant | 2 | 1 | The paper focuses on melphalan PK and toxicity, mentioning carmustine only as part of the BEAM regimen without providing any carmustine-specific exposure-response or PD parameters. |
| popPK | Doroshenko_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of carmustine cytotoxicity and ion dependence, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Duc_1987 | irrelevant | 2 | 0 | The study is a theoretical modeling paper comparing model predictions to external data for mice, but the provided evidence contains no quantitative PK parameter values (CL, V, etc.) for carmustine. |
| popPK | Fernández-Serra_2024 | irrelevant | 0 | 0 | The paper focuses on silk fibroin hydrogels and does not mention carmustine or report pharmacokinetic parameters for it. |
| PD | Fernández-Serra_2024 | not_relevant | 0 | 0 | The paper focuses on the release kinetics of various molecules from silk fibroin hydrogels and does not mention carmustine or report any pharmacodynamic (exposure-response) parameters for it. |
| PGx | Frischer_1987 | not_relevant | 0 | 0 | The paper studies the biotransformation of primaquine, not carmustine, and discusses BCNU only as an inhibitor in vitro without reporting a pharmacogenomic genotype effect on carmustine PK/PD. |
| popPK | Goddard_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitozolomide, not carmustine; carmustine (BCNU) is mentioned only as a comparator with no PK parameters reported for it. |
| popPK | Grahovac_2026 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Grahovac_2026 | not_relevant | 0 | 0 | The paper focuses on the role of glutathione in ileum contractility and does not mention carmustine or report any pharmacodynamic or exposure-response data for it. |
| PGx | Hacke_2009 | not_relevant | 0 | 0 | The paper focuses on HLA suppression and MGMT-mediated resistance for cell selection in transplantation, not on pharmacogenomic effects on carmustine PK or PD parameters. |
| PGx | Harker_1985 | not_relevant | 0 | 0 | The paper focuses on doxorubicin resistance in sarcoma cell lines and explicitly states that cross-resistance to carmustine was not observed, providing no pharmacogenomic data for carmustine. |
| popPK | Hirasawa_2022 | irrelevant | 0 | 0 | The paper describes a PBPK model extension for brain tumors and validates it on six small molecule anticancer drugs, but carmustine is not mentioned as the subject drug, nor are any quantitative PK parameters for it reported. |
| PD | Hirasawa_2022 | not_relevant | 0 | 0 | The paper focuses on extending a physiologically based pharmacokinetic (PBPK) model to predict drug concentrations in brain tumors and does not report any pharmacodynamic (PD) or exposure-response relationships for carmustine or any other drug. |
| popPK | Humpage_2005 | irrelevant | 0 | 0 | The paper studies the genotoxicity and cytotoxicity of Cylindrospermopsin (CYN), not carmustine. |
| PD | Humpage_2005 | not_relevant | 0 | 0 | The paper studies the toxin Cylindrospermopsin (CYN), not the drug carmustine (BCNU), and does not report a PD model for carmustine. |
| popPK | Huntjens_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mocravimod, not carmustine. |
| PD | Huntjens_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and drug-drug interactions of mocravimod, not carmustine, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Jaeckle_2010 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects on irinotecan (SN-38) PK and toxicity, but carmustine (BCNU) is a co-administered agent with no reported PGx effects on its own PK or PD parameters. |
| popPK | Jones_1993 | relevant | 4 | 0 | The study investigates PK interactions of BCNU (carmustine) in humans, but the extracted evidence is an abstract that discusses qualitative findings (correlations, variability) without listing specific quantitative parameter values (CL, V, etc.). |
| PD | Jones_1993 | not_relevant | 2 | 0 | The text describes qualitative correlations between BCNU blood levels and pulmonary injury risk but does not provide numeric PD parameters, dose-response curves, or a formal PK/PD model fit. |
| PD | Jones_1994 | not_relevant | 1 | 0 | The paper focuses on the pharmacokinetics of carmustine (BCNU) and its interaction with other agents, mentioning a prior correlation with toxicity but providing no numeric PD parameters or exposure-response analysis in this text. |
| popPK | Kang_2008 | irrelevant | 0 | 0 | The study focuses on the efficacy and mechanism of the compound EDL-155, with carmastine used only as a comparator agent without any pharmacokinetic analysis or reporting of disposition parameters for carmastine. |
| PD | Kang_2008 | not_relevant | 0 | 0 | The paper focuses on the PD of EDL-155; carmustine is only mentioned as a comparator in an in vitro assay without providing specific numeric PD parameters or an exposure-response relationship for carmustine itself. |
| PGx | Kim_2011 | not_relevant | 0 | 0 | The study investigates the mechanism of resistance involving the gene Rex-1 and the transporter ABCG2, but explicitly states that carmustine (BCNU) is not a substrate for ABCG2 and does not report pharmacogenomic changes in PK or PD parameters based on genotypes. |
| PGx | Kirches_1999 | not_relevant | 2 | 8 | The paper tests if MGMT and CYP3A4 *inhibition* (pharmacological, not genetic) affects drug sensitivity (PD), and concludes no significant sensitization was observed. |
| popPK | Kishk_2024 | irrelevant | 0 | 0 | The paper is a metabolic modeling and drug discovery study that does not report quantitative pharmacokinetic parameters for carmustine. |
| PD | Kishk_2024 | not_relevant | 0 | 0 | The paper focuses on metabolic modeling and drug repurposing predictions for gliomas; it does not report pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for carmustine. |
| PD | Kumar_2020 | not_relevant | 1 | 1 | The paper reports a single IC50 value for carmustine as a standard comparator in a cytotoxicity assay, but does not provide a concentration-effect curve, dose-response model, or PK/PD analysis for carmustine. |
| PGx | Lan_2023 | not_relevant | 0 | 0 | The paper is a general review on infusion rates of various anticancer agents (including carmustine) and mentions genetic polymorphisms only in the context of other drugs (gemcitabine, methotrexate), without linking any specific genotype to a PK/PD parameter for carmustine. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of FAU (1-(9-fluorene-9-methyl)-5-fluoro-uridine), not carmustine. |
| PD | Li_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of FAU and its metabolite FMAU using PET and plasma data, but does not report a pharmacodynamic (PD) or exposure-response relationship with numeric PD parameters. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of progression-free survival in non-Hodgkin lymphoma patients and does not report any pharmacokinetic parameters for carmustine. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL patients and does not report any pharmacodynamic or exposure-response relationship for carmustine. |
| PD | Li_2023 | not_relevant | 3 | 2 | The paper reports IC50 values for a nanoparticle formulation in vitro and tumor weight changes in vivo, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response analysis, or derivable PD parameters (e.g., Emax, EC50) for carmustine itself. |
| PD | Li_2024 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a nanomicelle formulation, which is a cytotoxicity assay rather than a pharmacodynamic (exposure-response) model of the drug itself. |
| PGx | Liang_2004 | not_relevant | 0 | 0 | The study focuses on in vitro drug resistance and invasiveness in cell lines induced by pulse selection, and does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters of carmustine. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carfilzomib, not carmustine. |
| PD | Lin_2023 | not_relevant | 0 | 0 | The paper reports a PK/PD model for carfilzomib, not carmustine. |
| PD | Linch_1993 | not_relevant | 1 | 0 | The paper reports a clinical dose-response comparison (high-dose vs. low-dose) with survival outcomes but provides no pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Liu_2002 | not_relevant | 5 | 8 | The paper describes the mechanism of acquired resistance to carmustine (BCNU) via MGMT mutations (PD level) rather than characterizing a specific pharmacogenomic effect on PK/PD parameters of the drug itself (e.g., AUC, exposure). |
| PD | Lu_2012 | not_relevant | 3 | 2 | The paper reports a comparative IC50 value (77% decrease) for a nanocarrier formulation versus free drug, but does not provide a full concentration-effect curve, Emax, or formal PK/PD model parameters for carmustine itself. |
| PD | Mills_1995 | not_relevant | 1 | 0 | The paper discusses dose escalation of etoposide (VP16) and toxicity, but does not report a pharmacodynamic or exposure-response relationship for carmustine (BCNU) with numeric parameters. |
| PD | Monk_2002 | not_relevant | 3 | 2 | The paper reports in vitro dose-response data for carmustine (BCNU) combined with radiation, but it focuses on synergy indices (CI) and fractional proliferation (FC) rather than deriving specific pharmacodynamic parameters (like Emax or EC50) for the drug alone or in a standard PK/PD framework. |
| popPK | Märtson_2023 | irrelevant | 0 | 0 | The study investigates ciprofloxacin, fluconazole, and acyclovir in HSCT patients; carmustine is not mentioned or studied. |
| PD | Märtson_2023 | not_relevant | 0 | 0 | The paper focuses on the impact of gastrointestinal mucositis on drug absorption (PK) and gut microbiota, not on the pharmacodynamic (exposure-response or dose-response) effects of carmustine or any other drug. |
| PD | Nieto_2000 | not_relevant | 0 | 0 | The paper explicitly states that no pharmacodynamic correlation was observed between the drugs and cardiac toxicity, and it reports only incidence rates and risk factors, not numeric PD parameters. |
| PD | Nieto_2001 | not_relevant | 1 | 0 | The text is an introduction to a review article that mentions carmustine but does not present specific data, models, or numeric PD parameters. |
| popPK | Oehlsen_2022 | irrelevant | 0 | 0 | The paper is a review on ferrofluid synthesis and applications and contains no information on carmustine pharmacokinetics. |
| PD | Oehlsen_2022 | not_relevant | 0 | 0 | The paper is a review on ferrofluid synthesis and applications, containing no information on carmustine or pharmacodynamics. |
| PD | Pak_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of fisetin, not carmustine; carmustine is only mentioned as a positive control without reported numeric PD parameters. |
| PD | Pepponi_2003 | not_relevant | 3 | 2 | The paper reports IC50 values for cell lines, which are dose-response metrics, but it focuses on the correlation with DNA repair enzymes (OGAT/MMR) rather than providing a pharmacodynamic model or exposure-response relationship for carmustine in a clinical or PK/PD context. |
| PGx | Petros_2005 | not_relevant | 0 | 0 | The paper reports pharmacogenomic associations for cyclophosphamide, cisplatin, and carmustine co-administration, but specifically details PK changes for cyclophosphamide (CYP3A4/5) and platinum (metallothionein), with no specific genotype-PK association reported for carmustine alone. |
| PD | Piazza_1984 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetic monitoring challenges and does not report any specific numeric PD parameters or concentration-effect relationships for carmustine. |
| PD | Piepmeier_1996 | not_relevant | 0 | 0 | The paper focuses on MDL101731 and only mentions carmustine as a non-significant control in one xenograft model without providing any exposure-response or dose-response analysis for carmustine. |
| PGx | Prakash_2026 | not_relevant | 0 | 0 | The study is a computational drug repurposing framework and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Purvis_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bendamustine, not carmustine. |
| PD | Purvis_2023 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of bendamustine, not carmustine, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Radhakrishnan_2019 | irrelevant | 0 | 0 | The paper investigates busulfan pharmacokinetics and efficacy, not carmustine. |
| PD | Radhakrishnan_2019 | not_relevant | 0 | 0 | The paper studies busulfan, not carmustine, and reports only PK accumulation and clinical efficacy/toxicity without any concentration-effect or dose-response PD modeling. |
| PGx | Rameika_2025 | not_relevant | 6 | 2 | The paper mentions carmustine has increased toxicity in cells with the rapid NAT2 allele, but it does not report specific PK/PD parameter changes (e.g., AUC, Cmax, IC50 values) or quantitative effect sizes in the provided text. |
| PGx | Rapoport_2002 | not_relevant | 0 | 0 | The paper is a clinical trial report on autotransplantation protocols and does not investigate pharmacogenomics or PK/PD parameters for carmustine. |
| PGx | Reardon_2004 | not_relevant | 0 | 0 | The paper is a Phase 2 clinical trial reporting efficacy and toxicity outcomes; it does not report pharmacogenomic effects of gene variants on the PK or PD parameters of carmustine. |
| popPK | Shah_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for melphalan, not carmustine; carmustine is mentioned only as part of a chemotherapy regimen. |
| PD | Shah_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for melphalan, not carmustine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Smith_2024 | irrelevant | 0 | 0 | The paper is a review of preclinical efficacy testing in murine models and does not report pharmacokinetic parameters for carmustine. |
| PD | Smith_2024 | not_relevant | 0 | 0 | The text is a general review of preclinical testing programs in pediatric cancers and does not contain specific data, models, or numeric parameters for carmustine. |
| PD | Soudani_2021 | not_relevant | 0 | 0 | The paper reports in silico molecular docking scores (binding energy) for carmustine derivatives, not in vivo or in vitro pharmacodynamic exposure-response or dose-response data with numeric PD parameters like Emax or EC50. |
| PD | Steinbok_1980 | not_relevant | 3 | 2 | The paper reports a radiation dose-response relationship and qualitative synergism with BCNU, but it does not provide a concentration-effect analysis or numeric PD parameters (e.g., EC50, Emax) for carmustine. |
| PD | Tseng_2020 | not_relevant | 0 | 0 | The paper studies SN-38 microparticles, not carmustine, and reports only qualitative therapeutic efficacy without numeric PD parameters. |
| popPK | Tserng_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for O6-benzylguanine and its metabolite, not for carmustine (BCNU), which is only mentioned as a co-administered agent. |
| popPK | Ueda-Kawamitsu_2002 | irrelevant | 2 | 1 | The study is an in-vitro pharmacodynamic model in L1210 cells; while a half-life of 40 min is reported, the lack of a defined volume of distribution or clearance parameters makes it insufficient for extracting standard quantitative disposition parameters. |
| PGx | Vogel_1989 | not_relevant | 0 | 0 | The paper studies mutagenicity in Drosophila and does not report pharmacokinetic or pharmacodynamic effects of carmustine in humans or animal PK/PD models. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper identifies carmustine as a potential therapeutic agent in an in silico screening for high-risk patients but does not report specific pharmacogenomic effects on PK/PD parameters for carmustine. |
| popPK | Woo_1975 | irrelevant | 2 | 0 | The paper describes a theoretical simulation model for cell cycle kinetics and drug distribution but does not report measured quantitative pharmacokinetic parameter values for carmustine (BCNU) in the provided text. |
| popPK | Wołodkiewicz_2025 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of new compounds (ZOTs) in GBM cells and mentions temozolomide (TMZ) only as background context, without providing any pharmacokinetic parameters for carmustine. |
| PD | Wołodkiewicz_2025 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of novel polyfluoroalkyl phosphonates (ZOT5-1-Me/Et) and does not report a pharmacodynamic model or exposure-response relationship for carmustine. |
| popPK | Xu-Welliver_1999 | irrelevant | 0 | 0 | The paper focuses on the molecular biology of DNA repair enzyme mutations and in-vitro sensitivity to O6-benzylguanine, not the pharmacokinetics of carmustine. |
| PD | Xu-Welliver_1999 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of O6-benzylguanine (BG) resistance in AGT mutants and does not report pharmacodynamic or exposure-response data for carmustine. |
| PGx | Yang_2007 | not_relevant | 0 | 0 | The paper investigates the interaction between nitric oxide donors and alkylating agents (like BCNU) on cell viability, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | You_2015 | irrelevant | 0 | 0 | The study focuses on etoposide pharmacokinetics in the BEAM regimen; carmustine is a co-administered drug, not the subject of PK modeling. |
| PD | You_2015 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of etoposide, not carmustine, and reports survival outcomes rather than a concentration-effect or dose-response relationship for carmustine. |
| PGx | Yu_2021 | not_relevant | 1 | 0 | The paper investigates ECM-mediated drug resistance and signaling pathways, not genetic variants and their effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper investigates drug resistance in glioma stem cells involving carmustine but does not report the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zhang_2026 | not_relevant | 0 | 1 | The paper reports a correlation between gene expression and clinical drug resistance (PD) but does not report a specific genotype or variant affecting a measurable pharmacokinetic or pharmacodynamic parameter; it is an observational bioinformatics study, not a pharmacogenomic trial. |
| popPK | unknown_2014 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | unknown_2014 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no study data, results, or pharmacodynamic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is a header ("Physicians Abstracts") and contains no scientific content, data, or mention of carmustine or pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper discusses stem cell transplantation, vaccine trials, and pharmacokinetics of fludarabine and voriconazole, but does not report pharmacokinetic parameters for carmustine. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text consists of abstracts from a hematology conference and does not contain any pharmacodynamic or exposure-response analysis for carmustine. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |
| popPK | von_2022 | irrelevant | 0 | 0 | The paper studies B-cell reconstitution following stem cell transplantation and does not report pharmacokinetic parameters for carmustine. |
| PD | von_2022 | not_relevant | 0 | 0 | The paper focuses on B-cell reconstitution kinetics after stem cell transplantation and does not report any pharmacodynamic or exposure-response analysis for carmustine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:22 UTC</sub>
