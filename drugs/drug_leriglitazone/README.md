<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;leriglitazone&quot;}]"></div>

# leriglitazone

- **generic name:** leriglitazone
- **ATC codes:** `A16AX23`
- **DrugBank:** [DB15021](https://go.drugbank.com/drugs/DB15021) · **PubChem:** not captured
- **molar mass:** 372.438 g/mol (C19H20N2O4S) — DrugBank
- **groups:** investigational

## About

Leriglitazone was investigated as a treatment for adrenoleukodystrophy. It remains investigational; a marketing application in the European Union was refused, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27156475](https://www.wikidata.org/wiki/Q27156475) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:16 | 0:27 | 0/0/0 | 0/0/0 | 0/0/0 | 9,973/556 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=leriglitazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PPARG (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Albassam_2015.pdf` | Albassam AA et al., Inhibitory effect of six herbal extract…, Xenobiotica; the fate of fo… (2015) | pd | 4 | [10.3109/00498254.2014.989935](https://doi.org/10.3109/00498254.2014.989935) | [25430798](https://www.ncbi.nlm.nih.gov/pubmed/25430798) | metadata signals extractable PD data (IC50) |
| `Albassam_2019.pdf` | Albassam AA et al., Effect of pterostilbene on in vitro dru…, Saudi pharmaceutical journa… (2019) | pgx | 7 | [10.1016/j.jsps.2019.01.001](https://doi.org/10.1016/j.jsps.2019.01.001) | [30976185](https://www.ncbi.nlm.nih.gov/pubmed/30976185) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Traver_2024.pdf` | Traver E et al., Clinical pharmacokinetics of leriglitaz…, CPT: pharmacometrics & syst… (2024) | pgx | 7 | [10.1002/psp4.13132](https://doi.org/10.1002/psp4.13132) | [38549500](https://www.ncbi.nlm.nih.gov/pubmed/38549500) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-05T11:16:25.994784+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albassam_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2C8 inhibition by herbal extracts and does not report pharmacokinetic parameters for leriglitazone. |
| PD | Albassam_2015 | not_relevant | 0 | 0 | The paper reports in vitro CYP2C8 inhibition by herbal extracts, not a pharmacodynamic or exposure-response relationship for leriglitazone. |
| popPK | Albassam_2019 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Albassam_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of pterostilbene on in vitro drug metabolizing enzyme activity and does not report any pharmacodynamic or exposure-response data for leriglitazone. |
| PGx | Albassam_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of pterostilbene on enzyme activity and does not mention leriglitazone or pharmacogenomic effects. |
| popPK | Almeida_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pioglitazone, not leriglitazone. |
| PGx | Cavestro_2026 | not_relevant | 0 | 0 | The paper reports the therapeutic efficacy of leriglitazone in a mouse model of CoPAN, not a pharmacogenomic effect on PK or PD parameters. |
| popPK | Chinnalalaiah_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pioglitazone, not leriglitazone. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metoprolol in beagle dogs, not leriglitazone. |
| popPK | Patel_2011 | irrelevant | 0 | 0 | The study investigates saxagliptin and its interactions with metformin, glyburide, and pioglitazone; leriglitazone is not mentioned or studied. |
| PD | Patel_2011 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic interactions of saxagliptin with other drugs and does not report any pharmacodynamic or exposure-response data for leriglitazone. |
| popPK | Rodríguez-Pascau_2021 | irrelevant | 0 | 0 | The paper is a mechanistic and preclinical study focusing on neuroprotective effects and target engagement, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Traver_2024 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| PGx | Traver_2024 | not_relevant | 0 | 0 | The paper focuses on pediatric pharmacokinetics and PBPK modeling for dose selection, with no mention of gene variants or pharmacogenomic effects. |
| popPK | Vaidyanathan_2008 | irrelevant | 0 | 0 | The study investigates aliskiren, metformin, pioglitazone, and fenofibrate; leriglitazone is not mentioned or studied. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
