<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;Pyrithione&quot;}]"></div>

# Pyrithione

- **generic name:** Pyrithione
- **ATC codes:** `D11AX12`
- **DrugBank:** [DB06815](https://go.drugbank.com/drugs/DB06815) · **PubChem:** not captured
- **groups:** approved

## About

Pyrithione (as zinc pyrithione) is used to treat seborrhoeic dermatitis and other scalp skin conditions, acting as a keratolytic agent. It is an approved dermatological medicine, widely used in over-the-counter anti-dandruff shampoos and skin preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q204602](https://www.wikidata.org/wiki/Q204602) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:51 | 4:16 | 0/0/0 | 1/0/0 | 0/0/0 | 208,261/2,345 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Yang_2019_spermatozoa_immobilization](drugs/drug_pyrithione/pd_Yang_2019_spermatozoa_immobilization.md) | spermatozoa immobilization biomarker turnover ← Zinc pyrithione | — | Yang M et al., Zinc pyrithione induces immobilization…, European journal of pharmac… (2019) | [10.1016/j.ejps.2019.104984](https://doi.org/10.1016/j.ejps.2019.104984) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pyrithione) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KCNQ1 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 85 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
