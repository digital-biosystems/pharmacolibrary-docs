<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_reference&quot;,&quot;label&quot;:&quot;Lindemalm_2005_interindividual_variability&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_reference&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cladribine

- **generic name:** cladribine
- **ATC codes:** `L01BB04`, `L04AA40`
- **DrugBank:** [DB00242](https://go.drugbank.com/drugs/DB00242) · **PubChem:** [CID 20279](https://pubchem.ncbi.nlm.nih.gov/compound/20279)
- **molar mass:** 285.687 g/mol (C10H12ClN5O3) — DrugBank
- **groups:** approved, investigational

## About

Cladribine is a purine analogue medicine used to treat hairy cell leukemia and multiple sclerosis, and has also been used for other leukemias and lymphomas. It is approved and authorised in the European Union, where it is used for multiple sclerosis and hairy cell leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414030](https://www.wikidata.org/wiki/Q414030) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cladribine | parent | 285.687 | C10H12ClN5O3 | DrugBank | [20279](https://pubchem.ncbi.nlm.nih.gov/compound/20279) | Kearns_1994, Lindemalm_2005, Savic_2017, Sonderegger_2000 |
| 2-chloroadenine | metabolite | 169.572 | C5H4ClN5 | PubChem | [94904](https://pubchem.ncbi.nlm.nih.gov/compound/94904) | Savic_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:38 | 1:45 | 3/2/1 | 1/0/0 | 0/0/0 | 152,555/9,733 | einfracz / qwen3.8-27b | 13 | 3/10 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lindemalm_2005_interindividual_variability](drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 | Lindemalm S et al., Application of population pharmacokinet…, BMC pharmacology (2005) | [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lindemalm_2005_population_average](drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 | Lindemalm S et al., Application of population pharmacokinet…, BMC pharmacology (2005) | [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lu_2024_reference](drugs/drug_cladribine/Cladribine_Lu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Lu H et al., Asia-inclusive drug development leverag…, Clinical and translational… (2024) | [10.1111/cts.70050](https://doi.org/10.1111/cts.70050) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17, Q91 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Sonderegger_2000_reference](drugs/drug_cladribine/Cladribine_Sonderegger2000_reference.md) | — | 1-compartment (no model) | 4 | Sonderegger T et al., Pharmacokinetics of 2-chloro-2'-deoxyad…, Cancer chemotherapy and pha… (2000) | [10.1007/s002800000129](https://doi.org/10.1007/s002800000129) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kearns_1994_reference](drugs/drug_cladribine/Cladribine_Kearns1994_reference.md) | — | 1-compartment (no model) | 6 | Kearns CM et al., Pharmacokinetics of cladribine (2-chlor…, Cancer research (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Savic_2017_reference](drugs/drug_cladribine/Cladribine_Savic2017_reference.md) | — | parent + metabolite (no model) | 14 (+1 cov.) | Savic RM et al., Population Pharmacokinetics of Cladribi…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lindemalm_2003_EC50](drugs/drug_cladribine/pd_Lindemalm_2003_EC50.md) | cytotoxicity ← cladribine · direct Emax (saturable) effect | — | Lindemalm S et al., Comparison of cytotoxicity of 2-chloro-…, Haematologica (2003) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cladribine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADA (inhibitor), DCK (substrate), DGUOK (substrate), DNA (disruptor), DNA (other/unknown), PARP1 (inducer), PNP (inducer), POLA1 (inhibitor), POLE (inhibitor), POLE2 (inhibitor), POLE3 (inhibitor), POLE4 (inhibitor), RRM1 (inhibitor), RRM2 (inhibitor), RRM2B (inhibitor), SLC28A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 3  ·  needs_review 1  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kearns_1994.pdf` | Kearns CM et al., Pharmacokinetics of cladribine (2-chlor…, Cancer research (1994) | popPK | 10 | not captured | [7906999](https://pubmed.ncbi.nlm.nih.gov/7906999) | The paper explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for cladribine in pediatric patients, all values are present in the abstract. |
| `Sonderegger_2000.pdf` | Sonderegger T et al., Pharmacokinetics of 2-chloro-2'-deoxyad…, Cancer chemotherapy and pha… (2000) | popPK | 10 | [10.1007/s002800000129](https://doi.org/10.1007/s002800000129) | [10912576](https://pubmed.ncbi.nlm.nih.gov/10912576) | The study reports quantitative PK parameters (kelim, Vd) for cladribine in humans, with values explicitly stated in the abstract. |
| `Saven_1996.pdf` | Saven A et al., Pharmacokinetic study of oral and bolus…, Journal of clinical oncolog… (1996) | popPK | 8 | [10.1200/JCO.1996.14.3.978](https://doi.org/10.1200/JCO.1996.14.3.978) | [8622049](https://pubmed.ncbi.nlm.nih.gov/8622049) | The study describes a three-compartment model for cladribine PK in humans, but specific quantitative parameters (CL, V, t1/2) are not listed in the provided abstract text. |

<sub>queue written 2026-10-07T16:37:22.656065+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baltz_1993 | irrelevant | 2 | 0 | The paper is a review that mentions the two-compartment model but does not provide any quantitative PK parameter values (CL, V, etc.). |
| PGx | Benyahia_2025 | not_relevant | 0 | 0 | The paper is a clinical case report on CMV management and AML treatment; it does not investigate the impact of host gene variants on cladribine pharmacokinetics or pharmacodynamics. |
| PGx | Cao_2013 | not_relevant | 5 | 2 | The paper reports associations with intracellular levels of a cytarabine metabolite and clinical outcomes for patients receiving a combination regimen, but it does not report pharmacokinetic or pharmacodynamic parameters specifically for cladribine. |
| PGx | Cross_2020 | not_relevant | 0 | 0 | The text is a review of Hairy Cell Leukemia pathogenesis and treatment but does not report pharmacogenomic effects on the PK or PD of cladribine. |
| PGx | Fukuda_2012 | not_relevant | 2 | 0 | The text is a review discussing ABC transporters and mentions cladribine as an example, but it does not report specific gene variants or quantitative pharmacokinetic/pharmacodynamic effects. |
| popPK | Ganelin-Cohen_2026 | irrelevant | 0 | 0 | The paper is a clinical outcome study of cladribine in pediatric MS and reports no pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Gomez-Figueroa_2025 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study comparing disease-modifying therapy switches in multiple sclerosis and contains no pharmacokinetic data for cladribine. |
| popPK | Guchelaar_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model assessing apoptosis and necrosis, not a pharmacokinetic study reporting disposition parameters for cladribine. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study analyzes heterogeneous treatment effects on brain atrophy (BPF) in multiple sclerosis patients, where cladribine is merely one of several disease-modifying therapies categorized by efficacy, and no pharmacokinetic parameters are reported. |
| PGx | Laszlo_2010 | not_relevant | 2 | 1 | The study reports a correlation between hCNT1 expression levels and clinical response (CR vs non-CR), not a specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., enzyme activity, biomarker quantification) parameter. |
| PGx | Laszlo_2011 | not_relevant | 5 | 3 | The paper reports a correlation between hCNT1 expression and clinical outcome (CR status), which is a PD endpoint, but it does not report a pharmacokinetic parameter or a quantitative pharmacodynamic effect size (such as Emax or EC50) for the drug cladribine. |
| PGx | LeBlanc_2022 | not_relevant | 1 | 2 | The paper reports a gene variant (CCND1) predicting clinical response to a combination therapy containing cladribine, but does not report changes in specific PK or PD parameters (e.g., AUC, Cmax, Ki, IC50) of cladribine itself due to the variant. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The study reports in vitro cytotoxicity and cellular nucleotide levels, not pharmacokinetic disposition parameters. |
| PGx | Loganathan_2022 | not_relevant | 2 | 2 | The paper reports in silico molecular docking and structural modeling, not observed clinical pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lu_2024 | irrelevant | 2 | 0 | The paper is a review of drug development strategies; while it mentions cladribine's population PK/PD modeling, it does not report specific quantitative disposition parameters (CL, V, Q, ka) for cladribine in the text provided. |
| PGx | Lu_2025 | not_relevant | 0 | 0 | The paper investigates metabolic enzymes for capecitabine in hepatocellular carcinoma, not cladribine pharmacogenomics. |
| PGx | Lübke_2022 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of midostaurin and cladribine but does not investigate pharmacogenomic variants affecting the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a review of the mechanism of action and clinical activity of purine nucleoside analogs, but it does not report on specific gene variants or genotypes affecting the PK or PD parameters of cladribine. |
| PGx | Rossi_2005 | not_relevant | 0 | 0 | The paper discusses inherited bilirubin disorders and UGT1A1 variants, but does not mention cladribine or its pharmacokinetics/pharmacodynamics. |
| popPK | Saven_1996 | relevant | 8 | 3 | The study describes a three-compartment model for cladribine PK in humans, but specific quantitative parameters (CL, V, t1/2) are not listed in the provided abstract text. |
| PGx | Szturz_2014 | not_relevant | 0 | 0 | The paper focuses on anakinra therapy and mentions cladribine only as a failed prior treatment without reporting any pharmacogenomic effects on its PK/PD. |
| PGx | Szuber_2021 | not_relevant | 0 | 0 | The text is a management review for chronic neutrophilic leukemia and does not report any pharmacogenomic effects on cladribine PK or PD parameters. |
| PGx | Takenaka_2007 | not_relevant | 2 | 0 | The study is conducted in murine models (Abcg2/Mrp4 knockout mice) rather than humans, and does not report human pharmacogenomic effects. |
| PGx | Thiele_2020 | not_relevant | 0 | 0 | The study focuses on teriflunomide, not cladribine, although the introduction mentions ABCG2 also transports cladribine. |
| PGx | Turner_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes (response rates, survival) and a somatic tumor mutation (BRAF) associated with disease state, but does not assess the impact of any inherited or somatic pharmacogenomic variant on a pharmacokinetic or pharmacodynamic parameter of cladribine. |
| PGx | Zarzuelo_2021 | not_relevant | 4 | 3 | The paper is a review that mentions ADA polymorphisms for cladribine as a potential predictive marker but does not report specific pharmacokinetic or pharmacodynamic parameters or fitted effect sizes. |
| PGx | de_2008 | not_relevant | 0 | 0 | The paper investigates the role of the transporter ABCG2 in cellular resistance to cladribine using transfected cell lines, but does not report any human pharmacogenomic data (e.g., specific SNPs or genotypes) affecting PK or PD parameters in patients. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:37 UTC</sub>
