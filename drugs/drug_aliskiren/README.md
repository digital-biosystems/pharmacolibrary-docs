<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09D&quot;,&quot;href&quot;:&quot;atc/C09D.md&quot;},{&quot;label&quot;:&quot;aliskiren&quot;}]"></div>

# aliskiren

- **generic name:** aliskiren
- **ATC codes:** `C09DX02`, `C09XA02`, `C09XA52`, `C09XA53`
- **DrugBank:** [DB09026](https://go.drugbank.com/drugs/DB09026) · **PubChem:** [CID 5493444](https://pubchem.ncbi.nlm.nih.gov/compound/5493444)
- **molar mass:** 551.7583 g/mol (C30H53N3O6) — DrugBank
- **groups:** approved, investigational

## About

Aliskiren is a direct renin inhibitor used to treat high blood pressure (arterial hypertension). It is authorised in the European Union for hypertension, though several EU products have been withdrawn, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414904](https://www.wikidata.org/wiki/Q414904) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:51 | 1:54 | 0/0/0 | 0/0/0 | 0/0/0 | 18,074/1,004 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aliskiren) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: REN (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hong_2008.pdf` | Hong Y et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical pharmacology and t… (2008) | popPK | 9 | [10.1038/sj.clpt.6100495](https://doi.org/10.1038/sj.clpt.6100495) | [18288088](https://pubmed.ncbi.nlm.nih.gov/18288088) | The study reports a two-compartment PK model for aliskiren in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Suominen_2025.pdf` | Suominen L et al., In vitro identification of decreased fu…, European journal of pharmac… (2025) | pgx | 8 | [10.1016/j.ejps.2025.107078](https://doi.org/10.1016/j.ejps.2025.107078) | [40113104](https://www.ncbi.nlm.nih.gov/pubmed/40113104) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Buczko_2008.pdf` | Buczko W et al., Pharmacokinetics and pharmacodynamics o…, Pharmacological reports : PR (2008) | pgx | 7 | not captured | [19066408](https://www.ncbi.nlm.nih.gov/pubmed/19066408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Rebello_2011.pdf` | Rebello S et al., Effect of verapamil on the pharmacokine…, Journal of clinical pharmac… (2011) | pgx | 7 | [10.1177/0091270010365717](https://doi.org/10.1177/0091270010365717) | [20413453](https://www.ncbi.nlm.nih.gov/pubmed/20413453) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Tapaninen_2010.pdf` | Tapaninen T et al., Rifampicin reduces the plasma concentra…, European journal of clinica… (2010) | pgx | 7 | [10.1007/s00228-010-0796-3](https://doi.org/10.1007/s00228-010-0796-3) | [20179914](https://www.ncbi.nlm.nih.gov/pubmed/20179914) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tapaninen_2011.pdf` | Tapaninen T et al., Itraconazole, a P-glycoprotein and CYP3…, Journal of clinical pharmac… (2011) | pgx | 7 | [10.1177/0091270010365885](https://doi.org/10.1177/0091270010365885) | [20400651](https://www.ncbi.nlm.nih.gov/pubmed/20400651) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tsukimoto_2015.pdf` | Tsukimoto M et al., Effects of the inhibition of intestinal…, Biopharmaceutics & drug dis… (2015) | pgx | 7 | [10.1002/bdd.1920](https://doi.org/10.1002/bdd.1920) | [25264342](https://www.ncbi.nlm.nih.gov/pubmed/25264342) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Vaidyanathan_2008.pdf` | Vaidyanathan S et al., Pharmacokinetics of the oral direct ren…, Journal of clinical pharmac… (2008) | pgx | 7 | [10.1177/0091270008323258](https://doi.org/10.1177/0091270008323258) | [18784280](https://www.ncbi.nlm.nih.gov/pubmed/18784280) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:50:52.652112+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Buczko_2008 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and pharmacodynamics of aliskiren in healthy subjects but does not report any effects of gene variants or genotypes. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper reviews food-drug interactions (fruit juices) and does not report pharmacogenomic effects (gene variants) on aliskiren PK/PD. |
| popPK | Hong_2008 | relevant | 9 | 2 | The study reports a two-compartment PK model for aliskiren in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Loganathan_2021 | not_relevant | 2 | 5 | The paper is a computational docking study reporting binding affinity scores, not experimental pharmacokinetic or pharmacodynamic parameters. |
| popPK | Maser_2013 | irrelevant | 0 | 0 | The study is a clinical trial assessing cardiovascular autonomic function and does not report pharmacokinetic parameters for aliskiren. |
| PGx | Methaneethorn_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic interactions with fruit juices, not pharmacogenomic effects based on gene variants. |
| PGx | Rebello_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (verapamil) affecting aliskiren PK, not a pharmacogenomic effect based on gene variants. |
| popPK | Reboldi_2011 | irrelevant | 2 | 0 | The paper is a review summarizing pharmacokinetic properties but does not provide original quantitative disposition parameters or numeric values in the evidence. |
| PGx | Suominen_2025 | not_relevant | 2 | 5 | The study reports in vitro transporter activity changes for aliskiren, not in vivo pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tapaninen_2010 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampicin) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Tapaninen_2010_3 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (grapefruit juice) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Tapaninen_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (itraconazole) affecting aliskiren PK/PD, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Tsukimoto_2015 | not_relevant | 0 | 0 | The study investigates the effect of P-glycoprotein knockout (animal model) and P-gp inhibitors (drug-drug interaction) on aliskiren PK, not the effect of human genetic variants (pharmacogenomics). |
| PGx | Vaidyanathan_2008 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with P-gp/CYP3A4 modulators, not the effect of a specific gene variant or genotype on aliskiren pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
