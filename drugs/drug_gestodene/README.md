<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;Gestodene&quot;}]"></div>

# Gestodene

- **generic name:** Gestodene
- **ATC codes:** `G03AA10`, `G03AB06`
- **DrugBank:** [DB06730](https://go.drugbank.com/drugs/DB06730) · **PubChem:** [CID 3033968](https://pubchem.ncbi.nlm.nih.gov/compound/3033968)
- **molar mass:** 310.4299 g/mol (C21H26O2) — DrugBank
- **groups:** investigational

## About

Gestodene is a synthetic progestin used in combination hormonal contraceptives for preventing pregnancy. It is listed as investigational in DrugBank and has no EMA authorisation, so its current availability appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408289](https://www.wikidata.org/wiki/Q408289) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:23 | 4:53 | 0/0/0 | 0/1/0 | 0/0/0 | 102,574/2,905 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Martin_2025_RER](drugs/drug_gestodene/pd_Martin_2025_RER.md) | respiratory exchange ratio (RER) · inhibition effect | — | Martin D et al., Effect of oral contraceptive consumptio…, European journal of applied… (2025) | [10.1007/s00421-025-05733-1](https://doi.org/10.1007/s00421-025-05733-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gestodene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PGR (activator), PGR (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 147 matched, 67 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karjalainen_2008.pdf` | Karjalainen MJ et al., In vitro inhibition of CYP1A2 by model…, Basic & clinical pharmacolo… (2008) | pgx | 7 | [10.1111/j.1742-7843.2008.00252.x](https://doi.org/10.1111/j.1742-7843.2008.00252.x) | [18816299](https://www.ncbi.nlm.nih.gov/pubmed/18816299) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Winkler_2015.pdf` | Winkler J et al., Pharmacokinetic drug-drug interaction b…, European journal of drug me… (2015) | pgx | 7 | [10.1007/s13318-014-0215-8](https://doi.org/10.1007/s13318-014-0215-8) | [24997757](https://www.ncbi.nlm.nih.gov/pubmed/24997757) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Laine_2003.pdf` | Laine K et al., A screening study on the liability of e…, Pharmacology & toxicology (2003) | pgx | 5 | not captured | [12899669](https://www.ncbi.nlm.nih.gov/pubmed/12899669) | metadata signals extractable PGX data (CYP2C9) |
| `Mazzarino_2018.pdf` | Mazzarino M et al., A further insight into the metabolic pr…, Drug testing and analysis (2018) | pgx | 5 | [10.1002/dta.2538](https://doi.org/10.1002/dta.2538) | [30395700](https://www.ncbi.nlm.nih.gov/pubmed/30395700) | metadata signals extractable PGX data (CYP3A4) |
| `Wang_1996.pdf` | Wang RW et al., Identification of human liver cytochrom…, Drug metabolism and disposi… (1996) | pgx | 5 | not captured | [8818577](https://www.ncbi.nlm.nih.gov/pubmed/8818577) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-10-07T08:22:49.248941+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Amet_1995 | not_relevant | 0 | 0 | The paper validates a CYP2E1 substrate probe and uses gestodene only as a negative control inhibitor for CYP3A4, without reporting any pharmacogenomic effects on gestodene's PK or PD. |
| PGx | Berthou_1994 | not_relevant | 0 | 0 | The paper focuses on toremifene metabolism; gestodene is only mentioned as a chemical inhibitor of CYP3A4, not as the drug subject to pharmacogenomic analysis. |
| PGx | Caraco_1996 | not_relevant | 0 | 0 | The study investigates codeine metabolism and uses gestodene only as a CYP3A4 inhibitor; it does not report pharmacogenomic effects on the PK or PD of gestodene itself. |
| popPK | Cartwright_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic pharmacology investigation measuring receptor binding and transcriptional activity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study models breakthrough bleeding (pharmacodynamics) and does not report pharmacokinetic parameters for gestodene. |
| popPK | Farmer_1998 | irrelevant | 0 | 0 | The paper is an epidemiological review of venous thromboembolic risk associated with oral contraceptives, not a pharmacokinetic study. |
| popPK | Fotherby_1990 | relevant | 4 | 2 | The paper discusses pharmacokinetics and mentions serum concentration ratios and unbound levels for gestodene, but lacks specific compartmental parameter values like CL, V, or ka. |
| popPK | Fruzzetti_1994 | irrelevant | 0 | 0 | The study focuses on haemostatic and coagulation profiles in women taking oral contraceptives, containing no pharmacokinetic data for gestodene. |
| PGx | Fröhlich_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic interaction between oral contraceptives (containing gestodene) and saquinavir, not a pharmacogenomic effect on gestodene itself. |
| PGx | Gentile_1996 | not_relevant | 0 | 0 | The paper studies the metabolism of dexamethasone and mentions gestodene only as a non-selective inhibitor in an in vitro assay, but does not report pharmacogenomic effects on gestodene's PK or PD parameters. |
| popPK | Giribela_2007 | irrelevant | 0 | 0 | The study focuses on venous endothelial function and does not report pharmacokinetic parameters (CL, V, half-life, etc.) for gestodene. |
| PGx | Glue_1997 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions of felbamate with gestodene but does not report any pharmacogenomic effects (gene variants) on gestodene's PK or PD. |
| PGx | Gorski_1994 | not_relevant | 0 | 0 | The study characterizes the metabolism of dextromethorphan and merely mentions gestodene as an inhibitor in a single experimental condition; it does not report pharmacogenomic effects on gestodene's PK or PD parameters. |
| PGx | Huskey_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of finasteride, using gestodene only as a CYP3A inhibitor to identify isozymes; it does not report pharmacogenomic effects of gestodene. |
| PGx | Jang_1996 | not_relevant | 0 | 0 | The paper focuses on the metabolism of mifepristone and identifies CYP3A4 as the responsible enzyme; gestodene is mentioned only as an inhibitor in a mechanistic assay, not as the subject of a pharmacogenomic study. |
| PGx | Jang_1997 | not_relevant | 0 | 0 | The paper discusses the metabolism of lilopristone and onapristone, not gestodene; gestodene is used only as a non-specific CYP3A4 inhibitor in the assay. |
| PGx | Jellinck_1993_2 | not_relevant | 0 | 0 | The study investigates the metabolism of 4-androstenedione and mentions gestodene only as a reference compound for enzyme induction; it does not report pharmacogenomic effects on gestodene PK/PD. |
| popPK | Jensen_2023 | irrelevant | 1 | 0 | This is an analytical method validation paper for measuring progestins (including gestodene) in serum for compliance monitoring, reporting no pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of gestodene on wound healing and PAR1 signaling in cell lines and mice, reporting no pharmacokinetic parameters (CL, V, ka, t1/2). |
| PGx | Karjalainen_2008 | not_relevant | 0 | 0 | The paper discusses general CYP1A2 inhibition by model inhibitors and sex steroids, but does not mention gestodene or report pharmacogenomic effects. |
| PGx | Laine_2003 | not_relevant | 0 | 0 | The paper studies CYP inhibition by various sex steroids and does not involve gestodene or any pharmacogenomic effects on PK/PD. |
| popPK | Louw-du_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on receptor binding affinities and potencies, not pharmacokinetic parameters like clearance or volume. |
| popPK | Louw-du_2020 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of transcriptional activities and receptor binding affinities, not a pharmacokinetic study. |
| popPK | Martin_2025 | irrelevant | 0 | 0 | The study investigates the acute effects of oral contraceptives on exercise and cognition, not the pharmacokinetics of gestodene, and contains no PK parameters for this drug. |
| PGx | Mazzarino_2018 | not_relevant | 0 | 0 | The paper discusses the metabolic profile of SR9009, not gestodene. |
| PGx | Nappi_2003 | not_relevant | 0 | 0 | The study examines the clinical effects of gestodene on bone density in a general population without stratifying by genetic variants. |
| PGx | Salphati_1999 | not_relevant | 0 | 0 | The paper focuses on digoxin metabolism, not gestodene's pharmacokinetic or pharmacodynamic profile. |
| popPK | Svigruha_2021 | irrelevant | 0 | 0 | The study investigates the ecotoxicological and behavioral effects of progestogens on pond snails, not the pharmacokinetics of gestodene. |
| PGx | Tateishi_1996 | not_relevant | 0 | 0 | The paper focuses on the metabolism of fentanyl and sufentanil, mentioning gestodene only as an inhibitor, not as the drug subject to pharmacogenomic analysis. |
| PGx | Tateishi_1997 | not_relevant | 0 | 0 | The paper focuses on colchicine and does not report pharmacokinetic or pharmacodynamic data for gestodene. |
| PGx | Wang_1996 | not_relevant | 0 | 0 | The paper focuses on the metabolism of cyclobenzaprine, not gestodene, and gestodene is only mentioned as an inhibitor for CYP3A4. |
| PGx | Ward_1993 | not_relevant | 0 | 0 | The study investigates gestodene metabolism in human liver microsomes and cytosol using pooled samples and enzyme inhibitors (like ketoconazole), but it does not report any genotype-specific differences or pharmacogenomic effects on PK/PD parameters. |
| PGx | Winkler_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with CYP3A4 inhibitors, not the effect of specific genetic variants or genotypes on the pharmacokinetics of gestodene. |
| PGx | Yamazaki_1996 | not_relevant | 0 | 0 | The provided text consists only of software metadata and identifiers; it does not contain the content of a scientific paper regarding pharmacogenomics or gestodene. |
| PGx | Zhou_2004 | not_relevant | 0 | 0 | The paper is a review of mechanism-based CYP3A4 inhibitors and mentions gestodene only as an example of such an inhibitor, without reporting any pharmacogenomic effects or quantitative PK/PD data for it. |
| PGx | Zhou_2005 | not_relevant | 1 | 0 | The paper reviews mechanism-based CYP3A4 inhibition by drugs including gestodene, but does not report any pharmacogenomic associations or genetic variant effects on PK/PD parameters. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The paper is a general review of CYP3A4 pharmacology and lists gestodene as an inhibitor, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
