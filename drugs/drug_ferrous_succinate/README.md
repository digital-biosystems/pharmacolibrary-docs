<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous succinate&quot;}]"></div>

# ferrous succinate

- **generic name:** ferrous succinate
- **ATC codes:** `B03AA06`
- **DrugBank:** [DB14489](https://go.drugbank.com/drugs/DB14489) · **PubChem:** [CID 159252](https://pubchem.ncbi.nlm.nih.gov/compound/159252)
- **molar mass:** 171.917 g/mol (C4H4FeO4) — DrugBank
- **groups:** approved, investigational

## About

Ferrous succinate is an oral iron preparation (a hematinic) used to treat iron deficiency anemia. It is an approved oral bivalent iron medicine, though not widely used compared with other iron salts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27269230](https://www.wikidata.org/wiki/Q27269230) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:11 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 16,027/626 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ferrous_succinate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AHSP (unknown), CP (unknown), EGLN1 (unknown), FEN1 (unknown), FTH1 (unknown), FXN (unknown), HBA1 (unknown), HDAC8 (unknown), NEIL1 (unknown), NEIL2 (unknown), POLB (unknown), TF (unknown), TFRC (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2011.pdf` | Cao GY et al., Comparative bioavailability of ferrous…, Clinical therapeutics (2011) | popPK | 8 | [10.1016/j.clinthera.2011.10.028](https://doi.org/10.1016/j.clinthera.2011.10.028) | [22129567](https://pubmed.ncbi.nlm.nih.gov/22129567) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Tmax) for ferrous succinate in humans, although it is a bioequivalence study rather than a compartmental population PK model. |

<sub>queue written 2026-10-05T20:11:46.776330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feng_2024 | irrelevant | 0 | 0 | The paper is a review of novel iron saccharide-iron (III) complexes and does not report original quantitative pharmacokinetic parameters for ferrous succinate. |
| popPK | Hurrell_1989 | irrelevant | 2 | 0 | The study reports relative iron absorption percentages (bioavailability) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ferrous succinate. |
| popPK | Jiao_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not ferrous_succinate. |
| PD | Jiao_2009 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of sirolimus, not pharmacodynamics (PD) or exposure-response relationships for ferrous succinate. |
| popPK | Yan_2025 | irrelevant | 2 | 0 | Ferrous succinate is used only as a control/comparator for polysaccharide-iron complexes, and no quantitative PK parameters (CL, V, etc.) for ferrous succinate are reported in the evidence. |
| popPK | Zhu_2017 | irrelevant | 0 | 0 | The study focuses on the bioavailability of a collagen-iron complex, using ferrous succinate only as a comparator, and does not report pharmacokinetic parameters for ferrous succinate. |
| popPK | Zillessen_1977 | irrelevant | 2 | 0 | The study measures iron absorption rates (bioavailability) rather than reporting compartmental pharmacokinetic parameters like clearance, volume of distribution, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
