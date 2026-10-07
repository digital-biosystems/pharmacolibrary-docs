<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;nelarabine&quot;}]"></div>

# nelarabine

- **generic name:** nelarabine
- **ATC codes:** `L01BB07`
- **DrugBank:** [DB01280](https://go.drugbank.com/drugs/DB01280) · **PubChem:** [CID 3011155](https://pubchem.ncbi.nlm.nih.gov/compound/3011155)
- **molar mass:** 297.2673 g/mol (C11H15N5O5) — DrugBank
- **groups:** approved, investigational

## About

Nelarabine is a purine analogue anticancer drug used to treat precursor T-cell lymphoblastic leukemia and lymphoma. It is authorised in the European Union and is used mainly in specialist care for these rare T-cell blood cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1216264](https://www.wikidata.org/wiki/Q1216264) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:11 | 0:35 | 0/0/0 | 1/0/0 | 0/0/1 | 103,358/1,398 | einfracz / qwen3.8-27b | 6 | 1/9 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Eletskaya_2023_Cell_Survival](drugs/drug_nelarabine/pd_Eletskaya_2023_Cell_Survival.md) | U937 cell survival ← Nelarabine · inhibition effect | — | Eletskaya BZ et al., Enzymatic Synthesis of 2-Chloropurine A…, International journal of mo… (2023) | [10.3390/ijms24076223](https://doi.org/10.3390/ijms24076223) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **SAMHD1** | `Q322` · IC50 | metabolism | [Rothenburger_2020](drugs/drug_nelarabine/pgx_Rothenburger_2020_SAMHD1_Q322.md) | Rothenburger T et al., SAMHD1 is a key regulator of the lineag…, Communications biology (2020) | [10.1038/s42003-020-1052-8](https://doi.org/10.1038/s42003-020-1052-8) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nelarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADA (substrate), DCK (substrate), DGUOK (substrate), DNA (incorporation into and destabilization), LIG1 (inhibitor), POLA1 (inhibitor), PRIM1 (inhibitor), RRM1 (inhibitor), SAMHD1 (metabolism).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berg_2007.pdf` | Berg SL et al., Plasma and cerebrospinal fluid pharmaco…, Cancer chemotherapy and pha… (2007) | popPK | 10 | [10.1007/s00280-006-0328-0](https://doi.org/10.1007/s00280-006-0328-0) | [16953392](https://pubmed.ncbi.nlm.nih.gov/16953392) | The study reports quantitative PK parameters (AUC, t1/2, clearance) for nelarabine and its metabolite ara-G in nonhuman primates directly in the abstract. |
| `Kisor_2000.pdf` | Kisor DF et al., Pharmacokinetics of nelarabine and 9-be…, Journal of clinical oncolog… (2000) | popPK | 10 | [10.1200/JCO.2000.18.5.995](https://doi.org/10.1200/JCO.2000.18.5.995) | [10694549](https://pubmed.ncbi.nlm.nih.gov/10694549) | The abstract explicitly reports quantitative PK parameters including half-life and clearance values for both nelarabine and its metabolite ara-G. |
| `Rabie_2022.pdf` | Rabie AM et al., A Series of Adenosine Analogs as the Fi…, ChemistrySelect (2022) | pd | 4 | [10.1002/slct.202201912](https://doi.org/10.1002/slct.202201912) | [36718467](https://www.ncbi.nlm.nih.gov/pubmed/36718467) | metadata signals extractable PD data (EC50) |
| `Vaskó_2019.pdf` | Vaskó B et al., Inhibitor selectivity of CNTs and ENTs, Xenobiotica; the fate of fo… (2019) | pd | 4 | [10.1080/00498254.2018.1501832](https://doi.org/10.1080/00498254.2018.1501832) | [30022699](https://www.ncbi.nlm.nih.gov/pubmed/30022699) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T17:10:52.183368+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | The study focuses on the antiviral activity and molecular docking of nucleoside analogs against SARS-CoV-2 enzymes, containing no pharmacokinetic parameters for nelarabine. |
| popPK | Beesley_2007 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity (IC50) values, not pharmacokinetic disposition parameters. |
| popPK | Buie_2007 | irrelevant | 2 | 0 | The paper is a narrative review of pharmacology and clinical efficacy that does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for nelarabine. |
| PD | Buie_2007 | not_relevant | 2 | 0 | The paper is a narrative review that qualitatively describes dose-dependent accumulation and clinical response rates but does not provide numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Eletskaya_2023 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and antiproliferative activity study where nelarabine is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| popPK | Gandhi_2001 | irrelevant | 2 | 0 | The study focuses on cellular pharmacokinetics (intracellular ara-GTP levels) rather than reporting quantitative systemic disposition parameters (CL, V, Q) for nelarabine. |
| popPK | Gandhi_2006 | irrelevant | 0 | 0 | The paper is a review article summarizing general findings without providing original quantitative pharmacokinetic parameter values for nelarabine. |
| PD | Gandhi_2006 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions pharmacodynamic investigations and the importance of triphosphate levels but does not provide any numeric PD parameters, dose-response curves, or specific exposure-response data for nelarabine. |
| popPK | Ianevski_2026 | irrelevant | 0 | 0 | The paper is a multiomics and pharmacogenomic profiling study of T-cell leukemia cell lines that does not report any pharmacokinetic parameters for nelarabine. |
| PD | Ianevski_2026 | not_relevant | 2 | 0 | The paper reports cell line sensitivity scores (DSS) and correlations with gene expression, but does not provide numeric PK/PD parameters (e.g., EC50, Emax) or exposure-response curves for nelarabine. |
| popPK | Kisor_2005 | irrelevant | 4 | 3 | This is a review article that lacks a primary population pharmacokinetic model for nelarabine, reporting only general half-life and clearance values for its metabolite (ara-G). |
| popPK | Rabie_2022 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | Rabie_2022 | not_relevant | 0 | 0 | The paper focuses on adenosine analogs against SARS-CoV-2 and does not mention nelarabine or report any pharmacodynamic parameters for it. |
| popPK | Rabie_2023 | irrelevant | 0 | 0 | The study is an in-silico/in-vitro antiviral screening and docking study that includes nelarabine as a candidate compound but does not report pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Robak_2012 | not_relevant | 0 | 0 | This is a general review of purine nucleoside analogs' mechanisms and PK/PD, but it does not report any specific pharmacogenomic effects (gene variants influencing parameters) for nelarabine. |
| popPK | Saez-Ayala_2023 | irrelevant | 0 | 0 | The study focuses on deoxycytidine kinase inhibitors (masitinib/OR0642) for leukemia and does not report pharmacokinetic parameters for nelarabine. |
| PD | Saez-Ayala_2023 | not_relevant | 0 | 0 | The paper focuses on the development of a deoxycytidine kinase inhibitor (OR0642) for leukemia and does not mention nelarabine or report any pharmacodynamic parameters for it. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and toxicity of a new compound (YLS010), using nelarabine only as a positive control/comparator without reporting any pharmacokinetic parameters for it. |
| popPK | Tohidian_2025 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity and gene expression analysis of niosomal nelarabine, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Toksvang_2025 | irrelevant | 2 | 0 | The paper is a narrative review of therapeutic drug monitoring in ALL and does not report original quantitative pharmacokinetic parameter values for nelarabine. |
| PD | Toksvang_2025 | not_relevant | 2 | 0 | The text is a narrative review abstract that mentions nelarabine in the context of TDM but does not report specific numeric PD parameters or exposure-response relationships. |
| PGx | Toksvang_2025 | not_relevant | 3 | 5 | The text is a narrative review abstract covering multiple drugs and pharmacogenetic factors, but it does not report specific, fitted pharmacogenomic effects on PK or PD parameters for nelarabine in this extract. |
| popPK | Tsesmetzis_2018 | irrelevant | 1 | 0 | The paper is a review of resistance mechanisms and metabolism of nucleoside analogues that mentions nelarabine only in the context of its prodrug conversion and solubility, without reporting any quantitative pharmacokinetic parameters. |
| PD | Tsesmetzis_2018 | not_relevant | 1 | 0 | The paper is a review article discussing general mechanisms of resistance and pharmacodynamics for nucleoside analogues, including nelarabine, but does not report specific numeric PD parameters or exposure-response data. |
| popPK | Vaskó_2019 | irrelevant | 0 | 0 | The provided evidence consists only of a title regarding transporter selectivity, with no pharmacokinetic data or numeric parameters for nelarabine. |
| PD | Vaskó_2019 | not_relevant | 0 | 0 | The provided text is a title regarding transporter selectivity and contains no information about nelarabine, pharmacodynamics, or exposure-response relationships. |
| PGx | Wang_2022 | not_relevant | 3 | 0 | The paper investigates the mechanism of action of nelarabine involving RRM2 and dNTP imbalance but does not report a pharmacogenomic effect (gene variant/genotype) on specific PK or PD parameters of nelarabine. |
| PGx | Yoshimura_2024 | not_relevant | 2 | 1 | The paper reports *ex vivo* drug sensitivity and molecular subtype differences associated with age, but does not measure or report pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., Cmax, AUC, IC50 in patient plasma/urine) driven by specific gene variants. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts regarding G-CSF timing, cancer registry data, splicing mutations, DDAVP response, qualitative interviews, survival disparities, and dexrazoxane cardiac outcomes; it does not contain any pharmacodynamic or exposure-response analysis for nelarabine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
