<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;bendamustine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bendamustine_Kim2018_reference&quot;,&quot;label&quot;:&quot;Kim_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/Bendamustine_Kim2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bendamustine_Radhakrishnan2019_reference&quot;,&quot;label&quot;:&quot;Radhakrishnan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/Bendamustine_Radhakrishnan2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bendamustine

- **generic name:** bendamustine
- **ATC codes:** `L01AA09`
- **DrugBank:** [DB06769](https://go.drugbank.com/drugs/DB06769) · **PubChem:** [CID 65628](https://pubchem.ncbi.nlm.nih.gov/compound/65628)
- **molar mass:** 358.263 g/mol (C16H21Cl2N3O2) — DrugBank
- **groups:** approved, investigational

## About

Bendamustine is an alkylating anticancer drug used to treat blood cancers such as chronic lymphocytic leukemia and several types of lymphoma, including mantle cell and non-Hodgkin lymphoma. It is an approved medicine and appears on the WHO list of essential medicines, so it is widely used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425745](https://www.wikidata.org/wiki/Q425745) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bendamustine | parent | 358.263 | C16H21Cl2N3O2 | DrugBank | [65628](https://pubchem.ncbi.nlm.nih.gov/compound/65628) | Darwish_2014, Kim_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:17 | 18:39 | 2/2/0 | 3/0/0 | 0/0/0 | 997,838/51,376 | einfracz / qwen3.8-27b | 30 | 1/26 | 28/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kim_2018_reference](drugs/drug_bendamustine/Bendamustine_Kim2018_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Kim T et al., Clinical response and pharmacokinetics…, BMC cancer (2018) | [10.1186/s12885-018-4632-y](https://doi.org/10.1186/s12885-018-4632-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Radhakrishnan_2019_reference](drugs/drug_bendamustine/Bendamustine_Radhakrishnan2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Radhakrishnan SV et al., A Phase 1 Study of Intravenous Busulfan…, Cell transplantation (2019) | [10.1177/0963689719880541](https://doi.org/10.1177/0963689719880541) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Darwish_2014_reference](drugs/drug_bendamustine/Bendamustine_Darwish2014_reference.md) | — | 1-compartment (no model) | 5 | Darwish M et al., Population pharmacokinetics and pharmac…, Current medical research an… (2014) | [10.1185/03007995.2014.941976](https://doi.org/10.1185/03007995.2014.941976) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Darwish_2014_2_reference](drugs/drug_bendamustine/Bendamustine_Darwish2014v2_reference.md) | — | 1-compartment (no model) | 0 | Darwish M et al., An evaluation of the potential for drug…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2445-5](https://doi.org/10.1007/s00280-014-2445-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chow_2002_IC30_IC50](drugs/drug_bendamustine/pd_Chow_2002_IC30_IC50.md) | apoptosis ← rituximab + bendamustine · inhibition effect | — | Chow KU et al., Anti-CD20 antibody (IDEC-C2B8, rituxima…, Haematologica (2002) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Darwish_2014_infection](drugs/drug_bendamustine/pd_Darwish_2014_infection.md) | infection biomarker turnover ← bendamustine | — | Darwish M et al., Population pharmacokinetics and pharmac…, Current medical research an… (2014) | [10.1185/03007995.2014.941976](https://doi.org/10.1185/03007995.2014.941976) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Dreyling_2021_MCL](drugs/drug_bendamustine/pd_Dreyling_2021_MCL.md) | B-cell malignancy treatment response ← bendamustine · inhibition effect | — | Dreyling M et al., A Phase III study of zanubrutinib plus…, Future oncology (London, En… (2021) | [10.2217/fon-2020-0794](https://doi.org/10.2217/fon-2020-0794) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bendamustine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 106 matched, 86 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Darwish_2014.pdf` | Darwish M et al., Population pharmacokinetics and pharmac…, Current medical research an… (2014) | popPK | 10 | [10.1185/03007995.2014.941976](https://doi.org/10.1185/03007995.2014.941976) | [25105914](https://pubmed.ncbi.nlm.nih.gov/25105914) | The paper reports quantitative population PK parameters for bendamustine, including specific half-life values (t1/2 alpha and beta) and exposure metrics, directly addressing the disposition of the subject drug. |
| `Purvis_2023.pdf` | Purvis KN et al., Pharmacokinetics and safety of bendamus…, Cancer chemotherapy and pha… (2023) | popPK | 10 | [10.1007/s00280-023-04540-9](https://doi.org/10.1007/s00280-023-04540-9) | [37199744](https://pubmed.ncbi.nlm.nih.gov/37199744) | The study fits a population PK model for bendamustine in humans and reports summary statistics (AUC, Cmax), but specific model parameter estimates (CL, V, Q) are not explicitly listed in the provided evidence. |
| `Owen_2010.pdf` | Owen JS et al., Bendamustine pharmacokinetic profile an…, Cancer chemotherapy and pha… (2010) | popPK | 9 | [10.1007/s00280-010-1254-8](https://doi.org/10.1007/s00280-010-1254-8) | [20140617](https://pubmed.ncbi.nlm.nih.gov/20140617) | The paper describes a pharmacokinetic study of bendamustine in humans, but the specific numeric values for clearance, volume, or rate constants are not provided in the text (only the half-life is mentioned). |

<sub>queue written 2026-10-07T16:09:43.992793+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arimany-Nardi_2015 | irrelevant | 0 | 0 | The study focuses on in-vitro transporter identification (hOCT1) and cytotoxicity, not quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Badawi_2022 | irrelevant | 0 | 0 | The study evaluates the bioavailability and pharmacokinetics of venetoclax, not bendamustine. |
| popPK | Bagacean_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rituximab, not bendamustine, which is only mentioned as a chemotherapy component in the treatment regimens. |
| popPK | Brown_2015 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study (phase 1b trial) that does not report pharmacokinetic parameters for bendamustine. |
| PGx | Cencini_2019 | not_relevant | 2 | 10 | The study reports an association between a SNP (IL2) and a toxicity side effect (skin rash), not a change in a pharmacokinetic or pharmacodynamic parameter of bendamustine. |
| PGx | Cencini_2023 | not_relevant | 1 | 5 | The paper reports prognostic associations between gene variants and disease outcomes (PFS/OS), not pharmacokinetic or pharmacodynamic parameter changes. |
| PGx | Darwish_2015 | not_relevant | 0 | 0 | The paper summarizes general PK/PD profiles and covariates like age, sex, and organ function, but does not report any pharmacogenomic effects (e.g., CYP1A2 polymorphisms) on PK/PD parameters. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for polatuzumab vedotin, not bendamustine. |
| PGx | Galimberti_2019 | not_relevant | 0 | 0 | The paper is a review on minimal residual disease detection techniques in lymphomas and mentions bendamustine only as part of a treatment regimen, without reporting any pharmacogenomic effects on its PK or PD. |
| popPK | Gibiansky_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of obinutuzumab, not bendamustine, which is only mentioned as a co-administered agent in the trial arms. |
| popPK | Gisleskog_2025 | irrelevant | 0 | 0 | The study analyzes the population pharmacokinetics of ibrutinib, not bendamustine; bendamustine is only a co-administered comparator drug. |
| PD | Gisleskog_2025 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for ibrutinib, not bendamustine, and does not provide numeric PD parameters for bendamustine. |
| popPK | Hoang_2025 | irrelevant | 0 | 0 | The study focuses on ibrutinib pharmacovigilance and drug interactions in CLL patients; bendamustine is only mentioned as a prior therapy variable, with no PK parameters reported for it. |
| popPK | Jamois_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and clinical outcomes of obinutuzumab, with bendamustine serving only as a chemotherapy comparator agent. |
| PGx | Jamois_2019 | not_relevant | 0 | 0 | The study investigates the PK and clinical outcome of obinutuzumab (G), not bendamustine, although bendamustine is mentioned as part of the chemotherapy backbone. |
| popPK | Jeha_2021 | irrelevant | 2 | 0 | The study mentions that optional pharmacokinetic studies were performed, but the provided evidence contains no quantitative disposition parameters (CL, V, T1/2) for bendamustine. |
| PGx | Johnson_2014 | not_relevant | 2 | 1 | The paper is a general review of pharmacogenetics in CLL and does not report specific pharmacogenomic effects on the PK or PD parameters of bendamustine. |
| popPK | Lammers_2017 | irrelevant | 0 | 0 | The study investigates CYP probe drugs (caffeine, metoprolol, midazolam, omeprazole, warfarin) and does not involve bendamustine. |
| popPK | Lavezzi_2019 | irrelevant | 2 | 0 | The study focuses on rituximab and ibrutinib PK; while bendamustine is mentioned, no quantitative disposition parameters (CL, V, etc.) for bendamustine are reported in the evidence. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival (clinical efficacy outcomes), not a pharmacokinetic study of bendamustine. |
| popPK | Liao_2024 | irrelevant | 0 | 0 | The paper is a review focused on the clinical pharmacology and development of polatuzumab vedotin, with bendamustine only mentioned as a co-administered comparator agent, and no bendamustine-specific PK parameters are provided. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of 5-azacytidine priming for cisplatin in DLBCL, with no pharmacokinetic parameters reported for bendamustine. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of polatuzumab vedotin, with bendamustine listed only as a co-administered drug (extrinsic factor) rather than the subject of PK analysis. |
| popPK | Lu_2020_3 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for polatuzumab vedotin (and its metabolite MMAE), not for bendamustine. |
| PGx | Maruyama_2024 | not_relevant | 0 | 0 | The paper discusses clinical outcomes of SARS-CoV-2 infection in lymphoma patients and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel ethanoanthracene compounds for CLL, and bendamustine is only mentioned as a background comparator with no pharmacokinetic data provided. |
| popPK | Mc_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of CAR-T cell therapies (axi-cel and brexu-cel), not bendamustine; bendamustine is only mentioned as a prior treatment covariate. |
| popPK | Mitchell_2025 | irrelevant | 0 | 0 | The paper investigates the long-term mutational signatures and clonal hematopoiesis effects of chemotherapy on normal blood cells, not the pharmacokinetic disposition parameters of bendamustine. |
| popPK | Montillo_2019 | irrelevant | 0 | 0 | The paper reports health-related quality of life outcomes for idelalisib/bendamustine/rituximab, not pharmacokinetic parameters. |
| popPK | Owen_2010 | relevant | 9 | 2 | The paper describes a pharmacokinetic study of bendamustine in humans, but the specific numeric values for clearance, volume, or rate constants are not provided in the text (only the half-life is mentioned). |
| PD | Owen_2010 | not_relevant | 3 | 1 | The study reports a significant correlation between Cmax and nausea probability but explicitly states no correlation was observed for efficacy or other safety measures due to limited exposure range, and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| popPK | Pomeroy_2026 | irrelevant | 0 | 0 | The paper focuses on a PK/PD model for the CAR T-cell therapy axicabtagene ciloleucel, not the drug bendamustine. |
| popPK | Purvis_2023 | relevant | 10 | 3 | The study fits a population PK model for bendamustine in humans and reports summary statistics (AUC, Cmax), but specific model parameter estimates (CL, V, Q) are not explicitly listed in the provided evidence. |
| popPK | Radhakrishnan_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not bendamustine, which is not mentioned in the provided evidence. |
| popPK | Samineni_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax; bendamustine is only mentioned as a comparator agent in a different trial (MURANO). |
| popPK | Sehn_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy/safety trial of obinutuzumab and rituximab in lymphoma, with no pharmacokinetic data or parameters for bendamustine. |
| popPK | Shah_2022 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of melphalan, not bendamustine. |
| popPK | Shemesh_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for polatuzumab vedotin (pola), not bendamustine; bendamustine is not the subject drug. |
| popPK | Shi_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polatuzumab vedotin (pola), not bendamustine, which is only mentioned as a co-administered drug in the combination regimen. |
| PGx | Takimoto-Shimomura_2018 | not_relevant | 2 | 8 | The paper describes acquired drug resistance in cell lines mediated by gene overexpression (ABCB1, MGST1), not the effect of a genetic variant on pharmacokinetic or pharmacodynamic parameters in a clinical or pharmacogenomic context. |
| PGx | Teichert_2007 | not_relevant | 1 | 0 | The paper characterizes bendamustine metabolism and CYP1A2 involvement but does not report data on how specific genetic variants or phenotypes alter PK or PD parameters. |
| popPK | Varela-González-Aller_2025 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of fludarabine, not bendamustine. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for venetoclax, not bendamustine. |
| popPK | Zhenyan_2026 | irrelevant | 0 | 0 | The paper is a systematic review regarding the pharmacokinetics of rituximab, not bendamustine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:09 UTC</sub>
