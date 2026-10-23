<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;Pyrithione&quot;}]"></div>

# Pyrithione

- **generic name:** Pyrithione
- **ATC codes:** `D11AX12`
- **DrugBank:** [DB06815](https://go.drugbank.com/drugs/DB06815) · **PubChem:** not captured
- **groups:** approved

## About

Pyrithione (as zinc pyrithione) is used to treat seborrhoeic dermatitis and other scalp skin conditions, acting as a keratolytic agent. It is an approved dermatological medicine, widely used in over-the-counter anti-dandruff shampoos and skin preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q204602](https://www.wikidata.org/wiki/Q204602) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Yang_2019_spermatozoa_immobilization](drugs/drug_pyrithione/pd_Yang_2019_spermatozoa_immobilization.md) | spermatozoa immobilization biomarker turnover ← Zinc pyrithione | — | Yang M et al., Zinc pyrithione induces immobilization…, European journal of pharmac… (2019) | [10.1016/j.ejps.2019.104984](https://doi.org/10.1016/j.ejps.2019.104984) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:51 | 4:16 | 0/0/0 | 1/0/0 | 0/0/0 | 208,261/2,345 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 85 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diamond_2017.pdf` | Diamond GL et al., A physiologically based pharmacokinetic…, Journal of toxicology and e… (2017) | popPK | 10 | [10.1080/15287394.2016.1245123](https://doi.org/10.1080/15287394.2016.1245123) | [28085645](https://pubmed.ncbi.nlm.nih.gov/28085645) | The study develops a rat PBPK model for pyrithione but the specific quantitative parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Diamond_2021.pdf` | Diamond GL et al., A Physiological-Based Pharmacokinetic M…, Journal of toxicology and e… (2021) | popPK | 10 | [10.1080/15287394.2021.1912678](https://doi.org/10.1080/15287394.2021.1912678) | [33886436](https://pubmed.ncbi.nlm.nih.gov/33886436) | The paper describes a quantitative PBPK model for pyrithione in rats, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Bellas_2005.pdf` | Bellas J et al., Embryotoxicity of the antifouling bioci…, Marine pollution bulletin (2005) | pd | 5 | [10.1016/j.marpolbul.2005.06.010](https://doi.org/10.1016/j.marpolbul.2005.06.010) | [16023145](https://www.ncbi.nlm.nih.gov/pubmed/16023145) | metadata signals extractable PD data (EC50) |
| `Goka_1999.pdf` | Goka K, Embryotoxicity of zinc pyrithione, an a…, Environmental research (1999) | pd | 4 | [10.1006/enrs.1998.3944](https://doi.org/10.1006/enrs.1998.3944) | [10361029](https://www.ncbi.nlm.nih.gov/pubmed/10361029) | metadata signals extractable PD data (EC50) |
| `Na_2016.pdf` | Na YR et al., Pyrithione Zn selectively inhibits hypo…, Biochemical and biophysical… (2016) | pd | 4 | [10.1016/j.bbrc.2016.02.115](https://doi.org/10.1016/j.bbrc.2016.02.115) | [26940742](https://www.ncbi.nlm.nih.gov/pubmed/26940742) | metadata signals extractable PD data (IC50) |
| `Wang_2011.pdf` | Wang H et al., Toxicity evaluation of single and mixed…, Environmental toxicology an… (2011) | pd | 4 | [10.1002/etc.440](https://doi.org/10.1002/etc.440) | [21154844](https://www.ncbi.nlm.nih.gov/pubmed/21154844) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T07:50:48.272861+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellas_2005 | irrelevant | 0 | 0 | The study reports embryotoxicity and EC50 values in sea urchins and mussels, but does not provide any pharmacokinetic disposition parameters (CL, V, ka, etc.) for pyrithione. |
| popPK | Brueggemann_2014 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacodynamic investigation of KCNQ channels in rat airways, and pyrithione is used as a non-pharmacokinetic channel activator rather than a subject drug for PK profiling. |
| popPK | Carbajo_2015 | irrelevant | 0 | 0 | The study assesses aquatic toxicity and risk of preservatives, not pharmacokinetic disposition parameters. |
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of TD-6450 and NITD609 as anti-malarial agents; Zinc Pyrithione is identified as a screening hit for its in vitro effects on parasites, but no PK parameters are provided for it. |
| popPK | Diamond_2017 | relevant | 10 | 0 | The study develops a rat PBPK model for pyrithione but the specific quantitative parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Diamond_2021 | relevant | 10 | 2 | The paper describes a quantitative PBPK model for pyrithione in rats, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Figueroa_2021 | irrelevant | 0 | 0 | The study investigates the mechanistic pharmacology of zinc pyrithione on ion channels in cell lines (in vitro) and does not report any pharmacokinetic disposition parameters. |
| popPK | Goka_1999 | irrelevant | 0 | 0 | The study reports embryotoxicity and EC50 values in fish, which are toxicological endpoints rather than pharmacokinetic disposition parameters. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on measures to rejuvenate the immune system against coronavirus infection and does not contain pharmacokinetic data for pyrithione. |
| popPK | Kljun_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ruthenium complexes as enzyme inhibitors, not a pharmacokinetic study. |
| popPK | Knox_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium signaling in neurons, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Maraldo_2004 | irrelevant | 0 | 0 | The paper reports in vitro/ecological toxicity (EC50) of zinc pyrithione on phytoplankton, not pharmacokinetic parameters. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological characterization of constitutive androstane receptor (CAR) agonists, not pyrithione pharmacokinetics. |
| popPK | Sepcić_2006 | irrelevant | 0 | 0 | The paper is a review of biological activities of 3-alkylpyridinium compounds from sponges and does not involve pyrithione pharmacokinetics. |
| popPK | Silva-Mendonça_2026 | irrelevant | 0 | 0 | The paper focuses on the computational discovery of SARS-CoV-2 3CLpro inhibitors and does not study pyrithione or report any pharmacokinetic parameters. |
| popPK | Sánchez-Bayo_2006 | irrelevant | 0 | 0 | The study is an acute toxicity bioassay in zooplankton, not a pharmacokinetic study, and reports no disposition parameters for pyrithione. |
| popPK | Teotia_2024 | irrelevant | 0 | 0 | The paper focuses on the discovery of CDK1 inhibitors via virtual screening and molecular docking and does not report pharmacokinetic parameters for pyrithione. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The study is an ecotoxicology evaluation measuring EC50 values in sea urchin embryos and does not report pharmacokinetic parameters for pyrithione. |
| popPK | Williamson_2018 | irrelevant | 0 | 0 | This is a microbiology study on sulfate-reducing bacteria where zinc pyrithione is used only as a biocide inhibitor, not as a drug for pharmacokinetic evaluation. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | This is an in-vitro study of the mechanism of action (sperm immobilization) and does not report pharmacokinetic parameters for pyrithione. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
