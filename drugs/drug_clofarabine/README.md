<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;clofarabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofarabine_Nijstad2021_reference&quot;,&quot;label&quot;:&quot;Nijstad_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/Clofarabine_Nijstad2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# clofarabine

- **generic name:** clofarabine
- **ATC codes:** `L01BB06`
- **DrugBank:** [DB00631](https://go.drugbank.com/drugs/DB00631)
- **groups:** approved, investigational

## About

**Description.** Clofarabine is a purine nucleoside antimetabolite that is being studied in the treatment of cancer. It is marketed as Clolar in the U.S. and Canada, or Evoltra in Europe, Australia, and New Zealand. Clofarabine is used in paediatrics to treat a type of leukaemia called relapsed or refractory acute lymphoblastic leukaemia (ALL), only after at least two other types of treatment have failed. It is not known if the drug extends life expectancy. Its potential use in acute myeloid leukaemia (AML) and juvenile myelomonocytic leukaemia (JMML) has been investigated.

**Indication.** For the treatment of pediatric patients 1 to 21 years old with relapsed or refractory acute lymphocytic (lymphoblastic) leukemia after at least two prior regimens. It is designated as an orphan drug by the FDA for this use.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 06:37 | 9:39 | 1/0/0 | 0/0/0 | 0/0/1 | 75,451/6,742 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Nijstad_2021_reference](drugs/drug_clofarabine/Clofarabine_Nijstad2021_reference.md) | Nijstad AL et al., Population pharmacokinetics of clofarab…, British journal of clinical… (2021) | [10.1111/bcp.14738](https://doi.org/10.1111/bcp.14738) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **DCK** | `Q322` · IC50 | metabolism | [Huang_2018](drugs/drug_clofarabine/pgx_Huang_2018_DCK_Q322.md) | Huang M et al., Clofarabine exerts antileukemic activit…, Cancer medicine (2018) | [10.1002/cam4.1323](https://doi.org/10.1002/cam4.1323) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clofarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Based on 24-hour urine collections in the pediatric studies, 49 - 60% of the dose…”</sub> | prose |

<sub>Actors without a tissue in the table: DCK (metabolism), DCK (substrate), DNA (other/unknown), POLA1 (inhibitor), RRM1 (inhibitor), RRM2 (inhibitor), RRM2B (inhibitor).</sub>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bonate_2004.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) | [15496649](https://pubmed.ncbi.nlm.nih.gov/15496649) | The paper reports a population PK model for clofarabine with explicit numeric values for clearance, volumes, and intercompartmental clearance in the text. |
| `Bonate_2011.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | popPK | 10 | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) | [20582417](https://pubmed.ncbi.nlm.nih.gov/20582417) | The text explicitly reports quantitative population PK parameters (CL, Vdss, half-lives) for clofarabine in both pediatric and adult patients. |
| `Wang_2019.pdf` | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | popPK | 10 | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) | [31002993](https://pubmed.ncbi.nlm.nih.gov/31002993) | The paper is a population PK study for clofarabine and explicitly reports numeric values for clearance, volumes, and intercompartmental clearance in the text. |
| `Patel_2015.pdf` | Patel YT et al., Preclinical examination of clofarabine…, Cancer chemotherapy and pha… (2015) | popPK | 8 | [10.1007/s00280-015-2713-z](https://doi.org/10.1007/s00280-015-2713-z) | [25724157](https://pubmed.ncbi.nlm.nih.gov/25724157) | The study reports quantitative PK parameters (unbound fraction, partition coefficient) for clofarabine in mice, but standard disposition parameters like clearance and volume are not explicitly listed in the provided text. |
| `Beach_2014.pdf` | Beach LB et al., Novel inhibitors of human immunodeficie…, The Journal of general viro… (2014) | pd | 4 | [10.1099/vir.0.069864-0](https://doi.org/10.1099/vir.0.069864-0) | [25103850](https://www.ncbi.nlm.nih.gov/pubmed/25103850) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-15T06:33:16.526673+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beach_2014 | irrelevant | 0 | 0 | The paper title indicates it is about HIV-2 inhibitors, not a pharmacokinetic study of clofarabine. |
| PD | Beach_2014 | not_relevant | 0 | 0 | The paper focuses on HIV-2 inhibitors and does not contain any pharmacodynamic or exposure-response data for clofarabine. |
| PGx | Ben_2021 | not_relevant | 0 | 0 | The paper is a review of conditioning regimens for ALL and mentions clofarabine only in the context of future optimization needs, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen and mentions clofarabine only as an occasional add-on, without analyzing any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Fukuda_2012 | not_relevant | 2 | 0 | The text is a review discussing the general role of ABC transporters in nucleoside drug resistance and mentions clofarabine as a substrate, but it does not report specific pharmacogenomic effects (gene variant -&gt; PK/PD change) for clofarabine. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sorafenib, with clofarabine serving only as a co-administered drug affecting sorafenib clearance. |
| PGx | Koh_2016 | not_relevant | 0 | 0 | The study evaluates PK and safety in a small cohort but does not report any association between specific gene variants/genotypes and pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lamba_2007 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects on DCK enzyme activity and ara-C metabolite levels, but does not report PK/PD parameters for clofarabine. |
| PGx | Lamba_2009 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for cytarabine and only mentions clofarabine as a related drug in the same metabolic pathway, without reporting specific PK/PD data for clofarabine. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mechanistic analysis, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Marrero_2024 | not_relevant | 0 | 0 | The paper reports associations between a pharmacogenomic score and clinical outcomes (survival), not changes in pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | Mondesir_2019 | not_relevant | 0 | 0 | The study reports clinical outcomes (response rate, survival) based on tumor genetics, not pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | Nagai_2011 | not_relevant | 2 | 5 | The paper investigates the interaction between dCK and ABCG2 expression levels (not specific genetic variants) on drug cytotoxicity and efflux in cell lines, rather than reporting a pharmacogenomic effect of a specific genotype on a PK/PD parameter in humans. |
| PGx | Parekh_2024 | not_relevant | 0 | 0 | The paper reports clinical response rates and correlations with BRAFV600E variant allele frequency, but does not report pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| popPK | Patel_2015 | relevant | 8 | 2 | The study reports quantitative PK parameters (unbound fraction, partition coefficient) for clofarabine in mice, but standard disposition parameters like clearance and volume are not explicitly listed in the provided text. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects on clofarabine PK/PD parameters. |
| PGx | Selukar_2025 | not_relevant | 0 | 0 | The paper reports survival outcomes (OS/EFS) and software visualization, not pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | de_2008 | not_relevant | 2 | 5 | The paper reports in vitro transporter function and cellular resistance mechanisms, not a pharmacogenomic effect on PK/PD parameters in humans. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_clofarabine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
