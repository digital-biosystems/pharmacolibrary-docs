<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;flunoxaprofen&quot;}]"></div>

# flunoxaprofen

- **generic name:** flunoxaprofen
- **ATC codes:** `G02CC04`, `M01AE15`
- **DrugBank:** [DB13317](https://go.drugbank.com/drugs/DB13317) · **PubChem:** not captured
- **molar mass:** 285.274 g/mol (C16H12FNO3) — DrugBank
- **groups:** experimental

## About

Flunoxaprofen is a non-steroidal anti-inflammatory drug of the propionic acid type, used against inflammatory and rheumatic conditions and, in a vaginal formulation, as a gynecological anti-inflammatory product. It is not an established marketed medicine in major databases, where it appears only as an experimental compound, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3746837](https://www.wikidata.org/wiki/Q3746837) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flunoxaprofen | parent | 285.274 | C16H12FNO3 | DrugBank | — | Segre_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:09 | 0:58 | 0/1/0 | 0/0/0 | 0/0/0 | 20,143/1,571 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Segre_1987_reference](drugs/drug_flunoxaprofen/Flunoxaprofen_Segre1987_reference.md) | — | 1-compartment (no model) | 3 | Segre G et al., Flunoxaprofen pharmacokinetics in elder…, International journal of cl… (1987) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Palatini_1988.pdf` | Palatini P et al., Stereospecific disposition of flunoxapr…, International journal of cl… (1988) | popPK | 10 | not captured | [3403103](https://pubmed.ncbi.nlm.nih.gov/3403103) | The study is a pharmacokinetic investigation of flunoxaprofen in humans, but the provided text contains only qualitative comparisons (e.g., "significantly lower") without specific numeric values for clearance, volume, or half-life. |
| `Segre_1987.pdf` | Segre G et al., Flunoxaprofen pharmacokinetics in elder…, International journal of cl… (1987) | popPK | 10 | not captured | [3596866](https://pubmed.ncbi.nlm.nih.gov/3596866) | The abstract reports quantitative PK parameters including mean half-life (7.9 h), mean residence time (12.81 h), and peak plasma concentration for flunoxaprofen in humans. |
| `Segre_1988.pdf` | Segre G et al., Pharmacokinetics of flunoxaprofen in ra…, Journal of pharmaceutical s… (1988) | popPK | 10 | [10.1002/jps.2600770806](https://doi.org/10.1002/jps.2600770806) | [3210155](https://pubmed.ncbi.nlm.nih.gov/3210155) | The study reports quantitative pharmacokinetic parameters (CL, Vd, t1/2) for flunoxaprofen in rats, dogs, and monkeys, with all numeric values explicitly provided in the abstract text. |
| `Bareggi_1988.pdf` | Bareggi SR et al., Pharmacokinetic study in man with the n…, Arzneimittel-Forschung (1988) | popPK | 9 | not captured | [3401272](https://pubmed.ncbi.nlm.nih.gov/3401272) | The paper is a relevant PK study of flunoxaprofen in humans, but specific numeric values for CL, V, or half-life are not provided in the extracted text (only qualitative comparisons to literature or absence of data). |
| `Iwakawa_1991.pdf` | Iwakawa S et al., Stereoselective disposition of carprofe…, Drug metabolism and disposi… (1991) | popPK | 7 | not captured | [1686227](https://pubmed.ncbi.nlm.nih.gov/1686227) | The paper is a PK study of flunoxaprofen in rats that reports qualitative trends in clearance and volume of distribution but lacks specific numeric parameter values for flunoxaprofen in the provided evidence (only an inversion ratio is given). |

<sub>queue written 2026-10-07T08:09:12.219018+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bareggi_1988 | relevant | 9 | 2 | The paper is a relevant PK study of flunoxaprofen in humans, but specific numeric values for CL, V, or half-life are not provided in the extracted text (only qualitative comparisons to literature or absence of data). |
| popPK | Iwakawa_1991 | relevant | 7 | 2 | The paper is a PK study of flunoxaprofen in rats that reports qualitative trends in clearance and volume of distribution but lacks specific numeric parameter values for flunoxaprofen in the provided evidence (only an inversion ratio is given). |
| popPK | Liebmann_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciclotropium, using flunoxaprofen only as the source of a chiral coupling reagent (S-FLOPA) for analysis. |
| popPK | Palatini_1988 | relevant | 10 | 2 | The study is a pharmacokinetic investigation of flunoxaprofen in humans, but the provided text contains only qualitative comparisons (e.g., "significantly lower") without specific numeric values for clearance, volume, or half-life. |
| popPK | Pedrazzini_1988 | irrelevant | 2 | 0 | The study reports only qualitative serum concentration observations (peak levels and time points) and enantiomeric transformation descriptions, but lacks specific quantitative PK parameters (CL, V, t1/2, Ka) for the drug in the provided evidence. |
| popPK | Spahn-Langguth_1991 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of propranolol, using flunoxaprofen derivatives only as chiral reagents for the assay. |
| popPK | Spahn-Langguth_1991_2 | irrelevant | 0 | 0 | The study is an analytical method development for propranolol using a derivative of flunoxaprofen, not a pharmacokinetic study of flunoxaprofen. |
| popPK | Volland_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fenoprofen, using flunoxaprofen only as an internal standard for the HPLC assay. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:09 UTC</sub>
