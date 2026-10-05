<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;dihydroergocristine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dihydroergocristine_Grognet1992_reference&quot;,&quot;label&quot;:&quot;Grognet_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dihydroergocristine

- **generic name:** dihydroergocristine
- **ATC codes:** `C04AE04`
- **DrugBank:** [DB13345](https://go.drugbank.com/drugs/DB13345) · **PubChem:** not captured
- **molar mass:** 611.743 g/mol (C35H41N5O5) — DrugBank
- **groups:** approved

## About

Dihydroergocristine is a vasodilator ergot alkaloid used in the treatment of dementia. It is an approved drug, classified as a peripheral vasodilator, but does not appear to have centralised European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276428](https://www.wikidata.org/wiki/Q5276428) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dihydroergocristine | parent | 611.743 | C35H41N5O5 | DrugBank | — | Grognet_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 14:54 | 3:30 | 1/0/0 | 0/0/0 | 0/0/0 | 11,808/4,282 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Grognet_1992_reference](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Grognet JM et al., [The pharmacokinetics of dihydroergocri…, Arzneimittel-Forschung (1992) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dihydroergocristine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2C (modulator), ADRB1 (target), DRD1 (target), HTR1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grognet_1992.pdf` | Grognet JM et al., [The pharmacokinetics of dihydroergocri…, Arzneimittel-Forschung (1992) | popPK | 10 | not captured | [1492859](https://pubmed.ncbi.nlm.nih.gov/1492859) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for dihydroergocristine in rats, and all numeric values are explicitly present in the provided text. |
| `Gardner_1997.pdf` | Gardner BR et al., Agonist action at D2(short) dopamine re…, Journal of neurochemistry (1997) | pd | 4 | [10.1046/j.1471-4159.1997.69062589.x](https://doi.org/10.1046/j.1471-4159.1997.69062589.x) | [9375693](https://www.ncbi.nlm.nih.gov/pubmed/9375693) | metadata signals extractable PD data (EC50) |
| `Gardner_1998.pdf` | Gardner B et al., Agonist action at D2(long) dopamine rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701926](https://doi.org/10.1038/sj.bjp.0701926) | [9692784](https://www.ncbi.nlm.nih.gov/pubmed/9692784) | metadata signals extractable PD data (EC50) |
| `Markstein_1982.pdf` | Markstein R, Dopamine receptor profile of co-dergocr…, European journal of pharmac… (1982) | pd | 4 | [10.1016/0014-2999(82)90312-0](https://doi.org/10.1016/0014-2999(82)90312-0) | [6297930](https://www.ncbi.nlm.nih.gov/pubmed/6297930) | metadata signals extractable PD data (EC50) |
| `de_2001.pdf` | de Mey C et al., Erythromycin increases plasma concentra…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.117286](https://doi.org/10.1067/mcp.2001.117286) | [11503008](https://www.ncbi.nlm.nih.gov/pubmed/11503008) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-28T14:53:08.021469+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Althaus_2000 | not_relevant | 0 | 0 | The paper identifies the metabolic enzyme (CYP3A4) for alpha-dihydroergocryptine in vitro but does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Gardner_1997 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Gardner_1997 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of dopamine receptors and does not report any pharmacokinetic or pharmacodynamic data for dihydroergocristine. |
| popPK | Gardner_1998 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Gardner_1998 | not_relevant | 0 | 0 | The paper focuses on ligand binding and functional assays for D2 receptors and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for dihydroergocristine. |
| popPK | Markstein_1982 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| PD | Markstein_1982 | not_relevant | 0 | 0 | The paper describes the dopamine receptor binding profile (affinity/selectivity) of co-dergocrine and its components, which is a pharmacological characterization, not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters like Emax or EC50 in a physiological context. |
| PGx | de_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (erythromycin) affecting the PK of alpha-dihydroergocryptine, not a pharmacogenomic effect (gene variant) on dihydroergocristine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 14:53 UTC</sub>
