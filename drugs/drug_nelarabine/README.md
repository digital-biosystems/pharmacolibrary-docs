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
| 2026-10-14 21:42 | 0:41 | 0/0/0 | 2/0/0 | 0/0/1 | 103,358/2,040 | einfracz / qwen3.8-27b | 6 | 1/9 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abdalla_2023_Inhibition_of_SARS_CoV_2_Replication](drugs/drug_nelarabine/pd_Abdalla_2023_Inhibition_of_SARS_CoV_2_Replication.md) | Inhibition of SARS-CoV-2 Replication ← nelarabine · direct sigmoid Emax (Hill) effect | — | Abdalla M et al., Dual computational and biological asses…, Computational biology and c… (2023) | [10.1016/j.compbiolchem.2022.107768](https://doi.org/10.1016/j.compbiolchem.2022.107768) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abdalla_2023_RdRp](drugs/drug_nelarabine/pd_Abdalla_2023_RdRp.md) | Inhibition of SARS-CoV-2 RdRp ← nelarabine · direct sigmoid Emax (Hill) effect | — | Abdalla M et al., Dual computational and biological asses…, Computational biology and c… (2023) | [10.1016/j.compbiolchem.2022.107768](https://doi.org/10.1016/j.compbiolchem.2022.107768) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Eletskaya_2023_U937_Cell_Survival](drugs/drug_nelarabine/pd_Eletskaya_2023_U937_Cell_Survival.md) | U937 cell survival ← Nelarabine · direct sigmoid Emax (Hill) effect | — | Eletskaya BZ et al., Enzymatic Synthesis of 2-Chloropurine A…, International journal of mo… (2023) | [10.3390/ijms24076223](https://doi.org/10.3390/ijms24076223) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **SAMHD1** | `Q322` · IC50 | metabolism | [Rothenburger_2020](drugs/drug_nelarabine/pgx_Rothenburger_2020_SAMHD1_Q322.md) | Rothenburger T et al., SAMHD1 is a key regulator of the lineag…, Communications biology (2020) | [10.1038/s42003-020-1052-8](https://doi.org/10.1038/s42003-020-1052-8) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nelarabine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADA (substrate), DCK (substrate), DGUOK (substrate), DNA (incorporation into and destabilization), LIG1 (inhibitor), POLA1 (inhibitor), PRIM1 (inhibitor), RRM1 (inhibitor), SAMHD1 (metabolism).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berg_2007.pdf` | Berg SL et al., Plasma and cerebrospinal fluid pharmaco…, Cancer chemotherapy and pha… (2007) | popPK | 10 | [10.1007/s00280-006-0328-0](https://doi.org/10.1007/s00280-006-0328-0) | [16953392](https://pubmed.ncbi.nlm.nih.gov/16953392) | The study reports quantitative pharmacokinetic parameters (AUC, half-life, clearance) for nelarabine and its active metabolite ara-G in nonhuman primates, with all values explicitly present in the text. |
| `Kisor_2000.pdf` | Kisor DF et al., Pharmacokinetics of nelarabine and 9-be…, Journal of clinical oncolog… (2000) | popPK | 10 | [10.1200/JCO.2000.18.5.995](https://doi.org/10.1200/JCO.2000.18.5.995) | [10694549](https://pubmed.ncbi.nlm.nih.gov/10694549) | The paper reports quantitative pharmacokinetic parameters for nelarabine and its metabolite ara-G, including specific numeric values for clearance, volume of distribution, and half-life directly in the abstract/results text. |
| `Rabie_2022.pdf` | Rabie AM et al., A Series of Adenosine Analogs as the Fi…, ChemistrySelect (2022) | pd | 4 | [10.1002/slct.202201912](https://doi.org/10.1002/slct.202201912) | [36718467](https://www.ncbi.nlm.nih.gov/pubmed/36718467) | metadata signals extractable PD data (EC50) |
| `Vaskó_2019.pdf` | Vaskó B et al., Inhibitor selectivity of CNTs and ENTs, Xenobiotica; the fate of fo… (2019) | pd | 4 | [10.1080/00498254.2018.1501832](https://doi.org/10.1080/00498254.2018.1501832) | [30022699](https://www.ncbi.nlm.nih.gov/pubmed/30022699) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T21:42:22.273661+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | The paper is a computational and in-vitro antiviral study using nelarabine as a candidate inhibitor against SARS-CoV-2, and it does not report any pharmacokinetic parameters for nelarabine. |
| popPK | Beesley_2007 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity (IC50) values, not pharmacokinetic disposition parameters. |
| popPK | Buie_2007 | irrelevant | 2 | 0 | The paper is a narrative review of pharmacology and clinical efficacy that does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for nelarabine. |
| PD | Buie_2007 | not_relevant | 2 | 0 | The paper is a narrative review that qualitatively describes dose-dependent accumulation and clinical response rates but does not provide numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Eletskaya_2023 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and antiproliferative activity study where nelarabine is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| popPK | Gandhi_2001 | irrelevant | 2 | 0 | The study focuses on cellular pharmacokinetics (intracellular ara-GTP levels) rather than reporting quantitative systemic disposition parameters (CL, V, Q) for nelarabine. |
| popPK | Gandhi_2006 | irrelevant | 0 | 0 | The paper is a review article summarizing general findings without providing original quantitative pharmacokinetic parameter values for nelarabine. |
| PD | Gandhi_2006 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions pharmacodynamic investigations and the importance of triphosphate levels but does not provide any numeric PD parameters, dose-response curves, or specific exposure-response data for nelarabine. |
| popPK | Ianevski_2026 | irrelevant | 0 | 0 | The paper is a multiomics profiling and drug screening study on T-cell leukemia cell lines and does not report pharmacokinetic parameters for nelarabine. |
| PD | Ianevski_2026 | not_relevant | 2 | 0 | The paper reports cell line sensitivity scores (DSS) and correlations with gene expression, but does not provide numeric PK/PD parameters (e.g., EC50, Emax) or exposure-response curves for nelarabine. |
| popPK | Kisor_2005 | irrelevant | 4 | 2 | This is a narrative review that reports only clearance values for the metabolite ara-G, not the parent drug nelarabine, and lacks a population PK model for nelarabine itself. |
| popPK | Rabie_2022 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | Rabie_2022 | not_relevant | 0 | 0 | The paper focuses on adenosine analogs against SARS-CoV-2 and does not mention nelarabine or report any pharmacodynamic parameters for it. |
| popPK | Rabie_2023 | irrelevant | 0 | 0 | The study is a computational and in-vitro investigation of nucleoside analogs as anti-Coronaviral drugs, and nelarabine is screened only for binding affinity and antiviral activity, not for pharmacokinetic parameters. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a review on the mechanisms and clinical activity of purine nucleoside analogs; it does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Saez-Ayala_2023 | irrelevant | 0 | 0 | The paper describes the drug design of a deoxycytidine kinase inhibitor (OR0642) for leukemia and does not report pharmacokinetic parameters for nelarabine. |
| PD | Saez-Ayala_2023 | not_relevant | 0 | 0 | The paper focuses on the development of a deoxycytidine kinase inhibitor (OR0642) for leukemia and does not mention nelarabine or report any pharmacodynamic parameters for it. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and toxicity of a new compound (YLS010), using nelarabine only as a positive control/comparator without reporting any pharmacokinetic parameters for it. |
| popPK | Tohidian_2025 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity and gene expression analysis of niosomal nelarabine, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Toksvang_2025 | irrelevant | 2 | 0 | The paper is a narrative review of therapeutic drug monitoring in ALL and does not report original quantitative pharmacokinetic parameter values for nelarabine. |
| PD | Toksvang_2025 | not_relevant | 2 | 0 | The text is a narrative review abstract that mentions nelarabine in the context of TDM but does not report specific numeric PD parameters or exposure-response relationships. |
| PGx | Toksvang_2025 | not_relevant | 0 | 0 | This is a narrative review that discusses various drugs, but no specific pharmacogenomic effects on PK/PD for nelarabine are reported in the text provided. |
| popPK | Tsesmetzis_2018 | irrelevant | 1 | 0 | The paper is a review of resistance mechanisms and metabolism of nucleoside analogues that mentions nelarabine only in the context of its prodrug conversion and solubility, without reporting any quantitative pharmacokinetic parameters. |
| PD | Tsesmetzis_2018 | not_relevant | 1 | 0 | The paper is a review article discussing general mechanisms of resistance and pharmacodynamics for nucleoside analogues, including nelarabine, but does not report specific numeric PD parameters or exposure-response data. |
| popPK | Vaskó_2019 | irrelevant | 0 | 0 | The provided evidence consists only of a title regarding transporter selectivity, with no pharmacokinetic data or numeric parameters for nelarabine. |
| PD | Vaskó_2019 | not_relevant | 0 | 0 | The provided text is a title regarding transporter selectivity and contains no information about nelarabine, pharmacodynamics, or exposure-response relationships. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of nelarabine (RNR hyperactivation/dNTP imbalance) and synthetic lethality with DUSP6, but does not report how specific patient gene variants alter pharmacokinetic parameters (AUC, Cmax, etc.) or standard pharmacodynamic endpoints in a pharmacogenomic context. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts regarding G-CSF timing, cancer registry data, splicing mutations, DDAVP response, qualitative interviews, survival disparities, and dexrazoxane cardiac outcomes; it does not contain any pharmacodynamic or exposure-response analysis for nelarabine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
