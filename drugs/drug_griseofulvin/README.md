<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;griseofulvin&quot;}]"></div>

# griseofulvin

- **generic name:** griseofulvin
- **ATC codes:** `D01AA08`, `D01BA01`
- **DrugBank:** [DB00400](https://go.drugbank.com/drugs/DB00400) · **PubChem:** [CID 441140](https://pubchem.ncbi.nlm.nih.gov/compound/441140)
- **molar mass:** 352.766 g/mol (C17H17ClO6) — DrugBank
- **groups:** approved, vet_approved

## About

Griseofulvin is an antifungal medication used to treat fungal skin infections such as dermatophytosis, ringworm, and athlete's foot. It is an approved medicine, including for veterinary use, and is listed among essential medicines, available both topically and by mouth for skin fungal infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416096](https://www.wikidata.org/wiki/Q416096) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:21 | 1:29 | 0/1/0 | 0/0/0 | 0/0/0 | 22,424/2,319 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Schäfer-Korting_1987_reference](drugs/drug_griseofulvin/Griseofulvin_SchferKorting1987_reference.md) | — | 1-compartment (no model) | 0 | Schäfer-Korting M, Pharmacokinetics of griseofulvin in blo…, Drug metabolism and disposi… (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=griseofulvin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inducer, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: KRT12 (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bates_1975.pdf` | Bates TR et al., Apparent absorption kinetics of microni…, Journal of pharmaceutical s… (1975) | popPK | 9 | [10.1002/jps.2600640910](https://doi.org/10.1002/jps.2600640910) | [1185560](https://pubmed.ncbi.nlm.nih.gov/1185560) | The study reports quantitative PK parameters (one-compartment model, zero-order absorption) for griseofulvin in rats, but no specific numeric values (CL, V, ka, etc.) are present in the provided evidence. |
| `Schäfer-Korting_1987.pdf` | Schäfer-Korting M, Pharmacokinetics of griseofulvin in blo…, Drug metabolism and disposi… (1987) | popPK | 9 | not captured | [2886314](https://pubmed.ncbi.nlm.nih.gov/2886314) | The study reports quantitative PK parameters (half-lives, Cmax) for griseofulvin in rats, though specific clearance and volume values are not explicitly listed in the text. |

<sub>queue written 2026-10-07T13:20:08.705363+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailly_2026 | irrelevant | 0 | 0 | The paper is a review of antifungal mechanisms of action in plants and does not report pharmacokinetic parameters for griseofulvin. |
| popPK | Bates_1975 | relevant | 9 | 0 | The study reports quantitative PK parameters (one-compartment model, zero-order absorption) for griseofulvin in rats, but no specific numeric values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Ríos-Santamarina_1998 | irrelevant | 0 | 0 | The paper reports in vitro bronchodilator activity (relaxation percentages) of griseofulvin, not pharmacokinetic parameters. |
| popPK | Sato_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding griseofulvin pharmacokinetics. |
| popPK | Wang_2010 | irrelevant | 0 | 0 | The paper is a natural product isolation and identification study reporting antifungal activity (EC50) of griseofulvin, not a pharmacokinetic study. |
| popPK | Wazir_2014 | irrelevant | 0 | 0 | The study evaluates antibacterial, antifungal, and antioxidant activities of plant extracts, using griseofulvin only as a standard comparator for antifungal screening, with no pharmacokinetic data reported. |
| popPK | Zimmerman_1983 | irrelevant | 2 | 0 | The paper is a methodological study on fitting algorithms using griseofulvin as a test case, but no specific numeric PK parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:20 UTC</sub>
