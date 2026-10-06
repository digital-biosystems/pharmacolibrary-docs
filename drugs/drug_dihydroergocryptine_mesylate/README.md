<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;dihydroergocryptine mesylate&quot;}]"></div>

# dihydroergocryptine mesylate

- **generic name:** dihydroergocryptine mesylate
- **ATC codes:** `N04BC03`
- **DrugBank:** [DB13385](https://go.drugbank.com/drugs/DB13385) · **PubChem:** not captured
- **groups:** investigational

## About

Dihydroergocryptine mesylate is a dopamine agonist that has been used to treat Parkinson's disease. It is considered investigational and is not an approved medicine in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:59 | 0:43 | 0/0/0 | 0/1/0 | 0/0/0 | 21,604/1,215 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Costa_1993_3H_DHE_specific_binding](drugs/drug_dihydroergocryptine_mesylate/pd_Costa_1993_3H_DHE_specific_binding.md) | Tritiated-dihydroergocryptine (3H-DHE) specific binding to adrenergic receptors on isolated smooth muscle cells ← tritiated-dihydroergocryptine (3H-DHE) · inhibition effect | — | Costa P et al., Adrenergic receptors on smooth muscle c…, The Journal of urology (1993) | [10.1016/s0022-5347(17)35633-1](https://doi.org/10.1016/s0022-5347(17)35633-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dihydroergocryptine_mesylate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2B (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Williams_1981.pdf` | Williams RS et al., Subtype specificity of alpha-adrenergic…, Journal of cardiovascular p… (1981) | pd | 4 | [10.1097/00005344-198105000-00011](https://doi.org/10.1097/00005344-198105000-00011) | [6168833](https://www.ncbi.nlm.nih.gov/pubmed/6168833) | metadata signals extractable PD data (EC50) |
| `de_2001.pdf` | de Mey C et al., Erythromycin increases plasma concentra…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.117286](https://doi.org/10.1067/mcp.2001.117286) | [11503008](https://www.ncbi.nlm.nih.gov/pubmed/11503008) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T12:59:51.055688+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Althaus_2000 | not_relevant | 3 | 5 | In vitro enzyme identification (CYP3A4 mediates DHEC metabolism) without any gene variant/genotype effect on a PK or PD parameter. |
| popPK | Anderson_1988 | irrelevant | 0 | 0 | Dihydroergocryptine is only used as a radioligand ([3H]DHE) for alpha adrenoceptor binding assays; no PK parameters for the drug are reported. |
| popPK | Costa_1993 | irrelevant | 0 | 0 | Dihydroergocryptine is used only as a radiolabeled binding probe in an in-vitro receptor study, with no PK parameters for the drug. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | Dihydroergocryptine is only a radioligand ([3H]dihydroergocryptine) for alpha-adrenoceptor binding assays; no PK parameters for it are reported. |
| popPK | Mohell_1983 | irrelevant | 0 | 0 | In vitro receptor binding study where dihydroergocryptine is only a displacing ligand; no PK parameters for it. |
| popPK | Motulsky_1982 | irrelevant | 0 | 0 | This is an in vitro radioligand receptor-binding study using [3H]DHE as a probe, not a pharmacokinetic study with disposition parameters. |
| popPK | Williams_1981 | irrelevant | 0 | 0 | Dihydroergocryptine is used only as a radioligand binding probe in vitro, not as a drug with PK disposition parameters. |
| PGx | de_2001 | not_relevant | 0 | 0 | This is a drug–drug interaction study (erythromycin/CYP3A4 inhibition), not a pharmacogenomic effect of a gene variant/genotype/phenotype on DHEC PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
