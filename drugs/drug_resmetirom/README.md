<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;resmetirom&quot;}]"></div>

# resmetirom

- **generic name:** resmetirom
- **ATC codes:** `A05BA11`
- **DrugBank:** [DB12914](https://go.drugbank.com/drugs/DB12914) · **PubChem:** [CID 15981237](https://pubchem.ncbi.nlm.nih.gov/compound/15981237)
- **molar mass:** 435.22 g/mol (C17H12Cl2N6O4) — DrugBank
- **groups:** approved, investigational

## About

Resmetirom is a liver therapy drug used for non-alcoholic fatty liver disease and liver cirrhosis. It is approved and authorised in the European Union, with one authorised product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27288071](https://www.wikidata.org/wiki/Q27288071) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:59 | 4:33 | 0/0/0 | 0/0/0 | 0/0/2 | 158,796/4,409 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/17 | 16/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | **PNPLA3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Xia_2024](drugs/drug_resmetirom/pgx_Xia_2024_PNPLA3_Q100.md) | Xia M et al., Comparison of wild-type and high-risk P…, Frontiers in cell and devel… (2024) | [10.3389/fcell.2024.1423936](https://doi.org/10.3389/fcell.2024.1423936) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **PNPLA3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Xia_2024_2](drugs/drug_resmetirom/pgx_Xia_2024_2_PNPLA3_Q100.md) | Xia M et al., Comparison of Wild-Type and High-risk P…, bioRxiv : the preprint serv… (2024) | [10.1101/2024.04.22.590608](https://doi.org/10.1101/2024.04.22.590608) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=resmetirom) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A4` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PNPLA3 (target), THRB (partial agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hennan_2026.pdf` | Hennan JK et al., Pharmacokinetics, mass balance and meta…, Xenobiotica; the fate of fo… (2026) | popPK | 8 | [10.1080/00498254.2026.2687126](https://doi.org/10.1080/00498254.2026.2687126) | [42265836](https://pubmed.ncbi.nlm.nih.gov/42265836) | The paper describes a mass balance and PK study for resmetirom, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided text, which only lists qualitative findings and mass balance percentages. |
| `Liang_2026.pdf` | Liang S et al., Determination and pharmacokinetic study…, Journal of pharmaceutical a… (2026) | popPK | 8 | [10.1016/j.jpba.2025.117249](https://doi.org/10.1016/j.jpba.2025.117249) | [41232432](https://pubmed.ncbi.nlm.nih.gov/41232432) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for resmetirom in beagle dogs, but lacks compartmental model parameters (CL, V, Q) and full population PK data. |

<sub>queue written 2026-10-04T15:57:31.159524+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2026 | irrelevant | 0 | 0 | The study investigates the renoprotective mechanisms and molecular docking of resmetirom in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Alkhouri_2026 | irrelevant | 0 | 0 | The paper is a diagnostic study for liver fibrosis prediction and does not report pharmacokinetic parameters for resmetirom. |
| popPK | Babaalizadeh_2026 | irrelevant | 0 | 0 | The study focuses on quercetin-chitosan nanoparticles in rats, and resmetirom is only mentioned in the introduction as a background therapeutic agent without any pharmacokinetic data. |
| PGx | Baptista_2026 | not_relevant | 0 | 0 | The text describes the structural and functional mechanisms of cytochrome P450 reductase (CPR) and its interaction with CYPs, but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of resmetirom. |
| popPK | Bhushan_2025 | irrelevant | 2 | 0 | The paper is a review article summarizing the literature on resmetirom, and the provided evidence contains no original quantitative pharmacokinetic parameter values (CL, V, etc.). |
| popPK | Caddeo_2023 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of TG68 and Resmetirom in a rat model of hepatocarcinogenesis, reporting metabolic and histological outcomes rather than quantitative pharmacokinetic parameters. |
| PGx | Crespo_2026 | not_relevant | 0 | 0 | The paper is a conceptual review proposing a biological framework for MASLD and does not report specific pharmacokinetic or pharmacodynamic data for resmetirom. |
| popPK | Du_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of byakangelicin in MASH, and resmetirom is only listed as an abbreviation without any pharmacokinetic data or quantitative disposition parameters. |
| popPK | Foster_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of platelet production (thrombopoiesis) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for resmetirom. |
| popPK | Guirguis_2025 | irrelevant | 2 | 0 | This is a narrative review of clinical efficacy and general pharmacology that does not report specific quantitative population pharmacokinetic parameters (CL, V, Q, ka) for resmetirom. |
| PGx | Ha_2026 | not_relevant | 0 | 0 | The paper is a general review of MASLD/HCC biomarkers and therapies that mentions resmetirom's approval but does not report specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | He_2026 | not_relevant | 0 | 0 | The paper evaluates the therapeutic efficacy of resmetirom in a liver-on-a-chip model but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Hennan_2026 | relevant | 8 | 2 | The paper describes a mass balance and PK study for resmetirom, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided text, which only lists qualitative findings and mass balance percentages. |
| PGx | Hennan_2026 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and metabolism in healthy subjects and animals, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hönes_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on transporter selectivity and receptor efficacy, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a diagnostic study on liver stiffness (MRE) for identifying MASH patients eligible for resmetirom therapy, and does not report any pharmacokinetic parameters for resmetirom. |
| popPK | Liang_2025 | irrelevant | 1 | 0 | The paper focuses on the discovery of a new compound (12) with resmetirom serving only as a comparator, and no quantitative PK parameters for resmetirom are provided. |
| PD | Liang_2025 | not_relevant | 1 | 0 | The paper reports in vitro EC50 for a new compound (12) and qualitative efficacy comparisons, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for resmetirom. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of liver-on-a-chip models and does not report pharmacokinetic parameters for resmetirom. |
| popPK | Luong_2020 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (gene transcription and receptor binding) and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for resmetirom. |
| popPK | Malakar_2026 | irrelevant | 0 | 0 | The paper is a narrative review of nor-ursodeoxycholic acid, and resmetirom is only mentioned as a comparator therapy without any pharmacokinetic data. |
| PD | Malakar_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nor-ursodeoxycholic acid and only mentions resmetirom in passing without providing any pharmacodynamic data or parameters. |
| popPK | Parveen_2026 | irrelevant | 0 | 0 | The paper is a narrative review of thyroid-liver interactions and mentions resmetirom only as a therapeutic agent for MASH without reporting any pharmacokinetic parameters. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The study is a developmental toxicity assessment in zebrafish larvae and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The paper is a review of nanomedicines for MASLD and mentions resmetirom only as a recently approved drug, without providing any pharmacokinetic parameters or data for it. |
| popPK | Stefanakis_2025 | irrelevant | 0 | 0 | The paper focuses on diagnostic machine learning models for MASH detection and does not report any pharmacokinetic parameters for resmetirom. |
| popPK | Stefanakis_2026 | irrelevant | 0 | 0 | The paper focuses on diagnostic machine learning models for MASH and contains no pharmacokinetic data for resmetirom. |
| popPK | Suganami_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on cell death and inflammation in MASH, mentioning resmetirom only as an approved therapy without reporting any pharmacokinetic parameters. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The study focuses on the efficacy of pioglitazone in MASH patients and does not report pharmacokinetic parameters for resmetirom. |
| PD | Tran_2026 | not_relevant | 0 | 0 | The paper reports a model-based meta-analysis for pioglitazone, not resmetirom. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics and molecular docking study of NAFLD biomarkers; resmetirom is only used in in-silico docking simulations, and no pharmacokinetic parameters are reported. |
| popPK | Wyszynski_2026 | irrelevant | 0 | 0 | This is a narrative review of MASLD in pregnancy that mentions resmetirom only as a recently approved agent for non-pregnant populations, without reporting any pharmacokinetic parameters. |
| PD | Wyszynski_2026 | not_relevant | 1 | 0 | The paper is a narrative review of MASLD in pregnancy that mentions resmetirom only as a recently approved agent lacking pregnancy safety data, without reporting any specific pharmacodynamic or exposure-response analysis for the drug. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper focuses on physicochemical characterization and quantitative analysis of crystal forms using spectroscopy, not pharmacokinetic parameters. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry methods (PXRD, FTIR, Raman) for quantifying crystal forms of resmetirom, not on pharmacogenomics or genetic variants affecting PK/PD. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study focuses on cocrystal engineering and solubility enhancement (physicochemical properties) rather than pharmacokinetic disposition parameters. |
| popPK | Yu_2026 | irrelevant | 1 | 0 | The paper is a review of drug-drug interactions for 2024 FDA approvals where resmetirom is mentioned only as a precipitant (inhibitor) of CYP enzymes and transporters, not as the subject of a pharmacokinetic parameter estimation study. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) for 2024 FDA approvals and mentions resmetirom as a CYP/transporter inhibitor, but it does not report pharmacogenomic effects (gene variants) on resmetirom's PK or PD parameters. |
| popPK | Zacharia_2025 | irrelevant | 0 | 0 | The paper is a narrative review of semaglutide pharmacokinetics and clinical use in MASH, with no quantitative PK parameters reported for resmetirom. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a narrative review of a traditional Chinese medicine (Ganzaoning) and only mentions resmetirom as an approved comparator therapy without providing any pharmacokinetic data for it. |
| PD | Zhao_2026 | not_relevant | 0 | 0 | The paper is a narrative review of Ganzaoning Granule and only mentions resmetirom in the context of current treatment landscape without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for resmetirom. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
