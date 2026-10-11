<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belinostat&quot;}]"></div>

# belinostat

- **generic name:** belinostat
- **ATC codes:** `L01XH04`
- **DrugBank:** [DB05015](https://go.drugbank.com/drugs/DB05015) · **PubChem:** [CID 6918638](https://pubchem.ncbi.nlm.nih.gov/compound/6918638)
- **molar mass:** 318.35 g/mol (C15H14N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Belinostat is a histone deacetylase inhibitor used as an anticancer medicine, mainly for treating peripheral T-cell lymphoma. It is an approved drug used in cancer care, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4882925](https://www.wikidata.org/wiki/Q4882925) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:23 | 0:29 | 0/0/0 | 0/0/0 | 0/0/0 | 14,672/506 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=belinostat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dunn_2024.pdf` | Dunn A et al., The effect of liver dysfunction on the…, Cancer chemotherapy and pha… (2024) | popPK | 10 | [10.1007/s00280-024-04651-x](https://doi.org/10.1007/s00280-024-04651-x) | [38483557](https://pubmed.ncbi.nlm.nih.gov/38483557) | The paper describes a population PK model for belinostat and reports specific percentage reductions in clearance, but the absolute numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Peer_2016.pdf` | Peer CJ et al., UGT1A1 genotype-dependent dose adjustme…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.627](https://doi.org/10.1002/jcph.627) | [26637161](https://pubmed.ncbi.nlm.nih.gov/26637161) | The paper describes a population PK model for belinostat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T23:23:46.616556+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2017 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics (Km, Vmax) for glucuronidation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dunn_2024 | relevant | 10 | 2 | The paper describes a population PK model for belinostat and reports specific percentage reductions in clearance, but the absolute numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Goey_2016_2 | irrelevant | 2 | 0 | This is a review article discussing UGT1A1 genotyping and its impact on belinostat pharmacokinetics, but it does not report original quantitative PK parameter values (CL, V, etc.) for belinostat. |
| popPK | Peer_2016 | relevant | 10 | 0 | The paper describes a population PK model for belinostat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Peer_2018 | relevant | 8 | 2 | The paper describes a population PK/PD model for belinostat in humans, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided text, likely residing in the referenced Table 1 or supplementary materials. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The study is a mechanistic/cell-based screening assay for SIRT1 up-regulation and does not report pharmacokinetic parameters for belinostat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
