<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;benoxaprofen&quot;}]"></div>

# benoxaprofen

- **generic name:** benoxaprofen
- **ATC codes:** `M01AE06`
- **DrugBank:** [DB04812](https://go.drugbank.com/drugs/DB04812) · **PubChem:** [CID 39941](https://pubchem.ncbi.nlm.nih.gov/compound/39941)
- **molar mass:** 301.724 g/mol (C16H12ClNO3) — DrugBank
- **groups:** approved, withdrawn

## About

Benoxaprofen is a non-steroidal anti-inflammatory drug of the propionic acid type that was used to treat inflammatory and rheumatic conditions, and also had antipsoriatic use. It was withdrawn from the market after being linked to serious, sometimes fatal liver and kidney side effects, especially in elderly patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420082](https://www.wikidata.org/wiki/Q420082) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:42 | 3:27 | 0/1/0 | 0/0/0 | 0/0/0 | 79,001/1,303 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chatfield_1977_reference](drugs/drug_benoxaprofen/Benoxaprofen_Chatfield1977_reference.md) | — | 1-compartment (no model) | 0 | Chatfield DH et al., Pharmacokinetic studies with benoxaprof…, British journal of clinical… (1977) | [10.1111/j.1365-2125.1977.tb00789.x](https://doi.org/10.1111/j.1365-2125.1977.tb00789.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benoxaprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACAT1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chatfield_1977.pdf` | Chatfield DH et al., Pharmacokinetic studies with benoxaprof…, British journal of clinical… (1977) | popPK | 10 | [10.1111/j.1365-2125.1977.tb00789.x](https://doi.org/10.1111/j.1365-2125.1977.tb00789.x) | [303114](https://pubmed.ncbi.nlm.nih.gov/303114) | The evidence contains specific quantitative parameters for benoxaprofen in humans, including half-lives and volumes of distribution, derived from a two-compartment model. |
| `Boctor_1986.pdf` | Boctor AM et al., Meclofenamate sodium is an inhibitor of…, Prostaglandins, leukotriene… (1986) | pd | 4 | [10.1016/0262-1746(86)90190-3](https://doi.org/10.1016/0262-1746(86)90190-3) | [3020588](https://www.ncbi.nlm.nih.gov/pubmed/3020588) | metadata signals extractable PD data (IC50) |
| `Katayama_1987.pdf` | Katayama K et al., In vitro effect of N-methoxy-3-(3,5-dit…, Agents and actions (1987) | pd | 4 | [10.1007/BF01966487](https://doi.org/10.1007/BF01966487) | [2825479](https://www.ncbi.nlm.nih.gov/pubmed/2825479) | metadata signals extractable PD data (IC50) |
| `Miyazawa_1985.pdf` | Miyazawa K et al., Effects of some non-steroidal anti-infl…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.38.199](https://doi.org/10.1254/jjp.38.199) | [3928952](https://www.ncbi.nlm.nih.gov/pubmed/3928952) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T00:42:20.703204+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Schladitz-Keil_1986 | irrelevant | 0 | 0 | The study is about trospium chloride, and benoxaprofen is only mentioned as a derivatization reagent for the assay. |
| PGx | Southwood_2007 | not_relevant | 0 | 0 | The paper investigates the genotoxicity mechanism of acyl glucuronides in HEK293 cells and does not report a pharmacogenomic effect (gene variant influence) on a specific PK or PD parameter for benoxaprofen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:42 UTC</sub>
