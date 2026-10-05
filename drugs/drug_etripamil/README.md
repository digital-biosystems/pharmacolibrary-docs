<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08D&quot;,&quot;href&quot;:&quot;atc/C08D.md&quot;},{&quot;label&quot;:&quot;etripamil&quot;}]"></div>

# etripamil

- **generic name:** etripamil
- **ATC codes:** `C08DA03`
- **DrugBank:** [DB12605](https://go.drugbank.com/drugs/DB12605) · **PubChem:** [CID 91824132](https://pubchem.ncbi.nlm.nih.gov/compound/91824132)
- **molar mass:** 452.595 g/mol (C27H36N2O4) — DrugBank
- **groups:** approved, investigational

## About

Etripamil is a phenylalkylamine calcium channel blocker, a drug class used for heart conditions. It is not yet an established treatment; it is listed as investigational and has no European Union authorisation recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27289030](https://www.wikidata.org/wiki/Q27289030) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:29 | 2:37 | 0/0/0 | 0/0/0 | 0/0/0 | 1,436/152 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etripamil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ascah_2025.pdf` | Ascah A et al., Cardiovascular and Pharmacokinetic Prof…, International journal of to… (2025) | popPK | 8 | [10.1177/10915818251327963](https://doi.org/10.1177/10915818251327963) | [40166953](https://pubmed.ncbi.nlm.nih.gov/40166953) | The study reports quantitative PK parameters (AUC, Cmax, half-life) for etripamil in cynomolgus monkeys, though specific clearance and volume values are not explicitly listed in the text. |
| `Ip_2024.pdf` | Ip JE et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology in dr… (2024) | popPK | 8 | [10.1002/cpdd.1383](https://doi.org/10.1002/cpdd.1383) | [38315144](https://pubmed.ncbi.nlm.nih.gov/38315144) | The paper reports PK parameters for etripamil, but the evidence only provides qualitative descriptions and a range for half-life, lacking specific numeric values for clearance, volume, or absorption rate constants. |

<sub>queue written 2026-09-29T18:29:23.886795+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ip_2024 | relevant | 8 | 2 | The paper reports PK parameters for etripamil, but the evidence only provides qualitative descriptions and a range for half-life, lacking specific numeric values for clearance, volume, or absorption rate constants. |
| popPK | Stambler_2022 | irrelevant | 2 | 0 | The paper is a clinical trial protocol/summary for etripamil efficacy in PSVT and lacks quantitative pharmacokinetic parameters (CL, V, Q, ka) or compartmental models. |
| PD | Stambler_2022 | not_relevant | 0 | 0 | The paper is a study design protocol for a Phase 3 clinical trial and does not report any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
