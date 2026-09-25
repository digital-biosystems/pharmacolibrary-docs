<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;diphemanil&quot;}]"></div>

# diphemanil

- **generic name:** diphemanil
- **ATC codes:** `A03AB15`, `A03CA08`
- **DrugBank:** [DB13720](https://go.drugbank.com/drugs/DB13720)
- **groups:** approved, vet_approved, withdrawn

## About

**Indication.** Used in the treatment of peptic ulcer, gastric hyperacidity, and hypermotility in gastritis and pylorospasm, and in the treatment of hyperhidrosis (excessive perspiration).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 08:54 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 29,368/1,035 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diphemanil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Poorly absorbed from the gastrointestinal tract with an absolute bioavailability of 15 to…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (modulator), CHRM3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chéron_1994.pdf` | Chéron G et al., [Pharmacokinetics of diphemanil methyls…, Archives de pediatrie : org… (1994) | popPK | 9 | not captured | [8087216](https://pubmed.ncbi.nlm.nih.gov/8087216) | The study reports quantitative pharmacokinetic parameters (half-life, renal clearance, Tmax) for diphemanil in infants, with specific numeric values provided in the text. |
| `Vidal_1992.pdf` | Vidal AM et al., Pharmacokinetics of diphemanil methylsu…, European journal of clinica… (1992) | popPK | 8 | [10.1007/BF00265939](https://doi.org/10.1007/BF00265939) | [1623915](https://pubmed.ncbi.nlm.nih.gov/1623915) | The study reports quantitative PK parameters (tmax, half-life, urinary recovery) for diphemanil in humans, but lacks specific values for clearance (CL) or volume of distribution (V). |
| `Vidal_1993.pdf` | Vidal AM et al., Pharmacokinetics of diphemanil methylsu…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00315356](https://doi.org/10.1007/BF00315356) | [8405036](https://pubmed.ncbi.nlm.nih.gov/8405036) | The study reports quantitative PK parameters (half-life, residence time) for diphemanil in infants, but specific values for clearance, volume, or intercompartmental clearance are not explicitly listed in the provided text. |

<sub>queue written 2026-09-18T08:54:02.102521+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guérois_1997 | irrelevant | 0 | 0 | The paper is a clinical case report regarding adverse cardiac effects (heart block) in premature infants and does not report any pharmacokinetic parameters for diphemanil. |
| PD | Guérois_1997 | not_relevant | 1 | 0 | The paper is a case report describing a clinical observation (temporal association between feeding withdrawal and heart block) without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Pariente-Khayat_1996 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Vidal_1993 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life, residence time) for diphemanil in infants, but specific values for clearance, volume, or intercompartmental clearance are not explicitly listed in the provided text. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational tool (PathFX) for drug safety and efficacy pathway analysis and does not report any pharmacokinetic parameters for diphemanil. |
| PD | Wilson_2018 | not_relevant | 0 | 0 | The paper describes a computational method (PathFX) for identifying drug-disease associations via protein interaction networks and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for diphemanil or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
